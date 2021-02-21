 window.onload = function () {
	        var d=100;
			var x,y,x1,x2,y1,y2,w,h,text;
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            context.fillStyle = "#000";
            context.fillRect(0, 0, 2000, 1300);
			//主轨道
            context.fillStyle = "#848284";
					
            //北京南站主轨道
            context.fillRect(406, 130+d, 245, 5);
			
			context.fillRect(255, 190+d, 555, 5);

			context.fillRect(20, 250+d, 1570, 5);
			context.fillRect(20, 310+d, 1570, 5);
			context.fillRect(255, 370+d, 555, 5);
			context.fillRect(406, 430+d, 245, 5);
			
 			//北京南站站标
			x=440;y=485+d;w=190;h=60
			text="北京南站"
			chezhanbiaozhi(x,y,w,h,text)
			
			
			//车档
			x1=15;x2=20;y1=247+d;y2=258+d
			zuocechedang(x1,x2,y1,y2)
			
			x1=15;x2=20;y1=307+d;y2=318+d
			zuocechedang(x1,x2,y1,y2)
			
			x1=10958;x2=10953;y1=247+d;y2=258+d
			zuocechedang(x1,x2,y1,y2)
			
			x1=10958;x2=10953;y1=307+d;y2=318+d
			zuocechedang(x1,x2,y1,y2)
            
			
			//闭塞分区标志
			bisaifenqu(163,248+d,257+d)
			bisaifenqu(163,308+d,317+d)
			bisaifenqu(905,248+d,257+d)
			bisaifenqu(905,308+d,317+d)
			bisaifenqu(1050,248+d,257+d)
			bisaifenqu(1050,308+d,317+d)
			bisaifenqu(1230,248+d,257+d)
			bisaifenqu(1230,308+d,317+d)
			bisaifenqu(1410,248+d,257+d)
			bisaifenqu(1410,308+d,317+d)
			
			
			bisaifenqu(1590,248+d,257+d)
			bisaifenqu(1590,308+d,317+d)
						
			
			bisaifenqu(326,188+d,197+d)
			bisaifenqu(326,248+d,257+d)
			bisaifenqu(326,308+d,317+d)
			bisaifenqu(326,368+d,377+d)
			
			bisaifenqu(406,188+d,197+d)
			bisaifenqu(406,368+d,377+d)
			
		    bisaifenqu(436,128+d,137+d)
			bisaifenqu(436,428+d,437+d)
			
		    bisaifenqu(613,128+d,137+d)
			bisaifenqu(613,428+d,437+d)
			
			bisaifenqu(653,188+d,197+d)
			bisaifenqu(653,368+d,377+d)
			
			bisaifenqu(753,248+d,257+d)
			bisaifenqu(753,308+d,317+d)
			
			bisaifenqu(753,188+d,197+d)
			bisaifenqu(753,368+d,377+d)
						

            //长侧向轨道
			BJchangceguidaohuizhi();
            
			
			//北京南站侧向轨道
			beijingnanzhancexiangguidao();
			
			
			////北京南站调车信号机			
			x=373;y=190+d
			xiaxingdiaochexinhaoji(x,y);
			xieshuzi(333,165+d,'D1')
			
			x=373;y=370+d
			xiaxingdiaochexinhaoji1(x,y);
			xieshuzi(345,348+d,'D3')
			
			x=919;y=280+d
			shangxingdiaochexinhaoji(x,y);
			xieshuzi(900,290+d,'D2')
			
			x=919;y=340+d
			shangxingdiaochexinhaoji(x,y);
			xieshuzi(900,350+d,'D4')
			
			
			//////北京南站列车信号机
			//北京南站上行信号机第一
			x=450;y=160+d
			shangxingxinhaoji(x,y);
			xieshuzi(430,170+d,'S5')
						
            //context.strokeRect(150, 450, 100, 100);
            //北京南站上行信号机第二
			x=420;y=220+d
			shangxingxinhaoji(x,y);
			xieshuzi(400,230+d,'S3')
			xieshuzi(355,175+d,'5')
			//北京南站上行信号机第三
			x=340;y=280+d
			shangxingxinhaoji(x,y);
			xieshuzi(320,290+d,'SI')
			xieshuzi(205,225+d,'1')
            //北京南站上行信号机第四
			x=340;y=340+d
			shangxingxinhaoji(x,y);
			xieshuzi(320,345+d,'SII')
			xieshuzi(205,340+d,'3')
			//北京南站上行信号机第五
			x=420;y=400+d
			shangxingxinhaoji(x,y);
			xieshuzi(400,410+d,'S4')
			xieshuzi(350,400+d,'7')
			//北京南站上行信号机第六
			x=450;y=460+d
			shangxingxinhaoji(x,y);
			xieshuzi(430,470+d,'S6')
			
			//北京南站下行信号机第一
			x=660;y=130+d
            xiaxingxinhaoji(x,y)
			xieshuzi(630,105+d,'X5')
			//北京南站下行信号机第二
			x=700;y=190+d
            xiaxingxinhaoji(x,y)
			xieshuzi(665,165+d,'X3')
			xieshuzi(715,180+d,'10')
			//北京南站下行信号机第三
			x=800;y=250+d
            xiaxingxinhaoji(x,y)
			xieshuzi(770,225+d,'XI')
			xieshuzi(875,235+d,'6')
			//北京南站下行信号机第四
			x=800;y=310+d
            xiaxingxinhaoji(x,y)
			xieshuzi(770,285+d,'XII')
			xieshuzi(875,340+d,'8')
			//北京南站下行信号机第五
			x=700;y=370+d
            xiaxingxinhaoji(x,y)
			xieshuzi(670,345+d,'X4')
			xieshuzi(715,400+d,'12')
			//北京南站下行信号机第六
			x=660;y=430+d
            xiaxingxinhaoji(x,y)
			xieshuzi(630,405+d,'X6')
			
			//北京南站下行信号机第七
			x=210;y=250+d
            xiaxingxinhaoji(x,y)
			xieshuzi(180,225+d,'X')
			xieshuzi(930,235+d,'4')
			//北京南站下行信号机第八
			x=210;y=340+d
            xiaxingxinhaoji(x,y)
			xieshuzi(180,350+d,'XF')
			xieshuzi(1025,347+d,'2')
			
			//北京南站中间段1
			x=1063;y=250+d
			shangxingxinhaoji(x,y);
			xieshuzi(1043,225+d,'SF')
            //北京南站中间段2
			x=1063;y=340+d
			shangxingxinhaoji(x,y);
			xieshuzi(1048,350+d,'S')			
			
			
			///// 在此处画应答器
			
		    //北京南站X1JG处的有源应答器	
			x=157;y=260+d
		    sgdyy(x,y)
			
			//北京南站X1JG处的无源应答器
			x=139;y=260+d
		    sgdwy(x,y)
			
			//北京南站S1LQ处的有源应答器	
			x=157;y=305+d
		    xgdyy(x,y)
			
			//北京南站S1LQ处的无源应答器
			x=139;y=305+d
		    xgdwy(x,y)
			
			//北京南站X1LQ处的有源应答器	
			x=1056;y=260+d
		    sgdyy(x,y)
			
			//北京南站X1LQ处的无源应答器
			x=1074;y=260+d
		    sgdwy(x,y)
			
			//北京南站S3JG处的有源应答器	
			x=1056;y=305+d
		    xgdyy(x,y)
			
			//北京南站S3JG处的无源应答器
			x=1074;y=305+d
		    xgdwy(x,y)
			
			//北京南站X2LQ处的无源应答器
			x=1398;y=260+d
		    sgdwy(x,y)
			
			//北京南站S2JG处的无源应答器
			x=1242;y=305+d
		    xgdwy(x,y)
						
			
			
			//股道编号
			//北京南站股道
			xieshuzi(530,150+d,'5G')
			xieshuzi(530,210+d,'3G')
			xieshuzi(530,270+d,'IG')
			xieshuzi(530,330+d,'IIG')
			xieshuzi(530,390+d,'4G')
			xieshuzi(530,450+d,'6G')
			
			//连接状态
			lianjiezhuangtaibiaojired(270,205);
			lianjiezhuangtaibiaojired(270,235)
			//初始化 非常站控红灯，允许转为自律模式和自律模式为空
			lianjiezhuangtaibiaojired(620,145)
			//lianjiezhuangtaibiaojikong(750,145)
			lianjiezhuangtaibiaojiyellow(750,145)
			lianjiezhuangtaibiaojikong(880,145)
			
			text="北京南站联锁"
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
			
			text="与CTC通信状态"
			context.fillStyle = "#FFF";
			context.font="20px bold 宋体";
			context.fillText(text,75,200);
						
			text="与RBC通信状态"
			context.fillStyle = "#FFF";
			context.font="20px bold 宋体";
			context.fillText(text,75,230);
			
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
			text="5"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,1250,205);
			//x=1350;y=175;
			//huazhengfangxing(x,y)
		    text="7"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,1350,205);
			
			//x=1000;y=250;
			//huazhengfangxing(x,y)
			text="2/4"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,993,280);
			//x=1100;y=250;
			//huazhengfangxing(x,y)
			text="6"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,1100,280);
			//x=1200;y=250;
			//huazhengfangxing(x,y)
			text="8"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,1200,280);
			//x=1300;y=250;
			//huazhengfangxing(x,y)
			text="10"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,1295,280);
			//x=1400;y=250;
			//huazhengfangxing(x,y)
			text="12"
			context.fillStyle = "#FFF";
			context.font="15px bold 宋体";
            context.fillText(text,1395,280);
			//查询此刻处于非常站控模式还是自律模式
            Pattern_query();
			getCookie_one();
			

        }
		