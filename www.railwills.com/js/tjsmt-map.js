// JavaScript Document
function tjmap() {
    var x,y,x1,x2,y1,y2,w,h,text;
    var d=100;
    var c=1750;   // 将天津南站站场图在最初的大版本基础上左移c个单位
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.fillStyle = "#000";
    context.fillRect(0, 0, 2000, 1300);
    //主轨道
    context.fillStyle = "#848284";
    
    
    //天津南站主轨道
    context.fillRect(2372-c, 190+d, 563, 5);
    context.fillRect(1770-c, 250+d, 3700-c, 5);
    context.fillRect(1770-c, 310+d, 3700-c, 5);
    context.fillRect(2372-c, 370+d, 563, 5);
    
    x=2560-c;y=485+d;w=190;h=60
    text="天津南站"
    chezhanbiaozhi(x,y,w,h,text)
    
    
    //闭塞分区标志

    bisaifenqu(1770-c,248+d,257+d)
    bisaifenqu(1770-c,308+d,317+d)
    bisaifenqu(1950-c,248+d,257+d)
    bisaifenqu(1950-c,308+d,317+d)
    bisaifenqu(2130-c,248+d,257+d)
    bisaifenqu(2130-c,308+d,317+d)
    bisaifenqu(2274-c,248+d,257+d)
    bisaifenqu(2274-c,308+d,317+d)
    
    
    bisaifenqu(3025-c,248+d,257+d)
    bisaifenqu(3025-c,308+d,317+d)
    
    bisaifenqu(3180-c,248+d,257+d)
    bisaifenqu(3180-c,308+d,317+d)
    bisaifenqu(3360-c,248+d,257+d)
    bisaifenqu(3360-c,308+d,317+d)
    bisaifenqu(3540-c,248+d,257+d)
    bisaifenqu(3540-c,308+d,317+d)
    
    bisaifenqu(3720-c,248+d,257+d)
    bisaifenqu(3720-c,308+d,317+d)
    
    
    
    
    bisaifenqu(2377-c,248+d,257+d)
    bisaifenqu(2377-c,308+d,317+d)
    
    bisaifenqu(2417-c,188+d,197+d)
    bisaifenqu(2417-c,368+d,377+d)
    
    bisaifenqu(2883-c,188+d,197+d)
    bisaifenqu(2883-c,368+d,377+d)
    
    bisaifenqu(2923-c,248+d,257+d)
    bisaifenqu(2923-c,308+d,317+d)
    
			

	//交叉渡线
	duanceguidaohuizhi();   // 后面函数里的坐标要变
    						
	tianjinnanzhancexiangguidao();   // 后面函数里的坐标要变
	
	
	//天津南站下行正向进站信号机
	x=2320-c;y=250+d
    xiaxingxinhaoji(x,y,"red")
	xieshuzi(2295-c,225+d,'X')
	//天津南站下行反方向进站信号机
	x=2320-c;y=340+d
    xiaxingxinhaoji(x,y,"red")
	xieshuzi(2290-c,350+d,'XF')
	
	//天津南站上行正向进站信号机
	x=3193-c;y=340+d
    shangxingxinhaoji(x,y,"red")
	xieshuzi(3178-c,350+d,'S')
	xieshuzi(3050-c,340+d,'4')
	xieshuzi(3155-c,340+d,'6')
	//天津南站上行反方向进站信号机
	x=3193-c;y=250+d
    shangxingxinhaoji(x,y,"red")
	xieshuzi(3173-c,225+d,'SF')
	xieshuzi(3050-c,235+d,'8')
	xieshuzi(3155-c,235+d,'2')			
	
	//天津南站上行信号机第二
	x=2430-c;y=220+d
	shangxingxinhaoji(x,y,"red");
	xieshuzi(2410-c,230+d,'S3')
	//天津南站上行信号机第三
	x=2390-c;y=280+d
	shangxingxinhaoji(x,y,"red");
	xieshuzi(2370-c,290+d,'SI')
	xieshuzi(2320-c,230+d,'1')
    //天津南站上行信号机第四
	x=2390-c;y=340+d
	shangxingxinhaoji(x,y,"red");
	xieshuzi(2370-c,350+d,'SII')
	xieshuzi(2315-c,340+d,'3')
	//天津南站上行信号机第五
	x=2430-c;y=400+d
	shangxingxinhaoji(x,y,"red");
	xieshuzi(2410-c,410+d,'S4')
	
	
	//天津南站下行信号机第二
	x=2930-c;y=190+d
    xiaxingxinhaoji(x,y,"red")
	xieshuzi(2900-c,165+d,'X3')
	//天津南站下行信号机第三
	x=2970-c;y=250+d
    xiaxingxinhaoji(x,y,"red")
	xieshuzi(2940-c,225+d,'XI')
	xieshuzi(3005-c,235+d,'10')
	//天津南站下行信号机第四
	x=2970-c;y=310+d
    xiaxingxinhaoji(x,y,"red")
	xieshuzi(2940-c,285+d,'XII')
	xieshuzi(3005-c,340+d,'12')
	//天津南站下行信号机第五
	x=2930-c;y=370+d
    xiaxingxinhaoji(x,y,"red")
	xieshuzi(2900-c,345+d,'X4')
			
			
	///// 在此处画应答器		    
	
	
	//北京南至天津南区间的无源应答器
	x=1602-c;y=305+d
	xgdwy(x,y)
				
	
	///////////////天津南站X2JG的无源应答器
	x=2118-c;y=260+d
	sgdwy(x,y)
	
	//天津南站S2LQ的无源应答器
	x=1962-c;y=305+d
	xgdwy(x,y)
	
	//天津南站X3JG处的有源应答器	
	x=2268-c;y=260+d
	sgdyy(x,y)
	
	//天津南站X3JG处的无源应答器
	x=2250-c;y=260+d
	sgdwy(x,y)
	
	//天津南站S1LQ处的有源应答器	
	x=2268-c;y=305+d
	xgdyy(x,y)
	
	//天津南站S1LQ处的无源应答器
	x=2250-c;y=305+d
	xgdwy(x,y)
	
	//天津南站X1LQ处的有源应答器	
	x=3186-c;y=260+d
	sgdyy(x,y)
	
	//天津南站X1LQ处的无源应答器
	x=3204-c;y=260+d
	sgdwy(x,y)
	
	//天津南站S3JG处的有源应答器	
	x=3186-c;y=305+d
	xgdyy(x,y)
	
	//天津南站S3JG处的无源应答器
	x=3204-c;y=305+d
	xgdwy(x,y)
	
	//天津南站X2LQ处的无源应答器
	x=3528-c;y=260+d
	sgdwy(x,y)
	
	//天津南站S2JG处的无源应答器
	x=3372-c;y=305+d
	xgdwy(x,y)
							
	//股道编号
	//天津南站股道
	xieshuzi(2655-c,210+d,'3G')
	xieshuzi(2655-c,270+d,'IG')
	xieshuzi(2655-c,330+d,'IIG')
	xieshuzi(2655-c,390+d,'4G')
	
	//信号机编号
    
    
    //连接状态
	lianjiezhuangtaibiaojikong(620,145)
	lianjiezhuangtaibiaojikong(750,145)
	lianjiezhuangtaibiaojigreen(880,145)
	
	text="天津南站车务终端"
	context.fillStyle = "#20b2aa";
	context.font="60px bold 宋体";
    context.fillText(text,500,70);
	
	text="非常站控"
	context.fillStyle = "#FFF";
	context.font="15px bold 宋体";
    context.fillText(text,560,170);
	
	text="允许转为自律模式"
	context.fillStyle = "#FFF";
	context.font="15px bold 宋体";
    context.fillText(text,660,170);
	
	text="自律模式"
	context.fillStyle = "#FFF";
	context.font="15px bold 宋体";
    context.fillText(text,820,170);
}


