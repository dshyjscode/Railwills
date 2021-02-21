// 按照助调下发的计划自动行车
$.cookie.json=true;
//var jinlu_num;

function diaochezouche()
{			 
    var string=null;
	var str=$.cookie("zhanchangtu");    // 获取站场图大排队信息的初始状态   
  
    if(jinlu_num==96)
	{
		   switch(i)
		   {
			   case 1:
			       string = rePlaceStr5(str,118,"2",165,"3",166,"2",167,"2",306,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0165"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr5(str,118,"2",165,"1",166,"3",167,"2",306,"1");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0166"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr3(str,118,"1",166,"1",167,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0167"+string.substr(430,10));	
				   break;	
			   
		   }
		   
		   
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {
			    x=(255+326)/2-30			
				y=175
		        context.fillStyle = "black";
            
		        context.fillRect(x, y, 40, 15);
			    context.beginPath();
			    context.lineWidth = 1;
			    context.strokeStyle = 'black';
			
			    context.moveTo( x+40, y ); // x+7,y-1
			    context.lineTo( x+40, y+15);
			    context.lineTo( x+60, y+15);
			    context.lineTo( x+40, y);
			    context.fill();
			    context.stroke();
			
			    context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		        context.fillRect(255, 190, 326-255, 5);
				
				x=373;y=190
			    xiaxingdiaochexinhaoji1(x,y);							    
	       }
	if(i==2)
	{
	        x=378;y=160
			context.fillStyle = "black";  // 5号道岔下行弯股小车

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x-25, y+25); // 起点
			context.lineTo( x+25, y-25);
			context.lineTo( x+1, y-20);
			context.lineTo( x-36, y+17);
			context.fill();
			context.stroke();
						
	}
	
	if(i==3)
	{
	        x=(436+613)/2-50			
			y=115
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
		    context.fillRect(436, 130, 613-436, 5); 
	}
	
	

	if (i<c)
	{ 
	        i=i+1
	}
	
	if(i==2)
	{
		    context.beginPath();
			context.lineWidth = 5;    // 北京南站1DG处的弯股
			context.strokeStyle = '#848284';
			x=195;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		    context.fillRect(163, 250, 326-163, 5); 
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==3)
	{
		context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		context.fillRect(326, 190, 436-326, 5);  	        
        context.fillRect(406, 130, 613-406, 5);
		
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
		context.fillRect(345, 185, 11, 5);  // 将北京南站的5号道岔由反位转到定位(画黑块)
		
		xieshuzi(355,175,'5')				    
	}
	
	
	if(i==1)
	{
	    x=(255+326)/2-30			
		y=175
		context.fillStyle = "blue";
            
		context.fillRect(x, y, 40, 15);
		context.beginPath();
		context.lineWidth = 1;
		context.strokeStyle = 'blue';
			
		context.moveTo( x+40, y ); // x+7,y-1
		context.lineTo( x+40, y+15);
		context.lineTo( x+60, y+15);
		context.lineTo( x+40, y);
		context.fill();
		context.stroke();
		
		context.beginPath();
		context.lineWidth = 5;    // 北京南站1DG处的弯股
		context.strokeStyle = 'red';
		x=195;
		y=245;
		k=50;
		context.moveTo( x+10, y-1 ); // x+7,y-1
		context.lineTo( x+10+k, y-1-k);
		context.stroke();
						
		context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		context.fillRect(255, 190, 326-255, 5);
		context.fillRect(163, 250, 326-163, 5);
				
		x=373;y=190
		xiaxingdiaochexinhaojibaideng(x,y);  
		
		context.fillStyle = "#FFF";   // #848284代表灰色（股道的颜色）
		context.fillRect(326, 190, 350-326, 5);  	        
        context.fillRect(406, 130, 613-406, 5);
		
		context.beginPath();
	    context.lineWidth = 5;
        context.strokeStyle ="#FFF";   // 将北京南站的5DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------
	    x=338;
	    y=192;
	    k=50;
	    context.moveTo( x+10, y-1 ); // x+7,y-1
	    context.lineTo( x+17+k, y-9-k);
	    context.stroke();
			
		context.fillStyle = "black";
		context.fillRect(350, 190, 12, 5);  // 将北京南站的5号道岔由定位转到反位(画黑块)
	}
	
	if(i==2)
	{
		    x=378;y=160
			context.fillStyle = "blue";  // 5号道岔下行弯股小车

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x-25, y+25); // 起点
			context.lineTo( x+25, y-25);
			context.lineTo( x+1, y-20);
			context.lineTo( x-36, y+17);
			context.fill();
			context.stroke(); 
			
			context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		    context.fillRect(326, 190, 350-326, 5);   
			context.fillRect(406, 130, 613-406, 5);
			
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="red";   // 将北京南站的5DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------
	        x=338;
	        y=192;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();
	}
	
	if(i==3)
	{
		    x=(436+613)/2-50			
			y=115
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
			
			context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		    context.fillRect(436, 130, 613-436, 5);   
	}
		   
	}
  
    if(jinlu_num==97)
	{
		   switch(i)
		   {
			   case 1:
			       string = rePlaceStr4(str,165,"3",166,"2",168,"2",306,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0165"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr4(str,165,"1",166,"3",168,"2",306,"1");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0166"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr2(str,166,"1",168,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0168"+string.substr(430,10));	
				   break;				   
		   }
		   
		   
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {
			    x=(255+326)/2-30			
				y=175
		        context.fillStyle = "black";
            
		        context.fillRect(x, y, 40, 15);
			    context.beginPath();
			    context.lineWidth = 1;
			    context.strokeStyle = 'black';
			
			    context.moveTo( x+40, y ); // x+7,y-1
			    context.lineTo( x+40, y+15);
			    context.lineTo( x+60, y+15);
			    context.lineTo( x+40, y);
			    context.fill();
			    context.stroke();
			
			    context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		        context.fillRect(255, 190, 326-255, 5);
				
				x=373;y=190
			    xiaxingdiaochexinhaoji1(x,y);							    
	       }
	if(i==2)
	{
	        x=(326+406)/2-30			
			y=175
		    context.fillStyle = "black";
            
		    context.fillRect(x, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x+40, y ); // x+7,y-1
			context.lineTo( x+40, y+15);
			context.lineTo( x+60, y+15);
			context.lineTo( x+40, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		    context.fillRect(326, 190, 406-326, 5); 
						
	}
	
	if(i==3)
	{
	        x=(406+653)/2-50			
			y=175
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
		    context.fillRect(406, 190, 653-406, 5); 
	}
	
	

	if (i<c)
	{ 
	        i=i+1
	}
	
	if(i==2)
	{
		    context.beginPath();
			context.lineWidth = 5;    // 北京南站1DG处的弯股
			context.strokeStyle = '#848284';
			x=195;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		    context.fillRect(163, 250, 326-163, 5); 
	}
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==3)
	{
		context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）  	        
        context.fillRect(406, 130, 436-406, 5);
		
		context.beginPath();
		context.lineWidth = 5;
		context.strokeStyle = '#848284';
		x=315;
		y=187;
		k=50;
		context.moveTo( x+40, y-3 ); // x+7,y-1
		context.lineTo( x+40+k, y-3-k);
		context.stroke();
		
		x=373;y=190
		xiaxingdiaochexinhaoji(x,y);
			
		xieshuzi(355,175,'5')				    
	}
	
	
	if(i==1)
	{
	    x=(255+326)/2-30			
		y=175
		context.fillStyle = "blue";
            
		context.fillRect(x, y, 40, 15);
		context.beginPath();
		context.lineWidth = 1;
		context.strokeStyle = 'blue';
			
		context.moveTo( x+40, y ); // x+7,y-1
		context.lineTo( x+40, y+15);
		context.lineTo( x+60, y+15);
		context.lineTo( x+40, y);
		context.fill();
		context.stroke();
		
		context.beginPath();
		context.lineWidth = 5;    // 北京南站1DG处的弯股
		context.strokeStyle = 'red';
		x=195;
		y=245;
		k=50;
		context.moveTo( x+10, y-1 ); // x+7,y-1
		context.lineTo( x+10+k, y-1-k);
		context.stroke();			
			
		context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		context.fillRect(255, 190, 326-255, 5);
		context.fillRect(163, 250, 326-163, 5);
				
		x=373;y=190
		xiaxingdiaochexinhaojibaideng(x,y);  
		
		context.fillStyle = "#FFF";   // #848284代表灰色（股道的颜色）
		context.fillRect(326, 190, 653-326, 5);  	        
        context.fillRect(406, 130, 436-406, 5);
		
		context.beginPath();
		context.lineWidth = 5;
		context.strokeStyle = '#FFF';
		x=315;
		y=187;
		k=50;
		context.moveTo( x+40, y-3 ); // x+7,y-1
		context.lineTo( x+40+k, y-3-k);
		context.stroke();
	}
	
	if(i==2)
	{
		    context.beginPath();
		    context.lineWidth = 5;
		    context.strokeStyle = 'red';
		    x=315;
		    y=187;
		    k=50;
		    context.moveTo( x+40, y-3 ); // x+7,y-1
		    context.lineTo( x+40+k, y-3-k);
		    context.stroke();
		    
			context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		    context.fillRect(326, 190, 406-326, 5);  	        
            context.fillRect(406, 130, 436-406, 5);
			
			x=(326+406)/2-30			
			y=175
		    context.fillStyle = "blue";
            
		    context.fillRect(x, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+40, y ); // x+7,y-1
			context.lineTo( x+40, y+15);
			context.lineTo( x+60, y+15);
			context.lineTo( x+40, y);
			context.fill();
			context.stroke();
	}
	
	if(i==3)
	{
		    x=(406+653)/2-50			
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
			
			context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		    context.fillRect(406, 190, 653-406, 5);   
	}
		   
	}
	
	if(jinlu_num==98)
	{
		   switch(i)
		   {
			   case 1:
			       string = rePlaceStr4(str,171,"3",172,"2",174,"2",308,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0171"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr4(str,171,"1",172,"3",174,"2",308,"1");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0172"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr2(str,172,"1",174,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0174"+string.substr(430,10));	
				   break;				   
		   }
		   
		   
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {
			    x=(255+326)/2-30			
				y=355
		        context.fillStyle = "black";
            
		        context.fillRect(x, y, 40, 15);
			    context.beginPath();
			    context.lineWidth = 1;
			    context.strokeStyle = 'black';
			
			    context.moveTo( x+40, y ); // x+7,y-1
			    context.lineTo( x+40, y+15);
			    context.lineTo( x+60, y+15);
			    context.lineTo( x+40, y);
			    context.fill();
			    context.stroke();
			
			    context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		        context.fillRect(255, 370, 326-255, 5);
				
				x=373;y=370
			    xiaxingdiaochexinhaoji1(x,y);							    
	       }
	if(i==2)
	{
	        x=(326+406)/2-30			
				y=355
		        context.fillStyle = "black";
            
		        context.fillRect(x, y, 40, 15);
			    context.beginPath();
			    context.lineWidth = 1;
			    context.strokeStyle = 'black';
			
			    context.moveTo( x+40, y ); // x+7,y-1
			    context.lineTo( x+40, y+15);
			    context.lineTo( x+60, y+15);
			    context.lineTo( x+40, y);
			    context.fill();
			    context.stroke();
			
			    context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		        context.fillRect(326, 370, 406-326, 5);
						
	}
	
	if(i==3)
	{
	        x=(406+653)/2-50			
			y=355
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
		    context.fillRect(406, 370, 653-406, 5); 
	}
	
	

	if (i<c)
	{ 
	        i=i+1
	}
	
	if(i==2)
	{
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
			
			context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		    context.fillRect(163, 310, 326-163, 5); 
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==3)
	{
		context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		context.fillRect(326, 370, 406-326, 5);  	        
        context.fillRect(406, 430, 436-406, 5);
		
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
		
		x=373;y=370
	    xiaxingdiaochexinhaoji(x,y);					    
	}
	
	
	if(i==1)
	{
	    x=(255+326)/2-30			
		y=355
		context.fillStyle = "blue";
            
		context.fillRect(x, y, 40, 15);
		context.beginPath();
		context.lineWidth = 1;
		context.strokeStyle = 'blue';
			
		context.moveTo( x+40, y ); // x+7,y-1
		context.lineTo( x+40, y+15);
		context.lineTo( x+60, y+15);
		context.lineTo( x+40, y);
		context.fill();
		context.stroke();
		
		// 3号道岔处弯股绘制
		context.beginPath();
		context.lineWidth = 5;
		context.strokeStyle = 'red';		
		x=195;
		y=320;
		k=50;
		context.moveTo( x+10, y+1 ); // x+7,y-1
		context.lineTo( x+10+k, y+1+k);
		context.stroke();
								
		context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		context.fillRect(163, 310, 326-163, 5); 
		context.fillRect(255, 370, 326-255, 5);
				
		x=373;y=370
		xiaxingdiaochexinhaojibaideng(x,y);  
		
		context.fillStyle = "#FFF";   // #848284代表灰色（股道的颜色）
		context.fillRect(326, 370, 653-326, 5);  	        
        context.fillRect(406, 430, 436-406, 5);
		
		// 7号道岔处弯股绘制
		context.beginPath();
		context.lineWidth = 5;
		context.strokeStyle = '#FFF';			
		x=315;
		y=378;
		k=50;
		context.moveTo( x+40, y+3 ); // x+7,y-1
		context.lineTo( x+40+k, y+3+k);
		context.stroke();			
	}
	
	if(i==2)
	{
		     x=(326+406)/2-30			
			y=355
		    context.fillStyle = "blue";
            
		    context.fillRect(x, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x+40, y ); // x+7,y-1
			context.lineTo( x+40, y+15);
			context.lineTo( x+60, y+15);
			context.lineTo( x+40, y);
			context.fill();
		    context.stroke();			
			
			context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		    context.fillRect(326, 370, 406-326, 5);   
			context.fillRect(406, 430, 436-406, 5);
			
			// 7号道岔处弯股绘制
		    context.beginPath();
		    context.lineWidth = 5;
		    context.strokeStyle = 'red';			
		    x=315;
		    y=378;
		    k=50;
		    context.moveTo( x+40, y+3 ); // x+7,y-1
		    context.lineTo( x+40+k, y+3+k);
		    context.stroke();
	}
	
	if(i==3)
	{
		    x=(406+653)/2-50			
			y=355
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
			
			context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		    context.fillRect(406, 370, 653-406, 5);  
	}
		   
	}
	
	if(jinlu_num==99)
	{
		   switch(i)
		   {
			   case 1:
			       string = rePlaceStr5(str,119,"2",171,"3",172,"2",175,"2",308,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0171"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr5(str,119,"2",171,"1",172,"3",175,"2",308,"1");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0172"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr3(str,119,"1",172,"1",175,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0175"+string.substr(430,10));	
				   break;				   
		   }
		   
		   
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {
			    x=(255+326)/2-30			
				y=355
		        context.fillStyle = "black";
            
		        context.fillRect(x, y, 40, 15);
			    context.beginPath();
			    context.lineWidth = 1;
			    context.strokeStyle = 'black';
			
			    context.moveTo( x+40, y ); // x+7,y-1
			    context.lineTo( x+40, y+15);
			    context.lineTo( x+60, y+15);
			    context.lineTo( x+40, y);
			    context.fill();
			    context.stroke();
			
			    context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		        context.fillRect(255, 370, 326-255, 5);
				
				x=373;y=370
			    xiaxingdiaochexinhaoji1(x,y);							    
	       }
	if(i==2)
	{
	        x=357;y=382
			context.fillStyle = "black";  // 6号道岔处下行
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
	
	if(i==3)
	{
	        x=(436+613)/2-50			
			y=415
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
		    context.fillRect(436, 430, 613-436, 5); 
	}
	
	

	if (i<c)
	{ 
	        i=i+1
	}
	
	if(i==2)
	{
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
			
			context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		    context.fillRect(163, 310, 326-163, 5); 
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==3)
	{
		context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		context.fillRect(326, 370, 406-326, 5);  	        
        context.fillRect(406, 430, 436-406, 5);
		
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
		context.fillRect(346, 375, 11, 7);
		
		x=420;y=400
		shangxingxinhaoji(x,y);
		xieshuzi(400,410,'S4')				    
	}
	
	
	if(i==1)
	{
	    x=(255+326)/2-30			
		y=355
		context.fillStyle = "blue";
            
		context.fillRect(x, y, 40, 15);
		context.beginPath();
		context.lineWidth = 1;
		context.strokeStyle = 'blue';
			
		context.moveTo( x+40, y ); // x+7,y-1
		context.lineTo( x+40, y+15);
		context.lineTo( x+60, y+15);
		context.lineTo( x+40, y);
		context.fill();
		context.stroke();
		
		// 3号道岔处弯股绘制
		context.beginPath();
		context.lineWidth = 5;
		context.strokeStyle = 'red';		
		x=195;
		y=320;
		k=50;
		context.moveTo( x+10, y+1 ); // x+7,y-1
		context.lineTo( x+10+k, y+1+k);
		context.stroke();
								
		context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		context.fillRect(163, 310, 326-163, 5); 
		context.fillRect(255, 370, 326-255, 5);
				
		x=373;y=370
		xiaxingdiaochexinhaojibaideng(x,y);  
		
		context.fillStyle = "#FFF";   // #848284代表灰色（股道的颜色）
		context.fillRect(326, 370, 350-326, 5);  	        
        context.fillRect(406, 430, 613-406, 5);
		
		context.beginPath();
		context.lineWidth = 5;
		context.strokeStyle ="#FFF";  // 将北京南站的7DG的弯股变为白光带（已将7号道岔从定位转到反位)
		x=348;
		y=368;
		k=50;
		context.moveTo( x, y+6 ); // x+7,y-1
		context.lineTo( x+k+7, y+13+k);
		context.stroke();
			
		context.fillStyle = "black";
		context.fillRect(350, 370, 12, 5);  // 将北京南站的7号道岔由定位转到反位(画黑块)	
	}
	
	if(i==2)
	{
		    x=357;y=382
			context.fillStyle = "blue";  // 6号道岔处下行
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+40, y+20);
			context.lineTo( x+10, y-10);
			context.fill();
			context.stroke(); 
			
			context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		    context.fillRect(326, 370, 350-326, 5);   
			context.fillRect(406, 430, 613-406, 5);
			
			context.beginPath();
		    context.lineWidth = 5;
		    context.strokeStyle ="red";  // 将北京南站的7DG的弯股变为红光带（已将7号道岔从定位转到反位)
		    x=348;
		    y=368;
		    k=50;
		    context.moveTo( x, y+6 ); // x+7,y-1
		    context.lineTo( x+k+7, y+13+k);
		    context.stroke();
	}
	
	if(i==3)
	{
		    x=(436+613)/2-50			
			y=415
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
			
			context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		    context.fillRect(436, 430, 613-436, 5);  
	}
		   
	}
  
	if(jinlu_num==100)
	{
		   switch(i)
		   {
			   case 1:
			       string = rePlaceStr6(str,167,"2",169,"1",179,"3",180,"2",181,"2",307,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0179"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr4(str,167,"2",169,"1",180,"3",181,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0180"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr3(str,167,"2",169,"1",181,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0181"+string.substr(430,10));	
				   break;
				   
		       case 4:
			       string = rePlaceStr2(str,167,"3",169,"1");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0167"+string.substr(430,10));	
				   break;
		   }
		   
		   
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {
			x=(fenjiedian[4]+fenjiedian[5])/2-20
	        y=235
	 
			//context.save();  画小车
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
			context.fillRect(fenjiedian[4], 250, fenjiedian[5]-fenjiedian[4], 5);
			
			x=919;y=280
            shangxingdiaochexinhaoji(x,y)						    
	       }
	if(i==2)
	{
	        x=808;y=190
			context.fillStyle = "black";  // 6号道岔处上行
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+58, y+38);
			context.lineTo( x+20, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[3], 250, fenjiedian[4]-fenjiedian[3], 5);
						
	}
	
	if(i==3)
	{
	        x=650;y=130
			context.fillStyle = "black";  // 10号道岔处上行
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+58, y+38);
			context.lineTo( x+20, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(653, 190, 753-653, 5);
	}
	
	if(i==4)
	{
	         x=(436+613)/2-20
	         y=115
	 
			//context.save();  画小车
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
			context.fillRect(436, 130, 613-436, 5);
	}

	if (i<c)
	{ 
	        i=i+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==3)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="#848284";  // 将北京南站的6DG的弯股变为白光带（已将10号道岔从定位转到反位)
			x=808;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();
			
			context.fillStyle = "black";
			context.fillRect(855, 243, 11, 7); 				    
	}
	
	if(i==4)
	{
		    context.fillStyle = "#848284";
			context.fillRect(613, 130, 38, 5); // 10DG的侧线股道
			
	       	context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';			
			x=652;
			y=128;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "black";
			context.fillRect(699, 183, 11, 7);
	}
	if(i==1)
	{   
		x=919;y=280
        shangxingdiaochexinhaojibaideng(x,y)		
	}
	
	if(i==1)
	{
	
	        x=(fenjiedian[4]+fenjiedian[5])/2-20
	                                y=235
	 
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
			
			xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[4], 250, fenjiedian[5]-fenjiedian[4], 5);
	
	context.fillStyle = "#FFF";
	context.fillRect(613, 130, 38, 5); // 10DG的侧线股道
	context.fillRect(436, 130, 613-436, 5);
	context.fillRect(707, 190, 810-707, 5);
	context.fillRect(860, 250, fenjiedian[5]-860, 5);
			
	
	context.fillStyle = "#FFF";
	context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
	
	        context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="#FFF";  // 将北京南站的6DG的弯股变为白光带（已将10号道岔从定位转到反位)
			x=808;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();	
	
	
	        context.fillStyle = "#FFF";
	        context.fillRect(613, 130, 38, 5); // 10DG的侧线股道
			
	        context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="#FFF";  // 将北京南站的10DG的弯股变为白光带（已将10号道岔从定位转到反位)
			x=651;
			y=128;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();
	
	context.fillStyle = "black";
	context.fillRect(848, 250, 12, 5);  // 将北京南站的6号道岔由定位转到反位(画黑块)
    context.fillRect(695, 190, 12, 5);  // 将北京南站的10号道岔由定位转到反位(画黑块)			
	//在始发站办理发车进路后的白光带显示
    
	}
	
	if(i==2)
	{
		    x=808;y=190
			context.fillStyle = "blue";  // 6号道岔处上行
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+58, y+38);
			context.lineTo( x+20, y);
			context.fill();
			context.stroke();
			
			//xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(860, 250, fenjiedian[4]-860, 5);

            context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="red";  // 将北京南站的6DG的弯股变为红光带（已将10号道岔从定位转到反位)
			x=808;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();	    
	}
	
	if(i==3)
	{
		   x=650;y=130
			context.fillStyle = "blue";  // 10号道岔处上行
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+58, y+38);
			context.lineTo( x+20, y);
			context.fill();
			context.stroke();
			
			//xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(707, 190, 753-707, 5);
			
			context.fillStyle = "red";
	        context.fillRect(613, 130, 38, 5); // 10DG的侧线股道
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="red";  // 将北京南站的10DG的弯股变为红光带（已将10号道岔从定位转到反位)
			x=652;
			y=128;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();
	}
	
	if(i==4)
	{
		    x=(436+613)/2-20
	         y=115
	 
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
			
			xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(436, 130, 613-436, 5);		
	   }		   
	}
		  
		   
		if(jinlu_num==101)
		{
		   switch(i)
		   {
			   case 1:
			       string = rePlaceStr6(str,168,"2",169,"1",179,"3",180,"2",181,"2",307,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0179"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr4(str,168,"2",169,"1",180,"3",181,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0180"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr3(str,168,"2",169,"1",181,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0181"+string.substr(430,10));	
				   break;
				   
		       case 4:
			       string = rePlaceStr2(str,168,"3",169,"1");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0168"+string.substr(430,10));	
				   break;
		   }	
			
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {
			x=(fenjiedian[4]+fenjiedian[5])/2-20
	        y=235
	 
			//context.save();  画小车
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
			context.fillRect(fenjiedian[4], 250, fenjiedian[5]-fenjiedian[4], 5);
			
			x=919;y=280
            shangxingdiaochexinhaoji(x,y)					    
	}
	if(i==2)
	{
	        x=808;y=190
			context.fillStyle = "black";  // 6号道岔处上行
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+58, y+38);
			context.lineTo( x+20, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[3], 250, fenjiedian[4]-fenjiedian[3], 5);
	}
	
	if(i==3)
	{
	        x=(653+753)/2-20
	        y=175
	 
			//context.save();  画小车
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
			context.fillRect(653, 190, 753-653, 5);
	}
	
	if(i==4)
	{
	        x=(406+653)/2-50			
			y=175
		    //context.save();  画小车
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
			
			context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		    context.fillRect(406, 190, 653-406, 5);								
	}

	if (i<c)
	{ 
	        i=i+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==2)
	{
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';  // 将4DG的双动道岔变为白光带
	x1=930;
	y1=260;
	x2=978;
	y2=282;
	//alert(x1)
	context.moveTo( x1, y1 ); // x+7,y-1
	context.lineTo( x2, y2);
	context.stroke();
	}
	
	if(i==3)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="#848284";  // 将北京南站的6DG的弯股变为白光带（已将10号道岔从定位转到反位)
			x=808;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();
			
			context.fillStyle = "black";
			context.fillRect(855, 243, 11, 7); 
	}
	
	if(i==4)
	{
		    context.fillStyle = "#848284";
			context.fillRect(613, 130, 38, 5); // 10DG的侧线股道
			
	       	context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';			
			x=652;
			y=128;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}
	if(i==1)
	{   
		x=919;y=280
        shangxingdiaochexinhaojibaideng(x,y)		
	}
	
	if(i==4)
	{
		x=700;y=190
        xiaxingxinhaoji(x,y)
		xieshuzi(715,180,'10')
	}
	
	if(i==1)
	{
	
	        x=(fenjiedian[4]+fenjiedian[5])/2-20
	        y=235
	 
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
			
			xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[4], 250, fenjiedian[5]-fenjiedian[4], 5);
	
	context.fillStyle = "#FFF";
	context.fillRect(653, 190, 810-653, 5);
	context.fillRect(406, 190, 653-406, 5);
	context.fillRect(860, 250, fenjiedian[4]-860, 5);
	
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = 'red';  // 将4DG的双动道岔变为白光带
	x1=930;
	y1=260;
	x2=978;
	y2=282;
	//alert(x1)
	context.moveTo( x1, y1 ); // x+7,y-1
	context.lineTo( x2, y2);
	context.stroke();		
	
	context.fillStyle = "#FFF";
	context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
	
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle ="#FFF";  // 将北京南站的6DG的弯股变为白光带（已将10号道岔从定位转到反位)
	x=808;
	y=188;
	k=50;
	context.moveTo( x, y+6 ); // x+7,y-1
	context.lineTo( x+k+7, y+13+k);
	context.stroke();	
	
	
	context.fillStyle = "#FFF";
	context.fillRect(613, 130, 38, 5); // 10DG的侧线股道
			
	context.beginPath();  
	context.lineWidth = 5;
	context.strokeStyle = '#FFF';			
	x=652;
	y=128;
	k=50;
	context.moveTo( x, y+6 ); // x+7,y-1
	context.lineTo( x+k, y+6+k);
	context.stroke();
	//在始发站办理发车进路后的白光带显示
    context.fillStyle = "black";
	context.fillRect(848, 250, 12, 5);
	}
	
	if(i==2)
	{
		    x=808;y=190
			context.fillStyle = "blue";  // 6号道岔处上行
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+58, y+38);
			context.lineTo( x+20, y);
			context.fill();
			context.stroke();
			
			//xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(860, 250, fenjiedian[4]-860, 5);

	        context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="red";  // 将北京南站的6DG的弯股变为白光带（已将10号道岔从定位转到反位)
			x=808;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();
	}
	
	if(i==3)
	{		   
			context.fillStyle = "red";
			context.fillRect(653, 190, 753-653, 5);
			
			context.fillStyle = "red";
			context.fillRect(613, 130, 38, 5); // 10DG的侧线股道
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';			
			x=652;
			y=128;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			x=(653+753)/2-20
	        y=175
	 
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
			
			xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号					
	}
	
	if(i==4)
	{
		    x=(406+653)/2-50			
			y=175
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
			
			xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		    context.fillRect(406, 190, 653-406, 5);		
	     }	
    }
		    
	if(jinlu_num==102)
	{	
	       switch(i)
		   {
			   case 1:
			       string = rePlaceStr4(str,169,"2",179,"3",180,"2",307,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0179"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr2(str,169,"2",180,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0180"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr1(str,169,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0169"+string.substr(430,10));	
				   break;				   		      
		   }
	
	       var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {
							
			x=(fenjiedian[4]+fenjiedian[5])/2-20
	                                y=235
	 
			//context.save();  画小车
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
			context.fillRect(fenjiedian[4], 250, fenjiedian[5]-fenjiedian[4], 5);
			
			x=919;y=280
            shangxingdiaochexinhaoji(x,y)						  
	}
	if(i==2)
	{
	        x=(fenjiedian[3]+fenjiedian[4])/2-50
	        y=235
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
			context.fillRect(fenjiedian[3], 250, fenjiedian[4]-fenjiedian[3], 5);
	}
	
	if(i==3)
	{
	        x=(fenjiedian[2]+fenjiedian[3])/2-50
	        y=235
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
			context.fillRect(fenjiedian[2], 250, fenjiedian[3]-fenjiedian[2], 5);
	}

	if (i<c)
	{ 
	        i=i+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==2)
	{
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#848284';  // 将4DG的双动道岔变为白光带
	x1=930;
	y1=260;
	x2=978;
	y2=282;
	//alert(x1)
	context.moveTo( x1, y1 ); // x+7,y-1
	context.lineTo( x2, y2);
	context.stroke();
	}
	
	if(i==3)
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
	if(i==1)
	{   
		x=919;y=280
        shangxingdiaochexinhaojibaideng(x,y)
	}
	
	if(i==3)
	{
		x=800;y=250
        xiaxingxinhaoji(x,y)
	}
	
	if(i==1)
	{
	
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	x=(fenjiedian[4]+fenjiedian[5])/2-20
	y=235
	 
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
	
	xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
	
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = 'red';  // 将4DG的双动道岔变为白光带
	x1=930;
	y1=260;
	x2=978;
	y2=282;
	//alert(x1)
	context.moveTo( x1, y1 ); // x+7,y-1
	context.lineTo( x2, y2);
	context.stroke();
			
	context.fillStyle = "red";
	context.fillRect(fenjiedian[4], 250, fenjiedian[5]-fenjiedian[4], 5);
	
	context.fillStyle = "#FFF";
	context.fillRect(fenjiedian[2], 250, fenjiedian[4]-fenjiedian[2], 5);
	
			
	
	context.fillStyle = "#FFF";
	context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
		
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#FFF';   // 6DG的弯股
	x=810;
	y=189;
	k=50;
	context.moveTo( x, y+6 ); // x+7,y-1
	context.lineTo( x+k, y+6+k);
	context.stroke();
	//在始发站办理发车进路后的白光带显示
    
	}
	
	if(i==2)
	{
		    x=(fenjiedian[3]+fenjiedian[4])/2-50
	        y=235	 
			// 画小车
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
			
			xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[3], 250, fenjiedian[4]-fenjiedian[3], 5);
			
			context.fillStyle = "red";
			context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';   // 6DG的弯股
			x=810;
			y=189;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}
	
	if(i==3)
	{
		    x=(fenjiedian[2]+fenjiedian[3])/2-50
	        y=235
	 
			// 画小车
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
			
			xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[2], 250, fenjiedian[3]-fenjiedian[2], 5);
	    }
	}
		 		  
	if(jinlu_num==103)
	{
		
		   switch(i)
		   {
			   case 1:
			       string = rePlaceStr5(str,169,"1",173,"2",185,"3",186,"2",309,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0185"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr3(str,169,"1",173,"2",186,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0186"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr4(str,169,"1",173,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0173"+string.substr(430,10));	
				   break;				
		   }
		   
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {							
			x=(fenjiedian[4]+fenjiedian[5])/2-20
	        y=295
	 
			//context.save();  画小车
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
			context.fillRect(fenjiedian[4], 310, fenjiedian[5]-fenjiedian[4], 5);
				
			x=919;y=340 
			shangxingdiaochexinhaoji(x,y);  // D4信号机
	}
	if(i==2)
	{
	        x=(fenjiedian[3]+fenjiedian[4])/2-50
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
			context.fillRect(fenjiedian[3], 310, fenjiedian[4]-fenjiedian[3], 5);
	}
	
	if(i==3)
	{
	        x=(fenjiedian[2]+fenjiedian[3])/2-50
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
			context.fillRect(fenjiedian[2], 310, fenjiedian[3]-fenjiedian[2], 5);
	}

	if (i<c)
	{ 
	        i=i+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==2)
	{
		    //4DG的双动道岔
			context.fillStyle = "#848284";
	        context.beginPath();
	        context.lineWidth = 5;
	        context.strokeStyle = "#848284";
	        x1=978;
	        y1=282;
	        x2=1025;
	        y2=304;
	        context.moveTo( x1, y1 ); // x+7,y-1
	        context.lineTo( x2, y2);
	        context.stroke();		
	}
	
	if(i==3)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 370, 57, 5); // 8DG的侧线股道
		
			context.beginPath();    // 6DG的弯股
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=810;
			y=371;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
	if(i==1)
	{   
		x=919;y=340 
		shangxingdiaochexinhaojibaideng(x,y);  // D4信号机
	}
	
	if(i==3)
	{
		x=800;y=310
        xiaxingxinhaoji(x,y)
	}
	
	if(i==1)
	{
	        var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
	
	        x=(fenjiedian[4]+fenjiedian[5])/2-20
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
			
			xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
						
			//4DG的双动道岔
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
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[4], 310, fenjiedian[5]-fenjiedian[4], 5);
	
	        context.fillStyle = "#FFF";
	        context.fillRect(fenjiedian[2], 310, fenjiedian[4]-fenjiedian[2], 5);			
			context.fillRect(753, 370, 57, 5); // 8DG的侧线股道	        
	
	        context.beginPath();   // 8DG的弯股
	        context.lineWidth = 5;
	        context.strokeStyle = '#FFF';
			
	        x=810;
	        y=371;
	        k=50;
	        context.moveTo( x, y-1 ); // x+7,y-1
	        context.lineTo( x+k, y-1-k);
	        context.stroke();   
	}
	
	if(i==2)
	{
		x=(fenjiedian[3]+fenjiedian[4])/2-50
	        y=295
	 
			// 画小车
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
			
			xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[3], 310, fenjiedian[4]-fenjiedian[3], 5);
			
			context.fillStyle = "red";
			context.fillRect(753, 370, 57, 5); // 8DG的侧线股道
		
			context.beginPath();   // 8DG的弯股
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=810;
			y=371;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
	
	if(i==3)
	{
		    x=(fenjiedian[2]+fenjiedian[3])/2-50
	        y=295
	 
			// 画小车
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
			
			xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[2], 310, fenjiedian[3]-fenjiedian[2], 5);									
	     }
	}

		   
    if(jinlu_num==104)
	{	
	       switch(i)
		   {
			   case 1:
			       string = rePlaceStr6(str,169,"1",174,"2",185,"3",186,"2",187,"2",309,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0185"+string.substr(430,10));
				   //alert($.cookie('站场图'))	
				   break;
				  
			   case 2:
			       string = rePlaceStr4(str,169,"1",174,"2",186,"3",187,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0186"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr3(str,169,"1",174,"2",187,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0187"+string.substr(430,10));	
				   break;
				   
		       case 4:
			       string = rePlaceStr2(str,169,"1",174,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0174"+string.substr(430,10));
				   //alert($.cookie('站场图'))		
				   break;
		   }
	
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {
			x=(fenjiedian[4]+fenjiedian[5])/2-20
	        y=295
	 
			//context.save();  画小车
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
			context.fillRect(fenjiedian[4], 310, fenjiedian[5]-fenjiedian[4], 5);
				
			x=919;y=340 
			shangxingdiaochexinhaoji(x,y);  // D4信号机					    
	}
	if(i==2)
	{
	        x=834;y=342
			context.fillStyle = "black";   // 8号道岔上行

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x+8, y-30); // 起点
			context.lineTo( x+20, y-20);
			context.lineTo( x-25, y+25);
			context.lineTo( x-25, y+5);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[3], 310, fenjiedian[4]-fenjiedian[3], 5);
	}
	
	if(i==3)
	{
	        x=(653+753)/2-20
	        y=355
	 
			//context.save();  画小车
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
			context.fillRect(653, 370, 753-653, 5);
	}
	
	if(i==4)
	{
	        x=(653+406)/2-20
	        y=355
	 
			//context.save();  画小车
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
			context.fillRect(406, 370, 653-406, 5);
	}

	if (i<c)
	{ 
	        i=i+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==2)
	{
		//4DG的双动道岔
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
	
	if(i==3)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 370, 57, 5); // 8DG的侧线股道
		
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#848284";   // 将北京南站的8DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------

	        x=800;
	        y=372;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();	
			
			context.fillStyle = "black";
			context.fillRect(856, 315, 11, 7); 
	}
	
	if(i==4)
	{
		    context.fillStyle = "#848284";
			context.fillRect(613, 430, 38, 5); // 12DG的侧线股道
			
	       	context.beginPath(); // 12号道岔的弯股道岔，定位时
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=654;
			y=434;
			k=50;
			context.moveTo( x, y-3 ); // x+7,y-1
			context.lineTo( x+k, y-3-k);
			context.stroke(); 
	}
	if(i==1)
	{   
		x=919;y=340
        shangxingdiaochexinhaojibaideng(x,y)		
	}
	
	if(i==4)
	{
		x=700;y=370
        xiaxingxinhaoji(x,y)
	}
	
	if(i==1)
	{	
	        x=(fenjiedian[4]+fenjiedian[5])/2-20
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
			
			xieshuzi(x+15,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[4], 310, fenjiedian[5]-fenjiedian[4], 5);
	
	context.fillStyle = "#FFF";
	context.fillRect(613, 430, 38, 5); // 12DG的侧线股道
	context.fillRect(406, 370, 810-406, 5);
	context.fillRect(860, 310, fenjiedian[4]-860, 5);
	
	//4DG的双动道岔
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
	
	context.fillStyle = "#FFF";
	context.fillRect(753, 370, 57, 5); // 8DG的侧线股道
	
	       						
	        context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#FFF";   // 将北京南站的8DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------

	        x=800;
	        y=372;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();	
			
	        context.beginPath(); // 12号道岔的弯股道岔，定位时
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=654;
			y=434;
			k=50;
			context.moveTo( x, y-3 ); // x+7,y-1
			context.lineTo( x+k, y-3-k);
			context.stroke();
	
	        context.fillStyle = "black";	
            context.fillRect(850, 310, 12, 5);  // 将北京南站的8号道岔由定位转到反位(画黑块)	
    
	}
	
	if(i==2)
	{
		    x=834;y=342
			context.fillStyle = "blue";   // 8号道岔上行

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x+8, y-30); // 起点
			context.lineTo( x+20, y-20);
			context.lineTo( x-25, y+25);
			context.lineTo( x-25, y+5);
			context.fill();
			context.stroke();
			
			//xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(860, 310, fenjiedian[4]-860, 5);
			
			context.fillStyle = "red";
			context.fillRect(753, 370, 57, 5); // 8DG的侧线股道
		
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="red";   // 将北京南站的8DG的弯股变为红光带(已将将道岔的定位扳到反位）-----------

	        x=800;
	        y=372;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();						
	}
	
	if(i==3)
	{
		   x=(653+753)/2-20
	        y=355
	 
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
			context.fillRect(653, 370, 753-653, 5);
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
            context.fillStyle = "red";
	        context.fillRect(613, 430, 38, 5); // 12DG的侧线股道

	        context.beginPath(); // 12号道岔的弯股道岔，定位时
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=654;
			y=434;
			k=50;
			context.moveTo( x, y-3 ); // x+7,y-1
			context.lineTo( x+k, y-3-k);
			context.stroke();
			
	}
	
	if(i==4)
	{
		    x=(653+406)/2-20
	        y=355
	 
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(406, 370, 653-406, 5);
	    }		   
	}
		   
    if(jinlu_num==105)
	{	
	       switch(i)
		   {
			   case 1:
			       string = rePlaceStr6(str,169,"1",175,"2",185,"3",186,"2",187,"2",309,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0185"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr4(str,169,"1",175,"2",186,"3",187,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0186"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr3(str,169,"1",175,"2",187,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0187"+string.substr(430,10));	
				   break;
				   
		       case 4:
			       string = rePlaceStr2(str,169,"1",175,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0175"+string.substr(430,10));	
				   break;
		   }
	       
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {
			x=(fenjiedian[4]+fenjiedian[5])/2-20
	        y=295
	 
			//context.save();  画小车
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
			context.fillRect(fenjiedian[4], 310, fenjiedian[5]-fenjiedian[4], 5);
				
			x=919;y=340 
			shangxingdiaochexinhaoji(x,y);  // D4信号机					    
	}
	if(i==2)
	{
	        x=834;y=342
			context.fillStyle = "black";   // 8号道岔上行

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x+8, y-30); // 起点
			context.lineTo( x+20, y-20);
			context.lineTo( x-25, y+25);
			context.lineTo( x-25, y+5);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[3], 310, fenjiedian[4]-fenjiedian[3], 5);
	}
	
	if(i==3)
	{
	        x=680;y=402
			context.fillStyle = "black";   // 12号道岔上行

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x+8, y-30); // 起点
			context.lineTo( x+20, y-20);
			context.lineTo( x-25, y+25);
			context.lineTo( x-25, y+5);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(653, 370, 753-653, 5);
	}
	
	if(i==4)
	{
	        x=(436+613)/2-20
	        y=415
	 
			//context.save();  画小车
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
			context.fillRect(436, 310, 613-436, 5);
	}

	if (i<c)
	{ 
	        i=i+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==2)
	{
		//4DG的双动道岔
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
	
	if(i==3)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 370, 57, 5); // 8DG的侧线股道
		
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#848284";   // 将北京南站的8DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------

	        x=800;
	        y=372;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();	
			
			context.fillStyle = "black";
			context.fillRect(856, 315, 11, 7); 
	}
	
	if(i==4)
	{
		    context.fillStyle = "#848284";
			context.fillRect(613, 430, 38, 5); // 12DG的侧线股道
			
	       	context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#848284";   // 将北京南站的12DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------

	        x=643;
	        y=432;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();	
			
			context.fillStyle = "black";
			context.fillRect(698, 375, 11, 7);
	}
	if(i==1)
	{   
		x=919;y=340
        shangxingdiaochexinhaojibaideng(x,y)		
	}
	
	if(i==1)
	{	
	        x=(fenjiedian[4]+fenjiedian[5])/2-20
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
			
			xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[4], 310, fenjiedian[5]-fenjiedian[4], 5);
	
	context.fillStyle = "#FFF";
	context.fillRect(613, 430, 38, 5); // 12DG的侧线股道
	context.fillRect(707, 370, 810-707, 5);
	context.fillRect(860, 310, fenjiedian[4]-860, 5);
	context.fillRect(436, 430, 613-436, 5);
	
	//4DG的双动道岔
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
	
	context.fillStyle = "#FFF";
	context.fillRect(753, 370, 57, 5); // 8DG的侧线股道
	
	        context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#FFF";   // 将北京南站的12DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------

	        x=643;
	        y=432;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();
			
			
	        context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#FFF";   // 将北京南站的8DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------

	        x=800;
	        y=372;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();	
	
	context.fillStyle = "black";
	context.fillRect(692, 370, 12, 5);  // 将北京南站的12号道岔由定位转到反位(画黑块)	
    context.fillRect(850, 310, 12, 5);  // 将北京南站的8号道岔由定位转到反位(画黑块)	
	//在始发站办理发车进路后的白光带显示
    
	}
	
	if(i==2)
	{
		    x=834;y=342
			context.fillStyle = "blue";   // 8号道岔上行

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x+8, y-30); // 起点
			context.lineTo( x+20, y-20);
			context.lineTo( x-25, y+25);
			context.lineTo( x-25, y+5);
			context.fill();
			context.stroke();
			
			//xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
			
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(860, 310, fenjiedian[4]-860, 5);
			
			context.fillStyle = "red";
			context.fillRect(753, 370, 57, 5); // 8DG的侧线股道
		
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="red";   // 将北京南站的8DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------

	        x=800;
	        y=372;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();						
	}
	
	if(i==3)
	{
		   x=680;y=402
			context.fillStyle = "blue";   // 12号道岔上行

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x+8, y-30); // 起点
			context.lineTo( x+20, y-20);
			context.lineTo( x-25, y+25);
			context.lineTo( x-25, y+5);
			context.fill();
			context.stroke();
			
			xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(707, 370, 753-707, 5);
	        context.fillRect(613, 430, 38, 5); // 12DG的侧线股道

	        context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="red";   // 将北京南站的12DG的弯股变为红光带(已将将道岔的定位扳到反位）-----------

	        x=643;
	        y=432;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();	
			
	}
	
	if(i==4)
	{
		    x=(436+613)/2-20
	        y=415
	 
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
			
			xieshuzi(x+20,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(436, 430, 613-436, 5);
	     }		   
	}
		 
	if(jinlu_num==106)
	{
		switch(i)
		   {
			   case 1:
			       string = rePlaceStr5(str,34,"5",118,"2",167,"3",166,"2",165,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0167"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr5(str,34,"4",118,"2",167,"1",166,"3",165,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0166"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr3(str,118,"1",166,"1",165,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0165"+string.substr(430,10));	
				   break;				   
		   }
		   
		   
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
		   
		   if(i==1)
		   {
			 x=(436+613)/2-20
	         y=115
	 
			//context.save();  画小车
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
			context.fillRect(436, 130, 613-436, 5);
			
			x=450;y=160
			shangxingxinhaoji(x,y);
		   }
		   
		   if(i==2)
		   {
			x=383;y=152
			context.fillStyle = "black";   // 5号道岔上行

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x+8, y-30); // 起点
			context.lineTo( x+20, y-20);
			context.lineTo( x-25, y+25);
			context.lineTo( x-25, y+5);
			context.fill();
			context.stroke();
		   }
		   
		   if(i==3)
		   {
			 x=(255+326)/2-20
	         y=175
	 
			//context.save();  画小车
			context.fillStyle = "black";
            
		    context.fillRect(x, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-20, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(255, 190, 326-255, 5);
		   }
		   
		   if (i<c)
	      { 
	        i=i+1
	      }
		  
		  if(i==3)
		  {
			  context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		      context.fillRect(326, 190, 436-326, 5);  	        
              context.fillRect(406, 130, 613-406, 5);
		
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
		      context.fillRect(345, 185, 11, 5);  // 将北京南站的5号道岔由反位转到定位(画黑块)
		
		      xieshuzi(355,175,'5')		
		  }
		  
		  if(i==1)
		  {
			 x=(436+613)/2-20
	         y=115
	 
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
			context.fillRect(436, 130, 613-436, 5);
			
			x=450;y=160
			shangxingxinhaojibaideng(x,y);
			
			context.fillStyle = "#FFF";   // #848284代表灰色（股道的颜色）
			context.fillRect(406, 130, 436-406, 5);
		    context.fillRect(255, 190, 350-255, 5);  	                   
			context.fillRect(163, 250, 326-163, 5);						
			
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#FFF";   // 将北京南站的5DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------
	        x=338;
	        y=192;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();
			
			context.beginPath();
			context.lineWidth = 5;    // 北京南站1DG处的弯股
			context.strokeStyle = '#FFF';
			x=195;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
		
			context.fillStyle = "black";
		    context.fillRect(350, 190, 12, 5);  // 将北京南站的5号道岔由定位转到反位(画黑块)
		  }
		  if(i==2)
		  {
			x=383;y=152
			context.fillStyle = "blue";   // 5号道岔上行

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x+8, y-30); // 起点
			context.lineTo( x+20, y-20);
			context.lineTo( x-25, y+25);
			context.lineTo( x-25, y+5);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
			context.fillRect(406, 130, 436-406, 5);
		    context.fillRect(326, 190, 350-326, 5); 
			
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="red";   // 将北京南站的5DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------
	        x=338;
	        y=192;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();
		  }
		  if(i==3)
		  {
			 x=(255+326)/2-20
	         y=175
	 
			//context.save();  画小车
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-20, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(255, 190, 326-255, 5);
			context.fillRect(163, 250, 326-163, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=195;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
		  }
	}
	
	if(jinlu_num==107)
	{
		switch(i)
		   {
			   case 1:
			       string = rePlaceStr4(str,35,"5",168,"3",166,"2",165,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0168"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr4(str,35,"4",168,"1",166,"3",165,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0166"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr2(str,166,"1",165,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0165"+string.substr(430,10));	
				   break;				   
		   }
		   
		   
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
		   
		   if(i==1)
		   {
			 x=(406+653)/2-20
	         y=175
	 
			//context.save();  画小车
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
			context.fillRect(406, 190, 653-406, 5);
			
			x=420;y=220
			shangxingxinhaojihongdeng(x,y);
		   }
		   
		   if(i==2)
		   {
			x=(326+406)/2-20
	         y=175
	 
			//context.save();  画小车
			context.fillStyle = "black";
            
		    context.fillRect(x, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-20, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(326, 190, 406-326, 5);
		   }
		   
		   if(i==3)
		   {
			 x=(255+326)/2-20
	         y=175
	 
			//context.save();  画小车
			context.fillStyle = "black";
            
		    context.fillRect(x, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-20, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(255, 190, 326-255, 5);
		   }
		   
		   if (i<c)
	      { 
	        i=i+1
	      }
		  
		  if(i==3)
		  {
			  context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）  	        
              context.fillRect(406, 130, 436-406, 5);
		
		      context.beginPath();
		      context.lineWidth = 5;
		      context.strokeStyle = '#848284';
		      x=315;
		      y=187;
		      k=50;
		      context.moveTo( x+40, y-3 ); // x+7,y-1
		      context.lineTo( x+40+k, y-3-k);
		      context.stroke();
		
		      x=373;y=190
		      xiaxingdiaochexinhaoji(x,y);
			
		      xieshuzi(355,175,'5')		
		  }
		  
		  if(i==1)
		  {
			 x=(406+653)/2-20
	         y=175
	 
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
			context.fillRect(406, 190, 653-406, 5);
			
			x=420;y=220
			shangxingxinhaojibaideng(x,y);
			
			context.fillStyle = "#FFF";   // #848284代表灰色（股道的颜色）
			context.fillRect(406, 130, 436-406, 5);
		    context.fillRect(255, 190, 406-255, 5);  	                   
			context.fillRect(163, 250, 326-163, 5);						
						
			context.beginPath();
		    context.lineWidth = 5;
		    context.strokeStyle = '#FFF';
		    x=315;
		    y=187;
		    k=50;
		    context.moveTo( x+40, y-3 ); // x+7,y-1
		    context.lineTo( x+40+k, y-3-k);
		    context.stroke();			
						
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=195;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
		  }
		  if(i==2)
		  {									
			context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
			context.fillRect(406, 130, 436-406, 5);
		    context.fillRect(326, 190, 406-326, 5); 
			
			context.beginPath();
		    context.lineWidth = 5;
		    context.strokeStyle = 'red';
		    x=315;
		    y=187;
		    k=50;
		    context.moveTo( x+40, y-3 ); // x+7,y-1
		    context.lineTo( x+40+k, y-3-k);
		    context.stroke();
			
			x=(326+406)/2-20
	        y=175
	 
			//context.save();  画小车
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-20, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();
		  }
		  if(i==3)
		  {
			 x=(255+326)/2-20
	         y=175
	 
			//context.save();  画小车
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-20, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(255, 190, 326-255, 5);
			context.fillRect(163, 250, 326-163, 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=195;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
		  }
	}
	
	if(jinlu_num==108)
	{
		   switch(i)
		   {
			   case 1:
			       string = rePlaceStr4(str,38,"5",174,"3",172,"2",171,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0174"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr4(str,38,"4",174,"1",172,"3",171,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0172"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr2(str,172,"1",171,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0171"+string.substr(430,10));	
				   break;				   
		   }
		   
		   
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {
			x=(406+653)/2-20
	        y=355
	 
			//context.save();  画小车
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
			
			x=420;y=400
			shangxingxinhaojihongdeng(x,y);
			
			context.fillStyle = "#848284";
			context.fillRect(406, 370, 653-406, 5);					    
	       }
	if(i==2)
	{
	        x=(326+406)/2-20
	        y=355
	 
			//context.save();  画小车
			context.fillStyle = "black";
            
		    context.fillRect(x, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-20, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(326, 370, 406-326, 5);						
	}
	
	if(i==3)
	{
	       x=(255+326)/2-20
	        y=355
	 
			//context.save();  画小车
			context.fillStyle = "black";
            
		    context.fillRect(x, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-20, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(255, 370, 326-255, 5);	
	}
	
	

	if (i<c)
	{ 
	        i=i+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==3)
	{
		context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		context.fillRect(326, 370, 406-326, 5);  	        
        context.fillRect(406, 430, 436-406, 5);
		
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
						
		x=373;y=370
		xiaxingdiaochexinhaoji(x,y);				    
	}
	
	
	if(i==1)
	{
	    x=(406+653)/2-20
	    y=355
	 
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
		context.fillRect(406, 370, 653-406, 5);	
				
		x=420;y=400
		shangxingxinhaojibaideng(x,y); 
		
		context.fillStyle = "#FFF";   // #848284代表灰色（股道的颜色）
		context.fillRect(163, 310, 326-163, 5); 
		context.fillRect(255, 370, 406-255, 5);  	        
        context.fillRect(406, 430, 436-406, 5);
		
		// 7号道岔处弯股绘制
		context.beginPath();
		context.lineWidth = 5;
		context.strokeStyle = '#FFF';			
		x=315;
		y=378;
		k=50;
		context.moveTo( x+40, y+3 ); // x+7,y-1
		context.lineTo( x+40+k, y+3+k);
		context.stroke();		
		
		// 3号道岔处弯股绘制
		context.beginPath();
		context.lineWidth = 5;
		context.strokeStyle = '#FFF';		
		x=195;
		y=320;
		k=50;
		context.moveTo( x+10, y+1 ); // x+7,y-1
		context.lineTo( x+10+k, y+1+k);
		context.stroke();	
	}
	
	if(i==2)
	{
		    x=(326+406)/2-20
	        y=355
	 
			//context.save();  画小车
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-20, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();		
			
			context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		    context.fillRect(326, 370,406-326, 5);	  
			context.fillRect(406, 430,436-406, 5);
			
			// 7号道岔处弯股绘制
		    context.beginPath();
		    context.lineWidth = 5;
		    context.strokeStyle = 'red';			
		    x=315;
		    y=378;
		    k=50;
		    context.moveTo( x+40, y+3 ); // x+7,y-1
		    context.lineTo( x+40+k, y+3+k);
		    context.stroke();
	}
	
	if(i==3)
	{
		    x=(255+326)/2-20
	        y=355
	 
			//context.save();  画小车
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-20, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(255, 370, 326-255, 5);	
			context.fillRect(163, 310, 326-163, 5);	
			
			// 3号道岔处弯股绘制
		    context.beginPath();
		    context.lineWidth = 5;
		    context.strokeStyle = 'red';		
		    x=195;
		    y=320;
		    k=50;
		    context.moveTo( x+10, y+1 ); // x+7,y-1
		    context.lineTo( x+10+k, y+1+k);
		    context.stroke(); 
	}
		   
	}
	
	if(jinlu_num==109)
	{
		   switch(i)
		   {
			   case 1:
			       string = rePlaceStr5(str,39,"5",119,"2",175,"3",172,"2",171,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0175"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr5(str,39,"4",119,"2",175,"1",172,"3",171,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0172"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr3(str,119,"1",172,"1",171,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0171"+string.substr(430,10));	
				   break;				   
		   }
		   
		   
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {
			x=(436+613)/2-20
	        y=415
	 
			//context.save();  画小车
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
			
			x=450;y=460
			shangxingxinhaojihongdeng(x,y);
			
			context.fillStyle = "#848284";
			context.fillRect(436, 430, 613-436, 5);					    
	       }
	if(i==2)
	{
	        x=358;y=380
			context.fillStyle = "black";  // 7号道岔处上行
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+58, y+38);
			context.lineTo( x+20, y);
			context.fill();
			context.stroke();
						
	}
	
	if(i==3)
	{
	       x=(255+326)/2-20
	        y=355
	 
			//context.save();  画小车
			context.fillStyle = "black";
            
		    context.fillRect(x, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'black';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-20, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(255, 370, 326-255, 5);	
	}
	
	

	if (i<c)
	{ 
	        i=i+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==3)
	{
		context.fillStyle = "#848284";   // #848284代表灰色（股道的颜色）
		context.fillRect(326, 370, 406-326, 5);  	        
        context.fillRect(406, 430, 436-406, 5);
		
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
		context.fillRect(346, 375, 11, 7);
		
		x=420;y=400
		shangxingxinhaoji(x,y);
		xieshuzi(400,410,'S4')				    
	}
	
	
	if(i==1)
	{
	    x=(436+613)/2-20
	        y=415
	 
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
			
		context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		context.fillRect(436, 430, 613-436, 5);
				
		x=450;y=460
		shangxingxinhaojibaideng(x,y); 
		
		context.fillStyle = "#FFF";   // #848284代表灰色（股道的颜色）
		context.fillRect(163, 310, 326-163, 5); 
		context.fillRect(255, 370, 350-255, 5);  	        
        context.fillRect(406, 430, 436-406, 5);
		
		context.beginPath();
		context.lineWidth = 5;
		context.strokeStyle ="#FFF";  // 将北京南站的7DG的弯股变为白光带（已将7号道岔从定位转到反位)
		x=348;
		y=368;
		k=50;
		context.moveTo( x, y+6 ); // x+7,y-1
		context.lineTo( x+k+7, y+13+k);
		context.stroke();
			
		context.fillStyle = "black";
		context.fillRect(350, 370, 12, 5);  // 将北京南站的7号道岔由定位转到反位(画黑块)
		
		// 3号道岔处弯股绘制
		context.beginPath();
		context.lineWidth = 5;
		context.strokeStyle = '#FFF';		
		x=195;
		y=320;
		k=50;
		context.moveTo( x+10, y+1 ); // x+7,y-1
		context.lineTo( x+10+k, y+1+k);
		context.stroke();	
	}
	
	if(i==2)
	{
		    x=358;y=380
			context.fillStyle = "blue";  // 7号道岔处上行
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+58, y+38);
			context.lineTo( x+20, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		    context.fillRect(326, 370, 350-326, 5);   
			context.fillRect(406, 430,436-406, 5);
			
			context.beginPath();
		    context.lineWidth = 5;
		    context.strokeStyle ="red";  // 将北京南站的7DG的弯股变为红光带（已将7号道岔从定位转到反位)
		    x=348;
		    y=368;
		    k=50;
		    context.moveTo( x, y+6 ); // x+7,y-1
		    context.lineTo( x+k+7, y+13+k);
		    context.stroke();
	}
	
	if(i==3)
	{
		    x=(255+326)/2-20
	        y=355
	 
			//context.save();  画小车
			context.fillStyle = "blue";
            
		    context.fillRect(x, y, 40, 15);
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			
			context.moveTo( x, y ); // x+7,y-1
			context.lineTo( x, y+15);
			context.lineTo( x-20, y+15);
			context.lineTo( x, y);
			context.fill();
			context.stroke();
			
			context.fillStyle = "red";
			context.fillRect(255, 370, 326-255, 5);	
			context.fillRect(163, 310, 326-163, 5);	
			
			// 3号道岔处弯股绘制
		    context.beginPath();
		    context.lineWidth = 5;
		    context.strokeStyle = 'red';		
		    x=195;
		    y=320;
		    k=50;
		    context.moveTo( x+10, y+1 ); // x+7,y-1
		    context.lineTo( x+10+k, y+1+k);
		    context.stroke();
	}
		   
	}
	
	if(jinlu_num==110)
	{	
           switch(i)
		   {
			   case 1:
			       string = rePlaceStr6(str,26,"5",169,"1",167,"3",179,"2",180,"2",181,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0167"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr4(str,169,"1",179,"2",180,"2",181,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0181"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr3(str,169,"1",179,"2",180,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0180"+string.substr(430,10));	
				   break;
				   
		       case 4:
			       string = rePlaceStr2(str,169,"1",179,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0179"+string.substr(430,10));	
				   break;
		   }	
	
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {
				x=(436+613)/2-50			
				y=115
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
		        context.fillRect(436, 130, 613-436, 5);
				
				x=660;y=130
                xiaxingxinhaojihongdeng(x,y)						    
	}
	if(i==2)
	{
	        x=653;y=130
			context.fillStyle = "black";  // 10号道岔处
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+40, y+20);
			context.lineTo( x+10, y-10);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(653, 190, 753-653, 5);
	}
	
	if(i==3)
	{
	        x=808;y=190
			context.fillStyle = "black";  // 6号道岔处
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+40, y+20);
			context.lineTo( x+10, y-10);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[3], 250, fenjiedian[4]-fenjiedian[3], 5);
	}
	
	if(i==4)
	{
	         x=(fenjiedian[4]+fenjiedian[5])/2-50
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
			context.fillRect(fenjiedian[4], 250, fenjiedian[5]-fenjiedian[4], 5);
	}

	if (i<c)
	{ 
	        i=i+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==3)
	{
		    context.fillStyle = "#848284";
			context.fillRect(613, 130, 38, 5); // 10DG的侧线股道
			
	       	context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';			
			x=652;
			y=128;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "black";
			context.fillRect(699, 183, 11, 7);
	}
	
	if(i==4)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="#848284";  // 将北京南站的6DG的弯股变为白光带（已将10号道岔从定位转到反位)
			x=808;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();
			
			context.fillStyle = "black";
			context.fillRect(855, 243, 11, 7); 
	}
	if(i==1)
	{   
		x=660;y=130
        xiaxingxinhaojibaideng(x,y)		
	}
	
	if(i==1)
	{
	
	            var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
	
	            x=(436+613)/2-50			
				y=115
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
				
				xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			    context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		        context.fillRect(436, 130, 613-436, 5);
	
	context.fillStyle = "#FFF";
	context.fillRect(613, 130, 38, 5); // 10DG的侧线股道
	context.fillRect(707, 190, 810-707, 5);
	context.fillRect(860, 250, fenjiedian[5]-860, 5);
	
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#FFF';  // 将4DG的双动道岔变为白光带
	x1=930;
	y1=260;
	x2=978;
	y2=282;
	//alert(x1)
	context.moveTo( x1, y1 ); // x+7,y-1
	context.lineTo( x2, y2);
	context.stroke();		
	
	context.fillStyle = "#FFF";
	context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
	
	        context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="#FFF";  // 将北京南站的6DG的弯股变为白光带（已将10号道岔从定位转到反位)
			x=808;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();	
	
	
	        context.fillStyle = "#FFF";
	        context.fillRect(613, 130, 38, 5); // 10DG的侧线股道
			
	        context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="#FFF";  // 将北京南站的10DG的弯股变为白光带（已将10号道岔从定位转到反位)
			x=651;
			y=128;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();
	
	context.fillStyle = "black";
	context.fillRect(848, 250, 12, 5);  // 将北京南站的6号道岔由定位转到反位(画黑块)
    context.fillRect(695, 190, 12, 5);  // 将北京南站的10号道岔由定位转到反位(画黑块)			
	//在始发站办理发车进路后的白光带显示
    
	}
	
	if(i==2)
	{
		    x=653;y=130
			context.fillStyle = "blue";  // 10号道岔处
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+40, y+20);
			context.lineTo( x+10, y-10);
			context.fill();
			context.stroke();
			
			//xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(707, 190, 753-707, 5);
	        context.fillRect(613, 130, 38, 5); // 10DG的侧线股道

	        context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="red";  // 将北京南站的10DG的弯股变为白光带（已将10号道岔从定位转到反位)
			x=652;
			y=128;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();
	}
	
	if(i==3)
	{
		   x=808;y=190
			context.fillStyle = "blue";  // 6号道岔处
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+40, y+20);
			context.lineTo( x+10, y-10);
			context.fill();
			context.stroke();
			
			//xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(860, 250, fenjiedian[4]-860, 5);
			
			context.fillStyle = "red";
			context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="red";  // 将北京南站的6DG的弯股变为白光带（已将10号道岔从定位转到反位)
			x=808;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();
	}
	
	if(i==4)
	{
		    x=(fenjiedian[4]+fenjiedian[5])/2-50
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[4], 250, fenjiedian[5]-fenjiedian[4], 5);
			
			context.beginPath();
	        context.lineWidth = 5;
	        context.strokeStyle = 'red';  // 将4DG的双动道岔变为红光带
	        x1=930;
	        y1=260;
	        x2=978;
	        y2=282;
	        context.moveTo( x1, y1 ); // x+7,y-1
	        context.lineTo( x2, y2);
	        context.stroke();			
	     }		   
	}
		  
	if(jinlu_num==111)
	{
		   switch(i)
		   {
			   case 1:
			       string = rePlaceStr6(str,27,"5",169,"1",168,"3",179,"2",180,"2",181,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0168"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr4(str,169,"1",179,"2",180,"2",181,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0181"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr3(str,169,"1",179,"2",180,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0180"+string.substr(430,10));	
				   break;
				   
		       case 4:
			       string = rePlaceStr2(str,169,"1",179,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0179"+string.substr(430,10));	
				   break;
		   }
		   
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {
				x=(406+653)/2-50			
				y=175
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
		        context.fillRect(406, 190, 653-406, 5);
				
				x=700;y=190
                xiaxingxinhaoji(x,y)						    
	}
	if(i==2)
	{
	        x=(653+753)/2-50
	        y=175
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
			context.fillRect(653, 190, 753-653, 5);
	}
	
	if(i==3)
	{
	        x=808;y=190
			context.fillStyle = "black";  // 6号道岔处
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+40, y+20);
			context.lineTo( x+10, y-10);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[3], 250, fenjiedian[4]-fenjiedian[3], 5);
	}
	
	if(i==4)
	{
	         x=(fenjiedian[4]+fenjiedian[5])/2-50
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
			context.fillRect(fenjiedian[4], 250, fenjiedian[5]-fenjiedian[4], 5);
	}

	if (i<c)
	{ 
	        i=i+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==3)
	{
		    context.fillStyle = "#848284";
			context.fillRect(613, 130, 38, 5); // 10DG的侧线股道
			
	       	context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';			
			x=652;
			y=128;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}
	
	if(i==4)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="#848284";  // 将北京南站的6DG的弯股变为白光带（已将10号道岔从定位转到反位)
			x=808;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();
			
			context.fillStyle = "black";
			context.fillRect(855, 243, 11, 7); 
	}
	if(i==1)
	{   
		x=700;y=190
        xiaxingxinhaojibaideng(x,y)		
	}
	
	if(i==3)
	{
		x=700;y=190
        xiaxingxinhaoji(x,y)
		xieshuzi(715,180,'10')
	}
	
	if(i==1)
	{
	
	            var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
	
	            x=(406+653)/2-50			
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
				
				xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			    context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		        context.fillRect(406, 190, 653-406, 5);
	
	context.fillStyle = "#FFF";
	context.fillRect(653, 190, 810-653, 5);
	context.fillRect(860, 250, fenjiedian[5]-860, 5);
	
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#FFF';  // 将4DG的双动道岔变为白光带
	x1=930;
	y1=260;
	x2=978;
	y2=282;
	//alert(x1)
	context.moveTo( x1, y1 ); // x+7,y-1
	context.lineTo( x2, y2);
	context.stroke();		
	
	context.fillStyle = "#FFF";
	context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
	
	        context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle ="#FFF";  // 将北京南站的6DG的弯股变为白光带（已将10号道岔从定位转到反位)
			x=808;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k+7, y+13+k);
			context.stroke();	
	
	
	context.fillStyle = "#FFF";
	context.fillRect(613, 130, 38, 5); // 10DG的侧线股道
			
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#FFF';			
	x=652;
	y=128;
	k=50;
	context.moveTo( x, y+6 ); // x+7,y-1
	context.lineTo( x+k, y+6+k);
	context.stroke();
	//在始发站办理发车进路后的白光带显示
    
	}
	
	if(i==2)
	{
		    x=(653+753)/2-50
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(653, 190, 753-653, 5);

	        context.fillRect(613, 130, 38, 5); // 10DG的侧线股道
			context.beginPath();
	        context.lineWidth = 5;
	        context.strokeStyle = 'red';			
	        x=652;
	        y=128;
	        k=50;
	        context.moveTo( x, y+6 ); // x+7,y-1
	        context.lineTo( x+k, y+6+k);
	        context.stroke();
	}
	
	if(i==3)
	{
		   x=808;y=190
			context.fillStyle = "blue";  // 6号道岔处
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x, y); // 起点
			context.lineTo( x+50, y+50);
			context.lineTo( x+40, y+20);
			context.lineTo( x+10, y-10);
			context.fill();
			context.stroke();
			
			//xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(860, 250, fenjiedian[4]-860, 5);
			
			context.fillStyle = "red";
			context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';   // 6DG的弯股
			x=810;
			y=189;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}
	
	if(i==4)
	{
		    x=(fenjiedian[4]+fenjiedian[5])/2-50
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[4], 250, fenjiedian[5]-fenjiedian[4], 5);
			
			context.beginPath();
	        context.lineWidth = 5;
	        context.strokeStyle = 'red';  // 将4DG的双动道岔变为红光带
	        x1=930;
	        y1=260;
	        x2=978;
	        y2=282;
	        context.moveTo( x1, y1 ); // x+7,y-1
	        context.lineTo( x2, y2);
	        context.stroke();			
	   }	
	}
		   
	if(jinlu_num==112)
	{
		   switch(i)
		   {
			   case 1:
			       string = rePlaceStr4(str,28,"5",169,"3",179,"2",180,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0169"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr3(str,169,"1",179,"2",180,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0180"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr2(str,169,"1",179,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0179"+string.substr(430,10));	
				   break;			
		   }
		
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
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
		        context.fillRect(fenjiedian[2], 250, fenjiedian[3]-fenjiedian[2], 5);
				x=800;y=250
                xiaxingxinhaojihongdeng(x,y)
						    
	}
	if(i==2)
	{
	        x=(fenjiedian[3]+fenjiedian[4])/2-50
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
			context.fillRect(fenjiedian[3], 250, fenjiedian[4]-fenjiedian[3], 5);
	}
	
	if(i==3)
	{
	        x=(fenjiedian[4]+fenjiedian[5])/2-50
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
			context.fillRect(fenjiedian[4], 250, fenjiedian[5]-fenjiedian[4], 5);
	}

	if (i<c)
	{ 
	        i=i+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==3)
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
	if(i==1)
	{   
		x=800;y=250
        xiaxingxinhaojibaideng(x,y)
	}
	
	if(i==1)
	{
	
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	x=490
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
	
	xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号	
			
	context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
	context.fillRect(fenjiedian[2], 250, fenjiedian[3]-fenjiedian[2], 5);
	
	context.fillStyle = "#FFF";
	context.fillRect(fenjiedian[3], 250, fenjiedian[5]-fenjiedian[3], 5);
	
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#FFF';  // 将4DG的双动道岔变为白光带
	x1=930;
	y1=260;
	x2=978;
	y2=282;
	//alert(x1)
	context.moveTo( x1, y1 ); // x+7,y-1
	context.lineTo( x2, y2);
	context.stroke();		
	
	context.fillStyle = "#FFF";
	context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
		
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#FFF';   // 6DG的弯股
	x=810;
	y=189;
	k=50;
	context.moveTo( x, y+6 ); // x+7,y-1
	context.lineTo( x+k, y+6+k);
	context.stroke();
	//在始发站办理发车进路后的白光带显示
    
	}
	
	if(i==2)
	{
		x=(fenjiedian[3]+fenjiedian[4])/2-50
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[3], 250, fenjiedian[4]-fenjiedian[3], 5);
			
			context.fillStyle = "red";
			context.fillRect(753, 190, 57, 5); // 6DG的侧线股道
		
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';   // 6DG的弯股
			x=810;
			y=189;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
	}
	
	if(i==3)
	{
		    x=(fenjiedian[4]+fenjiedian[5])/2-50
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[4], 250, fenjiedian[5]-fenjiedian[4], 5);
			
			context.beginPath();
	        context.lineWidth = 5;
	        context.strokeStyle = 'red';  // 将4DG的双动道岔变为红光带
	        x1=930;
	        y1=260;
	        x2=978;
	        y2=282;
	        context.moveTo( x1, y1 ); // x+7,y-1
	        context.lineTo( x2, y2);
	        context.stroke();
	    }
	 }
		   		   		   
	if(jinlu_num==113)
	{
		   switch(i)
		   {
			   case 1:
			       string = rePlaceStr5(str,29,"5",169,"1",173,"3",185,"2",186,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0173"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr3(str,169,"1",185,"2",186,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0186"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr4(str,169,"1",185,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0185"+string.substr(430,10));	
				   break;			
		   }
		
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {							
				x=490;y=295
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
		        context.fillRect(fenjiedian[2], 310, fenjiedian[3]-fenjiedian[2], 5);
				x=800;y=310
                xiaxingxinhaojihongdeng(x,y)
			
			    //fenge
			    /*context.beginPath();
			    context.lineWidth = 5;
			    context.strokeStyle = '#848284';
			    x=810;
			    y=249;
			    k=50;
			    context.moveTo( x, y+6 ); // x+7,y-1
			    context.lineTo( x+k, y+6+k);
			    context.stroke();*/	

	}
	if(i==2)
	{
	        x=(fenjiedian[3]+fenjiedian[4])/2-50
	        y=295
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
			context.fillRect(fenjiedian[3], 310, fenjiedian[4]-fenjiedian[3], 5);
	}
	
	if(i==3)
	{
	        x=(fenjiedian[4]+fenjiedian[5])/2-50
	        y=295
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
			context.fillRect(fenjiedian[4], 310, fenjiedian[5]-fenjiedian[4], 5);
	}

	if (i<c)
	{ 
	        i=i+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==3)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 370, 57, 5); // 6DG的侧线股道
		
			context.beginPath();    // 6DG的弯股
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			
			x=810;
			y=371;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
	if(i==1)
	{   
		x=800;y=310
        xiaxingxinhaojibaideng(x,y)
	}
	
	if(i==1)
	{
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	x=490
	y=295
		 
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
	
	xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号	
			
	context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
	context.fillRect(fenjiedian[2], 310, fenjiedian[3]-fenjiedian[2], 5);
	
	context.fillStyle = "#FFF";
	context.fillRect(fenjiedian[3], 310, fenjiedian[5]-fenjiedian[3], 5);
	
	//4DG的双动道岔
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
	
	context.beginPath();   // 8DG的弯股
	context.lineWidth = 5;
	context.strokeStyle = '#FFF';
			
	x=810;
	y=371;
	k=50;
	context.moveTo( x, y-1 ); // x+7,y-1
	context.lineTo( x+k, y-1-k);
	context.stroke();
	//在始发站办理发车进路后的白光带显示
    
	}
	
	if(i==2)
	{
		x=(fenjiedian[3]+fenjiedian[4])/2-50
	        y=295
	 
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[3], 310, fenjiedian[4]-fenjiedian[3], 5);
			
			context.fillStyle = "red";
			context.fillRect(753, 370, 57, 5); // 6DG的侧线股道
		
			context.beginPath();   // 8DG的弯股
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			
			x=810;
			y=371;
			k=50;
			context.moveTo( x, y-1 ); // x+7,y-1
			context.lineTo( x+k, y-1-k);
			context.stroke();
	}
	
	if(i==3)
	{
		    x=(fenjiedian[4]+fenjiedian[5])/2-50
	        y=295
	 
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[4], 310, fenjiedian[5]-fenjiedian[4], 5);
			
			context.beginPath();  /// 4DG的双动道岔变红
	        context.lineWidth = 5;
	        context.strokeStyle = 'red';
	        x1=978;
	        y1=282;
	        x2=1025;
	        y2=304;
	        context.moveTo( x1, y1 ); // x+7,y-1
	        context.lineTo( x2, y2);
	        context.stroke();
			
	   }
	}
		   
    if(jinlu_num==114)
	{
		   switch(i)
		   {
			   case 1:
			       string = rePlaceStr6(str,30,"5",169,"1",174,"3",185,"2",186,"2",187,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0174"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr4(str,169,"1",185,"2",186,"2",187,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0187"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr3(str,169,"1",185,"2",186,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0186"+string.substr(430,10));	
				   break;
				   
		       case 4:
			       string = rePlaceStr4(str,169,"1",185,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0185"+string.substr(430,10));	
				   break;
		   }
		
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {
				x=(406+653)/2-50			
				y=355
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
		        context.fillRect(406, 370, 653-406, 5);
				
				x=700;y=370
                xiaxingxinhaoji(x,y)						    
	}
	if(i==2)
	{
	        x=(653+753)/2-50
	        y=355
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
			context.fillRect(653, 370, 753-653, 5);
	}
	
	if(i==3)
	{
	        x=834;y=342
			context.fillStyle = "black";   // 北京南站8号道岔

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x-25, y+25); // 起点
			context.lineTo( x+25, y-25);
			context.lineTo( x+1, y-20);
			context.lineTo( x-36, y+17);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[3], 310, fenjiedian[4]-fenjiedian[3], 5);
	}
	
	if(i==4)
	{
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
			context.fillRect(fenjiedian[4], 310, fenjiedian[5]-fenjiedian[4], 5);
	}

	if (i<c)
	{ 
	        i=i+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==3)
	{
		    context.fillStyle = "#848284";
			context.fillRect(613, 430, 38, 5); // 12DG的侧线股道
			
	       	context.beginPath(); // 12号道岔的弯股道岔，定位时
			context.lineWidth = 5;
			context.strokeStyle = '#848284';
			x=654;
			y=434;
			k=50;
			context.moveTo( x, y-3 ); // x+7,y-1
			context.lineTo( x+k, y-3-k);
			context.stroke(); 
	}
	
	if(i==4)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 370, 57, 5); // 8DG的侧线股道
		
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#848284";   // 将北京南站的8DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------

	        x=800;
	        y=372;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();	
			
			context.fillStyle = "black";
			context.fillRect(856, 315, 11, 7); 
	}
	if(i==1)
	{   
		x=700;y=370
        xiaxingxinhaojibaideng(x,y)		
	}
	
	if(i==3)
	{
		x=700;y=370
        xiaxingxinhaoji(x,y)
		//xieshuzi(715,180,'12')
	}
	
	if(i==1)
	{
	
	            var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
	
	            x=(406+653)/2-50			
				y=355
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
				
				xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			    context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		        context.fillRect(406, 370, 653-406, 5);
	
	context.fillStyle = "#FFF";
	context.fillRect(653, 370, 810-653, 5);
	context.fillRect(860, 310, fenjiedian[5]-860, 5);
	
	//4DG的双动道岔
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
	
	context.fillStyle = "#FFF";
	context.fillRect(753, 370, 57, 5); // 8DG的侧线股道
		
	        context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#FFF";   // 将北京南站的8DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------

	        x=800;
	        y=372;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();		
	
	
	        context.fillStyle = "#FFF";
	        context.fillRect(613, 430, 38, 5); // 12DG的侧线股道
			
	        context.beginPath(); // 12号道岔的弯股道岔，定位时
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=654;
			y=434;
			k=50;
			context.moveTo( x, y-3 ); // x+7,y-1
			context.lineTo( x+k, y-3-k);
			context.stroke();    
	}
	
	if(i==2)
	{
		    x=(653+753)/2-50
	        y=355
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(653, 370, 753-653, 5);

	        context.fillRect(613, 430, 38, 5); // 12DG的侧线股道
			
			context.beginPath(); // 12号道岔的弯股道岔，定位时
			context.lineWidth = 5;
			context.strokeStyle = 'red';
			x=654;
			y=434;
			k=50;
			context.moveTo( x, y-3 ); // x+7,y-1
			context.lineTo( x+k, y-3-k);
			context.stroke(); 
	}
	
	if(i==3)
	{
		    x=834;y=342
			context.fillStyle = "blue";   // 北京南站8号道岔

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x-25, y+25); // 起点
			context.lineTo( x+25, y-25);
			context.lineTo( x+1, y-20);
			context.lineTo( x-36, y+17);
			context.fill();
			context.stroke();
			
			//xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(860, 310, fenjiedian[4]-860, 5);
			
			context.fillStyle = "red";
			context.fillRect(753, 370, 57, 5); // 8DG的侧线股道
		
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="red";   // 将北京南站的8DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------

	        x=800;
	        y=372;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();	
			
			context.fillStyle = "black";
			context.fillRect(856, 315, 11, 7);
	}
	
	if(i==4)
	{
		    x=(fenjiedian[4]+fenjiedian[5])/2-50
	        y=295
	 
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[4], 310, fenjiedian[5]-fenjiedian[4], 5);
			
			//4DG的双动道岔
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
	   }		   
	}
		  
	if(jinlu_num==115)
	{
		   switch(i)
		   {
			   case 1:
			       string = rePlaceStr6(str,31,"5",169,"1",175,"3",185,"2",186,"2",187,"2");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0175"+string.substr(430,10));	
				   break;
				  
			   case 2:
			       string = rePlaceStr4(str,169,"1",185,"2",186,"2",187,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0187"+string.substr(430,10));	
				   break;
		       
			   case 3:
			       string = rePlaceStr3(str,169,"1",185,"2",186,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0186"+string.substr(430,10));	
				   break;
				   
		       case 4:
			       string = rePlaceStr4(str,169,"1",185,"3");			   
			       setCookie("站场图",string.substr(0,422)+Cch1+"0185"+string.substr(430,10));	
				   break;
		   }
		
		   var canvas = document.getElementById("canvas");
           var context = canvas.getContext("2d");
			//var i;
	       if(i==1)
	        {
				x=(436+613)/2-50			
				y=415
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
		        context.fillRect(436, 430, 613-436, 5);
				
				x=660;y=430
                xiaxingxinhaojihongdeng(x,y)						    
	}
	if(i==2)
	{
	        x=680;y=402
			context.fillStyle = "black";   // 北京南站8号道岔

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x-25, y+25); // 起点
			context.lineTo( x+25, y-25);
			context.lineTo( x+1, y-20);
			context.lineTo( x-36, y+17);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(653, 370, 753-653, 5);
	}
	
	if(i==3)
	{
	        x=834;y=342
			context.fillStyle = "black";   // 北京南站8号道岔

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			
			context.moveTo( x-25, y+25); // 起点
			context.lineTo( x+25, y-25);
			context.lineTo( x+1, y-20);
			context.lineTo( x-36, y+17);
			context.fill();
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(fenjiedian[3], 310, fenjiedian[4]-fenjiedian[3], 5);
	}
	
	if(i==4)
	{
	         x=(fenjiedian[4]+fenjiedian[5])/2-50
	        y=295
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
			context.fillRect(fenjiedian[4], 310, fenjiedian[5]-fenjiedian[4], 5);
	}

	if (i<c)
	{ 
	        i=i+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(i==3)
	{
		    context.fillStyle = "#848284";
			context.fillRect(613, 430, 38, 5); // 10DG的侧线股道
			
	       	context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#848284";   // 将北京南站的8DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------

	        x=643;
	        y=432;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();	
			
			context.fillStyle = "black";
			context.fillRect(698, 375, 11, 7);
	}
	
	if(i==4)
	{
		    context.fillStyle = "#848284";
			context.fillRect(753, 370, 57, 5); // 6DG的侧线股道
		
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#848284";   // 将北京南站的8DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------

	        x=800;
	        y=372;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();	
			
			context.fillStyle = "black";
			context.fillRect(856, 315, 11, 7); 
	}
	if(i==1)
	{   
		x=660;y=430
        xiaxingxinhaojibaideng(x,y)		
	}
	
	if(i==1)
	{
	
	            var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
	
	            x=(436+613)/2-50			
				y=415
		        context.fillStyle = "blue";
            
		        context.fillRect(x, y, 60, 15);
			    context.beginPath();
			    context.lineWidth = 1;
			    context.strokeStyle = 'blue';
				
				xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			    context.moveTo( x+60, y ); // x+7,y-1
			    context.lineTo( x+60, y+15);
			    context.lineTo( x+90, y+15);
			    context.lineTo( x+60, y);
			    context.fill();
			    context.stroke();
			
			    context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
		        context.fillRect(436, 430, 613-436, 5);
	
	context.fillStyle = "#FFF";
	context.fillRect(613, 430, 38, 5); // 12DG的侧线股道
	context.fillRect(707, 370, 810-707, 5);
	context.fillRect(860, 310, fenjiedian[5]-860, 5);
	
	//4DG的双动道岔
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
	
	context.fillStyle = "#FFF";
	context.fillRect(753, 370, 57, 5); // 8DG的侧线股道
	
	        context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#FFF";   // 将北京南站的12DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------

	        x=643;
	        y=432;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();
			
			
	        context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#FFF";   // 将北京南站的8DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------

	        x=800;
	        y=372;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();	
	
	context.fillStyle = "black";
	context.fillRect(692, 370, 12, 5);  // 将北京南站的12号道岔由定位转到反位(画黑块)	
    context.fillRect(850, 310, 12, 5);  // 将北京南站的8号道岔由定位转到反位(画黑块)	
	//在始发站办理发车进路后的白光带显示
    
	}
	
	if(i==2)
	{
		    x=680;y=402
			context.fillStyle = "blue";   // 北京南站10号道岔

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x-25, y+25); // 起点
			context.lineTo( x+25, y-25);
			context.lineTo( x+1, y-20);
			context.lineTo( x-36, y+17);
			context.fill();
			context.stroke();
			
			//xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(707, 370, 753-707, 5);
	        context.fillRect(613, 430, 38, 5); // 12DG的侧线股道

	        context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="red";   // 将北京南站的12DG的弯股变为红光带(已将将道岔的定位扳到反位）-----------

	        x=643;
	        y=432;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();	
	}
	
	if(i==3)
	{
		   x=834;y=342
			context.fillStyle = "blue";   // 北京南站8号道岔

			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			
			context.moveTo( x-25, y+25); // 起点
			context.lineTo( x+25, y-25);
			context.lineTo( x+1, y-20);
			context.lineTo( x-36, y+17);
			context.fill();
			context.stroke();
			
			//xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(860, 310, fenjiedian[4]-860, 5);
			
			context.fillStyle = "red";
			context.fillRect(753, 370, 57, 5); // 8DG的侧线股道
		
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="red";   // 将北京南站的8DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------

	        x=800;
	        y=372;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();
	}
	
	if(i==4)
	{
		    x=(fenjiedian[4]+fenjiedian[5])/2-50
	        y=295
	 
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[4], 310, fenjiedian[5]-fenjiedian[4], 5);
			
			//4DG的双动道岔
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
	   }		   
	}
		
}