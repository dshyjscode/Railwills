// JavaScript Document
 window.onload = function () {
			var x,y,x1,x2,y1,y2,w,h,text;
			
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            context.fillStyle = "#000";
            context.fillRect(0, 0, 2000, 700);
			//主轨道
            context.fillStyle = "#848284";
					
            //北京南站主轨道
            context.fillRect(404, 230, 250, 5);
			context.fillRect(255, 290, 558, 5);
			context.fillRect(20, 350, 1930, 5);
			context.fillRect(20, 410, 1930, 5);
			context.fillRect(260, 470, 553, 5);
			context.fillRect(412, 530, 247, 5);
					
			//画下行小车
			//x=490;y=335
            //huaxiaxingxiaoche(x,y)

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
			bisaifenqu(163,348,357)
			bisaifenqu(163,408,417)
			bisaifenqu(905,348,357)
			bisaifenqu(905,408,417)
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

            bisaifenqu(326,288,297)
			bisaifenqu(326,348,357)
			bisaifenqu(326,408,417)
			bisaifenqu(326,468,477)
			
			bisaifenqu(406,288,297)
			bisaifenqu(406,468,477)
			
		    bisaifenqu(436,228,237)
			bisaifenqu(436,528,537)
			
		    bisaifenqu(613,228,237)
			bisaifenqu(613,528,537)
			
			bisaifenqu(653,288,297)
			bisaifenqu(653,468,477)
			
			bisaifenqu(753,348,357)
			bisaifenqu(753,408,417)
			
			bisaifenqu(753,288,297)
			bisaifenqu(753,468,477)

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
			xieshuzi(360,280,'5')
			//北京南站上行信号机第三
			x=340;y=380
			shangxingxinhaoji(x,y);
			xieshuzi(320,390,'SI')
			xieshuzi(205,325,'1')
            //北京南站上行信号机第四
			x=340;y=440
			shangxingxinhaoji(x,y);
			xieshuzi(320,445,'SII')
			xieshuzi(205,440,'3')
			//北京南站上行信号机第五
			x=420;y=500
			shangxingxinhaoji(x,y);
			xieshuzi(410,510,'S4')
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
			xieshuzi(655,260,'X3')
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
			xieshuzi(925,335,'4')
			//北京南站下行信号机第八
			x=210;y=440
            xiaxingxinhaoji(x,y)
			xieshuzi(180,450,'XF')
			xieshuzi(1035,400,'2')
			
			//北京南站中间段1
			x=1062;y=350
			shangxingxinhaoji(x,y);
			xieshuzi(1050,325,'SF')
            //北京南站中间段2
			x=1062;y=440
			shangxingxinhaoji(x,y);
			xieshuzi(1050,450,'S')
			
			 ////北京南站调车信号机			
			x=373;y=293
			xiaxingdiaochexinhaoji(x,y);
			xieshuzi(333,263,'D1')
			
			x=373;y=473
			xiaxingdiaochexinhaoji1(x,y);
			xieshuzi(355,460,'D3')
			
			x=919;y=380
			shangxingdiaochexinhaoji(x,y);
			xieshuzi(900,385,'D2')
			
			x=919;y=443
			shangxingdiaochexinhaoji(x,y);
			xieshuzi(900,453,'D4')
	
			
			//道岔编号
			xieshuzi(530,250,'5G')
			xieshuzi(530,310,'3G')
			xieshuzi(530,370,'IG')
			xieshuzi(530,430,'IIG')
			xieshuzi(530,490,'4G')
			xieshuzi(530,550,'6G')
				
			//连接状态
			lianjiezhuangtaibiaojilv(270,205)
			lianjiezhuangtaibiaojired(270,235)
            //初始化 非常站控红灯，允许转为自律模式和自律模式为空
			lianjiezhuangtaibiaojired(620,145)
			lianjiezhuangtaibiaojikong(750,145)
			//lianjiezhuangtaibiaojiyellow(750,145)
			lianjiezhuangtaibiaojikong(880,145)
			
			text="北京南站联锁"
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
			setInterval(getCookie_recurrent,1000)
	
        }
		//模式查询
        function Pattern_query(){
        setTimeout("Pattern_query();",1000);
        
        if(getCookie("模式转换")=="1"){
			lianjiezhuangtaibiaojikong(620,145)
            lianjiezhuangtaibiaojikong(750,145)
		    lianjiezhuangtaibiaojilv(880,145)    
            
            
        }
        else if(getCookie("模式转换")=="0"){
          lianjiezhuangtaibiaojired(620,145)
          lianjiezhuangtaibiaojiyellow(750,145)
          lianjiezhuangtaibiaojikong(880,145)    
        }
    }
		//申请自律模式
	   function SelfdisciplineMode(){
		    setCookie("模式转换","1")
			lianjiezhuangtaibiaojikong(620,145)
            lianjiezhuangtaibiaojikong(750,145)
		    lianjiezhuangtaibiaojilv(880,145) 
			
		}
	   function QuitSelfdisciplineMode(){
		    setCookie("模式转换","0")
			lianjiezhuangtaibiaojired(620,145)
            lianjiezhuangtaibiaojiyellow(750,145)
            lianjiezhuangtaibiaojikong(880,145)  
		}
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

	     //下行调车信号机，禁止信号
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
			context.lineWidth = 2;
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
		//上行调车信号机,禁止信号
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
			
			context.beginPath();
			context.lineWidth = 3;
			context.strokeStyle = '#FFF';
			context.moveTo( x-30+16, y-7 ); // x+7,y-1
			context.lineTo( x-30+16, y-19);
			
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
			context.lineTo( x, y);
			
			context.stroke();
		}
		function huazhengfangxings(x,y,c)
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.lineWidth = 10;
			context.strokeStyle = c;
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x+4, y);
            context.lineTo( x+4, y+4);
			context.lineTo( x, y+4);
			context.lineTo( x, y);
			
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
		//下行红灯
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
            
		    context.fillRect(490, 335, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+60, y ); 
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(326, 350, 427, 5);
			
		}
		function changceguidaohuizhi()
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=925;
			y1=353;
			x2=1030;
			y2=413;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.strokeStyle = '#FFF';
			context.beginPath();
			context.lineWidth = 2;
            context.moveTo( 980,378);
			context.lineTo( 975, 387 );
			context.stroke();
			
			
		}
		function beijingnanzhancexiangguidao()
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=205;
			y=353;
			k=55;
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x+k, y-k);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
		    x=355;
			y=293;
			k=55;
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x+k, y-k);
			//context.moveTo( 157, 185 );
			//context.lineTo( 205, 138 );
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=710;
			y=293;
			k=55;
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x-k, y-k);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=865;
			y=353;
			k=55;
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x-k, y-k);
			context.stroke();
			
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=205;
			y=413;
			k=55;
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x+k, y+k);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=355;
			y=473;
			k=55;
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x+k, y+k);
			context.stroke();

			x=865;
			y=413;
			k=55;
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x-k, y+k);
			context.stroke();


			x=710;
			y=473;
			k=55;
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x-k, y+k);
			context.stroke();
		}