//函数



function lianjiezhuangtaibiaoji(x,y)
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	context.beginPath();
	context.strokeStyle = '#FFF';
    context.lineWidth = 5;
    context.arc(x-30,y-13,7,0,2*Math.PI);
    context.fillStyle="#FFF";
    context.fill();
    context.stroke();
	
	context.beginPath();
	context.strokeStyle = 'red';
    context.lineWidth = 5;
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="red";
    context.fill();
    context.stroke();
}
function lianjiezhuangtaibiaojikong(x,y)
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	context.beginPath();
	context.strokeStyle = '#FFF';
    context.lineWidth = 5;
    context.arc(x-30,y-13,7,0,2*Math.PI);
    context.fillStyle="#FFF";
    context.fill();
    context.stroke();
	
	context.beginPath();
	context.strokeStyle = '#000';
    context.lineWidth = 5;
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="#000";
    context.fill();
    context.stroke();
}
function lianjiezhuangtaibiaojiyellow(x,y)
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	context.beginPath();
	context.strokeStyle = '#FFF';
    context.lineWidth = 5;
    context.arc(x-30,y-13,7,0,2*Math.PI);
    context.fillStyle="#FFF";
    context.fill();
    context.stroke();
	
	context.beginPath();
	context.strokeStyle = 'yellow';
    context.lineWidth = 5;
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="yellow";
    context.fill();
    context.stroke();
}
function lianjiezhuangtaibiaojigreen(x,y)
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	context.beginPath();
	context.strokeStyle = '#FFF';
    context.lineWidth = 5;
    context.arc(x-30,y-13,7,0,2*Math.PI);
    context.fillStyle="#FFF";
    context.fill();
    context.stroke();
	
	context.beginPath();
	context.strokeStyle = 'green';
    context.lineWidth = 5;
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="green";
    context.fill();
    context.stroke();
}


