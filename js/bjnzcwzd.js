          window.onload = function () {
			var x,y,x1,x2,y1,y2,w,h,text;
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            context.fillStyle = "#000";
            context.fillRect(0, 0, 2000, 700);
			//主轨道
            context.fillStyle = "#848284";
					
            //北京南站主轨道
            context.fillRect(410, 230, 240, 5);
			
			context.fillRect(250, 290, 560, 5);

			context.fillRect(20, 350, 1930, 5);
			context.fillRect(20, 410, 1930, 5);
			context.fillRect(250, 470, 560, 5);
			context.fillRect(410, 530, 240, 5);
					
			//画下行小车
			x=490;y=335
            huaxiaxingxiaoche(x,y)

 			//北京南站站标
			x=440;y=585;w=190;h=60
			text="北京南站"
			chezhanbiaozhi(x,y,w,h,text)
			
			
			//车档
			x1=15;x2=20;y1=347;y2=358
			zuocechedang(x1,x2,y1,y2)
			
			x1=15;x2=20;y1=407;y2=418
			zuocechedang(x1,x2,y1,y2)
			
            
			
			//闭塞分区标志
			bisaifenqu(195,348,357)
			bisaifenqu(195,408,417)
			bisaifenqu(870,348,357)
			bisaifenqu(870,408,417)
			bisaifenqu(1050,348,357)
			bisaifenqu(1050,408,417)
			bisaifenqu(1230,348,357)
			bisaifenqu(1230,408,417)
			bisaifenqu(1410,348,357)
			bisaifenqu(1410,408,417)
			
			
			bisaifenqu(1590,348,357)
			bisaifenqu(1590,408,417)
			bisaifenqu(1770,348,357)
			bisaifenqu(1770,408,417)
			bisaifenqu(1950,348,357)
			bisaifenqu(1950,408,417)

            //长侧向轨道
			changceguidaohuizhi();
            
			
			//北京南站侧向轨道
			beijingnanzhancexiangguidao();
            
			
			//北京南站信号机
			//北京南站上行信号机第一
			x=450;y=260
			shangxingxinhaoji(x,y);
			xieshuzi(430,270,'S5')
			
            //context.strokeRect(150, 450, 100, 100);
            //北京南站上行信号机第二
			x=420;y=320
			shangxingxinhaoji(x,y);
			xieshuzi(400,330,'S3')
			xieshuzi(350,280,'5')
			//北京南站上行信号机第三
			x=340;y=380
			shangxingxinhaoji(x,y);
			xieshuzi(320,390,'SI')
			xieshuzi(205,335,'1')
            //北京南站上行信号机第四
			x=340;y=440
			shangxingxinhaoji(x,y);
			xieshuzi(320,450,'SII')
			xieshuzi(205,440,'3')
			//北京南站上行信号机第五
			x=420;y=500
			shangxingxinhaoji(x,y);
			xieshuzi(400,510,'S4')
			xieshuzi(350,500,'7')
			//北京南站上行信号机第六
			x=450;y=560
			shangxingxinhaoji(x,y);
			xieshuzi(430,570,'S6')
			
			//北京南站下行信号机第一
			x=660;y=230
            xiaxingxinhaoji(x,y)
			xieshuzi(630,205,'X5')
			//北京南站下行信号机第二
			x=700;y=290
            xiaxingxinhaoji(x,y)
			xieshuzi(665,265,'X3')
			xieshuzi(715,280,'10')
			//北京南站下行信号机第三
			x=800;y=350
            xiaxingxinhaoji(x,y)
			xieshuzi(770,325,'XI')
			xieshuzi(875,335,'6')
			//北京南站下行信号机第四
			x=800;y=410
            xiaxingxinhaoji(x,y)
			xieshuzi(770,385,'XII')
			xieshuzi(875,440,'8')
			//北京南站下行信号机第五
			x=700;y=470
            xiaxingxinhaoji(x,y)
			xieshuzi(670,445,'X4')
			xieshuzi(715,500,'12')
			//北京南站下行信号机第六
			x=660;y=530
            xiaxingxinhaoji(x,y)
			xieshuzi(630,505,'X6')
			
			//北京南站下行信号机第七
			x=210;y=350
            xiaxingxinhaoji(x,y)
			xieshuzi(180,325,'X')
			xieshuzi(1075,335,'4')
			//北京南站下行信号机第八
			x=210;y=440
            xiaxingxinhaoji(x,y)
			xieshuzi(180,450,'XF')
			xieshuzi(1555,440,'2')
			
			//北京南站中间段1
			x=1460;y=350
			shangxingxinhaoji(x,y);
			xieshuzi(1440,325,'SF')
            //北京南站中间段2
			x=1460;y=440
			shangxingxinhaoji(x,y);
			xieshuzi(1445,450,'S')
			

			
			
			//道岔编号
			xieshuzi(530,250,'5G')
			xieshuzi(530,310,'3G')
			xieshuzi(530,370,'IG')
			xieshuzi(530,430,'IIG')
			xieshuzi(530,490,'4G')
			xieshuzi(530,550,'6G')
			
		
			//连接状态
			
			
			lianjiezhuangtaibiaojikong(620,145)
			lianjiezhuangtaibiaojikong(750,145)
			lianjiezhuangtaibiaojigreen(880,145)
			
			text="北京南站车务终端"
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
		function lianjiezhuangtaibiaoji(x,y)
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
		function lianjiezhuangtaibiaojigreen(x,y)
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
            
		    context.fillRect(490, 335, 60, 15);
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
			context.fillRect(195, 350, 675, 5);
			
		}
		function changceguidaohuizhi()
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=1105;
			y1=358;
			x2=1535;
			y2=405;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			
		}
		function beijingnanzhancexiangguidao()
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=195;
			y=348;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
		    x=315;
			y=290;
			k=50;
			context.moveTo( x+40, y-3 ); // x+7,y-1
			context.lineTo( x+40+k, y-3-k);
			//context.moveTo( 157, 185 );
			//context.lineTo( 205, 138 );
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=655;
			y=230;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=810;
			y=290;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=195;
			y=417;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=315;
			y=475;
			k=50;
			context.moveTo( x+40, y+3 ); // x+7,y-1
			context.lineTo( x+40+k, y+3+k);
			context.stroke();

			x=810;
			y=470;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();


			x=655;
			y=530;
			k=50;
			context.moveTo( x, y-3 ); // x+7,y-1
			context.lineTo( x+k, y-3-k);
			context.stroke();
		}
		