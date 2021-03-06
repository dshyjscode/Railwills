// JavaScript Document
/**
  * cookies操作
*/
$.cookie.json=true;
//定时执行函数

/*setTimeout(function (){
　　//processing
　　setTimeout(arguments.callee, interval);
}, interval); */

////声明后台通信变量Background communication
var BgCom={
	one_FH:'AB',              ///回执帧头
	one_FT:'AC',              ///回执帧尾
	
	SPlanReceipt_type:"81" ,     //阶段计回执划类型
	funNumReceipt:'04',
	send:"10",
	td_rec:"01",
	recTime:{
		year:null,
		month:null,
		day:null,
		hour:null,
		minute:null,
		sec:null
	},
	
	
	
	//车务终端给联锁的列车计划	
	SMTtoCBI_type:"8F",
	funNumCBI:null,
	
	cbi_rec:"16",
	orderNum:null,
	car:null,
	routeNum:null,       //进路信息,数字 
	trigger_mode:null ,  //触发方式
    rs_time:null,
	rs_type:null

	
}
var json={
    k:0,
    
    
    plan:{},
    
    
    
    
    td_Plan:[],  //列调下达的阶段计划json数据
    ad_Plan:null,  //助调下发的阶段计划json数据
    recJson:{},  //阶段计划回执json数据
    sendCBI:{},  //车务终端发送给联锁的JSON数据
    
    //等待发送的进路信息
    td_PlanWait:[],     //列调下达的阶段计划json数据
    routeAllNum:[],    //总进路信息
    //等待发送的助调信息
    ad_PlanWait:[]
}
//阶段计划回执数据帧编码
//每一位信息  帧头、类型、功能码、发送方、接收方、命令序号、下达时间、回执时间、值班人员姓名、车次号、上（下）一站、到站（发车）时间、到发类型、帧尾
function SPlanReceiptFrame(head,type,fun,send,rec,csn,to_tim,rec_tim,name,cnum,nsta,rs_tim,rs_type,tail){
	
	var frame=head+type+fun+send+rec+csn+to_tim+rec_tim+name+cnum+nsta+rs_tim+rs_type+tail;
	return frame
}
//进路信息数据帧编码
//每一位信息  帧头、类型、功能码、发送方、接收方、命令序号、车次号、进路始端按钮、进路终端按钮、触发方式、到发类型、帧尾
function routeFrame(head,type,fun,send,rec,csn,cnum,routeNum,tri_mode,rs_time,rs_type,tail){
	
	var frame=head+type+fun+send+rec+csn+cnum+routeNum+tri_mode+rs_time+rs_type+tail;
	return frame
}

/**cookies操作**/
function addCookie(name,SmtJson){
	
    /*  cookie值中不能含有分号、逗号和空白符 除非在添加cookie值之前使用encodeURIComponent()全局函数进行编码
          当使用了encodeURIComponent()后 那么在获取cookie值就必须使用相应的decodeURIComponent()函数 */
	/*alert(svg.stations[0]+svg.stations[1]+svg.stations[2]+svg.stations.length)*/
	//  
	$.cookie(name, SmtJson, { path: '/' });
	

}


//定时执行函数

var dsTimer_one
var dsTimer_two
var dsTimer_three
var dsTimer_four
var dsTimer_five
var dsTimer_six
function getCookie_one(){
    
	var cookieTD = $.cookie('列调');
    
    
    if(JSON.stringify(cookieTD)=="{}"||cookieTD==undefined || ObjectEqual(cookieTD)==0) {
		dsTimer_one = setTimeout(function(){
		this.getCookie_one()
		},10); 
	}
	else{
        
        $.each(cookieTD,function(k,v){
            json.plan[k]=v
        }) 
        clearTimeout(dsTimer_one) //清理定时任务
        saveJson_TD(cookieTD) 
	}
}
//检查对象是否相等
function ObjectEqual(cks){
    var x=null
    $.each(cks,function(k,v){
        if(json.plan[k]==undefined){
            x=1
            return false
        }
        else if(json.plan[k]==v){
            x=0
        }
        else if(json.plan[k]!=v){
            x=1
            return false
                
        }
    })
    return x
}
//存储获取到的列调json信息，并提取本站车务终端信息
function saveJson_TD(cks){
	var content = cks;
	//console.log(content)
	$.each(content,function(n,val){
		var recSt=val.substr(8,2)
		if(recSt=="10"){
			json.td_Plan.push(val)
			
		}
	})
	if(json.td_Plan.length!=0){
		clearTimeout(dsTimer_two)
		SPlanReceiptJson_to_TD()	
		//console.log(json.td_Plan)
	}
	else{
        addCookie("北京车务终端",null)
		dsTimer_two=setTimeout(getCookie_one,1000)
	}
}

//车务终端给列调回执json数据
function SPlanReceiptJson_to_TD(){
	var k=json.k;
	
	//回执时间
	var time = writeCurrentDate()

	BgCom.recTime=time;
	//变量
	var head=BgCom.one_FH
	var type=BgCom.SPlanReceipt_type
	var fun=BgCom.funNumReceipt
	var send=BgCom.send
	var rec=BgCom.td_rec
	//计划序号、下达时间
	json.td_Plan.forEach(function(val,n){
		var csn=val.substr(10,2)
		var to_tim=val.substr(12,14)
		var rec_tim=''+BgCom.recTime.year+BgCom.recTime.month+BgCom.recTime.date+BgCom.recTime.hour+BgCom.recTime.minute+BgCom.recTime.sec;
		var tail = BgCom.one_FT
		var recFrame=SPlanReceiptFrame(head,type,fun,send,rec,csn,to_tim,rec_tim,"","","","","",tail)
		
		json.recJson[k]=recFrame;
		//console.log(json.recJson)
		k++
	})
	json.k=k
	//发送给列调回执
	addCookie('北京车务终端回执',json.recJson)
    //清空回执变量
    json.recJson={}
    
    //存储列调计划在显示变量里
	show.td_PlanShow=json.td_Plan.slice(0)
	//清空存储列调计划的变量
	json.td_Plan.splice(0,json.td_Plan.length)
	
	//发完回执3s后继续查询列调
	dsTimer_three=setTimeout(getCookie_one,3000)
	
	//存储显示变量
	SaveShow()
	
	
	
	
}

