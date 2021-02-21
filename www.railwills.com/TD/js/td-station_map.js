// JavaScript Document
window.onload = function (){
    
    if( $.cookie('刷新界面')==undefined){
        $.cookie("刷新界面", "000000000000000000000000", { path: '/' })
    }
    if(getCookie_wl()== undefined){
		setCookie_wl("00000000000000000000000000000"); 
    }
    if(getCookie_wl().substr(18,1)== "2"){
		$("#txt5").val("已连接")
   
        $("#txt5").css("color","black")
        $("#txt5").css("background","green") 
    }
    else{
        $("#txt5").val("未连接")
    }
	loadOne()
	loadTwo()
    
    
}


//站场图鼠标拖拽缩小
function loadOne(){
	var footF=document.getElementById("footF");
	var sec=document.getElementById("Sec");
	var zct=document.getElementById("zct");
    var top=document.getElementById("top");
	var mouseStart={x:null,y:null};
    var topStart=null;
	var topAll=null;
//站场图鼠标拖拽缩小
	top.onmousedown=function(ev){
		var oEvent=ev||event;
    	mouseStart.x=oEvent.clientX;
    	mouseStart.y=oEvent.clientY;
   		topStart=sec.offsetHeight
		topAll=sec.offsetHeight+footF.offsetHeight+zct.offsetHeight-top.offsetHeight;
		//console.log(topStart.y)
		console.log(footF.offsetHeight)
		console.log(zct.offsetHeight)
    	if(top.setCapture){
      		top.onmousemove=doDrag;
      		top.onmouseup=stopDrag;
      		top.setCapture();
    	}
    	else{
      		top.addEventListener("mousemove",doDrag,true);
      		top.addEventListener("mouseup",stopDrag,true);
    	}
  	};
  	function doDrag(ev){
		var oEvent=ev||event;
		console.log(topAll)
    	var t=oEvent.clientY-mouseStart.y;
    	var h=t+topStart;
        
    	if(h<499){
      		h=499;
   	 	}
    	else if(h>859){
      		h=859;
    	}
    	sec.style.height=h+"px"
  	};
	
  	function stopDrag(){
    	if(top.releaseCapture){
      		top.onmousemove=null;
      		top.onmouseup=null;
      		top.releaseCapture();
    	}
    	else{
      		document.removeEventListener("mousemove",doDrag,true);
      		document.removeEventListener("mouseup",stopDrag,true);
    	}
  	};
}	
	
	
	
	
	
