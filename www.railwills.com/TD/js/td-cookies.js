// JavaScript Document
/**
  *  添加cookies
*/
$.cookie.json=true;

/**编码部分,未完成没有回执重新发送的部分**/

//声明后台通信变量Background communication
var BgCom={
	one_FH:'AB',          //阶段计划，调度命令，网络连接，报点信息帧头
	one_FT:'AC',          //阶段计划，调度命令，网络连接，报点信息帧头
	SPlan_type:"81" ,     //阶段计划类型
	
	
	funNum:{},
	sendStation:"01",       //发送方，列调
	recStation:[],
    
	OrderNum:[],
	toTime:{
		year:null,
		month:null,
		day:null,
		hour:null,
		minute:null,
		sec:null
		},
	BgCar:[],                   //未被删除，且未报点的车次号
	newCar:[],                  //未存储信息的车次
	rsTime:[],
	rsType:[]
	
}
//JSON数据
var json={
	 k:0,
	 A:{},       //阶段计划JOSN
	 recData:{}
	 	 
}

//阶段计划数据帧编码
function SPlanFrame(head,type,fun,send,rec,csn,to_tim,rec_tim,name,cnum,nsta,rs_tim,rs_type,tail){
	
	var frame=head+type+fun+send+rec+csn+to_tim+rec_tim+name+cnum+nsta+rs_tim+rs_type+tail;
	return frame
}
	


/*下计划，与各站车务终端通信*/
function pointTojs(){

	//对阶段计划部分数据转换
	//功能码、接收方、到发时间、到发类型存储
	
	BgCom.newCar.forEach(function(value){
	
		var funNum=[];
		$.each(svg.CarNum[value],function(i,val){

			var rstime={hour:zero(parseInt(this.x/120)),minute:zero(parseInt((this.x%120)/2))};
			BgCom.rsTime.push(rstime);
			BgCom.recStation.push((this.y-50)/150+10);
				
			if(i==0){
				funNum.push('02');
				BgCom.rsType.push('01')	             
			}
			else if(i==svg.CarNum[value].length-1){
				funNum.push('01')
				BgCom.rsType.push('04')
			}
			else{
				this.y!=svg.CarNum[value][i+1].y? this.y!=svg.CarNum[value][i-1].y? (funNum.push('01','02'),BgCom.rsType.push('03','03'),BgCom.rsTime.push(rstime),BgCom.recStation.push((this.y-50)/150+10)):(BgCom.rsType.push('02'),funNum.push('02')):(BgCom.rsType.push('02'),funNum.push('01'))
			}
		})
		BgCom.funNum[value]=funNum.slice(0)
		
    });
	

	//下达时间存储
	var time = writeCurrentDate()

	BgCom.toTime=time;

	
	//下达阶段计划JSON数据	
	SplanJson()	
	
}
var nx_v
function ordernum(nx){
	if(BgCom.OrderNum.indexOf(zero(nx))!=-1){
		console.log(nx)
		nx+=1;
		ordernum(nx)
	}
	else{
		nx_v = zero(nx)
	}
		
}


//定义下达阶段计划JSON数据
function SplanJson(){
	var k=json.k;
	
	var tim=BgCom.toTime; 
	console.log(BgCom.funNum)
	console.log(BgCom.BgCar)
	BgCom.newCar.forEach(function(value){
		$.each(BgCom.funNum[value],function(n){
			var head=BgCom.one_FH;
			var type=BgCom.SPlan_type;
			
			var fun=this;
			var send=BgCom.sendStation;
			var rec=BgCom.recStation.slice(0,1);
			//命令序号存储
			ordernum(n)	
			var csn= nx_v
			BgCom.OrderNum.push(csn)
			
			var to_tim=''+tim.year+tim.month+tim.date+tim.hour+tim.minute+tim.sec;
			var cnum
			value<1000? value<100? value<10?   cnum="000"+value: cnum="00"+value: cnum="0"+value:cnum = value
			var nsta
			this=='01'? nsta=BgCom.recStation[0]-1:nsta=BgCom.recStation[0]+1
			BgCom.recStation.splice(0,1);
			var rs_tim=''+BgCom.rsTime[0].hour+BgCom.rsTime[0].minute;
			BgCom.rsTime.splice(0,1);
			var rs_type=BgCom.rsType[0];
			BgCom.rsType.splice(0,1);
			var tail=BgCom.one_FT;
			var frame=SPlanFrame(head,type,fun,send,rec,csn,to_tim,"","",cnum,nsta,rs_tim,rs_type,tail)			
			json.A[k]=frame;	
			k++	
		})
	})
	//清空存储新车信息的数组
	BgCom.newCar.splice(0,BgCom.newCar.length)
	json.k=k;
	//清空后台通信变量
	for(var key in BgCom.funNum){
		delete BgCom.funNum[key];
	}
	
}
/*下计划，与各站车务终端通信*/















