// JavaScript Document
/**
  * cookies操作
*/
$.cookie.json=true;
var interval=2000;
var count=0;//显示循环计数值
//var count1=9;//记录车辆数，根据车辆数确定时间循环刷新
var flag_TSRS=0;
var flag_TD=0;
var flag_location=0;

window.onload=function(){

    connectgetcookies();//亮灯
    loadi();
    //setInterval(loadi,interval);
}//总控制


/*setTimeout(function (){
　　//processing
　　setTimeout(arguments.callee, interval);
}, interval); */

////声明后台通信变量Background communication
//var BgCom={
//	one_FH:'AB',              ///回执帧头
//	one_FT:'AC',              ///回执帧尾
//	
//	SPlanReceipt_type:"81" ,     //阶段计回执划类型
//	funNumReceipt:'04',
//	send:"10",
//	td_rec:"01",
//	recTime:{
//		year:null,
//		month:null,
//		day:null,
//		hour:null,
//		minute:null,
//		sec:null
//	},
//	
//	
//	
//	//车务终端给联锁的数据	
//	SMTtoCBI_type:"8F",
//	funNumCBI:null,
//	
//	cbi_rec:"16",
//	orderNum:null,
//	car:null,
//	routeNum:null,       //进路信息,数字 
//	trigger_mode:null ,  //触发方式
//	rs_type:null
//}

var json={
    k:0,
    td_Plan:[],  //列调下达的阶段计划json数据
    connect:[], //网络连接的json数据
    location:[], //列车位置的json数据
    TSRS:[], //临时限速的json数据
    TD:[],//列调的json数据    
    MA:[],//rbc的MA数据

    //recJson:{},  //阶段计划回执json数据
    //sendCBI:{},  //车务终端发送给联锁的JSON数据
    

    //等待发送的进路信息
    //td_PlanWait:[],     //列调下达的阶段计划json数据
    //routeAllNum:[],    //总进路信息
}
//阶段计划回执数据帧编码
//每一位信息  帧头、类型、功能码、发送方、接收方、命令序号、下达时间、回执时间、值班人员姓名、车次号、上（下）一站、到站（发车）时间、到发类型、帧尾
//function SPlanReceiptFrame(head,type,fun,send,rec,csn,to_tim,rec_tim,name,cnum,nsta,rs_tim,rs_type,tail){
//	
//	var frame=head+type+fun+send+rec+csn+to_tim+rec_tim+name+cnum+nsta+rs_tim+rs_type+tail;
//	return frame
//}
////进路信息数据帧编码
////每一位信息  帧头、类型、功能码、发送方、接收方、命令序号、车次号、进路始端按钮、进路终端按钮、触发方式、到发类型、帧尾
//function routeFrame(head,type,fun,send,rec,csn,cnum,routeNum,tri_mode,rs_type,tail){
//	
//	var frame=head+type+fun+send+rec+csn+cnum+routeNum+tri_mode+rs_type+tail;
//	return frame
//}
//
////20201011 RBC 发MA信息数据帧编码
////每一位信息：帧头2、类型2、车次号4、行车许可（列车位置）4、临时限速（列车速度）3、紧急停车4、帧尾2
//function MAsendFrame(head,type,cnum,Driving_license,Tem_sp_res,Emerg_stop,tail){
//	
//	var frame=head+type+cnum+Driving_license+Tem_sp_res+Emerg_stop+tail;
//	return frame
//}



//定时执行函数
//var dsTimer_one
//var dsTimer_two
//var dsTimer_three
//var dsTimer_four
function loadi(){
    setTimeout("loadi();",2000);
    getCookie_one();
}

