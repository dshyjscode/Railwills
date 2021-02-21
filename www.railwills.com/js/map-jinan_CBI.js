 window.onload = function () {
	        var d=100;
			var c=3700;
			var x,y,x1,x2,y1,y2,w,h,text;
			
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            context.fillStyle = "#000";
            context.fillRect(0, 0, 2000, 1300);
			//主轨道
            context.fillStyle = "#848284";
								
			//济南西站主轨道
			context.fillRect(4333-c, 190+d, 563, 5);
			context.fillRect(3720-c, 250+d, 5471-c, 5);
			context.fillRect(3720-c, 310+d, 5471-c, 5);
			context.fillRect(4333-c, 370+d, 563, 5);
			

 			// 车站标志
			
			x=4521-c;y=485+d;w=190;h=60
			text="济南西站"
			chezhanbiaozhi(x,y,w,h,text)
			
			
			//闭塞分区标志
			bisaifenqu(3720-c,248+d,257+d)
			bisaifenqu(3720-c,308+d,317+d)
			
			bisaifenqu(3900-c,248+d,257+d)
			bisaifenqu(3900-c,308+d,317+d)
			bisaifenqu(4080-c,248+d,257+d)
			bisaifenqu(4080-c,308+d,317+d)
			bisaifenqu(4235-c,248+d,257+d)
			bisaifenqu(4235-c,308+d,317+d)
			
			bisaifenqu(4986-c,248+d,257+d)
			bisaifenqu(4986-c,308+d,317+d)
						

			
			bisaifenqu(4338-c,248+d,257+d)
			bisaifenqu(4338-c,308+d,317+d)		
			
			bisaifenqu(4378-c,188+d,197+d)
			bisaifenqu(4378-c,368+d,377+d)
			
			bisaifenqu(4844-c,188+d,197+d)
			bisaifenqu(4844-c,368+d,377+d)
			
			
			
			bisaifenqu(4884-c,248+d,257+d)
			bisaifenqu(4884-c,308+d,317+d)
			
			bisaifenqu(5131-c,248+d,257+d)
			bisaifenqu(5131-c,308+d,317+d)
			
			bisaifenqu(5311-c,248+d,257+d)
			bisaifenqu(5311-c,308+d,317+d)
			
			bisaifenqu(5491-c,248+d,257+d)
			bisaifenqu(5491-c,308+d,317+d)
			
            
			
			//济南西站侧向轨道			
			jinanxizhancexiangguidao();

			//济南西站下行正向进站信号机
			x=4281-c;y=250+d
            xiaxingxinhaoji(x,y)
			xieshuzi(4256-c,225+d,'X')
			//济南西站下行反方向进站信号机
			x=4281-c;y=340+d
            xiaxingxinhaoji(x,y)
			xieshuzi(4251-c,350+d,'XF')
			
			//济南西站上行正向进站信号机
			x=4999-c;y=340+d
            shangxingxinhaoji(x,y)
			xieshuzi(4984-c,350+d,'S')
			//济南西站上行反方向进站信号机
			x=4999-c;y=250+d
            shangxingxinhaoji(x,y)
			xieshuzi(4979-c,225+d,'SF')
						
			//济南西站上行信号机第二
			x=4391-c;y=220+d
			shangxingxinhaoji(x,y);
			xieshuzi(4371-c,230+d,'S3')
			//济南西站上行信号机第三
			x=4351-c;y=280+d
			shangxingxinhaoji(x,y);
			xieshuzi(4331-c,290+d,'SI')
			xieshuzi(4276-c,230+d,'1')
            //济南西站上行信号机第四
			x=4351-c;y=340+d
			shangxingxinhaoji(x,y);
			xieshuzi(4331-c,350+d,'SII')
			xieshuzi(4276-c,340+d,'3')
			//济南西站上行信号机第五
			x=4391-c;y=400+d
			shangxingxinhaoji(x,y);
			xieshuzi(4371-c,410+d,'S4')
			
			
			//济南西站下行信号机第二
			x=4891-c;y=190+d
            xiaxingxinhaoji(x,y)
			xieshuzi(4861-c,165+d,'X3')
			//济南西站下行信号机第三
			x=4931-c;y=250+d
            xiaxingxinhaoji(x,y)
			xieshuzi(4901-c,225+d,'XI')
			xieshuzi(4960-c,235+d,'2')
			//济南西站下行信号机第四
			x=4931-c;y=310+d
            xiaxingxinhaoji(x,y)
			xieshuzi(4901-c,285+d,'XII')
			xieshuzi(4960-c,350+d,'4')
			//济南西站下行信号机第五
			x=4891-c;y=370+d
            xiaxingxinhaoji(x,y)
			xieshuzi(4861-c,345+d,'X4')
			
			
			
			
			///// 在此处画应答器			
			//济南西X2JG的无源应答器
			x=4068-c;y=260+d
		    sgdwy(x,y)
			
			//济南西S2LQ的无源应答器
			x=3912-c;y=305+d
		    xgdwy(x,y)
			
			//济南西站X3JG处的有源应答器	
			x=4229-c;y=260+d
		    sgdyy(x,y)
			
			//济南西站X3JG处的无源应答器
			x=4211-c;y=260+d
		    sgdwy(x,y)
			
			//济南西站S1LQ处的有源应答器	
			x=4229-c;y=305+d
		    xgdyy(x,y)
			
			//济南西站S1LQ处的无源应答器
			x=4211-c;y=305+d
		    xgdwy(x,y)
			
			//济南西站X1LQ处的有源应答器	
			x=4992-c;y=260+d
		    sgdyy(x,y)
			
			//济南西站X1LQ处的无源应答器
			x=5010-c;y=260+d
		    sgdwy(x,y)
			
			//济南西站S3JG处的有源应答器	
			x=4992-c;y=305+d
		    xgdyy(x,y)
			
			//济南西站S3JG处的无源应答器
			x=5010-c;y=305+d
		    xgdwy(x,y)
			
			//济南西站X2LQ处的无源应答器
			x=5299-c;y=260+d
		    sgdwy(x,y) 
			
			//济南西站S2JG处的无源应答器
			x=5143-c;y=305+d
		    xgdwy(x,y)
		
			
			//股道编号
			//济南西站股道
			xieshuzi(4616-c,210+d,'3G')
			xieshuzi(4616-c,270+d,'IG')
			xieshuzi(4616-c,330+d,'IIG')
			xieshuzi(4616-c,390+d,'4G')
			
			//联锁独有内容
			//连接状态
			lianjiezhuangtaibiaojired(270,205)
			//lianjiezhuangtaibiaojilv(270,205);
			lianjiezhuangtaibiaojired(270,235)
			 //初始化 非常站控红灯，允许转为自律模式和自律模式为空
			lianjiezhuangtaibiaojired(620,145)
			//lianjiezhuangtaibiaojikong(750,145)
			lianjiezhuangtaibiaojiyellow(750,145)
			lianjiezhuangtaibiaojikong(880,145)
			
			text="济南西站联锁"
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
		
		