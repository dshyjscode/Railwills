window.onload = function () {
            bjmap()
            
		
			
    
    
            //模式转换
            get_mszh();
            wangluo();
    
            //复现
            
           getCookie_recurrent()
    
            Refresh();
    
            

}




		
		
	 function liansuocookie(){ 
	
     setTimeout("liansuocookie();",1000);
	 
	 if(getCookie("test")=="1")
	 { 
		 alert("帧头="+getCookie("zhentou" )+";"+"类型="+getCookie("leixing")+";"+"功能码="+getCookie("gongnengma")+";"+"发送方="+getCookie("fasongfang")+";"+"接收方="+getCookie("jieshoufang")+";"+"状态="+getCookie("zhuangtai")+";"+"帧尾="+getCookie("zhenwei"));
		 setCookie("test","0");
	 }
 }

	 function get_ddmlhz(){ 
	
     setTimeout("get_ddmlhz();",1000);
	 
	 if(getCookie("DDMLHZ")=="1")
	 { 
		 alert("调度命令回执接收成功\n\n"+getCookie("a"));
		 setCookie("DDMLHZ","0");
	 }
 }

function showTime(){ 
 var week=new Array('星期一','星期二','星期三','星期四','星期五','星期六','星期日');
 var now = new Date();
 var year = now.getFullYear();
 var month = now.getMonth();
 var date = now.getDate();
 var day = now.getDay();
 var hour = now.getHours();
 var minutes = now.getMinutes();
 var second = now.getSeconds(); 
  month=month+1;
     month<10?month='0'+month:month; 
     
     hour<10?hour='0'+hour:hour; 
     minutes<10?minutes='0'+minutes:minutes; 
     second<10?second='0'+second:second;
     var now_time =  year + '年' + month + '月' + date + '日' + ' ' + hour + ':' + minutes + ':' + '' + second + ' '; 
     document.getElementById('timetext').value=now_time; 
     setTimeout("showTime();",1000);      //每隔1秒刷新一次
 } 

function Refresh(){
        if( $.cookie('刷新界面')==undefined){
        $.cookie("刷新界面", "000000000000000000000000", { path: '/' })
        }
        setTimeout("Refresh();",1000);
        if($.cookie("刷新界面").substr(3,1)==1){
        
           window.location.reload()
           var str=rePlaceStr($.cookie("刷新界面"),4,"2")
           $.cookie("刷新界面", str, { path: '/' })
        }
    }


//模式转换操作
 function get_mszh(){
     if(getCookie("模式转换")== undefined){
        setCookie("模式转换","1"); 
     }   
     setTimeout("get_mszh();",500);
     
     if(getCookie("模式转换")=="1"){
         if(model==0){
             //alert("转换为自律模式")
             get_moshizhuanhuan()    
         
         }
     }
     else if(getCookie("模式转换")=="0"){
         if(model==1){
             //alert("转换为非常站控模式")
             get_moshizhuanhuan()    
         
         }  
     }
 } 
var model=1;
function get_moshizhuanhuan()
  {
   if(model==1){
   //alert("模式转换成功");
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x,y;
    x=620;
    y=145;
    context.beginPath();
    context.strokeStyle = 'red';
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="red";
    context.fill();
    context.stroke();

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x,y;
    x=880;
    y=145;
    context.beginPath();
    context.strokeStyle = 'black';
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="black";
    context.fill();
    context.stroke();
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x,y;
    x=750;
    y=145;
    context.beginPath();
    context.strokeStyle = 'yellow';
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="yellow";
    context.fill();
    context.stroke();
    model=0;
   }
   else {
    //alert("模式转换成功");
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x,y;
    x=620;
    y=145;
    context.beginPath();
    context.strokeStyle = 'black';
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="black";
    context.fill();
    context.stroke();

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x,y;
    x=880;
    y=145;
    context.beginPath();
    context.strokeStyle = 'green';
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="green";
    context.fill();
    context.stroke();
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x,y;
    x=750;
    y=145;
    context.beginPath();
    context.strokeStyle = 'black';
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="black";
    context.fill();
    context.stroke();
    model=1;
   }
  }