function getCookie_one(){//读取cookie为字符串
	var cookieTD = JSON.stringify($.cookie('列调'));//js语言变成字符串
    if(cookieTD!=""&&cookieTD!=undefined){
        flag_TD=1;
    }
    else{
        flag_TD=0;
        //cookieTD="{"+"000"+":"+"0AB810101100000000000000000000011000001AC0"+","+"111"+":"+"0AB810101100000000000000000000011000001AC0"+"}" 
    }

    var cookie_TSRS = $.cookie('临时限速服务器');
    if(cookie_TSRS!=""&&cookie_TSRS!=undefined){
        flag_TSRS=1;
    }
    else{
        flag_TSRS=0;
       // cookie_TSRS="ABD001232201000001K0000000K000000001000000000000010000000000000100AC" 
    }
    
    var cookie_location = $.cookie('列车位置');
    if(cookie_location!=""&&cookie_location!=undefined){
        flag_location=1;
    }
    else{
        flag_location=0;
        //cookie_location="AB12344321567887659012210934566543AC" 
    }

    var cookie_connect = $.cookie('网络连接');  
    if(cookie_connect==undefined||cookie_connect==""){
       cookie_connect="00000000000000000000000000000"
    }




    //if(JSON.stringify(cookieTD)=="{}"||cookieTD==undefined) {
	//	dsTimer_one = setTimeout(function(){
	//	this.getCookie_one()
	//	},10); 
	//}
	//else{
	//	clearTimeout(dsTimer_one) //清理定时任务
	//	saveJson(cookieTD,cookie_connect,cookie_location,cookie_TSRS)
	//}
    saveJson(cookieTD,cookie_connect,cookie_location,cookie_TSRS)
}
//存储获取到的列调信息

function saveJson(temp1,temp2,temp3,temp4){
	var cookie_TD = temp1;
    var cookie_connect = temp2;
	var cookie_location = temp3;
	var cookie_TSRS = temp4;
	//var cookie_MA = temp5;

    //var temp = cookie_TD.split(":")
    if(flag_TD==1){
        var temp_length = cookie_TD.split(":")
        for (var i = 0; i < temp_length.length-1; i++) {
        json.td_Plan.push(cookie_TD.substr((47*i)+6,40))
        }
    }else{
        json.td_Plan="无相关信息"
    }//数位数，字符串变成数组

    if(flag_TSRS==1){
        json.TSRS=cookie_TSRS
    }else{
        json.TSRS="无相关信息"
    }
    
    if(flag_location==1){
        json.location=cookie_location
    }else{
        json.location="无相关信息"
    }
    json.connect=cookie_connect
    //遍历4个cookies信息存储到json数组中

	if((json.td_Plan.length!=0)&&(json.connect.length!=0)&&(json.location.length!=0)&&(json.TSRS.length!=0)){
		//clearTimeout(dsTimer_two)
		Json_to_saveshow()	
		//console.log(json.td_Plan)
	}
	else{
		alert("信息错误，请刷新页面后再次尝试。")
	}
}//存储列调信息到json中

