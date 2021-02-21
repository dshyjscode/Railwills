 window.onload = function () {
			var x,y,x1,x2,y1,y2,w,h,text;
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            context.fillStyle = "#000";
            context.fillRect(0, 0, 1800, 700);
			//主轨道
            context.fillStyle = "#848284";
					
            //南京南站主轨道
			context.fillRect(650, 290, 560, 5);
			
            context.fillRect(20, 350, 1750, 5);			
			context.fillRect(20, 410, 1750, 5);
			
			context.fillRect(650, 470, 560, 5);
		
			//画下行小车
			x=890;y=335
            huaxiaxingxiaoche(x,y)

 			//南京南站站标
			x=650;y=585;w=190;h=60
			text="南京南站"
			chezhanbiaozhi(x,y,w,h,text)
			
			
			//车档
			//x1=15;x2=20;y1=347;y2=358
			//zuocechedang(x1,x2,y1,y2)
			
			//x1=15;x2=20;y1=407;y2=418
			//zuocechedang(x1,x2,y1,y2)
			
            		
			//闭塞分区标志
			bisaifenqu(20,348,357)
			bisaifenqu(20,408,417)
			
			bisaifenqu(200,348,357)
			bisaifenqu(200,408,417)
			
			bisaifenqu(380,348,357)
			bisaifenqu(380,408,417)
			
			bisaifenqu(534,348,357)
			bisaifenqu(534,408,417)//X/XF
			bisaifenqu(656,348,357)
			bisaifenqu(656,408,417)//S1/S2			
			bisaifenqu(706,288,297)
			bisaifenqu(706,468,477)//S3/S4	
			bisaifenqu(1163,288,297)
			bisaifenqu(1163,468,477)//X3/X4	
			bisaifenqu(1206,348,357)
			bisaifenqu(1206,408,417)//X1/X2	
			
			bisaifenqu(1410,348,357)
			bisaifenqu(1410,408,417)
			
			bisaifenqu(1590,348,357)
			bisaifenqu(1590,408,417)
			
			bisaifenqu(1770,348,357)
			bisaifenqu(1770,408,417)
			
			
			//南京南站侧向轨道
			nanjingnanzhancexiangguidao();
            
			
			//南京南站信号机

            //南京南站上行信号机第一
			x=720;y=320
			shangxingxinhaoji(x,y);
			xieshuzi(700,330,'S3')

			//南京南站上行信号机第二
			x=670;y=380
			shangxingxinhaoji(x,y);
			xieshuzi(650,390,'SI')
			xieshuzi(595,335,'1')
            //南京南站上行信号机第三
			x=670;y=440
			shangxingxinhaoji(x,y);
			xieshuzi(650,450,'SII')
			xieshuzi(595,440,'3')
			//南京南站上行信号机第四
			x=720;y=500
			shangxingxinhaoji(x,y);
			xieshuzi(700,510,'S4')


			
			//南京南站下行信号机第一
			x=1210;y=290
            xiaxingxinhaoji(x,y)
			xieshuzi(1180,265,'X3')

			//南京南站下行信号机第二
			x=1250;y=350
            xiaxingxinhaoji(x,y)
			xieshuzi(1220,325,'XI')
			xieshuzi(1278,335,'2')
			//南京南站下行信号机第三
			x=1250;y=410
            xiaxingxinhaoji(x,y)
			xieshuzi(1220,385,'XII')
			xieshuzi(1278,440,'4')
			//南京南站下行信号机第四
			x=1210;y=470
            xiaxingxinhaoji(x,y)
			xieshuzi(1180,445,'X4')


			
			//南京南站下行信号机第五
			x=580;y=350
            xiaxingxinhaoji(x,y)
			xieshuzi(550,325,'X')

			//南京南站下行信号机第六
			x=580;y=440
            xiaxingxinhaoji(x,y)
			xieshuzi(550,450,'XF')
			
			//南京南站中间段1
			//x=1400;y=350
			//shangxingxinhaoji(x,y);
			//xieshuzi(1380,325,'SF')
            //南京南站中间段2
			//x=1400;y=440
			//shangxingxinhaoji(x,y);
			//xieshuzi(1380,450,'S')
						
			
			//道岔编号
			xieshuzi(930,310,'3G')
			xieshuzi(930,370,'IG')
			xieshuzi(930,430,'IIG')
			xieshuzi(930,490,'4G')
			
		
			//连接状态
			

			lianjiezhuangtaibiaojikong(620,145)
			lianjiezhuangtaibiaojikong(750,145)
			lianjiezhuangtaibiaojigreen(880,145)
			
			text="南京南站车务终端"
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
            
		    context.fillRect(890, 335, 60, 15);
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
			context.fillRect(656, 350, 550, 5);
			
		}

		function nanjingnanzhancexiangguidao()
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=583;
			y=348;
			k=50; 
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=1215;
			y=290;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=583;
			y=417;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			

			x=1215;
			y=470;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();


		}
		