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
	{ i=i+1
	}
	if(i==5)
	{
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
	
	if(i==14)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=2310;
			y=248;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	
	if(i==16)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=2938;
			y=190;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}	
		
	if(i==24)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=4271;
			y=248;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	if(i==26)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=4899;
			y=190;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}		
	
	if(i==34)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=6212;
			y=248;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	if(i==36)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=6840;
			y=190;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}			

    if(i==44)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=8153;
			y=248;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
	}
	if(i==46)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=8781;
			y=190;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}			
	if(i==54)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=10083;
			y=248;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
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
	
	//经过济南南站时
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
            xiaxingxinhaojihongdeng(x,y)
		
	}
	
	 if(i<52)
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
            
            context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+3]-fenjiedian[i], 5);
			
			//context.restore();
     }
     
     if(i==52)
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
            
            context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
			//context.restore();
      }
      
      if(i==53)
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
            
            context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+1]-fenjiedian[i], 5);
			
			//context.restore();
      }
      
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
	if(i==54)
	{x=10399;y=295
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
			context.fillRect(fenjiedian[i-1], 310, fenjiedian[i]-fenjiedian[i-1], 5);
						x=10203;y=340
            shangxingxinhaojihongdeng(x,y)
						

	}
	else
	{

		
	 x=(fenjiedian[i-1]+fenjiedian[i])/2-20
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
			context.fillRect(fenjiedian[i-1], 310, fenjiedian[i]-fenjiedian[i-1], 5);
	}

	if (i>3)
	{ i=i-1
	}
	
	if(i==48)
	{
		    changceguidaohuizhi();
	}
	
	if(i==7)
	{
		    changceguidaohuizhi();
	}		
			
    
	//小车经过苏州北站时
	if(i==47)
	{
			x=9026;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==46)
	{
			x=9026;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(i==44)
	{
			x=8233;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==44)
	{
			x=8813;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(i==43)
	{			
	        x=8233;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过南京南站时
	if(i==37)
	{
			x=7085;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==36)
	{
			x=7085;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(i==34)
	{
			x=6292;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==34)
	{
			x=6872;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(i==33)
	{			
	        x=6292;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过济南南站时
	if(i==27)
	{
			x=5144;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==26)
	{
			x=5144;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(i==24)
	{
			x=4351;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==24)
	{
			x=4931;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(i==23)
	{			
	        x=4351;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过天津南站时
	if(i==17)
	{
			x=3193;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==16)
	{
			x=3193;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(i==14)
	{
			x=2390;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==14)
	{
			x=2970;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(i==13)
	{			
	        x=2390;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	
	//小车经过北京南站时
	if(i==8)
	{
			x=1423;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	
    if(i==7)
	{			
	        x=1423;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	 if(i>5)
    {
	 x=(fenjiedian[i-1]+fenjiedian[i])/2-20
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
			context.fillRect(fenjiedian[i-1], 310, fenjiedian[i]-fenjiedian[i-1], 5);
            
            context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[i-4], 310, fenjiedian[i-1]-fenjiedian[i-4], 5);
			
			//context.restore();
      }
      
      if(i==5)
    {
	 x=(fenjiedian[i-1]+fenjiedian[i])/2-20
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
			context.fillRect(fenjiedian[i-1], 310, fenjiedian[i]-fenjiedian[i-1], 5);
            
            context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[i-3], 310, fenjiedian[i-1]-fenjiedian[i-3], 5);
			
			//context.restore();
      }
      
      if(i==4)
    {
	 x=(fenjiedian[i-1]+fenjiedian[i])/2-20
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
			context.fillRect(fenjiedian[i-1], 310, fenjiedian[i]-fenjiedian[i-1], 5);
            
            context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[i-2], 310, fenjiedian[i-1]-fenjiedian[i-2], 5);
			
			//context.restore();
      }
      
      if(i==3)
    {
	 x=(fenjiedian[i-1]+fenjiedian[i])/2-20
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
			context.fillRect(fenjiedian[i-1], 310, fenjiedian[i]-fenjiedian[i-1], 5);            
			
			//context.restore();
      }
			
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
			
}

function dingshidanduhuashangxingxingcheguzhang()
{
	
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	if(i==54)
	{x=10399;y=295
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
			context.fillRect(fenjiedian[i-1], 310, fenjiedian[i]-fenjiedian[i-1], 5);
						x=10203;y=340
            shangxingxinhaojihongdeng(x,y)
						

	}
	else
	{

		
	 x=(fenjiedian[i-1]+fenjiedian[i])/2-20
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
			context.fillRect(fenjiedian[i-1], 310, fenjiedian[i]-fenjiedian[i-1], 5);
	}

	if (i>3)
	{ i=i-1
	}
	
	if(i==48)
	{
		    changceguidaohuizhi();
	}
	
	if(i==7)
	{
		    changceguidaohuizhi();
	}		
			
    
	//小车经过苏州北站时
	if(i==47)
	{
			x=9026;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==46)
	{
			x=9026;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(i==44)
	{
			x=8233;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==44)
	{
			x=8813;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(i==43)
	{			
	        x=8233;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过南京南站时
	if(i==37)
	{
			x=7085;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==36)
	{
			x=7085;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(i==34)
	{
			x=6292;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==34)
	{
			x=6872;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(i==33)
	{			
	        x=6292;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过济南南站时
	if(i==27)
	{
			x=5144;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==26)
	{
			x=5144;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(i==24)
	{
			x=4351;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==24)
	{
			x=4931;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(i==23)
	{			
	        x=4351;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	//小车经过天津南站时
	if(i==17)
	{
			x=3193;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==16)
	{
			x=3193;y=340
            shangxingxinhaojihongdeng(x,y)
	}
	
	if(i==14)
	{
			x=2390;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	if(i==14)
	{
			x=2970;y=310
            xiaxingxinhaojihongdeng3(x,y)
	}
    if(i==13)
	{			
	        x=2390;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
	
	//小车经过北京南站时
	if(i==8)
	{
			x=1423;y=340
            shangxingxinhaojilvdeng2(x,y)
	}
	
    if(i==7)
	{			
	        x=1423;y=340
            shangxingxinhaojihongdeng(x,y)
		
	}
	
			
	if(i>=31)
	{
	
	 x=(fenjiedian[i-1]+fenjiedian[i])/2-20
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
			context.fillRect(fenjiedian[i-1], 310, fenjiedian[i]-fenjiedian[i-1], 5);
            
            context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[i-4], 310, fenjiedian[i-1]-fenjiedian[i-4], 5);
			
			//context.restore();
	}
	
	if(i>=6)
	{
	 if(i<31)
     {
	  x=(fenjiedian[i-1]+fenjiedian[i])/2-20
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
			context.fillRect(fenjiedian[i-1], 310, fenjiedian[i]-fenjiedian[i-1], 5);
            
            context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[i-4], 310, fenjiedian[i-1]-fenjiedian[i-4], 5);
			
			//context.restore();
            }
	}
    
    if(i==5)
	{
	
	 x=(fenjiedian[i-1]+fenjiedian[i])/2-20
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
			context.fillRect(fenjiedian[i-1], 310, fenjiedian[i]-fenjiedian[i-1], 5);
            
            context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[i-3], 310, fenjiedian[i-1]-fenjiedian[i-3], 5);
			
			//context.restore();
	}
    
    if(i==4)
	{
	
	 x=(fenjiedian[i-1]+fenjiedian[i])/2-20
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
			context.fillRect(fenjiedian[i-1], 310, fenjiedian[i]-fenjiedian[i-1], 5);
            
            context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[i-2], 310, fenjiedian[i-1]-fenjiedian[i-2], 5);
			
			//context.restore();
	}
    
    if(i==3)
	{
	
	 x=(fenjiedian[i-1]+fenjiedian[i])/2-20
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
			context.fillRect(fenjiedian[i-1], 310, fenjiedian[i]-fenjiedian[i-1], 5);
			
			//context.restore();
	}
	
	if(i==30)
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
			context.fillRect(fenjiedian[i], 310, fenjiedian[i+1]-fenjiedian[i], 5);
			
			//context.restore();
	}
			
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