function loadTwo() {
			var x,y,x1,x2,y1,y2,w,h,text;
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            context.fillStyle = "#000";
            context.fillRect(12, 0, 6598, 289);
			//主轨道
            context.fillStyle = "#00ced1";
					
            //北京南站主轨道
            context.fillRect(263, 60, 147, 2);
            context.fillRect(172, 100, 333, 2);
			context.fillRect(31, 140, 6560, 2);
			context.fillRect(31, 180, 6560, 2);
			context.fillRect(172, 220, 333, 2);
			context.fillRect(263, 260, 147, 2);
			
			//天津南站主轨道
			context.fillRect(1442, 100, 338, 2);
			context.fillRect(1442, 220, 338, 2);
			//济南西站主轨道
			context.fillRect(2619, 100, 338, 2);
			context.fillRect(2619, 220, 338, 2);
			
			//南京南站主轨道
			context.fillRect(3783, 100, 338, 2);
			context.fillRect(3783, 220, 338, 2);
			//苏州北站主轨道
			context.fillRect(4948, 100, 338, 2);
			context.fillRect(4948, 220, 338, 2);

			
			//上海虹桥站主轨道
            context.fillRect(6202, 60, 147, 2);
			context.fillRect(6106, 100, 333, 2);
			context.fillRect(6106, 220, 333, 2);
			context.fillRect(6202, 260, 147, 2);
			
			
 			//北京南站站标
			x=299;y=7;w=88;h=26
			text="北京南站"
			chezhanbiaozhi(x,y,w,h,text)
			
			x=1565;y=7;w=88;h=26
			text="天津南站"
			chezhanbiaozhi(x,y,w,h,text)
			
			x=2742;y=7;w=88;h=26
			text="济南西站"
			chezhanbiaozhi(x,y,w,h,text)
			
			x=3906;y=7;w=88;h=26
			text="南京南站"
			chezhanbiaozhi(x,y,w,h,text)
			
			x=5071;y=7;w=88;h=26
			text="苏州北站"
			chezhanbiaozhi(x,y,w,h,text)
			
			x=6232;y=7;w=107;h=26
			text="上海虹桥站"
			chezhanbiaozhi(x,y,w,h,text)
			
			
			//上行标志
			x=883;y=40;w=150;h=64
			text="上行"
			shangxingbiaozhi(x,y,w,h,text)
			x=2123;y=40;w=150;h=64
			text="上行"
			shangxingbiaozhi(x,y,w,h,text)
			x=3293;y=40;w=150;h=64
			text="上行"
			shangxingbiaozhi(x,y,w,h,text)
			x=4458;y=40;w=150;h=64
			text="上行"
			shangxingbiaozhi(x,y,w,h,text)
			x=5631;y=40;w=150;h=64
			text="上行"
			shangxingbiaozhi(x,y,w,h,text)
		
			
			//车档
			x1=26;x2=31;y1=136;y2=146
			zuocechedang(x1,x2,y1,y2)
			
			x1=26;x2=31;y1=176;y2=186
			zuocechedang(x1,x2,y1,y2)
			
			x1=6591;x2=6596;y1=136;y2=146
			youcechedang(x1,x2,y1,y2)
			
			x1=6591;x2=6596;y1=176;y2=186
			youcechedang(x1,x2,y1,y2)
			
			//闭塞分区标志
			
			bisaifenqu(118,136,146)
			bisaifenqu(118,176,186)
			
			bisaifenqu(215,96,106)
			bisaifenqu(215,136,146)
			bisaifenqu(215,176,186)
			bisaifenqu(215,216,226)
			
			bisaifenqu(263,96,106)
			bisaifenqu(263,216,226)
			
			bisaifenqu(281,56,66)
			bisaifenqu(281,256,266)
			
			bisaifenqu(387,56,66)
			bisaifenqu(387,256,266)
			
			bisaifenqu(411,96,106)
			bisaifenqu(411,216,226)
			
			bisaifenqu(471,96,106)
			bisaifenqu(471,136,146)
			bisaifenqu(471,176,186)
			bisaifenqu(471,216,226)
			
			bisaifenqu(562,136,146)
			bisaifenqu(562,176,186)
			
			bisaifenqu(649,136,146)
			bisaifenqu(649,176,186)
			
			bisaifenqu(757,136,146)
			bisaifenqu(757,176,186)
			
			bisaifenqu(865,136,146)
			bisaifenqu(865,176,186)
			
			bisaifenqu(973,136,146)
			bisaifenqu(973,176,186)
			
			bisaifenqu(1081,136,146)
			bisaifenqu(1081,176,186)
			
			bisaifenqu(1189,136,146)
			bisaifenqu(1189,176,186)
			
			bisaifenqu(1297,136,146)
			bisaifenqu(1297,176,186)
			
			bisaifenqu(1367,136,146)
			bisaifenqu(1367,176,186)
			
			bisaifenqu(1445,136,146)
			bisaifenqu(1445,176,186)
			
			bisaifenqu(1469,96,106)
			bisaifenqu(1469,216,226)
			
			bisaifenqu(1749,96,106)
			bisaifenqu(1749,216,226)
			
			bisaifenqu(1773,136,146)
			bisaifenqu(1773,176,186)
			
			bisaifenqu(1834,136,146)
			bisaifenqu(1834,176,186)
			
			bisaifenqu(1927,136,146)
			bisaifenqu(1927,176,186)
			
			bisaifenqu(2035,136,146)
			bisaifenqu(2035,176,186)
			
			bisaifenqu(2143,136,146)
			bisaifenqu(2143,176,186)
			
			bisaifenqu(2251,136,146)
			bisaifenqu(2251,176,186)
			
			bisaifenqu(2359,136,146)
			bisaifenqu(2359,176,186)
			
			bisaifenqu(2467,136,146)
			bisaifenqu(2467,176,186)
			
			bisaifenqu(2560,136,146)
			bisaifenqu(2560,176,186)
			
			bisaifenqu(2622,136,146)
			bisaifenqu(2622,176,186)
			
			bisaifenqu(2646,96,106)
			bisaifenqu(2646,216,226)
			
			bisaifenqu(2925,96,106)
			bisaifenqu(2925,216,226)
			
			bisaifenqu(2949,136,146)
			bisaifenqu(2949,176,186)
			
			bisaifenqu(3011,136,146)
			bisaifenqu(3011,176,186)
			
			bisaifenqu(3098,136,146)
			bisaifenqu(3098,176,186)
			
			bisaifenqu(3206,136,146)
			bisaifenqu(3206,176,186)
			
			bisaifenqu(3314,136,146)
			bisaifenqu(3314,176,186)
			
			bisaifenqu(3422,136,146)
			bisaifenqu(3422,176,186)
			
			bisaifenqu(3530,136,146)
			bisaifenqu(3530,176,186)
			
			bisaifenqu(3638,136,146)
			bisaifenqu(3638,176,186)
			
			bisaifenqu(3725,136,146)
			bisaifenqu(3725,176,186)
			
			bisaifenqu(3786,136,146)
			bisaifenqu(3786,176,186)
			
			bisaifenqu(3810,96,106)
			bisaifenqu(3810,216,226)
			
			bisaifenqu(4090,96,106)
			bisaifenqu(4090,216,226)
			
			bisaifenqu(4114,136,146)
			bisaifenqu(4114,176,186)
			
			bisaifenqu(4175,136,146)
			bisaifenqu(4175,176,186)
			
			bisaifenqu(4262,136,146)
			bisaifenqu(4262,176,186)
			
			bisaifenqu(4370,136,146)
			bisaifenqu(4370,176,186)
			
			bisaifenqu(4478,136,146)
			bisaifenqu(4478,176,186)
			
			bisaifenqu(4586,136,146)
			bisaifenqu(4586,176,186)
			
			bisaifenqu(4694,136,146)
			bisaifenqu(4694,176,186)
			
			bisaifenqu(4802,136,146)
			bisaifenqu(4802,176,186)
			
			bisaifenqu(4889,136,146)
			bisaifenqu(4889,176,186)
		    
			bisaifenqu(4951,136,146)
			bisaifenqu(4951,176,186)
			
			bisaifenqu(4975,96,106)
			bisaifenqu(4975,216,226)
			
			bisaifenqu(5255,96,106)
			bisaifenqu(5255,216,226)
			
			bisaifenqu(5279,136,146)
			bisaifenqu(5279,176,186)
			
			bisaifenqu(5340,136,146)
			bisaifenqu(5340,176,186)
			
			bisaifenqu(5427,136,146)
			bisaifenqu(5427,176,186)
			
			bisaifenqu(5535,136,146)
			bisaifenqu(5535,176,186)
			
			bisaifenqu(5643,136,146)
			bisaifenqu(5643,176,186)
			
			bisaifenqu(5751,136,146)
			bisaifenqu(5751,176,186)
			
			bisaifenqu(5859,136,146)
			bisaifenqu(5859,176,186)
			
			bisaifenqu(5967,136,146)
			bisaifenqu(5967,176,186)
			
			bisaifenqu(6054,136,146)
			bisaifenqu(6054,176,186)
			
			bisaifenqu(6133,96,106)
			bisaifenqu(6133,136,146)
			bisaifenqu(6133,176,186)
			bisaifenqu(6133,216,226)
			
			bisaifenqu(6199,96,106)
			bisaifenqu(6199,216,226)
				
			bisaifenqu(6223,56,66)
			bisaifenqu(6223,256,266)
			
			bisaifenqu(6329,56,66)
			bisaifenqu(6329,256,266)
			
			bisaifenqu(6353,96,106)
			bisaifenqu(6353,216,226)
			
			bisaifenqu(6418,96,106)
			bisaifenqu(6418,216,226)
			
			bisaifenqu(6437,136,146)
			bisaifenqu(6437,176,186)
		
            bisaifenqu(6497,136,146)
			bisaifenqu(6497,176,186)
			

            //长侧向轨道
			changceguidaohuizhi();
            //交叉渡线
			duanceguidaohuizhi();
			
			//北京南站侧向轨道
			beijingnanzhancexiangguidao();
			tianjinnanzhancexiangguidao();
			jinanxizhancexiangguidao();
			nanjingnanzhancexiangguidao();
			suzhoubeizhancexiangguidao();
			shanghaihongqiaozhancexiangguidao();
            
			
			
     
			
			//股道编号
			//北京南站股道
			xieshuzi(343,56,'5G')
			xieshuzi(343,96,'3G')
			xieshuzi(343,136,'IG')
			xieshuzi(343,176,'IIG')
			xieshuzi(343,216,'4G')
			xieshuzi(343,256,'6G')
			
			//天津南站股道
			xieshuzi(1609,96,'3G')
			xieshuzi(1609,136,'IG')
			xieshuzi(1609,176,'IIG')
			xieshuzi(1609,216,'4G')
			
			//济南西站股道
			xieshuzi(2786,96,'3G')
			xieshuzi(2786,136,'IG')
			xieshuzi(2786,176,'IIG')
			xieshuzi(2786,216,'4G')
			
			//南京南站股道
			xieshuzi(3950,96,'3G')
			xieshuzi(3950,136,'IG')
			xieshuzi(3950,176,'IIG')
			xieshuzi(3950,216,'4G')
			
			//苏州北站股道
			xieshuzi(5115,96,'3G')
			xieshuzi(5115,136,'IG')
			xieshuzi(5115,176,'IIG')
			xieshuzi(5115,216,'4G')
			
			//上海虹桥站股道
			xieshuzi(6285,56,'5G')
			xieshuzi(6285,96,'3G')
			xieshuzi(6285,136,'IG')
			xieshuzi(6285,176,'IIG')
			xieshuzi(6285,216,'4G')
			xieshuzi(6285,256,'6G')
			
			//道岔编号
			//北京南站道岔
			xieshuzi(138,130,'1')
			xieshuzi(230,90,'5')
			xieshuzi(456,90,'10')
			xieshuzi(552,130,'6')
			
			xieshuzi(582,130,'4')
			
			xieshuzi(138,200,'3')
			xieshuzi(230,240,'7')
			xieshuzi(456,240,'12')
			xieshuzi(552,200,'8')
			
			xieshuzi(644,200,'2')
			
			//天津南站道岔
			xieshuzi(1407,130,'1')
			xieshuzi(1824,130,'10')
			xieshuzi(1849,130,'8')
			xieshuzi(1927,130,'2')
			
			xieshuzi(1407,200,'3')
			xieshuzi(1824,200,'12')
			xieshuzi(1849,200,'4')
			xieshuzi(1927,200,'6')
			
			//济南西站
			xieshuzi(2580,130,'1')
			xieshuzi(3006,130,'2')
			
			xieshuzi(2580,200,'3')
			xieshuzi(3006,200,'4')
			
			//南京南站
			xieshuzi(3745,130,'1')
			xieshuzi(4170,130,'2')
			
			xieshuzi(3745,200,'3')
			xieshuzi(4170,200,'4')
			
			//苏州北站
			xieshuzi(4909,130,'1')
			xieshuzi(5335,130,'2')
			
			xieshuzi(4909,200,'3')
			xieshuzi(5335,200,'4')
			
			//上海虹桥站
			xieshuzi(6049,130,'3')
			
			xieshuzi(6074,130,'5')
			xieshuzi(6163,90,'9')
			xieshuzi(6398,90,'6')
			xieshuzi(6487,130,'2')
			
			xieshuzi(5983,200,'1')
			
			xieshuzi(6074,200,'7')
			xieshuzi(6163,240,'11')
			xieshuzi(6398,240,'8')
			xieshuzi(6487,200,'4')
			
			
			
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
		function youcechedang(x1,x2,y1,y2)
		{
			var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.strokeStyle = '#FFF';
			context.lineWidth = 2; 
            context.moveTo( x2, y1 );
			context.lineTo( x1, y1 );
            context.lineTo( x1, y2 );
			context.lineTo( x2, y2 );
		    context.stroke();
		}
		function chezhanbiaozhi(x,y,w,h,text)
		{
			var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.fillStyle = "#000";
			context.fillRect(x, y, w, h);
			context.fillStyle = "#FDFD00";
			context.font="14.5pt bold 微软雅黑";
            context.fillText(text,x+4,y+23);
		}
		function shangxingbiaozhi(x,y,w,h,text)
		{
			var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = "#FDFD00";
			context.moveTo( x, y+h/2 );
			context.lineTo( x+w/2, y);
			context.lineTo( x+w/2, y+h/4);
			context.lineTo( x+w, y+h/4);
			context.lineTo( x+w, y+3*h/4);
			context.lineTo( x+w/2, y+3*h/4);
			context.lineTo( x+w/2, y+h);
			context.lineTo( x, y+h/2);
			context.stroke();
			context.fillStyle = "#FDFD00";
			context.font="14.5pt bold 微软雅黑";
            context.fillText(text,x+55,y+37);
		}
		
		function xieshuzi(x,y,text)
		{
			var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
	
			context.fillStyle = "#FFF";
			context.font="12px bold 宋体";
            context.fillText(text,x-10,y);
		}
		function duanceguidaohuizhi()  // 天津南站交叉渡线绘制
		{
			//  6/8号双动道岔绘制
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			x1=1834;
			y1=142;
			x2=1927;
			y2=180;
			k=5;
			context.moveTo( x1+k, y1+k ); // x+7,y-1
			context.lineTo( x2-k, y2-k);
			context.stroke();
			
			//绝缘节绘制
			context.strokeStyle = '#FFF';
			context.beginPath();
			context.lineWidth = 2;
            context.moveTo( 1856, 164);
			context.lineTo( 1864, 172 );
			context.stroke();
			
			//  6/8号双动道岔绘制
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			x1=1834;
			y1=180;
			x2=1927;
			y2=142;
			k=5;
			context.moveTo( x1+k, y1-k ); // x+7,y-1
			context.lineTo( x2-k, y2+k);
			context.stroke();
			
			// 绝缘节绘制
			context.strokeStyle = '#FFF';
			context.beginPath();
			context.lineWidth = 2;
            context.moveTo( 1898,172);
			context.lineTo( 1906,164 );
			context.stroke();	
		}
		function changceguidaohuizhi()
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			x1=562;
			y1=142;
			x2=649;
			y2=180;
			k=5;
			context.moveTo( x1+k, y1+k ); // x+7,y-1
			context.lineTo( x2-k, y2-k);
			context.stroke();
			
			//绝缘节绘制
			context.strokeStyle = '#FFF';
			context.beginPath();
			context.lineWidth = 2;
            context.moveTo( 602, 166);
			context.lineTo( 610, 156 );
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			x1=5967;
			y1=180;
			x2=6054;
			y2=142;
			k=5;
			context.moveTo( x1+k, y1-k ); // x+7,y-1
			context.lineTo( x2-k, y2+k);
			context.stroke();
			
			//绝缘节绘制
			context.strokeStyle = '#FFF';
			context.beginPath();
			context.lineWidth = 2;
            context.moveTo( 6007,156);
			context.lineTo( 6015, 166);
			context.stroke();
			
		}
		function beijingnanzhancexiangguidao()
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
		    x=263;
			y=60;
			k=35;
			context.moveTo(x-k, y+k); 
			context.lineTo( x, y);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			x=172;
			y=100;
			k=35;
			context.moveTo( x-k, y+k); 
			context.lineTo( x, y);
			context.stroke();
			
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			
			x=172;
			y=220;
			k=35;
			context.moveTo( x-k, y-k+2); 
			context.lineTo( x, y+2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			x=263;
			y=260;
			k=35;
			context.moveTo( x-k, y-k+2 ); 
			context.lineTo( x, y+2);
			context.stroke();
			
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			
			x=410;
			y=60;
			k=35;
			context.moveTo( x, y ); 
			context.lineTo( x+k, y+k);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			
			x=505;
			y=100;
			k=35;
			context.moveTo( x, y); 
			context.lineTo( x+k, y+k);
			context.stroke();

			x=505;
			y=220;
			k=35;
			context.moveTo( x, y+2 ); 
			context.lineTo( x+k, y-k+2);
			context.stroke();


			x=410;
			y=260;
			k=35;
			context.moveTo( x, y+2 ); 
			context.lineTo( x+k, y-k+2);
			context.stroke();
		}

		function tianjinnanzhancexiangguidao()
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			x=1442;
			y=100;
			k=35;
			context.moveTo( x-k, y+k); 
			context.lineTo( x, y);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			
			x=1442;
			y=220;
			k=35;
			context.moveTo( x-k, y-k+2); 
			context.lineTo( x, y+2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			
			x=1780;
			y=100;
			k=35;
			context.moveTo( x, y); 
			context.lineTo( x+k, y+k);
			context.stroke();
			
			x=1780;
			y=220;
			k=35;
			context.moveTo( x, y+2 ); 
			context.lineTo( x+k, y-k+2);
			context.stroke();
			
			
			
		}
		function jinanxizhancexiangguidao()
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			x=2619;
			y=100;
			k=35;
			context.moveTo( x-k, y+k); 
			context.lineTo( x, y);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			
			x=2619;
			y=220;
			k=35;
			context.moveTo( x-k, y-k+2); 
			context.lineTo( x, y+2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			
			x=2957;
			y=100;
			k=35;
			context.moveTo( x, y); 
			context.lineTo( x+k, y+k);
			context.stroke();
			
			x=2957;
			y=220;
			k=35;
			context.moveTo( x, y+2 ); 
			context.lineTo( x+k, y-k+2);
			context.stroke();
			
			
			
		}
		function nanjingnanzhancexiangguidao()
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			x=3783;
			y=100;
			k=35;
			context.moveTo( x-k, y+k); 
			context.lineTo( x, y);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			
			x=3783;
			y=220;
			k=35;
			context.moveTo( x-k, y-k+2); 
			context.lineTo( x, y+2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			
			x=4121;
			y=100;
			k=35;
			context.moveTo( x, y); 
			context.lineTo( x+k, y+k);
			context.stroke();
			
			x=4121;
			y=220;
			k=35;
			context.moveTo( x, y+2 ); 
			context.lineTo( x+k, y-k+2);
			context.stroke();
			
			
			
		}
		function suzhoubeizhancexiangguidao()
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			x=4948;
			y=100;
			k=35;
			context.moveTo( x-k, y+k); 
			context.lineTo( x, y);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			
			x=4948;
			y=220;
			k=35;
			context.moveTo( x-k, y-k+2); 
			context.lineTo( x, y+2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			
			x=5286;
			y=100;
			k=35;
			context.moveTo( x, y); 
			context.lineTo( x+k, y+k);
			context.stroke();
			
			x=5286;
			y=220;
			k=35;
			context.moveTo( x, y+2 ); 
			context.lineTo( x+k, y-k+2);
			context.stroke();
			
			
			
		}
		function shanghaihongqiaozhancexiangguidao()
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
				context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
		    x=6202;
			y=60;
			k=35;
			context.moveTo(x-k, y+k); 
			context.lineTo( x, y);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			x=6106;
			y=100;
			k=35;
			context.moveTo( x-k, y+k); 
			context.lineTo( x, y);
			context.stroke();
			
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			
			x=6106;
			y=220;
			k=35;
			context.moveTo( x-k, y-k+2); 
			context.lineTo( x, y+2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			x=6202;
			y=260;
			k=35;
			context.moveTo( x-k, y-k+2 ); 
			context.lineTo( x, y+2);
			context.stroke();
			
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			
			x=6349;
			y=60;
			k=35;
			context.moveTo( x, y ); 
			context.lineTo( x+k, y+k);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#00ced1';
			
			x=6439;
			y=100;
			k=35;
			context.moveTo( x, y); 
			context.lineTo( x+k, y+k);
			context.stroke();

			x=6439;
			y=220;
			k=35;
			context.moveTo( x, y+2 ); 
			context.lineTo( x+k, y-k+2);
			context.stroke();


			x=6349;
			y=260;
			k=35;
			context.moveTo( x, y+2 ); 
			context.lineTo( x+k, y-k+2);
			context.stroke();	
	    }