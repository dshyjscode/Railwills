 window.onload = function () {
	        var c=7592;
			var d=100;
			var x,y,x1,x2,y1,y2,w,h,text;
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            context.fillStyle = "#000";
            context.fillRect(0, 0, 2000, 1300);
			//主轨道
            context.fillStyle = "#848284";
					
			
			//苏州北站主轨道
			context.fillRect(8215-c, 190+d, 563, 5);
			context.fillRect(7612-c, 250+d, 1761, 5);
			context.fillRect(7612-c, 310+d, 1761, 5);
			context.fillRect(8215-c, 370+d, 563, 5);
			 			
			
			x=8403-c;y=485+d;w=190;h=60
			text="苏州北站"
			chezhanbiaozhi(x,y,w,h,text)
			
						
			//闭塞分区标志			
			
			bisaifenqu(8260-c,188+d,197+d)
			bisaifenqu(8260-c,368+d,377+d)
			
			bisaifenqu(8726-c,188+d,197+d)
			bisaifenqu(8726-c,368+d,377+d)			
			
			
			bisaifenqu(7612-c,248+d,257+d)
			bisaifenqu(7612-c,308+d,317+d)
			
			bisaifenqu(7792-c,248+d,257+d)
			bisaifenqu(7792-c,308+d,317+d)
			
			bisaifenqu(7972-c,248+d,257+d)
			bisaifenqu(7972-c,308+d,317+d)
			
			bisaifenqu(8117-c,248+d,257+d)
			bisaifenqu(8117-c,308+d,317+d)
			
			bisaifenqu(8220-c,248+d,257+d)
			bisaifenqu(8220-c,308+d,317+d)
			
			bisaifenqu(8766-c,248+d,257+d)
			bisaifenqu(8766-c,308+d,317+d)
			
			bisaifenqu(8868-c,248+d,257+d)
			bisaifenqu(8868-c,308+d,317+d)
			
			bisaifenqu(9013-c,248+d,257+d)
			bisaifenqu(9013-c,308+d,317+d)
			
			bisaifenqu(9193-c,248+d,257+d)
			bisaifenqu(9193-c,308+d,317+d)
			
			bisaifenqu(9373-c,248+d,257+d)
			bisaifenqu(9373-c,308+d,317+d)
									
			
			suzhoubeizhancexiangguidao();
									
			//苏州北站下行正向进站信号机
			x=8163-c;y=250+d
            xiaxingxinhaoji(x,y)
			xieshuzi(8138-c,225+d,'X')
			//苏州北站下行反方向进站信号机
			x=8163-c;y=340+d
            xiaxingxinhaoji(x,y)
			xieshuzi(8133-c,350+d,'XF')
			
			//苏州北站上行正向进站信号机
			x=8881-c;y=340+d
            shangxingxinhaoji(x,y)
			xieshuzi(8865-c,350+d,'S')
			//苏州北站上行反方向进站信号机
			x=8881-c;y=250+d
            shangxingxinhaoji(x,y)
			xieshuzi(8861-c,225+d,'SF')
			
			
			//苏州北站上行信号机第二
			x=8273-c;y=220+d
			shangxingxinhaoji(x,y);
			xieshuzi(8253-c,230+d,'S3')
			//苏州北站上行信号机第三
			x=8233-c;y=280+d
			shangxingxinhaoji(x,y);
			xieshuzi(8213-c,290+d,'SI')
			xieshuzi(8158-c,230+d,'1')
            //苏州北站上行信号机第四
			x=8233-c;y=340+d
			shangxingxinhaoji(x,y);
			xieshuzi(8213-c,350+d,'SII')
			xieshuzi(8158-c,340+d,'3')
			//苏州北站上行信号机第五
			x=8273-c;y=400+d
			shangxingxinhaoji(x,y);
			xieshuzi(8253-c,410+d,'S4')
			
			
			//苏州北站下行信号机第二
			x=8773-c;y=190+d
            xiaxingxinhaoji(x,y)
			xieshuzi(8743-c,165+d,'X3')
			//苏州北站下行信号机第三
			x=8813-c;y=250+d
            xiaxingxinhaoji(x,y)
			xieshuzi(8783-c,225+d,'XI')
			xieshuzi(8843-c,235+d,'2')
			//苏州北站下行信号机第四
			x=8813-c;y=310+d
            xiaxingxinhaoji(x,y)
			xieshuzi(8783-c,285+d,'XII')
			xieshuzi(8843-c,347+d,'4')
			//苏州北站下行信号机第五
			x=8773-c;y=370+d
            xiaxingxinhaoji(x,y)
			xieshuzi(8743-c,345+d,'X4')
			
			
			///// 在此处画应答器					    		
			//苏州北站X2JG的无源应答器
			x=7960-c;y=260+d
		    sgdwy(x,y)
			
			//苏州北站S2LQ的无源应答器
			x=7804-c;y=305+d
		    xgdwy(x,y)
			
			//苏州北站X3JG处的有源应答器	
			x=8111-c;y=260+d
		    sgdyy(x,y)
			
			//苏州北站X3JG处的无源应答器
			x=8093-c;y=260+d
		    sgdwy(x,y)
			
			//苏州北站X3JG处的有源应答器	
			x=8111-c;y=305+d
		    xgdyy(x,y)
			
			//苏杭北站X3JG处的无源应答器
			x=8093-c;y=305+d
		    xgdwy(x,y)
			
			//苏州北站X1LQ处的有源应答器	
			x=8874-c;y=260+d
		    sgdyy(x,y)
			
			//苏州北站X1LQ处的无源应答器
			x=8892-c;y=260+d
		    sgdwy(x,y)
			
			//苏州北站S3JG处的有源应答器	
			x=8874-c;y=305+d
		    xgdyy(x,y)
			
			//苏州北站S3JG处的无源应答器
			x=8892-c;y=305+d
		    xgdwy(x,y)
			
			//苏州北站X2LQ处的无源应答器
			x=9181-c;y=260+d
		    sgdwy(x,y)
			
			//苏州北站S2JG处的无源应答器
			x=9025-c;y=305+d
		    xgdwy(x,y)
			
			
			//股道编号						
			//苏州北站股道
			xieshuzi(8498-c,210+d,'3G')
			xieshuzi(8498-c,270+d,'IG')
			xieshuzi(8498-c,330+d,'IIG')
			xieshuzi(8498-c,390+d,'4G')
			
			//连接状态
			lianjiezhuangtaibiaojired(270,205);
			lianjiezhuangtaibiaojired(270,235)
            //初始化 非常站控红灯，允许转为自律模式和自律模式为空
			lianjiezhuangtaibiaojired(620,145)
			//lianjiezhuangtaibiaojikong(750,145)
			lianjiezhuangtaibiaojiyellow(750,145)
			lianjiezhuangtaibiaojikong(880,145)
			
			text="苏州北站联锁"
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
		
		