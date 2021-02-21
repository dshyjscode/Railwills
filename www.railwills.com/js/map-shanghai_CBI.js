 window.onload = function () {
	        var c=9173;
			var d=100;
			var x,y,x1,x2,y1,y2,w,h,text;
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            context.fillStyle = "#000";
            context.fillRect(0, 0, 2000, 1300);
			//主轨道
            context.fillStyle = "#848284";
					
			
			//上海虹桥站主轨道
            context.fillRect(10305-c, 130+d, 246, 5);
			context.fillRect(10145-c, 190+d, 565, 5);
			context.fillRect(9193-c, 250+d, 1760, 5);
			context.fillRect(9193-c, 310+d, 1760, 5);
			context.fillRect(10145-c, 370+d, 565, 5);
			context.fillRect(10305-c, 430+d, 246, 5);
			
			
			x=10333-c;y=485+d;w=210;h=60
			text="上海虹桥站"
			chezhanbiaozhi(x,y,w,h,text)
			//车档
						
			x1=10958-c;x2=10953-c;y1=247+d;y2=258+d
			zuocechedang(x1,x2,y1,y2)
			
			x1=10958-c;x2=10953-c;y1=307+d;y2=318+d
			zuocechedang(x1,x2,y1,y2)
            
			
			//闭塞分区标志
					
			bisaifenqu(10190-c,188+d,197+d)
			bisaifenqu(10190-c,368+d,377+d)
			
			bisaifenqu(10300-c,188+d,197+d)
			bisaifenqu(10300-c,368+d,377+d)
			
			bisaifenqu(10340-c,128+d,137+d)
			bisaifenqu(10340-c,428+d,437+d)
						
			bisaifenqu(10516-c,128+d,137+d)
			bisaifenqu(10516-c,428+d,437+d)
			
			bisaifenqu(10556-c,188+d,197+d)//1383
			bisaifenqu(10556-c,368+d,377+d)
			
			bisaifenqu(10666-c,188+d,197+d)//1493
			bisaifenqu(10666-c,368+d,377+d)
			
			/////
			bisaifenqu(9193-c,248+d,257+d)
			bisaifenqu(9193-c,308+d,317+d)
			
			bisaifenqu(9373-c,248+d,257+d)
			bisaifenqu(9373-c,308+d,317+d)
			
			bisaifenqu(9553-c,248+d,257+d)
			bisaifenqu(9553-c,308+d,317+d)
			
			bisaifenqu(9733-c,248+d,257+d)
			bisaifenqu(9733-c,308+d,317+d)
			
			bisaifenqu(9913-c,248+d,257+d)
			bisaifenqu(9913-c,308+d,317+d)
			
			bisaifenqu(10058-c,248+d,257+d)
			bisaifenqu(10058-c,308+d,317+d)
			
			bisaifenqu(10190-c,248+d,257+d)
			bisaifenqu(10190-c,308+d,317+d)
			
			bisaifenqu(10697-c,248+d,257+d)
			bisaifenqu(10697-c,308+d,317+d)
			
			bisaifenqu(10798-c,248+d,257+d)
			bisaifenqu(10798-c,308+d,317+d)
						
            //长侧向轨道
			SHchangceguidaohuizhi();

			
			//上海虹桥站侧向轨道			
			shanghaihongqiaozhancexiangguidao();
            						
			
			//上海虹桥站信号机
			//上海虹桥上行信号机第一
			x=10353-c;y=160+d
			shangxingxinhaoji(x,y);
			xieshuzi(10333-c,170+d,'S5')
            //上海虹桥上行信号机第二
			x=10313-c;y=220+d
			shangxingxinhaoji(x,y);
			xieshuzi(10293-c,230+d,'S3')
			xieshuzi(10243-c,180+d,'9')
	
			//上海虹桥上行信号机第三
			x=10203-c;y=280+d
			shangxingxinhaoji(x,y);
			xieshuzi(10183-c,290+d,'SI')
			xieshuzi(10088-c,235+d,'5')
			xieshuzi(10033-c,235+d,'3')
            //上海虹桥上行信号机第四
			x=10203-c;y=340+d
			shangxingxinhaoji(x,y);
			xieshuzi(10183-c,350+d,'SII')
			xieshuzi(10088-c,340+d,'7')
			xieshuzi(9950-c,340+d,'1')
			//上海虹桥上行信号机第五
			x=10313-c;y=400+d
			shangxingxinhaoji(x,y);
			xieshuzi(10298-c,410+d,'S4')
			xieshuzi(10243-c,400+d,'11')
			//上海虹桥上行信号机第六
			x=10353-c;y=460+d
			shangxingxinhaoji(x,y);
			xieshuzi(10333-c,470+d,'S6')
			
			//上海虹桥下行信号机第一
			x=10563-c;y=130+d
            xiaxingxinhaoji(x,y)
			xieshuzi(10533-c,105+d,'X5')
			//上海虹桥下行信号机第二
			x=10603-c;y=190+d
            xiaxingxinhaoji(x,y)
			xieshuzi(10563-c,165+d,'X3')
			xieshuzi(10618-c,180+d,'6')
			
			//上海虹桥站上行正向进站信号机
			x=10812-c;y=340+d
            shangxingxinhaoji(x,y)
			xieshuzi(10796-c,350+d,'S')
			//上海虹桥站上行反方向进站信号机
			x=10812-c;y=250+d
            shangxingxinhaoji(x,y)
			xieshuzi(10792-c,225+d,'SF')

			//上海虹桥下行信号机第三
			x=10743-c;y=250+d
            xiaxingxinhaoji(x,y)
			xieshuzi(10713-c,225+d,'XI')
			xieshuzi(10775-c,235+d,'2')
			//上海虹桥下行信号机第四
			x=10743-c;y=310+d
            xiaxingxinhaoji(x,y)
			xieshuzi(10713-c,285+d,'XII')
			xieshuzi(10775-c,350+d,'4')
			//上海虹桥下行信号机第五
			x=10603-c;y=370+d
            xiaxingxinhaoji(x,y)
			xieshuzi(10568-c,345+d,'X4')
			xieshuzi(10618-c,400+d,'8')
			//上海虹桥下行信号机第六
			x=10563-c;y=430+d
            xiaxingxinhaoji(x,y)
			xieshuzi(10533-c,405+d,'X6')
			//上海虹桥下行正方向信号机
			x=9959-c;y=250+d
            xiaxingxinhaoji(x,y)
			xieshuzi(9934-c,225+d,'X')
			//上海虹桥下行反方向信号机
			x=9959-c;y=340+d
            xiaxingxinhaoji(x,y)
			xieshuzi(9929-c,350+d,'XF')
			
			
			///// 在此处画应答器		   
			
			//上海虹桥站X2JG的无源应答器
			x=9721-c;y=260+d
		    sgdwy(x,y)
			
			//上海虹桥站S2LQ的无源应答器
			x=9565-c;y=305+d
		    xgdwy(x,y)
			
			//上海虹桥站X3JG处的有源应答器	
			x=9907-c;y=260+d
		    sgdyy(x,y)
			
			//上海虹桥站X3JG处的无源应答器
			x=9889-c;y=260+d
		    sgdwy(x,y)
			
			//上海虹桥站X3JG处的有源应答器	
			x=9907-c;y=305+d
		    xgdyy(x,y)
			
			//上海虹桥站X3JG处的无源应答器
			x=9889-c;y=305+d
		    xgdwy(x,y)
			
			//上海虹桥站X1LQ处的有源应答器	
			x=10804-c;y=260+d
		    sgdyy(x,y)
			
			//上海虹桥站X1LQ处的无源应答器
			x=10822-c;y=260+d
		    sgdwy(x,y)
			
			//上海虹桥站S1JG处的有源应答器	
			x=10804-c;y=305+d
		    xgdyy(x,y)
			
			//上海虹桥站S1JG处的无源应答器
			x=10822-c;y=305+d
		    xgdwy(x,y) 
			
						
			//股道编号						
			//上海虹桥站股道
			xieshuzi(10428-c,150+d,'5G')
			xieshuzi(10428-c,210+d,'3G')
			xieshuzi(10428-c,270+d,'IG')
			xieshuzi(10428-c,330+d,'IIG')
			xieshuzi(10428-c,390+d,'4G')
			xieshuzi(10428-c,450+d,'6G')
			
			//连接状态
			lianjiezhuangtaibiaojired(270,205);
			lianjiezhuangtaibiaojired(270,235)
			//初始化 非常站控红灯，允许转为自律模式黄，自律模式为空
			lianjiezhuangtaibiaojired(620,145)
			//lianjiezhuangtaibiaojikong(750,145)
			lianjiezhuangtaibiaojiyellow(750,145)
			lianjiezhuangtaibiaojikong(880,145)
			
			text="上海虹桥站联锁"
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
			
			//x=600;y=200;
			//huazhengfangxing(x,y)
			text="1/3"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,593,230);
			//x=700;y=200;
			//huazhengfangxing(x,y)
			text="5"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,700,230);
			//x=800;y=200;
			//huazhengfangxing(x,y)
			text="7"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,800,230);
			//x=900;y=200;
			//huazhengfangxing(x,y)
			text="9"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,900,230);
			//x=1000;y=200;
			//huazhengfangxing(x,y)
		    text="11"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,995,230);
			
			//x=650;y=260;
			//huazhengfangxing(x,y)
			text="2"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,650,290);
			//x=750;y=260;
			//huazhengfangxing(x,y)
			text="4"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,750,290);
			//x=850;y=260;
			//huazhengfangxing(x,y)
			text="6"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,850,290);
			//x=950;y=260;
			//huazhengfangxing(x,y)
			text="8"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,950,290);
			
			//查询此刻处于非常站控模式还是自律模式
            Pattern_query();
			getCookie_one()
        }
		
       
		