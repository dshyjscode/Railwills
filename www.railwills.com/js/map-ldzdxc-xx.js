﻿$.cookie.json=true;
// 下行单车正线
function xiaxingzilvmoshizouche_danche()
{           //alert(zq)
	        var string=null;
	        var str=$.cookie("zhanchangtu");    // 获取站场图大排队信息的初始状态
			switch(i)       // 每当列车位置改变，即对大排队信息进行更新
			{
				case 3:
				    string = rePlaceStr5(str,28,"1",169,"3",178,"2",179,"2",180,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0169"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"169"+"AC");	
			        break;	
				
				case 4:
				    string = rePlaceStr4(str,169,"1",178,"2",179,"2",180,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0180"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"180"+"AC");	
			        break;	
					
				case 5:
				    string = rePlaceStr3(str,169,"1",178,"2",179,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0179"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"179"+"AC");		
			        break;	
					
				case 6:
				    string = rePlaceStr2(str,169,"1",178,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0178"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"178"+"AC");		
			        break;	
					
				case 7:
				    string = rePlaceStr2(str,169,"1",177,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0177"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"177"+"AC");	
			        break;	
					
				case 8:
				    string = rePlaceStr2(str,169,"1",176,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0176"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"176"+"AC");	
			        break;	
					
				case 9:   // 此时该车在区间，将大排队信息定义为初始状态
				    string = rePlaceStr2(str,169,"1",176,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0000"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"176"+"AC");	
			        break;	
					
				case 10:
				    string = rePlaceStr2(str,169,"1",190,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0190"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"190"+"AC");		
			        break;	
					
				case 11:
				    string = rePlaceStr2(str,169,"1",191,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0191"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"191"+"AC");		
			        break;	
				
				case 12:
				    string = rePlaceStr5(str,42,"1",169,"1",192,"3",193,"2",195,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0192"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"192"+"AC");	
			        break;	
				
				case 13:
				    string = rePlaceStr3(str,169,"1",193,"3",195,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0193"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"193"+"AC");	
			        break;	
					
				case 14:
				    if(c>14)
					{
				    string = rePlaceStr6(str,45,"1",169,"1",195,"3",204,"2",205,"2",206,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0195"+string.substr(430,10));
					}
					else if(c==14)
					{
					string = rePlaceStr3(str,45,"1",169,"1",195,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0195"+string.substr(430,10));	
					}
					//setCookie("lieche_1","AB"+Cch1+"195"+"AC");	
			        break;	
					
				case 15:
				    string = rePlaceStr4(str,169,"1",204,"2",205,"2",206,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0206"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"206"+"AC");	
			        break;	
					
				case 16:
				    string = rePlaceStr3(str,169,"1",204,"2",205,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0205"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"205"+"AC");		
			        break;	
					
				case 17:
				    string = rePlaceStr2(str,169,"1",204,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0204"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"204"+"AC");	
			        break;
					
				case 18:
				    string = rePlaceStr2(str,169,"1",203,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0203"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"203"+"AC");	
			        break;
					
				case 19:
				    string = rePlaceStr2(str,169,"1",202,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0202"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"202"+"AC");	
			        break;
					
				case 20:
				    string = rePlaceStr2(str,169,"1",214,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0214"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"214"+"AC");		
			        break;
					
				case 21:
				    string = rePlaceStr2(str,169,"1",215,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0215"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"215"+"AC");		
			        break;
					
				case 22:
				    string = rePlaceStr5(str,56,"1",169,"1",216,"3",217,"2",219,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0216"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"216"+"AC");	
			        break;
					
				case 23:
				    string = rePlaceStr3(str,169,"1",217,"3",219,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0217"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"217"+"AC");	
			        break;
					
				case 24:
				    if(c>24)
					{
				    string = rePlaceStr5(str,59,"1",169,"1",219,"3",228,"2",229,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0219"+string.substr(430,10));
					}
					else if(c==24)
					{
						string = rePlaceStr3(str,59,"1",169,"1",219,"3");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0219"+string.substr(430,10));
					}
					//setCookie("lieche_1","AB"+Cch1+"219"+"AC");	
			        break;
					
				case 25:
				    string = rePlaceStr3(str,169,"1",228,"2",229,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0229"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"229"+"AC");	
			        break;
					
				case 26:
				    string = rePlaceStr2(str,169,"1",228,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0228"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"228"+"AC");	
			        break;
					
				case 27:
				    string = rePlaceStr2(str,169,"1",227,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0227"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"227"+"AC");	
			        break;
					
				case 28:
				    string = rePlaceStr2(str,169,"1",226,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0226"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"226"+"AC");	
			        break;
					
				case 29:   // 此时列车在区间，将其大排队信息定义为初始状态
				    string = rePlaceStr2(str,169,"1",226,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0000"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"226"+"AC");	
			        break;
					
				case 30:
				    string = rePlaceStr2(str,169,"1",236,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0236"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"236"+"AC");	
			        break;
					
				case 31:
				    string = rePlaceStr2(str,169,"1",237,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0237"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"237"+"AC");	
			        break;
					
				case 32:
				    string = rePlaceStr5(str,70,"1",169,"1",238,"3",239,"2",241,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0238"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"238"+"AC");	
			        break;
					
				case 33:
				    string = rePlaceStr3(str,169,"1",239,"3",241,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0239"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"239"+"AC");	
			        break;
					
				case 34:
				    if(c>34)
					{
				    string = rePlaceStr5(str,73,"1",169,"1",241,"3",250,"2",251,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0241"+string.substr(430,10));	
					}
					else if(c==34)
					{
						string = rePlaceStr3(str,73,"1",169,"1",241,"3");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0241"+string.substr(430,10));
					}
					//setCookie("lieche_1","AB"+Cch1+"241"+"AC");	
			        break
					
				case 35:
				    string = rePlaceStr3(str,169,"1",250,"2",251,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0251"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"251"+"AC");		
			        break;
					
				case 36:
				    string = rePlaceStr2(str,169,"1",250,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0250"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"250"+"AC");	
			        break;
					
				case 37:
				    string = rePlaceStr2(str,169,"1",249,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0249"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"249"+"AC");	
			        break;
					
				case 38:
				    string = rePlaceStr2(str,169,"1",248,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0248"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"248"+"AC");	
			        break;
					
				case 39:   // 此时列车在区间，将其大排队信息定义为初始状态
				    string = rePlaceStr2(str,169,"1",248,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0000"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"248"+"AC");	
			        break;
					
				case 40:
				    string = rePlaceStr2(str,169,"1",258,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0258"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"258"+"AC");	
			        break;
					
				case 41:
				    string = rePlaceStr2(str,169,"1",259,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0259"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"259"+"AC");	
			        break;
					
				case 42:
				    string = rePlaceStr5(str,84,"1",169,"1",260,"3",261,"2",263,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0260"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"260"+"AC");		
			        break;
					
				case 43:
				    string = rePlaceStr3(str,169,"1",261,"3",263,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0261"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"261"+"AC");		
			        break;
					
				case 44:
				    if(c>44)
					{
				    string = rePlaceStr5(str,87,"1",169,"1",263,"3",272,"2",273,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0263"+string.substr(430,10));
					}
					else if(c==44)
					{
						string = rePlaceStr5(str,87,"1",169,"1",263,"3");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0263"+string.substr(430,10));
					}
					//setCookie("lieche_1","AB"+Cch1+"263"+"AC");	
			        break;
					
				case 45:
				    string = rePlaceStr3(str,169,"1",272,"2",273,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0273"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"273"+"AC");	
			        break;
					
				case 46:
				    string = rePlaceStr2(str,169,"1",272,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0272"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"272"+"AC");	
			        break;
					
				case 47:
				    string = rePlaceStr2(str,169,"1",271,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0271"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"271"+"AC");	
			        break;
					
				case 48:
				    string = rePlaceStr2(str,169,"1",270,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0270"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"270"+"AC");		
			        break;
					
				case 49:
				    string = rePlaceStr2(str,169,"1",280,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0280"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"280"+"AC");		
			        break;
					
				case 50:
				    string = rePlaceStr2(str,169,"1",281,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0281"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"281"+"AC");	
			        break;
					
				case 51:
				    string = rePlaceStr6(str,98,"1",169,"1",282,"3",283,"2",284,"2",288,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0282"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"282"+"AC");	
			        break;
					
				case 52:
				    string = rePlaceStr4(str,169,"1",283,"3",284,"2",288,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0283"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"283"+"AC");		
			        break;
					
				case 53:
				    string = rePlaceStr3(str,169,"1",284,"3",288,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0284"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"284"+"AC");	
			        break;
					
				case 54:
				    string = rePlaceStr2(str,169,"1",288,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0288"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"288"+"AC");		
			        break;
					
				
			}
			start=Number(json.s);  //限速的起始轨道区段的i值减一
	        end=Number(json.e);      //限速的终点轨道区段的i值
			
	        //alert(typeof str)
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			//var i;
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
	else if(i>3)
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
    
	if(xiansuzhi==06)  // 最高速度，相当于没设置限速，以初设的计数周期运行
	{
		if(i<c)
		{
			i=i+1
		}
	}
	
	else if(xiansuzhi==05)
	{
		
	  if(i>start&&i<end)    //if(i>2&&i<14)
	  {  z=z+1;
		 if(z%2==0&&i<c)
		 {
			i=i+1;
		 }
	  }
	  
	  else if(end<start||start==0||end==0)
	  {
		 alert("不好意思，您的操作有错误，请检查后再试！")
	  } 
			
	  else
	  {
		 if(i<c)
		 {
			i=i+1;
		 }
	  }
		
		/*if(xiansu_start==169&&xiansu_end==195)  // 限速区间为北京南站到天津南站
	  {
		if(i>start&&i<end)    //if(i>2&&i<14)
		{  z=z+1;
		   if(z%2==0&&i<c)
		   {
			i=i+1
		   }
		}
		else
		{
		   if(i<c)
		   {
			i=i+1
		   }
		}
	  }
	  
	  else if(xiansu_start==195&&xiansu_end==219)  // 限速区间为天津南站到济南西站
	  {
		if(i>start&&i<end)   // if(i>13&&i<24)
		{  z=z+1;
		   if(z%2==0&&i<c)
		   {
			i=i+1
		   }
		}
		else
		{
			if(i<c)
		   {
			i=i+1
		   }
		}
	  }
	  
	  else if(xiansu_start==169&&xiansu_end==219)  // 限速区间为北京南站到济南西站
	  {
		if(i>start&&i<end)    // if(i>2&&i<24)
		{  z=z+1;
		   if(z%2==0&&i<c)
		   {
			i=i+1
		   }
		}
		else
		{
			if(i<c)
		   {
			i=i+1
		   }
		}
	  }
	  
	  else if (c<25)
	  {
		 if(i<c)
		 {
			i=i+1
		 } 
	  }*/
	}
	
	else if(xiansuzhi==04)
	{  	  
	  if(i>start&&i<end)   // if(i>2&&i<14)
		{  z=z+1;
		   if(z%3==0&&i<c)
		   {
			i=i+1
		   }
		}
		//alert(typeof(end))
		else if(end<start||start==0||end==0)
	    {
		 alert("不好意思，您的操作有错误，请检查后再试！")
	    }
		
		else 
		{
		   if(i<c)
		   {
			i=i+1
		   }
		}	
		
	  /*if(xiansu_start==169&&xiansu_end==195)  // 限速区间为北京南站到天津南站
	  {
		if(i>start&&i<end)   // if(i>2&&i<14)
		{  z=z+1;
		   if(z%3==0&&i<c)
		   {
			i=i+1
		   }
		}
		else if(c<25)
		{
		   if(i<c)
		   {
			i=i+1
		   }
		}
	  }
	  
	  else if(xiansu_start==195&&xiansu_end==219)  // 限速区间为天津南站到济南西站
	  {
		if(i>start&&i<end)   // if(i>13&&i<24)
		{  z=z+1;
		   if(z%3==0&&i<c)
		   {
			i=i+1
		   }
		}
		else
		{
			if(i<c)
		   {
			i=i+1
		   }
		}
	  }
	  
	  else if(xiansu_start==169&&xiansu_end==219)  // 限速区间为北京南站到济南西站
	  {
		if(i>start&&i<end)    // if(i>2&&i<24)
		{  z=z+1;
		   if(z%3==0&&i<c)
		   {
			i=i+1
		   }
		}
		else
		{
			if(i<c)
		   {
			i=i+1
		   }
		}
	  } 
	  
	  else if(c<25)
	  {
		 if(i<c)
		 {
			i=i+1
		 } 
	  }*/
	}
	
	else if(xiansuzhi==03)
	{
	  if(i>start&&i<end)     // if(i>2&&i<14)
		{  z=z+1;
		   if(z%4==0&&i<c)
		   {
			i=i+1
		   }
		}
		
		else if(end<start||start==0||end==0)
	    {
		 alert("不好意思，您的操作有错误，请检查后再试！")
	    } 
		
		else
		{
		   if(i<c)
		   {
			i=i+1
		   }
		}
		
	  /*if(xiansu_start==169&&xiansu_end==195)  // 限速区间为北京南站到天津南站
	  {
		if(i>start&&i<end)     // if(i>2&&i<14)
		{  z=z+1;
		   if(z%4==0&&i<c)
		   {
			i=i+1
		   }
		}
		else
		{
		   if(i<c)
		   {
			i=i+1
		   }
		}
	  }
	  
	  else if(xiansu_start==195&&xiansu_end==219)  // 限速区间为天津南站到济南西站
	  {
		if(i>start&&i<end)     // if(i>13&&i<24)
		{  z=z+1;
		   if(z%4==0&&i<c)
		   {
			i=i+1
		   }
		}
		else
		{
			if(i<c)
		   {
			i=i+1
		   }
		}
	  }
	  
	  else if(xiansu_start==169&&xiansu_end==219)  // 限速区间为北京南站到济南西站
	  {
		if(i>start&&i<end)      // if(i>2&&i<24)
		{  z=z+1;
		   if(z%4==0&&i<c)
		   {
			i=i+1
		   }
		}
		else
		{
			if(i<c)
		   {
			i=i+1
		   }
		}
	  } 
	  
	  else if(c<25)
	  {
		 if(i<c)
		 {
			i=i+1
		 } 
	  }*/
	}
	
	else if(xiansuzhi==02)
	{
		if(i>start&&i<end)      // if(i>2&&i<14)
		{  z=z+1;
		   if(z%5==0&&i<c)
		   {
			i=i+1
		   }
		}
		
		
		else if(end<start||start==0||end==0)
	    {
		 alert("不好意思，您的操作有错误，请检查后再试！")
	    } 
		
		else
		{
		   if(i<c)
		   {
			i=i+1
		   }
		}
		
		/*if(xiansu_start==169&&xiansu_end==195)  // 限速区间为北京南站到天津南站
	  {
		if(i>start&&i<end)      // if(i>2&&i<14)
		{  z=z+1;
		   if(z%5==0&&i<c)
		   {
			i=i+1
		   }
		}
		else
		{
		   if(i<c)
		   {
			i=i+1
		   }
		}
	  }
	  
	  else if(xiansu_start==195&&xiansu_end==219)  // 限速区间为天津南站到济南西站
	  {
		if(i>start&&i<end)    // if(i>13&&i<24)
		{  z=z+1;
		   if(z%5==0&&i<c)
		   {
			i=i+1
		   }
		}
		else
		{
			if(i<c)
		   {
			i=i+1
		   }
		}
	  }
	  
	  else if(xiansu_start==169&&xiansu_end==219)  // 限速区间为北京南站到济南西站
	  {
		if(i>start&&i<end)   // if(i>2&&i<24)
		{  z=z+1;
		   if(z%5==0&&i<c)
		   {
			i=i+1
		   }
		}
		else
		{
			if(i<c)
		   {
			i=i+1
		   }
		}
	  }
	  
	  else if(c<25)
	  {
		 if(i<c)
		 {
			i=i+1
		 } 
	  }*/
	}
	
	else if(xiansuzhi==01)  // 限速值最低
	{
		if(i>start&&i<end)    // if(i>2&&i<14)
		{  z=z+1;
		   if(z%6==0&&i<c)
		   {
			i=i+1
		   }
		}
		
		else if(end<start||start==0||end==0)
	    {
		 alert("不好意思，您的操作有错误，请检查后再试！")
	    } 
		
		else
		{
		   if(i<c)
		   {
			i=i+1
		   }
		}
		
		/*if(xiansu_start==169&&xiansu_end==195)  // 限速区间为北京南站到天津南站
	  {
		if(i>start&&i<end)    // if(i>2&&i<14)
		{  z=z+1;
		   if(z%6==0&&i<c)
		   {
			i=i+1
		   }
		}
		else
		{
		   if(i<c)
		   {
			i=i+1
		   }
		}
	  }
	  
	  else if(xiansu_start==195&&xiansu_end==219)  // 限速区间为天津南站到济南西站
	  {
		if(i>start&&i<end)    // if(i>13&&i<24)
		{  z=z+1;
		   if(z%6==0&&i<c)
		   {
			i=i+1
		   }
		}
		else
		{
			if(i<c)
		   {
			i=i+1
		   }
		}
	  }
	  
	  else if(xiansu_start==169&&xiansu_end==219)  // 限速区间为北京南站到济南西站
	  {
		if(i>start&&i<end)     // if(i>2&&i<24)
		{  z=z+1;
		   if(z%6==0&&i<c)
		   {
			i=i+1
		   }
		}
		else
		{
			if(i<c)
		   {
			i=i+1
		   }
		}
	  }
	  
	  else if(c<25)
	  {
		 if(i<c)
		 {
			i=i+1
		 } 
	  }*/
	}
	else if (i<c)
	{ 
	        i=i+1;
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
	
	
	if(i==14&&c>14)
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
	
	
	if(i==24&&c>24)
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
	
	
	if(i==34&&c>34)
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
	
	
	if(i==44&&c>44)
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
	
	if(i==3)
	{
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	x=800;y=250
    xiaxingxinhaojilvdeng2(x,y)
	
	x=490;y=235
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
	context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
	
            			
	//在始发站办理发车进路后的白光带显示
    context.fillStyle = "#FFF";
	context.fillRect(fenjiedian[i], 250, fenjiedian[i+3]-fenjiedian[i], 5);
				
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
	
	x=490;y=235
	xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
	}
	
	 if(i>3&&i<52)
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
			
			
			if(i==14&&c>14)
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
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
			
			if(i==24&&c>24)
			{
			context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
				
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
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
			
			if(i==34&&c>34)
			{
			context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
				
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
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
			
			if(i==44&&c>44)
			{
			context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
				
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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

// 下行双车正线(第一辆车)
function xiaxingzilvmoshizouche_shanghai()
{
	        var string=null;
	        var str=$.cookie("zhanchangtu");    // 获取站场图大排队信息的初始状态
			
			switch(i)    // 每当列车位置改变，即对大排队信息进行更新
			{
				case 3:
				    string = rePlaceStr5(str,28,"1",169,"3",178,"2",179,"2",180,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0169"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"169"+"AC");	
			        break;	
				
				case 4:
				    string = rePlaceStr4(str,169,"1",178,"2",179,"2",180,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0180"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"180"+"AC");	
			        break;	
					
				case 5:
				    string = rePlaceStr3(str,169,"1",178,"2",179,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0179"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"179"+"AC");		
			        break;	
					
				case 6:
				    string = rePlaceStr2(str,169,"1",178,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0178"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"178"+"AC");		
			        break;	
					
				case 7:
				    string = rePlaceStr2(str,169,"1",177,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0177"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"177"+"AC");	
			        break;	
					
				case 8:
				    string = rePlaceStr2(str,169,"1",176,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0176"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"176"+"AC");	
			        break;	
					
				case 9:  // 此时该列车在区间，将其大排队信息定义为初始状态
				    string = rePlaceStr2(str,169,"1",176,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0000"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"176"+"AC");	
			        break;
				
				case 10:
				    string = rePlaceStr2(str,169,"1",190,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0190"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"190"+"AC");		
			        break;	
					
				case 11:
				    string = rePlaceStr2(str,169,"1",191,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0191"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"191"+"AC");		
			        break;	
				
				case 12:
				    string = rePlaceStr5(str,42,"1",169,"1",192,"3",193,"2",195,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0192"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"192"+"AC");	
			        break;	
				
				case 13:
				    string = rePlaceStr3(str,169,"1",193,"3",195,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0193"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"193"+"AC");	
			        break;	
					
				case 14:
				    if(c>14)
					{
				    string = rePlaceStr6(str,45,"1",169,"1",195,"3",204,"2",205,"2",206,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0195"+string.substr(430,10));
					}
					else if(c==14)
					{
						string = rePlaceStr3(str,45,"1",169,"1",195,"3");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0195"+string.substr(430,10));
					}
					//setCookie("lieche_1","AB"+Cch1+"195"+"AC");	
			        break;	
					
				case 15:
				    string = rePlaceStr4(str,169,"1",204,"2",205,"2",206,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0206"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"206"+"AC");	
			        break;	
					
				case 16:
				    string = rePlaceStr3(str,169,"1",204,"2",205,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0205"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"205"+"AC");		
			        break;	
					
				case 17:
				    string = rePlaceStr2(str,169,"1",204,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0204"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"204"+"AC");	
			        break;
					
				case 18:
				    string = rePlaceStr2(str,169,"1",203,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0203"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"203"+"AC");	
			        break;
					
				case 19:
				    string = rePlaceStr2(str,169,"1",202,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0202"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"202"+"AC");	
			        break;
					
				case 20:
				    string = rePlaceStr2(str,169,"1",214,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0214"+string.substr(430,10));
					//alert($.cookie("站场图"))					
					//setCookie("lieche_1","AB"+Cch1+"214"+"AC");		
			        break;
					
				case 21:
				    string = rePlaceStr2(str,169,"1",215,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0215"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"215"+"AC");		
			        break;
					
				case 22:
				    string = rePlaceStr5(str,56,"1",169,"1",216,"3",217,"2",219,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0216"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"216"+"AC");	
			        break;
					
				case 23:
				    string = rePlaceStr3(str,169,"1",217,"3",219,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0217"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"217"+"AC");	
			        break;
					
				case 24:
				    if(c>24)
					{
				    string = rePlaceStr5(str,59,"1",169,"1",219,"3",228,"2",229,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0219"+string.substr(430,10));
					}
					else if(c==24)
					{
						string = rePlaceStr3(str,59,"1",169,"1",219,"3");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0219"+string.substr(430,10));
					}
					//setCookie("lieche_1","AB"+Cch1+"219"+"AC");	
			        break;
					
				case 25:
				    string = rePlaceStr3(str,169,"1",228,"2",229,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0229"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"229"+"AC");	
			        break;
					
				case 26:
				    string = rePlaceStr2(str,169,"1",228,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0228"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"228"+"AC");	
			        break;
					
				case 27:
				    string = rePlaceStr2(str,169,"1",227,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0227"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"227"+"AC");	
			        break;
					
				case 28:
				    string = rePlaceStr2(str,169,"1",226,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0226"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"226"+"AC");	
			        break;
					
				case 29:   // 此时列车在区间，将其大排队信息定义为初始状态
				    string = rePlaceStr2(str,169,"1",226,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0000"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"226"+"AC");	
			        break;	
					
				case 30:
				    string = rePlaceStr2(str,169,"1",236,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0236"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"236"+"AC");	
			        break;
					
				case 31:
				    string = rePlaceStr2(str,169,"1",237,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0237"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"237"+"AC");	
			        break;
					
				case 32:
				    string = rePlaceStr5(str,70,"1",169,"1",238,"3",239,"2",241,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0238"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"238"+"AC");	
			        break;
					
				case 33:
				    string = rePlaceStr3(str,169,"1",239,"3",241,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0239"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"239"+"AC");	
			        break;
					
				case 34:
				    if(c>34)
					{
				    string = rePlaceStr5(str,73,"1",169,"1",241,"3",250,"2",251,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0241"+string.substr(430,10));	
					}
					else if(c==34)
					{
						string = rePlaceStr3(str,73,"1",169,"1",241,"3");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0241"+string.substr(430,10));	
					}
					//setCookie("lieche_1","AB"+Cch1+"241"+"AC");	
			        break;
					
				case 35:
				    string = rePlaceStr3(str,169,"1",250,"2",251,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0251"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"251"+"AC");		
			        break;
					
				case 36:
				    string = rePlaceStr2(str,169,"1",250,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0250"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"250"+"AC");	
			        break;
					
				case 37:
				    string = rePlaceStr2(str,169,"1",249,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0249"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"249"+"AC");	
			        break;
					
				case 38:
				    string = rePlaceStr2(str,169,"1",248,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0248"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"248"+"AC");	
			        break;
					
				case 39:    // 此时列车在区间，将其大排队信息定义为初始状态
				    string = rePlaceStr2(str,169,"1",248,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0248"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"248"+"AC");	
			        break;
					
				case 40:
				    string = rePlaceStr2(str,169,"1",258,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0258"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"258"+"AC");	
			        break;
					
				case 41:
				    string = rePlaceStr2(str,169,"1",259,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0259"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"259"+"AC");	
			        break;
					
				case 42:
				    string = rePlaceStr5(str,84,"1",169,"1",260,"3",261,"2",263,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0260"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"260"+"AC");		
			        break;
					
				case 43:
				    string = rePlaceStr3(str,169,"1",261,"3",263,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0261"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"261"+"AC");		
			        break;
					
				case 44:
				    if(c>44)
					{
				    string = rePlaceStr5(str,87,"1",169,"1",263,"3",272,"2",273,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0263"+string.substr(430,10));	
					}
					else if(c==44)
					{
						string = rePlaceStr3(str,87,"1",169,"1",263,"3");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0263"+string.substr(430,10));	
					}
					//setCookie("lieche_1","AB"+Cch1+"263"+"AC");	
			        break;
					
				case 45:
				    string = rePlaceStr3(str,169,"1",272,"2",273,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0273"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"273"+"AC");	
			        break;
					
				case 46:
				    string = rePlaceStr2(str,169,"1",272,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0272"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"272"+"AC");	
			        break;
					
				case 47:
				    string = rePlaceStr2(str,169,"1",271,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0271"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"271"+"AC");	
			        break;
					
				case 48:
				    string = rePlaceStr2(str,169,"1",270,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0270"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"270"+"AC");		
			        break;
					
				case 49:
				    string = rePlaceStr2(str,169,"1",280,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0280"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"280"+"AC");		
			        break;
					
				case 50:
				    string = rePlaceStr2(str,169,"1",281,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0281"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"281"+"AC");	
			        break;
					
				case 51:
				    string = rePlaceStr6(str,98,"1",169,"1",282,"3",283,"2",284,"2",288,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0282"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"282"+"AC");	
			        break;
					
				case 52:
				    string = rePlaceStr4(str,169,"1",283,"3",284,"2",288,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0283"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"283"+"AC");		
			        break;
					
				case 53:
				    string = rePlaceStr3(str,169,"1",284,"3",288,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0284"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"284"+"AC");	
			        break;
					
				case 54:
				    string = rePlaceStr2(str,169,"1",288,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0288"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"288"+"AC");		
			        break;
									
			}
			
			
	        //alert(typeof str)
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			//var i;

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
	else if(i>3)
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

	if (i<c)
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
	
	
	if(i==14&&c>14)
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
	
	
	if(i==24&&c>24)
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
	
	
	if(i==34&&c>34)
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
	
	
	if(i==44&&c>44)
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
	
	if(i==3)
	{
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	x=800;y=250
    xiaxingxinhaojilvdeng2(x,y)
	
	
	x=490;y=235
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
	context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
            			
	//在始发站办理发车进路后的白光带显示
    context.fillStyle = "#FFF";
	context.fillRect(fenjiedian[i], 250, fenjiedian[i+3]-fenjiedian[i], 5);
				
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
	
	x=490;y=235
	xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
	}
	
	 if(i>3&&i<52)
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
			
			
			if(i==14&&c>14)
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
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
			
			if(i==24&&c>24)
			{
			context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
				
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
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
			
			if(i==34&&c>34)
			{
			context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
				
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
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
			
			if(i==44&&c>44)
			{
			context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
				
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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


// 下行双车侧线(第一辆车)
function xiaxingzilvmoshizouche_cexianjinzhan()
{
	        var string=null;
	        var str=$.cookie("zhanchangtu");    // 获取站场图大排队信息的初始状态
			switch(i)      // 每当列车位置改变，即对大排队信息进行更新
			{
				case 3:				    
				    string = rePlaceStr5(str,28,"1",169,"3",178,"2",179,"2",180,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0169"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"169"+"AC");	
					//alert($.cookie("lieche_1"))
			        break;	
				
				case 4:
				    string = rePlaceStr5(str,28,"4",169,"1",178,"2",179,"2",180,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0180"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"180"+"AC");	
					//alert($.cookie("lieche_1"))
			        break;	
					
				case 5:
				    string = rePlaceStr4(str,169,"1",178,"2",179,"3",180,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0179"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"179"+"AC");		
			        break;	
					
				case 6:
				    string = rePlaceStr3(str,169,"1",178,"3",179,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0179"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"178"+"AC");		
			        break;	
					
				case 7:
				    string = rePlaceStr3(str,169,"1",177,"3",178,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0177"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"177"+"AC");		
			        break;	
					
				case 8:
				    string = rePlaceStr3(str,169,"1",176,"3",177,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0176"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"176"+"AC");		
			        break;	
					
				case 9:   // 此时第一辆车在区间，将其大排队信息定义为初始状态
				    string = rePlaceStr3(str,169,"1",176,"1",177,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0000"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"176"+"AC");		
			        break;	
					
				case 10:
				    string = rePlaceStr3(str,169,"1",190,"3",176,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0190"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"190"+"AC");		
			        break;	
					
				case 11:
				    string = rePlaceStr3(str,169,"1",191,"3",190,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0191"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"191"+"AC");	
			        break;	
				
				case 12:
				    if(c>14)
					{
				        string = rePlaceStr6(str,42,"1",169,"1",191,"1",192,"3",193,"2",195,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0192"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"192"+"AC");	
					}
					else if(c==14)
					{
						string = rePlaceStr7(str,42,"3",127,"2",169,"1",191,"1",192,"3",193,"2",194,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0192"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"192"+"AC");	
					}
			        break;	
				
				case 13:
				    if(c>14)
					{
						string = rePlaceStr5(str,42,"4",169,"1",192,"1",193,"3",195,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0193"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"193"+"AC");		
					}
				    else if(c==14)
					{
						string = rePlaceStr6(str,42,"4",127,"2",169,"1",192,"1",193,"3",194,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0193"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"193"+"AC");		
					}
			        break;	
					
				case 14:
				    if(c>14)
					{
						string = rePlaceStr7(str,45,"1",169,"1",193,"1",195,"3",204,"2",205,"2",206,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0195"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"195"+"AC");		
					}
					else if(c==14)
					{
						string = rePlaceStr4(str,127,"1",169,"1",193,"1",194,"3");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0194"+string.substr(430,10));	
						//setCookie("lieche_1","AB"+Cch1+"194"+"AC");	
					}
			        break;	
					
				case 15:
				    string = rePlaceStr6(str,45,"4",169,"1",195,"1",204,"2",205,"2",206,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0206"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"206"+"AC");		
			        break;	
					
				case 16:
				    string = rePlaceStr4(str,169,"1",204,"2",205,"3",206,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0205"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"205"+"AC");		
			        break;	
					
				case 17:
				    string = rePlaceStr3(str,169,"1",204,"3",205,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0204"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"204"+"AC");	
			        break;
					
				case 18:
				    string = rePlaceStr3(str,169,"1",203,"3",204,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0203"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"203"+"AC");		
			        break;
					
				case 19:
				    string = rePlaceStr3(str,169,"1",202,"3",203,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0202"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"202"+"AC");		
			        break;
					
				case 20:
				    string = rePlaceStr3(str,169,"1",214,"3",202,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0214"+string.substr(430,10));					
					//setCookie("lieche_1","AB"+Cch1+"214"+"AC");		
			        break;
					
				case 21:
				    string = rePlaceStr3(str,169,"1",215,"3",214,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0215"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"215"+"AC");		
			        break;
					
				case 22:
				    if(c>24)
					{
						string = rePlaceStr6(str,56,"1",169,"1",215,"1",216,"3",217,"2",219,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0216"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"216"+"AC");	
					}
				    else if(c==24)
					{
						string = rePlaceStr7(str,56,"3",135,"2",169,"1",215,"1",216,"3",217,"2",218,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0216"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"216"+"AC");	
					}
			        break;
					
				case 23:
				    if(c>24)
					{
				        string = rePlaceStr5(str,56,"4",169,"1",216,"1",217,"3",219,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0217"+string.substr(430,10));	
						//setCookie("lieche_1","AB"+Cch1+"217"+"AC");	 
					}
					else if(c==24)
					{
						string = rePlaceStr6(str,56,"4",135,"2",169,"1",216,"1",217,"3",218,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0217"+string.substr(430,10));	
						//setCookie("lieche_1","AB"+Cch1+"217"+"AC");	
					}
			        break;
					
				case 24:
				    if(c>24)
					{
				        string = rePlaceStr6(str,59,"1",169,"1",217,"1",219,"3",228,"2",229,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0219"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"219"+"AC");	
					}
					else if(c==24)
					{
						string = rePlaceStr4(str,135,"1",169,"1",217,"1",218,"3");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0218"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"218"+"AC");	
					}
			        break;
					
				case 25:
				    string = rePlaceStr5(str,59,"4",169,"1",219,"1",228,"2",229,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0229"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"229"+"AC");	
			        break;
					
				case 26:
				    string = rePlaceStr3(str,169,"1",228,"3",229,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0228"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"228"+"AC");		
			        break;
					
				case 27:
				    string = rePlaceStr3(str,169,"1",227,"3",228,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0227"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"227"+"AC");	
			        break;
					
				case 28:
				    string = rePlaceStr3(str,169,"1",226,"3",227,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0226"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"226"+"AC");		
			        break;
				
				case 29:     // 此时列车在区间，将其大排队信息定义为初始状态
				    string = rePlaceStr3(str,169,"1",226,"1",227,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0000"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"226"+"AC");		
			        break;	
					
				case 30:
				    string = rePlaceStr3(str,169,"1",236,"3",226,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0236"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"236"+"AC");	
			        break;
					
				case 31:
				    string = rePlaceStr3(str,169,"1",237,"3",236,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0237"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"237"+"AC");	
			        break;
					
				case 32:
				    if(c>34)
					{
				        string = rePlaceStr6(str,70,"1",169,"1",237,"1",238,"3",239,"2",241,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0238"+string.substr(430,10));	
						//setCookie("lieche_1","AB"+Cch1+"238"+"AC");	
					}
					else if(c==34)
					{
						string = rePlaceStr7(str,70,"3",141,"2",169,"1",237,"1",238,"3",239,"2",240,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0238"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"238"+"AC");	
					}
			        break;
					
				case 33:
				    if(c>34)
					{
				        string = rePlaceStr5(str,70,"4",169,"1",238,"1",239,"3",241,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0239"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"239"+"AC");		
					}
					else if(c==34)
					{
						string = rePlaceStr6(str,70,"4",141,"2",169,"1",238,"1",239,"3",240,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0239"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"239"+"AC");	
					}
			        break;
					
				case 34:
				    if(c>34)
					{
				        string = rePlaceStr6(str,73,"1",169,"1",239,"1",241,"3",250,"2",251,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0241"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"241"+"AC");	
					}
					else if(c==34)
					{
						string = rePlaceStr4(str,141,"1",169,"1",239,"1",240,"3");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0240"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"240"+"AC");	
					}
			        break;
					
				case 35:
				    string = rePlaceStr5(str,73,"4",169,"1",241,"1",250,"2",251,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0251"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"251"+"AC");		
			        break;
					
				case 36:
				    string = rePlaceStr3(str,169,"1",250,"3",251,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0250"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"250"+"AC");	
			        break;
					
				case 37:
				    string = rePlaceStr3(str,169,"1",249,"3",250,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0249"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"249"+"AC");	
			        break;
					
				case 38:
				    string = rePlaceStr3(str,169,"1",248,"3",249,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0248"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"248"+"AC");	
			        break;
					
				case 39:    // 此时列车在区间，将其大排队信息定义为初始状态
				    string = rePlaceStr3(str,169,"1",248,"1",249,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0000"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"248"+"AC");	
			        break;
					
				case 40:
				    string = rePlaceStr3(str,169,"1",258,"3",248,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0258"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"258"+"AC");		
			        break;
					
				case 41:
				    string = rePlaceStr3(str,169,"1",259,"3",258,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0259"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"259"+"AC");	
			        break;
					
				case 42:
				    if(c>44)
					{
						string = rePlaceStr6(str,84,"1",169,"1",259,"1",260,"3",261,"2",263,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0260"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"260"+"AC");		
					}
					else if(c==44)
					{
						string = rePlaceStr7(str,84,"3",147,"2",169,"1",259,"1",260,"3",261,"2",262,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0260"+string.substr(430,10));	
						//setCookie("lieche_1","AB"+Cch1+"260"+"AC");	
					}
				    
			        break;
					
				case 43:
				    if(c>44)
					{
				        string = rePlaceStr5(str,84,"4",169,"1",260,"1",261,"3",263,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0261"+string.substr(430,10));	
						//setCookie("lieche_1","AB"+Cch1+"261"+"AC");	
					}
					else if(c==44)
					{
						string = rePlaceStr6(str,84,"4",147,"2",169,"1",260,"1",261,"3",262,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0261"+string.substr(430,10));	
						//setCookie("lieche_1","AB"+Cch1+"261"+"AC");	
					}
			        break;
					
				case 44:
				    if(c>44)
					{
				        string = rePlaceStr6(str,87,"1",169,"1",261,"1",263,"3",272,"2",273,"2");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0263"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"263"+"AC");	
					}
					else if(c==44)
					{
						string = rePlaceStr4(str,147,"1",169,"1",261,"1",262,"3");			   
			            setCookie("站场图",string.substr(0,422)+Cch1+"0262"+string.substr(430,10));
						//setCookie("lieche_1","AB"+Cch1+"262"+"AC");	
					}
			        break;
					
				case 45:
				    string = rePlaceStr5(str,87,"4",169,"1",263,"1",272,"2",273,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0273"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"273"+"AC");	
			        break;
					
				case 46:
				    string = rePlaceStr3(str,169,"1",272,"3",273,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0272"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"272"+"AC");	
			        break;
					
				case 47:
				    string = rePlaceStr3(str,169,"1",271,"3",272,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0271"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"271"+"AC");	
			        break;
					
				case 48:
				    string = rePlaceStr3(str,169,"1",270,"3",271,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0270"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"270"+"AC");	
			        break;
					
				case 49:
				    string = rePlaceStr3(str,169,"1",280,"3",270,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0280"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"280"+"AC");		
			        break;
					
				case 50:
				    string = rePlaceStr3(str,169,"1",281,"3",280,"1");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0281"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"281"+"AC");	
			        break;
					
				case 51:
				    string = rePlaceStr8(str,98,"3",154,"2",281,"1",282,"3",283,"2",284,"2",285,"2",287,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0282"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"282"+"AC");		
			        break;
					
				case 52:
				    string = rePlaceStr8(str,98,"4",154,"2",169,"1",282,"1",283,"3",284,"2",285,"2",287,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0283"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"283"+"AC");	
			        break;
					
				case 53:
				    string = rePlaceStr6(str,154,"2",169,"1",283,"1",284,"3",285,"2",287,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0284"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"284"+"AC");		
			        break;
					
				case 54:
				    string = rePlaceStr5(str,154,"1",169,"1",284,"1",285,"3",287,"2");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0285"+string.substr(430,10));	
					//setCookie("lieche_1","AB"+Cch1+"285"+"AC");	
			        break;
					
				case 55:
				    string = rePlaceStr3(str,169,"1",285,"1",287,"3");			   
			        setCookie("站场图",string.substr(0,422)+Cch1+"0287"+string.substr(430,10));
					//setCookie("lieche_1","AB"+Cch1+"287"+"AC");		
			        break;				
			}
			
		    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
			//var i;
           			
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
	
	if(i==13&&c==14)
	{
	        context.fillStyle = '#848284';
	        context.fillRect(fenjiedian[i-1], 250, 42, 5);
			context.fillRect(2328, 250, fenjiedian[i]-2328, 5);
	      
	
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
			
	}
    else if(i==14&&c==14)
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
	 
	 if(i==23&&c==24)
	{
	        context.fillStyle = '#848284';
	        context.fillRect(fenjiedian[i-1], 250, 42, 5);
			context.fillRect(4289, 250, fenjiedian[i]-4289, 5);
	      
	
	        //消除侧线上的小车
	        x=4306;y=222
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
			
	}
    else if(i==24&&c==24)
    {
	        context.fillStyle = '#848284';
	        context.fillRect(4378, 190, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
	
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
	 
	 if(i==33&&c==34)
	{
	        context.fillStyle = '#848284';
	        context.fillRect(fenjiedian[i-1], 250, 42, 5);
			context.fillRect(6230, 250, fenjiedian[i]-6230, 5);
	      
	
	        //消除侧线上的小车
	        x=6247;y=222
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
			
	}
    else if(i==34&&c==34)
    {
	        context.fillStyle = '#848284';
	        context.fillRect(6319, 190, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
	
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
	 
	 if(i==43&&c==44)
	{
	        context.fillStyle = '#848284';
	        context.fillRect(fenjiedian[i-1], 250, 42, 5);
			context.fillRect(8171, 250, fenjiedian[i]-8171, 5);
	      
	
	        //消除侧线上的小车
	        x=8188;y=222
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
			
	}
    else if(i==44&&c==44)
    {
	        context.fillStyle = '#848284';
	        context.fillRect(8260, 190, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
	
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
	 
	 else if(j==53)
	{			
	        context.fillStyle = '#848284';
	        context.fillRect(fenjiedian[j-1], 250, fenjiedian[j]-fenjiedian[j-1], 5);
			
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
	
    if(i==2)  // 解决第二辆车一出现1号道岔处弯股缺一块的bug
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

	if (i<c)
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
	if(i==14&&c==14)
	{
            context.fillStyle = "#848284";
	        //context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);			
	        context.fillRect(2372, 190, 45, 5);
			context.fillRect(fenjiedian[12], 250, fenjiedian[13]-fenjiedian[12], 5);  // 画短灰线
			
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
			
			context.fillStyle = "black";
			context.fillRect(2312, 243, 10, 7);  // 将天津南站的1号道岔由反位转到定位(画黑块）	
	}
	
	if(i==14&&c>14)
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
	if(i==24&&c==24)
	{
            context.fillStyle = "#848284";
	        //context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);			
	        context.fillRect(4333, 190, 45, 5);
			context.fillRect(fenjiedian[22], 250, fenjiedian[23]-fenjiedian[22], 5);  
			
			/* context.fillStyle = "black";
			context.fillRect(2316, 250, 12, 5);  */  // 将天津南站的1号道岔由定位转到反位(画黑块)
			
	        context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#848284";      // 将天津南站的1DG的弯股变为反位通过
	        x=4264;
	        y=252;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();
			
			context.fillStyle = "black";
			context.fillRect(4273, 243, 10, 7);  // 将天津南站的1号道岔由反位转到定位(画黑块）	
	}
	
	if(i==24&&c>24)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';  //  1DG的弯股
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(4333, 190, 45, 5);  // 1DG的侧线股道
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
	if(i==34&&c==34)
	{
            context.fillStyle = "#848284";
	        //context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);			
	        context.fillRect(6274, 190, 45, 5);
			context.fillRect(fenjiedian[32], 250, fenjiedian[33]-fenjiedian[32], 5);  // 画短灰线
			
			/* context.fillStyle = "black";
			context.fillRect(2316, 250, 12, 5);  */  // 将天津南站的1号道岔由定位转到反位(画黑块)
			
	        context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#848284";      // 将天津南站的1DG的弯股变为反位通过
	        x=6205;
	        y=252;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();
			
			context.fillStyle = "black";
			context.fillRect(6214, 243, 10, 7);  // 将天津南站的1号道岔由反位转到定位(画黑块）	
	}
	
	if(i==34&&c>34)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';  //  1DG的弯股
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(6274, 190, 45, 5);  // 1DG的侧线股道
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
	
	if(i==44&&c==44)
	{
            context.fillStyle = "#848284";
	        //context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);			
	        context.fillRect(8215, 190, 45, 5);
			context.fillRect(fenjiedian[42], 250, fenjiedian[43]-fenjiedian[42], 5);  // 画短灰线
			
			/* context.fillStyle = "black";
			context.fillRect(2316, 250, 12, 5);  */  // 将天津南站的1号道岔由定位转到反位(画黑块)
			
	        context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#848284";      // 将天津南站的1DG的弯股变为反位通过
	        x=8146;
	        y=252;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();
			
			context.fillStyle = "black";
			context.fillRect(8155, 243, 10, 7);  // 将天津南站的1号道岔由反位转到定位(画黑块）	
	}
	
	if(i==44&&c>44)
	{
		    context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#848284';  //  1DG的弯股
			x=8153;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#848284";
			context.fillRect(8215, 190, 45, 5);  // 1DG的侧线股道
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
			context.fillRect(10085, 243, 10, 7);  // 在上海虹桥站的5号道岔处画一个小黑块，实现5号道岔由反位转到定位
			
	}
	
	if(i==55)
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
	
	
	if (i==5)
	{
		    x=800;y=250
		    xiaxingxinhaojihongdeng3(x,y)		
	}
	
	//经过天津南站时
	if(i==12&&c>14)
	{
			x=2320;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==12&&c==14)
	{
		    x=2320;y=250
            xiaxingxinhaojiUUdeng(x,y)
	}
	if(i==13)
	{
			x=2320;y=250
            xiaxingxinhaojihongdeng(x,y)
			
			context.beginPath();
			context.strokeStyle = 'black';
            context.arc(x-17,y-13,5.1,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke(); 
	}
    if(i==14)
	{
			x=2320;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==14&&c>14)
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
	if(i==22&&c>24)
	{
			x=4281;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==22&&c==24)
	{
		    x=4281;y=250
            xiaxingxinhaojiUUdeng(x,y)
	}
	if(i==23)
	{
			x=4281;y=250
            xiaxingxinhaojihongdeng(x,y)
			
			context.beginPath();
			context.strokeStyle = 'black';
            context.arc(x-17,y-13,5.1,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke(); 
	}
    if(i==24)
	{
			x=4281;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==24&&c>24)
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
	if(i==32&&c>34)
	{
			x=6222;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==32&&c==34)
	{
		    x=6222;y=250
            xiaxingxinhaojiUUdeng(x,y)
	}
	if(i==33)
	{
			x=6222;y=250
            xiaxingxinhaojihongdeng(x,y)
			
			context.beginPath();
			context.arc(x-17,y-13,5.1,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke(); 
	}
    if(i==34)
	{
		    x=6222;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==34&&c>34)
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
	if(i==42&&c>44)
	{
			x=8163;y=250
            xiaxingxinhaojilvdeng2(x,y)
	}
	if(i==42&&c==44)
	{
		    x=8163;y=250
            xiaxingxinhaojiUUdeng(x,y)
	}
	if(i==43)
	{
			x=8163;y=250
            xiaxingxinhaojihongdeng(x,y)
			
			context.beginPath();
			context.arc(x-17,y-13,5.1,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke(); 
	}
    if(i==44)
	{
			x=8163;y=250
            xiaxingxinhaojihongdeng3(x,y)
	}
	
	
	if(i==44&&c>44)
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
            xiaxingxinhaojiUUdeng(x,y)
	}
	if(i==52)
	{			
	        x=9959;y=250
            xiaxingxinhaojihongdeng(x,y)
			
			context.beginPath();
			context.arc(x-17,y-13,5.1,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke(); 
		
	}
	if(i==53)
	{			
	        x=9959;y=250
            xiaxingxinhaojihongdeng3(x,y)
		
	}
	
	if(i==3)
	{
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	x=800;y=250
    xiaxingxinhaojilvdeng(x,y)
	
	
	x=490;y=235                            // 画小车，最初的小车
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
	context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
            			
	//在始发站办理发车进路后的白光带显示
    context.fillStyle = "#FFF";
	context.fillRect(fenjiedian[i], 250, fenjiedian[i+3]-fenjiedian[i], 5);
				
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
	
	x=490;y=235
	xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号	
	}
	
			if(i==13&&c==14)
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
	 
	 if(i==13&&c>14)
			{
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号	
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);	 	
				
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
	
	if(i==14&&c==14)
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号		
    }
	
	if(i==14&&c>14)
	{
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号	
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
			
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
	
	if(i==23&&c==24)
	{
	       context.fillStyle = "red";
	       context.fillRect(fenjiedian[i-1], 250, 42, 5);  // 将天津南站的1DG的直股变为红光带(已将将道岔的定位扳到反位）-----------
	       context.fillRect(4333, 190, 45, 5);
		   
	       context.beginPath();
	       context.lineWidth = 5;
           context.strokeStyle ="red";   // 将济南西站的1DG的弯股变为红光带(已将将道岔的定位扳到反位）-----------
	       x=4264;
	       y=252;
	       k=50;
	       context.moveTo( x+10, y-1 ); // x+7,y-1
	       context.lineTo( x+17+k, y-9-k);
	       context.stroke();
		   
	       //画侧线上的小车
	        x=4306;y=222
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
	 
	 if(i==23&&c>24)
			{
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号	
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);	 	
				
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';   // 将1号道岔的弯股变成红光带
			x=4271;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";   // 将1号道岔的侧线股道变成红光带
			context.fillRect(4333, 190, 45, 5);	
			
			}
	
	if(i==24&&c==24)
     {
	    	   
	        context.fillStyle = "red";
	        context.fillRect(4378, 190, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
	     
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号	
    }
	
	if(i==24&&c>24)
	{
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号	
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
			
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
	}
	
	if(i==33&&c==34)
	{
	       context.fillStyle = "red";
	       context.fillRect(fenjiedian[i-1], 250, 42, 5);  // 将天津南站的1DG的直股变为红光带(已将将道岔的定位扳到反位）-----------
	       context.fillRect(6274, 190, 45, 5);
		   
	       context.beginPath();
	       context.lineWidth = 5;
           context.strokeStyle ="red";   // 将天津南站的1DG的弯股变为红光带(已将将道岔的定位扳到反位）-----------
	       x=6205;
	       y=252;
	       k=50;
	       context.moveTo( x+10, y-1 ); // x+7,y-1
	       context.lineTo( x+17+k, y-9-k);
	       context.stroke();
		   
	       //画侧线上的小车
	        x=6247;y=222
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
	 
	 if(i==33&&c>34)
			{
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号	
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);	 	
				
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';   // 将1号道岔的弯股变成红光带
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";   // 将1号道岔的侧线股道变成红光带
			context.fillRect(6274, 190, 45, 5);	
			
			}
	
	if(i==34&&c==34)
     {
	    	   
	        context.fillStyle = "red";
	        context.fillRect(6319, 190, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
	     
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号		
    }
	
	if(i==34&&c>34)
	{
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号	
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
			
			context.fillStyle = "#FFF";  // 将正线上的股道变成白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+3]-fenjiedian[i], 5);
				
			// 将10号道岔的弯股变成白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=4879;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			// 将10号道岔的侧线股道变成白光带
			context.fillStyle = "#FFF";
			context.fillRect(4824, 190, 52, 5);	 
	}
	
	if(i==43&&c==44)
	{
	       context.fillStyle = "red";
	       context.fillRect(fenjiedian[i-1], 250, 42, 5);  // 将天津南站的1DG的直股变为红光带(已将将道岔的定位扳到反位）-----------
	       context.fillRect(8215, 190, 45, 5);
		   
	       context.beginPath();
	       context.lineWidth = 5;
           context.strokeStyle ="red";   // 将天津南站的1DG的弯股变为红光带(已将将道岔的定位扳到反位）-----------
	       x=8146;
	       y=252;
	       k=50;
	       context.moveTo( x+10, y-1 ); // x+7,y-1
	       context.lineTo( x+17+k, y-9-k);
	       context.stroke();
		   
	       //画侧线上的小车
	        x=8188;y=222
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
	 
	 if(i==43&&c>44)
			{
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号	
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);	 	
				
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'red';   // 将1号道岔的弯股变成红光带
			x=8153;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "red";   // 将1号道岔的侧线股道变成红光带
			context.fillRect(8215, 190, 45, 5);	
			
			}
	
	if(i==44&&c==44)
     {
	    	   
	        context.fillStyle = "red";
	        context.fillRect(8260, 190, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);
	     
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号	
    }
	
	if(i==44&&c>44)
	{
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号	
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
			
			context.fillStyle = "#FFF";  // 将正线上的股道变成白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+3]-fenjiedian[i], 5);
				
			// 将10号道岔的弯股变成白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=6820;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			// 将10号道岔的侧线股道变成白光带
			context.fillStyle = "#FFF";
			context.fillRect(6665, 190, 52, 5);	 
	}
	
	 if(i>3&&i<52&&i!=13&&i!=14&&i!=23&&i!=24&&i!=33&&i!=34&&i!=43&&i!=44)
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
			if(i==12&&c==14)  // 当第一辆车运行到天津南站的X1JG时，排列经3G侧线进站的接车进路
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
			
			if(i==12&&c>14)
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
			
			if(i==22&&c==24)  // 当第一辆车运行到天津南站的X1JG时，排列经3G侧线进站的接车进路
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
			context.fillRect(4333, 190, 45, 5);
			context.fillRect(4378, 190, zhongjianzhan_cexiantingche[i+2]-zhongjianzhan_cexiantingche[i+1], 5);
			
			context.fillStyle = "black";
			context.fillRect(4277, 250, 12, 5);  // 将天津南站的1号道岔由定位转到反位(画黑块)
			
			/*context.fillStyle = "#848284";
			context.fillRect(fenjiedian[i+1], 250, fenjiedian[i+2]-fenjiedian[i+1], 5);*/
			
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#FFF";   // 将天津南站的1DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------
	        x=4264;
	        y=252;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();
    }	
	
			// 当小车运行到济南西站的3JG时，自动排列好通过进路
			if(i==22&&c>24)
			{
		    context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
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
			if(i==32&&c==34)  // 当第一辆车运行到天津南站的X1JG时，排列经3G侧线进站的接车进路
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
			context.fillRect(6274, 190, 45, 5);
			context.fillRect(6319, 190, zhongjianzhan_cexiantingche[i+2]-zhongjianzhan_cexiantingche[i+1], 5);
			
			context.fillStyle = "black";
			context.fillRect(6218, 250, 12, 5);  // 将天津南站的1号道岔由定位转到反位(画黑块)
			
			/*context.fillStyle = "#848284";
			context.fillRect(fenjiedian[i+1], 250, fenjiedian[i+2]-fenjiedian[i+1], 5);*/
			
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#FFF";   // 将天津南站的1DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------
	        x=6205;
	        y=252;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();
    }	
	
			// 当小车运行到济南西站的3JG时，自动排列好通过进路
			if(i==32&&c>34)
			{
		    context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';   // 将1DG的弯股变为白光带
			x=6212;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";  // 将1DG的侧线股道变为白光带
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
			if(i==42&&c==44)  // 当第一辆车运行到天津南站的X1JG时，排列经3G侧线进站的接车进路
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
			context.fillRect(8215, 190, 45, 5);
			context.fillRect(8260, 190, zhongjianzhan_cexiantingche[i+2]-zhongjianzhan_cexiantingche[i+1], 5);
			
			context.fillStyle = "black";
			context.fillRect(8159, 250, 12, 5);  // 将天津南站的1号道岔由定位转到反位(画黑块)
			
			/*context.fillStyle = "#848284";
			context.fillRect(fenjiedian[i+1], 250, fenjiedian[i+2]-fenjiedian[i+1], 5);*/
			
			context.beginPath();
	        context.lineWidth = 5;
            context.strokeStyle ="#FFF";   // 将天津南站的1DG的弯股变为白光带(已将将道岔的定位扳到反位）-----------
	        x=8146;
	        y=252;
	        k=50;
	        context.moveTo( x+10, y-1 ); // x+7,y-1
	        context.lineTo( x+17+k, y-9-k);
	        context.stroke();
    }	
	
			// 当小车运行到济南西站的3JG时，自动排列好通过进路
			if(i==42&&c>44)
			{
		    context.fillStyle = "#FFF";  // 将正线上的股道变为白光带
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';   // 将1DG的弯股变为白光带
			x=8153;
			y=245;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+10+k, y-1-k);
			context.stroke();
			
			context.fillStyle = "#FFF";  // 将1DG的侧线股道变为白光带
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号	
			
			context.fillStyle = "red";   // 将小车占用的轨道区段变为红光带 
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);

     }
     
	 //当列车运行到上海虹桥站3DG时
     if(i==52)
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
			context.fillRect(zhongdianzhan_cexiantingche[i-1], 250, zhongdianzhan_cexiantingche[i]-zhongdianzhan_cexiantingche[i-1], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[i+1], 190, zhongdianzhan_cexiantingche[i+3]-zhongdianzhan_cexiantingche[i+1], 5);
			
			// 画小车
			m=(zhongdianzhan_cexiantingche[i-1]+zhongdianzhan_cexiantingche[i])/2-50
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
			
			xieshuzi(m+35,n+12,Cch1)   // 次式可在车身上写车次号	
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
      
	  // 当列车运行到上海虹桥站5DG时
      if(i==53)
	{			
	        context.fillStyle = "red";
	        context.fillRect(fenjiedian[i-1], 250, 10089-fenjiedian[i-1], 5);
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
      
	  // 当列车在上海虹桥站1G时，画出小车并将其所占用股道变为红光带
      else if(i==54)
	{			
	        context.fillStyle = "red";
	        context.fillRect(zhongdianzhan_cexiantingche[i-1], 190, zhongdianzhan_cexiantingche[i]-zhongdianzhan_cexiantingche[i-1], 5);
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
			m=(zhongdianzhan_cexiantingche[i-1]+zhongdianzhan_cexiantingche[i])/2-50
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
			
			xieshuzi(m+35,n+12,Cch1)   // 次式可在车身上写车次号	
		
	}
	else if(i==55)
	{			
	        context.fillStyle = "red";
	        context.fillRect(zhongdianzhan_cexiantingche[i-1], 190, zhongdianzhan_cexiantingche[i]-zhongdianzhan_cexiantingche[i-1], 5);
		    context.fillStyle = "#848284";
		    context.fillRect(10305, 130, 35, 5);
	
	        m=(zhongdianzhan_cexiantingche[i-1]+zhongdianzhan_cexiantingche[i])/2-50
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
			
			xieshuzi(m+35,n+12,Cch1)   // 次式可在车身上写车次号	     
			
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


//    第二辆车（第一辆车在侧线）-------------------

function xxzilvmoshizouche_shanghai()
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
				    string = rePlaceStr5(str,28,"4",169,"1",178,"2",179,"2",180,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0180"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"180"+"AC");	
			        break;	
					
				case 5:
				    string = rePlaceStr4(str,169,"1",178,"2",179,"3",180,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0179"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"179"+"AC");	
			        break;	
					
				case 6:
				    string = rePlaceStr3(str,169,"1",178,"3",179,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0178"+"AC");	
					//("lieche_2","AB"+Cch2+"178"+"AC");	
			        break;	
					
				case 7:
				    string = rePlaceStr3(str,169,"1",177,"3",178,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0177"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"177"+"AC");		
			        break;	
					
				case 8:
				    string = rePlaceStr3(str,169,"1",176,"3",177,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0176"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"176"+"AC");	
			        break;	
					
				case 9: // 当第一辆列车在区间的时候，大排队信息定义为最初状态
				    string = rePlaceStr3(str,169,"1",176,"1",177,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0000"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"176"+"AC");	
			        break;	
					
				case 10:
				    string = rePlaceStr3(str,169,"1",190,"3",176,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0190"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"190"+"AC");		
			        break;	
					
				case 11:
				    string = rePlaceStr3(str,169,"1",191,"3",190,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0191"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"191"+"AC");	
			        break;	
				
				case 12:
				    string = rePlaceStr6(str,42,"1",169,"1",191,"1",192,"3",193,"2",195,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0192"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"192"+"AC");	
			        break;	
				
				case 13:
				    string = rePlaceStr5(str,42,"4",169,"1",192,"1",193,"3",195,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0193"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"193"+"AC");		
			        break;	
					
				case 14:
				    if(g>14)
					{
				    string = rePlaceStr7(str,45,"1",169,"1",193,"1",195,"3",204,"2",205,"2",206,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0195"+"AC");
					}
					else if(g==14)
					{
						string = rePlaceStr4(str,45,"1",169,"1",193,"1",195,"3");			   
			            setCookie("站场图",string.substr(0,430)+Cch2+"0195"+"AC");
					}
					//setCookie("lieche_2","AB"+Cch2+"195"+"AC");		
			        break;	
					
				case 15:
				    string = rePlaceStr6(str,45,"4",169,"1",195,"1",204,"2",205,"2",206,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0206"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"206"+"AC");		
			        break;	
					
				case 16:
				    string = rePlaceStr4(str,169,"1",204,"2",205,"3",206,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0205"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"205"+"AC");	
			        break;	
					
				case 17:
				    string = rePlaceStr3(str,169,"1",204,"3",205,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0204"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"204"+"AC");		
			        break;
					
				case 18:
				    string = rePlaceStr3(str,169,"1",203,"3",204,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0203"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"203"+"AC");		
			        break;
					
				case 19:
				    string = rePlaceStr3(str,169,"1",202,"3",203,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0202"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"202"+"AC");		
			        break;
					
				case 20:
				    string = rePlaceStr3(str,169,"1",202,"1",214,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0214"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"214"+"AC");
			        break;
					
				case 21:
				    string = rePlaceStr3(str,169,"1",215,"3",214,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0215"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"215"+"AC");	
			        break;
					
				case 22:
				    string = rePlaceStr6(str,56,"1",169,"1",215,"1",216,"3",217,"2",219,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0216"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"216"+"AC");
			        break;
					
				case 23:
				    string = rePlaceStr5(str,56,"4",169,"1",216,"1",217,"3",219,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0217"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"217"+"AC");
			        break;
					
				case 24:
				    if(g>24)
					{
				    string = rePlaceStr6(str,59,"1",169,"1",217,"1",219,"3",228,"2",229,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0219"+"AC");
					}
					else if(g==24)
					{
						string = rePlaceStr4(str,59,"1",169,"1",217,"1",219,"3");			   
			            setCookie("站场图",string.substr(0,430)+Cch2+"0219"+"AC");
					}
					//setCookie("lieche_2","AB"+Cch2+"219"+"AC");	
			        break;
					
				case 25:
				    string = rePlaceStr5(str,59,"4",169,"1",219,"1",228,"2",229,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0229"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"229"+"AC");
			        break;
					
				case 26:
				    string = rePlaceStr3(str,169,"1",228,"3",229,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0228"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"228"+"AC");
			        break;
					
				case 27:
				    string = rePlaceStr3(str,169,"1",227,"3",228,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0227"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"227"+"AC");
			        break;
					
				case 28:
				    string = rePlaceStr3(str,169,"1",226,"3",227,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0226"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"226"+"AC");	
			        break;
					
				case 29: // 当第一辆列车在区间的时候，大排队信息定义为最初状态
				    string = rePlaceStr3(str,169,"1",226,"1",227,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0000"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"176"+"AC");	
			        break;
					
				case 30:
				    string = rePlaceStr3(str,169,"1",236,"3",226,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0236"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"236"+"AC");	
			        break;
					
				case 31:
				    string = rePlaceStr3(str,169,"1",237,"3",236,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0237"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"237"+"AC");
			        break;
					
				case 32:
				    string = rePlaceStr6(str,70,"1",169,"1",237,"1",238,"3",239,"2",241,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0241"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"238"+"AC");
			        break;
					
				case 33:
				    string = rePlaceStr5(str,70,"4",169,"1",238,"1",239,"3",241,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0239"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"239"+"AC");
			        break;
					
				case 34:
				    if(g>34)
					{
				    string = rePlaceStr6(str,73,"1",169,"1",239,"1",241,"3",250,"2",251,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0241"+"AC");
					}
					else if(g==34)
					{
						string = rePlaceStr4(str,73,"1",169,"1",239,"1",241,"3");			   
			            setCookie("站场图",string.substr(0,430)+Cch2+"0241"+"AC");
					}
					//setCookie("lieche_2","AB"+Cch2+"241"+"AC");
			        break;
					
				case 35:
				    string = rePlaceStr5(str,73,"4",169,"1",241,"1",250,"2",251,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0251"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"251"+"AC");
			        break;
					
				case 36:
				    string = rePlaceStr3(str,169,"1",250,"3",251,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0250"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"250"+"AC");
			        break;
					
				case 37:
				    string = rePlaceStr3(str,169,"1",249,"3",250,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0249"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"249"+"AC");
			        break;
					
				case 38:
				    string = rePlaceStr3(str,169,"1",248,"3",249,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0248"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"248"+"AC");
			        break;
					
				case 39:    // 第一辆车此时在区间，大排队定义为最初状态
				    string = rePlaceStr3(str,169,"1",248,"1",249,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0000"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"248"+"AC");
			        break;
					
				case 40:
				    string = rePlaceStr3(str,169,"1",258,"3",248,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0258"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"258"+"AC");
			        break;
					
				case 41:
				    string = rePlaceStr3(str,169,"1",259,"3",258,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0259"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"259"+"AC");
			        break;
					
				case 42:
				    string = rePlaceStr6(str,84,"1",169,"1",259,"1",260,"3",261,"2",263,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0260"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"260"+"AC");
			        break;
					
				case 43:
				    string = rePlaceStr5(str,84,"4",169,"1",260,"1",261,"3",263,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0261"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"261"+"AC");	
			        break;
					
				case 44:
				    if(g>44)
					{
				    string = rePlaceStr6(str,87,"1",169,"1",261,"1",263,"3",272,"2",273,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0263"+"AC");
					}
					else if(g==44)
					{
						string = rePlaceStr4(str,87,"1",169,"1",261,"1",263,"3");			   
			            setCookie("站场图",string.substr(0,430)+Cch2+"0263"+"AC");
					}
					//setCookie("lieche_2","AB"+Cch2+"263"+"AC");
			        break;
					
				case 45:
				    string = rePlaceStr5(str,87,"4",169,"1",263,"1",272,"2",273,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0273"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"273"+"AC");
			        break;
					
				case 46:
				    string = rePlaceStr3(str,169,"1",272,"3",273,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0272"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"272"+"AC");	
			        break;
					
				case 47:
				    string = rePlaceStr3(str,169,"1",271,"3",272,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0271"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"271"+"AC");	
			        break;
					
				case 48:
				    string = rePlaceStr3(str,169,"1",270,"3",271,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0270"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"270"+"AC");
			        break;
					
				case 49:
				    string = rePlaceStr3(str,169,"1",280,"3",270,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0280"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"280"+"AC");	
			        break;
					
				case 50:
				    string = rePlaceStr3(str,169,"1",281,"3",280,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0281"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"281"+"AC");	
			        break;
					
				case 51:
				    string = rePlaceStr7(str,98,"1",169,"1",281,"1",282,"3",283,"2",284,"2",288,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0282"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"282"+"AC");
			        break;
					
				case 52:
				    string = rePlaceStr6(str,98,"4",169,"1",282,"1",283,"3",284,"2",288,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0283"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"283"+"AC");
			        break;
					
				case 53:
				    string = rePlaceStr4(str,169,"1",283,"1",284,"3",288,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0284"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"284"+"AC");
			        break;
					
				case 54:
				    string = rePlaceStr3(str,169,"1",288,"3",284,"1");			   
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