function sgdyy(x,y)  // 靠上有源应答器
{   
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	//context.fillStyle = "green";
	context.beginPath();
	context.lineWidth = 1;
	context.strokeStyle = "green";			
	context.moveTo( x, y ); // x+7,y-1
	context.lineTo( x-5, y+10);
	context.lineTo( x+5, y+10);
	context.lineTo( x, y);
	//context.fill();
	context.stroke();
}
	
function sgdwy(x,y)  // 靠上无源应答器
{
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	//context.fillStyle = "white";           		  
	context.beginPath();
	context.lineWidth = 1;
	context.strokeStyle = "white";
	context.moveTo( x, y ); // x+7,y-1
	context.lineTo( x-5, y+10);
	context.lineTo( x+5, y+10);
	context.lineTo( x, y);
	//context.fill();
	context.stroke();
}
	
function xgdyy(x,y)   // 靠下有源应答器
{   
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	//context.fillStyle = "green";
	context.beginPath();
	context.lineWidth = 1;
	context.strokeStyle = "green";			
	context.moveTo( x, y ); // x+7,y-1
	context.lineTo( x-5, y-10);
	context.lineTo( x+5, y-10);
	context.lineTo( x, y);
	//context.fill();
	context.stroke();
}
	
function xgdwy(x,y)   // 靠下无源应答器
{
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    //context.fillStyle = "white";           		  
	context.beginPath();
	context.lineWidth = 1;
	context.strokeStyle = "white";
	context.moveTo( x, y ); // x+7,y-1
	context.lineTo( x-5, y-10);
	context.lineTo( x+5, y-10);
	context.lineTo( x, y);
	//context.fill();
	context.stroke();
} 	

function xiaxingdiaochexinhaoji(x,y,color){ 
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
    
	context.beginPath();
	context.strokeStyle = '#FFF';
    context.lineWidth = 5;
    
    context.arc(x-38,y-13,5,0,2*Math.PI);
    context.fillStyle="#FFF";
    context.fill();
    context.stroke();
    
    
	context.beginPath();
	context.strokeStyle = color;
    context.lineWidth = 5;
    
    context.arc(x-38,y-13,3,0,2*Math.PI);
    context.fillStyle=color;
    context.fill();
    context.stroke();
	
	context.beginPath();
	context.lineWidth = 3;
	context.strokeStyle = '#FFF';
	context.moveTo( x-30-16, y-7 ); // x+7,y-1
	context.lineTo( x-30-16, y-19);
	context.stroke();
}
	
