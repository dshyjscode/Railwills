 window.onload = function () {
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
            xiaxingxinhaoji(x,y)
			xieshuzi(2295-c,225+d,'X')
			//天津南站下行反方向进站信号机
			x=2320-c;y=340+d
            xiaxingxinhaoji(x,y)
			xieshuzi(2290-c,350+d,'XF')
			
			//天津南站上行正向进站信号机
			x=3193-c;y=340+d
            shangxingxinhaoji(x,y)
			xieshuzi(3178-c,350+d,'S')
			xieshuzi(3050-c,340+d,'4')
			xieshuzi(3155-c,348+d,'6')
			//天津南站上行反方向进站信号机
			x=3193-c;y=250+d
            shangxingxinhaoji(x,y)
			xieshuzi(3173-c,225+d,'SF')
			xieshuzi(3050-c,235+d,'8')
			xieshuzi(3155-c,235+d,'2')			
			
			//天津南站上行信号机第二
			x=2430-c;y=220+d
			shangxingxinhaoji(x,y);
			xieshuzi(2410-c,230+d,'S3')
			//天津南站上行信号机第三
			x=2390-c;y=280+d
			shangxingxinhaoji(x,y);
			xieshuzi(2370-c,290+d,'SI')
			xieshuzi(2315-c,230+d,'1')
            //天津南站上行信号机第四
			x=2390-c;y=340+d
			shangxingxinhaoji(x,y);
			xieshuzi(2370-c,350+d,'SII')
			xieshuzi(2315-c,340+d,'3')
			//天津南站上行信号机第五
			x=2430-c;y=400+d
			shangxingxinhaoji(x,y);
			xieshuzi(2410-c,410+d,'S4')
			
			
			//天津南站下行信号机第二
			x=2930-c;y=190+d
            xiaxingxinhaoji(x,y)
			xieshuzi(2900-c,165+d,'X3')
			//天津南站下行信号机第三
			x=2970-c;y=250+d
            xiaxingxinhaoji(x,y)
			xieshuzi(2940-c,225+d,'XI')
			xieshuzi(3005-c,235+d,'10')
			//天津南站下行信号机第四
			x=2970-c;y=310+d
            xiaxingxinhaoji(x,y)
			xieshuzi(2940-c,285+d,'XII')
			xieshuzi(3005-c,340+d,'12')
			//天津南站下行信号机第五
			x=2930-c;y=370+d
            xiaxingxinhaoji(x,y)
			xieshuzi(2900-c,345+d,'X4')
			
			
			///// 在此处画应答器		    
			
			
			//北京南至天津南区间的无源应答器
			x=1602-c;y=305+d
		    xgdwy(x,y)
						
			
			//天津南站X2JG的无源应答器
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
			
			//连接状态
			lianjiezhuangtaibiaojired(270,205);
			lianjiezhuangtaibiaojired(270,235)
            //初始化 非常站控红灯，允许转为自律模式和自律模式为空
			lianjiezhuangtaibiaojired(620,145)
			//lianjiezhuangtaibiaojikong(750,145)
			lianjiezhuangtaibiaojiyellow(750,145)
			lianjiezhuangtaibiaojikong(880,145)
			
			text="天津南站联锁"
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
			text="10"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,1246,205);
			//x=1350;y=175;
			//huazhengfangxing(x,y)
		    text="12"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,1346,205);
			
			//查询此刻处于非常站控模式还是自律模式
            Pattern_query();
			getCookie_one()
        }
		