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
	send:"12",
	td_rec:"01",
	recTime:{
		year:null,
		month:null,
		day:null,
		hour:null,
		minute:null,
		sec:null
	},
	
	
	
	//车务终端给联锁的数据	
	SMTtoCBI_type:"8F",
	funNumCBI:null,
	
	cbi_rec:"18",
	orderNum:null,
	car:null,
	routeNum:null,       //进路信息,数字 
	trigger_mode:null ,  //触发方式
	rs_type:null
}



var json={
	k:0,
	plan:{},
	td_Plan:[],  //列调下达的阶段计划json数据
	recJson:{},  //阶段计划回执json数据
	sendCBI:{},  //车务终端发送给联锁的JSON数据
	
	//等待发送的进路信息
	td_PlanWait:[],     //列调下达的阶段计划json数据
	routeAllNum:[],    //总进路信息
}
//阶段计划回执数据帧编码
//每一位信息  帧头、类型、功能码、发送方、接收方、命令序号、下达时间、回执时间、值班人员姓名、车次号、上（下）一站、到站（发车）时间、到发类型、帧尾
function SPlanReceiptFrame(head,type,fun,send,rec,csn,to_tim,rec_tim,name,cnum,nsta,rs_tim,rs_type,tail){
	
	var frame=head+type+fun+send+rec+csn+to_tim+rec_tim+name+cnum+nsta+rs_tim+rs_type+tail;
	return frame
}
//进路信息数据帧编码
//每一位信息  帧头、类型、功能码、发送方、接收方、命令序号、车次号、进路始端按钮、进路终端按钮、触发方式、到发类型、帧尾
function routeFrame(head,type,fun,send,rec,csn,cnum,routeNum,tri_mode,rs_type,tail){
	
	var frame=head+type+fun+send+rec+csn+cnum+routeNum+tri_mode+rs_type+tail;
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
		if(recSt=="12"){
		
			show.td_PlanShow.push(val)
			
		}
	})
	if(show.td_PlanShow.length!=0){
		clearTimeout(dsTimer_two)
        SaveShow()
		
	}
	else{
        
		dsTimer_two=setTimeout(getCookie_one,1000)
	}
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
	show.td_PlanShow.forEach(function(val){
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

//自动触发的股道和进路排列
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
    $.each(carTime,function(key){
        
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
					routeNum.start = "054"
					routeNum.end = "063"
					route.startButton = "XLA"
					route.endButton = "SILA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==2){
					routeNum.start = "055"
					routeNum.end = "064"
					route.startButton = "XFLA"
					route.endButton = "SIILA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==3){
					routeNum.start = "054"
					routeNum.end = "062"
					route.startButton = "XLA"
					route.endButton = "S3LA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==4){
					routeNum.start = "055"
					routeNum.end = "065"
					route.startButton = "XFLA"
					route.endButton = "S4LA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				
			}
			else{
				if(show.carTrack[val]==1){
					routeNum.start = "061"
					routeNum.end = "057"
					route.startButton = "SFLA"
					route.endButton = "XILA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==2){
					routeNum.start = "060"
					routeNum.end = "058"
					route.startButton = "SLA"
					route.endButton = "XIILA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==3){
					routeNum.start = "061"
					routeNum.end = "056"
					route.startButton = "SFLA"
					route.endButton = "X3LA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				else if(show.carTrack[val]==4){
					routeNum.start = "060"
					routeNum.end = "059"
					route.startButton = "SLA"
					route.endButton = "X4LA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				
			}
		}
		else{
			if(show.carWhere[val]=="down"){
				if(show.carTrack[val]==1){
					routeNum.start = "057"
					routeNum.end = "061"
					route.startButton = "XILA"
					route.endButton = "SFLA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				
				else if(show.carTrack[val]==3){
					routeNum.start = "056"
					routeNum.end = "061"
					route.startButton = "X3LA"
					route.endButton = "SFLA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				
				
				
			}
			else{
				if(show.carTrack[val]==2){
					routeNum.start = "064"
					routeNum.end = "055"
					route.startButton = "SIILA"
					route.endButton = "XFLA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
				
				else if(show.carTrack[val]==4){
					routeNum.start = "065"
					routeNum.end = "055"
					route.startButton = "S4LA"
					route.endButton = "XFLA"
					json.routeAllNum.push(routeNum)
					show.routeAll.push(route)
				}
			}
			
		}
	})
}


//将列调阶段计划显示在界面上
function SPlanShow(){
	var recCarTab=document.getElementById("recCarTab")
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
					document.getElementById("jinan_stationtrack_RX").value=track;
				}
				
				time = show.planTime[n].substr(0,2)+"时"+show.planTime[n].substr(2,2)+"分"
				document.getElementById("RecTime").innerHTML=time ;
				
				route = show.routeAll[n].startButton +"->"+ show.routeAll[n].endButton
				document.getElementById("RecRoute").innerHTML=route ;	
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
				
				
				row.appendChild(Cell_1); //加入行  ，下面类似
				row.appendChild(Cell_2); //加入行  ，下面类似
				row.appendChild(Cell_3); //加入行  ，下面类似
				row.appendChild(Cell_4); //加入行  ，下面类似
				row.appendChild(Cell_5); //加入行  ，下面类似
				row.appendChild(Cell_6); //加入行  ，下面类似
				row.appendChild(Cell_7); //加入行  ，下面类似
				
				recCarTab.appendChild(row)
			}
		}
		else{
			if(document.getElementById("RecOrderNum").innerHTML==""){
				
			    document.getElementById("RecOrderNum").innerHTML=show.order[n];
				
				document.getElementById("RecCar").innerHTML=show.car[n];
				document.getElementById("Rec").innerHTML="发车";
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
					document.getElementById("jinan_stationtrack_RX").value=track;
				}
				time = show.planTime[n].substr(0,2)+"时"+show.planTime[n].substr(2,2)+"分"
				document.getElementById("RecTime").innerHTML=time ;
				
				route = show.routeAll[n].startButton +"->"+ show.routeAll[n].endButton
				document.getElementById("RecRoute").innerHTML=route ;	
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
				
				
				row.appendChild(Cell_1); //加入行  ，下面类似
				row.appendChild(Cell_2); //加入行  ，下面类似
				row.appendChild(Cell_3); //加入行  ，下面类似
				row.appendChild(Cell_4); //加入行  ，下面类似
				row.appendChild(Cell_5); //加入行  ，下面类似
				row.appendChild(Cell_6); //加入行  ，下面类似
				row.appendChild(Cell_7); //加入行  ，下面类似
				
				recCarTab.appendChild(row)
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
	dsTimer_three=setTimeout(getCookie_one,3000)
}


/*//发送联锁询问是否可以发车，列调发来新的车次信息或车务终端界面有操作
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
		var rs_type=BgCom.rs_type=val.substr(36,2)
		var tail=BgCom.one_FT
		var frame=routeFrame(head,type,fun,send,rec,csn,cnum,routeNum,tri_mode,rs_type,tail)
		json.sendCBI[k] = frame
		//删除已发送进路
		//json.routeAllNum.splice(n,1)
		//console.log(json.sendCBI)
		k++
	})
	json.k=k
	addCookie("济南自律机",json.sendCBI)
	//在等待数据中，删除已发送数据
	//json.td_PlanWait.filter(function(val){
	//	return val.substr(36,2)!="01"
	//})	
}
*/


//列车走完清列表信息
function clearTable(){
    var car
    var recCar=[]
    //var sendCar=[]
     $("#recCarTab tr").each(function(rowIndex){
        
        if(rowIndex==2){

             car=$(this).find("td").eq(2).html()
             if(car!=null && carPosition[car]){
                $.each(carPosition[car],function(n,pos){
                    if(parseInt(car)%2==1){
                        if($("#recCarTab tr").eq(2).find("td").eq(3).html()=="接车"){
                            
                            if(pos==219 ||pos==218){
                                //清接车表
                                
                                $("#recCarTab tr").eq(2).find("td").each(function(colIndex){
                                
                                    $("#recCarTab tr").eq(2).find("td").eq(colIndex).empty()
                                })  
                                
                            }
                        }
                        else{
                            if(pos==226){
                                //清接车表
                                
                                $("#recCarTab tr").eq(2).find("td").each(function(colIndex){
                                
                                    $("#recCarTab tr").eq(2).find("td").eq(colIndex).empty()
                                })  
                                
                            }
                        }
                        
                    }
                    else{
                        if($("#recCarTab tr").eq(2).find("td").eq(3).html()=="接车"){
                            if(pos==224||pos==225){
                                //清接车表
                                
                                $("#recCarTab tr").eq(2).find("td").each(function(colIndex){
                                
                                    $("#recCarTab tr").eq(2).find("td").eq(colIndex).empty()
                                })  
                                
                            }
                        }
                        else{
                            if(pos==220){
                                //清接车表
                                
                                $("#recCarTab tr").eq(2).find("td").each(function(colIndex){
                                
                                    $("#recCarTab tr").eq(2).find("td").eq(colIndex).empty()
                                })  
                                
                            }
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
                  
                  if(pos==219 ||pos==218){
                      $("#recCarTab tr").each(function(rowIndex){
                          if($("#recCarTab tr").eq(rowIndex).find("td").eq(2).html()==carnum && $("#recCarTab tr").eq(rowIndex).find("td").eq(3).html()=="接车"){
                              $("#recCarTab tr").eq(rowIndex).remove()
                          }
                      })
                      
                  }
                 
                  if(pos==226){
                      $("#recCarTab tr").each(function(rowIndex){
                          if($("#recCarTab tr").eq(rowIndex).find("td").eq(2).html()==carnum && $("#recCarTab tr").eq(rowIndex).find("td").eq(3).html()=="发车"){
                              $("#recCarTab tr").eq(rowIndex).remove()
                          }
                      })
                      
                  }
                   
                   
               }
               else{
                 
                 if(pos==224||pos==225){
                     $("#recCarTab tr").each(function(rowIndex){
                         if($("#recCarTab tr").eq(rowIndex).find("td").eq(2).html()==carnum && $("#recCarTab tr").eq(rowIndex).find("td").eq(3).html()=="接车"){
                             $("#recCarTab tr").eq(rowIndex).remove()
                         }
                     })
                     
                 }
              
              
                 if(pos==220){
                     $("#recCarTab tr").each(function(rowIndex){
                         if($("#recCarTab tr").eq(rowIndex).find("td").eq(2).html()==carnum && $("#recCarTab tr").eq(rowIndex).find("td").eq(3).html()=="发车"){
                             $("#recCarTab tr").eq(rowIndex).remove()
                         }
                     })
                     
                 }
                  
              }
              
               
           })
          
        } 
    }) 
}






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