function shangxingdiaochexinhaoji(x,y,color)
{ 
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	context.beginPath();
	context.strokeStyle = '#FFF';
    context.lineWidth = 5;
    context.arc(x-21,y-13,6,0,2*Math.PI);
    context.fillStyle="#FFF";
    context.fill();
    context.stroke();
	
	context.beginPath();
	context.strokeStyle = color;
    context.lineWidth = 5;
    context.arc(x-21,y-13,4,0,2*Math.PI);
    context.fillStyle=color;
    context.fill();
    context.stroke();
	
	
	
	context.beginPath();
	context.lineWidth = 3;
	context.strokeStyle = '#FFF';
	context.moveTo( x-30+16, y-7 ); // x+7,y-1
	context.lineTo( x-30+16, y-19);
	context.stroke();
}	
	
function shangxingxinhaoji(x,y,color)
{ 
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	context.beginPath();
	context.strokeStyle = '#FFF';
    console.log(context.lineWidth)
    context.lineWidth = 5;
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="#FFF";
    context.fill();
    context.stroke();
	
	context.beginPath();
	context.strokeStyle = color;
    context.lineWidth = 5;
    context.arc(x-30,y-13,3,0,2*Math.PI);
    context.fillStyle=color;
    context.fill();
    context.stroke();
	
	context.beginPath();
	context.lineWidth = 2;
	context.strokeStyle = '#FFF';
	context.moveTo( x-30+6, y-13 ); // x+7,y-1
	context.lineTo( x-30+16, y-13);
	context.stroke();
	
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#FFF';
	context.moveTo( x-30+16, y-8 ); // x+7,y-1
	context.lineTo( x-30+16, y-18);
	context.stroke();
}



//上行双黄灯
function shangxingxinhaojiUUdeng(x,y,color1,color2)
{ 
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	//第二个灯位
	context.beginPath();
	context.strokeStyle =color1;
	context.lineWidth = 2;
    context.arc(x-42,y-13,7,0,2*Math.PI);
    context.fillStyle=color1;
    context.fill();
    context.stroke();
	//第二个黄灯
	context.beginPath();
	context.strokeStyle = color2;
    context.arc(x-42,y-13,5,0,2*Math.PI);
    context.fillStyle= color2;
    context.fill();
    context.stroke(); 
}


function xiaxingxinhaoji(x,y,color)
{ 
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	context.beginPath();
	context.strokeStyle = '#FFF';
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="#FFF";
    context.fill();
    context.stroke();
	
	context.beginPath();
	context.strokeStyle = color;
    context.arc(x-30,y-13,3,0,2*Math.PI);
    context.fillStyle=color;
    context.fill();
    context.stroke();
	
	context.beginPath();
	context.lineWidth = 2;
	context.strokeStyle = '#FFF';
	context.moveTo( x-30-6, y-13 ); // x+7,y-1
	context.lineTo( x-30-16, y-13);
	
	context.stroke();
	
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#FFF';
	context.moveTo( x-30-16, y-8 ); // x+7,y-1
	context.lineTo( x-30-16, y-18);
	
	context.stroke();
}

//下行双黄灯
function xiaxingxinhaojiUUdeng(x,y,color1,color2)
{ 
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	//第二个灯位
	context.beginPath();
	context.strokeStyle =color1;
	context.lineWidth = 2;
    context.arc(x-18,y-13,7,0,2*Math.PI);
    context.fillStyle=color1;
    context.fill();
    context.stroke();
	//第二个黄灯
	context.beginPath();
	context.strokeStyle = color2;
    context.arc(x-18,y-13,5,0,2*Math.PI);
    context.fillStyle= color2;
    context.fill();
    context.stroke(); 
	
	
}