function wangluo(){
//网络连接刷新检查
if(getCookie("网络连接")== undefined){
    setCookie("网络连接","00000000000000000000000000000"); 
}
if(getCookie("网络连接").substr(0,1)=="2")
{
	$("#lianjieyingyongfuwuqi").text("应用服务器已连接");
			var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			var x,y;
			x=95;
			y=155;
			context.beginPath();
			context.strokeStyle = '#FFF';
            context.arc(x-30,y-13,7,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.strokeStyle = 'green';
            context.arc(x-30,y-13,5,0,2*Math.PI);
            context.fillStyle="green";
            context.fill();
            context.stroke();	
	 
} 
if(getCookie("网络连接").substr(2,1)=="2"){
    $("#lianjieliansuo").text("联锁已连接");
			var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			var x,y;
			x=95;
			y=115;
			context.beginPath();
			context.strokeStyle = '#FFF';
            context.arc(x-30,y-13,7,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.strokeStyle = 'green';
            context.arc(x-30,y-13,5,0,2*Math.PI);
            context.fillStyle="green";
            context.fill();
            context.stroke();
}
if(getCookie("网络连接").substr(1,1)=="2"){
    $("#lianjiechewuzhongduan").text("车务终端已连接");
			var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			var x,y;
			x=95;
			y=75;
			context.beginPath();
			context.strokeStyle = '#FFF';
            context.arc(x-30,y-13,7,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.strokeStyle = 'green';
            context.arc(x-30,y-13,5,0,2*Math.PI);
            context.fillStyle="green";
            context.fill();
            context.stroke();
			getCookie_one()
}
}

function BJNZYYFWQ() {

	var str = rePlaceStr(getCookie("网络连接"),1,"1");
	setCookie("网络连接",str);
    alert("连接应用服务器成功");
	$("#lianjieyingyongfuwuqi").text("应用服务器已连接");
			var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			var x,y;
			x=95;
			y=155;
			context.beginPath();
			context.strokeStyle = '#FFF';
            context.arc(x-30,y-13,7,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.strokeStyle = 'green';
            context.arc(x-30,y-13,5,0,2*Math.PI);
            context.fillStyle="green";
            context.fill();
            context.stroke();
}

function BJNZLS() {
	var str = rePlaceStr(getCookie("网络连接"),3,"1");
	setCookie("网络连接",str);
    alert("连接联锁成功");
	$("#lianjieliansuo").text("联锁已连接");
			var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			var x,y;
			x=95;
			y=115;
			context.beginPath();
			context.strokeStyle = '#FFF';
            context.arc(x-30,y-13,7,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.strokeStyle = 'green';
            context.arc(x-30,y-13,5,0,2*Math.PI);
            context.fillStyle="green";
            context.fill();
            context.stroke();
}

function BJNZCWZD() {
	if(getCookie("网络连接").substr(0,1)=="2"){
		var str = rePlaceStr(getCookie("网络连接"),2,"1");
		setCookie("网络连接",str);
    	alert("连接车务终端成功");
		$("#lianjiechewuzhongduan").text("车务终端已连接");
			var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			var x,y;
			x=95;
			y=75;
			context.beginPath();
			context.strokeStyle = '#FFF';
            context.arc(x-30,y-13,7,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.strokeStyle = 'green';
            context.arc(x-30,y-13,5,0,2*Math.PI);
            context.fillStyle="green";
            context.fill();
            context.stroke();
			getCookie_one()
	}
}

function tuichu(){
		 window.close()
}



//查询当前时间
function writeCurrentDate() {
   var now = new Date();
   var year = now.getFullYear(); //得到年份
   var month = zero(now.getMonth()+1);//得到月份
   var date = zero(now.getDate());//得到日期
   //var day = now.getDay();//得到周几
   var hour = zero(now.getHours());//得到小时
   var minu = zero(now.getMinutes());//得到分钟
   var sec = zero(now.getSeconds());//得到秒
 　//var MS = now.getMilliseconds();//获取毫秒
   //var week;
  // var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
  // week = arr_week[day];
   //var time = "";
   //time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu + ":" + sec + " " + week;
   //设置得到当前日期的函数的执行间隔时间，每1000毫秒刷新一次。
  // var timer = setTimeout("writeCurrentDate()", 1000);
  return{ 
         year:year,
		 month:month,
		 date:date,
		 hour:hour,
		 minute:minu,
		 sec:sec
        }	
}