//车务终端给列调回执json数据
function Json_to_saveshow(){
	/*var k=json.k;
	
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
	*/
	//发完回执3s后继续查询列调回执
	//dsTimer_three=setTimeout(getCookie_one,3000)
	//存储列调计划在显示变量里

	show.td_PlanShow=json.td_Plan.slice(0)

	//清空存储列调计划的变量
	//json.td_Plan.splice(0,json.td_Plan.length)
    show.connectShow=json.connect.slice(0)
    //json.connect.splice(0,json.connect.length)

    show.locationShow=json.location.slice(0)
    //json.location.splice(0,json.location.length)

    show.TSRSShow=json.TSRS.slice(0)
    //json.TSRS.splice(0,json.TSRS.length)
    
    show.beijingCBI=$.cookie('北京联锁');
    if(show.beijingCBI!=""&&show.beijingCBI!=undefined){
        show.beijingCBI=$.cookie('北京联锁');
    }else{
        show.beijingCBI="无相关信息"
    }
    show.tianjinCBI=$.cookie('天津联锁');
    if(show.tianjinCBI!=""&&show.tianjinCBI!=undefined){
        show.tianjinCBI=$.cookie('天津联锁');
    }else{
        show.tianjinCBI="无相关信息"
    }

    show.jinanCBI=$.cookie('济南联锁');
    if(show.jinanCBI!=""&&show.jinanCBI!=undefined){
        show.jinanCBI=$.cookie('济南联锁');
    }else{
        show.jinanCBI="无相关信息"
    }

    show.nanjingCBI=$.cookie('济南联锁');
    if(show.nanjingCBI!=""&&show.nanjingCBI!=undefined){
        show.nanjingCBI=$.cookie('济南联锁');
    }else{
        show.nanjingCBI="无相关信息"
    }

    show.suzhouCBI=$.cookie('济南联锁');
    if(show.suzhouCBI!=""&&show.suzhouCBI!=undefined){
        show.suzhouCBI=$.cookie('济南联锁');
    }else{
        show.suzhouCBI="无相关信息"
    }

    show.shanghaiCBI=$.cookie('济南联锁');
    if(show.shanghaiCBI!=""&&show.shanghaiCBI!=undefined){
        show.shanghaiCBI=$.cookie('济南联锁');
    }else{
        show.shanghaiCBI="无相关信息"
    }

    show.CTC=$.cookie('站场图');
    if(show.CTC!=""&&show.CTC!=undefined){
        show.CTC=$.cookie('站场图');
    }else{
        show.CTC="无相关信息"
    }


    //将数组信息转存到结构体中
	//存储显示变量
	SaveShow()
}

//信息显示变量
var show = {
	
	td_PlanShow:[],     //列调下达的阶段计划json数据
    connectShow:[],     //网络连接数据
    locationShow:[],    //列车位置数据
    TSRSShow:[],        //临时限速数据
    MAShow:[],          //MA数据
    beijingCBI:[],
    tianjinCBI:[],
    jinanCBI:[],
    nanjingCBI:[],
    suzhouCBI:[],
    shanghaiCBI:[],
    CTC:[],
    
	//order:[],        //序号
	car:[],            //车次
	rs_Car:[],         //接发车
	carWhere:[],       //上下行
    carSpeed:[],       //限速速度
	//carTrack:{},     //股道
	planTime:[],       //计划开行时间
	//routeAll:[],       //进路信息        
    status:[],         //状态
    location:[],       //列车位置
    
    function_num:[],    //功能码
    ordertype:[],       //命令类型 1正线限速 2测线限速
    ordernum:[],        //命令号
    TSRS_route:[],      //路线  京沪线上行或下行
    Starting_speedlimit:[],//限速起点
    Ending_speedlimit:[],//限速终点
    TSRS_reason:[],      //限速原因
    TSRS_starttime:[],  //限速开始时间
    TSRS_endtime:[],    //限速结束时间

}