function bisaifenqu(x,y1,y2)
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	//context.fillStyle = "#FFF";
	context.strokeStyle = '#FFF';
	context.beginPath();
    context.moveTo( x, y1 );
	context.lineTo( x, y2 );
	context.stroke();

}
function zuocechedang(x1,x2,y1,y2)
{
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	context.beginPath();
	context.strokeStyle = '#FFF';
	context.lineWidth = 2; 
    context.moveTo( x1, y1 );
	context.lineTo( x2, y1 );
    context.lineTo( x2, y2 );
	context.lineTo( x1, y2 );
    context.stroke();
}
function chezhanbiaozhi(x,y,w,h,text)
{
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	context.fillStyle = "#FFF";
	context.fillRect(x, y, w, h);
	context.fillStyle = "#000";
	context.fillRect(x+5, y+5, w-10, h-10);
	context.fillStyle = "#FDFD00";
	context.font="30px bold 宋体";
    context.fillText(text,x+33,y+38);
}

function xieshuzi(x,y,text)
{
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	

	context.fillStyle = "#FFF";
	context.font="12px bold 宋体";
    context.fillText(text,x-10,y);
}
function huaxiaxingxiaoche(x,y)
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	context.fillStyle = "blue";
    
    context.fillRect(490, 235, 60, 15);
	context.beginPath();
	context.lineWidth = 1;
	context.strokeStyle = 'blue';
	
	context.moveTo( x+60, y ); // x+7,y-1
	context.lineTo( x+60, y+15);
	context.lineTo( x+90, y+15);
	context.lineTo( x+60, y);
	context.fill();
	context.stroke();
	
	context.fillStyle = "red";
	context.fillRect(326, 250, 427, 5);
	
}

function huashangxingxiaoche(x,y)
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	context.fillStyle = "blue";
    
    context.fillRect(10399, 295, 60, 15);
	context.beginPath();
	context.lineWidth = 1;
	context.strokeStyle = 'blue';
	
	context.moveTo( x, y ); // x+7,y-1
	context.lineTo( x, y+15);
	context.lineTo( x-30, y+15);
	context.lineTo( x, y);
	context.fill();
	context.stroke();
	
	context.fillStyle = "red";
	context.fillRect(10190, 310, 507, 5);
	
}

function duanceguidaohuizhi()  // 天津南站交叉渡线绘制
{
	var c=1750;
	var d=100;
	//  6/8号双动道岔绘制
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	var x1=3050-c;
	var y1=260+d;
	var x2=3155-c;
	var y2=304+d;
	context.moveTo( x1, y1 ); // x+7,y-1
	context.lineTo( x2, y2);
	context.stroke();
	
	// 绝缘节绘制
	context.strokeStyle = '#FFF';
	context.beginPath();
	context.lineWidth = 2;
    context.moveTo( 3126-c,284+d);
	context.lineTo( 3119-c,294+d );
	context.stroke();			
	
	//  2/4号双动道岔绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	x1=3050-c;
	y1=304+d;
	x2=3155-c;
	y2=260+d;
	context.moveTo( x1, y1 ); // x+7,y-1
	context.lineTo( x2, y2);
	context.stroke();
				
	
	// 绝缘节绘制
	context.strokeStyle = '#FFF';
	context.beginPath();
	context.lineWidth = 2;
    context.moveTo( 3079-c,286+d);
	context.lineTo( 3085-c,296+d);
	context.stroke();	
}

function BJchangceguidaohuizhi()  // 北京南站双动道岔绘制
{
	var d=100;
	// 北京南站2/4号双动道岔绘制
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	var x1=930;
	var y1=260+d;
	var x2=1025;
	var y2=304+d;
	context.moveTo( x1, y1 ); // x+7,y-1
	context.lineTo( x2, y2);
	context.stroke();
	
	// 绝缘节绘制
	context.strokeStyle = '#FFF';
	context.beginPath();
	context.lineWidth = 2;
    context.moveTo( 981,277+d);
	context.lineTo( 975, 287+d );
	context.stroke();						
}

function SHchangceguidaohuizhi()  // 上海虹桥站双动道岔绘制
{
	var c=9173;
	var d=100;
	// 北京南站2/4号双动道岔绘制
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	
	// 上海虹桥站1/3号双动道岔绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	var x1=9938-c;
	var y1=303+d;
	var x2=10033-c;
	var y2=261+d;
	context.moveTo( x1, y1 ); // x+7,y-1
	context.lineTo( x2, y2);
	context.stroke();
	
	
	// 绝缘节绘制
	context.strokeStyle = '#FFF';
	context.beginPath();
	context.lineWidth = 2;
    context.moveTo( 9982-c,277+d);
	context.lineTo( 9988-c, 287+d );
	context.stroke();
	
}

