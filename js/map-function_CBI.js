		
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
		
        function xiaxingdiaochexinhaoji(x,y)
		{ 
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.strokeStyle = '#FFF';
            context.arc(x-38,y-13,5,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.strokeStyle = 'blue';
            context.arc(x-38,y-13,3,0,2*Math.PI);
            context.fillStyle="blue";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.lineWidth = 3;
			context.strokeStyle = '#FFF';
			context.moveTo( x-30-16, y-7 ); // x+7,y-1
			context.lineTo( x-30-16, y-19);
			
			context.stroke();
		}
		
		function xiaxingdiaochexinhaoji1(x,y)
		{ 
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.strokeStyle = '#FFF';
            context.arc(x-38,y-13,6,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.strokeStyle = 'blue';
            context.arc(x-38,y-13,4,0,2*Math.PI);
            context.fillStyle="blue";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.lineWidth = 3;
			context.strokeStyle = '#FFF';
			context.moveTo( x-30-16, y-7 ); // x+7,y-1
			context.lineTo( x-30-16, y-19);
			
			context.stroke();
		}
			
		function shangxingdiaochexinhaoji(x,y)
		{ 
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.strokeStyle = '#FFF';
            context.arc(x-21,y-13,6,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.strokeStyle = 'blue';
            context.arc(x-21,y-13,4,0,2*Math.PI);
            context.fillStyle="blue";
            context.fill();
            context.stroke();
			
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 3;
			context.strokeStyle = '#FFF';
			context.moveTo( x-30+16, y-7 ); // x+7,y-1
			context.lineTo( x-30+16, y-19);
			
			context.stroke();
		}	
		//上行红灯	
		function shangxingxinhaoji(x,y)
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
			context.strokeStyle = 'red';
            context.arc(x-30,y-13,3,0,2*Math.PI);
            context.fillStyle="red";
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
		
		function xiaxingxinhaoji(x,y)
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
			context.strokeStyle = 'red';
            context.arc(x-30,y-13,3,0,2*Math.PI);
            context.fillStyle="red";
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
		
		
		function bisaifenqu(x,y1,y2)
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			//context.fillStyle = "#FFF";
			context.strokeStyle = '#FFF';
			context.beginPath();
			context.lineWidth = 2;
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
			x1=3050-c;
			y1=260+d;
			x2=3155-c;
			y2=303+d;
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
			y1=303+d;
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
			x1=930;
			y1=260+d;
			x2=1025;
			y2=304+d;
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
			// 双动道岔绘制
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			
			// 上海虹桥站1/3号双动道岔绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=9938-c;
			y1=303+d;
			x2=10033-c;
			y2=261+d;
			context.moveTo( x1, y1 ); 
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
			x=195;
			y=245+d;
			k=50;
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
			x=2310-c;
			y=245+d;
			k=50;
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
			var c=3700;;
			var d=100;
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			// 1号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=4271-c;
			y=245+d;
			k=50;
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
			x=6212-c;
			y=245+d;
			k=50;
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
			x=8153-c;
			y=245+d;
			k=50;
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
			x=10083-c;
			y=245+d;
			k=50;
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
			x=10553-c;
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
		 
		 //联锁独有函数
		
		//下行调车信号机，通行信号
		 function xiaxingdiaochexinhaojiBai(x,y)
		{ 
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.strokeStyle = '#FFF';
            context.arc(x-38,y-13,4,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.strokeStyle = 'white';
            context.arc(x-38,y-13,3,0,2*Math.PI);
            context.fillStyle="white";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#FFF';
			context.moveTo( x-30-16, y-7 ); // x+7,y-1
			context.lineTo( x-30-16, y-19);
			
			context.stroke();
		}
	
		//上行调车信号机,通行信号
		function shangxingdiaochexinhaojiBai(x,y)
		{ 
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.strokeStyle = '#FFF';
            context.arc(x-21,y-13,4,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.strokeStyle = 'white';
            context.arc(x-21,y-13,4,0,2*Math.PI);
            context.fillStyle="white";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = '#FFF';
			context.moveTo( x-30+16, y-7 ); // x+7,y-1
			context.lineTo( x-30+16, y-19);
			
			context.stroke();
		}	
        function huazhengfangxing(x,y,c)
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.lineWidth = 10;
			context.strokeStyle = c;
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x+10, y);
            context.lineTo( x+10, y+10);
			context.lineTo( x, y+10);
			context.lineTo( x, y-10);
			context.fillStyle=c;
            context.fill();
			context.stroke();
		}
		function huazhengfangxings(x,y,c)
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.lineWidth = 6;
			context.strokeStyle = c;
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x+6, y);
            context.lineTo( x+6, y+6);
			context.lineTo( x, y+6);
			context.lineTo( x, y-3);
			context.fillStyle=c;
            context.fill();
			context.stroke();
		}
		function lianjiezhuangtaibiaojired(x,y)
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.strokeStyle = '#FFF';
            context.arc(x-30,y-13,7,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.strokeStyle = 'red';
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
            context.arc(x-30,y-13,7,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.strokeStyle = '#000';
            context.arc(x-30,y-13,5,0,2*Math.PI);
            context.fillStyle="#000";
            context.fill();
            context.stroke();
		}
		//连接状态标记绿
		function lianjiezhuangtaibiaojilv(x,y)
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
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
		function lianjiezhuangtaibiaojiyellow(x,y)
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.strokeStyle = '#FFF';
            context.arc(x-30,y-13,7,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			context.beginPath();
			context.strokeStyle = 'yellow';
            context.arc(x-30,y-13,5,0,2*Math.PI);
            context.fillStyle="yellow";
            context.fill();
            context.stroke();
		}

		

		//上行出站信号机兼做调车信号机，白灯
		function shangxingxinhaojiBai(x,y)
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
			context.strokeStyle = 'white';
            context.arc(x-30,y-13,3,0,2*Math.PI);
            context.fillStyle="white";
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
		//上行黄灯
		function shangxingxinhaojihuangdeng(x,y)
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
			context.strokeStyle = 'yellow';
            context.arc(x-30,y-13,3,0,2*Math.PI);
            context.fillStyle="yellow";
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
		
	
		//下行出站信号机兼做调车信号机，白灯
		function xiaxingxinhaojiBai(x,y)
		{ 
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.strokeStyle = '#FFF';
            context.arc(x-30,y-13,4,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			context.beginPath();

			context.strokeStyle = 'white';
            context.arc(x-30,y-13,3,0,2*Math.PI);
            context.fillStyle="white";
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
	   function xiaxingxinhaojiUUdeng(x,y)
		{ 
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			//第一个灯位
			context.beginPath();
			context.strokeStyle ='#FFF';
            context.arc(x-30,y-13,5,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			
			//第一个黄灯
			context.beginPath();
			context.strokeStyle = 'yellow';
            context.arc(x-30,y-13,3,0,2*Math.PI);
            context.fillStyle="yellow";
            context.fill();
            context.stroke();
			//第二个灯位
			context.beginPath();
			context.strokeStyle ='#FFF';
			context.lineWidth = 2;
            context.arc(x-18,y-13,7,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			//第二个黄灯
			context.beginPath();
			context.strokeStyle = 'yellow';
            context.arc(x-18,y-13,5,0,2*Math.PI);
            context.fillStyle="yellow";
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
			context.strokeStyle ='#FFF';
			context.moveTo( x-30-16, y-8 ); // x+7,y-1
			context.lineTo( x-30-16, y-18);
			context.stroke();
		}
	    //上行双黄灯
		function shangxingxinhaojiUUdeng(x,y)
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
			context.strokeStyle = 'yellow';
            context.arc(x-30,y-13,3,0,2*Math.PI);
            context.fillStyle="yellow";
            context.fill();
            context.stroke();
			
			//第二个灯位
			context.beginPath();
			context.strokeStyle ='#FFF';
			context.lineWidth = 2;
            context.arc(x-42,y-13,7,0,2*Math.PI);
            context.fillStyle="#FFF";
            context.fill();
            context.stroke();
			//第二个黄灯
			context.beginPath();
			context.strokeStyle = 'yellow';
            context.arc(x-42,y-13,5,0,2*Math.PI);
            context.fillStyle="yellow";
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
		//上行双黄灯第二个灯位消失
		function shangxingxinhaojiUUdengD(x,y)
		{ 
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			//第二个灯位
			context.beginPath();
			context.strokeStyle ='black';
			context.lineWidth = 2;
            context.arc(x-42,y-13,7,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke();
			//第二个黄灯
			context.beginPath();
			context.strokeStyle = 'black';
            context.arc(x-42,y-13,5,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke(); 
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = 'black';
			context.moveTo( x-30+6, y-13 ); // x+7,y-1
			context.lineTo( x-30+16, y-13);
			
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'black';
			context.moveTo( x-30+16, y-8 ); // x+7,y-1
			context.lineTo( x-30+16, y-18);
			context.stroke();
		}
		//下行双黄灯第二个灯位消失
	function xiaxingxinhaojiUUdengD(x,y)
		{ 
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			//第二个灯位
			context.beginPath();
			context.strokeStyle ='black';
			context.lineWidth = 2;
            context.arc(x-18,y-13,7,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke();
			//第二个黄灯
			context.beginPath();
			context.strokeStyle = 'black';
            context.arc(x-18,y-13,5,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke(); 
			
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = 'black';
			context.moveTo( x-30-6, y-13 ); // x+7,y-1
			context.lineTo( x-30-16, y-13);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ='black';
			context.moveTo( x-30-16, y-8 ); // x+7,y-1
			context.lineTo( x-30-16, y-18);
			context.stroke();
		}
		//下行绿灯
		function xiaxingxinhaojilvdeng(x,y)
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
			context.strokeStyle = 'green';
            context.arc(x-30,y-13,3,0,2*Math.PI);
            context.fillStyle="green";
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
		//下行黄灯
		function xiaxingxinhaojihuangdeng(x,y)
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
			context.strokeStyle = 'yellow';
            context.arc(x-30,y-13,3,0,2*Math.PI);
            context.fillStyle="yellow";
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
		
		//上行绿灯
		function shangxingxinhaojilvdeng(x,y)
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
			context.strokeStyle = 'green';
            context.arc(x-30,y-13,3,0,2*Math.PI);
            context.fillStyle="green";
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