//存储显示变量
function SaveShow(){
    for(var m=0;m<show.td_PlanShow.length;m++){
    //show.td_PlanShow.forEach(function(val,n){
        //var order=val.substr(10,2)
		//show.order.push(order)
		//var car = val.substr(26,4)
		//show.car.push(car)
		//show.planTime.push(val.substr(32,4))
		//show.status.push("未触发")
        show.car.push(show.td_PlanShow[m].substr(26,4))
        show.rs_Car.push(show.td_PlanShow[m].substr(4,2))//countshow.td_PlanShow[m]
	if(show.td_PlanShow[m].substr(4,2)=="01"){
		if(parseInt(show.td_PlanShow[m].substr(8,2))<parseInt(show.td_PlanShow[m].substr(30,2))){
			show.carWhere.push("上行")
		}
		else{
			show.carWhere.push("下行")
		}	
	}
	else{
		if(parseInt(show.td_PlanShow[m].substr(8,2))<parseInt(show.td_PlanShow[m].substr(30,2))){
			show.carWhere.push("下行")
		}
		else{
			show.carWhere.push("上行")
		}	
	}
    
       //从列调读取车次号、触发信息、上下行信息
   
    if(show.TSRSShow.substr(64,2)=="01"){
        show.carSpeed.push("040")
    }else if(show.TSRSShow.substr(64,2)=="02"){
        show.carSpeed.push("080")
    }else if(show.TSRSShow.substr(64,2)=="03"){
        show.carSpeed.push("120")
    }else if(show.TSRSShow.substr(64,2)=="04"){
        show.carSpeed.push("160")
    }else if(show.TSRSShow.substr(64,2)=="05"){
        show.carSpeed.push("255")
    }else if(show.TSRSShow.substr(64,2)=="06"){
        show.carSpeed.push("380")
    }else{
        show.carSpeed.push("000")
    }
       //从临时限速读取列车速度
    }
    
    if(show.TSRSShow.substr(4,2)=="01"){
        show.function_num.push("限速命令下达")
    }else{
        show.function_num.push("限速命令取消")
    }//功能码
    
    if(show.TSRSShow.substr(10,2)=="01"){
        show.ordertype.push("正线限速")
    }else{
        show.ordertype.push("测线限速")
    }//命令类型
    
    show.ordernum.push(show.TSRSShow.substr(12,4))//命令号

    if(show.TSRSShow.substr(16,2)=="01"){
        show.TSRS_route.push("京沪线上行")
    }else{
        show.TSRS_route.push("京沪线下行")
    }//线路
    
    show.Starting_speedlimit.push(show.TSRSShow.substr(18,8))//限速起点
    show.Ending_speedlimit.push(show.TSRSShow.substr(26,8))//限速终点
    
    if(show.TSRSShow.substr(34,2)=="01"){
        show.TSRS_reason.push("施工中")
    }else{
        show.TSRS_reason.push("风雨雪")
    }//限速原因

    show.TSRS_starttime.push(show.TSRSShow.substr(36,14))//限速开始时间
    show.TSRS_endtime.push(show.TSRSShow.substr(50,14))//限速结束时间

    var location_carnum=Math.trunc(show.locationShow.length/8)
    for (var i = 0; i < location_carnum; i++) { 
        //show.car.push(show.locationShow.substr((i*8)+2,4))
        show.location.push(show.locationShow.substr((i*8)+6,4))
    }//列车位置cookie读取车次号

    addcookies_MA();//发送MA的cookies
    SPlanShow();

    //var k = 0;
    //function  testAl()
    //{
    //    if (k < show.td_PlanShow.length){
    //        test(k);
    //        k++;
    //    }
    //    if( k < show.td_PlanShow.length) setTimeout(function(){
    //        testAl();
    //    },1000);
    //}
    //testAl();
    //
    //function test(k){
    //    SPlanShow();
    //    count++;//全局变量记录车辆序号，进行记数
    //}
    //if(count==show.td_PlanShow.length){
    //    count=0;
    //    setTimeout(clear_allarr,1000);
    //}//迭代进行时间刷新

    //var n = 0;
    //while(n < show.td_PlanShow.length){
    //    setTimeout(function(){
    //        alert("1");
    //    },2000);           
    //    //setTimeout("alert(n)","1000"); 
    //    n++;
    //    count++;//全局变量记录车辆序号，进行记数
    //    if(count==show.td_PlanShow.length){
    //        count=0;
    //        setTimeout(clear_allarr,1000);
    //    }
    //}   //根据列调的车的数量进行循环显示
    
	//将计划显示在RBC的界面上
}
//var sleep = function(time) {
//    var startTime = new Date().getTime() + parseInt(time, 10);
//    while(new Date().getTime() < startTime) {}
//};
//自律模式的股道和进路排列
//将列调阶段计划显示在界面上，如果是单车，则显示，如果是多车，是否是规定路线，是则显示，不是不显示
function SPlanShow(){//跟随count定时刷新 
    //cleartable();
    setTimeout(cleartable,interval*0.95)
	var rbcTab=document.getElementById("list")
	//var track
	//var time
	//var route show.car.length
    for(var n=0;n<show.car.length;n++){
        var rows = rbcTab.insertRow(n + 1);
        var number = rows.insertCell(0);
        var trainwhere = rows.insertCell(1);
        var vectory = rows.insertCell(2);
        var trainlength = rows.insertCell(3);
        var location = rows.insertCell(4);
        var trainstate = rows.insertCell(5);
        var MAending = rows.insertCell(6);
        var connectionstate = rows.insertCell(7);
        var triggermethod = rows.insertCell(8);
        if(show.car[n]==undefined||show.car[n]==""){
           show.car[n]="重新获取车次状态"
           }
        number.innerHTML = show.car[n];
        
        if(show.carWhere[n]==undefined||show.carWhere[n]==""){
            if(n==0){
                show.carWhere[n]="重新获取车次状态"
            }else{
                show.carWhere[n]=show.carWhere[n-1]
            }
           }
        trainwhere.innerHTML = show.carWhere[n];
        
        var temp_speed="0"
        if(show.carSpeed[n]==undefined||show.carSpeed[n]==""){
            if(n==0){
                temp_speed="重新获取车次状态"
            }else{
                show.carSpeed[n]=show.carSpeed[n-1]
            }
           }
        if(show.carSpeed[count]=="000"){
            temp_speed="取消限速";
        }else{
            temp_speed=show.carSpeed[n]+"km/h"
        }
        vectory.innerHTML = temp_speed;
        
        trainlength.innerHTML = "428.9m";
        
        if(show.location[n]==undefined||show.location[n]==""){
            if(n==0){
                show.location[n]="重新获取车次状态"
            }else{
                show.location[n]=show.location[n-1]
            }
           }
        location.innerHTML = show.location[n];
        
        trainstate.innerHTML = "暂无信息";
        MAending.innerHTML = "180";
        connectionstate.innerHTML = "断联";
        triggermethod.innerHTML = "手动";
    }
    
    var temp_MAshow="不使用";
    if(flag_TSRS==0||flag_TD==0){
        temp_MAshow = "停车";       
    }else{
        temp_MAshow = "不使用";       
    }//临时获取MA信息
    document.getElementById("RBC_CTC1").value = "连接状况："+'\n'+"站场图："+show.CTC;
    document.getElementById("RBC_CTC2").value = "RBC-CTC："+'\n'+"暂无信息";
    
    document.getElementById("RBC_train1").value = "连接状况："+'\n'+json.td_Plan;
    document.getElementById("RBC_train2").value = "RBC-列车："+'\n'
    for(var i=0;i<count;i++){
        var str=document.getElementById("RBC_train2").value
        document.getElementById("RBC_train2").value = str+"车次号："+show.car[i]+'\n'+"行车许可（列车位置）："+show.location[i]+'\n'+"临时限速（列车速度）："+temp_speed+'\n'+"紧急停车："+temp_MAshow+'\n';   
    }//4号框的显示
    document.getElementById("RBC_train2").value = "RBC-列车："+'\n'+"车次号："+show.car[count]+'\n'+"行车许可（列车位置）："+show.location[count]+'\n'+"临时限速（列车速度）："+temp_speed+'\n'+"紧急停车："+temp_MAshow;   

    document.getElementById("RBC_lainsuo1").value = "连接状况："+'\n'+"北京南："+show.beijingCBI+'\n'+"天津南："+show.tianjinCBI+'\n'+"济南西："+show.jinanCBI+'\n'+"南京南："+show.nanjingCBI+'\n'+"苏州北："+show.suzhouCBI+'\n'+"上海虹桥："+show.shanghaiCBI;
    document.getElementById("RBC_lainsuo2").value = "RBC-联锁:"+'\n'+"根据通信协议和上述cookies自行解析。";
    
    document.getElementById("TSRS_connect").value = "连接状况："+'\n'+json.TSRS;
    document.getElementById("RBC_TSRS").value = "RBC-TSRS:"+'\n'+"功能码:"+show.function_num+'\n'+"命令类型:"+show.ordertype+'\n'+"命令号:"+show.ordernum+'\n'+"线路:"+show.TSRS_route+'\n'+"限速起点:"+show.Starting_speedlimit+" "+"限速终点:"+show.Ending_speedlimit+'\n'+"限速原因:"+show.TSRS_reason+'\n'+"限速开始及结束时间:"+"\n"+show.TSRS_starttime+"\n"+show.TSRS_endtime+'\n';

    //clear_allarr();
    setTimeout(clear_allarr,interval*0.95)
    //alert("12321")
	//console.log(document.getElementById("beijing_stationtrack_TX").value)//下拉列表

	//show.rs_Car.forEach(function(val,n){
        
                //document.getElementById("RecOrderNum").innerHTML=show.order[n];
                            //document.getElementById("Rec").innerHTML="接车";
                //time = show.planTime[n].substr(0,2)+"时"+show.planTime[n].substr(2,2)+"分"
                //document.getElementById("RecTime").innerHTML=time ;
                //route = show.routeAll[n].startButton +"->"+ show.routeAll[n].endButton
                //document.getElementById("RecRoute").innerHTML=route ;
                //document.getElementById("RecStatus").innerHTML=show.status[n];		
	//})
	
	//json.td_PlanWait=show.td_PlanShow.slice(0)
	//清空显示变量
	//$.each(show,function(key){
	//	console.log(key)
	//	if(key=="carWhere"){
	//		show.carWhere={}
	//	}
	//	else{
	//		show[key]=[]
	//	}
	//	
	//})
	//SmtRoute_to_CBI()
	//console.log()
}