function beijingnanzhancexiangguidao()  // 北京南站侧向轨道绘制
{
	var d=100;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	// 1号道岔处弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	var x=195;
	var y=245+d;
	var k=50;
	context.moveTo( x+10, y-1 ); // x+7,y-1
	context.lineTo( x+10+k, y-1-k);
	context.stroke();
	
	// 5号道岔处弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
    x=315;
	y=187+d;
	k=50;
	context.moveTo( x+40, y-3 ); // x+7,y-1
	context.lineTo( x+40+k, y-3-k);
	context.stroke();
	
	// 10号道岔处弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';			
	x=652;
	y=128+d;
	k=50;
	context.moveTo( x, y+6 ); // x+7,y-1
	context.lineTo( x+k, y+6+k);
	context.stroke();
	
	// 6号道岔处弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	x=810;
	y=189+d;
	k=50;
	context.moveTo( x, y+6 ); // x+7,y-1
	context.lineTo( x+k, y+6+k);
	context.stroke();
	
	// 3号道岔处弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';		
	x=195;
	y=320+d;
	k=50;
	context.moveTo( x+10, y+1 ); // x+7,y-1
	context.lineTo( x+10+k, y+1+k);
	context.stroke();
	
	// 7号道岔处弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';			
	x=315;
	y=378+d;
	k=50;
	context.moveTo( x+40, y+3 ); // x+7,y-1
	context.lineTo( x+40+k, y+3+k);
	context.stroke();
	
    // 12号道岔处弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	x=654;
	y=434+d;
	k=50;
	context.moveTo( x, y-3 ); // x+7,y-1
	context.lineTo( x+k, y-3-k);
	context.stroke();
	
	// 8号道岔处弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	x=810;
	y=371+d;
	k=50;
	context.moveTo( x, y-1 ); // x+7,y-1
	context.lineTo( x+k, y-1-k);
	context.stroke();
}
function tianjinnanzhancexiangguidao()  // 天津南站侧向轨道绘制
{
	var c=1750;
	var d=100;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	// 1号道岔弯股绘制
    context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	var x=2310-c;
	var y=245+d;
	var k=50;
	context.moveTo( x+10, y-1 ); // x+7,y-1
	context.lineTo( x+10+k, y-1-k);
	context.stroke(); 
	
	
	// 3号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';			
	x=2310-c;
	y=320+d;
	k=50;
	context.moveTo( x+10, y+1 ); // x+7,y-1
	context.lineTo( x+10+k, y+1+k);
	context.stroke();
	
	// 12号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';			
	x=2938-c;
	y=372+d;
	k=50;
	context.moveTo( x, y-1 ); // x+7,y-1
	context.lineTo( x+k, y-1-k);
	context.stroke();
	
	// 10号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	x=2938-c;
	y=188+d;
	k=50;
	context.moveTo( x, y+6 ); // x+7,y-1
	context.lineTo( x+k, y+6+k);
	context.stroke(); 			
				
}

function jinanxizhancexiangguidao()   // 济南西站侧向轨道绘制
{
	var c=3700;
	var d=100;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	// 1号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	var x=4271-c;
	var y=245+d;
	var k=50;
	context.moveTo( x+10, y-1 ); // x+7,y-1
	context.lineTo( x+10+k, y-1-k);
	context.stroke();
	
	// 3号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';			
	x=4271-c;
	y=320+d;
	k=50;
	context.moveTo( x+10, y+1 ); // x+7,y-1
	context.lineTo( x+10+k, y+1+k);
	context.stroke();
	
	// 4号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';			
	x=4899-c;
	y=372+d;
	k=50;
	context.moveTo( x, y-1 ); // x+7,y-1
	context.lineTo( x+k, y-1-k);
	context.stroke();
	
	// 2号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	x=4899-c;
	y=188+d;
	k=50;
	context.moveTo( x, y+6 ); // x+7,y-1
	context.lineTo( x+k, y+6+k);
	context.stroke();
				
}

