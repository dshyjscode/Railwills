 window.onload = function () {
			var x,y,x1,x2,y1,y2,w,h,text;
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            context.fillStyle = "#000";
            context.fillRect(0, 0, 11323, 1300);
			//主轨道
            context.fillStyle = "#848284";
					
            //北京南站主轨道
            context.fillRect(406, 130, 245, 5);
			
			context.fillRect(255, 190, 555, 5);

			context.fillRect(20, 250, 10933, 5);
			context.fillRect(20, 310, 10933, 5);
			context.fillRect(255, 370, 555, 5);
			context.fillRect(406, 430, 245, 5);
			
			//天津南站主轨道
			context.fillRect(2372, 190, 563, 5);
			context.fillRect(2372, 370, 563, 5);
			
			//济南西站主轨道
			context.fillRect(4333, 190, 563, 5);
			context.fillRect(4333, 370, 563, 5);
			
			//南京南站主轨道
			context.fillRect(6274, 190, 563, 5);
			context.fillRect(6274, 370, 563, 5);
			
			//苏州北站主轨道
			context.fillRect(8215, 190, 563, 5);
			context.fillRect(8215, 370, 563, 5);
			


			
			//上海虹桥站主轨道
            context.fillRect(10305, 130, 246, 5);
			context.fillRect(10145, 190, 565, 5);
			context.fillRect(10145, 370, 565, 5);
			context.fillRect(10305, 430, 246, 5);
			
			
			//画下行小车
			//x=490;y=235
            //huaxiaxingxiaoche(x,y)
			
			
			/*context.fillStyle = "black";
			context.fillRect(350, 190, 12, 5);  // 将北京南站的5号道岔由定位转到反位(画黑块)
									
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#848284";   // 将北京南站的5DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------
	        x=338;
	        y=192;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();
			
			context.fillStyle = "black";
			context.fillRect(345, 185, 11, 5);  // 将北京南站的5号道岔由反位转到定位(画黑块)*/
			
			
			/*x=383;y=152
			context.fillStyle = "blue";   // 5号道岔上行

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x+8, y-30); // 起点
			context.lineTo( x+20, y-20);
			context.lineTo( x-25, y+25);
			context.lineTo( x-25, y+5);
			context.fill();
			context.stroke();*/
			
			/*x=378;y=160
			context.fillStyle = "blue";  // 5号道岔下行弯股小车

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x-25, y+25); // 起点
			context.lineTo( x+25, y-25);
			context.lineTo( x+1, y-20);
			context.lineTo( x-36, y+17);
			context.fill();
			context.stroke();*/
			
			
			/*context.fillStyle = "black";
			context.fillRect(350, 370, 12, 5);  // 将北京南站的7号道岔由定位转到反位(画黑块)						
			
	        context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="#848284";  // 将北京南站的7DG的弯股变为白光带（已将7号道岔从定位转到反位)
			x=348;
			y=368;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();
			
			context.fillStyle = "black";
			context.fillRect(346, 375, 11, 7);*/  // 将北京南站的7号道岔由反位转到定位(画黑块）
			
			/*x=357;y=382
			context.fillStyle = "blue";  // 7号道岔处下行
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+40, y+20);
			context.lineTo( x+10, y-10);
			context.fill();
			context.stroke();*/
			
			/*x=358;y=380
			context.fillStyle = "blue";  // 7号道岔处上行
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+58, y+38);
			context.lineTo( x+20, y);
			context.fill();
			context.stroke();*/
			
			
		
			//画上行小车
			x=10399;y=295
            huashangxingxiaoche(x,y)

 			//北京南站站标
			x=440;y=485;w=190;h=60
			text="北京南站"
			chezhanbiaozhi(x,y,w,h,text)
			
			x=2560;y=485;w=190;h=60
			text="天津南站"
			chezhanbiaozhi(x,y,w,h,text)
			
			x=4521;y=485;w=190;h=60
			text="济南西站"
			chezhanbiaozhi(x,y,w,h,text)
			
			x=6462;y=485;w=190;h=60
			text="南京南站"
			chezhanbiaozhi(x,y,w,h,text)
			
			x=8403;y=485;w=190;h=60
			text="苏州北站"
			chezhanbiaozhi(x,y,w,h,text)
			
			x=10333;y=485;w=210;h=60
			text="上海虹桥站"
			chezhanbiaozhi(x,y,w,h,text)
			//车档
			x1=15;x2=20;y1=247;y2=258
			zuocechedang(x1,x2,y1,y2)
			
			x1=15;x2=20;y1=307;y2=318
			zuocechedang(x1,x2,y1,y2)
			
			x1=10958;x2=10953;y1=247;y2=258
			zuocechedang(x1,x2,y1,y2)
			
			x1=10958;x2=10953;y1=307;y2=318
			zuocechedang(x1,x2,y1,y2)
            
			
			//闭塞分区标志
			bisaifenqu(163,248,257)
			bisaifenqu(163,308,317)
			bisaifenqu(905,248,257)
			bisaifenqu(905,308,317)
			bisaifenqu(1050,248,257)
			bisaifenqu(1050,308,317)
			bisaifenqu(1230,248,257)
			bisaifenqu(1230,308,317)
			bisaifenqu(1410,248,257)
			bisaifenqu(1410,308,317)
			
			
			bisaifenqu(1590,248,257)
			bisaifenqu(1590,308,317)
			bisaifenqu(1770,248,257)
			bisaifenqu(1770,308,317)
			bisaifenqu(1950,248,257)
			bisaifenqu(1950,308,317)
			bisaifenqu(2130,248,257)
			bisaifenqu(2130,308,317)
			bisaifenqu(2274,248,257)
			bisaifenqu(2274,308,317)
			
			
			bisaifenqu(3025,248,257)
			bisaifenqu(3025,308,317)
			
			bisaifenqu(3180,248,257)
			bisaifenqu(3180,308,317)
			bisaifenqu(3360,248,257)
			bisaifenqu(3360,308,317)
			bisaifenqu(3540,248,257)
			bisaifenqu(3540,308,317)
			
			bisaifenqu(3720,248,257)
			bisaifenqu(3720,308,317)
			
			bisaifenqu(3900,248,257)
			bisaifenqu(3900,308,317)
			bisaifenqu(4080,248,257)
			bisaifenqu(4080,308,317)
			bisaifenqu(4235,248,257)
			bisaifenqu(4235,308,317)
			
			bisaifenqu(4986,248,257)
			bisaifenqu(4986,308,317)
			
			
			bisaifenqu(326,188,197)
			bisaifenqu(326,248,257)
			bisaifenqu(326,308,317)
			bisaifenqu(326,368,377)
			
			bisaifenqu(406,188,197)
			bisaifenqu(406,368,377)
			
		    bisaifenqu(436,128,137)
			bisaifenqu(436,428,437)
			
		    bisaifenqu(613,128,137)
			bisaifenqu(613,428,437)
			
			bisaifenqu(653,188,197)
			bisaifenqu(653,368,377)
			
			bisaifenqu(753,248,257)
			bisaifenqu(753,308,317)
			
			bisaifenqu(753,188,197)
			bisaifenqu(753,368,377)
			
			bisaifenqu(2377,248,257)
			bisaifenqu(2377,308,317)
			
			bisaifenqu(2417,188,197)
			bisaifenqu(2417,368,377)
			
			bisaifenqu(2883,188,197)
			bisaifenqu(2883,368,377)
			
			bisaifenqu(2923,248,257)
			bisaifenqu(2923,308,317)
			
			bisaifenqu(4338,248,257)
			bisaifenqu(4338,308,317)		
			
			bisaifenqu(4378,188,197)
			bisaifenqu(4378,368,377)
			
			bisaifenqu(4844,188,197)
			bisaifenqu(4844,368,377)
			
			bisaifenqu(6319,188,197)
			bisaifenqu(6319,368,377)
			
			bisaifenqu(6785,188,197)
			bisaifenqu(6785,368,377)
			
			bisaifenqu(8260,188,197)
			bisaifenqu(8260,368,377)
			
			bisaifenqu(8726,188,197)
			bisaifenqu(8726,368,377)			
			
			bisaifenqu(10190,188,197)
			bisaifenqu(10190,368,377)
			
			bisaifenqu(10300,188,197)
			bisaifenqu(10300,368,377)
			
			bisaifenqu(10340,128,137)
			bisaifenqu(10340,428,437)
						
			bisaifenqu(10516,128,137)
			bisaifenqu(10516,428,437)
			
			bisaifenqu(10556,188,197)
			bisaifenqu(10556,368,377)
			
			bisaifenqu(10666,188,197)
			bisaifenqu(10666,368,377)
			
			bisaifenqu(4884,248,257)
			bisaifenqu(4884,308,317)
			
			bisaifenqu(5131,248,257)
			bisaifenqu(5131,308,317)
			
			bisaifenqu(5311,248,257)
			bisaifenqu(5311,308,317)
			
			bisaifenqu(5491,248,257)
			bisaifenqu(5491,308,317)
			
			bisaifenqu(5671,248,257)
			bisaifenqu(5671,308,317)
			
			bisaifenqu(5851,248,257)
			bisaifenqu(5851,308,317)
			
			bisaifenqu(6031,248,257)
			bisaifenqu(6031,308,317)
			
			bisaifenqu(6176,248,257)
			bisaifenqu(6176,308,317)
			
			bisaifenqu(6279,248,257)
			bisaifenqu(6279,308,317)
			
			bisaifenqu(6825,248,257)
			bisaifenqu(6825,308,317)
			
			bisaifenqu(6927,248,257)
			bisaifenqu(6927,308,317)
			
			bisaifenqu(7072,248,257)
			bisaifenqu(7072,308,317)
			
			bisaifenqu(7252,248,257)
			bisaifenqu(7252,308,317)
	
			bisaifenqu(7432,248,257)
			bisaifenqu(7432,308,317)
			
			bisaifenqu(7612,248,257)
			bisaifenqu(7612,308,317)
			
			bisaifenqu(7792,248,257)
			bisaifenqu(7792,308,317)
			
			bisaifenqu(7972,248,257)
			bisaifenqu(7972,308,317)
			
			bisaifenqu(8117,248,257)
			bisaifenqu(8117,308,317)
			
			bisaifenqu(8220,248,257)
			bisaifenqu(8220,308,317)
			
			bisaifenqu(8766,248,257)
			bisaifenqu(8766,308,317)
			
			bisaifenqu(8868,248,257)
			bisaifenqu(8868,308,317)
			
			bisaifenqu(9013,248,257)
			bisaifenqu(9013,308,317)
			
			bisaifenqu(9193,248,257)
			bisaifenqu(9193,308,317)
			
			bisaifenqu(9373,248,257)
			bisaifenqu(9373,308,317)
			
			bisaifenqu(9553,248,257)
			bisaifenqu(9553,308,317)
			
			bisaifenqu(9733,248,257)
			bisaifenqu(9733,308,317)
			
			bisaifenqu(9913,248,257)
			bisaifenqu(9913,308,317)
			
			bisaifenqu(10058,248,257)
			bisaifenqu(10058,308,317)
			
			bisaifenqu(10190,248,257)
			bisaifenqu(10190,308,317)
			
			bisaifenqu(10697,248,257)
			bisaifenqu(10697,308,317)
			
			bisaifenqu(10798,248,257)
			bisaifenqu(10798,308,317)
			
			bisaifenqu(6176,248,257)
			bisaifenqu(6176,308,317)
			
			bisaifenqu(5851,248,257)
			bisaifenqu(5851,308,317)
			
			bisaifenqu(6031,248,257)
			bisaifenqu(6031,308,317)
			
			bisaifenqu(6176,248,257)
			bisaifenqu(6176,308,317)

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
            			
			
			
			////北京南站调车信号机			
			x=373;y=190
			xiaxingdiaochexinhaoji(x,y);
			xieshuzi(333,165,'D1')
			
			x=373;y=370
			xiaxingdiaochexinhaoji1(x,y);
			xieshuzi(345,348,'D3')
			
			x=919;y=280
			shangxingdiaochexinhaoji(x,y);
			xieshuzi(900,290,'D2')
			
			x=919;y=340
			shangxingdiaochexinhaoji(x,y);
			xieshuzi(900,350,'D4')
			
			
			//////北京南站列车信号机
			//北京南站上行信号机第一
			x=450;y=160
			shangxingxinhaoji(x,y);
			xieshuzi(430,170,'S5')
						
            //context.strokeRect(150, 450, 100, 100);
            //北京南站上行信号机第二
			x=420;y=220
			shangxingxinhaoji(x,y);
			xieshuzi(400,230,'S3')
			xieshuzi(355,175,'5')
			//北京南站上行信号机第三
			x=340;y=280
			shangxingxinhaoji(x,y);
			xieshuzi(320,290,'SI')
			xieshuzi(205,235,'1')
            //北京南站上行信号机第四
			x=340;y=340
			shangxingxinhaoji(x,y);
			xieshuzi(320,350,'SII')
			xieshuzi(205,340,'3')
			//北京南站上行信号机第五
			x=420;y=400
			shangxingxinhaoji(x,y);
			xieshuzi(400,410,'S4')
			xieshuzi(350,400,'7')
			//北京南站上行信号机第六
			x=450;y=460
			shangxingxinhaoji(x,y);
			xieshuzi(430,470,'S6')
			
			//北京南站下行信号机第一
			x=660;y=130
            xiaxingxinhaoji(x,y)
			xieshuzi(630,105,'X5')
			//北京南站下行信号机第二
			x=700;y=190
            xiaxingxinhaoji(x,y)
			xieshuzi(665,165,'X3')
			xieshuzi(715,180,'10')
			//北京南站下行信号机第三
			x=800;y=250
            xiaxingxinhaoji(x,y)
			xieshuzi(770,225,'XI')
			xieshuzi(875,235,'6')
			//北京南站下行信号机第四
			x=800;y=310
            xiaxingxinhaoji(x,y)
			xieshuzi(770,285,'XII')
			xieshuzi(875,340,'8')
			//北京南站下行信号机第五
			x=700;y=370
            xiaxingxinhaoji(x,y)
			xieshuzi(670,345,'X4')
			xieshuzi(715,400,'12')
			//北京南站下行信号机第六
			x=660;y=430
            xiaxingxinhaoji(x,y)
			xieshuzi(630,405,'X6')
			
			//北京南站下行信号机第七
			x=210;y=250
            xiaxingxinhaoji(x,y)
			xieshuzi(180,225,'X')
			xieshuzi(930,235,'4')
			//北京南站下行信号机第八
			x=210;y=340
            xiaxingxinhaoji(x,y)
			xieshuzi(180,350,'XF')
			xieshuzi(1025,340,'2')
			
			//北京南站中间段1
			x=1063;y=250
			shangxingxinhaoji(x,y);
			xieshuzi(1043,225,'SF')
            //北京南站中间段2
			x=1063;y=340
			shangxingxinhaoji(x,y);
			xieshuzi(1048,350,'S')			
			
			
			
			//天津南站下行正向进站信号机
			x=2320;y=250
            xiaxingxinhaoji(x,y)
			xieshuzi(2295,225,'X')
			//天津南站下行反方向进站信号机
			x=2320;y=340
            xiaxingxinhaoji(x,y)
			xieshuzi(2290,350,'XF')
			
			//天津南站上行正向进站信号机
			x=3193;y=340
            shangxingxinhaoji(x,y)
			xieshuzi(3178,350,'S')
			xieshuzi(3050,340,'4')
			xieshuzi(3155,340,'6')
			//天津南站上行反方向进站信号机
			x=3193;y=250
            shangxingxinhaoji(x,y)
			xieshuzi(3173,225,'SF')
			xieshuzi(3050,235,'8')
			xieshuzi(3155,235,'2')			
			
			//天津南站上行信号机第二
			x=2430;y=220
			shangxingxinhaoji(x,y);
			xieshuzi(2410,230,'S3')
			//天津南站上行信号机第三
			x=2390;y=280
			shangxingxinhaoji(x,y);
			xieshuzi(2370,290,'SI')
			xieshuzi(2315,230,'1')
            //天津南站上行信号机第四
			x=2390;y=340
			shangxingxinhaoji(x,y);
			xieshuzi(2370,350,'SII')
			xieshuzi(2315,340,'3')
			//天津南站上行信号机第五
			x=2430;y=400
			shangxingxinhaoji(x,y);
			xieshuzi(2410,410,'S4')
			
			
			//天津南站下行信号机第二
			x=2930;y=190
            xiaxingxinhaoji(x,y)
			xieshuzi(2900,165,'X3')
			//天津南站下行信号机第三
			x=2970;y=250
            xiaxingxinhaoji(x,y)
			xieshuzi(2940,225,'XI')
			xieshuzi(3005,235,'10')
			//天津南站下行信号机第四
			x=2970;y=310
            xiaxingxinhaoji(x,y)
			xieshuzi(2940,285,'XII')
			xieshuzi(3005,340,'12')
			//天津南站下行信号机第五
			x=2930;y=370
            xiaxingxinhaoji(x,y)
			xieshuzi(2900,345,'X4')
			
			//济南西站下行正向进站信号机
			x=4281;y=250
            xiaxingxinhaoji(x,y)
			xieshuzi(4256,225,'X')
			//济南西站下行反方向进站信号机
			x=4281;y=340
            xiaxingxinhaoji(x,y)
			xieshuzi(4251,350,'XF')
			
			//济南西站上行正向进站信号机
			x=4999;y=340
            shangxingxinhaoji(x,y)
			xieshuzi(4984,350,'S')
			//济南西站上行反方向进站信号机
			x=4999;y=250
            shangxingxinhaoji(x,y)
			xieshuzi(4979,225,'SF')
						
			//济南西站上行信号机第二
			x=4391;y=220
			shangxingxinhaoji(x,y);
			xieshuzi(4371,230,'S3')
			//济南西站上行信号机第三
			x=4351;y=280
			shangxingxinhaoji(x,y);
			xieshuzi(4331,290,'SI')
			xieshuzi(4276,230,'1')
            //济南西站上行信号机第四
			x=4351;y=340
			shangxingxinhaoji(x,y);
			xieshuzi(4331,350,'SII')
			xieshuzi(4276,340,'3')
			//济南西站上行信号机第五
			x=4391;y=400
			shangxingxinhaoji(x,y);
			xieshuzi(4371,410,'S4')
			
			
			//济南西站下行信号机第二
			x=4891;y=190
            xiaxingxinhaoji(x,y)
			xieshuzi(4861,165,'X3')
			//济南西站下行信号机第三
			x=4931;y=250
            xiaxingxinhaoji(x,y)
			xieshuzi(4901,225,'XI')
			xieshuzi(4960,235,'2')
			//济南西站下行信号机第四
			x=4931;y=310
            xiaxingxinhaoji(x,y)
			xieshuzi(4901,285,'XII')
			xieshuzi(4960,340,'4')
			//济南西站下行信号机第五
			x=4891;y=370
            xiaxingxinhaoji(x,y)
			xieshuzi(4861,345,'X4')
			
			
			//南京南站下行正向进站信号机
			x=6222;y=250
            xiaxingxinhaoji(x,y)
			xieshuzi(6197,225,'X')
			//南京南站下行反方向进站信号机
			x=6222;y=340
            xiaxingxinhaoji(x,y)
			xieshuzi(6192,350,'XF')
			
			//南京南站上行正向进站信号机
			x=6940;y=340
            shangxingxinhaoji(x,y)
			xieshuzi(6925,350,'S')
			//南京南站上行反方向进站信号机
			x=6940;y=250
            shangxingxinhaoji(x,y)
			xieshuzi(6920,225,'SF')
			
			
			//南京南站上行信号机第二
			x=6332;y=220
			shangxingxinhaoji(x,y);
			xieshuzi(6312,230,'S3')
			//南京南站上行信号机第三
			x=6292;y=280
			shangxingxinhaoji(x,y);
			xieshuzi(6272,290,'SI')
			xieshuzi(6217,230,'1')
            //南京南站上行信号机第四
			x=6292;y=340
			shangxingxinhaoji(x,y);
			xieshuzi(6272,350,'SII')
			xieshuzi(6217,340,'3')
			//南京南站上行信号机第五
			x=6332;y=400
			shangxingxinhaoji(x,y);
			xieshuzi(6312,410,'S4')
			
			
			//南京南站下行信号机第二
			x=6832;y=190
            xiaxingxinhaoji(x,y)
			xieshuzi(6802,165,'X3')
			//南京南站下行信号机第三
			x=6872;y=250
            xiaxingxinhaoji(x,y)
			xieshuzi(6842,225,'XI')
			xieshuzi(6901,235,'2')
			//南京南站下行信号机第四
			x=6872;y=310
            xiaxingxinhaoji(x,y)
			xieshuzi(6842,285,'XII')
			xieshuzi(6901,340,'4')
			//南京南站下行信号机第五
			x=6832;y=370
            xiaxingxinhaoji(x,y)
			xieshuzi(6802,345,'X4')
			
			//苏州北站下行正向进站信号机
			x=8163;y=250
            xiaxingxinhaoji(x,y)
			xieshuzi(8138,225,'X')
			//苏州北站下行反方向进站信号机
			x=8163;y=340
            xiaxingxinhaoji(x,y)
			xieshuzi(8133,350,'XF')
			
			//苏州北站上行正向进站信号机
			x=8881;y=340
            shangxingxinhaoji(x,y)
			xieshuzi(8865,350,'S')
			//苏州北站上行反方向进站信号机
			x=8881;y=250
            shangxingxinhaoji(x,y)
			xieshuzi(8861,225,'SF')
			
			
			//苏州北站上行信号机第二
			x=8273;y=220
			shangxingxinhaoji(x,y);
			xieshuzi(8253,230,'S3')
			//苏州北站上行信号机第三
			x=8233;y=280
			shangxingxinhaoji(x,y);
			xieshuzi(8213,290,'SI')
			xieshuzi(8158,230,'1')
            //苏州北站上行信号机第四
			x=8233;y=340
			shangxingxinhaoji(x,y);
			xieshuzi(8213,350,'SII')
			xieshuzi(8158,340,'3')
			//苏州北站上行信号机第五
			x=8273;y=400
			shangxingxinhaoji(x,y);
			xieshuzi(8253,410,'S4')
			
			
			//苏州北站下行信号机第二
			x=8773;y=190
            xiaxingxinhaoji(x,y)
			xieshuzi(8743,165,'X3')
			//苏州北站下行信号机第三
			x=8813;y=250
            xiaxingxinhaoji(x,y)
			xieshuzi(8783,225,'XI')
			xieshuzi(8843,235,'2')
			//苏州北站下行信号机第四
			x=8813;y=310
            xiaxingxinhaoji(x,y)
			xieshuzi(8783,285,'XII')
			xieshuzi(8843,340,'4')
			//苏州北站下行信号机第五
			x=8773;y=370
            xiaxingxinhaoji(x,y)
			xieshuzi(8743,345,'X4')
			
			
			//上海虹桥站信号机
			//上海虹桥上行信号机第一
			x=10353;y=160
			shangxingxinhaoji(x,y);
			xieshuzi(10333,170,'S5')
            //上海虹桥上行信号机第二
			x=10313;y=220
			shangxingxinhaoji(x,y);
			xieshuzi(10293,230,'S3')
			xieshuzi(10243,180,'9')
	
			//上海虹桥上行信号机第三
			x=10203;y=280
			shangxingxinhaoji(x,y);
			xieshuzi(10183,290,'SI')
			xieshuzi(10088,230,'5')
			xieshuzi(10033,235,'3')
            //上海虹桥上行信号机第四
			x=10203;y=340
			shangxingxinhaoji(x,y);
			xieshuzi(10183,350,'SII')
			xieshuzi(10088,340,'7')
			xieshuzi(9950,340,'1')
			//上海虹桥上行信号机第五
			x=10313;y=400
			shangxingxinhaoji(x,y);
			xieshuzi(10298,410,'S4')
			xieshuzi(10243,400,'11')
			//上海虹桥上行信号机第六
			x=10353;y=460
			shangxingxinhaoji(x,y);
			xieshuzi(10333,470,'S6')
			
			//上海虹桥下行信号机第一
			x=10563;y=130
            xiaxingxinhaoji(x,y)
			xieshuzi(10533,105,'X5')
			//上海虹桥下行信号机第二
			x=10603;y=190
            xiaxingxinhaoji(x,y)
			xieshuzi(10563,165,'X3')
			xieshuzi(10618,180,'6')
			
			//上海虹桥站上行正向进站信号机
			x=10812;y=340
            shangxingxinhaoji(x,y)
			xieshuzi(10796,350,'S')
			//上海虹桥站上行反方向进站信号机
			x=10812;y=250
            shangxingxinhaoji(x,y)
			xieshuzi(10792,225,'SF')

			//上海虹桥下行信号机第三
			x=10743;y=250
            xiaxingxinhaoji(x,y)
			xieshuzi(10713,225,'XI')
			xieshuzi(10775,235,'2')
			//上海虹桥下行信号机第四
			x=10743;y=310
            xiaxingxinhaoji(x,y)
			xieshuzi(10713,285,'XII')
			xieshuzi(10775,340,'4')
			//上海虹桥下行信号机第五
			x=10603;y=370
            xiaxingxinhaoji(x,y)
			xieshuzi(10568,345,'X4')
			xieshuzi(10618,400,'8')
			//上海虹桥下行信号机第六
			x=10563;y=430
            xiaxingxinhaoji(x,y)
			xieshuzi(10533,405,'X6')
			//上海虹桥下行正方向信号机
			x=9959;y=250
            xiaxingxinhaoji(x,y)
			xieshuzi(9934,225,'X')
			//上海虹桥下行反方向信号机
			x=9959;y=340
            xiaxingxinhaoji(x,y)
			xieshuzi(9929,350,'XF')
			
			
			///// 在此处画应答器
			
		    //北京南站X1JG处的有源应答器	
			x=157;y=260
		    sgdyy(x,y)
			
			//北京南站X1JG处的无源应答器
			x=139;y=260
		    sgdwy(x,y)
			
			//北京南站S1LQ处的有源应答器	
			x=157;y=305
		    xgdyy(x,y)
			
			//北京南站S1LQ处的无源应答器
			x=139;y=305
		    xgdwy(x,y)
			
			//北京南站X1LQ处的有源应答器	
			x=1056;y=260
		    sgdyy(x,y)
			
			//北京南站X1LQ处的无源应答器
			x=1074;y=260
		    sgdwy(x,y)
			
			//北京南站S3JG处的有源应答器	
			x=1056;y=305
		    xgdyy(x,y)
			
			//北京南站S3JG处的无源应答器
			x=1074;y=305
		    xgdwy(x,y)
			
			//北京南站X2LQ处的无源应答器
			x=1398;y=260
		    sgdwy(x,y)
			
			//北京南站S2JG处的无源应答器
			x=1242;y=305
		    xgdwy(x,y)
			
			//北京南至天津南区间的无源应答器
			x=1758;y=260
		    sgdwy(x,y)
			
			//北京南至天津南区间的无源应答器
			x=1602;y=305
		    xgdwy(x,y)
						
			
			///////////////天津南站X2JG的无源应答器
			x=2118;y=260
		    sgdwy(x,y)
			
			//天津南站S2LQ的无源应答器
			x=1962;y=305
		    xgdwy(x,y)
			
			//天津南站X3JG处的有源应答器	
			x=2268;y=260
		    sgdyy(x,y)
			
			//天津南站X3JG处的无源应答器
			x=2250;y=260
		    sgdwy(x,y)
			
			//天津南站S1LQ处的有源应答器	
			x=2268;y=305
		    xgdyy(x,y)
			
			//天津南站S1LQ处的无源应答器
			x=2250;y=305
		    xgdwy(x,y)
			
			//天津南站X1LQ处的有源应答器	
			x=3186;y=260
		    sgdyy(x,y)
			
			//天津南站X1LQ处的无源应答器
			x=3204;y=260
		    sgdwy(x,y)
			
			//天津南站S3JG处的有源应答器	
			x=3186;y=305
		    xgdyy(x,y)
			
			//天津南站S3JG处的无源应答器
			x=3204;y=305
		    xgdwy(x,y)
			
			//天津南站X2LQ处的无源应答器
			x=3528;y=260
		    sgdwy(x,y)
			
			//天津南站S2JG处的无源应答器
			x=3372;y=305
		    xgdwy(x,y)
			
			
			/////////////////////济南西X2JG的无源应答器
			x=4068;y=260
		    sgdwy(x,y)
			
			//济南西S2LQ的无源应答器
			x=3912;y=305
		    xgdwy(x,y)
			
			//济南西站X3JG处的有源应答器	
			x=4229;y=260
		    sgdyy(x,y)
			
			//济南西站X3JG处的无源应答器
			x=4211;y=260
		    sgdwy(x,y)
			
			//济南西站S1LQ处的有源应答器	
			x=4229;y=305
		    xgdyy(x,y)
			
			//济南西站S1LQ处的无源应答器
			x=4211;y=305
		    xgdwy(x,y)
			
			//济南西站X1LQ处的有源应答器	
			x=4992;y=260
		    sgdyy(x,y)
			
			//济南西站X1LQ处的无源应答器
			x=5010;y=260
		    sgdwy(x,y)
			
			//济南西站S3JG处的有源应答器	
			x=4992;y=305
		    xgdyy(x,y)
			
			//济南西站S3JG处的无源应答器
			x=5010;y=305
		    xgdwy(x,y)
			
			//济南西站X2LQ处的无源应答器
			x=5299;y=260
		    sgdwy(x,y) 
			
			//济南西站S2JG处的无源应答器
			x=5143;y=305
		    xgdwy(x,y)
		
			//济南西至南京南区间的无源应答器
			x=5659;y=260
		    sgdwy(x,y)
			
			//济南西至南京南区间的无源应答器
			x=5503;y=305
		    xgdwy(x,y)
			
						
			///////////////南京南站X2JG的无源应答器
			x=6019;y=260
		    sgdwy(x,y)
			
			//南京南站S2LQ的无源应答器
			x=5863;y=305
		    xgdwy(x,y)
			
			//南京南站X3JG处的有源应答器	
			x=6170;y=260
		    sgdyy(x,y)
			
			//南京南站X3JG处的无源应答器
			x=6152;y=260
		    sgdwy(x,y)
			
			//南京南站X3JG处的有源应答器	
			x=6170;y=305
		    xgdyy(x,y)
			
			//南京南站X3JG处的无源应答器
			x=6152;y=305
		    xgdwy(x,y)
			
			
			//南京南站X1LQ处的有源应答器	
			x=6933;y=260
		    sgdyy(x,y)
			
			//南京南站X1LQ处的无源应答器
			x=6951;y=260
		    sgdwy(x,y)
			
			//南京南站S3JG处的有源应答器	
			x=6933;y=305
		    xgdyy(x,y)
			
			//南京南站S3JG处的无源应答器
			x=6951;y=305
		    xgdwy(x,y)
			
			//南京南站X2LQ处的无源应答器
			x=7240;y=260
		    sgdwy(x,y)
			
			//南京南站S2JG处的无源应答器
			x=7084;y=305
		    xgdwy(x,y)
			
			//南京南至苏州北区间的无源应答器
			x=7600;y=260
		    sgdwy(x,y)
			
			//南京南至苏州北区间的无源应答器
			x=7444;y=305
		    xgdwy(x,y)
			
			
			
			///////////////苏州北站X2JG的无源应答器
			x=7960;y=260
		    sgdwy(x,y)
			
			//苏州北站S2LQ的无源应答器
			x=7804;y=305
		    xgdwy(x,y)
			
			//苏州北站X3JG处的有源应答器	
			x=8111;y=260
		    sgdyy(x,y)
			
			//苏州北站X3JG处的无源应答器
			x=8093;y=260
		    sgdwy(x,y)
			
			//苏州北站X3JG处的有源应答器	
			x=8111;y=305
		    xgdyy(x,y)
			
			//苏杭北站X3JG处的无源应答器
			x=8093;y=305
		    xgdwy(x,y)
			
			
			////////////////////////////////////////////////////
			//苏州北站X1LQ处的有源应答器	
			x=8874;y=260
		    sgdyy(x,y)
			
			//苏州北站X1LQ处的无源应答器
			x=8892;y=260
		    sgdwy(x,y)
			
			//苏州北站S3JG处的有源应答器	
			x=8874;y=305
		    xgdyy(x,y)
			
			//苏州北站S3JG处的无源应答器
			x=8892;y=305
		    xgdwy(x,y)
			
			//苏州北站X2LQ处的无源应答器
			x=9181;y=260
		    sgdwy(x,y)
			
			//苏州北站S2JG处的无源应答器
			x=9025;y=305
		    xgdwy(x,y)
			
			
			/////////////////////上海虹桥站X2JG的无源应答器
			x=9721;y=260
		    sgdwy(x,y)
			
			//上海虹桥站S2LQ的无源应答器
			x=9565;y=305
		    xgdwy(x,y)
			
			//上海虹桥站X3JG处的有源应答器	
			x=9907;y=260
		    sgdyy(x,y)
			
			//上海虹桥站X3JG处的无源应答器
			x=9889;y=260
		    sgdwy(x,y)
			
			//上海虹桥站X3JG处的有源应答器	
			x=9907;y=305
		    xgdyy(x,y)
			
			//上海虹桥站X3JG处的无源应答器
			x=9889;y=305
		    xgdwy(x,y)
			
			//上海虹桥站X1LQ处的有源应答器	
			x=10804;y=260
		    sgdyy(x,y)
			
			//上海虹桥站X1LQ处的无源应答器
			x=10822;y=260
		    sgdwy(x,y)
			
			//上海虹桥站S1JG处的有源应答器	
			x=10804;y=305
		    xgdyy(x,y)
			
			//上海虹桥站S1JG处的无源应答器
			x=10822;y=305
		    xgdwy(x,y) 
			
			function sgdyy(x,y)  // 靠上有源应答器
		{   
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
			
			//股道编号
			//北京南站股道
			xieshuzi(530,150,'5G')
			xieshuzi(530,210,'3G')
			xieshuzi(530,270,'IG')
			xieshuzi(530,330,'IIG')
			xieshuzi(530,390,'4G')
			xieshuzi(530,450,'6G')
			
			//天津南站股道
			xieshuzi(2655,210,'3G')
			xieshuzi(2655,270,'IG')
			xieshuzi(2655,330,'IIG')
			xieshuzi(2655,390,'4G')
			
			//济南西站股道
			xieshuzi(4616,210,'3G')
			xieshuzi(4616,270,'IG')
			xieshuzi(4616,330,'IIG')
			xieshuzi(4616,390,'4G')
			
			//南京南站股道
			xieshuzi(6557,210,'3G')
			xieshuzi(6557,270,'IG')
			xieshuzi(6557,330,'IIG')
			xieshuzi(6557,390,'4G')
			
			//苏州北站股道
			xieshuzi(8498,210,'3G')
			xieshuzi(8498,270,'IG')
			xieshuzi(8498,330,'IIG')
			xieshuzi(8498,390,'4G')
			
			//上海虹桥站股道
			xieshuzi(10428,150,'5G')
			xieshuzi(10428,210,'3G')
			xieshuzi(10428,270,'IG')
			xieshuzi(10428,330,'IIG')
			xieshuzi(10428,390,'4G')
			xieshuzi(10428,450,'6G')
			
			//信号机编号
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
			
		function xiaxingdiaochexinhaojibaideng(x,y)
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
			context.strokeStyle = 'white';
            context.arc(x-38,y-13,3,0,2*Math.PI);
            context.fillStyle="white";
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
		
		function shangxingdiaochexinhaojibaideng(x,y)
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
			context.strokeStyle = 'white';
            context.arc(x-21,y-13,4,0,2*Math.PI);
            context.fillStyle="white";
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
			//  6/8号双动道岔绘制
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=3050;
			y1=260;
			x2=3155;
			y2=303;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			// 绝缘节绘制
			context.strokeStyle = '#FFF';
			context.beginPath();
			context.lineWidth = 2;
            context.moveTo( 3126,284);
			context.lineTo( 3119,294 );
			context.stroke();			
			
			//  2/4号双动道岔绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=3050;
			y1=303;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			
			
			// 绝缘节绘制
			context.strokeStyle = '#FFF';
			context.beginPath();
			context.lineWidth = 2;
            context.moveTo( 3079,286);
			context.lineTo( 3085,296);
			context.stroke();	
		}
		
		function changceguidaohuizhi()  // 北京南站和上海虹桥站双动道岔绘制
		{
			// 北京南站2/4号双动道岔绘制
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=930;
			y1=260;
			x2=1025;
			y2=304;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			// 绝缘节绘制
			context.strokeStyle = '#FFF';
			context.beginPath();
			context.lineWidth = 2;
            context.moveTo( 981,277);
			context.lineTo( 975, 287 );
			context.stroke();
			
			// 上海虹桥站1/3号双动道岔绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=9938;
			y1=303;
			x2=10033;
			y2=261;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			
			// 绝缘节绘制
			context.strokeStyle = '#FFF';
			context.beginPath();
			context.lineWidth = 2;
            context.moveTo( 9982,277);
			context.lineTo( 9988, 287 );
			context.stroke();
			
		}
		
		function beijingnanzhancexiangguidao()  // 北京南站侧向轨道绘制
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			// 1号道岔处弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=195;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			// 5号道岔处弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
		    x=315;
			y=187;
			k=50;
			context.moveTo( x+40, y-3 ); // x+7,y-1
			context.lineTo( x+40+k, y-3-k);
			context.stroke();
			
			// 10号道岔处弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';			
			x=652;
			y=128;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			// 6号道岔处弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=810;
			y=189;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			// 3号道岔处弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';		
			x=195;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			// 7号道岔处弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';			
			x=315;
			y=378;
			k=50;
			context.moveTo( x+40, y+3 ); // x+7,y-1
			context.lineTo( x+40+k, y+3+k);
			context.stroke();
			
            // 12号道岔处弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=654;
			y=434;
			k=50;
			context.moveTo( x, y-3 ); // x+7,y-1
			context.lineTo( x+k, y-3-k);
			context.stroke();
			
			// 8号道岔处弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=810;
			y=371;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
		}
		function tianjinnanzhancexiangguidao()  // 天津南站侧向轨道绘制
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			// 1号道岔弯股绘制
			 context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=2310;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke(); 
			
			
			// 3号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';			
			x=2310;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			// 12号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';			
			x=2938;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			
			// 10号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke(); 			
						
		}
		
		
		function jinanxizhancexiangguidao()   // 济南西站侧向轨道绘制
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			// 1号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			// 3号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';			
			x=4271;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			// 4号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';			
			x=4899;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			
			// 2号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=4899;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			
			
		}
		
		function nanjingnanzhancexiangguidao() // 南京南站侧向轨道绘制
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			// 1号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			// 3号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';			
			x=6212;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			// 4号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';		
			x=6840;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			
			// 2号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=6840;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
						
		}
		
		function suzhoubeizhancexiangguidao()  // 苏州北站侧向轨道绘制
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			// 1号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=8153;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			// 3号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';			
			x=8153;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			// 4号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';		
			x=8781;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			
			// 2号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=8781;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			
			
		}
		
		function shanghaihongqiaozhancexiangguidao() // 上海虹桥站侧向轨道绘制
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			// 5号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=10083;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			// 9号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
		    x=10213;
			y=187;
			k=50;
			context.moveTo( x+40, y-3 ); // x+7,y-1
			context.lineTo( x+40+k, y-3-k);
			context.stroke();
			
			// 6号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=10553;
			y=128;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			// 2号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=10713;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			// 7号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';			
			x=10083;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			// 11号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';			
			x=10213;
			y=377;
			k=50;
			context.moveTo( x+40, y+3 ); // x+7,y-1
			context.lineTo( x+40+k, y+3+k);
			context.stroke();           

            // 8号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=10553;
			y=433;
			k=50;
			context.moveTo( x, y-3 ); // x+7,y-1
			context.lineTo( x+k, y-3-k);
			context.stroke();
			
			// 4号道岔弯股绘制
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=10713;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	      }
		
		