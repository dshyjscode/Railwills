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
//排列进路，获取进路始端、终端位置
	var JinLuPos=new Array([],[]);//存始端坐标、终端坐标
	var CancelPos = new Array();//存放取消进路的始端按钮
	var CancelX=1;//下行取消进路标志,0:取消进路；1：保持进路
	var CancelS=1;//上行取消进路标志
	function cancel(obj){
		if(obj == document.getElementById('cancelx')){
			CancelX=0;
		
			}
		else if (obj == document.getElementById('cancels')){
			CancelS=0;
			
			}
	}
	var row=0;
	var col=0;
	var count =0;
	function getposition(obj) {

		if(CancelX==0)
		{
			CancelPos[count++]=obj;
			CancelX=1;
			
			alert("取消下行进路");
		}
		else if(CancelS==0)
		{
			CancelPos[count++]=obj;
			CancelS=1;
			alert("取消上行进路");
		}
		else{
			for(var i=0;i<JinLuPos[0].length;i++){
				if (JinLuPos[0][i]==obj)
				{
					alert("不能排列进路！");//抵触进路不能排列
				    return false;}
			}
			for(var j=0;j<JinLuPos[0].length;j++){
				if (JinLuPos[1][j]==obj)
				{
					alert("不能排列进路！");//抵触进路不能排列
					JinLuPos[--row][col]=null;//不能排列进路，清空此列数据，下一条数据依然在此列存放，否则导致此列始端按钮有值，而终端按钮为空，包含这个始端按钮的进路不能排列
					//row=0;                //排列进路列表转到下一列记录数据，否则容易崩溃
				    //col++;
				    return false;}
			}
			if(row<2){
				JinLuPos[row][col]=obj;
				alert("点击一个按钮");
				row++;
			}
			else{
				//JinLu();
				row=0;
				col++;
				JinLuPos[row][col]=obj;
				row++;
				//alert("换了一列");
				alert(JinLuPos[0].length);
			}
			//alert(JinLu.size[0]);
		}
	     
        return true;
    }
     
	//定期刷新，检测是否取消进路标志为0，若为零，获取进路始端按钮，存入CancelPos[]中
	//在取消进路列表中搜索始端按钮，若找到，则将以这个按钮为始端的所有进路都取消
	function CancelJinLu(){
		for(var i=0;i<CancelPos.length;i++)
		{
			if(CancelPos[i]==document.getElementById('Xa')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('Xa')){
							if(JinLuPos[1][p] == document.getElementById('SIa')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 534,353); 
								context.lineTo( 1206, 353);
								context.stroke();
								//CancelX=1;//还原
								//X信号机红灯
								x=580;y=350
								xiaxingxinhaoji(x,y)
						}
							else if(JinLuPos[1][p] == document.getElementById('S3a')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								
								//恢复
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 534,353);
								context.lineTo( 600, 353); 
								context.moveTo( 600, 353);
								context.lineTo( 655, 298);
								context.moveTo( 652, 293);
								context.lineTo( 1163, 293);
								context.stroke();
								//CancelX=1;//还原
								//X信号机红灯
								x=580;y=350
								xiaxingxinhaojiUUdengD(x,y)
								xiaxingxinhaoji(x,y)
						}
							
						
						}
				}
						
			}
			else if(CancelPos[i]==document.getElementById('Sa'))
			{
				for(var q=0;q<JinLuPos[0].length;q++){
						if(JinLuPos[0][q]==document.getElementById('Sa')){
							if(JinLuPos[1][q] == document.getElementById('XIIa')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 1300,413); 
								context.lineTo( 656, 413);
								context.stroke();
								//CancelS=1;//还原
								//S信号机红灯
								x=1315;y=440
								shangxingxinhaoji(x,y)
							}
							else if(JinLuPos[1][q] == document.getElementById('X4a')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';
								context.moveTo( 1300,413); 
								context.lineTo( 1265, 413);		 
								context.moveTo( 1265,413); 
								context.lineTo( 1205, 473); 
								context.moveTo(1205, 473);
								context.lineTo( 706, 473);
								context.stroke();
								//CancelS=1;//还原
								//S信号机红灯
								x=1315;y=440
								shangxingxinhaojiUUdengD(x,y)
								shangxingxinhaoji(x,y)
							}
						}
				}
				
			}
			else if(CancelPos[i]==document.getElementById('SIIa')){
				       var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = '#848284';		
						context.moveTo( 656, 413); 		 
						context.lineTo( 20, 413); 
						context.stroke();
						//CancelS=1;//还原
						//S信号机红灯
						x=670;y=440
						shangxingxinhaoji(x,y)
				}
			else if(CancelPos[i]==document.getElementById('S4a')){
				       var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = '#848284';		
						context.moveTo( 706,473); 
						context.lineTo( 660, 473);
						context.moveTo( 660,473);
						context.lineTo( 600, 413);
						context.moveTo( 600,413); 
						context.lineTo( 20, 413);
						context.stroke();
						CancelS=1;//还原
						//S信号机红灯
						x=720;y=500
						shangxingxinhaoji(x,y)
				}
			
			else if(CancelPos[i]==document.getElementById('XIa')){
				        var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = '#848284';		
						context.moveTo( 1206,353); 
						context.lineTo( 1770,353);
						context.stroke();
						//CancelX=1;//还原
						//X信号机红灯
						x=1250;y=350
						xiaxingxinhaoji(x,y)
				}
			else if(CancelPos[i]==document.getElementById('X3a')){
				        var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = '#848284';		
						context.moveTo( 1163,293); 
						context.lineTo( 1205,293);
						context.moveTo( 1205,293);
						context.lineTo( 1265, 353);
						context.moveTo( 1265, 353); 
						context.lineTo( 1770, 353);
						context.stroke();
						//CancelX=1;//还原
						//X信号机红灯
						x=1210;y=290
						xiaxingxinhaoji(x,y)
		}
		 
		
		}
		//清除进路后，要在排列进路列表中清除此条进路的信息，对比取消进路表和排列进路表第一行，若有相同则删除对应的进路
		for(var m=0;m<JinLuPos[0].length;m++ ){
			for(var n=0;n<CancelPos.length;n++ ){
				if(JinLuPos[0][m]!=null&&JinLuPos[0][m]==CancelPos[n]){
					CancelPos[n]=null;
					JinLuPos[0][m]=null;
					JinLuPos[1][m]=null;
					alert("在排列进路列表中清除此条进路");
					}
				}
		
		}
		setTimeout("CancelJinLu();",1000);      //每隔1秒刷新一次
	}
	function JinLu(){
		
		if(JinLuPos[0].length>0){
		    for(var i=0;i<JinLuPos[0].length;i++){
				if(JinLuPos[0][i]==document.getElementById('Xa')){
					if(JinLuPos[1][i]==document.getElementById('SIa')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 600, 353); 
						context.lineTo( 615, 338);
						context.stroke();
					    //画进路
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 534,353); 
						context.lineTo( 1206, 353);
						context.stroke();
						
						//X信号机单黄灯
						x=580;y=350
						xiaxingxinhaojihuangdeng(x,y)
						//道岔按钮指示颜色
						flag=1
						//colorchange("1")
						}
					else if(JinLuPos[1][i]==document.getElementById('S3a')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						
						//画进路
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 534,353);
						context.lineTo( 600, 353); 
						context.moveTo( 600, 353);
						context.lineTo( 655, 298);
						context.moveTo( 652, 293);
						context.lineTo( 1163, 293);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo(606, 353); 
						context.lineTo( 621, 353);
						context.stroke();
						//X信号机双黄灯
						x=580;y=350
						xiaxingxinhaojiUUdeng(x,y)
						//道岔按钮指示颜色
						flag=2
						//colorchange("1")
						
						}
					}
				else if(JinLuPos[0][i]==document.getElementById('Sa')){
					if(JinLuPos[1][i]==document.getElementById('XIIa')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1265, 413); 		 
						context.lineTo( 1250, 428); 
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 1300,413); 
						context.lineTo( 656, 413);
						context.stroke();
						//S信号机黄灯
						x=1315;y=440
            			shangxingxinhaojihuangdeng(x,y)
						//道岔按钮指示颜色
						flag=1
						//colorchange("4")
						}
					else if(JinLuPos[1][i]==document.getElementById('X4a')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';
						context.moveTo( 1300,413); 
						context.lineTo( 1265, 413);		 
						context.moveTo( 1265,413); 
						context.lineTo( 1205, 473); 
						context.moveTo(1205, 473);
						context.lineTo( 706, 473);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo(1259, 413); 
						context.lineTo( 1244, 413);
						context.stroke();
						//S信号机双黄灯
						x=1315;y=440
						shangxingxinhaojiUUdeng(x,y)
						//道岔按钮指示颜色
						flag=2
						//colorchange("4")
						
						}
					
					}
				else if(JinLuPos[0][i]==document.getElementById('SIIa')){
					if(JinLuPos[1][i]==document.getElementById('XFa')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 600, 413); 		 
						context.lineTo( 615, 428); 
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 656, 413); 		 
						context.lineTo( 20, 413); 
						context.stroke();
						
						//S信号机绿灯
						x=670;y=440
						shangxingxinhaojilvdeng(x,y)
						//道岔按钮指示颜色
						flag=1
						//colorchange("3")
						}
					}
				else if(JinLuPos[0][i]==document.getElementById('S4a')){
					if(JinLuPos[1][i]==document.getElementById('XFa')){
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 706,473); 
						context.lineTo( 660, 473);
						context.moveTo( 660,473);
						context.lineTo( 600, 413);
						context.moveTo( 600,413); 
						context.lineTo( 20, 413);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 606, 413); 
						context.lineTo( 621, 413);
						context.stroke();
						//S信号机绿灯
						x=720;y=500
						shangxingxinhaojilvdeng(x,y)
						//道岔按钮指示颜色
						flag=2
						//colorchange("3")
					}
				
				
				}
				else if(JinLuPos[0][i]==document.getElementById('XIa')){
					if(JinLuPos[1][i]==document.getElementById('SFa')){
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo(1265, 353); 		 
						context.lineTo(1250, 338); 
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 1206,353); 
						context.lineTo( 1770,353);
						context.stroke();
						//X信号机绿灯
						x=1250;y=350
						xiaxingxinhaojilvdeng(x,y)
						//道岔按钮指示颜色
						flag=1
						//colorchange("2")
					    }  
					}
				else if(JinLuPos[0][i]==document.getElementById('X3a')){
					if(JinLuPos[1][i]==document.getElementById('SFa')){
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 1163,293); 
						context.lineTo( 1205,293);
						context.moveTo( 1205,293);
						context.lineTo( 1265, 353);
						context.moveTo( 1265, 353); 
						context.lineTo( 1770, 353);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1259, 353); 
						context.lineTo( 1244, 353);
						context.stroke();
						
						//X信号机绿灯
						x=1210;y=290
						xiaxingxinhaojilvdeng(x,y)
						//道岔按钮指示颜色
						flag=2
						//colorchange("2")
						}
					}
			}
		}
		//重画闭塞分区标志
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
			//根据C3沙盘新增加
			bisaifenqu(1300,348,357)
			bisaifenqu(1300,408,417)
			
			bisaifenqu(1410,348,357)
			bisaifenqu(1410,408,417)
			
			bisaifenqu(1590,348,357)
			bisaifenqu(1590,408,417)
			
			bisaifenqu(1770,348,357)
			bisaifenqu(1770,408,417)	
			
			
		setTimeout("JinLu();",1000);      //每隔1秒刷新一
	}