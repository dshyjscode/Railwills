
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
	//var p =new Array();
	var CancelX=1;//下行取消进路标志,0:取消进路；1：保持进路
	var CancelS=1;//上行取消进路标志,0:取消进路；1：保持进路
	//点击取消按钮，取消进路标志变为0
	function cancel(obj){
		if(obj == document.getElementById('cancelx')){
			CancelX=0;
		
			}
		else if (obj == document.getElementById('cancels')){
			CancelS=0;
			
			}
	}
	
	//获取按钮位置
	function getposition0(obj) {
		var count =0;
 
		if(count<=2){
			p[count++] = obj;}
		else{
			count=0;
			p[count++] = obj;
			}
			//alert(p==null);
        return p;
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
				//alert("点击一个按钮");
				row++;
			}
			else{
				row=0;
				col++;
				JinLuPos[row][col]=obj;
				row++;
				//alert("换了一列");
				//alert(JinLuPos[0].length);
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
								context.moveTo( 740,353); 
								context.lineTo( 1554, 353);
								context.stroke();
								CancelX=1;//还原
								//X信号机红灯
								x=786;y=350
								xiaxingxinhaoji(x,y)}
							else if(JinLuPos[1][p] == document.getElementById('S3a')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								
								//恢复
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 740,353); 
								context.lineTo( 1000, 353);
								context.moveTo( 1000,353); 
								context.lineTo( 1060, 293);
								context.moveTo( 1060, 293);
								context.lineTo( 1453, 293);
								context.stroke();
		
								CancelX=1;//还原
								//X信号机红灯
								x=786;y=350
								xiaxingxinhaojiUUdengD(x,y)
								xiaxingxinhaoji(x,y)
								}
							else if(JinLuPos[1][p] == document.getElementById('S5a')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 740,353); 
								context.lineTo( 1000, 353);
								context.moveTo( 1000,353); 
								context.lineTo( 1060, 293);
								context.moveTo( 1060, 293);
								context.lineTo( 1155, 293); 
								context.moveTo( 1155, 293);
								context.lineTo( 1215, 233); 
								context.moveTo( 1215, 233);
								context.lineTo( 1413, 233); 
								context.stroke();
								CancelX=1;//还原
								//X信号机红灯
								x=786;y=350
								xiaxingxinhaojiUUdengD(x,y)
								xiaxingxinhaoji(x,y)
								}
						}
				}
				
			}
			else if(CancelPos[i]==document.getElementById('SFa'))
			{
				for(var q=0;q<JinLuPos[0].length;q++){
						if(JinLuPos[0][q]==document.getElementById('SFa')){
							if(JinLuPos[1][q] == document.getElementById('XIIa')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 1770,413); 
								context.lineTo( 1126, 413);
								context.stroke();
								CancelS=1;//还原
								//S信号机红灯
								x=1783;y=440
								shangxingxinhaoji(x,y)
							}
							else if(JinLuPos[1][q] == document.getElementById('X4a')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';
								context.moveTo( 1770,413); 
								context.lineTo( 1660, 413);	 
								context.moveTo( 1660, 413); 
								context.lineTo( 1600, 473); 
								context.moveTo(1600, 473);
								context.lineTo( 1206, 473);
								context.stroke();
								CancelS=1;//还原
								//S信号机红灯
								x=1783;y=440
								shangxingxinhaojiUUdengD(x,y)
								shangxingxinhaoji(x,y)
								}
							else if(JinLuPos[1][q] == document.getElementById('X6a')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 1770,413); 
								context.lineTo( 1660, 413);	 
								context.moveTo( 1660, 413); 
								context.lineTo( 1600, 473); 
								context.moveTo(1600, 473);
								context.lineTo( 1505, 473);
								context.moveTo(1505, 473);
								context.lineTo( 1445,533);
								context.moveTo(1445,533);
								context.lineTo(1236,533);
								context.stroke();
								CancelS=1;//还原
								//S信号机红灯
								x=1783;y=440
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
						context.moveTo( 1126,413); 
						context.lineTo( 20, 413);
						context.stroke();
						//CancelS=1;//还原
						//S信号机红灯
						x=1140;y=440
						shangxingxinhaoji(x,y)
				}
			else if(CancelPos[i]==document.getElementById('S4a')){
				        var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = '#848284';		
						context.moveTo( 1206,473); 
						context.lineTo( 1060, 473);
						context.moveTo( 1060, 473);
						context.lineTo( 1000, 413);
						context.moveTo( 1000, 413); 
						context.lineTo( 20, 413);
						context.stroke();
						//CancelS=1;//还原
						//S信号机红灯
						x=1220;y=500
						shangxingxinhaoji(x,y)
				}
			else if(CancelPos[i]==document.getElementById('S6a')){
				        var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = '#848284';		
						context.moveTo( 1236,533);
						context.lineTo( 1215, 533);
						context.moveTo( 1215, 533); 
						context.lineTo( 1155, 473); 
						context.moveTo( 1155, 473); 
						context.lineTo( 1060, 473);
						context.moveTo( 1060, 473);
						context.lineTo( 1000, 413);
						context.moveTo( 1000, 413); 
						context.lineTo( 20, 413);
						context.stroke();
						//CancelS=1;//还原
						//S信号机红灯
						x=1250;y=560
						shangxingxinhaoji(x,y)
			}
			else if(CancelPos[i]==document.getElementById('XIa')){
				        var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = '#848284';		
						context.moveTo( 1554,353); 
						context.lineTo( 1950,353);
						context.stroke();
						//CancelX=1;//还原
						//X信号机红灯
						x=1600;y=350
						xiaxingxinhaoji(x,y)
				}
			else if(CancelPos[i]==document.getElementById('X3a')){
				        var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = '#848284';		
						context.moveTo( 1453,293); 
						context.lineTo( 1603,293);
						context.moveTo( 1600,293);
						context.lineTo( 1660, 353);
						context.moveTo( 1660, 353); 
						context.lineTo( 1950, 353);
						context.stroke();
						//CancelX=1;//还原
						//X信号机红灯
						x=1500;y=290
						xiaxingxinhaoji(x,y)
		}
		  else if(CancelPos[i]==document.getElementById('X5a')){
			            var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = '#848284';		
						context.moveTo( 1413,233);
						context.lineTo( 1445,233);
						context.moveTo( 1445,233); 
						context.lineTo( 1505, 293); 
						context.moveTo( 1505, 293); 
						context.lineTo( 1600,293);
						context.moveTo( 1600,293);
						context.lineTo( 1660, 353);
						context.moveTo( 1660, 353); 
						context.lineTo( 1950, 353);
						context.stroke();
						//CancelX=1;//还原
						//X信号机红灯
						x=1460;y=230
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
					
					
					//alert("在排列进路列表中清除此条进路");
					}
				}
		
		}
		setTimeout("CancelJinLu();",1000);      //每隔1秒刷新一次
	}
	//排列进路，重画轨道
	function JinLu(){
		//CancelJinLu();
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
						context.moveTo( 1000, 353); 
						context.lineTo( 1015, 338);
						context.stroke();
					    //画进路
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 740,353); 
						context.lineTo( 1554, 353);
						context.stroke();
						
						//X信号机单黄灯
						x=786;y=350
						xiaxingxinhaojihuangdeng(x,y)
						//道岔按钮指示颜色
						//flag=1
						//colorchange("5")
						}
					else if(JinLuPos[1][i]==document.getElementById('S3a')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1155,293); 
						context.lineTo( 1170,278);
						context.stroke();
						//画进路
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 740,353); 
						context.lineTo( 1000, 353);
						context.moveTo( 1000,353); 
						context.lineTo( 1060, 293);
						context.moveTo( 1060, 293);
						context.lineTo( 1453, 293);
						context.stroke()
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1006, 353); 
						context.lineTo( 1021, 353);
						context.stroke();
						//X信号机双黄灯
						x=786;y=350
						xiaxingxinhaojiUUdeng(x,y)
						//道岔按钮指示颜色
						//flag=2
						//colorchange("5")
						//flag=1
						//colorchange("9")
						
						}
					else if(JinLuPos[1][i]==document.getElementById('S5a')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 740,353); 
						context.lineTo( 1000, 353);
						context.moveTo( 1000,353); 
						context.lineTo( 1060, 293);
						context.moveTo( 1060, 293);
						context.lineTo( 1155, 293); 
						context.moveTo( 1155, 293);
						context.lineTo( 1215, 233); 
						context.moveTo( 1215, 233);
						context.lineTo( 1413, 233);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1006, 353); 
						context.lineTo( 1021, 353);
						context.stroke();
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1161, 293); 
						context.lineTo( 1176, 293);
						context.stroke();
						
						//X信号机双黄灯
						x=786;y=350
						xiaxingxinhaojiUUdeng(x,y)
						//道岔按钮指示颜色
						//flag=2
						//colorchange("5")
						//flag=2
						//colorchange("9")
						}
					}
				else if(JinLuPos[0][i]==document.getElementById('SFa')){
					if(JinLuPos[1][i]==document.getElementById('XIIa')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1660,413); 
						context.lineTo( 1645, 428);
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 1770,413); 
						context.lineTo( 1126, 413);
						context.stroke();
						//S信号机黄灯
						x=1783;y=440
            			shangxingxinhaojihuangdeng(x,y)
						//道岔按钮指示颜色
						//flag=1
						//colorchange("4")
						}
					else if(JinLuPos[1][i]==document.getElementById('X4a')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1505, 473); 		 
						context.lineTo( 1490, 488); 
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';
						context.moveTo( 1770,413); 
						context.lineTo( 1660, 413);	 
						context.moveTo( 1660, 413); 
						context.lineTo( 1600, 473); 
						context.moveTo(1600, 473);
						context.lineTo( 1206, 473);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1654, 413); 
						context.lineTo( 1639, 413);
						context.stroke();
						//S信号机双黄灯
						x=1783;y=440
						shangxingxinhaojiUUdeng(x,y)
						//道岔按钮指示颜色
						//flag=2
						//colorchange("4")
						//flag=1
						//colorchange("8")
						}
					else if(JinLuPos[1][i]==document.getElementById('X6a')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 1770,413); 
						context.lineTo( 1660, 413);	 
						context.moveTo( 1660, 413); 
						context.lineTo( 1600, 473); 
						context.moveTo(1600, 473);
						context.lineTo( 1505, 473);
						context.moveTo(1505, 473);
						context.lineTo( 1445,533);
						context.moveTo(1445,533);
						context.lineTo(1236,533);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo(1654, 413); 
						context.lineTo(1639, 413);
						context.stroke();
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1499, 473); 
						context.lineTo( 1484, 473);
						context.stroke();
						//S信号机双黄灯
						x=1783;y=440
						shangxingxinhaojiUUdeng(x,y)
						//道岔按钮指示颜色
						//flag=2
						//colorchange("4")
						//flag=2
						//colorchange("8")
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
							context.moveTo( 1000, 413); 		 
							context.lineTo( 1015, 428); 
							context.stroke();
							//进路绘制
							context.beginPath();
							context.lineWidth = 5;
							context.strokeStyle = 'white';		
							context.moveTo( 1126,413); 
							context.lineTo( 20, 413);
							context.stroke();
							
							//S信号机绿灯
							x=1140;y=440
							shangxingxinhaojilvdeng(x,y)
							//道岔按钮指示颜色
							//flag=1
							//colorchange("7")
						}
					}
				else if(JinLuPos[0][i]==document.getElementById('S4a')){
					if(JinLuPos[1][i]==document.getElementById('XFa')){
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1155, 473); 		 
						context.lineTo( 1170, 488); 
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 1206,473); 
						context.lineTo( 1060, 473);
						context.moveTo( 1060, 473);
						context.lineTo( 1000, 413);
						context.moveTo( 1000, 413); 
						context.lineTo( 20, 413);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1006, 413); 
						context.lineTo( 1021, 413);
						context.stroke();
						//S信号机绿灯
						x=1220;y=500
						shangxingxinhaojilvdeng(x,y)
						//道岔按钮指示颜色
						//flag=2
						//colorchange("7")
						//flag=1
						//colorchange("11")
					}
				}
				else if(JinLuPos[0][i]==document.getElementById('S6a')){
					if(JinLuPos[1][i]==document.getElementById('XFa')){
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 1236,533);
						context.lineTo( 1215, 533);
						context.moveTo( 1215, 533); 
						context.lineTo( 1155, 473); 
						context.moveTo( 1155, 473); 
						context.lineTo( 1060, 473);
						context.moveTo( 1060, 473);
						context.lineTo( 1000, 413);
						context.moveTo( 1000, 413); 
						context.lineTo( 20, 413);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1006, 413); 
						context.lineTo( 1021, 413);
						context.stroke();
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1161, 473); 
						context.lineTo( 1176, 473);
						context.stroke();
						//S信号机绿灯
						x=1250;y=560
						shangxingxinhaojilvdeng(x,y)
						//道岔按钮指示颜色
						//flag=2
						//colorchange("7")
						//flag=2
						//colorchange("11")
					}
				}
				else if(JinLuPos[0][i]==document.getElementById('XIa')){
					if(JinLuPos[1][i]==document.getElementById('Sa')){
					var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1660, 353); 		 
						context.lineTo( 1645, 338); 
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 1554,353); 
						context.lineTo( 1950,353);
						context.stroke();
						//X信号机绿灯
						x=1600;y=350
						xiaxingxinhaojilvdeng(x,y)
						//道岔按钮指示颜色
						//flag=1
						//colorchange("2")
					    }  
					}
				else if(JinLuPos[0][i]==document.getElementById('X3a')){
					if(JinLuPos[1][i]==document.getElementById('Sa')){
					var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1505,293); 		 
						context.lineTo( 1490, 278); 
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 1453,293); 
						context.lineTo( 1603,293);
						context.moveTo( 1600,293);
						context.lineTo( 1660, 353);
						context.moveTo( 1660, 353); 
						context.lineTo( 1950, 353);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1654, 353); 
						context.lineTo( 1639, 353);
						context.stroke();
						
						//X信号机绿灯
						x=1500;y=290
						xiaxingxinhaojilvdeng(x,y)
						//道岔按钮指示颜色
						//flag=2
						//colorchange("2")
						//flag=1
						//colorchange("6")
						}
					}
				else if(JinLuPos[0][i]==document.getElementById('X5a')){
					if(JinLuPos[1][i]==document.getElementById('Sa')){
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 1413,233);
						context.lineTo( 1445,233);
						context.moveTo( 1445,233); 
						context.lineTo( 1505, 293); 
						context.moveTo( 1505, 293); 
						context.lineTo( 1600,293);
						context.moveTo( 1600,293);
						context.lineTo( 1660, 353);
						context.moveTo( 1660, 353); 
						context.lineTo( 1950, 353);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1654, 353); 
						context.lineTo( 1639, 353);
						context.stroke();
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 1499, 293); 
						context.lineTo( 1484, 293);
						context.stroke();
						//X信号机绿灯
						x=1460;y=230
						xiaxingxinhaojilvdeng(x,y)
						//道岔按钮指示颜色
						//flag=2
						//colorchange("2")
						//flag=2
						//colorchange("6")
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
			bisaifenqu(560,348,357)
			bisaifenqu(560,408,417)
			bisaifenqu(740,348,357)
			bisaifenqu(740,408,417)
			bisaifenqu(920,348,357)
			bisaifenqu(920,408,417)

			bisaifenqu(1554,348,357)
			bisaifenqu(1554,408,417)//X1/X2			
			bisaifenqu(1770,348,357)
			bisaifenqu(1770,408,417)
			bisaifenqu(1950,348,357)
			bisaifenqu(1950,408,417)

			
			bisaifenqu(1126,288,297)
			bisaifenqu(1126,348,357)
			bisaifenqu(1126,408,417)
			bisaifenqu(1126,468,477)//S1/S2
			
			bisaifenqu(1206,288,297)
			bisaifenqu(1206,468,477)//S3/S4
			
		    bisaifenqu(1236,228,237)
			bisaifenqu(1236,528,537)//S5/S6
			
		    bisaifenqu(1413,228,237)
			bisaifenqu(1413,528,537)//X5/X6
			
			bisaifenqu(1453,288,297)
			bisaifenqu(1453,468,477)//X3/X4	
			
		setTimeout("JinLu();",1000);      //每隔1秒刷新一次
		
	}