//setInterval(getCookie_one, count1*1000);//根据车辆数定时循环刷新


//发送联锁询问是否可以发车，列调发来新的车次信息
/*function SmtRoute_to_CBI(){
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
	addCookie("北京车务终端",json.sendCBI)
	getCookie_receipt()
	//在等待数据中，删除已发送数据
	//json.td_PlanWait.filter(function(val){
	//	return val.substr(36,2)!="01"
	//})	
}
*/
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
}

*/






/*以下是非常站控模式调车操作*/
//非常站控模式调车操作
//如果模式转换按钮被按下，且非常站控按钮点亮切换到非常站控模式操作
/*function Mode_Switching(){
	if (model==0){
		clearTimeout(dsTimer_one)
		clearTimeout(dsTimer_two)
		clearTimeout(dsTimer_three)
		clearTimeout(dsTimer_four)
		getCookie_two()
	}
	else{
		getCookie_one()
	}
}
function getCookie_two(){
	var cookieAD = $.cookie('助调');
    if(JSON.stringify(cookieAD)=="{}"||cookieAD==undefined) {
		dsTimer_five = setTimeout(function(){
		this.getCookie_two()
		},10); 
	}
	else{
		clearTimeout(dsTimer_five) //清理定时任务
		saveJson_AD(cookieAD)
	}
}
*/

