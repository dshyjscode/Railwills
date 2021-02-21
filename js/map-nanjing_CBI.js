 window.onload = function () {
	        var c=5651;
			var d=100;
			var x,y,x1,x2,y1,y2,w,h,text;
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            context.fillStyle = "#000";
            context.fillRect(0, 0, 2000, 1300);
			//主轨道
            context.fillStyle = "#848284";
					
			
			//南京南站主轨道
			context.fillRect(6274-c, 190+d, 563, 5);			
			context.fillRect(5671-c, 250+d, 1761, 5);
			context.fillRect(5671-c, 310+d, 1761, 5);
			context.fillRect(6274-c, 370+d, 563, 5);
			
 			
			
			x=6462-c;y=485+d;w=190;h=60
			text="南京南站"
			chezhanbiaozhi(x,y,w,h,text)
						
			//闭塞分区标志
						
			bisaifenqu(6319-c,188+d,197+d)
			bisaifenqu(6319-c,368+d,377+d)
			
			bisaifenqu(6785-c,188+d,197+d)
			bisaifenqu(6785-c,368+d,377+d)
						
			
			bisaifenqu(5671-c,248+d,257+d)
			bisaifenqu(5671-c,308+d,317+d)
			
			bisaifenqu(5851-c,248+d,257+d)
			bisaifenqu(5851-c,308+d,317+d)
			
			bisaifenqu(6031-c,248+d,257+d)
			bisaifenqu(6031-c,308+d,317+d)
			
			bisaifenqu(6176-c,248+d,257+d)
			bisaifenqu(6176-c,308+d,317+d)
			
			bisaifenqu(6279-c,248+d,257+d)
			bisaifenqu(6279-c,308+d,317+d)
			
			bisaifenqu(6825-c,248+d,257+d)
			bisaifenqu(6825-c,308+d,317+d)
			
			bisaifenqu(6927-c,248+d,257+d)
			bisaifenqu(6927-c,308+d,317+d)
			
			bisaifenqu(7072-c,248+d,257+d)
			bisaifenqu(7072-c,308+d,317+d)
			
			bisaifenqu(7252-c,248+d,257+d)
			bisaifenqu(7252-c,308+d,317+d)
	
			bisaifenqu(7432-c,248+d,257+d)
			bisaifenqu(7432-c,308+d,317+d)
			
			
		//	bisaifenqu(6176-c,248+d,257+d)
//			bisaifenqu(6176-c,308+d,317+d)
//			
//			bisaifenqu(5851-c,248+d,257+d)
//			bisaifenqu(5851-c,308+d,317+d)
//			
//			bisaifenqu(6031-c,248+d,257+d)
//			bisaifenqu(6031-c,308+d,317+d)
//			
//			bisaifenqu(6176-c,248+d,257+d)
//			bisaifenqu(6176-c,308+d,317+d)

			
			//南京南站侧向轨道			
			nanjingnanzhancexiangguidao();			
						
			
			//南京南站下行正向进站信号机
			x=6222-c;y=250+d
            xiaxingxinhaoji(x,y)
			xieshuzi(6197-c,225+d,'X')
			//南京南站下行反方向进站信号机
			x=6222-c;y=340+d
            xiaxingxinhaoji(x,y)
			xieshuzi(6192-c,350+d,'XF')
			
			//南京南站上行正向进站信号机
			x=6940-c;y=340+d
            shangxingxinhaoji(x,y)
			xieshuzi(6925-c,350+d,'S')
			//南京南站上行反方向进站信号机
			x=6940-c;y=250+d
            shangxingxinhaoji(x,y)
			xieshuzi(6920-c,225+d,'SF')
			
			
			//南京南站上行信号机第二
			x=6332-c;y=220+d
			shangxingxinhaoji(x,y);
			xieshuzi(6312-c,230+d,'S3')
			//南京南站上行信号机第三
			x=6292-c;y=280+d
			shangxingxinhaoji(x,y);
			xieshuzi(6272-c,290+d,'SI')
			xieshuzi(6217-c,230+d,'1')
            //南京南站上行信号机第四
			x=6292-c;y=340+d
			shangxingxinhaoji(x,y);
			xieshuzi(6272-c,350+d,'SII')
			xieshuzi(6217-c,340+d,'3')
			//南京南站上行信号机第五
			x=6332-c;y=400+d
			shangxingxinhaoji(x,y);
			xieshuzi(6312-c,410+d,'S4')
			
			
			//南京南站下行信号机第二
			x=6832-c;y=190+d
            xiaxingxinhaoji(x,y)
			xieshuzi(6802-c,165+d,'X3')
			//南京南站下行信号机第三
			x=6872-c;y=250+d
            xiaxingxinhaoji(x,y)
			xieshuzi(6842-c,225+d,'XI')
			xieshuzi(6901-c,235+d,'2')
			//南京南站下行信号机第四
			x=6872-c;y=310+d
            xiaxingxinhaoji(x,y)
			xieshuzi(6842-c,285+d,'XII')
			xieshuzi(6901-c,347+d,'4')
			//南京南站下行信号机第五
			x=6832-c;y=370+d
            xiaxingxinhaoji(x,y)
			xieshuzi(6802-c,345+d,'X4')
									
			
			///// 在此处画应答器									
			//南京南站X2JG的无源应答器
			x=6019-c;y=260+d
		    sgdwy(x,y)
			
			//南京南站S2LQ的无源应答器
			x=5863-c;y=305+d
		    xgdwy(x,y)
			
			//南京南站X3JG处的有源应答器	
			x=6170-c;y=260+d
		    sgdyy(x,y)
			
			//南京南站X3JG处的无源应答器
			x=6152-c;y=260+d
		    sgdwy(x,y)
			
			//南京南站X3JG处的有源应答器	
			x=6170-c;y=305+d
		    xgdyy(x,y)
			
			//南京南站X3JG处的无源应答器
			x=6152-c;y=305+d
		    xgdwy(x,y)
			
			
			//南京南站X1LQ处的有源应答器	
			x=6933-c;y=260+d
		    sgdyy(x,y)
			
			//南京南站X1LQ处的无源应答器
			x=6951-c;y=260+d
		    sgdwy(x,y)
			
			//南京南站S3JG处的有源应答器	
			x=6933-c;y=305+d
		    xgdyy(x,y)
			
			//南京南站S3JG处的无源应答器
			x=6951-c;y=305+d
		    xgdwy(x,y)
			
			//南京南站X2LQ处的无源应答器
			x=7240-c;y=260+d
		    sgdwy(x,y)
			
			//南京南站S2JG处的无源应答器
			x=7084-c;y=305+d
		    xgdwy(x,y)
			
			
			//股道编号
			
			//南京南站股道
			xieshuzi(6557-c,210+d,'3G')
			xieshuzi(6557-c,270+d,'IG')
			xieshuzi(6557-c,330+d,'IIG')
			xieshuzi(6557-c,390+d,'4G')			
			
			//连接状态
			lianjiezhuangtaibiaojired(270,205);
			lianjiezhuangtaibiaojired(270,235)
			//初始化 非常站控红灯，允许转为自律模式和自律模式为空
			lianjiezhuangtaibiaojired(620,145)
			//lianjiezhuangtaibiaojikong(750,145)
			lianjiezhuangtaibiaojiyellow(750,145)
			lianjiezhuangtaibiaojikong(880,145)
			
			text="南京南站联锁"
			context.fillStyle = "#20b2aa";
			context.font="60px bold 宋体";
            context.fillText(text,540,70);
			
			text="与CTC通信状态"
			context.fillStyle = "#FFF";
			context.font="20px bold 宋体";
            context.fillText(text,75,200);
			
			text="与RBC通信状态"
			context.fillStyle = "#FFF";
			context.font="20px bold 宋体";
            context.fillText(text,75,230);
			
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
			
			//x=1050;y=175;
			//huazhengfangxing(x,y)
			text="1"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,1050,205);
			//x=1150;y=175;
			//huazhengfangxing(x,y)
			text="3"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,1150,205);
			//x=1250;y=175;
			//huazhengfangxing(x,y)
			text="2"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,1250,205);
			//x=1350;y=175;
			//huazhengfangxing(x,y)
		    text="4"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,1350,205);
			
			//查询此刻处于非常站控模式还是自律模式
            Pattern_query();
			getCookie_one()
        }
		
		