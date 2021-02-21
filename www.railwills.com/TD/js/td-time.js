/**
 * Created by asd on 2017/10/25.
 */
$(function() {
    svgBgHead()
    leftT()
})

//位数不租补零
function zero(tim) {
    return tim<10&&!(tim<0)?'0'+tim:tim
}





function svgBgHead(){
    for(var i=0;i<6*24+1;i+=1){
        if(i%6==0){
		
            WLine(i*svg.TimeX,20,i*svg.TimeX,24,'','green',0,2,"","","",SVGT)  //纵线
            WText(i/6,i*svg.TimeX,22,"",'green',12,"",SVGT)
			
        }
        else{
			
            WLine(i*svg.TimeX,22,i*svg.TimeX,24,'','green',0,2,"","","",SVGT)       //纵线
        }

    }
	
    WLine(0,24,svg.TimeX*6*24,24,'','green',0,2,"","","",SVGT)       //横线
}






//当前时间线

//时间
function leftT() {
    var time=writeCurrentDate();
    var hour = time.hour;  
	var minute = time.minute;
	var sec = time.sec;

    var texH=hour+':'+minute+':'+sec;
	    
	var timeL=(hour*6+minute/10+sec/600)*svg.TimeX;
	var timeLx=timeL-30;
		$('#sTime').text(texH)
	var TT=document.getElementById("sTime").style.left;
        TT!=timeLx+"px"?document.getElementById("sTime").style.left=timeLx+"px":""
		
		timeLine(timeL)
		
    setTimeout(leftT,1000)
}
//线
function timeLine(tim){
	
	var TL=document.getElementById("lTime").style.left;
	    TL!=tim+"px"?document.getElementById("lTime").style.left=tim+"px":""
	
	}
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