/*以上是非常站控模式调车操作*/

//网络连接

//function writeCurrentDate(){
//    return 0
//}

    //var cookie_MA = $.cookie('MA'); 
    //json.MA=cookie_MA
    //show.MAShow=json.MA.slice(0)
function connectgetcookies(){
    bjcbigetcookies();
    tjcbigetcookies();    
    jncbigetcookies();
    njcbigetcookies();
    szcbigetcookies();
    shcbigetcookies();
    document.getElementById("liekong").style.backgroundImage="url(images/green.png)";    
    document.getElementById("traintongxin").style.backgroundImage="url(images/green.png)";//有车才亮
    if(flag_TSRS==1){
        document.getElementById("tsrstongxin").style.backgroundImage="url(images/green.png)";

    }
    if(flag_TD==1){
        document.getElementById("ctctongxin").style.backgroundImage="url(images/green.png)";

    }
}
function bjcbigetcookies(){ 
    if($.cookie('网络连接')== undefined){
        $.cookie('网络连接', "00000000000000000000000000000", { path: '/' });
    }
    setTimeout("bjcbigetcookies();",1000);

    if($.cookie('网络连接').substr(21,1)=="2"){
        document.getElementById("liansuo1").style.backgroundImage="url(images/green.png)";
    }
    if($.cookie('网络连接').substr(21,1)=="1")
    { 
        alert("北京南站联锁已连接") 
        document.getElementById("liansuo1").style.backgroundImage="url(images/green.png)";
        var str = rePlaceStr($.cookie('网络连接'),22,"2");
        $.cookie('网络连接', str, { path: '/' });
    }
} 
function tjcbigetcookies(){ 
    if($.cookie('网络连接')== undefined){
        $.cookie('网络连接', "00000000000000000000000000000", { path: '/' });
    }
    setTimeout("tjcbigetcookies();",1000);
    
    if($.cookie('网络连接').substr(22,1)=="2"){
        document.getElementById("liansuo2").style.backgroundImage="url(images/green.png)";
    }

    if($.cookie('网络连接').substr(22,1)=="1")
    { 
        alert("天津南站联锁已连接") 
        document.getElementById("liansuo2").style.backgroundImage="url(images/green.png)";
        var str = rePlaceStr($.cookie('网络连接'),23,"2");
        $.cookie('网络连接', str, { path: '/' });
    }
}
function jncbigetcookies(){ 
    if($.cookie('网络连接')== undefined){
        $.cookie('网络连接', "00000000000000000000000000000", { path: '/' });
    }
    setTimeout("jncbigetcookies();",1000);
    
    if($.cookie('网络连接').substr(23,1)=="2"){
        document.getElementById("liansuo3").style.backgroundImage="url(images/green.png)";
    }

    if($.cookie('网络连接').substr(23,1)=="1")
    { 
        alert("济南西站联锁已连接") 
        document.getElementById("liansuo3").style.backgroundImage="url(images/green.png)";
        var str = rePlaceStr($.cookie('网络连接'),24,"2");
        $.cookie('网络连接', str, { path: '/' });
    }
}
function njcbigetcookies(){ 
    if($.cookie('网络连接')== undefined){
        $.cookie('网络连接', "00000000000000000000000000000", { path: '/' });
    }
    setTimeout("njcbigetcookies();",1000);

    if($.cookie('网络连接').substr(24,1)=="2"){
        document.getElementById("liansuo4").style.backgroundImage="url(images/green.png)";
    }

    if($.cookie('网络连接').substr(24,1)=="1")
    { 
        alert("南京南站联锁已连接") 
        document.getElementById("liansuo4").style.backgroundImage="url(images/green.png)";
        var str = rePlaceStr($.cookie('网络连接'),25,"2");
        $.cookie('网络连接', str, { path: '/' });
    }
}
function szcbigetcookies(){ 
    if($.cookie('网络连接')== undefined){
        $.cookie('网络连接', "00000000000000000000000000000", { path: '/' });
    }
    setTimeout("szcbigetcookies();",1000);
    
    if($.cookie('网络连接').substr(25,1)=="2"){
        document.getElementById("liansuo5").style.backgroundImage="url(images/green.png)";
    }

    if($.cookie('网络连接').substr(25,1)=="1")
    { 
        alert("苏州北站联锁已连接") 
        document.getElementById("liansuo5").style.backgroundImage="url(images/green.png)";
        var str = rePlaceStr($.cookie('网络连接'),26,"2");
        $.cookie('网络连接', str, { path: '/' });
    }
}
function shcbigetcookies(){ 
    if($.cookie('网络连接')== undefined){
        $.cookie('网络连接', "00000000000000000000000000000", { path: '/' });
    }
    setTimeout("shcbigetcookies();",1000);

    if($.cookie('网络连接').substr(26,1)=="2"){
        document.getElementById("liansuo6").style.backgroundImage="url(images/green.png)";
    }

    if($.cookie('网络连接').substr(26,1)=="1")
    { 
        alert("上海虹桥站联锁已连接") 
        document.getElementById("liansuo6").style.backgroundImage="url(images/green.png)";
        var str = rePlaceStr($.cookie('网络连接'),27,"2");
        $.cookie('网络连接', str, { path: '/' });
    }
}
function cleartable(){
    var rbcTable=document.getElementById("list")
    var rowCount=rbcTable.rows.length;
    if(rowCount>=2){
       for (var i=0;i<rowCount;i++){
            rbcTable.deleteRow(i+1);    
            rowCount=rowCount-1;
            i=i-1;
       }
    }
}