//列调信息显示变量
var show = {
	
	td_PlanShow:[],     //列调下达的阶段计划json数据
	order:[],          //序号
	car:[],            //车次
	rs_Car:[],         //接发车
	carWhere:{},       //上下行
	carTrack:{},          //股道
	planTime:[],       //计划开行时间
	routeAll:[],       //进路信息        
    status:[],        //状态
}

//所有列车信息变量
var CarData={
    
    order:[],          //序号
	car:[],            //车次
	rs_Car:[],         //接发车
	carWhere:{},       //上下行
	carTrack:{},          //股道
	planTime:[],       //计划开行时间
	routeAll:[],       //进路信息        
    status:[],        //状态  
}


//存储显示变量
function SaveShow(){
	show.td_PlanShow.forEach(function(val,n){
		var order=val.substr(10,2)
		show.order.push(order)
		var car = val.substr(26,4)
		show.car.push(car)
		show.rs_Car.push(val.substr(4,2))
		show.planTime.push(val.substr(32,4))
		show.status.push("未触发")
		if(val.substr(4,2)=="01"){
			if(parseInt(val.substr(8,2))<parseInt(val.substr(30,2))){
				show.carWhere[car]="up"
			}
			else{
				show.carWhere[car]="down"
			}	
		}
		else{
			if(parseInt(val.substr(8,2))<parseInt(val.substr(30,2))){
				show.carWhere[car]="down"
			}
			else{
				show.carWhere[car]="up"
			}	
		}		
	})
	//股道排列
	Arrange()
	
	
	//将计划显示在车务终端的界面上	
	SPlanShow()
}