/**cookies操作**/
function addCookie(){
	
    /*  cookie值中不能含有分号、逗号和空白符 除非在添加cookie值之前使用encodeURIComponent()全局函数进行编码
          当使用了encodeURIComponent()后 那么在获取cookie值就必须使用相应的decodeURIComponent()函数 */
	/*alert(svg.stations[0]+svg.stations[1]+svg.stations[2]+svg.stations.length)*/
	//  
	
	$.cookie('列调', json.A, { path: '/' });
	
	
}

function getCookie_All(){
	var stat =[]
	
	var bj=0
	var tj=0
	var jn=0
	var nj=0
	var sz=0
	var sh=0
	$.each(json.A,function(k,val){
		if(stat.indexOf(val.substr(8,2))==-1){
			stat.push(val.substr(8,2))
		}
	})
	//console.log(stat)
	stat.forEach(function(v){
		if(v=="10"){
			bj=getCookie_bj()	
		}
		else if(v=="11"){
			tj=getCookie_tj()
		}
		else if(v=="12"){
			jn=getCookie_jn()
		}
		else if(v=="13"){
			nj=getCookie_nj()
		}
		else if(v=="14"){
			sz=getCookie_sz()
		}
		else{
			sh=getCookie_sh()
		}
		
	})


	if(bj==2){
		
		
		$.each(json.recData["bj"],function(key,val){
			for(var k in json.A){
				if(json.A[k].substr(10,2)==val.substr(10,2)){		
					delete json.A[k] 
                    //跳出回执界面并显示回执情况
		            if($('#receiptModal').css("display")=="none"){
		            	$('#receiptModal').css("display","block")
		            }
		            
		            $("#bjReceipt>.circle1").css('background-color',"green")
					
				}		
			}
			
		})
		
		
		
	
		
	}
	if(tj==2){
		$.each(json.recData["tj"],function(key,val){
			for(var k in json.A){
				if(json.A[k].substr(10,2)==val.substr(10,2)){
					
							
					delete json.A[k] 
					//跳出回执界面并显示绘制情况
                    if($('#receiptModal').css("display")=="none"){
                        $('#receiptModal').css("display","block")
                    }
                    
                    $("#tjReceipt>.circle1").css('background-color',"green")		
				}		
			}
					
		})
		
	}
	if(jn==2){
		$.each(json.recData["jn"],function(key,val){
			for(var k in json.A){
				if(json.A[k].substr(10,2)==val.substr(10,2)){
							
					delete json.A[k] 
					
                    //跳出回执界面并显示绘制情况
                    if($('#receiptModal').css("display")=="none"){
                        $('#receiptModal').css("display","block")
                    }
                    
                    $("#jnReceipt>.circle1").css('background-color',"green")
                }
			}
					
		})
		
	}
	if(nj==2){
		$.each(json.recData["nj"],function(key,val){
			for(var k in json.A){
				if(json.A[k].substr(10,2)==val.substr(10,2)){
					
					delete json.A[k] 
                    //跳出回执界面并显示绘制情况
		            if($('#receiptModal').css("display")=="none"){
		            	$('#receiptModal').css("display","block")
		            }
		            
		            $("#njReceipt>.circle1").css('background-color',"green")
				}		
			}
					
		})
		
	}
	if(sz==2){
		$.each(json.recData["sz"],function(key,val){
			for(var k in json.A){
				if(json.A[k].substr(10,2)==val.substr(10,2)){
					
					delete json.A[k] 
                    //跳出回执界面并显示绘制情况
		            if($('#receiptModal').css("display")=="none"){
		            	$('#receiptModal').css("display","block")
		            }
	            
		            $("#szReceipt>.circle1").css('background-color',"green")
				}		
			}
					
		})
		
	}
	if(sh==2){
		$.each(json.recData["sh"],function(key,val){
			for(var k in json.A){
				if(json.A[k].substr(10,2)==val.substr(10,2)){
					
					delete json.A[k] 
                    //跳出回执界面并显示绘制情况
                    if($('#receiptModal').css("display")=="none"){
                        $('#receiptModal').css("display","block")
                    }
                    
                    $("#shReceipt>.circle1").css('background-color',"green")
				}		
			}
					
		})
		
	}			

	if(JSON.stringify(json.A)!="{}"){
		
		setTimeout(getCookie_All,500)
        
	}
	
}
function getCookie_bj(){

	var cookie_bj = $.cookie('北京车务终端回执');
	if(JSON.stringify(cookie_bj)=="{}"||cookie_bj==undefined){
		return 1 
	}
	else{
		
		//存储回执信息
		json.recData["bj"]=	cookie_bj
		return 2
	}

}
function getCookie_tj(){
	
	var cookie_tj = $.cookie('天津车务终端回执');//天津
	console.log(1)
	if(JSON.stringify(cookie_tj)=="{}"||cookie_tj==undefined){
		return 1
	}
	else{
		
		//存储回执信息
		json.recData["tj"]=	cookie_tj
		return 2
	}
}
function getCookie_jn(){

	var cookie_jn = $.cookie('济南车务终端回执');//济南
	if(JSON.stringify(cookie_jn)=="{}"||cookie_jn==undefined){
		return 1 
	}
	else{
		//存储回执信息
		json.recData["jn"]=	cookie_jn
		return 2
	}
}
function getCookie_nj(){

	var cookie_nj = $.cookie('南京车务终端回执');//南京
	if(JSON.stringify(cookie_nj)=="{}"||cookie_nj==undefined){
		return 1
	}
	else{
	
		//存储回执信息
		json.recData["nj"]=	cookie_nj
		return 2
	}
}
function getCookie_sz(){

	var cookie_sz = $.cookie('苏州车务终端回执');//苏州
	if(JSON.stringify(cookie_sz)=="{}"||cookie_sz==undefined){
		return 1 
	}
	else{
		
		//存储回执信息
		json.recData["sz"]=	cookie_sz
		return 2
	}
}
function getCookie_sh(){
	
	var cookie_sh = $.cookie('上海车务终端回执');//上海
	if(JSON.stringify(cookie_sh)=="{}"||cookie_sh==undefined){
		return 1 
	}
	else{

		//存储回执信息
		json.recData["sh"]=	cookie_sh
		return 2
	}
}

function getCookie(){
	
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



function clearCookie() {
    $.cookie("刷新界面","111111111111111111111111", { path: '/' })
    
   
	var keys = $.cookie();

	if (keys) {
		

		$.each(keys,function(key,value){
			//$.removeCookie(key);
            if(key!="网络连接" && key!="模式转换" && key!="刷新界面"){
               $.removeCookie(key,{ path: '/'}); 
            }
			

			//$.removeCookie(key,{path: "/",expires: -1});

			//$.removeCookie(key,{path: "/",domain: document.domain,expires: -1});

			//$.removeCookie(key,{path: "/",domain: "mp.csdn.net",expires: -1});
		}) 

	}
    
    
        if($.cookie("刷新界面").substr(0,1)==1){
            
            alert("已恢复初始状态")
            window.location.reload()
            var str=rePlaceStr($.cookie("刷新界面"),1,"2")
            $.cookie("刷新界面", str, { path: '/' })
            
        }
    
}





//写cookies
function setCookie_wl(value) 
{ 
    $.cookie("网络连接", value, { path: '/' });
} 



//读取cookies 
function getCookie_wl() 
{        
    
	var cookieNet = $.cookie('网络连接');
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
function delCookie_wl(name) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
}