function nanjingnanzhancexiangguidao() // 南京南站侧向轨道绘制
{
	var c=5651;
	var d=100;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	// 1号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	var x=6212-c;
	var y=245+d;
	var k=50;
	context.moveTo( x+10, y-1 ); // x+7,y-1
	context.lineTo( x+10+k, y-1-k);
	context.stroke();
	
	// 3号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';			
	x=6212-c;
	y=320+d;
	k=50;
	context.moveTo( x+10, y+1 ); // x+7,y-1
	context.lineTo( x+10+k, y+1+k);
	context.stroke();
	
	// 4号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';		
	x=6840-c;
	y=372+d;
	k=50;
	context.moveTo( x, y-1 ); // x+7,y-1
	context.lineTo( x+k, y-1-k);
	context.stroke();
	
	// 2号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';	
	x=6840-c;
	y=188+d;
	k=50;
	context.moveTo( x, y+6 ); // x+7,y-1
	context.lineTo( x+k, y+6+k);
	context.stroke();
				
}

function suzhoubeizhancexiangguidao()  // 苏州北站侧向轨道绘制
{
	var c=7592;
	var d=100;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	// 1号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	var x=8153-c;
	var y=245+d;
	var k=50;
	context.moveTo( x+10, y-1 ); // x+7,y-1
	context.lineTo( x+10+k, y-1-k);
	context.stroke();
	
	// 3号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';			
	x=8153-c;
	y=320+d;
	k=50;
	context.moveTo( x+10, y+1 ); // x+7,y-1
	context.lineTo( x+10+k, y+1+k);
	context.stroke();
	
	// 4号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';		
	x=8781-c;
	y=372+d;
	k=50;
	context.moveTo( x, y-1 ); // x+7,y-1
	context.lineTo( x+k, y-1-k);
	context.stroke();
	
	// 2号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	x=8781-c;
	y=188+d;
	k=50;
	context.moveTo( x, y+6 ); // x+7,y-1
	context.lineTo( x+k, y+6+k);
	context.stroke();
	
}


function shanghaihongqiaozhancexiangguidao() // 上海虹桥站侧向轨道绘制
{
	var c=9173;
	var d=100;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	// 5号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	var x=10083-c;
	var y=245+d;
	var k=50;
	context.moveTo( x+10, y-1 ); // x+7,y-1
	context.lineTo( x+10+k, y-1-k);
	context.stroke();
	
	// 9号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
    x=10213-c;
	y=187+d;
	k=50;
	context.moveTo( x+40, y-3 ); // x+7,y-1
	context.lineTo( x+40+k, y-3-k);
	context.stroke();
	
	// 6号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	x=10553-c;
	y=128+d;
	k=50;
	context.moveTo( x, y+6 ); // x+7,y-1
	context.lineTo( x+k, y+6+k);
	context.stroke();
	
	// 2号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	x=10713-c;
	y=188+d;
	k=50;
	context.moveTo( x, y+6 ); // x+7,y-1
	context.lineTo( x+k, y+6+k);
	context.stroke();
	
	// 7号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';			
	x=10083-c;
	y=320+d;
	k=50;
	context.moveTo( x+10, y+1 ); // x+7,y-1
	context.lineTo( x+10+k, y+1+k);
	context.stroke();
	
	// 11号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';			
	x=10213-c;
	y=377+d;
	k=50;
	context.moveTo( x+40, y+3 ); // x+7,y-1
	context.lineTo( x+40+k, y+3+k);
	context.stroke();           

    // 8号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	x=1055-c;
	y=433+d;
	k=50;
	context.moveTo( x, y-3 ); // x+7,y-1
	context.lineTo( x+k, y-3-k);
	context.stroke();
	
	// 4号道岔弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';
	x=10713-c;
	y=372+d;
	k=50;
	context.moveTo( x, y-1 ); // x+7,y-1
	context.lineTo( x+k, y-1-k);
	context.stroke();
}
		