function danduhuaxiaxingxiaoche(x,y)
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			context.restore();
			
		}


function dingshidanduhuaxiaxingxiaoche()
{
	
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
	        if(i==3)
	        {
				x=490;y=235
		        context.fillStyle = "black";
            
		        context.fillRect(x, y, 60, 15);
			    context.beginPath();
			    context.lineWidth = 1;
			    context.strokeStyle = 'black';
			
			    context.moveTo( x+60, y ); // x+7,y-1
			    context.lineTo( x+60, y+15);
			    context.lineTo( x+90, y+15);
			    context.lineTo( x+60, y);
			    context.fill();
			    context.stroke();
			
			    context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		        context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
				x=800;y=250
                xiaxingxinhaojihongdeng(x,y)
			
			    //fenge
			    context.beginPath();
			    context.lineWidth = 5;
			    context.strokeStyle = '#848284';
			    x=810;
			    y=189;
			    k=50;
			    context.moveTo( x, y+6 ); // x+7,y-1
			    context.lineTo( x+k, y+6+k);
			    context.stroke();	

	}
	else
	{
	        x=(fenjiedian[i-1]+fenjiedian[i])/2-50
	        y=235
		    context.fillStyle = "black";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
	}

	if (i<54)
	{ 
	        i=i+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==5)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';   // 6DG的弯股
			x=810;
			y=189;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}
	
	// 当小车运行到4DG的下一个轨道区段时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==6)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';   // 4DG的弯股
			x1=930;
			y1=260;
			x2=978;
			y2=282;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
	}
	
	// 当小车运行到天津南站的1G时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==14)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';  //  1DG的弯股
			x=2310;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(2372, 190, 45, 5);  // 1DG的侧线股道
	}
	
	// 当小车运行到天津南站的2-8DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==16)
	{
		    context.fillStyle = "#848284";
			context.fillRect(2883, 190, 52, 5);  // 10DG的侧线股道
			 
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';      // 10DG的弯股
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}	
	
	// 当小车运行到天津南站的2-8DG的下一个轨道区段时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==17)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';   // 2-8DG的交叉渡线的一捺
			x1=3050;
			y1=260;
			x2=3122.5;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';   // 2-8DG的交叉渡线的一撇
			x1=3082;
			y1=289;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
	}
	
	// 当小车运行到济南西站的1G时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==24)
	{
		    context.fillStyle = "#848284";
			context.fillRect(4333, 190, 45, 5);  // 1DG的侧线股道
			
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';     // 1DG的弯股
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	
	// 当小车运行到济南西站的2DG的下一个轨道区段时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==26)
	{
		    context.fillStyle = "#848284";   
			context.fillRect(4844, 190, 52, 5);   // 2DG的侧线股道
		    
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';      // 2DG的弯股
			x=4899;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}		
	
	// 当小车运行到南京南站的1G时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==34)
	{
		    context.fillStyle = "#848284";
			context.fillRect(6274, 190, 45, 5);    // 1DG的侧线股道
		    
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';       // 1DG的弯股
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	
	// 当小车运行到南京南站的2DG的下一个轨道区段时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==36)
	{
		    context.fillStyle = "#848284";
			context.fillRect(6785, 190, 52, 5);   // 2DG的侧线股道
		    
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';      // 2DG的弯股
			x=6840;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}			

    // 当小车运行到苏州北站的1G时，把小车经过的上一个道岔区段恢复之前的状态
    if(i==44)
	{ 
	        context.fillStyle = "#848284";
			context.fillRect(8215, 190, 45, 5);   // 1DG的侧线股道
			
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';      // 1DG的弯股
			x=8153;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	
	// 当小车运行到苏州北站的2DG的下一个轨道区段时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==46)
	{
		    context.fillStyle = "#848284";
			context.fillRect(8726, 190, 52, 5);   // 2DG的侧线股道
		    
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';       // 2DG的弯股
			x=8781;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}		

    // 当小车运行到上海虹桥站的5DG时，把小车经过的上一个道岔区段恢复之前的状态
    if(i==53)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';   // 3DG的双动道岔
			x1=9985;
			y1=282;
			x2=10033;
			y2=261;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
	}

    // 当小车运行到上海虹桥站的1G时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==54)
	{
		    context.fillStyle = "#848284";
			context.fillRect(10145, 190, 45, 5);   // 5DG的侧线股道
		     
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';       // 5DG的弯股
			x=10083;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	
	
	if (i==5)
	{
		    x=800;y=250
		    xiaxingxinhaojihongdeng3(x,y)		
	}
	
	//经过天津南站时
	if(i==12)
	{
			x=2320;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==13)
	{
			x=2320;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(i==14)
	{
			x=2320;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==14)
	{
		    x=2970;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(i==15)
	{			
	        x=2970;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
	if(i==16)
	{			
	        x=2970;y=250
            xiaxingxinhaojihongdeng3(x,y)	
	}
	
	//经过济南西站时
	if(i==22)
	{
			x=4281;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==23)
	{
			x=4281;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(i==24)
	{
			x=4281;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==24)
	{
			x=4931;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(i==25)
	{			
	        x=4931;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
	if(i==26)
	{			
	        x=4931;y=250
            xiaxingxinhaojihongdeng3(x,y)	
	}
	
	//经过南京南站时
	if(i==32)
	{
			x=6222;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==33)
	{
			x=6222;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(i==34)
	{
		    x=6222;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==34)
	{
		    x=6872;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(i==35)
	{			
	        x=6872;y=250
            xiaxingxinhaojihongdeng(x,y)	
	}
	if(i==36)
	{			
	        x=6872;y=250
            xiaxingxinhaojihongdeng3(x,y)	
	}
	
	//经过苏州北站时
	if(i==42)
	{
			x=8163;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==43)
	{
			x=8163;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(i==44)
	{
			x=8163;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==44)
	{
			x=8813;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(i==45)
	{			
	        x=8813;y=250
            xiaxingxinhaojihongdeng(x,y)	
	}
	if(i==46)
	{			
	        x=8813;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	//经过上海虹桥站
	if(i==51)
	{
			x=9959;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==52)
	{			
	        x=9959;y=250
            xiaxingxinhaojihongdeng(x,y)
		
	}
	if(i==53)
	{			
	        x=9959;y=250
            xiaxingxinhaojihongdeng3(x,y)
		
	}
	
	 if(i<52)
    {
	        
			
			// 当小车运行到北京南站的6DG时
			if(i==4)
			{
				context.fillStyle = "red";    // 将6DG的侧线轨道变红
				context.fillRect(753, 190, 57, 5);
				
				context.beginPath();
			    context.lineWidth = 5;
			    context.strokeStyle = 'red';    // 将6DG的弯道变红
			    x=810;
			    y=189;
			    k=50;
			    context.moveTo( x, y+6 ); // x+7,y-1
			    context.lineTo( x+k, y+6+k);
			    context.stroke();
			}
			
			// 当小车运行到北京南站的4DG时			
			if(i==5)
			{				
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';    // 将4DG的双动道岔变红
			x1=930;
			y1=260;
			x2=978;
			y2=282;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			}
			
			// 当小车运行到天津南站的3JG时，自动排列好通过进路
			if(i==12)
			{
		    context.fillStyle = "#FFF";  // 将正线上的股道变成白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+5]-fenjiedian[i], 5);
			
			// 将1号道岔的弯股变成白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=2310;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			// 将1号道岔的侧线股道变成白光带
			context.fillStyle = "#FFF";
			context.fillRect(2372, 190, 45, 5);			
			
			// 将10号道岔的弯股变成白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			// 将10号道岔的侧线股道变成白光带
			context.fillStyle = "#FFF";
			context.fillRect(2883, 190, 52, 5);
			
			//交叉渡线处变为白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3050;
			y1=260;
			x2=3122.5;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3082;
			y1=289;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			}
			
			// 当列车运行到天津南站的1DG时，将其所在的区段变为红光带
			if(i==13)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';   // 将1号道岔的弯股变成红光带
			x=2310;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";   // 将1号道岔的侧线股道变成红光带
			context.fillRect(2372, 190, 45, 5);		 
			}
			
			// 当列车运行到天津南站的10DG时，将其所在的区段变为红光带
			if(i==15)
			{
			context.fillStyle = "red";
			context.fillRect(2883, 190, 52, 5);   // 将10号道岔的侧线股道变成红光带
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';  // 将10号道岔的弯股变成红光带
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();		
			}
			
			// 当列车运行到天津南站的2-8DG时，将其所在的区段变为红光带
			if(i==16)
			{
			// 交叉渡线处变为红光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3050;
			y1=260;
			x2=3122.5;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3082;
			y1=289;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			}
			
			// 当小车运行到济南西站的3JG时，自动排列好通过进路
			if(i==22)
			{
		    context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+4]-fenjiedian[i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';   // 将1DG的弯股变为白光带
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";  // 将1DG的侧线股道变为白光带
			context.fillRect(4333, 190, 45, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';  // 将2DG的弯股变为白光带
			x=4899;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";    // 将1DG的侧线股道变为白光带
			context.fillRect(4844, 190, 52, 5);
			
			}
			
			// 当列车运行到济南西站的1DG时，将列车所占用的区段变为红光带
			if(i==23)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';  //  将1DG的弯股变为红光带
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";   //  将1DG的侧线股道变为红光带
			context.fillRect(4333, 190, 45, 5); 
			}
			
			// 当列车运行到济南西站的2DG时，将列车所占用的区段变为红光带
			if(i==25)
			{
			context.fillStyle = "red";   //  将2DG的侧线股道变为红光带 
			context.fillRect(4844, 190, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';   //  将2DG的弯股变为红光带
			x=4899;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			}
			
			// 当小车运行到南京南站的3JG时，自动排列好通过进路
			if(i==32)
			{
		    context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+4]-fenjiedian[i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';   // 将1DG的弯股变为白光带
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";    // 将1DG的侧线股道变为白光带
			context.fillRect(6274, 190, 45, 5); 			
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';   // 将2DG的弯股变为白光带
			x=6840;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";    // 将2DG的侧线股道变为白光带
			context.fillRect(6785, 190, 52, 5);
			}
			
			// 当列车运行到南京南站的1DG时，将其占用的区段变为红光带
			if(i==33)
			{
			context.beginPath();
			context.lineWidth = 5;   // 将1DG的弯股变为红光带
			context.strokeStyle = 'red';
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";    // 将1DG的侧线股道变为红光带
			context.fillRect(6274, 190, 45, 5); 
			}
			
			// 当列车运行到南京南站的2DG时，将其占用的区段变为红光带
			if(i==35)
			{
			context.fillStyle = "red";   // 将2DG的侧线股道变为红光带
			context.fillRect(6785, 190, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';   // 将2DG的弯股变为红光带
			x=6840;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			}
			
			// 当小车运行到苏州北站的3JG时，自动排列好通过进路
			if(i==42)
			{
		    context.fillStyle = "#FFF";   // 将正线股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+4]-fenjiedian[i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';  // 将1DG的弯股变为红光带
			x=8153
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";   // 将1DG的侧线股道变为白光带
			context.fillRect(8215, 190, 45, 5);
						
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';   // 将2DG的弯股变为红光带
			x=8781;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";     // 将2DG的侧线股道变为红光带
			context.fillRect(8726, 190, 52, 5);
			}
			
			// 当列车运行到苏州北站的1DG时，将其所占用的区段变为红光带
			if(i==43)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';  // 将1DG的弯股变为红光带
			x=8153
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";   // 将1DG的侧线股道变为红光带
			context.fillRect(8215, 190, 45, 5);
			}
			
			if(i==45)
			{
			context.fillStyle = "red";    // 将2DG的侧线股道变为红光带
			context.fillRect(8726, 190, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';   // 将2DG的弯股变为红光带
			x=8781;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			}
			
			// 当列车运行到上海虹桥站的3JG时，自动排列好通过进路
	        if(i==51)
	        {				
	        context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';  // 将3DG的双动道岔变为白光带
			x1=9985;
			y1=282;
			x2=10033;
			y2=261;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
					
			context.fillStyle = "#FFF";  // 将正线股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+3]-fenjiedian[i], 5);
			
			context.fillStyle = "#FFF";  // 将5DG的侧线股道变为白光带
			context.fillRect(10145, 190, 45, 5);
		     
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';  // 将5DG的弯股变为白光带
			x=10083;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	        }
			
			x=(fenjiedian[i-1]+fenjiedian[i])/2-50
	        y=235
	 

			// 画小车
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);

     }
     
	 //当列车运行到上海虹桥站3DG时
     if(i==52)
     {
	        x=(fenjiedian[i-1]+fenjiedian[i])/2-50
	        y=235
	 

			// 当列车在3DG时，画出小车模型
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";  //将列车所占用的区段变为红光带
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';  // 将3DG的双动道岔变为红光带
			x1=9985;
			y1=282;
			x2=10033;
			y2=261;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
            
            context.fillStyle = "#FFF";  // 列车前方两个区段仍为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
			//context.restore();
			
      }
      
	  // 当列车运行到上海虹桥站5DG时
      if(i==53)
     {
		    
			
			// 将列车所占用区段变为红光带
			context.fillStyle = "red";
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5); // 5DG正线股道
			context.fillRect(10145, 190, 45, 5);  // 5DG侧线股道
		     
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';  // 将5DG的侧线股道变为红光带
			x=10083;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
            
            context.fillStyle = "#FFF";  // 列车前方的一个区段仍为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+1]-fenjiedian[i], 5);
			
			// 当列车在3DG时，画出小车模型
	        x=(fenjiedian[i-1]+fenjiedian[i])/2-50
	        y=235
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			//context.restore();
      }
      
	  // 当列车在上海虹桥站1G时，画出小车并将其所占用股道变为红光带
      if(i==54)
     {
	        x=(fenjiedian[i-1]+fenjiedian[i])/2-50
	        y=235
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
                       
			//context.restore();
      }
			
			
			/*//闭塞分区标志
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
			*/
}

function danduhuashangxingxiaoche(x,y)
		{
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-30, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();
			
			context.restore();			
		}


function dingshidanduhuashangxingxiaoche()
{
	
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	if(p==54)
	{
		    x=10399;y=295
		    context.fillStyle = "black";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-30, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[p-1], 310, fenjiedian[p]-fenjiedian[p-1], 5);
						x=10203;y=340
            shangxingxinhaojihongdeng(x,y)
						

	}
	else
	{
	
	        x=(fenjiedian[p-1]+fenjiedian[p])/2-20
	        y=295
		    context.fillStyle = "black";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-30, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();

			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[p-1], 310, fenjiedian[p]-fenjiedian[p-1], 5);
	}
	
    if(p==53)
	{		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=10083;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(10145, 370, 45, 5);
	}
	
	if(p==52)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=9938;
			y1=303;
			x2=9985;
			y2=282;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
	}
	
	if(p==45)
	{
		    context.fillStyle = "#848284";
			context.fillRect(8726, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=8781;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
	
	if(p==43)
	{		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=8153;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(8215, 370, 45, 5);
	}
	
	if(p==35)
	{
			context.fillStyle = "#848284";
			context.fillRect(6785, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=6840;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
	if(p==33)
	{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=6212;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(6274, 370, 45, 5);
	}
			
	if(p==25)
	{
			context.fillStyle = "#848284";
			context.fillRect(4844, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=4899;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
			
	if(p==23)
	{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=4271;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(4333, 370, 45, 5);
	}
	
	if(p==16)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=3122.5;
			y1=289;
			x2=3155;
			y2=303;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=3050;
			y1=303;
			x2=3082;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
	}
	if(p==15)
	{
		    context.fillStyle = "#848284";
			context.fillRect(2883, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=2938;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
			
	if(p==13)
	{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=2310;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(2372, 370, 45, 5);
	}
	
	if(p==4)
	{
			context.fillStyle = "#848284";
			context.fillRect(753, 370, 52, 5);
			
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
	
	if(p==5)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=978;
			y1=282;
			x2=1025;
			y2=304;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
	}
	 
	if (p>3)
	{ 
	        p=p-1
	}
	
	/*if(i==48)
	{
		    changceguidaohuizhi();
	}
	
	if(i==7)
	{
		    changceguidaohuizhi();
	}	*/	
			
    
	//小车经过苏州北站时
	if(p==46)
	{
			x=8881;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(p==45)
	{
			x=8881;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(p==44)
	{
			x=8233;y=340
            shangxingxinhaojilvdeng(x,y)
	}
	if(p==44)
	{
			x=8813;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(p==43)
	{			
	        x=8233;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过南京南站时
	if(p==36)
	{
			x=6940;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(p==35)
	{
			x=6940;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(p==34)
	{
			x=6292;y=340
            shangxingxinhaojilvdeng(x,y)
	}
	if(p==34)
	{
			x=6872;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(p==33)
	{			
	        x=6292;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过济南西站时
	if(p==26)
	{
			x=4999;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(p==25)
	{
			x=4999;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(p==24)
	{
			x=4351;y=340
            shangxingxinhaojilvdeng(x,y)
	}
	if(p==24)
	{
			x=4931;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(p==23)
	{			
	        x=4351;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过天津南站时
	if(p==17)
	{
			x=3193;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(p==16)
	{
			x=3193;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(p==14)
	{
			x=2390;y=340
            shangxingxinhaojilvdeng(x,y)
	}
	if(p==14)
	{
			x=2970;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(p==13)
	{			
	        x=2390;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	
	//小车经过北京南站时
	if(p==6)
	{
			x=1063;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	
    if(p==5)
	{			
	        x=1063;y=340
            shangxingxinhaojihongdeng(x,y)		
	}
	
	 if(p>5)
    {
	        x=(fenjiedian[p-1]+fenjiedian[p])/2-20
	        y=295	  
			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(fenjiedian[p-1], 310, fenjiedian[p]-fenjiedian[p-1], 5);
			
			//context.restore();
			
			if(p==53)
			{
			context.fillStyle = "red";
			context.fillRect(10145, 370, 45, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';	
			x=10083;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke(); 
			}
			
			if(p==52)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=9938;
			y1=303;
			x2=9985;
			y2=282;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			}
			
			if(p==46)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-3], 310, fenjiedian[p-1]-fenjiedian[p-3], 5);	
				
			context.fillStyle = "#FFF";
			context.fillRect(8726, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=8781;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			if(p==45)
			{
			context.fillStyle = "red";
			context.fillRect(8726, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=8781;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(p==44)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-3], 310, fenjiedian[p-1]-fenjiedian[p-3], 5);	
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';	
			x=8153;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(8215, 370, 45, 5);
			}
			
			if(p==43)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';	
			x=8153;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(8215, 370, 45, 5);
			}
			
			if(p==36)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-3], 310, fenjiedian[p-1]-fenjiedian[p-3], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(6785, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=6840;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(p==35)
			{
			context.fillStyle = "red";
			context.fillRect(6785, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=6840;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(p==34)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-3], 310, fenjiedian[p-1]-fenjiedian[p-3], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';	
			x=6212;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(6274, 370, 45, 5);
			}
			
			if(p==33)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';	
			x=6212;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(6274, 370, 45, 5);
			}
			
			if(p==26)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-3], 310, fenjiedian[p-1]-fenjiedian[p-3], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(4844, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=4899;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(p==25)
			{
			context.fillStyle = "red";
			context.fillRect(4844, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=4899;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(p==24)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-3], 310, fenjiedian[p-1]-fenjiedian[p-3], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';	
			x=4271;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(4333, 370, 45, 5);
			}
			
			if(p==23)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';	
			x=4271;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(4333, 370, 45, 5);
			}
			
			if(p==17)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-4], 310, fenjiedian[p-1]-fenjiedian[p-4], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(2883, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=2938;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			
			//交叉渡线处白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3122.5;
			y1=289;
			x2=3155;
			y2=303;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3050;
			y1=303;
			x2=3082;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			}
			
			if(p==16)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3122.5;
			y1=289;
			x2=3155;
			y2=303;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3050;
			y1=303;
			x2=3082;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			}
			if(p==15)
			{
			context.fillStyle = "red";
			context.fillRect(2883, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=2938;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(p==14)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-3], 310, fenjiedian[p-1]-fenjiedian[p-3], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';	
			x=2310;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(2372, 370, 45, 5);
			}	
			
			if(p==13)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';	
			x=2310;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(2372, 370, 45, 5);
			}	
			
			if(p==6)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-4], 310, fenjiedian[p-1]-fenjiedian[p-4], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(753, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=810;
			y=371;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			
			//长侧轨道白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=978;
			y1=282;
			x2=1025;
			y2=304;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			}
      }
      
      if(p==5)
      {
	        			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=978;
			y1=282;
			x2=1025;
			y2=304;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			x=(fenjiedian[p-1]+fenjiedian[p])/2-20
	        y=295
	 
			//context.save();  画小车
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(fenjiedian[p-1], 310, fenjiedian[p]-fenjiedian[p-1], 5);
			//context.restore();
      }
      
      if(p==4)
      {
	        x=(fenjiedian[p-1]+fenjiedian[p])/2-20
	        y=295
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(753, 370, 52, 5);
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=810;
			y=371;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
						
			context.fillStyle = "red";
			context.fillRect(fenjiedian[p-1], 310, fenjiedian[p]-fenjiedian[p-1], 5);
			
			//context.restore();
      }
      
      if(p==3)
      {
	        x=(fenjiedian[p-1]+fenjiedian[p])/2-20
	        y=295
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(fenjiedian[p-1], 310, fenjiedian[p]-fenjiedian[p-1], 5);            
			
			//context.restore();
      }
			
            /*//闭塞分区标志
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
			*/
}

function dingshidanduhuashangxingxingcheguzhang()
{
	
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	if(p==54)
	{
		    x=10399;y=295
		    context.fillStyle = "black";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-30, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[p-1], 310, fenjiedian[p]-fenjiedian[p-1], 5);
						x=10203;y=340
            shangxingxinhaojihongdeng(x,y)						
	}
	else
	{		
	        x=(fenjiedian[p-1]+fenjiedian[p])/2-20
	        y=295
		    context.fillStyle = "black";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-30, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[p-1], 310, fenjiedian[p]-fenjiedian[p-1], 5);
	}

    if(p==53)
	{		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=10083;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(10145, 370, 45, 5);
	}
	
	if(p==52)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=9938;
			y1=303;
			x2=9985;
			y2=282;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
	}
	
	if(p==45)
	{
		    context.fillStyle = "#848284";
			context.fillRect(8726, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=8781;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
	
	if(p==43)
	{		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=8153;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(8215, 370, 45, 5);
	}
	
	if(p==35)
	{
			context.fillStyle = "#848284";
			context.fillRect(6785, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=6840;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
	if(p==33)
	{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=6212;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(6274, 370, 45, 5);
	}
			
	if(p==25)
	{
			context.fillStyle = "#848284";
			context.fillRect(4844, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=4899;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
			
	if(p==23)
	{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=4271;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(4333, 370, 45, 5);
	}
	
	if(p==16)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=3122.5;
			y1=289;
			x2=3155;
			y2=303;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=3050;
			y1=303;
			x2=3082;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
	}
	if(p==15)
	{
		    context.fillStyle = "#848284";
			context.fillRect(2883, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=2938;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
			
	if(p==13)
	{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=2310;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(2373, 370, 45, 5);
	}
	
	if(p==4)
	{
			context.fillStyle = "#848284";
			context.fillRect(753, 370, 52, 5);
			
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
	
	if(p==5)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=978;
			y1=282;
			x2=1025;
			y2=304;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
	}
	
	if (p>3)
	{ p=p-1
	}
	
	/*if(i==48)
	{
		    changceguidaohuizhi();
	}
	
	if(i==7)
	{
		    changceguidaohuizhi();
	}		*/
			
    
	//小车经过苏州北站时
	if(p==46)
	{
			x=8881;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(p==45)
	{
			x=8881;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(p==44)
	{
			x=8233;y=340
            shangxingxinhaojilvdeng(x,y)
	}
	if(p==44)
	{
			x=8813;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(p==43)
	{			
	        x=8233;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过南京南站时
	if(p==36)
	{
			x=6940;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(p==35)
	{
			x=6940;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(p==34)
	{
			x=6292;y=340
            shangxingxinhaojilvdeng(x,y)
	}
	if(p==34)
	{
			x=6872;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(p==33)
	{			
	        x=6292;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过济南西站时
	if(p==26)
	{
			x=4999;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(p==25)
	{
			x=4999;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(p==24)
	{
			x=4351;y=340
            shangxingxinhaojilvdeng(x,y)
	}
	if(p==24)
	{
			x=4931;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(p==23)
	{			
	        x=4351;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过天津南站时
	if(p==17)
	{
			x=3193;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(p==16)
	{
			x=3193;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(p==14)
	{
			x=2390;y=340
            shangxingxinhaojilvdeng(x,y)
	}
	if(p==14)
	{
			x=2970;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(p==13)
	{			
	        x=2390;y=340
            shangxingxinhaojihongdeng(x,y)		
	}
	
	
	//小车经过北京南站时
	if(p==6)
	{
			x=1063;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	
    if(p==5)
	{			
	        x=1063;y=340
            shangxingxinhaojihongdeng(x,y)		
	}
	
			
	if(p>=31)
	{
	
	        x=(fenjiedian[p-1]+fenjiedian[p])/2-20
	        y=295
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(fenjiedian[p-1], 310, fenjiedian[p]-fenjiedian[p-1], 5);
			
			//context.restore();
			
			if(p==53)
			{
			context.fillStyle = "red";
			context.fillRect(10145, 370, 45, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';	
			x=10083;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke(); 
			}
			
			if(p==52)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=9938;
			y1=303;
			x2=9985;
			y2=282;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			}
			
			if(p==46)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-3], 310, fenjiedian[p-1]-fenjiedian[p-3], 5);	
				
			context.fillStyle = "#FFF";
			context.fillRect(8726, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=8781;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			if(p==45)
			{
			context.fillStyle = "red";
			context.fillRect(8726, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=8781;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(p==44)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-3], 310, fenjiedian[p-1]-fenjiedian[p-3], 5);	
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';	
			x=8153;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(8215, 370, 45, 5);
			}
			
			if(p==43)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';	
			x=8153;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(8215, 370, 45, 5);
			}
			
			if(p==36)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-3], 310, fenjiedian[p-1]-fenjiedian[p-3], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(6785, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=6840;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(p==35)
			{
			context.fillStyle = "red";
			context.fillRect(6785, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=6840;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(p==34)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-3], 310, fenjiedian[p-1]-fenjiedian[p-3], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';	
			x=6212;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(6274, 370, 45, 5);
			}
			
			if(p==33)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';	
			x=6212;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(6274, 370, 45, 5);
			}		
	}
	
	if(p>=6)
	{
	   if(p<31)
       {
		   	x=(fenjiedian[p-1]+fenjiedian[p])/2-20
	        y=295
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 20, 15);
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
			context.fillRect(fenjiedian[p-1], 310, fenjiedian[p]-fenjiedian[p-1], 5);
			
			//context.restore();
			
			if(p==26)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-3], 310, fenjiedian[p-1]-fenjiedian[p-3], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(4844, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=4899;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(p==25)
			{
			context.fillStyle = "red";
			context.fillRect(4844, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=4899;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(p==24)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-3], 310, fenjiedian[p-1]-fenjiedian[p-3], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';	
			x=4271;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(4333, 370, 45, 5);
			}
			
			if(p==23)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';	
			x=4271;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(4333, 370, 45, 5);
			}
			
			if(p==17)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-4], 310, fenjiedian[p-1]-fenjiedian[p-4], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(2883, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=2938;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			
			//交叉渡线处白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3122.5;
			y1=289;
			x2=3155;
			y2=303;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3050;
			y1=303;
			x2=3082;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			}
			
			if(p==16)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3122.5;
			y1=289;
			x2=3155;
			y2=303;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3050;
			y1=303;
			x2=3082;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			}
			if(p==15)
			{
			context.fillStyle = "red";
			context.fillRect(2883, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=2938;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(p==14)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-3], 310, fenjiedian[p-1]-fenjiedian[p-3], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';	
			x=2310;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(2372, 370, 45, 5);
			}	
			
			if(p==13)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';	
			x=2310;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(2372, 370, 45, 5);
			}	
			
			if(p==6)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[p-4], 310, fenjiedian[p-1]-fenjiedian[p-4], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(753, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=810;
			y=371;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			
			//长侧轨道白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=978;
			y1=282;
			x2=1025;
			y2=304;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			}
       }
	}
    
    if(p==5)
    {
	        			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=978;
			y1=282;
			x2=1025;
			y2=304;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			
			x=(fenjiedian[p-1]+fenjiedian[p])/2-20
	        y=295
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(fenjiedian[p-1], 310, fenjiedian[p]-fenjiedian[p-1], 5);
			//context.restore();
      }
      
      if(p==4)
      {
	        x=(fenjiedian[p-1]+fenjiedian[p])/2-20
	        y=295
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(753, 370, 52, 5);
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=810;
			y=371;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
						
			context.fillStyle = "red";
			context.fillRect(fenjiedian[p-1], 310, fenjiedian[p]-fenjiedian[p-1], 5);
			
			//context.restore();
      }
      
      if(p==3)
      {
	        x=(fenjiedian[p-1]+fenjiedian[p])/2-20
	        y=295
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(fenjiedian[p-1], 310, fenjiedian[p]-fenjiedian[p-1], 5);            
			
			//context.restore();
      }
	
	// 画在中途丢失的那部分车厢
	if(p==30)
	{
		    x=(fenjiedian[i]+fenjiedian[i+1])/2-20
	        y=295
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+20, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
						
			context.fillStyle = "red";
			context.fillRect(fenjiedian[p], 310, fenjiedian[p+1]-fenjiedian[p], 5);
			
			//context.restore();
	}
			
            /*//闭塞分区标志
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
			*/
}


//站前折返

function zhanqianzhefanxiaoche()
{
			var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
	        if(i==3)
	        {x=490;y=235
		    context.fillStyle = "black";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
						x=800;y=250
            xiaxingxinhaojihongdeng(x,y)
			
			//fenge
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=810;
			y=190;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();

			

	}
	else if(i<=54)
	{

		
	        x=(fenjiedian[i-1]+fenjiedian[i])/2-50
	        y=235
		    context.fillStyle = "black";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
	}
	else if(i<=60)
	{
		    x=(fenjiedian[112-i]+fenjiedian[113-i])/2-50
	        y=235
		    context.fillStyle = "black";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[112-i], 250, fenjiedian[113-i]-fenjiedian[112-i], 5);
	}
		
	else if (i==61)
	{
		    x=9985.5;y=260+43/2
			//context.save();
			context.fillStyle = "black";

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x+43.7, y-16.5); // x+7,y-1
			context.lineTo( x+38.2, y-32);
			context.lineTo( x-20, y-9);
			context.lineTo( x-43.7, y+16.5);
			context.fill();
			context.stroke();	
	}
	else
	{
		    x=(fenjiedian[112-i]+fenjiedian[113-i])/2-50
	        y=295
		    context.fillStyle = "black";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[112-i], 310, fenjiedian[113-i]-fenjiedian[112-i], 5);
	}

	if (i<54)
	{ 
	        i=i+1
	}
	else if(i==54)
	{
		    i=i+5
	}
	else if(i<110)
	{
		    i=i+1 
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==5)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';   // 6DG的弯股
			x=810;
			y=189;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}
	
	// 当小车运行到4DG的下一个轨道区段时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==6)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';   // 4DG的弯股
			x1=930;
			y1=260;
			x2=978;
			y2=282;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
	}
	
	// 当小车运行到天津南站的1G时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==14)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';  //  1DG的弯股
			x=2310;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(2372, 190, 45, 5);  // 1DG的侧线股道
	}
	
	// 当小车运行到天津南站的2-8DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==16)
	{
		    context.fillStyle = "#848284";
			context.fillRect(2883, 190, 52, 5);  // 10DG的侧线股道
			 
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';      // 10DG的弯股
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}	
	
	// 当小车运行到天津南站的2-8DG的下一个轨道区段时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==17)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';   // 2-8DG的交叉渡线的一捺
			x1=3050;
			y1=260;
			x2=3122.5;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';   // 2-8DG的交叉渡线的一撇
			x1=3082;
			y1=289;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
	}
	
	// 当小车运行到济南西站的1G时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==24)
	{
		    context.fillStyle = "#848284";
			context.fillRect(4333, 190, 45, 5);  // 1DG的侧线股道
			
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';     // 1DG的弯股
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	
	// 当小车运行到济南西站的2DG的下一个轨道区段时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==26)
	{
		    context.fillStyle = "#848284";   
			context.fillRect(4844, 190, 52, 5);   // 2DG的侧线股道
		    
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';      // 2DG的弯股
			x=4899;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}		
	
	// 当小车运行到南京南站的1G时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==34)
	{
		    context.fillStyle = "#848284";
			context.fillRect(6274, 190, 45, 5);    // 1DG的侧线股道
		    
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';       // 1DG的弯股
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	
	// 当小车运行到南京南站的2DG的下一个轨道区段时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==36)
	{
		    context.fillStyle = "#848284";
			context.fillRect(6785, 190, 52, 5);   // 2DG的侧线股道
		    
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';      // 2DG的弯股
			x=6840;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}			

    // 当小车运行到苏州北站的1G时，把小车经过的上一个道岔区段恢复之前的状态
    if(i==44)
	{ 
	        context.fillStyle = "#848284";
			context.fillRect(8215, 190, 45, 5);   // 1DG的侧线股道
			
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';      // 1DG的弯股
			x=8153;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	
	// 当小车运行到苏州北站的2DG的下一个轨道区段时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==46)
	{
		    context.fillStyle = "#848284";
			context.fillRect(8726, 190, 52, 5);   // 2DG的侧线股道
		    
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';       // 2DG的弯股
			x=8781;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}		

    // 当小车运行到上海虹桥站的5DG时，把小车经过的上一个道岔区段恢复之前的状态
    if(i==53)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';   // 3DG的双动道岔
			x1=9985;
			y1=282;
			x2=10033;
			y2=261;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
	}

    // 当小车运行到上海虹桥站的1G时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==54)
	{
		    context.fillStyle = "#848284";
			context.fillRect(10145, 190, 45, 5);   // 5DG的侧线股道
		     
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';       // 5DG的弯股
			x=10083;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	
	
	if(i==61)
	{
		    context.fillStyle = "#848284";
			context.fillRect(10145, 190, 45, 5);
			
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=10083;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}	
	
	if(i==62)
	{
		    context.fillStyle = "#848284";  // 当列车从上海虹桥站开出，进入S1LG时，将上一区段所对应的双动道岔由定位转到反位
			context.fillRect(10030, 250, fenjiedian[114-i]-10030, 5);
			context.fillRect(fenjiedian[113-i], 310, 9939-fenjiedian[113-i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=9931;
			y1=312;
			x2=10040;
			y2=253;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			
			context.strokeStyle = '#FFF';
			context.beginPath();
			context.lineWidth = 2;
            context.moveTo( 9982,277);
			context.lineTo( 9988, 287 );
			context.stroke();
	}	

	if(i==69)
	{
			context.fillStyle = "#848284";
			context.fillRect(8726, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=8781;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
			
	if(i==71)
	{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=8153;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(8215, 370, 45, 5);
	}
			
	if(i==79)
	{
			context.fillStyle = "#848284";
			context.fillRect(6785, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=6840;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
			
	if(i==81)
	{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=6212;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(6274, 370, 45, 5);
	}
			
	if(i==89)
	{
			context.fillStyle = "#848284";
			context.fillRect(4844, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=4899;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
			
	if(i==91)
	{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=4271;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(4333, 370, 45, 5);
	}
			
	if(i==98)
	{			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=3122.5;
			y1=289;
			x2=3155;
			y2=303;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=3050;
			y1=303;
			x2=3082;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	    		
	}
			
	if(i==99)
	{
			context.fillStyle = "#848284";
			context.fillRect(2883, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=2938;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
			
	if(i==101)
	{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=2310;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(2372, 370, 45, 5);
	}	
				
	if(i==109)
	{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=978;
			y1=282;
			x2=1025;
			y2=304;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
	}	
	
	if(i==110)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 370, 57, 5);
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
	
	if (i==5)
	{
		    x=800;y=250
		    xiaxingxinhaojihongdeng3(x,y)		
	}
		
	//经过天津南站时
	if(i==12)
	{
			x=2320;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==13)
	{
			x=2320;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(i==14)
	{
			x=2320;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==14)
	{
		    x=2970;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(i==15)
	{			
	        x=2970;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
	if(i==16)
	{			
	        x=2970;y=250
            xiaxingxinhaojihongdeng3(x,y)	
	}
	
	//经过济南西站时
	if(i==22)
	{
			x=4281;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==23)
	{
			x=4281;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(i==24)
	{
			x=4281;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==24)
	{
			x=4931;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(i==25)
	{			
	        x=4931;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
	if(i==26)
	{			
	        x=4931;y=250
            xiaxingxinhaojihongdeng3(x,y)	
	}
	
	//经过南京南站时
	if(i==32)
	{
			x=6222;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==33)
	{
			x=6222;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(i==34)
	{
		    x=6222;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==34)
	{
		    x=6872;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(i==35)
	{			
	        x=6872;y=250
            xiaxingxinhaojihongdeng(x,y)	
	}
	if(i==36)
	{			
	        x=6872;y=250
            xiaxingxinhaojihongdeng3(x,y)	
	}
	
	//经过苏州北站时
	if(i==42)
	{
			x=8163;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==43)
	{
			x=8163;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(i==44)
	{
			x=8163;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==44)
	{
			x=8813;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(i==45)
	{			
	        x=8813;y=250
            xiaxingxinhaojihongdeng(x,y)	
	}
	if(i==46)
	{			
	        x=8813;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	//经过上海虹桥站
	if(i==51)
	{
			x=9959;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==52)
	{			
	        x=9959;y=250
            xiaxingxinhaojihongdeng(x,y)
		
	}
	if(i==53)
	{			
	        x=9959;y=250
            xiaxingxinhaojihongdeng3(x,y)
		
	}
	
	
	 if(i==59)
	{			
	        x=10203;y=280
            shangxingxinhaojilvdeng2(x,y)
		
	}
	 if(i==60)
	{			
	        x=10203;y=280
            shangxingxinhaojihongdeng(x,y)
		
	}
	 if(i==67)
	{			
	        x=8881;y=340
            shangxingxinhaojilvdeng2(x,y)
		
	}
	if(i==68)
	{
			x=8881;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	 if(i==69)
	{
			x=8233;y=340
            shangxingxinhaojilvdeng(x,y)
	}
	if(i==69)
	{
			x=8813;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
	if(i==70)
	{			
	        x=8233;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过南京南站时
	if(i==77)
	{
			x=6940;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==78)
	{
			x=6940;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(i==79)
	{
			x=6292;y=340
            shangxingxinhaojilvdeng(x,y)
	}
	if(i==79)
	{
			x=6872;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(i==80)
	{			
	        x=6292;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过济南西站时
	if(i==87)
	{
			x=4999;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==88)
	{
			x=4999;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(i==89)
	{
			x=4351;y=340
            shangxingxinhaojilvdeng(x,y)
	}
	if(i==89)
	{
			x=4931;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(i==90)
	{			
	        x=4351;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过天津南站时
	if(i==96)
	{
			x=3193;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==97)
	{
			x=3193;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(i==99)
	{
			x=2390;y=340
            shangxingxinhaojilvdeng(x,y)
	}
	if(i==99)
	{
			x=2970;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(i==100)
	{			
	        x=2390;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过北京南站时
	if(i==107)
	{
			x=1063;y=340
            shangxingxinhaojilvdeng2(x,y) 
	}
	
    if(i==108)
	{			
	        x=1063;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	if(i<52)
    {
	        			
			// 当小车运行到北京南站的6DG时
			if(i==4)
			{
				context.fillStyle = "red";    // 将6DG的侧线轨道变红
				context.fillRect(753, 190, 57, 5);
				
				context.beginPath();
			    context.lineWidth = 5;
			    context.strokeStyle = 'red';    // 将6DG的弯道变红
			    x=810;
			    y=189;
			    k=50;
			    context.moveTo( x, y+6 ); // x+7,y-1
			    context.lineTo( x+k, y+6+k);
			    context.stroke();
			}
			
			// 当小车运行到北京南站的4DG时			
			if(i==5)
			{				
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';    // 将4DG的双动道岔变红
			x1=930;
			y1=260;
			x2=978;
			y2=282;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			}
			
			// 当小车运行到天津南站的3JG时，自动排列好通过进路
			if(i==12)
			{
		    context.fillStyle = "#FFF";  // 将正线上的股道变成白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+5]-fenjiedian[i], 5);
			
			// 将1号道岔的弯股变成白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=2310;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			// 将1号道岔的侧线股道变成白光带
			context.fillStyle = "#FFF";
			context.fillRect(2372, 190, 45, 5);			
			
			// 将10号道岔的弯股变成白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			// 将10号道岔的侧线股道变成白光带
			context.fillStyle = "#FFF";
			context.fillRect(2883, 190, 52, 5);
			
			//交叉渡线处变为白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3050;
			y1=260;
			x2=3122.5;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3082;
			y1=289;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			}
			
			// 当列车运行到天津南站的1DG时，将其所在的区段变为红光带
			if(i==13)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';   // 将1号道岔的弯股变成红光带
			x=2310;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";   // 将1号道岔的侧线股道变成红光带
			context.fillRect(2372, 190, 45, 5);		 
			}
			
			// 当列车运行到天津南站的10DG时，将其所在的区段变为红光带
			if(i==15)
			{
			context.fillStyle = "red";
			context.fillRect(2883, 190, 52, 5);   // 将10号道岔的侧线股道变成红光带
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';  // 将10号道岔的弯股变成红光带
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();		
			}
			
			// 当列车运行到天津南站的2-8DG时，将其所在的区段变为红光带
			if(i==16)
			{
			// 交叉渡线处变为红光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3050;
			y1=260;
			x2=3122.5;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3082;
			y1=289;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			}
			
			// 当小车运行到济南西站的3JG时，自动排列好通过进路
			if(i==22)
			{
		    context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+4]-fenjiedian[i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';   // 将1DG的弯股变为白光带
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";  // 将1DG的侧线股道变为白光带
			context.fillRect(4333, 190, 45, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';  // 将2DG的弯股变为白光带
			x=4899;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";    // 将1DG的侧线股道变为白光带
			context.fillRect(4844, 190, 52, 5);
			
			}
			
			// 当列车运行到济南西站的1DG时，将列车所占用的区段变为红光带
			if(i==23)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';  //  将1DG的弯股变为红光带
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";   //  将1DG的侧线股道变为红光带
			context.fillRect(4333, 190, 45, 5); 
			}
			
			// 当列车运行到济南西站的2DG时，将列车所占用的区段变为红光带
			if(i==25)
			{
			context.fillStyle = "red";   //  将2DG的侧线股道变为红光带 
			context.fillRect(4844, 190, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';   //  将2DG的弯股变为红光带
			x=4899;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			}
			
			// 当小车运行到南京南站的3JG时，自动排列好通过进路
			if(i==32)
			{
		    context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+4]-fenjiedian[i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';   // 将1DG的弯股变为白光带
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";    // 将1DG的侧线股道变为白光带
			context.fillRect(6274, 190, 45, 5); 			
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';   // 将2DG的弯股变为白光带
			x=6840;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";    // 将2DG的侧线股道变为白光带
			context.fillRect(6785, 190, 52, 5);
			}
			
			// 当列车运行到南京南站的1DG时，将其占用的区段变为红光带
			if(i==33)
			{
			context.beginPath();
			context.lineWidth = 5;   // 将1DG的弯股变为红光带
			context.strokeStyle = 'red';
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";    // 将1DG的侧线股道变为红光带
			context.fillRect(6274, 190, 45, 5); 
			}
			
			// 当列车运行到南京南站的2DG时，将其占用的区段变为红光带
			if(i==35)
			{
			context.fillStyle = "red";   // 将2DG的侧线股道变为红光带
			context.fillRect(6785, 190, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';   // 将2DG的弯股变为红光带
			x=6840;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			}
			
			// 当小车运行到苏州北站的3JG时，自动排列好通过进路
			if(i==42)
			{
		    context.fillStyle = "#FFF";   // 将正线股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+4]-fenjiedian[i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';  // 将1DG的弯股变为红光带
			x=8153
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";   // 将1DG的侧线股道变为白光带
			context.fillRect(8215, 190, 45, 5);
						
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';   // 将2DG的弯股变为红光带
			x=8781;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";     // 将2DG的侧线股道变为红光带
			context.fillRect(8726, 190, 52, 5);
			}
			
			// 当列车运行到苏州北站的1DG时，将其所占用的区段变为红光带
			if(i==43)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';  // 将1DG的弯股变为红光带
			x=8153
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";   // 将1DG的侧线股道变为红光带
			context.fillRect(8215, 190, 45, 5);
			}
			
			if(i==45)
			{
			context.fillStyle = "red";    // 将2DG的侧线股道变为红光带
			context.fillRect(8726, 190, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';   // 将2DG的弯股变为红光带
			x=8781;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			}
			
			// 当列车运行到上海虹桥站的3JG时，自动排列好通过进路
	        if(i==51)
	        {				
	        context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';  // 将3DG的双动道岔变为白光带
			x1=9985;
			y1=282;
			x2=10033;
			y2=261;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
					
			context.fillStyle = "#FFF";  // 将正线股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+3]-fenjiedian[i], 5);
			
			context.fillStyle = "#FFF";  // 将5DG的侧线股道变为白光带
			context.fillRect(10145, 190, 45, 5);
		     
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';  // 将5DG的弯股变为白光带
			x=10083;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	        }
			
			x=(fenjiedian[i-1]+fenjiedian[i])/2-50
	        y=235
	 

			// 画小车
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);

     }
     
	 //当列车运行到上海虹桥站3DG时
     if(i==52)
     {
	        x=(fenjiedian[i-1]+fenjiedian[i])/2-50
	        y=235
	 

			// 当列车在3DG时，画出小车模型
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";  //将列车所占用的区段变为红光带
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';  // 将3DG的双动道岔变为红光带
			x1=9985;
			y1=282;
			x2=10033;
			y2=261;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
            
            context.fillStyle = "#FFF";  // 列车前方两个区段仍为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
			//context.restore();
      }
      
	  // 当列车运行到上海虹桥站5DG时
      if(i==53)
     {		  
			
			// 将列车所占用区段变为红光带
			context.fillStyle = "red";
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5); // 5DG正线股道
			context.fillRect(10145, 190, 45, 5);  // 5DG侧线股道
		     
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';  // 将5DG的侧线股道变为红光带
			x=10083;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
            
            context.fillStyle = "#FFF";  // 列车前方的一个区段仍为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+1]-fenjiedian[i], 5);
			
			// 当列车在3DG时，画出小车模型
	        x=(fenjiedian[i-1]+fenjiedian[i])/2-50
	        y=235
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			//context.restore();
      }
      
	  // 当列车在上海虹桥站1G时，画出小车并将其所占用股道变为红光带
      if(i==54)
     {
	        x=(fenjiedian[i-1]+fenjiedian[i])/2-50
	        y=235
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
                       
			//context.restore();
      }
	
	
	if(i==59)
	{
		    x=(fenjiedian[112-i]+fenjiedian[113-i])/2-50
	        y=235
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[112-i], 250, fenjiedian[113-i]-fenjiedian[112-i], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(10030, 250, fenjiedian[112-i]-10030, 5);
			context.fillRect(fenjiedian[109-i], 310, 9939-fenjiedian[109-i], 5);
			
			context.fillStyle = "black";
			context.fillRect(10018, 250, 12, 5);
			context.fillRect(9939, 310, 12, 5);
			
			// 当列车到达上海虹桥站列车折返时，将上海虹桥站之前的的1/3双动道岔清掉
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'black';
			x1=9938;
			y1=303;
			x2=10033;
			y2=261;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=9931;
			y1=312;
			x2=10040;
			y2=253;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			
			context.fillStyle = "#FFF";
			context.fillRect(10145, 190, 45, 5);
		     
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=10083;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
		
	if(i==60 )
	{
		    x=(fenjiedian[112-i]+fenjiedian[113-i])/2-50
	        y=235
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[112-i], 250, fenjiedian[113-i]-fenjiedian[112-i], 5);
			context.fillRect(10145, 190, 45, 5);
		     
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=10083;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();			
		}
	
	else if(i==61)
	{
		    			
			context.fillStyle = "red";
			context.fillRect(10030, 250, fenjiedian[113-i]-10030, 5);
			context.fillRect(fenjiedian[112-i], 310, 9939-fenjiedian[112-i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=9931;
			y1=312;
			x2=10040;
			y2=253;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			x=(fenjiedian[112-i]+fenjiedian[113-i])/2-50
	        y=235
	 

			//画侧线轨道上的小车
			x=9985.5;y=260+43/2
			//context.save();
			context.fillStyle = "blue";

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+43.7, y-16.5); // x+7,y-1
			context.lineTo( x+38.2, y-32);
			context.lineTo( x-20, y-9);
			context.lineTo( x-43.7, y+16.5);
			context.fill();
			context.stroke();					
		}
		
		
		// 当列车运行到北京南站的3JG时，排列好相关进路
		if(i==107)
		{
			x=(fenjiedian[112-i]+fenjiedian[113-i])/2-50
	        y=295
			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[112-i], 310, fenjiedian[113-i]-fenjiedian[112-i], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[109-i], 310, fenjiedian[112-i]-fenjiedian[109-i], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(753, 370, 57, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=810;
			y=371;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			
			//长侧轨道白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=978;
			y1=282;
			x2=1025;
			y2=304;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
		}
		
		if(i==108)
		{
						
			//长侧轨红白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=978;
			y1=282;
			x2=1025;
			y2=304;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			// 画小车
			x=(fenjiedian[112-i]+fenjiedian[113-i])/2-50
	        y=295	 
			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[112-i], 310, fenjiedian[113-i]-fenjiedian[112-i], 5);
		}
		
		if(i==109)
		{
			x=(fenjiedian[112-i]+fenjiedian[113-i])/2-50
	        y=295
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(753, 370, 57, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=810;
			y=371;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[112-i], 310, fenjiedian[113-i]-fenjiedian[112-i], 5);
		}
			
		if(i==110)
		{
			x=(fenjiedian[112-i]+fenjiedian[113-i])/2-50
	        y=295
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[112-i], 310, fenjiedian[113-i]-fenjiedian[112-i], 5);
		}
				
		else if(i<107&&i>61)
		{
			x=(fenjiedian[112-i]+fenjiedian[113-i])/2-50
	        y=295
	 

			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[112-i], 310, fenjiedian[113-i]-fenjiedian[112-i], 5);
			
			if(i==67)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[110-i], 310, fenjiedian[112-i]-fenjiedian[110-i], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(8726, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=8781;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(i==68)
			{
			context.fillStyle = "red";
			context.fillRect(8726, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=8781;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(i==69)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[110-i], 310, fenjiedian[112-i]-fenjiedian[110-i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';	
			x=8153;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(8215, 370, 45, 5);
			}
			
			if(i==70)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';	
			x=8153;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(8215, 370, 45, 5);
			}
			
			if(i==77)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[110-i], 310, fenjiedian[112-i]-fenjiedian[110-i], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(6785, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=6840;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(i==78)
			{
			context.fillStyle = "red";
			context.fillRect(6785, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=6840;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(i==79)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[110-i], 310, fenjiedian[112-i]-fenjiedian[110-i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';	
			x=6212;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(6274, 370, 45, 5);
			}
			
			if(i==80)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';	
			x=6212;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(6274, 370, 45, 5);
			}
			
			if(i==87)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[110-i], 310, fenjiedian[112-i]-fenjiedian[110-i], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(4844, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=4899;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(i==88)
			{
			context.fillStyle = "red";
			context.fillRect(4844, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=4899;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(i==89)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[110-i], 310, fenjiedian[112-i]-fenjiedian[110-i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';	
			x=4271;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(4333, 370, 45, 5);
			}
			
			if(i==90)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';	
			x=4271;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(4333, 370, 45, 5);
			}
			
			if(i==96)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[109-i], 310, fenjiedian[112-i]-fenjiedian[109-i], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(2883, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=2938;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			
			//交叉渡线处白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3122.5;
			y1=289;
			x2=3155;
			y2=303;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3050;
			y1=303;
			x2=3082;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			}
			
			if(i==97)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3122.5;
			y1=289;
			x2=3155;
			y2=303;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3050;
			y1=303;
			x2=3082;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			}
			
			if(i==98)
			{
			context.fillStyle = "red";
			context.fillRect(2883, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=2938;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			}
			
			if(i==99)
			{
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[110-i], 310, fenjiedian[112-i]-fenjiedian[110-i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';	
			x=2310;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(2372, 370, 45, 5);
			}
			
			if(i==100)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';	
			x=2310;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(2372, 370, 45, 5);
			}	
			}
			//context.restore();
			
			/*			//闭塞分区标志
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
			*/
}

//站后折返
function zhanhouzhefanxiaoche()
{
	  var canvas = document.getElementById("canvas");
      var context = canvas.getContext("2d");
	  if(i==3)
	  {x=490;y=235
		    context.fillStyle = "black";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
						x=800;y=250
            xiaxingxinhaojihongdeng(x,y)
			
			//fenge
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=810;
			y=190;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();

	}
	else if(i<=17)
	{		
	       x=(fenjiedian[i-1]+fenjiedian[i])/2-50
	       y=235
		   context.fillStyle = "black";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
	}
	else if(i<=36 )
	{
		    x=(fenjiedian[52-i]+fenjiedian[53-i])/2-50
	        y=235
		    context.fillStyle = "black";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[52-i], 250, fenjiedian[53-i]-fenjiedian[52-i], 5);
		}
	else if (i==37)
	{
		     x=3102.5;y=260+43/2
			//context.save();
			context.fillStyle = "black";

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x+43.7, y-19); // x+7,y-1
			context.lineTo( x+33, y-36);
			context.lineTo( x-20, y-9);
			context.lineTo( x-43.7, y+19);
			context.fill();
			context.stroke();		
	}
	else
	{
		    x=(fenjiedian[52-i]+fenjiedian[53-i])/2-50
	        y=295
		    context.fillStyle = "black";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[52-i], 310, fenjiedian[53-i]-fenjiedian[52-i], 5);
	}

	if (i<17)
	{ 
	        i=i+1
	}
	else if(i==17)
	{
		    i=i+19
	}
	else if(i<50)
	{
		    i=i+1 
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==5)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';   // 6DG的弯股
			x=810;
			y=189;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}
	
	// 当小车运行到4DG的下一个轨道区段时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==6)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';   // 4DG的弯股
			x1=930;
			y1=260;
			x2=978;
			y2=282;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
	}
	
	// 当小车运行到天津南站的1G时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==14)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';  //  1DG的弯股
			x=2310;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(2372, 190, 45, 5);  // 1DG的侧线股道
	}
	
	// 当小车运行到天津南站的2-8DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==16)
	{
		    context.fillStyle = "#848284";
			context.fillRect(2883, 190, 52, 5);  // 10DG的侧线股道
			 
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';      // 10DG的弯股
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}	
	
	// 当小车运行到天津南站的2-8DG的下一个轨道区段时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==17)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';   // 2-8DG的交叉渡线的一捺
			x1=3050;
			y1=260;
			x2=3122.5;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';   // 2-8DG的交叉渡线的一撇
			x1=3082;
			y1=289;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
	}
	
	
	if(i==38)
	{		
			context.fillStyle = "#848284";
			context.fillRect(3152, 250, fenjiedian[54-i]-3152, 5);
			context.fillRect(fenjiedian[53-i], 310, 3052-fenjiedian[53-i], 5);
			
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
			
			context.strokeStyle = '#FFF';
			context.beginPath();
			context.lineWidth = 2;
            context.moveTo( 3126,284);
			context.lineTo( 3119,294 );
			context.stroke();		
			
			// 将天津南站的2/4号道岔由反位转到定位(画黑块）
			context.fillStyle = "black";
			context.fillRect(3140, 255, 20, 7);  
			context.fillRect(3044, 303, 20, 7);  	
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[15], 250, 3140-fenjiedian[15], 5);  
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=3043;
			y1=312;
			x2=3162;
			y2=252;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.strokeStyle = '#FFF';
			context.beginPath();
			context.lineWidth = 2;
            context.moveTo( 3079,286);
			context.lineTo( 3085,296 );
			context.stroke();
	}
	
	if(i==39)
	{
			context.fillStyle = "#848284";
			context.fillRect(2883, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=2938;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
			
	if(i==41)
	{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';	
			x=2310;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(2372, 370, 45, 5);
	}					
	
	if(i==49)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=978;
			y1=282;
			x2=1025;
			y2=304;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
	}
	
	if(i==50)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 370, 57, 5);
			
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
		
	if (i==5)
	{
		    x=800;y=250
		    xiaxingxinhaojihongdeng3(x,y)		
	}
	
	if(i==12)
	{
			x=2320;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==13)
	{
			x=2320;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
     if(i==14)
	{
			x=2320;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==14)
	{
			x=2970;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(i==15)
	{			
	        x=2970;y=250
            xiaxingxinhaojihongdeng(x,y)
		
	}
	if(i==16)
	{			
	        x=2970;y=250
            xiaxingxinhaojihongdeng3(x,y)
		
	}
	
	if(i==36)
	{			
	      x=3193;y=250
            shangxingxinhaojilvdeng2(x,y)
		
	}
	if(i==37)
	{			
	       x=3193;y=250
           shangxingxinhaojihongdeng(x,y)
		
	}
	
	 if(i==39)
	{			
	       x=2390;y=340
           shangxingxinhaojilvdeng(x,y)
		
	}
	 if(i==39)
	{			
	       x=2970;y=310
            xiaxingxinhaojihongdeng3(x,y)
		
	}
	 if(i==40)
	{			
	       x=2390;y=340
           shangxingxinhaojihongdeng(x,y)
		
	}
	
	if(i==47)
	{			
	       x=1063;y=340
           shangxingxinhaojilvdeng2(x,y)
		
	}
	if(i==48)
	{			
	        x=1063;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	if (i<=17)
	{       
	        			
			// 当小车运行到北京南站的6DG时
			if(i==4)
			{
				context.fillStyle = "red";    // 将6DG的侧线轨道变红
				context.fillRect(753, 190, 57, 5);
				
				context.beginPath();
			    context.lineWidth = 5;
			    context.strokeStyle = 'red';    // 将6DG的弯道变红
			    x=810;
			    y=189;
			    k=50;
			    context.moveTo( x, y+6 ); // x+7,y-1
			    context.lineTo( x+k, y+6+k);
			    context.stroke();
			}
			
			// 当小车运行到北京南站的4DG时			
			if(i==5)
			{				
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';    // 将4DG的双动道岔变红
			x1=930;
			y1=260;
			x2=978;
			y2=282;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			}
			
			// 当小车运行到天津南站的3JG时，自动排列好通过进路
			if(i==12)
			{
		    context.fillStyle = "#FFF";  // 将正线上的股道变成白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+5]-fenjiedian[i], 5);
			
			// 将1号道岔的弯股变成白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=2310;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			// 将1号道岔的侧线股道变成白光带
			context.fillStyle = "#FFF";
			context.fillRect(2372, 190, 45, 5);			
			
			// 将10号道岔的弯股变成白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			// 将10号道岔的侧线股道变成白光带
			context.fillStyle = "#FFF";
			context.fillRect(2883, 190, 52, 5);
			
			//交叉渡线处变为白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3050;
			y1=260;
			x2=3122.5;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3082;
			y1=289;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			}
			
			// 当列车运行到天津南站的1DG时，将其所在的区段变为红光带
			if(i==13)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';   // 将1号道岔的弯股变成红光带
			x=2310;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";   // 将1号道岔的侧线股道变成红光带
			context.fillRect(2372, 190, 45, 5);		 
			}
			
			// 当列车运行到天津南站的10DG时，将其所在的区段变为红光带
			if(i==15)
			{
			context.fillStyle = "red";
			context.fillRect(2883, 190, 52, 5);   // 将10号道岔的侧线股道变成红光带
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';  // 将10号道岔的弯股变成红光带
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();		
			}
			
			// 当列车运行到天津南站的2-8DG时，将其所在的区段变为红光带
			if(i==16)
			{
			// 交叉渡线处变为红光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3050;
			y1=260;
			x2=3122.5;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3082;
			y1=289;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			}
			
			// 画小车
			x=(fenjiedian[i-1]+fenjiedian[i])/2-50
	        y=235
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);			
	}
	
	
	else if(i==36)
	{
		    x=(fenjiedian[52-i]+fenjiedian[53-i])/2-50
	        y=235
	 		
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[52-i],250, fenjiedian[53-i]-fenjiedian[52-i], 5);
		
		     // 当列车在天津南站的SF3JG开始折返时，将2/4双动道岔由定位转到反位
			context.fillStyle = "#FFF";  
			context.fillRect(3152, 250, fenjiedian[52-i]-3152, 5);
			context.fillRect(fenjiedian[49-i], 310, 3052-fenjiedian[49-i], 5);
			
			context.fillStyle = "black";  // 
			context.fillRect(3140,250, 12, 5);
			context.fillRect(3052,310, 12, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3050;
			y1=260;
			x2=3155;
			y2=303;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();			
			
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'black';
			x1=3050;
			y1=303;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3043;
			y1=312;
			x2=3162;
			y2=252;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			
			context.fillStyle = "#FFF";
			context.fillRect(2883, 370, 52, 5);
			
			// 绝缘节绘制
			context.strokeStyle = 'black';
			context.beginPath();
			context.lineWidth = 2;
            context.moveTo( 3079,286);
			context.lineTo( 3085,296);
			context.stroke();
			
			context.strokeStyle = '#FFF';  // 在天津南站的2/4渡线处画新的绝缘节
			context.beginPath();
			context.lineWidth = 2;
            context.moveTo( 3079,286);
			context.lineTo( 3085,296);
			context.stroke();	
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';	// 天津南站12号道岔处的弯股变为白光带	
			x=2938;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();		
	}
	
	else if(i==37)
	{		    
		
			context.fillStyle = "red";
			context.fillRect(3152, 250, fenjiedian[53-i]-3152, 5);
			context.fillRect(fenjiedian[52-i], 310, 3052-fenjiedian[52-i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3050;
			y1=260;
			x2=3155;
			y2=303;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();			
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3043;
			y1=312;
			x2=3162;
			y2=252;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();			
			
			// 画小车
			x=3102.5;y=260+43/2
			//context.save();
			context.fillStyle = "blue";

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+43.7, y-19); // x+7,y-1
			context.lineTo( x+33, y-36);
			context.lineTo( x-20, y-9);
			context.lineTo( x-43.7, y+19);
			context.fill();
			context.stroke();
	}
	
	else if(i==38)
	{
		    x=(fenjiedian[52-i]+fenjiedian[53-i])/2-50
	        y=295
	 		
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[52-i], 310, fenjiedian[53-i]-fenjiedian[52-i], 5);
		
			context.fillStyle = "red";
			context.fillRect(2883, 370, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=2938;
			y=372;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
	
	else if(i==39)
	{
		    x=(fenjiedian[52-i]+fenjiedian[53-i])/2-50
	        y=295
	 		
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[52-i], 310, fenjiedian[53-i]-fenjiedian[52-i], 5);
		
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[50-i], 310, fenjiedian[52-i]-fenjiedian[50-i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';	
			x=2310;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(2372, 370, 45, 5);
	}
	
	else if(i==40)
	{
		    x=(fenjiedian[52-i]+fenjiedian[53-i])/2-50
	        y=295
	 		
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[52-i], 310, fenjiedian[53-i]-fenjiedian[52-i], 5);
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';	
			x=2310;
			y=320;
			k=50;
			context.moveTo( x+10, y+1 ); // x+7,y-1
			context.lineTo( x+10+k, y+1+k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(2372, 370, 45, 5);
	}
	
	else if(i==47)
	{
		    x=(fenjiedian[52-i]+fenjiedian[53-i])/2-50
	        y=295
	 		
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[52-i], 310, fenjiedian[53-i]-fenjiedian[52-i], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[49-i], 310, fenjiedian[52-i]-fenjiedian[49-i], 5);
			context.fillRect(753, 370, 57, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			
			x=810;
			y=371;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			
			//长侧轨道白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=978;
			y1=282;
			x2=1025;
			y2=304;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
	}
	
	else if(i==48)
	{
	       			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=978;
			y1=282;
			x2=1025;
			y2=304;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			// 画小车
			x=(fenjiedian[52-i]+fenjiedian[53-i])/2-50
	        y=295
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[52-i], 310, fenjiedian[53-i]-fenjiedian[52-i], 5);
                              
	}
		
	else if(i==49)
	{
	        x=(fenjiedian[52-i]+fenjiedian[53-i])/2-50
	        y=295
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(753, 370, 57, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=810;
			y=371;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[52-i], 310, fenjiedian[53-i]-fenjiedian[52-i], 5);
			
	}
		
	else
	{
			x=(fenjiedian[52-i]+fenjiedian[53-i])/2-50
	        y=295
	 		
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x+30, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+30, y ); // x+7,y-1
			context.lineTo( x+30, y+15);
			context.lineTo( x, y+15);
			context.lineTo( x+30, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[52-i], 310, fenjiedian[53-i]-fenjiedian[52-i], 5);			
	}
			//context.restore();
			
			/*			//闭塞分区标志
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
			*/
}
 

//下行行车越行场景

function xiaxingxingcheyuexingchangjing()
{
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	//小车出清闭塞分区，填充黑色，还原//
	if(i==3)  // 此时列车在北京南站的1G
	{       
	        x=490;y=235
		    context.fillStyle = "black";
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			context.fillStyle ="#848284"; 
			context.fillRect(zhongjianzhan_cexiantingche[i-1], 250, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
			x=800;y=250
            xiaxingxinhaojihongdeng(x,y)
			
			// 北京南站的6DG弯股恢复灰色----
			//fenge
			context.beginPath();
			context.lineWidth =5;
			context.strokeStyle = '#848284';
			x=810;
			y=190;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}
	
	if(i==13)
	{
	        context.fillStyle = '#848284';
	        context.fillRect(fenjiedian[i-1], 250, 42, 5);
			context.fillRect(2328, 250, fenjiedian[i]-2328, 5);
	        /* context.fillRect(2372, 190, 45, 5);
	        context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ='#848284';
	        x=2310;
	        y=245;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+10+k, y-1-k);
	        context.stroke();  */
	
	        //消除侧线上的小车
	        x=2345;y=222
			context.fillStyle = "black";
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x-25, y+25); // 起点
			context.lineTo( x+25, y-25);
			context.lineTo( x+1, y-20);
			context.lineTo( x-36, y+17);
			context.fill();
			context.stroke();
			
			//使第二个黄灯灯位灭灯
			x=2320;y=250
			context.beginPath();
			context.strokeStyle ='black';
			context.lineWidth = 2;
            context.arc(x-18,y-13,6,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke();
	
    }
    else if(i==14)
    {
	        context.fillStyle = '#848284';
	        context.fillRect(2417, 190, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
	
	         x=(zhongjianzhan_cexiantingche[i-1]+zhongjianzhan_cexiantingche[i])/2-50
	        y=175
	        context.fillStyle = "black";
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";	
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();	
     }

     else if(i==15)
	 {
	        context.fillStyle = '#848284';
	        context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
	        /* context.fillRect(2883, 190, 45, 5);
	        context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ='#848284';
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke(); */
			
			 //消除侧线上的小车
	        x=2938;y=190
			context.fillStyle = "black";
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+40, y+20);
			context.lineTo( x+10, y-10);
			context.fill();
			context.stroke();
    }
	
	else
	{
	        x=(zhongjianzhan_cexiantingche[i-1]+zhongjianzhan_cexiantingche[i])/2-50
	        y=235
		    context.fillStyle = "black";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(zhongjianzhan_cexiantingche[i-1], 250, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
	}

	if (i<54)            
	{   
	    if(i==14 && j<19)     //控制第一辆车侧线停车
		{
		      i=i 
		}
		else 
		{
			  i=i+1
		}
	}
	
	//小车通过后向侧股道填充灰色，刷新//
	if(i==5)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 190, 57, 5);
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=810;
			y=189;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}
	
	if(i==6)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=930;
			y1=260;
			x2=978;
			y2=282;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
	}
	
	//画第二辆小车
	if(i==8)
	{
		    j=2
	        m=(zhongdianzhan_cexiantingche[j-1]+zhongdianzhan_cexiantingche[j])/2-50
	        n=235

			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(m, n, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( m+60, n ); // x+7,y-1
			context.lineTo( m+60, n+15);
			context.lineTo( m+90, n+15);
			context.lineTo( m+60, n);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
			m=800;n=250
             xiaxingxinhaojilvdeng2(m,n)
			 
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+4]-zhongdianzhan_cexiantingche[j], 5);
		    context.fillRect(753, 190, 57, 5);
				
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=810;
			y=189;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=930;
			y1=260;
			x2=978;
			y2=282;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
    }		
	
	if(i==14)
	{
            context.fillStyle = "#848284";
	        //context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);			
	        context.fillRect(2372, 190, 45, 5);
			context.fillRect(fenjiedian[12], 250, 42, 5);  // 画短灰线
			
			/* context.fillStyle = "black";
			context.fillRect(2316, 250, 12, 5);  */  // 将天津南站的1号道岔由定位转到反位(画黑块)
			
	        context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#848284";      // 将天津南站的1DG的弯股变为反位通过
	        x=2303;
	        y=252;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();
	}
	
	if(i==16)
	{
            context.fillStyle = "#848284";
	        /* context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);	*/		
	        context.fillRect(2883, 190, 52, 5);
			
			context.fillStyle = "black";
			context.fillRect(2985, 243, 11, 7);  // 将天津南站的10号道岔由反位转到定位(画黑块）
			
	        context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#848284";
	        x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}
	
	if(i==17)
	{
		    //交叉渡线处
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=3050;
			y1=260;
			x2=3122.5;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=3082;
			y1=289;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
	}
	
	if(i==24)
	{
		    context.fillStyle = "#848284";
			context.fillRect(4333, 190, 45, 5);
			
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	if(i==26)
	{
		    context.fillStyle = "#848284";
			context.fillRect(4844, 190, 52, 5);
		    
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
	
	if(i==34)
	{
		    context.fillStyle = "#848284";
			context.fillRect(6274, 190, 45, 5);
		    
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	if(i==36)
	{
		    context.fillStyle = "#848284";
			context.fillRect(6785, 190, 52, 5);
		    
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

    if(i==44)
	{ 
	        context.fillStyle = "#848284";
			context.fillRect(8215, 190, 45, 5);
			
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=8153;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	if(i==46)
	{
		    context.fillStyle = "#848284";
			context.fillRect(8726, 190, 52, 5);
		    
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
    
	if(i==53)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=9985;
			y1=282;
			x2=10033;
			y2=261;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
	}
	if(i==54)
	{
		    context.fillStyle = "#848284";
			context.fillRect(10145, 190, 45, 5);
		     
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=10083;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
			

    //根据车的位置改变信号灯//	
    //车走后刷新XI灯
	if (i==5)
	{
		    x=800;y=250
		    xiaxingxinhaojihongdeng3(x,y)		
	}
	
	
	
	if(i==12)
	{
			x=2320;y=250           
			xiaxingxinhaojiUUdeng(x,y)
	}
	if(i==13)
	{
			x=2320;y=250
            xiaxingxinhaojihongdeng(x,y)
			
			context.beginPath();
			context.strokeStyle ='black';
			//context.lineWidth = 2;
            context.arc(x-17,y-13,5,0,2*Math.PI);
            context.fillStyle="#black";
            context.fill();
            context.stroke();
			//第二个黄灯
			context.beginPath();
			context.strokeStyle = 'black';
            context.arc(x-17,y-13,5,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke(); 
	}
   
	if(i==14&&j==9)
	{
		x=2320;y=250
        xiaxingxinhaojihongdeng3(x,y)
	} 
	
	if(i==14)
	{     
	     if(j==18)  // 当第一辆车在天津南站的侧线，第二辆车在天津南站的X3LQ区段时，天津南站的X3出站信号机亮绿灯
		{
				x=2930;y=190
				xiaxingxinhaojilvdeng(x,y)
		}
		else  //  否则，天津南站的X3出站信号机一直亮红灯
		{
			    x=2930;y=190
                xiaxingxinhaojihongdeng3(x,y)
		}	
	}
	 
	if(i==15)
	{			
	        x=2930;y=190
            xiaxingxinhaojihongdeng(x,y)
		
	}
   	//经过济南西站时
	if(i==22)
	{
			x=4281;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==23)
	{
			x=4281;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(i==24)
	{
			x=4281;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==24)
	{
			x=4931;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(i==25)
	{			
	        x=4931;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
	if(i==26)
	{			
	        x=4931;y=250
            xiaxingxinhaojihongdeng3(x,y)	
	}
	
	//经过南京南站时
	if(i==32)
	{
			x=6222;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==33)
	{
			x=6222;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(i==34)
	{
		    x=6222;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==34)
	{
		    x=6872;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(i==35)
	{			
	        x=6872;y=250
            xiaxingxinhaojihongdeng(x,y)	
	}
	if(i==36)
	{			
	        x=6872;y=250
            xiaxingxinhaojihongdeng3(x,y)	
	}
	
	//经过苏州北站时
	if(i==42)
	{
			x=8163;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==43)
	{
			x=8163;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(i==44)
	{
			x=8163;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==44)
	{
			x=8813;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(i==45)
	{			
	        x=8813;y=250
            xiaxingxinhaojihongdeng(x,y)	
	}
	if(i==46)
	{			
	        x=8813;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	//经过上海虹桥站
	if(i==51)
	{
			x=9959;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==52)
	{			
	        x=9959;y=250
            xiaxingxinhaojihongdeng(x,y)
		
	}
	if(i==53)
	{			
	        x=9959;y=250
            xiaxingxinhaojihongdeng3(x,y)
		
	}
	
    //小车行车显示//
    if(i==10)
    {
	        x=(zhongjianzhan_cexiantingche[i-1]+zhongjianzhan_cexiantingche[i])/2-50
	        y=235
	 	
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(zhongjianzhan_cexiantingche[i-1], 250, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
}

    if(i==11)
    {
	        x=(zhongjianzhan_cexiantingche[i-1]+zhongjianzhan_cexiantingche[i])/2-50
	        y=235
	 	
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(zhongjianzhan_cexiantingche[i-1], 250, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
}
	
    if(i==12)  // 当第一辆车运行到天津南站的X1JG时，排列经3G侧线进站的接车进路
    {
	        x=(zhongjianzhan_cexiantingche[i-1]+zhongjianzhan_cexiantingche[i])/2-50
	        y=235
	 	
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(zhongjianzhan_cexiantingche[i-1], 250, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[i], 250, 42, 5);  // 将天津南站的1DG的直股变为白光带(已将将道岔的定位扳到反位）-----------
			context.fillRect(2372, 190, 45, 5);
			context.fillRect(2417, 190, zhongjianzhan_cexiantingche[i+2]-zhongjianzhan_cexiantingche[i+1], 5);
			
			context.fillStyle = "black";
			context.fillRect(2316, 250, 12, 5);  // 将天津南站的1号道岔由定位转到反位(画黑块)
			
			/*context.fillStyle = "#848284";
			context.fillRect(fenjiedian[i+1], 250, fenjiedian[i+2]-fenjiedian[i+1], 5);*/
			
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#FFF";   // 将天津南站的1DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------
	        x=2303;
	        y=252;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();
    }	
	
    if(i==13)
	{
	       context.fillStyle = "red";
	       context.fillRect(fenjiedian[i-1], 250, 42, 5);  // 将天津南站的1DG的直股变为红光带(已将将道岔的定位扳到反位）-----------
	       context.fillRect(2372, 190, 45, 5);
		   
	       context.beginPath();
	       context.lineWidth = 5;
           context.strokeStyle ="red";   // 将天津南站的1DG的弯股变为红光带(已将将道岔的定位扳到反位）-----------
	       x=2303;
	       y=252;
	       k=50;
	       context.moveTo( x+10, y-1 ); // x+7,y-1
	       context.lineTo( x+17+k, y-9-k);
	       context.stroke();
		   
	       //画侧线上的小车
	        x=2345;y=222
			context.fillStyle = "blue";

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x-25, y+25); // 起点
			context.lineTo( x+25, y-25);
			context.lineTo( x+1, y-20);
			context.lineTo( x-36, y+17);
			context.fill();
			context.stroke();
	
     }
     if(i==14)
     {
	    if(j==18)  // 当第二辆车运行到天津南站的X3LQ区段时，即可排列第一辆车的侧线发车进路
	    {   
		    context.fillStyle = "red";
	        context.fillRect(zhongjianzhan_cexiantingche[i-1], 190, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
	
	         x=(zhongjianzhan_cexiantingche[i-1]+zhongjianzhan_cexiantingche[i])/2-50
	        y=175
	        context.fillStyle = "blue";
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[i+1], 250, fenjiedian[i+3]-fenjiedian[i+1], 5);  
			context.fillRect(2990, 250, 35, 5);    // 将天津南站的10DG的直股变为白光带（已将10号道岔从定位转到反位)
			context.fillRect(2883, 190, 52, 5);
			
			context.fillStyle = "black";
			context.fillRect(2978, 250, 12, 5);  // 将天津南站的10号道岔由定位转到反位(画黑块)
			
	        context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="#FFF";  // 将天津南站的10DG的弯股变为白光带（已将10号道岔从定位转到反位)
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();
			
			//交叉渡线处
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3050;
			y1=260;
			x2=3122.5;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3082;
			y1=289;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
       }
	   else
	   {
	        context.fillStyle = "red";
	        context.fillRect(2417, 190, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
	     
	        x=(zhongjianzhan_cexiantingche[i-1]+zhongjianzhan_cexiantingche[i])/2-50
	        y=175
	        context.fillStyle = "blue";
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
	   }	
    }


    else if(i==15)
	{
	
	        context.fillStyle = "red";
	        context.fillRect(2990, 250, 35, 5);  // 将天津南站的10DG的直股变为红光带（已将将10号道岔从定位转到反位)
	        context.fillRect(2883, 190, 52, 5);
			
	        context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="red";
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();
			
			// 当第一辆车从天津南站的侧线发车后，将3G恢复灰色？？？
	        context.fillStyle =  '#848284';
	        context.fillRect(2417, 190, zhongjianzhan_cexiantingche[14]-zhongjianzhan_cexiantingche[13], 5);
	       //画侧线上的小车
	        x=2938;y=190
			context.fillStyle = "blue";
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+40, y+20);
			context.lineTo( x+10, y-10);
			context.fill();
			context.stroke();	
	
     }

     else if(i<10||(i>15&&i<52))
     {	        
			
			if(i==4)
			{
				context.fillStyle = "red";
				context.fillRect(753, 190, 57, 5);
				
				context.beginPath();
			    context.lineWidth = 5;
			    context.strokeStyle = 'red';
			    x=810;
			    y=189;
			    k=50;
			    context.moveTo( x, y+6 ); // x+7,y-1
			    context.lineTo( x+k, y+6+k);
			    context.stroke();
			}
			
			if(i==5)
			{				
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=930;
			y1=260;
			x2=978;
			y2=282;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			}
			
			if(i==16)
            {
	        //交叉渡线处
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3050;
			y1=260;
			x2=3122.5;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3082;
			y1=289;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
            }


			if(i==22)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongjianzhan_cexiantingche[i], 250, zhongjianzhan_cexiantingche[i+2]-zhongjianzhan_cexiantingche[i], 5);	
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(4333, 190, 45, 5); 
			}
			
			if(i==23)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(4333, 190, 45, 5); 
			}
			
			if(i==24)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongjianzhan_cexiantingche[i], 250, zhongjianzhan_cexiantingche[i+2]-zhongjianzhan_cexiantingche[i], 5);	
			
			context.fillStyle = "#FFF";
			context.fillRect(4844, 190, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=4899;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			}
			
			if(i==25)
			{
			context.fillStyle = "red";
			context.fillRect(4844, 190, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=4899;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			}
			
			if(i==32)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongjianzhan_cexiantingche[i], 250, zhongjianzhan_cexiantingche[i+2]-zhongjianzhan_cexiantingche[i], 5);	
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(6274, 190, 45, 5); 
			}
			
			if(i==33)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(6274, 190, 45, 5); 
			}
			
			if(i==34)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongjianzhan_cexiantingche[i], 250, zhongjianzhan_cexiantingche[i+2]-zhongjianzhan_cexiantingche[i], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(6785, 190, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=6840;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			}
			
			if(i==35)
			{
			context.fillStyle = "red";
			context.fillRect(6785, 190, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=6840;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			}
			
			if(i==42)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongjianzhan_cexiantingche[i], 250, zhongjianzhan_cexiantingche[i+2]-zhongjianzhan_cexiantingche[i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=8153
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(8215, 190, 45, 5); 
			}
			
			if(i==43)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=8153
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(8215, 190, 45, 5); 
			}
			
			if(i==44)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongjianzhan_cexiantingche[i], 250, zhongjianzhan_cexiantingche[i+2]-zhongjianzhan_cexiantingche[i], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(8726, 190, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=8781;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			}
			
			if(i==45)
			{
			context.fillStyle = "red";
			context.fillRect(8726, 190, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=8781;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			}
			
			if(i==51)
			{			
			
			context.fillStyle = "#FFF";
			context.fillRect(zhongjianzhan_cexiantingche[i], 250, zhongjianzhan_cexiantingche[i+3]-zhongjianzhan_cexiantingche[i], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(10145, 190, 45, 5);
			
			context.fillStyle = "black";
			context.fillRect(10085, 243, 10, 7);  // 在上海虹桥站的5号道岔处画一个小黑块，实现5号道岔由反位转到定位
		     
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=10083;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=9985;
			y1=282;
			x2=10033;
			y2=261;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			}	
			
			// 画小车
			x=(zhongjianzhan_cexiantingche[i-1]+zhongjianzhan_cexiantingche[i])/2-50
	        y=235
	 	
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(zhongjianzhan_cexiantingche[i-1], 250, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);	
    }

    else if(i==52)
    {
	        x=(zhongjianzhan_cexiantingche[i-1]+zhongjianzhan_cexiantingche[i])/2-50
	        y=235
	 	
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(zhongjianzhan_cexiantingche[i-1], 250, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
			
			//双动道岔区段红光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=9985;
			y1=282;
			x2=10033;
			y2=261;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.fillStyle = "#FFF";
	 		context.fillRect(zhongjianzhan_cexiantingche[i], 250, zhongjianzhan_cexiantingche[i+2]-zhongjianzhan_cexiantingche[i], 5);
     }

     else if(i==53)
     {
	        			
			context.fillStyle = "red";
			context.fillRect(zhongjianzhan_cexiantingche[i-1], 250, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
			context.fillRect(10145, 190, 45, 5);
		     
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=10083;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(zhongjianzhan_cexiantingche[i], 250, zhongjianzhan_cexiantingche[i+1]-zhongjianzhan_cexiantingche[i], 5);
			
			// 画小车
			x=(zhongjianzhan_cexiantingche[i-1]+zhongjianzhan_cexiantingche[i])/2-50
	        y=235
	 	
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+60, y ); // x+7,y-1
			context.lineTo( x+60, y+15);
			context.lineTo( x+90, y+15);
			context.lineTo( x+60, y);
			context.fill();
			context.stroke();
     }

     else if(i==54)
     {
	        x=(zhongjianzhan_cexiantingche[i-1]+zhongjianzhan_cexiantingche[i])/2-50
	        y=235
	 	
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 60, 15);
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
			context.fillRect(zhongjianzhan_cexiantingche[i-1], 250, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);			
}
			
			
//第二辆车设置//	
	
				
	//在第一个闭塞分区内，即站内
	
	if(j==3)
	{       m=490;n=235
		    context.fillStyle = "black";
            
		    context.fillRect(m, n, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( m+60, n ); // x+7,y-1
			context.lineTo( m+60, n+15);
			context.lineTo( m+90, n+15);
			context.lineTo( m+60, n);
			context.fill();
			context.stroke();
			
			context.fillStyle ="#848284"; //'yellow';
			context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
			m=800;n=250
            xiaxingxinhaojihongdeng(m,n)
			
			//fenge
			/* context.beginPath();
			context.lineWidth =5;
			context.strokeStyle = '#848284';
			m=810;
			n=189;
			k=50;
			context.moveTo( m, n+6 ); // x+7,y-1
			context.lineTo( m+k, n+6+k);
			context.stroke(); */

			

	}
	if(j==52)  // 第二列车在上海虹桥站的X3JG下一个区段
	{
		    m=(zhongdianzhan_cexiantingche[j-1]+zhongdianzhan_cexiantingche[j])/2-50
	        n=235
		    context.fillStyle = "black";          
		    context.fillRect(m, n, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( m+60, n ); // x+7,y-1
			context.lineTo( m+60, n+15);
			context.lineTo( m+90, n+15);
			context.lineTo( m+60, n);
			context.fill();
			context.stroke();
			
			//使该位置的第二个黄灯灯位灭灯
			x=9959;y=250
			context.beginPath();
			context.strokeStyle ='black';
			context.lineWidth = 2;
            context.arc(x-18,y-13,6,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);		
	}
	else if(j==53)
	{			
	        context.fillStyle = '#848284';
	        context.fillRect(fenjiedian[j-1], 250, fenjiedian[j]-fenjiedian[j-1], 5);
	        /* context.fillRect(10145, 190, 45, 5);
	        context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ='#848284';
			m=10083;
			n=245;
			k=50;
			context.moveTo( m+10, n-1 ); // x+7,y-1
			context.lineTo( m+10+k, n-1-k);
			context.stroke();  */
			
			 //消除侧线上的小车
	        m=10118;n=222
			context.fillStyle = "black";
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( m-25, n+25); // 起点
			context.lineTo( m+25, n-25);
			context.lineTo( m+1, n-20);
			context.lineTo( m-36, n+17);
			context.fill();
			context.stroke();
	}
	 else if(j==54)
	{			
	        context.fillStyle = '#848284';   //第54号闭塞刷新
	        context.fillRect(zhongdianzhan_cexiantingche[j-1], 190, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
	
	        m=(zhongdianzhan_cexiantingche[j-1]+zhongdianzhan_cexiantingche[j])/2-50
	        n=175
	        context.fillStyle = 'black';
		    context.fillRect(m, n, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( m+60, n ); // x+7,y-1
			context.lineTo( m+60, n+15);
			context.lineTo( m+90, n+15);
			context.lineTo( m+60, n);
			context.fill();
			context.stroke(); 	
	}
	else if(j==55)
	{			
	        context.fillStyle = '#848284';
	        context.fillRect(zhongdianzhan_cexiantingche[j-1], 190, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
	
	        m=(zhongdianzhan_cexiantingche[j-1]+zhongdianzhan_cexiantingche[j])/2-50
	        n=175
	        context.fillStyle = 'black';
		    context.fillRect(m, n, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( m+60, n ); // x+7,y-1
			context.lineTo( m+60, n+15);
			context.lineTo( m+90, n+15);
			context.lineTo( m+60, n);
			context.fill();
			context.stroke();      		
	}
	//车在其他闭塞分区内
	else
	{

	        m=(zhongdianzhan_cexiantingche[j-1]+zhongdianzhan_cexiantingche[j])/2-50
	        n=235
		    context.fillStyle = "black";
            
		    context.fillRect(m, n, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( m+60, n ); // x+7,y-1
			context.lineTo( m+60, n+15);
			context.lineTo( m+90, n+15);
			context.lineTo( m+60, n);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);		
	}		


	if (j<55)
	{ 
	        j=j+1
	}
	
	
	/*if(j==3)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=195;
			y=248;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	} */
	
	if(j==5)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 190, 57, 5);
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=810;
			y=189;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}
	
	if(j==6)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=930;
			y1=260;
			x2=978;
			y2=282;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
	}
	
	if(j==14)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=2310;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(2372, 190, 45, 5);
	}
	
	if(j==16)
	{
		    context.fillStyle = "#848284";
			context.fillRect(2883, 190, 52, 5);
			 
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
	
	if(j==17)
	{
		    //交叉渡线处
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=3050;
			y1=260;
			x2=3122.5;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=3082;
			y1=289;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
	}
	if(j==24)
	{
		    context.fillStyle = "#848284";
			context.fillRect(4333, 190, 45, 5);
			
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	if(j==26)
	{
		    context.fillStyle = "#848284";
			context.fillRect(4844, 190, 52, 5);
		    
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
	
	if(j==34)
	{
		    context.fillStyle = "#848284";
			context.fillRect(6274, 190, 45, 5);
		    
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	if(j==36)
	{
		    context.fillStyle = "#848284";
			context.fillRect(6785, 190, 52, 5);
		    
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

    if(j==44)
	{ 
	        context.fillStyle = "#848284";
			context.fillRect(8215, 190, 45, 5);
			
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=8153;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	if(j==46)
	{
		    context.fillStyle = "#848284";
			context.fillRect(8726, 190, 52, 5);
		    
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
	
	if(j==53)
	{
	        context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x1=9985;
			y1=282;
			x2=10033;
			y2=261;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
	}
	
	if(j==54)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';  // 当第二辆列车进入上海虹桥站的9DG时，将5DG的弯股变成灰色（注意此时，应将5号道岔从定位转为反位)
			x=10076;
			y=252;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+17+k, y-9-k);
			context.stroke();
						
			context.fillStyle = "#848284";			
			context.fillRect(10145, 190, 45, 5);  // 5DG侧线股道
			
			context.fillStyle = "black";
			context.fillRect(10089, 250, 12, 5);  // 将上海虹桥站的5号道岔由定位转到反位(画黑块）
			
	}
	
	if(j==55)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
		    x=10213;
			y=187;
			k=50;
			context.moveTo( x+40, y-3 ); // x+7,y-1
			context.lineTo( x+40+k, y-3-k);
			context.stroke();
						
			context.fillStyle = "#848284";			
			context.fillRect(10305, 130, 35, 5);  // 9DG侧线股道
			context.fillRect(zhongdianzhan_cexiantingche[j-2], 190, zhongdianzhan_cexiantingche[j-1]-zhongdianzhan_cexiantingche[j-2], 5);  // 9DG侧线股道
			
			xieshuzi(10243,180,'9')
	}

//车走后刷新XI灯
	if (j==5)
	{
		    m=800;n=250
		    xiaxingxinhaojihongdeng3(m,n)		
	}
	
	
	//经过天津南站时
	if(j==12)
	{
			m=2320;n=250           
			xiaxingxinhaojilvdeng2(m,n)
			
	}
	if(j==13)
	{
			m=2320;n=250
            xiaxingxinhaojihongdeng(m,n)
	}
    if(j==14)
	{
			m=2320;n=250
            xiaxingxinhaojihongdeng3(m,n)
	}
	
	
	if(j==14)
	{
			m=2970;n=250
            xiaxingxinhaojilvdeng(m,n)
	}
	
    if(j==15)
	{			
	        m=2970;n=250
            xiaxingxinhaojihongdeng(m,n)	
	}
	if(j==16)
	{			
	        m=2970;n=250
            xiaxingxinhaojihongdeng3(m,n)		
	}
	
	//经过济南南站时
	if(j==22)
	{
			x=4281;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(j==23)
	{
			x=4281;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(j==24)
	{
			x=4281;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(j==24)
	{
			x=4931;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(j==25)
	{			
	        x=4931;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
	if(j==26)
	{			
	        x=4931;y=250
            xiaxingxinhaojihongdeng3(x,y)	
	}
	
	//经过南京南站时
	if(j==32)
	{
			x=6222;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(j==33)
	{
			x=6222;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(j==34)
	{
		    x=6222;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(j==34)
	{
		    x=6872;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(j==35)
	{			
	        x=6872;y=250
            xiaxingxinhaojihongdeng(x,y)	
	}
	if(j==36)
	{			
	        x=6872;y=250
            xiaxingxinhaojihongdeng3(x,y)	
	}
	
	//经过苏州北站时
	if(j==42)
	{
			x=8163;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(j==43)
	{
			x=8163;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(j==44)
	{
			x=8163;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(j==44)
	{
			x=8813;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(j==45)
	{			
	        x=8813;y=250
            xiaxingxinhaojihongdeng(x,y)	
	}
	if(j==46)
	{			
	        x=8813;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	//经过上海虹桥站
	if(j==51)
	{
			m=9959;n=250
            xiaxingxinhaojiUUdeng(m,n)
	}
	if(j==52)
	{			
	        m=9959;n=250
            xiaxingxinhaojihongdeng(m,n)
		
	}
	
	if(j==50)
	{
		    m=(zhongdianzhan_cexiantingche[j-1]+zhongdianzhan_cexiantingche[j])/2-50
	        n=235
	 

			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(m, n, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( m+60, n ); // x+7,y-1
			context.lineTo( m+60, n+15);
			context.lineTo( m+90, n+15);
			context.lineTo( m+60,n);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
	}
	
	if(j==51)
	{
		    m=(zhongdianzhan_cexiantingche[j-1]+zhongdianzhan_cexiantingche[j])/2-50
	        n=235

			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(m, n, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( m+60, n ); // x+7,y-1
			context.lineTo( m+60, n+15);
			context.lineTo( m+90, n+15);
			context.lineTo( m+60,n);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
			
			//加白光带
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=9985;
			y1=282;
			x2=10033;
			y2=261;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, 10089-zhongdianzhan_cexiantingche[j], 5);   // 将上海虹桥站的5DG的直股变成白光带（注意此时应将5号道岔由定位转到反位）--------
			context.fillRect(10145, 190, 45, 5);
			context.fillRect(10305, 130, 35, 5);  
			context.fillRect(zhongdianzhan_cexiantingche[j+2], 190, zhongdianzhan_cexiantingche[j+4]-zhongdianzhan_cexiantingche[j+2], 5);
			
			context.fillStyle = "black";   // 将上海虹桥站的5DG的直股画一个小黑块（注意此时应将5号道岔由定位转到反位）--------
			context.fillRect(10089, 250, 12, 5);   
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = "#FFF";  // 将上海虹桥站的5DG的弯股变成白光带（注意此时应将5号道岔由定位转到反位）--------
			m=10076;
			n=252;
			k=50;
			context.moveTo( m+10, n-1 ); // x+7,y-1
			context.lineTo( m+17+k, n-9-k);
			context.stroke();  
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
		    x=10213;
			y=187;
			k=50;
			context.moveTo( x+40, y-3 ); // x+7,y-1
			context.lineTo( x+40+k, y-3-k);
			context.stroke();
	}
	
	if(j==52)
	{		   			
			//双动道岔处红光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=9985;
			y1=282;
			x2=10033;
			y2=261;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j+1], 190, zhongdianzhan_cexiantingche[j+3]-zhongdianzhan_cexiantingche[j+1], 5);
			
			// 画小车
			m=(zhongdianzhan_cexiantingche[j-1]+zhongdianzhan_cexiantingche[j])/2-50
	        n=235
			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(m, n, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( m+60, n ); // x+7,y-1
			context.lineTo( m+60, n+15);
			context.lineTo( m+90, n+15);
			context.lineTo( m+60,n);
			context.fill();
			context.stroke();
			
			/*context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = "#FFF";
			m=10083;
			n=248;
			k=50;
			context.moveTo( m+10, n-1 ); // x+7,y-1
			context.lineTo( m+10+k, n-1-k);
			context.stroke();  */
	}
	
	if(j==53)
	{			
	        context.fillStyle = "red";
	        context.fillRect(fenjiedian[j-1], 250, 10089-fenjiedian[j-1], 5);
	        context.fillRect(10145, 190, 45, 5);
			
	        context.beginPath();
			context.lineWidth = 5;  // 将上海虹桥站的5DG的弯股变成红光带（注意此时应将5号道岔的定位转为反位）
			context.strokeStyle = "red";
			m=10076;
			n=252;
			k=50;
			context.moveTo( m+10, n-1 ); // x+7,y-1
			context.lineTo( m+17+k, n-9-k);
			context.stroke();  
			
			//画侧线上的小车
	        m=10118;n=222
			context.fillStyle = "blue";
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( m-25, n+25); // 起点
			context.lineTo( m+25, n-25);
			context.lineTo( m+1, n-20);
			context.lineTo( m-36, n+17);
			context.fill();
			context.stroke(); 
		
	}
	
	else if(j==54)
	{			
	        context.fillStyle = "red";
	        context.fillRect(zhongdianzhan_cexiantingche[j-1], 190, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
		    context.fillRect(10305, 130, 35, 5); 	       
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
		    x=10213;
			y=187;
			k=50;
			context.moveTo( x+40, y-3 ); // x+7,y-1
			context.lineTo( x+40+k, y-3-k);
			context.stroke();
			
			// 画小车
			m=(zhongdianzhan_cexiantingche[j-1]+zhongdianzhan_cexiantingche[j])/2-50
	        n=175
	        context.fillStyle = "blue";
		    context.fillRect(m, n, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( m+60, n ); // x+7,y-1
			context.lineTo( m+60, n+15);
			context.lineTo( m+90, n+15);
			context.lineTo( m+60, n);
			context.fill();
			context.stroke();   
		
	}
	else if(j==55)
	{			
	        context.fillStyle = "red";
	        context.fillRect(zhongdianzhan_cexiantingche[j-1], 190, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
		    context.fillStyle = "#848284";
		    context.fillRect(10305, 130, 35, 5);
	
	        m=(zhongdianzhan_cexiantingche[j-1]+zhongdianzhan_cexiantingche[j])/2-50
	        n=175
	        context.fillStyle = "blue";
		    context.fillRect(m, n, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( m+60, n ); // x+7,y-1
			context.lineTo( m+60, n+15);
			context.lineTo( m+90, n+15);
			context.lineTo( m+60, n);
			context.fill();
			context.stroke();      
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
		    x=10213;
			y=187;
			k=50;
			context.moveTo( x+40, y-3 ); // x+7,y-1
			context.lineTo( x+40+k, y-3-k);
			context.stroke();
	}
	
	if(j<51)
	{	       			
			if(j==4)
			{
				context.fillStyle = "red";
				context.fillRect(753, 190, 57, 5);
				
				context.beginPath();
			    context.lineWidth = 5;
			    context.strokeStyle = 'red';
			    x=810;
			    y=189;
			    k=50;
			    context.moveTo( x, y+6 ); // x+7,y-1
			    context.lineTo( x+k, y+6+k);
			    context.stroke();
			}
			
			if(j==5)
			{				
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=930;
			y1=260;
			x2=978;
			y2=282;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			}
			
			if(j==12)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+5]-zhongdianzhan_cexiantingche[j], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=2310;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(2372, 190, 45, 5);
			
			context.fillStyle = "black";
			context.fillRect(2312, 243, 10, 7);  // 将天津南站的1号道岔由反位转到定位(画黑块）
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(2883, 190, 52, 5);
			
			//交叉渡线处
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3050;
			y1=260;
			x2=3122.5;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x1=3082;
			y1=289;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			}
			
			if(j==13)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=2310;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(2372, 190, 45, 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+1]-zhongdianzhan_cexiantingche[j], 5);
			}
			
			if(j==15)
			{
			context.fillStyle = "red";
			context.fillRect(2883, 190, 52, 5);
			
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();			
			
			}
			
			if(j==16)
			{
			//交叉渡线处
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3050;
			y1=260;
			x2=3122.5;
			y2=289;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x1=3082;
			y1=289;
			x2=3155;
			y2=260;
			context.moveTo( x1, y1 ); // x+7,y-1
			context.lineTo( x2, y2);
			context.stroke();	
			}
			
			if(j==22)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+4]-zhongdianzhan_cexiantingche[j], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(4333, 190, 45, 5);
						
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=4899;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(4844, 190, 52, 5);
			}
			
			if(j==23)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(4333, 190, 45, 5);
			}
			
			if(j==25)
			{
			context.fillStyle = "red";
			context.fillRect(4844, 190, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=4899;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			}
			
			
			if(j==32)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+4]-zhongdianzhan_cexiantingche[j], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(6274, 190, 45, 5);
						
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=6840;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(6785, 190, 52, 5);
			}
			
			if(j==33)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(6274, 190, 45, 5); 
			}
			
			if(j==35)
			{
			context.fillStyle = "red";
			context.fillRect(6785, 190, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=6840;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			}
			
			
			if(j==42)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+4]-zhongdianzhan_cexiantingche[j], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=8153
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(8215, 190, 45, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=8781;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";
			context.fillRect(8726, 190, 52, 5);
			}
			
			if(j==43)
			{
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=8153
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(8215, 190, 45, 5);
			}
			
			if(j==45)
			{
			context.fillStyle = "red";
			context.fillRect(8726, 190, 52, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=8781;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			}
			
			if(j>14)
			{
				context.fillStyle = "black";
			    context.fillRect(2312, 243, 10, 7);  // 将天津南站的1号道岔由反位转到定位(画黑块）
			}
			// 画小车
			m=(zhongdianzhan_cexiantingche[j-1]+zhongdianzhan_cexiantingche[j])/2-50
	        n=235
	 			
			//context.save();
			context.fillStyle = "blue";
            
		    context.fillRect(m, n, 60, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( m+60, n ); // x+7,y-1
			context.lineTo( m+60, n+15);
			context.lineTo( m+90, n+15);
			context.lineTo( m+60,n);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
	}			
}

        function xiaxingxinhaojihongdeng(x,y)
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
            context.arc(x-30,y-13,5,0,2*Math.PI);
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
        function xiaxingxinhaojihongdeng3(x,y)
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
        function xiaxingxinhaojilvdeng2(x,y)
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
            context.arc(x-30,y-13,5,0,2*Math.PI);
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

        function shangxingxinhaojihongdeng(x,y)
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
            context.arc(x-30,y-13,5,0,2*Math.PI);
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
        function shangxingxinhaojihongdeng3(x,y)
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
        function shangxingxinhaojilvdeng2(x,y)
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
            context.arc(x-30,y-13,5,0,2*Math.PI);
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

		function xiaxingxinhaojihuangdeng(x,y)
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
            context.arc(x-30,y-13,5,0,2*Math.PI);
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

		
		//双黄灯
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
            context.arc(x-30,y-13,5,0,2*Math.PI);
            context.fillStyle="yellow";
            context.fill();
            context.stroke();
			//第二个灯位
			context.beginPath();
			context.strokeStyle ='#FFF';
			context.lineWidth = 2;
            context.arc(x-18,y-13,6,0,2*Math.PI);
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