//自律模式的股道和进路排列
function Arrange(){
	
 
    //排列股道
    
    var carTime= {}   //存储列车到站时间和发车时间
    var rsType={}     //存储到发类型
    
    var trackNumUp=2;
	var trackNumDown=1;

    var x=0
    
    
    show.car.forEach(function(val){
        carTime[val] = {}
    })
    //记录到达时间和到站状态
    show.car.forEach(function(val,n){
        
       if(show.td_PlanShow[n].substr(36,2)=="02"){
           if(show.td_PlanShow[n].substr(4,2)=="01"){
               carTime[val].end=parseInt(show.td_PlanShow[n].substr(32,4))
           }
           else if(show.td_PlanShow[n].substr(4,2)=="02"){
               carTime[val].start=parseInt(show.td_PlanShow[n].substr(32,4))
           }
           rsType[val]="到开"
           
       }
       else if(show.td_PlanShow[n].substr(36,2)=="03"){
           if(show.td_PlanShow[n].substr(4,2)=="01"){
               carTime[val].end=parseInt(show.td_PlanShow[n].substr(32,4))
           }
           else if(show.td_PlanShow[n].substr(4,2)=="02"){
               carTime[val].start=parseInt(show.td_PlanShow[n].substr(32,4))
           }
			rsType[val]="通过"
			
       }
       else if(show.td_PlanShow[n].substr(36,2)=="01"){
           carTime[val].start=parseInt(show.td_PlanShow[n].substr(32,4))
           carTime[val].end=parseInt(show.td_PlanShow[n].substr(32,4))
           
           rsType[val]="始发"
         
       }
       else{
           carTime[val].start=2500
           carTime[val].end=parseInt(show.td_PlanShow[n].substr(32,4))
           rsType[val]="终到"
       }
    })
    
    //安排股道
    function GD(KEY){
        var y=0
        $.each(carTime,function(k,v){
            
            if(KEY!=k && show.carWhere[KEY]==show.carWhere[k]){
                if(carTime[KEY].end<v.end  &&  v.end<carTime[KEY].start){ 
                    y=1  
                }  
            }
        })
        x=x+y
        $.each(carTime,function(k,v){
            if(KEY!=k && show.carWhere[KEY]==show.carWhere[k]){ 
                if(carTime[KEY].end<v.end && v.end<carTime[KEY].start){
                    
                    if (rsType[k]=="终到" || rsType[k]=="到开"){
                        GD(k)
                    } 
                }  
            }
        }) 
    }

    
    //通过列车和始发列车安排在主股道上
    $.each(carTime,function(key,val){
        
        if(rsType[key]=="通过" || rsType[key]=="始发"){
            if(show.carWhere[key]=="down"){
	    		show.carTrack[key]=trackNumDown	
	    	
	    	}
	    	else{
	    		show.carTrack[key]=trackNumUp
	    	}
        }
        else if(rsType[key]=="终到" || rsType[key]=="到开"){
            
            GD(key)
            
            if(show.carWhere[key]=="down"){
                if(x==0){
                    show.carTrack[key]=trackNumDown
                }
                else if(x==1){
                    show.carTrack[key]=trackNumDown +2
                }
                else if(x==2){
                    show.carTrack[key]=trackNumDown +4
                }
	    	}
	    	else{
	    		if(x==0){
                    show.carTrack[key]=trackNumDown
                }
                else if(x==1){
                    show.carTrack[key]=trackNumDown+2
                }
                else if(x==2){
                    show.carTrack[key]=trackNumDown+4
                }
	    	}
            x=0
 
        }
        
    })
    
    
    
    
    /* 排列股道初始版本
    //根据车次号和上下行判断股道安排
	var trackNumUp=2;
	var trackNumDown=1;
	
	
	//多车股道安排，待改
	if(Object.keys(show.carWhere).length==1){
		$.each(show.carWhere,function(key,val){
			if(val=="down"){
				show.carTrack[key]=""+trackNumDown
				trackNumDown+=2	
			
			}
			else{
				show.carTrack[key]=""+trackNumUp
				trackNumUp+=2
			}	
		})
	}
	else if(Object.keys(show.carWhere).length==2){
	
		   //前车侧线停车，后车正线通过，前车：北京南-天津南到开-济南西，后车：北京南-天津南通过-济南西,下行
		   $.each(show.carWhere,function(key,val){
			   
			   
				if(val=="down"){
					show.carTrack[key]=""+trackNumDown
					trackNumDown+=2	
			
				}
				else{
					show.carTrack[key]=""+trackNumUp
					trackNumUp+=2
				}	
		    })
		
	}*/
	
	/*//排列股道，北京南站的排列股道
	var trackNumUp=2;
	var trackNumDown=1;
	$.each(show.carWhere,function(key,val){
			if(val=="down"){
				show.carTrack[key]=""+trackNumDown
				
			
			}
			else{
				show.carTrack[key]=""+trackNumUp
				
			}	
	})
	
	//console.log(show.carTrack)*/
	
	
	//根据上下行、接发车和股道确定进路
	show.car.forEach(function(val,n){
		var routeNum = {
				start:null, //进路始端按扭
		    	end:null,   //进路终端按扭
			}
		var route ={
				startButton:null, //进路始端按扭
		    	endButton:null,   //进路终端按扭
			}
		if(show.rs_Car[n]=="01"){
			if(show.carWhere[val]=="down"){
				if(show.carTrack[val]==1){
					routeNum.start = "022"
					routeNum.end = "034"
					route.startButton = "XLA"
					route.endButton = "SILA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==2){
					routeNum.start = "023"
					routeNum.end = "035"
					route.startButton = "XFLA"
					route.endButton = "SIILA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==3){
					routeNum.start = "022"
					routeNum.end = "033"
					route.startButton = "XLA"
					route.endButton = "S3LA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==4){
					routeNum.start = "023"
					routeNum.end = "036"
					route.startButton = "XFLA"
					route.endButton = "S4LA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==5){
					routeNum.start = "022"
					routeNum.end = "032"
					route.startButton = "XLA"
					route.endButton = "S5LA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==6){
					routeNum.route.start = "023"
					routeNum.route.end = "037"
					route.startButton = "XFLA"
					route.endButton = "S6LA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
			}
			else{
				if(show.carTrack[val]==1){
					routeNum.start = "030"
					routeNum.end = "026"
					route.startButton = "SLA"
					route.endButton = "XILA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==2){
					routeNum.start = "030"
					routeNum.end = "027"
					route.startButton = "SLA"
					route.endButton = "XIILA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==3){
					routeNum.start = "030"
					routeNum.end = "025"
					route.startButton = "SLA"
					route.endButton = "X3LA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==4){
					routeNum.start = "030"
					routeNum.end = "028"
					route.startButton = "SLA"
					route.endButton = "X4LA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==5){
					routeNum.start = "030"
					routeNum.end = "024"
					route.startButton = "SLA"
					route.endButton = "X5LA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==6){
					routeNum.start = "030"
					routeNum.end = "029"
					route.startButton = "SLA"
					route.endButton = "X6LA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
			}
		}
		else{
			if(show.carWhere[val]=="down"){
				if(show.carTrack[val]==1){
					routeNum.start = "026"
					routeNum.end = "031"
					route.startButton = "XILA"
					route.endButton = "SFLA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				
				else if(show.carTrack[val]==3){
					routeNum.start = "025"
					routeNum.end = "031"
					route.startButton = "X3LA"
					route.endButton = "SFLA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				
				else if(show.carTrack[val]==5){
					routeNum.start = "024"
					routeNum.end = "031"
					route.startButton = "X5LA"
					route.endButton = "SFLA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				
			}
			
		}
	})
}


//将列调阶段计划显示在界面上，如果是单车，则显示，如果是多车，是否是规定路线，是则显示，不是不显示
function SPlanShow(){
	
	var recCarTab=document.getElementById("recCarTab")
	var sendCarTab=document.getElementById("sendCarTab")
	var track
	var time
	var route
	show.rs_Car.forEach(function(val,n){
		if(val=="01"){
			if(document.getElementById("RecOrderNum").innerHTML==""){
				document.getElementById("RecOrderNum").innerHTML=show.order[n];
				
				document.getElementById("RecCar").innerHTML=show.car[n];
				
				document.getElementById("Rec").innerHTML="接车";
				if(show.carTrack[show.car[n]]==1){
					track= "IG"	
				}
				else if(show.carTrack[show.car[n]]==2){
					track = "IIG"
				}
				else{
					track = show.carTrack[show.car[n]] +"G"
				}
				
				if(model==1){  //如果是自律模式，不允许更改股道
					document.getElementById("RecTrack").innerHTML=track; 
				}
				else{
					document.getElementById("beijing_stationtrack_RX").value=track;
				}
				
				time = show.planTime[n].substr(0,2)+"时"+show.planTime[n].substr(2,2)+"分"
				document.getElementById("RecTime").innerHTML=time ;
				
				route = show.routeAll[n].startButton +"->"+ show.routeAll[n].endButton
				document.getElementById("RecRoute").innerHTML=route ;
				document.getElementById("RecStatus").innerHTML=show.status[n];		
			}
			else{
				//多车显示
				var row =document.createElement('tr');    //创建行
				var Cell_1 = document.createElement('td'); //创建第一列
				Cell_1.innerHTML="*"    
				var Cell_2= document.createElement('td'); //创建第二列
				Cell_2.innerHTML=show.order[n];
				var Cell_3= document.createElement('td'); //创建第三列
				Cell_3.innerHTML=show.car[n] 
				var Cell_4= document.createElement('td'); //创建第四列
				Cell_4.innerHTML="接车"
				var Cell_5= document.createElement('td'); //创建第五列
				var select= document.createElement('select'); //接车表股道下拉菜单
				var option_1= document.createElement('option');
				
				var option_2= document.createElement('option')
				
				var option_3= document.createElement('option')
				
				var option_4= document.createElement('option')
				
				var option_5= document.createElement('option')
				
				var option_6= document.createElement('option')
				
				select.appendChild(option_1)
				select.appendChild(option_2)
				select.appendChild(option_3)
				select.appendChild(option_4)
				select.appendChild(option_5)
				select.appendChild(option_6)
				option_1.setAttribute("value","5G");
				option_1.innerHTML="5G"
				option_2.setAttribute("value","3G");
				option_2.innerHTML="3G"
				option_3.setAttribute("value","IG");
				option_3.innerHTML="IG"
				option_4.setAttribute("value","IIG");
				option_4.innerHTML="IIG"
				option_5.setAttribute("value","4G");
				option_5.innerHTML="4G"
				option_6.setAttribute("value","6G");
				option_6.innerHTML="6G"
				if(show.carTrack[show.car[n]]==1){
					track= "IG"	
				}
				else if(show.carTrack[show.car[n]]==2){
					track = "IIG"
				}
				else{
					track = show.carTrack[show.car[n]] +"G"
				}
				if(model==1){
					Cell_5.innerHTML=track
				}
				else{
					select.value=track
					Cell_5.appendChild(select)
				}
				
				
				
				
				var Cell_6= document.createElement('td'); //创建第六列
				time = show.planTime[n].substr(0,2)+"时"+show.planTime[n].substr(2,2)+"分"
				Cell_6.innerHTML=time
				var Cell_7= document.createElement('td'); //创建第七列
				route = show.routeAll[n].startButton +"->"+ show.routeAll[n].endButton
				Cell_7.innerHTML=route
				var Cell_8= document.createElement('td'); //创建第八列
				Cell_8.innerHTML=show.status[n];
				var Cell_9= document.createElement('td'); //创建第九列
				var input=document.createElement('input')
				input.setAttribute("type","checkbox");
				if(model==1){
					input.setAttribute("checked","checked");
				}
				
				Cell_9.appendChild(input)
				Cell_9.innerHTML=Cell_9.innerHTML+"自动"
				
				row.appendChild(Cell_1); //加入行  ，下面类似
				row.appendChild(Cell_2); //加入行  ，下面类似
				row.appendChild(Cell_3); //加入行  ，下面类似
				row.appendChild(Cell_4); //加入行  ，下面类似
				row.appendChild(Cell_5); //加入行  ，下面类似
				row.appendChild(Cell_6); //加入行  ，下面类似
				row.appendChild(Cell_7); //加入行  ，下面类似
				row.appendChild(Cell_8); //加入行  ，下面类似
				row.appendChild(Cell_9); //加入行  ，下面类似
				recCarTab.appendChild(row)
				
			}
		}
		else{
			if(document.getElementById("SendOrderNum").innerHTML==""){
				
			    document.getElementById("SendOrderNum").innerHTML=show.order[n];
				
				document.getElementById("SendCar").innerHTML=show.car[n];
				document.getElementById("Send").innerHTML="发车";
				if(show.carTrack[show.car[n]]==1){
					track= "IG"	
				}
				else if(show.carTrack[show.car[n]]==2){
					track = "IIG"
				}
				else{
					track = show.carTrack[show.car[n]] +"G"
				}
				
				if(model==1){  //如果是自律模式，不允许更改股道
					document.getElementById("SendTrack").innerHTML=track; 
				}
				else{
					document.getElementById("beijing_stationtrack_TX").value=track;
				}
				
				time = show.planTime[n].substr(0,2)+"时"+show.planTime[n].substr(2,2)+"分"
				document.getElementById("SendTime").innerHTML=time ;
				
				route = show.routeAll[n].startButton +"->"+ show.routeAll[n].endButton
				document.getElementById("SendRoute").innerHTML=route ;
				document.getElementById("SendStatus").innerHTML=show.status[n];		
			}
			else{
				//多车显示
				var row =document.createElement('tr');    //创建行
				var Cell_1 = document.createElement('td'); //创建第一列
				Cell_1.innerHTML="*"    
				var Cell_2= document.createElement('td'); //创建第二列
				Cell_2.innerHTML=show.order[n];
				var Cell_3= document.createElement('td'); //创建第三列
				Cell_3.innerHTML= show.car[n]
				var Cell_4= document.createElement('td'); //创建第四列
				Cell_4.innerHTML="发车"
				var Cell_5= document.createElement('td'); //创建第五列
				var select= document.createElement('select'); //接车表股道下拉菜单
				var option_1= document.createElement('option');
				
				var option_2= document.createElement('option')
				
				var option_3= document.createElement('option')
				
				var option_4= document.createElement('option')
				
				var option_5= document.createElement('option')
				
				var option_6= document.createElement('option')
				
				select.appendChild(option_1)
				select.appendChild(option_2)
				select.appendChild(option_3)
				select.appendChild(option_4)
				select.appendChild(option_5)
				select.appendChild(option_6)
				option_1.setAttribute("value","5G");
				option_1.innerHTML="5G"
				option_2.setAttribute("value","3G");
				option_2.innerHTML="3G"
				option_3.setAttribute("value","IG");
				option_3.innerHTML="IG"
				option_4.setAttribute("value","IIG");
				option_4.innerHTML="IIG"
				option_5.setAttribute("value","4G");
				option_5.innerHTML="4G"
				option_6.setAttribute("value","6G");
				option_6.innerHTML="6G"
				if(show.carTrack[show.car[n]]==1){
					track= "IG"	
				}
				else if(show.carTrack[show.car[n]]==2){
					track = "IIG"
				}
				else{
					track = show.carTrack[show.car[n]] +"G"
				}
				if(model==1){
					Cell_5.innerHTML=track
				}
				else{
					select.value=track
					Cell_5.appendChild(select)
				}
				
				var Cell_6= document.createElement('td'); //创建第六列
				time = show.planTime[n].substr(0,2)+"时"+show.planTime[n].substr(2,2)+"分"
				Cell_6.innerHTML=time
				var Cell_7= document.createElement('td'); //创建第七列
				route = show.routeAll[n].startButton +"->"+ show.routeAll[n].endButton
				Cell_7.innerHTML=route
				var Cell_8= document.createElement('td'); //创建第八列
				Cell_8.innerHTML=show.status[n];
				var Cell_9= document.createElement('td'); //创建第九列
				var input=document.createElement('input')
				input.setAttribute("type","checkbox");
				if(model==1){
					input.setAttribute("checked","checked");
				}
				Cell_9.appendChild(input)
				Cell_9.innerHTML=Cell_9.innerHTML+"自动"
				
				
				row.appendChild(Cell_1); //加入行  ，下面类似
				row.appendChild(Cell_2); //加入行  ，下面类似
				row.appendChild(Cell_3); //加入行  ，下面类似
				row.appendChild(Cell_4); //加入行  ，下面类似
				row.appendChild(Cell_5); //加入行  ，下面类似
				row.appendChild(Cell_6); //加入行  ，下面类似
				row.appendChild(Cell_7); //加入行  ，下面类似
				row.appendChild(Cell_8); //加入行  ，下面类似
				row.appendChild(Cell_9); //加入行  ，下面类似
				sendCarTab.appendChild(row)
			}
		}
		
	})
	
	json.td_PlanWait=show.td_PlanShow.slice(0)
	
    //存储所有列车信息,清空显示变量
    $.each(show,function(key){
        if(key=="td_PlanShow"){
            show[key]=[]
        }
        else if(key=="carWhere"){
            $.each(show[key],function(k,v){
                CarData.carWhere[k]=v
            })
			show.carWhere={}
		}
        else if(key=="carTrack"){
            $.each(show[key],function(k,v){
                CarData.carTrack[k]=v
            })
            show.carTrack={}
        }
		else{
			CarData[key].push(show[key].slice(0))
            show[key]=[]
		}
    })
           
	SmtRoute_to_CBI()
	//console.log()
}


//发送联锁询问是否可以发车，列调发来新的车次信息
function SmtRoute_to_CBI(){
	var k=json.k
	json.td_PlanWait.forEach(function(val,n){
		var head =BgCom.one_FH
		var type=BgCom.SMTtoCBI_type
		var fun= BgCom.funNumCBI=val.substr(4,2)
		var send = BgCom.send
		var rec =BgCom.cbi_rec
		var csn=BgCom.orderNum=val.substr(10,2)
		var cnum=BgCom.car=val.substr(26,4)
		var routeNum=BgCom.routeNum=json.routeAllNum[n].start + json.routeAllNum[n].end
		var tri_mode=BgCom.trigger_mode="01"
        var rs_time=BgCom.rs_time=val.substr(32,4)
		var rs_type=BgCom.rs_type=val.substr(36,2)
		var tail=BgCom.one_FT
		var frame=routeFrame(head,type,fun,send,rec,csn,cnum,routeNum,tri_mode,rs_time,rs_type,tail)
		json.sendCBI[k] = frame
		//删除已发送进路
		//json.routeAllNum.splice(n,1)
		//console.log(json.sendCBI)
		k++
	})
	json.k=k
	addCookie("北京车务终端",json.sendCBI)
    json.sendCBI={}
	//getCookie_receipt()
	//在等待数据中，删除已发送数据
	//json.td_PlanWait.filter(function(val){
	//	return val.substr(36,2)!="01"
	//})	
}
/*以上是自律模式列车操作*/

//收到回执后删除数据
/*function getCookie_receipt(){
	var timer = 0
	var cookie_bj = $.cookie('北京联锁回执');
	if(JSON.stringify(cookie_bj)=="{}"||cookie_bj==undefined){
		timer = 1 
	}
	else{
		timer = 2
	}
	//存储回执信息
	if(timer==2){
		$.each(cookie_bj,function(key,val){
			for(var k in json.sendCBI){
				if(json.sendCBI[k].substr(10,2)==val.substr(10,2)){
					
					delete json.sendCBI[k] 
				}		
			}		
		})
	}
	if(JSON.stringify(json.sendCBI)!="{}"){
	
		dsTimer_four=setTimeout(getCookie_receipt,100)
	}
		//addCookie("北京车务终端",json.sendCBI)
}*/

//列车走完清列表信息
function clearTable(){
    var car
    var recCar=[]
    var sendCar=[]
     $("#recCarTab tr").each(function(rowIndex){
        
        if(rowIndex==2){

             car=$(this).find("td").eq(2).html()
             if(car!=null && carPosition[car]){
                $.each(carPosition[car],function(n,pos){
                    if(parseInt(car)%2==1){
                        //console.log(pos)
                        if(pos==164){
                           // console.log("daozhe")
                           // console.log($("#sendCarTab tr").eq(2))
                            //更改触发方式
                            $("#recCarTab tr").eq(2).find("td").eq(7).html("已触发")
                        }
                        if(pos==169 ||pos==168||pos==167){
                            //清接车表
                            
                            $("#recCarTab tr").eq(2).find("td").each(function(colIndex){
                            
                                $("#recCarTab tr").eq(2).find("td").eq(colIndex).empty()
                            })  
                            
                        }
                        
                    }
                    else{
                        //console.log(pos)
                        if(pos==182){
                           // console.log("daozhe")
                           // console.log($("#sendCarTab tr").eq(2))
                            //更改触发方式
                            $("#recCarTab tr").eq(2).find("td").eq(7).html("已触发")
                        }
                        if(pos==173||pos==174||pos==175){
                            //清接车表
                            
                            $("#recCarTab tr").eq(2).find("td").each(function(colIndex){
                            
                                $("#recCarTab tr").eq(2).find("td").eq(colIndex).empty()
                            })  
                            
                        }
                    }
                    
                })
             }
         }
        else if(rowIndex>2){
            recCar.push($(this).find("td").eq(2).html())
        }
    })  
    
    $.each(recCar,function(i,carnum){
       // console.log(carPosition[carnum]) 
        if(carnum!=null && carPosition[carnum]){
           //console.log('daozhe') 
           $.each(carPosition[carnum],function(n,pos){
               if(parseInt(carnum)%2==1){
               
                   if(pos==164){
                       //更改触发方式
                       //console.log($("#sendCarTab tr").eq(i+3))
                       $("#recCarTab tr").each(function(rowIndex){
                           if($("#recCarTab tr").eq(rowIndex).find("td").eq(2).html()==carnum){
                               $("#recCarTab tr").eq(2).find("td").eq(7).html("已触发")
                           }
                       })
                       
                   }
                   if(pos==169 ||pos==168||pos==167){
                        $("#recCarTab tr").each(function(rowIndex){
                           if($("#recCarTab tr").eq(rowIndex).find("td").eq(2).html()==carnum){
                               $("#recCarTab tr").eq(rowIndex).remove()
                           }
                        })
                       
                   }
               }
               else{
                   if(pos==182){
                       //更改触发方式
                       //console.log($("#sendCarTab tr").eq(i+3))
                       $("#recCarTab tr").each(function(rowIndex){
                           if($("#recCarTab tr").eq(rowIndex).find("td").eq(2).html()==carnum){
                               $("#recCarTab tr").eq(rowIndex).find("td").eq(7).html("已触发")
                           }
                       })
                       
                   }
                   if(pos==173||pos==174||pos==175){
                        $("#recCarTab tr").each(function(rowIndex){
                           if($("#recCarTab tr").eq(rowIndex).find("td").eq(2).html()==carnum){
                               $("#recCarTab tr").eq(rowIndex).remove()
                           }
                        })
                       
                   }
               }
           })
          
        } 
    })       
          
            
            
       
    
    $("#sendCarTab tr").each(function(rowIndex){
        
        if(rowIndex==2){

             car=$(this).find("td").eq(2).html()
			// console.log(car)
             if(car!=null && carPosition[car]){
				console.log(carPosition[car])
                $.each(carPosition[car],function(n,pos){
					console.log(pos)
                    if(parseInt(car)%2==1){
                         //console.log(pos)
                         if(pos==169||pos==168||pos==167){
                            // console.log("daozhe")
                            // console.log($("#sendCarTab tr").eq(2))
                             //更改触发方式
                             $("#sendCarTab tr").eq(2).find("td").eq(7).html("已触发")
                         }
                         if(pos==176){
                             //清接车表
                             
                             $("#sendCarTab tr").eq(2).find("td").each(function(colIndex){
                             
                                 $("#sendCarTab tr").eq(2).find("td").eq(colIndex).empty()
                             })  
                             
                         }
                    }
                    else {
                         //console.log(pos)
                         if(pos==173||pos==174||pos==175){
                            // console.log("daozhe")
                            // console.log($("#sendCarTab tr").eq(2))
                             //更改触发方式
                             $("#sendCarTab tr").eq(2).find("td").eq(7).html("已触发")
                         }
                         if(pos==170){
                             //清接车表
                             
                             $("#sendCarTab tr").eq(2).find("td").each(function(colIndex){
                             
                                 $("#sendCarTab tr").eq(2).find("td").eq(colIndex).empty()
                             })  
                             
                         }
                    }
                })
             }
         }
        else if(rowIndex>2){
            sendCar.push($(this).find("td").eq(2).html())
        }
    })  
    
    $.each(sendCar,function(i,carnum){
       //console.log(carnum) 
		
        if(carnum!=null && carPosition[carnum]){
			//console.log(carPosition[carnum])
           //console.log('daozhe') 
           $.each(carPosition[carnum],function(n,pos){
               //console.log(pos)
               if(parseInt(carnum)%2==1){
                   if(pos==169||pos==168||pos==167){
                       //更改触发方式
                       //console.log($("#sendCarTab tr").eq(i+3))
                       $("#sendCarTab tr").each(function(rowIndex){
                           if($("#sendCarTab tr").eq(rowIndex).find("td").eq(2).html()==carnum){ 
                               $("#sendCarTab tr").eq(rowIndex).find("td").eq(7).html("已触发")
                           }
                       })
                       
                   }
                   if(pos==176){  
                        $("#sendCarTab tr").each(function(rowIndex){
                           if($("#sendCarTab tr").eq(rowIndex).find("td").eq(2).html()==carnum){   
                               $("#sendCarTab tr").eq(rowIndex).remove()
                           }
                        })
                       
                   }
               }
               else{
                   if(pos==173||pos==174||pos==175){
                       //更改触发方式
                       //console.log($("#sendCarTab tr").eq(i+3))
                       $("#sendCarTab tr").each(function(rowIndex){
                           if($("#sendCarTab tr").eq(rowIndex).find("td").eq(2).html()==carnum){
                               $("#sendCarTab tr").eq(rowIndex).find("td").eq(7).html("已触发")
                           }
                       })
                       
                   }
                   if(pos==170){
                        $("#sendCarTab tr").each(function(rowIndex){
                           if($("#sendCarTab tr").eq(rowIndex).find("td").eq(2).html()==carnum){
                               $("#sendCarTab tr").eq(rowIndex).remove()
                           }
                        })
                       
                   }
               }
           })
        } 
    })       
    
}      
    
       
    



/*以下是非常站控模式行车、调车操作*/
//非常站控模式行车、调车操作
//模式转换按钮被按下
function Mode_Switching(){
	if (model==0 && xd_model==0 ){//非常站控按钮点亮切换到非常站控模式操作，且为调车模式
		clearTimeout(dsTimer_one)
		clearTimeout(dsTimer_two)
		clearTimeout(dsTimer_three)
		clearTimeout(dsTimer_four)
		getCookie_two()
		
	}
	else{                              //自律模式或为非常站控行车模式
        clearTimeout(dsTimer_five) 
        clearTimeout(dsTimer_six)
        
        
		getCookie_one()
       
		
	}
}
//调车显示数据
var DShow={
	
	num:"ZJ",
	carnum:null,
	way:"甩车",
	status:"未触发",
	
	startButton:null,//进路按钮
	middleButton:null,//进路按钮
	endButton:null,//进路按钮
    startNum:null,
    middleNum:null,
    endNum:null,
	
	planTrack:null,
	
    arriveTrack:null,
	
    direction:null
}
function getCookie_two(){
	var cookieAD = $.cookie('助调调车');
    if(JSON.stringify(cookieAD)=="{}"||cookieAD==undefined) {
		dsTimer_five = setTimeout(function(){
		this.getCookie_two()
		},10); 
	}
	else {
        //console.log("234")
		clearTimeout(dsTimer_five) //清理定时任务
		saveJson_AD(cookieAD)
	}
}
function saveJson_AD(cks){
    //console.log(cks)
	
	
	var recSt=cks.substr(8,2)
	if(recSt=="10"){
        
		json.ad_Plan =cks
        
	}
	if(json.ad_Plan != null){
		clearTimeout(dsTimer_six)
        
        $.cookie('助调调车',null, { path: '/' });
        
		DPlan_saveShow()
        
		//console.log(json.td_Plan)
	}
	else{
		dsTimer_six=setTimeout(getCookie_two,1000)
	}
}
function DPlan_saveShow(){
    
	//存储进路按钮、方向、计划股道、到达股道
	if(json.ad_Plan.substr(10,3)==167){
		DShow.direction="下行"
        DShow.carnum="1111"
		DShow.planTrack="IG"
		DShow.startButton="XIDA"
        DShow.startNum ="026"
		if(json.ad_Plan.substr(13,3)==177){
			DShow.arriveTrack="4DG"
			DShow.endButton="D2"
            DShow.endNum ="305"
		}
		else{
            alert("调车进路不存在")
            getCookie_two()
			return 
		}
	}
	if(json.ad_Plan.substr(10,3)==166){
		DShow.planTrack="3G"
		if(json.ad_Plan.substr(13,3)==163){
			DShow.direction="上行"
            DShow.carnum="2222"
			DShow.arriveTrack="1DG"
			DShow.startButton="S3DA"
			DShow.endButton="D1"
            DShow.startNum ="033"
            DShow.endNum ="304"  
		}
		else if(json.ad_Plan.substr(13,3)==177){
			DShow.direction="下行"
            DShow.carnum="1111"
			DShow.arriveTrack="4DG"
			DShow.startButton="X3DA"
			DShow.endButton="D2"
            DShow.startNum ="025"
            DShow.endNum ="305"
			
		}
        else {
            alert("调车进路不存在")
            getCookie_two()
            return  
        }
	}
	if(json.ad_Plan.substr(10,3)==165){
		DShow.planTrack="5G"
		if(json.ad_Plan.substr(13,3)==163){
			DShow.direction="上行"
            DShow.carnum="2222"
			DShow.arriveTrack="1DG"
			DShow.startButton="S5DA"
			
			DShow.endButton="D1"
            DShow.startNum ="032"
            
            DShow.endNum ="304"
		}
		else if(json.ad_Plan.substr(13,3)==177){
			DShow.direction="下行"
            DShow.carnum="1111"
			DShow.arriveTrack="4DG"
			DShow.startButton="X5DA"
			
			DShow.endButton="D2"
            DShow.startNum ="024"
           
            DShow.endNum ="305"
			
		}
        else {
            alert("调车进路不存在")
            getCookie_two()
            return  
        }
	}
    
	if(json.ad_Plan.substr(10,3)==171){
		DShow.direction="下行"
        DShow.carnum="1111"
		DShow.planTrack="IIG"
		DShow.startButton="XIIDA"
		
        DShow.startNum ="027"
       
		if(json.ad_Plan.substr(13,3)==183){
			DShow.arriveTrack="2DG"
			DShow.endButton="D4"
            DShow.endNum ="307"
		}
		else {
            alert("调车进路不存在")
            getCookie_two()
            return  
        }
	}
	if(json.ad_Plan.substr(10,3)==172){
		DShow.planTrack="4G"
		if(json.ad_Plan.substr(13,3)==169){
			DShow.direction="上行"
            DShow.carnum="2222"
			DShow.arriveTrack="6G"
			DShow.startButton="S4DA"
			
			DShow.endButton="D3"
            DShow.startNum ="036"
            
            DShow.endNum ="306"
		}
		else if(json.ad_Plan.substr(13,3)==183){
			DShow.direction="下行"
            DShow.carnum="1111"
			DShow.arriveTrack="IIG"
			DShow.startButton="X4DA"
			
			DShow.endButton="D4"
            DShow.startNum ="028"
            
            DShow.endNum ="307"
			
		}
        else {
            alert("调车进路不存在")
            getCookie_two()
            return  
        }
	}
	if(json.ad_Plan.substr(10,3)==173){
		DShow.planTrack="6G"
		if(json.ad_Plan.substr(13,3)==169){
			DShow.direction="上行"
            DShow.carnum="2222"
			DShow.arriveTrack="4G"
			DShow.startButton="S6DA"
			
			DShow.endButton="D3"
            DShow.startNum ="037"
          
            DShow.endNum ="306"
		}
		else if(json.ad_Plan.substr(13,3)==183){
			DShow.direction="下行"
            DShow.carnum="1111"
			DShow.arriveTrack="IIG"
			DShow.startButton="X6DA"
			
			DShow.endButton="D4"
            DShow.startNum ="029"
            
            DShow.endNum ="307"
			
		}
        else {
            alert("调车进路不存在")
            getCookie_two()
            return  
        }
	}
    if(json.ad_Plan.substr(10,3)==163){
		DShow.planTrack="1DG"
        DShow.direction="下行"
        DShow.carnum="1111"
        DShow.startButton="D1"
        DShow.startNum ="304"
		if(json.ad_Plan.substr(13,3)==166){
			DShow.arriveTrack="3G"
			
			DShow.endButton="S3DA"

            DShow.endNum ="033"
			
		}
        else if(json.ad_Plan.substr(13,3)==165){
            DShow.arriveTrack="5G"
			
			DShow.endButton="S5DA"

            DShow.endNum ="032"
        }
        else {
            alert("调车进路不存在")
            getCookie_two()
            return  
        }
	}
    if(json.ad_Plan.substr(10,3)==169){
		DShow.planTrack="3DG"
        DShow.direction="下行"
        DShow.carnum="1111"
        DShow.startButton="D3"
        DShow.startNum ="306"
		if(json.ad_Plan.substr(13,3)==172){
			DShow.arriveTrack="4G"
			
			DShow.endButton="S4DA"

            DShow.endNum ="036"
			
		}
        else if(json.ad_Plan.substr(13,3)==173){
            DShow.arriveTrack="6G"
			
			DShow.endButton="S6DA"

            DShow.endNum ="037"
        }
        else {
            alert("调车进路不存在")
            getCookie_two()
            return  
        }
	}
    if(json.ad_Plan.substr(10,3)==177){
		DShow.planTrack="4DG"
        DShow.direction="上行"
        DShow.carnum="2222"
        DShow.startButton="D2"
        DShow.startNum ="305"
		if(json.ad_Plan.substr(13,3)==167){
			DShow.arriveTrack="IG"
			
			DShow.endButton="XIDA"

            DShow.endNum ="026"
			
		}
        else if(json.ad_Plan.substr(13,3)==166){
            DShow.arriveTrack="3G"
			
			DShow.endButton="X3DA"

            DShow.endNum ="025"
        }
        else if(json.ad_Plan.substr(13,3)==165){
            DShow.arriveTrack="5G"
			
			DShow.endButton="X5DA"

            DShow.endNum ="024"
        }
        else {
            alert("调车进路不存在")
            getCookie_two()
            return  
        }
	}
    if(json.ad_Plan.substr(10,3)==183){
		DShow.planTrack="2DG"
        DShow.direction="上行"
        DShow.carnum="2222"
        DShow.startButton="D4"
        DShow.startNum ="307"
		if(json.ad_Plan.substr(13,3)==171){
			DShow.arriveTrack="IIG"
			
			DShow.endButton="XIIDA"

            DShow.endNum ="027"
			
		}
        else if(json.ad_Plan.substr(13,3)==172){
            DShow.arriveTrack="4G"
			
			DShow.endButton="X4DA"

            DShow.endNum ="028"
        }
        else if(json.ad_Plan.substr(13,3)==173){
            DShow.arriveTrack="6G"
			
			DShow.endButton="X6DA"

            DShow.endNum ="029"
        }
        else {
            alert("调车进路不存在")
            getCookie_two()
            return  
        }
	}
	
	DPlanshow()
}
function DPlanshow(){
	var shuntingCarTab=document.getElementById("shuntingCarTab")
	
	
	
	
	
	if(document.getElementById("shuntingNum").innerHTML==""){
		
		document.getElementById("shuntingNum").innerHTML=DShow.num;
		document.getElementById("shuntingCarNum").innerHTML=DShow.carnum;	
		document.getElementById("shuntingWay").innerHTML=DShow.way;
		document.getElementById("shuntingPlanTrack").innerHTML=DShow.planTrack;
		document.getElementById("shuntingArriveTrack").innerHTML=DShow.arriveTrack;
		document.getElementById("shuntingDirection").innerHTML=DShow.direction;
		document.getElementById("shuntingRoute").innerHTML=DShow.startButton+"->"+DShow.endButton
		document.getElementById("shuntingStatus").innerHTML=DShow.status;
		
	}
	else{
		//多车显示
		var row =document.createElement('tr');    //创建行
		var Cell_1 = document.createElement('td'); //创建第一列
		Cell_1.innerHTML="*"    
		var Cell_2= document.createElement('td'); //创建第二列
		Cell_2.innerHTML=DShow.num;
		var Cell_3= document.createElement('td'); //创建第三列
		Cell_3.innerHTML=DShow.carnum 
		var Cell_4= document.createElement('td'); //创建第四列
		Cell_4.innerHTML=DShow.way
		var Cell_5= document.createElement('td'); //创建第五列
		Cell_5.innerHTML=DShow.planTrack
		var Cell_6= document.createElement('td'); //创建第六列
		Cell_6.innerHTML=DShow.arriveTrack
		var Cell_7= document.createElement('td'); //创建第七列
		Cell_7.innerHTML=DShow.direction
		var Cell_8= document.createElement('td'); //创建第八列
		Cell_8.innerHTML=DShow.startButton+"->"+DShow.endButton
		var Cell_9= document.createElement('td'); //创建第九列
		Cell_9.innerHTML=DShow.status
		row.appendChild(Cell_1); //加入行  ，下面类似
		row.appendChild(Cell_2); //加入行  ，下面类似
		row.appendChild(Cell_3); //加入行  ，下面类似
		row.appendChild(Cell_4); //加入行  ，下面类似
		row.appendChild(Cell_5); //加入行  ，下面类似
		row.appendChild(Cell_6); //加入行  ，下面类似
		row.appendChild(Cell_7); //加入行  ，下面类似
		row.appendChild(Cell_8); //加入行  ，下面类似
		row.appendChild(Cell_9); //加入行  ，下面类似
		shuntingCarTab.appendChild(row)
				
	}
		
	json.ad_PlanWait=[{num:DShow.num,carnum:DShow.carnum,startButton:DShow.startButton,endButton:DShow.endButton,startNum:DShow.startNum,endNum:DShow.endNum}]
	//SmtShuntingRoute_to_CBI()
    getCookie_two()
	//console.log()
}	

function SmtShuntingRoute_to_CBI(ind){
    console.log(ind)
    
    var head=BgCom.one_FH
    var type=BgCom.SMTtoCBI_type
    var fun ="03" 
    var send=BgCom.send
    var rec =BgCom.cbi_rec
    var csn = json.ad_PlanWait[ind].num
    var cnum =json.ad_PlanWait[ind].carnum
    var routeNum = json.ad_PlanWait[ind].startNum + json.ad_PlanWait[ind].endNum
    var tri_mode = "02"
    var rs_time = "0000"
    var rs_type = "00"
    var tail =BgCom.one_FT
    var frame=routeFrame(head,type,fun,send,rec,csn,cnum,routeNum,tri_mode,rs_time,rs_type,tail)
    json.sendCBI[0] = frame 
    
    addCookie("北京车务终端",json.sendCBI)
    //getCookie_receipt() 
	
}


/*以上是非常站控模式调车操作*/




//测试用
function addCookie_ceshi(){
	var json={0:"AB810201100020190205141516001111102501AC",1:"AB810201100020190205141516001111102501AC"}
		/*{0:"AB810201100020190205141516001111102501AC",1:"AB810101110120190205141516001110102503AC",2:"AB810201110220190205141516001112102503AC",3:"AB810101120320190205141516001111102504AC"}*/
	$.cookie('列调', json, { path: '/' });
}


function getCookie_ceshi(){
	var cookie = $.cookie();
	
     if(cookie=="") return;     
     //var parame = cookie.split(";");
	
    /* for( var i=0;i<parame.length;i++){
          if(parame[i].substring(0,name.length+1)==(name+"=")){            
             user = parame[i].substring(parame[i].indexOf("=")+1,parame[i].length+1);
             break;
          }          
     }*/
     /*alert(decodeURIComponent(user)+"  "+decodeURIComponent(user).length);*/
	alert(JSON.stringify(cookie))
	//alert(JSON.stringify(cookie))
}



function startTest(){
	getCookie_one()
}
//测试用




//写cookies
function setCookie(type,value) 
{ 
    $.cookie(type, value, { path: '/' });
} 

//读取cookies 
function getCookie(type) 
{        
    
	var cookieNet = $.cookie(type);
	return cookieNet
} 
//字符串替换位操作
function rePlaceStr(str,i,d){
	var string
	if(i==1){
		string=d+str.substr(1)
	}
	else if(i==str.length){
		string=str.substr(0,i-1)+d
	}
	else{
		string=str.substr(0,i-1)+d+str.substr(i)
	}
	return string
}

//删除cookies 
function delCookie(name) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
}