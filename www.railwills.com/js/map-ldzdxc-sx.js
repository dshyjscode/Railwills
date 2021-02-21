// 按照列调下发的上行行车计划自动行车
$.cookie.json=true;
// 上行行车停车站判断
//p=45;  // p值用于判断下行列车在哪个车站
//d=34;  // d值用于判断上行列车在哪个车站停车

/*if(d==3)    // 上行列车在北京南站停车
{	
	setInterval("shangxingzilvmoshizouche_beijing()","1000");
}

if(d==14)   // 上行列车在天津南站停车
{
	setInterval("shangxingzilvmoshizouche_tianjin()","1000");
}

if(d==24)   // 上行列车在济南西站停车
{	
	setInterval("shangxingzilvmoshizouche_jinan()","1000");
}

if(d==34)   // 上行列车在南京南站停车
{
	setInterval("shangxingzilvmoshizouche_nanjing()","1000");
}

if(d==44)   // 上行列车在苏州北站停车
{
	setInterval("shangxingzilvmoshizouche_suzhou()","1000");
}*/


function shangxingzilvmoshizouche_beijing()      // 终点站在北京南站的上行行车
{
	        var string=null;
	        var str=$.cookie("zhanchangtu");    // 获取站场图大排队信息的初始状态
			switch(p)     // 每当列车位置改变，即对大排队信息进行更新
			{
				case 54:
				    string = rePlaceStr4(str,111,"1",291,"2",292,"2",293,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0295"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"295"+"AC");	
			        break;	
				
				case 53:
				    string = rePlaceStr4(str,291,"2",292,"2",293,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0293"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"293"+"AC");	
			        break;	
					
				case 52:
				    string = rePlaceStr3(str,291,"2",292,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0292"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"292"+"AC");	
			        break;	
					
				case 51:
				    string = rePlaceStr2(str,291,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0291"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"291"+"AC");	
			        break;	
					
				case 50:
				    string = rePlaceStr2(str,290,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0290"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"290"+"AC");		
			        break;	
					
				case 49:
				    string = rePlaceStr2(str,289,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0289"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"289"+"AC");	
			        break;	
					
				case 48:
				    string = rePlaceStr2(str,274,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0274"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"274"+"AC");	
			        break;	
					
				case 47:
				    string = rePlaceStr2(str,275,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0275"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"275"+"AC");	
			        break;	
				
				case 46:
				    string = rePlaceStr5(str,90,"1",268,"2",276,"3",277,"2",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0276"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"276"+"AC");	
			        break;	
				
				case 45:
				    string = rePlaceStr3(str,268,"2",277,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0277"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"277"+"AC");	
			        break;	
					
				case 44:
				    if(d<44)
					{
				        string = rePlaceStr5(str,94,"1",266,"2",267,"2",268,"3",295,"1");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0268"+string.substr(430,10));	
					}
					else if(d==44)
					{   
					    string = rePlaceStr3(str,94,"1",268,"3",295,"1");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0268"+string.substr(430,10));
					}
					//setCookie("lieche_1","AB"+Cch1+"268"+"AC");	
			        break;	
					
				case 43:
				    string = rePlaceStr3(str,266,"2",267,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0267"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"267"+"AC");	
			        break;	
					
				case 42:
				    string = rePlaceStr2(str,266,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0266"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"266"+"AC");	
			        break;	
					
				case 41:
				    string = rePlaceStr2(str,265,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0265"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"265"+"AC");	
			        break;
					
				case 40:
				    string = rePlaceStr2(str,264,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0264"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"264"+"AC");		
			        break;
					
				case 39:    // 此时列车在区间，将其大排队信息定义为初始状态
				    string = rePlaceStr2(str,264,"1",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0000"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"264"+"AC");		
			        break;
					
				case 38:
				    string = rePlaceStr2(str,252,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0252"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"252"+"AC");	
			        break;
					
				case 37:
				    string = rePlaceStr2(str,253,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0253"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"253"+"AC");		
			        break;
					
				case 36:
				    string = rePlaceStr5(str,76,"1",246,"2",246,"2",255,"2",254,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0254"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"254"+"AC");	
			        break;
					
				case 35:
				    string = rePlaceStr3(str,246,"2",255,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0255"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"255"+"AC");	
			        break;
					
				case 34:
				    if(d<34)
					{
				    string = rePlaceStr5(str,80,"1",244,"2",245,"2",246,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0246"+string.substr(430,10));
					}
					else if(d==34)
					{
						string = rePlaceStr3(str,80,"1",246,"3",295,"1");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0246"+string.substr(430,10));
					}
					//setCookie("lieche_1","AB"+Cch1+"246"+"AC");	
			        break;
					
				case 33:
				    string = rePlaceStr3(str,244,"12",245,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0245"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"245"+"AC");	
			        break;
					
				case 32:
				    string = rePlaceStr2(str,244,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0244"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"244"+"AC");	
			        break;
					
				case 31:
				    string = rePlaceStr2(str,243,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0243"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"243"+"AC");	
			        break;
					
				case 30:
				    string = rePlaceStr2(str,242,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0242"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"242"+"AC");	
			        break;
					
				case 29:   // 此时列车在区间，将其大排队信息定义为初始状态
				    string = rePlaceStr2(str,242,"1",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0000"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"242"+"AC");	
			        break;
					
				case 28:
				    string = rePlaceStr2(str,230,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0230"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"230"+"AC");	
			        break;
					
				case 27:
				    string = rePlaceStr2(str,231,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0231"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"231"+"AC");	
			        break;
					
				case 26:
				    string = rePlaceStr5(str,62,"1",224,"2",233,"2",232,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0232"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"232"+"AC");	
			        break;
					
				case 25:
				    string = rePlaceStr3(str,224,"2",233,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0233"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"233"+"AC");	
			        break;
					
				case 24:
				    if(d<24)
					{					
				    string = rePlaceStr5(str,66,"1",222,"2",223,"2",224,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0224"+string.substr(430,10));
					}
					else if(d==24)
					{
						string = rePlaceStr3(str,66,"1",224,"3",295,"1");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0224"+string.substr(430,10));
					}
					//setCookie("lieche_1","AB"+Cch1+"224"+"AC");		
			        break;
					
				case 23:
				    string = rePlaceStr3(str,222,"2",223,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0223"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"223"+"AC");	
			        break;
					
				case 22:
				    string = rePlaceStr2(str,222,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0222"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"222"+"AC");	
			        break;
					
				case 21:
				    string = rePlaceStr2(str,221,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0221"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"221"+"AC");	
			        break;
					
				case 20:
				    string = rePlaceStr2(str,220,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0220"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"220"+"AC");		
			        break;
					
				case 19:
				    string = rePlaceStr2(str,207,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0207"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"207"+"AC");		
			        break;
					
				case 18:
				    string = rePlaceStr2(str,208,"3",295,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0208"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"208"+"AC");	
			        break;
					
				case 17:
				    string = rePlaceStr6(str,48,"1",200,"2",209,"3",210,"2",211,"2",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0209"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"209"+"AC");	
			        break;
					
				case 16:
				    string = rePlaceStr4(str,200,"2",210,"3",211,"2",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0210"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"210"+"AC");	
			        break;
					
				case 15:
				    string = rePlaceStr3(str,200,"2",211,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0211"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"211"+"AC");	
			        break;
					
				case 14:
				    if(d<14)
				    {
				    string = rePlaceStr5(str,52,"1",198,"2",199,"2",200,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0200"+string.substr(430,10));	
					}
					else if(d==14)
					{
						string = rePlaceStr3(str,52,"1",200,"3",295,"1");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0200"+string.substr(430,10));
					}
					//setCookie("lieche_1","AB"+Cch1+"200"+"AC");	
			        break;
					
				case 13:
				    string = rePlaceStr3(str,198,"2",199,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0199"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"199"+"AC");	
			        break;
					
				case 12:
				    string = rePlaceStr2(str,198,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0198"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"198"+"AC");	
			        break;
					
				case 11:
				    string = rePlaceStr2(str,197,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0197"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"197"+"AC");	
			        break;
					
				case 10:
				    string = rePlaceStr2(str,196,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0196"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"196"+"AC");	
			        break;
					
				case 9:   // 此时列车在区间，将其大排队信息定义为初始状态
				    string = rePlaceStr2(str,196,"1",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0000"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"196"+"AC");	
			        break;
					
				case 8:
				    string = rePlaceStr2(str,182,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0182"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"182"+"AC");	
			        break;
					
				case 7:
				    string = rePlaceStr2(str,183,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0183"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"183"+"AC");	
			        break;
					
				case 6:
				    string = rePlaceStr6(str,32,"1",173,"2",184,"3",185,"2",186,"2",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0184"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"184"+"AC");		
			        break;
					
				case 5:
				    string = rePlaceStr4(str,173,"2",186,"2",185,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0185"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"185"+"AC");	
			        break;
					
				case 4:
				    string = rePlaceStr3(str,173,"2",186,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0186"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"186"+"AC");	
			        break;
					
				case 3:
				    string = rePlaceStr2(str,173,"3",295,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0173"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"173"+"AC");	
			        break;
									
			}
			
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
	else if(p<54)
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
	 
	if (p>d)
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
	
	/* if(p==54)
	{
		x=10203;y=340
        shangxingxinhaojilvdeng2(x,y)
	}*/
			   
	
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
	
	if(p==44&&d<44)
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
	
	if(p==34&&d<34)
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
	
	if(p==24&&d<24)
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
	
	if(p==14&&d<14)
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
	
	if(p==54)
	{
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	        
            
    context.fillStyle = "#FFF";
	context.fillRect(fenjiedian[p-4], 310, fenjiedian[p-1]-fenjiedian[p-4], 5);
			
	context.fillStyle = "#FFF";
	context.fillRect(10145, 370, 45, 5);
			
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#FFF';	
	x=10083;
	y=320;
	k=50;
	context.moveTo( x+10, y+1 ); // x+7,y-1
	context.lineTo( x+10+k, y+1+k);
	context.stroke();
						
	//渡线处白光带
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#FFF';
	x1=9938;
	y1=303;
	x2=9985;
	y2=282;
	context.moveTo( x1, y1 ); // x+7,y-1
	context.lineTo( x2, y2);
	context.stroke();
	
	x=10203;y=340
    shangxingxinhaojilvdeng(x,y)
	
	x=10399;y=295
	xieshuzi(x+20,y+12,Cch1)    //在此处可写车次号
	} 
	
	 if(p>5&&p<54)
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
			
			xieshuzi(x+20,y+12,Cch1)    //在此处可写车次号
			
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
			
			if(p==44&&d<44)
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
			
			if(p==34&&d<34)
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
			
			if(p==24&&d<24)
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
			
			if(p==14&&d<14)
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
			
			xieshuzi(x+20,y+12,Cch1)    //在此处可写车次号
			
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
			
			xieshuzi(x+20,y+12,Cch1)    //在此处可写车次号
			
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
			
			xieshuzi(x+20,y+12,Cch1)    //在此处可写车次号
			
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
			bisaifenqu(4225,248,257)
			bisaifenqu(4225,308,317)
			
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



//    第二辆车（第一辆车在正线）-------------------

function xxzilvmoshizouche()
{
	        var string=null;
	        var str=$.cookie("站场图");    // 获取站场图大排队信息的初始状态
			
			switch(f)      // 每当列车位置改变，即对大排队信息进行更新
			{
				
				case 3:
				    string = rePlaceStr5(str,28,"1",169,"3",178,"2",179,"2",180,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0169"+"AC");
					//alert($.cookie("站场图"))	
					//setCookie("lieche_2","AB"+Cch2+"169"+"AC");	
			        break;	
				
				case 4:
				    string = rePlaceStr4(str,169,"1",178,"2",179,"2",180,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0180"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"180"+"AC");	
			        break;	
					
				case 5:
				    string = rePlaceStr3(str,169,"1",178,"2",179,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0179"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"179"+"AC");	
			        break;	
					
				case 6:
				    string = rePlaceStr2(str,169,"1",178,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0178"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"178"+"AC");	
			        break;	
					
				case 7:
				    string = rePlaceStr2(str,169,"1",177,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0177"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"177"+"AC");		
			        break;	
					
				case 8:
				    string = rePlaceStr2(str,169,"1",176,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0176"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"176"+"AC");	
			        break;	
					
				case 9:   // 此时列车在区间，将其大排队信息定义为初始状态
				    string = rePlaceStr2(str,169,"1",176,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0000"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"176"+"AC");	
			        break;
					
				case 10:
				    string = rePlaceStr2(str,169,"1",190,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0190"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"190"+"AC");		
			        break;	
					
				case 11:
				    string = rePlaceStr2(str,169,"1",191,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0191"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"191"+"AC");	
			        break;	
				
				case 12:
				    string = rePlaceStr5(str,42,"1",169,"1",192,"3",193,"2",195,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0192"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"192"+"AC");	
			        break;	
				
				case 13:
				    string = rePlaceStr3(str,169,"1",193,"3",195,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0193"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"193"+"AC");		
			        break;	
					
				case 14:
				    if(g>14)
					{
				    string = rePlaceStr6(str,45,"1",169,"1",195,"3",204,"2",205,"2",206,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0195"+"AC");
					}
					else if(g==14)
					{
						string = rePlaceStr3(str,45,"1",169,"1",195,"3");			   
			            setCookie("站场图",string.substr(0,430)+Cch2+"0195"+"AC");
						//alert($.cookie("站场图"))
					}
					//alert($.cookie("站场图"))
					//setCookie("lieche_2","AB"+Cch2+"195"+"AC");		
			        break;	
					
				case 15:
				    string = rePlaceStr4(str,169,"1",204,"2",205,"2",206,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0206"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"206"+"AC");		
			        break;	
					
				case 16:
				    string = rePlaceStr3(str,169,"1",204,"2",205,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0205"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"205"+"AC");	
			        break;	
					
				case 17:
				    string = rePlaceStr2(str,169,"1",204,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0204"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"204"+"AC");		
			        break;
					
				case 18:
				    string = rePlaceStr2(str,169,"1",203,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0203"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"203"+"AC");		
			        break;
					
				case 19:
				    string = rePlaceStr2(str,169,"1",202,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0202"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"202"+"AC");		
			        break;
					
				case 20:
				    string = rePlaceStr2(str,169,"1",214,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0214"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"214"+"AC");
			        break;
					
				case 21:
				    string = rePlaceStr2(str,169,"1",215,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0215"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"215"+"AC");	
			        break;
					
				case 22:
				    string = rePlaceStr5(str,56,"1",169,"1",216,"3",217,"2",219,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0216"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"216"+"AC");
			        break;
					
				case 23:
				    string = rePlaceStr3(str,169,"1",217,"3",219,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0217"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"217"+"AC");
			        break;
					
				case 24:
				    if(g>24)
					{
						string = rePlaceStr5(str,59,"1",169,"1",219,"3",228,"2",229,"2");			   
			            setCookie("站场图",string.substr(0,430)+Cch2+"0219"+"AC");
					}
				    else if(g==24)
					{
						string = rePlaceStr3(str,59,"1",169,"1",219,"3");			   
			            setCookie("站场图",string.substr(0,430)+Cch2+"0219"+"AC");
					}
					//setCookie("lieche_2","AB"+Cch2+"219"+"AC");	
			        break;
					
				case 25:
				    string = rePlaceStr3(str,169,"1",228,"2",229,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0229"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"229"+"AC");
			        break;
					
				case 26:
				    string = rePlaceStr2(str,169,"1",228,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0228"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"228"+"AC");
			        break;
					
				case 27:
				    string = rePlaceStr2(str,169,"1",227,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0227"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"227"+"AC");
			        break;
					
				case 28:
				    string = rePlaceStr2(str,169,"1",226,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0226"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"226"+"AC");	
			        break;
					
				case 29:   // 此时列车在区间，将其大排队信息定义为初始状态
				    string = rePlaceStr2(str,169,"1",226,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0000"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"226"+"AC");	
			        break;
					
				case 30:
				    string = rePlaceStr2(str,169,"1",236,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0236"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"236"+"AC");	
			        break;
					
				case 31:
				    string = rePlaceStr2(str,169,"1",237,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0237"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"237"+"AC");
			        break;
					
				case 32:
				    string = rePlaceStr5(str,70,"1",169,"1",238,"3",239,"2",241,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0238"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"238"+"AC");
			        break;
					
				case 33:
				    string = rePlaceStr3(str,169,"1",239,"3",241,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0239"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"239"+"AC");
			        break;
					
				case 34:
				    if(g>34)
					{
						string = rePlaceStr5(str,73,"1",169,"1",241,"3",250,"2",251,"2");			   
			            setCookie("站场图",string.substr(0,430)+Cch2+"0241"+"AC");
					}
				    else if(g==34)
					{
						string = rePlaceStr3(str,73,"1",169,"1",241,"3");			   
			            setCookie("站场图",string.substr(0,430)+Cch2+"0241"+"AC");
					}
					//setCookie("lieche_2","AB"+Cch2+"241"+"AC");
			        break;
					
				case 35:
				    string = rePlaceStr3(str,169,"1",250,"2",251,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0251"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"251"+"AC");
			        break;
					
				case 36:
				    string = rePlaceStr2(str,169,"1",250,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0250"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"250"+"AC");
			        break;
					
				case 37:
				    string = rePlaceStr2(str,169,"1",249,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0249"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"249"+"AC");
			        break;
					
				case 38:
				    string = rePlaceStr2(str,169,"1",248,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0248"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"248"+"AC");
			        break;
					
				case 39:   // 此时列车在区间，将其大排队信息定义为初始化状态
				    string = rePlaceStr2(str,169,"1",248,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0000"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"248"+"AC");
			        break;
					
				case 40:
				    string = rePlaceStr2(str,169,"1",258,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0258"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"258"+"AC");
			        break;
					
				case 41:
				    string = rePlaceStr2(str,169,"1",259,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0259"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"259"+"AC");
			        break;
					
				case 42:
				    string = rePlaceStr5(str,84,"1",169,"1",260,"3",261,"2",263,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0260"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"260"+"AC");
			        break;
					
				case 43:
				    string = rePlaceStr3(str,169,"1",261,"3",263,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0261"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"261"+"AC");	
			        break;
					
				case 44:
				    if(g>44)
					{
						string = rePlaceStr5(str,87,"1",169,"1",263,"3",272,"2",273,"2");			   
			            setCookie("站场图",string.substr(0,430)+Cch2+"0263"+"AC");
					}
				    else if(g==44)
					{
						string = rePlaceStr3(str,87,"1",169,"1",263,"3");			   
			            setCookie("站场图",string.substr(0,430)+Cch2+"0263"+"AC");
					}
					//setCookie("lieche_2","AB"+Cch2+"263"+"AC");
			        break;
					
				case 45:
				    string = rePlaceStr3(str,169,"1",272,"2",273,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0273"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"273"+"AC");
			        break;
					
				case 46:
				    string = rePlaceStr2(str,169,"1",272,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0272"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"272"+"AC");	
			        break;
					
				case 47:
				    string = rePlaceStr2(str,169,"1",271,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0271"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"271"+"AC");	
			        break;
					
				case 48:
				    string = rePlaceStr2(str,169,"1",270,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0270"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"270"+"AC");
			        break;
					
				case 49:
				    string = rePlaceStr2(str,169,"1",280,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0280"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"280"+"AC");	
			        break;
					
				case 50:
				    string = rePlaceStr2(str,169,"1",281,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0281"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"281"+"AC");	
			        break;
					
				case 51:
				    string = rePlaceStr6(str,98,"1",169,"1",282,"3",283,"2",284,"2",288,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0282"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"282"+"AC");
			        break;
					
				case 52:
				    string = rePlaceStr4(str,169,"1",283,"3",284,"2",288,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0283"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"283"+"AC");
			        break;
					
				case 53:
				    string = rePlaceStr3(str,169,"1",284,"3",288,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0284"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"284"+"AC");
			        break;
					
				case 54:
				    string = rePlaceStr2(str,169,"1",288,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0288"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"288"+"AC");
			        break;					
			}
			
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
	        if(f==3)
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
		        context.fillRect(fenjiedian[f-1], 250, fenjiedian[f]-fenjiedian[f-1], 5);
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
	else if(f>3)
	{
	        x=(fenjiedian[f-1]+fenjiedian[f])/2-50
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
			context.fillRect(fenjiedian[f-1], 250, fenjiedian[f]-fenjiedian[f-1], 5);
	}

	if (f<g)
	{ 
	        f=f+1
	}
	
	// 当小车运行到4DG时，把小车经过的上一个道岔区段恢复之前的状态
	if(f==5)
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
	if(f==6)
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
	
	if(f==13)
	{
		    context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[f], 250, fenjiedian[f+1]-fenjiedian[f], 5);
	}
	
	// 当小车运行到天津南站的1G时，把小车经过的上一个道岔区段恢复之前的状态
	if(f==14)
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
	if(f==16)
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
	if(f==17)
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
	if(f==24)
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
	if(f==26)
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
	if(f==34)
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
	if(f==36)
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
    if(f==44)
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
	if(f==46)
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
    if(f==53)
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
	if(f==54)
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
	
	
	if (f==5)
	{
		    x=800;y=250
		    xiaxingxinhaojihongdeng3(x,y)		
	}
	
	//经过天津南站时
	if(f==12)
	{
			x=2320;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(f==13)
	{
			x=2320;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(f==14)
	{
			x=2320;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(f==14&&g>14)
	{
		    x=2970;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(f==15)
	{			
	        x=2970;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
	if(f==16)
	{			
	        x=2970;y=250
            xiaxingxinhaojihongdeng3(x,y)	
	}
	
	//经过济南西站时
	if(f==22)
	{
			x=4281;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(f==23)
	{
			x=4281;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(f==24)
	{
			x=4281;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(f==24&&g>24)
	{
			x=4931;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(f==25)
	{			
	        x=4931;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
	if(f==26)
	{			
	        x=4931;y=250
            xiaxingxinhaojihongdeng3(x,y)	
	}
	
	//经过南京南站时
	if(f==32)
	{
			x=6222;y=250
            xiaxingxinhaojilvdeng2(x,y)

	}
	if(f==33)
	{
			x=6222;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(f==34)
	{
		    x=6222;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(f==34&&g>34)
	{
		    x=6872;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(f==35)
	{			
	        x=6872;y=250
            xiaxingxinhaojihongdeng(x,y)	
	}
	if(f==36)
	{			
	        x=6872;y=250
            xiaxingxinhaojihongdeng3(x,y)	
	}
	
	//经过苏州北站时
	if(f==42)
	{
			x=8163;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(f==43)
	{
			x=8163;y=250
            xiaxingxinhaojihongdeng(x,y)
	}
    if(f==44)
	{
			x=8163;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(f==44&&g>44)
	{
			x=8813;y=250
            xiaxingxinhaojilvdeng(x,y)
	}
	
    if(f==45)
	{			
	        x=8813;y=250
            xiaxingxinhaojihongdeng(x,y)	
	}
	if(f==46)
	{			
	        x=8813;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	//经过上海虹桥站
	if(f==51)
	{
			x=9959;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(f==52)
	{			
	        x=9959;y=250
            xiaxingxinhaojihongdeng(x,y)
		
	}
	if(f==53)
	{			
	        x=9959;y=250
            xiaxingxinhaojihongdeng3(x,y)
		
	}
	
	if(f==3)
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
	
	xieshuzi(x+35,y+12,Cch2)   // 次式可在车身上写车次号	
			
	context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
	context.fillRect(fenjiedian[f-1], 250, fenjiedian[f]-fenjiedian[f-1], 5);
	
	x=800;y=250
    xiaxingxinhaojilvdeng2(x,y)
            			
	//在始发站办理发车进路后的白光带显示
    context.fillStyle = "#FFF";
	context.fillRect(fenjiedian[f], 250, fenjiedian[f+3]-fenjiedian[f], 5);
				
	context.fillStyle = "#FFF";
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
	context.strokeStyle = '#FFF';  // 将4DG的双动道岔变为白光带
	x1=930;
	y1=260;
	x2=978;
	y2=282;
	context.moveTo( x1, y1 ); // x+7,y-1
	context.lineTo( x2, y2);
	context.stroke();	
	}
	
	 if(f>3&&f<52)
    {
	        
			
			// 当小车运行到北京南站的6DG时
			if(f==4)
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
			if(f==5)
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
			if(f==12)
			{
		    context.fillStyle = "#FFF";  // 将接车线路道变成白光带
			context.fillRect(fenjiedian[f], 250, fenjiedian[f+2]-fenjiedian[f], 5);
			
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
						
			}
			
			// 当列车运行到天津南站的1DG时，将其所在的区段变为红光带
			if(f==13)
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
			
			
			if(f==14&&g>14)
			{
			context.fillStyle = "#FFF";  // 将正线上的股道变成白光带
			context.fillRect(fenjiedian[f], 250, fenjiedian[f+3]-fenjiedian[f], 5);
				
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
			
			// 当列车运行到天津南站的10DG时，将其所在的区段变为红光带
			if(f==15)
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
			if(f==16)
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
			if(f==22)
			{
		    context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[f], 250, fenjiedian[f+2]-fenjiedian[f], 5);
			
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
			}
			
			// 当列车运行到济南西站的1DG时，将列车所占用的区段变为红光带
			if(f==23)
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
			
			if(f==24&&g>24)
			{
			context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[f], 250, fenjiedian[f+2]-fenjiedian[f], 5);
				
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';  // 将2DG的弯股变为白光带
			x=4899;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";    // 将2DG的侧线股道变为白光带
			context.fillRect(4844, 190, 52, 5);
			}
			
			// 当列车运行到济南西站的2DG时，将列车所占用的区段变为红光带
			if(f==25)
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
			if(f==32)
			{
		    context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[f], 250, fenjiedian[f+2]-fenjiedian[f], 5);
			
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
			}
			
			// 当列车运行到南京南站的1DG时，将其占用的区段变为红光带
			if(f==33)
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
			
			if(f==34&&g>34)
			{
			context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[f], 250, fenjiedian[f+2]-fenjiedian[f], 5);
				
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
			
			// 当列车运行到南京南站的2DG时，将其占用的区段变为红光带
			if(f==35)
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
			if(f==42)
			{
		    context.fillStyle = "#FFF";   // 将正线股道变为白光带

			context.fillRect(fenjiedian[f], 250, fenjiedian[f+2]-fenjiedian[f], 5);
			
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
			}
			
			// 当列车运行到苏州北站的1DG时，将其所占用的区段变为红光带
			if(f==43)
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
			
			if(f==44&&g>44)
			{
			context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[f], 250, fenjiedian[f+2]-fenjiedian[f], 5);
				
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
			
			if(f==45)
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
	        if(f==51)
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
			context.fillRect(fenjiedian[f], 250, fenjiedian[f+3]-fenjiedian[f], 5);
			
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
			
			x=(fenjiedian[f-1]+fenjiedian[f])/2-50
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
			
			xieshuzi(x+35,y+12,Cch2)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[f-1], 250, fenjiedian[f]-fenjiedian[f-1], 5);

     }
     
	 //当列车运行到上海虹桥站3DG时
     if(f==52)
     {
	        x=(fenjiedian[f-1]+fenjiedian[f])/2-50
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
			
			xieshuzi(x+35,y+12,Cch2)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";  //将列车所占用的区段变为红光带
			context.fillRect(fenjiedian[f-1], 250, fenjiedian[f]-fenjiedian[f-1], 5);
			
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
			context.fillRect(fenjiedian[f], 250, fenjiedian[f+2]-fenjiedian[f], 5);
			
			//context.restore();
			
      }
      
	  // 当列车运行到上海虹桥站5DG时
      if(f==53)
     {
		    
			
			// 将列车所占用区段变为红光带
			context.fillStyle = "red";
			context.fillRect(fenjiedian[f-1], 250, fenjiedian[f]-fenjiedian[f-1], 5); // 5DG正线股道
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
			context.fillRect(fenjiedian[f], 250, fenjiedian[f+1]-fenjiedian[f], 5);
			
			// 当列车在3DG时，画出小车模型
	        x=(fenjiedian[f-1]+fenjiedian[f])/2-50
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
			
			xieshuzi(x+35,y+12,Cch2)   // 次式可在车身上写车次号
			
			//context.restore();
      }
      
	  // 当列车在上海虹桥站1G时，画出小车并将其所占用股道变为红光带
      if(f==54)
     {
	        x=(fenjiedian[f-1]+fenjiedian[f])/2-50
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
			
			xieshuzi(x+35,y+12,Cch2)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[f-1], 250, fenjiedian[f]-fenjiedian[f-1], 5);
                       
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
			bisaifenqu(4225,248,257)
			bisaifenqu(4225,308,317)
			
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

// 列车调车相撞函数（故障模式）-------------------------------------------------------
function liechediaochexiangzhuang()
{   	
    // 调车从北京南站4G到2DG行车
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
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
				
			//xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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
			
			//xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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
			
			//xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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
	 
	
	// 列车上行行车模块------------------------------------
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
	 
	if (p>5)
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
			
			/*if(p==6)
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
			}*/
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
			//alert("此时列车与调车发生迎面相撞事故")
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

function liechezhuiwei()
{
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	//var j;
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
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
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

	if (i<24)            
	{       
		i=i+1
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
		    j=2;
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
			
			//xieshuzi(m+35,n+12,Cch2)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
			m=800;n=250
             xiaxingxinhaojilvdeng2(m,n)
			 
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j+1], 250, zhongdianzhan_cexiantingche[j+4]-zhongdianzhan_cexiantingche[j+1], 5);
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
	
	
    //小车行车显示//
    if(i==10)
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
			
			//xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
}

    if(i==11)
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
			
			//xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
}
	

	 

     else if((i<10)||(i>11&&i<25))
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
			
			// 当小车运行到天津南站的3JG时，自动排列好通过进路
			if(i==12)
			{
		    context.fillStyle = "#FFF";  // 将接车线路道变成白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
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
			
			
			if(i==14)
			{
			context.fillStyle = "#FFF";  // 将正线上的股道变成白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+3]-fenjiedian[i], 5);
				
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
			context.fillStyle = "white";
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);	
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'white';
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "white";
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

			
			//xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);	
    }
			
			
//第二辆车设置//	
	
				
	//在第一个闭塞分区内，即站内
	
	if(j==3)
	{                
			m=490;n=235
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
			context.beginPath();
			context.lineWidth =5;
			context.strokeStyle = '#848284';
			m=810;
			n=189;
			k=50;
			context.moveTo( m, n+6 ); // x+7,y-1
			context.lineTo( m+k, n+6+k);
			context.stroke(); 
			
			// 北京南站1号道岔处弯股变灰
	        context.beginPath();
	        context.lineWidth = 5;
	        context.strokeStyle = '#848284';
			x=195;
	        y=245;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+10+k, y-1-k);
	        context.stroke();	
			
	}
	
	//车在其他闭塞分区内
	else
	{

	        m=(fenjiedian[j-1]+fenjiedian[j])/2-50
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
	if(j==2)  // 解决第二辆车一出现1号道岔处弯股缺一块的bug
	{// 北京南站1号道岔处弯股变灰
	        context.beginPath();
	        context.lineWidth = 5;
	        context.strokeStyle = '#848284';
			x=195;
	        y=245;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+10+k, y-1-k);
	        context.stroke();	
	}	


	if (j<24)
	{ 
	        j=j+1;
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
	
	//经过济南西站时
	if(j==22)
	{
			m=4281;n=250
            xiaxingxinhaojilvdeng2(m,n)
	}
	if(j==23)
	{
			m=4281;n=250
            xiaxingxinhaojihongdeng(m,n)
	}
    if(j==24)
	{
			m=4281;n=250
            xiaxingxinhaojihongdeng3(m,n)
	}
	
	
	if(j<25)
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
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+1]-zhongdianzhan_cexiantingche[j], 5);
			
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
			
			/*context.fillStyle = "black";
			context.fillRect(2312, 243, 10, 7); */ // 将天津南站的1号道岔由反位转到定位(画黑块）						
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
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
			}
			
			if(j==14)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+3]-zhongdianzhan_cexiantingche[j], 5);
				
			// 将10DG的弯股变成白光带	
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=2938;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";   // 将10DG的侧线股道变成白光带	
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
			
						
			if(j==15)
			{
				context.fillStyle = "black";
			    context.fillRect(2312, 243, 10, 7);  // 将天津南站的1号道岔由反位转到定位(画黑块）
			}
			
			if(j==22)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+1]-zhongdianzhan_cexiantingche[j], 5);
			
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
			
			//xieshuzi(m+35,n+12,Cch2)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);			
	}			
}