function clear_allarr(){
    json.td_Plan.length=0;  
    json.connect.length=0;
    json.location.length=0; 
    json.TSRS.length=0;
    json.TD.length=0;  
    json.MA.length=0;    
    
    show.td_PlanShow.length=0;     
    show.connectShow.length=0;   
    show.locationShow.length=0;  
    show.TSRSShow.length=0;        
    show.MAShow.length=0;         
    
	show.car.length=0;            
	show.rs_Car.length=0;        
	show.carWhere.length=0;       
    show.carSpeed.length=0;       
	show.planTime.length=0;      
    show.status.length=0;         
    show.location.length=0; 
    
    show.beijingCBI.length=0;            
	show.tianjinCBI.length=0;        
	show.jinanCBI.length=0;       
    show.nanjingCBI.length=0;       
	show.suzhouCBI.length=0;      
    show.shanghaiCBI.length=0;         
    show.CTC.length=0; 
   
    show.function_num.length=0;    
    show.ordertype.length=0;       
    show.ordernum.length=0;        
    show.TSRS_route.length=0;     
    show.Starting_speedlimit.length=0;
    show.Ending_speedlimit.length=0;
    show.TSRS_reason.length=0;      
    show.TSRS_starttime.length=0;  
    show.TSRS_endtime.length=0;   

}

function Internet_connection(){
    if($.cookie('网络连接')){
        var str=rePlaceStr($.cookie('网络连接'),20,"1");
        $.cookie('网络连接', str, { path: '/' });
        alert("连接应用服务器成功");
    }
    else{
        $.cookie('网络连接', "00000000000000000000000000000", { path: '/' });
        alert("连接应用服务器失败");

    }
}
function rePlaceStr(str,i,d){
    var string=0;
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

function addcookies_MA(){
	var MA = new Array("BC","98","0001","1213","000","0000","AC");
    MA[2] = show.car[count];     
    MA[3] = show.location[count]; //行车许可目前未知      
    MA[4] = show.carSpeed[count];       
    if(flag_TSRS==0||flag_TD==0){
        MA[5] = "1111";       
    }else{
        MA[5] = "0000";       

    }
    var MA_str = MA.join("");    
    $.cookie('MA', MA_str, { path: '/' });
}

//测试用
function addCookie_ceshi(){
	var json1={0:"AB810201140020190205141516001111102501AC",1:"AB810101110120190205141516001113102503AC",2:"AB810201130220190205141516001112102503AC",3:"AB810101100320190205141516001111102504AC"}
		/*{0:"AB810201100020190205141516011111102501AC",1:"AB810201140020190205141516012311102501AC"}*/
	$.cookie('列调', json1, { path: '/' });
	$.cookie('网络连接', "00000000000000000000000000022", { path: '/' });
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
    //setInterval(getCookie_wangluolianjie, 3000);
    //setInterval(getCookie_liecheweizhi, 3000);
    //setInterval(getCookie_linshixiansu, 3000);
    
}
//测试用


/**cookies操作**/
function addCookie(name,SmtJson){
	/*写cookies*/
    /*  cookie值中不能含有分号、逗号和空白符 除非在添加cookie值之前使用encodeURIComponent()全局函数进行编码
          当使用了encodeURIComponent()后 那么在获取cookie值就必须使用相应的decodeURIComponent()函数 */
	/*alert(svg.stations[0]+svg.stations[1]+svg.stations[2]+svg.stations.length)*/
	//  
	$.cookie(name, SmtJson, { path: '/' });
}


//写cookies
function setCookie(name,value) 
{ 
    var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 



//读取cookies 
function getCookie(name) 
{        
    
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]); 
    else 
        return null; 
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

