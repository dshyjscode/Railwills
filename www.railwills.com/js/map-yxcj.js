//下行越行场景(天津)
$.cookie.json=true;

// 第一辆车在天津南站侧线停车，后面第二辆车正线通过，最终在济南西站侧线停车，之前第一辆车在济南西站正线停车
function xiaxingyuexing_jinan()
{
	var string=null;
	var str=$.cookie("zhanchangtu");    // 获取站场图大排队信息的初始状态
	
	switch(i)      // 每当列车位置改变，即对大排队信息进行更新
	{
		case 3:				    
			string = rePlaceStr5(str,28,"1",169,"3",178,"2",179,"2",180,"2");				   
			setCookie("站场图",string.substr(0,422)+Cch1+"0169"+string.substr(430,10));		
			//setCookie("lieche_1","AB"+Cch1+"169"+"AC");		
			break;	
				
		case 4:
			string = rePlaceStr5(str,28,"3",169,"1",178,"2",179,"2",180,"3");				   
			setCookie("站场图",string.substr(0,422)+Cch1+"0180"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"180"+"AC");
			break;	
					
		case 5:
			string = rePlaceStr4(str,169,"1",178,"2",179,"3",180,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0179"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"179"+"AC");	
			break;	
					
		case 6:
			string = rePlaceStr3(str,169,"1",178,"3",179,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0178"+string.substr(430,10));
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
					
		case 9:  //此时该列车在区间，将大排队信息定义为初始的状态
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
			string = rePlaceStr7(str,42,"3",127,"2",169,"1",191,"1",192,"3",193,"2",194,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0192"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"192"+"AC");
			break;	
				
		case 13:
			string = rePlaceStr6(str,42,"4",127,"2",169,"1",192,"1",193,"3",194,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0193"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"193"+"AC");
			break;
					
		case 14:
			if(j<18)
			{
				string = rePlaceStr4(str,127,"1",169,"1",193,"1",194,"3");			   
			    setCookie("站场图",string.substr(0,422)+Cch1+"0194"+string.substr(430,10));
				//setCookie("lieche_1","AB"+Cch1+"194"+"AC");
			}
			else if(j==18)
			{
				string = rePlaceStr8(str,44,"1",131,"2",169,"1",193,"1",194,"3",204,"2",205,"2",206,"2");
				setCookie("站场图",string.substr(0,422)+Cch1+"0194"+string.substr(430,10));
				//setCookie("lieche_1","AB"+Cch1+"194"+"AC");
			}
			break;
				
		case 15:
			string = rePlaceStr7(str,44,"4",131,"2",169,"1",194,"1",204,"2",205,"2",206,"3");
			setCookie("站场图",string.substr(0,422)+Cch1+"0206"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"206"+"AC");
			break;
				   
		case 16:
			string = rePlaceStr5(str,131,"1",169,"1",204,"2",205,"3",206,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0205"+string.substr(430,10));	
			//setCookie("lieche_1","AB"+Cch1+"205"+"AC");
			break;	
								
	}
	
	var str_1=$.cookie("站场图");          // 获取站场图大排队信息的初始状态
	switch(j)       // 每当列车位置改变，即对大排队信息进行更新
			{
				case 3:
				    string = rePlaceStr5(str_1,28,"1",169,"3",178,"2",179,"2",180,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0169"+"AC");
					//alert($.cookie("站场图"))	
					//setCookie("lieche_2","AB"+Cch2+"169"+"AC");	
			        break;	
				
				case 4:
				    string = rePlaceStr5(str_1,28,"4",169,"1",178,"2",179,"2",180,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0180"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"180"+"AC");	
			        break;	
					
				case 5:
				    string = rePlaceStr4(str_1,169,"1",178,"2",179,"3",180,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0179"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"179"+"AC");	
			        break;	
					
				case 6:
				    string = rePlaceStr3(str_1,169,"1",178,"3",179,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0178"+"AC");	
					//("lieche_2","AB"+Cch2+"178"+"AC");	
			        break;	
					
				case 7:
				    string = rePlaceStr3(str_1,169,"1",177,"3",178,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0177"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"177"+"AC");		
			        break;	
					
				case 8:
				    string = rePlaceStr3(str_1,169,"1",176,"3",177,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0176"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"176"+"AC");	
			        break;	
					
				case 9:   // 此时第一辆车在区间，大排队信息定义为最初状态
				    string = rePlaceStr3(str_1,169,"1",176,"1",177,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0000"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"176"+"AC");	
			        break;
					
				case 10:
				    string = rePlaceStr3(str_1,169,"1",190,"3",176,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0190"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"190"+"AC");		
			        break;	
					
				case 11:
				    string = rePlaceStr3(str_1,169,"1",191,"3",190,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0191"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"191"+"AC");	
			        break;	
				
				case 12:
				    string = rePlaceStr6(str_1,42,"1",169,"1",191,"1",192,"3",193,"2",195,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0192"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"192"+"AC");	
			        break;	
				
				case 13:
				    string = rePlaceStr5(str_1,42,"4",169,"1",192,"1",193,"3",195,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0193"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"193"+"AC");		
			        break;	
					
				case 14:
				    string = rePlaceStr7(str_1,45,"1",169,"1",193,"1",195,"3",204,"2",205,"2",206,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0195"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"195"+"AC");		
			        break;	
					
				case 15:
				    string = rePlaceStr6(str_1,45,"4",169,"1",195,"1",204,"2",205,"2",206,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0206"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"206"+"AC");		
			        break;	
					
				case 16:
				    string = rePlaceStr4(str_1,169,"1",204,"2",205,"3",206,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0205"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"205"+"AC");	
			        break;	
					
				case 17:
				    string = rePlaceStr3(str_1,169,"1",204,"3",205,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0204"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"204"+"AC");		
			        break;
					
				case 18:
				    string = rePlaceStr3(str_1,169,"1",203,"3",204,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0203"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"203"+"AC");		
			        break;
					
				case 19:
				    string = rePlaceStr3(str_1,169,"1",202,"3",203,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0202"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"202"+"AC");		
			        break;
					
				case 20:
				    string = rePlaceStr3(str_1,169,"1",202,"1",214,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0214"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"214"+"AC");
			        break;
					
				case 21:
				    string = rePlaceStr3(str_1,169,"1",215,"3",214,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0215"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"215"+"AC");	
			        break;
					
				case 22:
				    string = rePlaceStr6(str,56,"1",169,"1",215,"1",216,"3",217,"2",218,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0216"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"216"+"AC");
			        break;
					
				case 23:
				    string = rePlaceStr5(str,56,"4",169,"1",216,"1",217,"3",218,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0217"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"217"+"AC");
			        break;
					
				case 24:
				    string = rePlaceStr3(str,169,"1",217,"1",218,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0218"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"219"+"AC");	
			        break;									
			}
	var str_2=$.cookie("站场图");          // 获取站场图大排队信息的初始状态
	switch(i)      // 每当列车位置改变，即对大排队信息进行更新
	{
			case 17:
			string = rePlaceStr3(str_2,169,"1",204,"3",205,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0204"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"204"+"AC");
			break;
					
		case 18:
			string = rePlaceStr3(str_2,169,"1",203,"3",204,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0203"+string.substr(430,10));	
			//setCookie("lieche_1","AB"+Cch1+"203"+"AC");
			break;
					
		case 19:
			string = rePlaceStr3(str_2,169,"1",202,"3",203,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0202"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"202"+"AC");
			break;
			
		case 20:
			string = rePlaceStr3(str_2,169,"1",214,"3",202,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0214"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"214"+"AC");
			break;
					
		case 21:
			string = rePlaceStr3(str_2,169,"1",215,"3",214,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0215"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"215"+"AC");
			break;
					
		case 22:
			string = rePlaceStr6(str_2,56,"1",169,"1",215,"1",216,"3",217,"2",219,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0216"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"216"+"AC");	
			break;
					
		case 23:
			string = rePlaceStr5(str_2,56,"4",169,"1",216,"1",217,"3",219,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0217"+string.substr(430,10));	
			//setCookie("lieche_1","AB"+Cch1+"217"+"AC");
			break;
					
		case 24:
			string = rePlaceStr3(str_2,169,"1",217,"1",219,"3");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0219"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"219"+"AC");
			break;		
	}
	
	//var st=$.cookie("站场图");        // 获取最新的站场图的cookie信息
	//console.log(st.substr(427,3))    //在后台1查看第一辆车所在的轨道区段信息
	
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
			/*x=2320;y=250
			context.beginPath();
			context.strokeStyle ='black';
			context.lineWidth = 2;
            context.arc(x-18,y-13,6,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke();*/	
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
			
			xieshuzi(m+35,n+12,Cch2)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
			m=800;n=250
             xiaxingxinhaojilvdeng2(m,n)
			 
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+3]-zhongdianzhan_cexiantingche[j], 5);
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
			context.fillRect(fenjiedian[12], 250, fenjiedian[13]-fenjiedian[12], 5);  
			
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
   
	/*if(i==14&&j==8)
	{
		x=2320;y=250
        xiaxingxinhaojihongdeng3(x,y)
	} */
	
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
}
	
    if(i==12)  // 当第一辆车运行到天津南站的X1JG时，排列经3G侧线进站的接车进路
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
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
			
			//xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
	
     }
	 
	 

     else if((i<10)||(i>15&&i<25))
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

			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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
	
	 if(j==23)
	{
	        context.fillStyle = '#848284';
	        context.fillRect(4333, 190, 42, 5);
			context.fillRect(4289, 250, fenjiedian[j]-4289, 5);
	      
	
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
    /*else if(j==24)
    {
	        context.fillStyle = '#848284';
	        context.fillRect(4378, 190, zhongjianzhan_cexiantingche[j]-zhongjianzhan_cexiantingche[j-1], 5);
	
	         x=(zhongjianzhan_cexiantingche[j-1]+zhongjianzhan_cexiantingche[j])/2-50
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
	}*/
	//车在其他闭塞分区内
	else if(j<23)
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


	if (j<25)
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
            xiaxingxinhaojiUUdeng(x,y)
	}
	if(j==23)
	{
			x=4281;y=250
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
   
	if(j==24)
	{
		x=4281;y=250
        xiaxingxinhaojihongdeng3(x,y)
	} 
	
	if(j==23)
	{
		context.fillStyle = "red";
	       context.fillRect(fenjiedian[j-1], 250, 42, 5);  // 将天津南站的1DG的直股变为红光带(已将将道岔的定位扳到反位）-----------
	       context.fillRect(4333, 190, 45, 5);
		   
	       context.beginPath();
	       context.lineWidth = 5;
           context.strokeStyle ="red";   // 将天津南站的1DG的弯股变为红光带(已将将道岔的定位扳到反位）-----------
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
	
	if(j==24)
	{
		context.fillStyle = "red";
	        context.fillRect(4378, 190, zhongjianzhan_cexiantingche[j]-zhongjianzhan_cexiantingche[j-1], 5);
	     
	        x=(zhongjianzhan_cexiantingche[j-1]+zhongjianzhan_cexiantingche[j])/2-50
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
			
			xieshuzi(x+35,y+12,Cch2)   // 次式可在车身上写车次号	
	}
	
	if(j<23)
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
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
			
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
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+1]-zhongdianzhan_cexiantingche[j], 5);
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
			
			if(j==22)
			{
			x=(zhongjianzhan_cexiantingche[j-1]+zhongjianzhan_cexiantingche[j])/2-50
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
			context.fillRect(zhongjianzhan_cexiantingche[j-1], 250, zhongjianzhan_cexiantingche[j]-zhongjianzhan_cexiantingche[j-1], 5);
			
			context.fillStyle = "#FFF";
			context.fillRect(fenjiedian[j], 250, 42, 5);  // 将天津南站的1DG的直股变为白光带(已将将道岔的定位扳到反位）-----------
			context.fillRect(4333, 190, 45, 5);
			context.fillRect(4378, 190, zhongjianzhan_cexiantingche[j+2]-zhongjianzhan_cexiantingche[j+1], 5);
			
			context.fillStyle = "black";
			context.fillRect(4277, 250, 12, 5);  // 将天津南站的1号道岔由定位转到反位(画黑块)
			
			/*context.fillStyle = "#848284";
			context.fillRect(fenjiedian[j+1], 250, fenjiedian[i+2]-fenjiedian[i+1], 5);*/
			
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
			
			
			if(j==15)
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
			
			xieshuzi(m+35,n+12,Cch2)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);			
	}			
}



function xiaxingyuexingchangjing() // 终点站在上海虹桥站，越行站在天津
{
	var string=null;
	var str=$.cookie("zhanchangtu");    // 获取站场图大排队信息的初始状态
	
	switch(i)      // 每当列车位置改变，即对大排队信息进行更新
	{
		case 3:				    
			string = rePlaceStr5(str,28,"1",169,"3",178,"2",179,"2",180,"2");				   
			setCookie("站场图",string.substr(0,422)+Cch1+"0169"+string.substr(430,10));		
			//setCookie("lieche_1","AB"+Cch1+"169"+"AC");		
			break;	
				
		case 4:
			string = rePlaceStr5(str,28,"3",169,"1",178,"2",179,"2",180,"3");				   
			setCookie("站场图",string.substr(0,422)+Cch1+"0180"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"180"+"AC");
			break;	
					
		case 5:
			string = rePlaceStr4(str,169,"1",178,"2",179,"3",180,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0179"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"179"+"AC");	
			break;	
					
		case 6:
			string = rePlaceStr3(str,169,"1",178,"3",179,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0178"+string.substr(430,10));
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
					
		case 9:  //此时该列车在区间，将大排队信息定义为初始的状态
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
			string = rePlaceStr7(str,42,"3",127,"2",169,"1",191,"1",192,"3",193,"2",194,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0192"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"192"+"AC");
			break;	
				
		case 13:
			string = rePlaceStr6(str,42,"4",127,"2",169,"1",192,"1",193,"3",194,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0193"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"193"+"AC");
			break;
					
		case 14:
			if(j<18)
			{
				string = rePlaceStr4(str,127,"1",169,"1",193,"1",194,"3");			   
			    setCookie("站场图",string.substr(0,422)+Cch1+"0194"+string.substr(430,10));
				//setCookie("lieche_1","AB"+Cch1+"194"+"AC");
			}
			else if(j==18)
			{
				string = rePlaceStr8(str,44,"1",131,"2",169,"1",193,"1",194,"3",204,"2",205,"2",206,"2");
				setCookie("站场图",string.substr(0,422)+Cch1+"0194"+string.substr(430,10));
				//setCookie("lieche_1","AB"+Cch1+"194"+"AC");
			}
			break;
				
		case 15:
			string = rePlaceStr7(str,44,"4",131,"2",169,"1",194,"1",204,"2",205,"2",206,"3");
			setCookie("站场图",string.substr(0,422)+Cch1+"0206"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"206"+"AC");
			break;
				   
		case 16:
			string = rePlaceStr5(str,131,"1",169,"1",204,"2",205,"3",206,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0205"+string.substr(430,10));	
			//setCookie("lieche_1","AB"+Cch1+"205"+"AC");
			break;	
					
	}
	
	var str_1=$.cookie("站场图");    // 获取站场图大排队信息的初始状态
	
	switch(j)       // 每当列车位置改变，即对大排队信息进行更新
			{
				case 3:
				    string = rePlaceStr5(str_1,28,"1",169,"3",178,"2",179,"2",180,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0169"+"AC");
					//alert($.cookie("站场图"))	
					//setCookie("lieche_2","AB"+Cch2+"169"+"AC");	
			        break;	
				
				case 4:
				    string = rePlaceStr5(str_1,28,"4",169,"1",178,"2",179,"2",180,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0180"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"180"+"AC");	
			        break;	
					
				case 5:
				    string = rePlaceStr4(str_1,169,"1",178,"2",179,"3",180,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0179"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"179"+"AC");	
			        break;	
					
				case 6:
				    string = rePlaceStr3(str_1,169,"1",178,"3",179,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0178"+"AC");	
					//("lieche_2","AB"+Cch2+"178"+"AC");	
			        break;	
					
				case 7:
				    string = rePlaceStr3(str_1,169,"1",177,"3",178,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0177"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"177"+"AC");		
			        break;	
					
				case 8:
				    string = rePlaceStr3(str_1,169,"1",176,"3",177,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0176"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"176"+"AC");	
			        break;	
					
				case 9:   // 此时第一辆车在区间，大排队信息定义为最初状态
				    string = rePlaceStr3(str_1,169,"1",176,"1",177,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0000"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"176"+"AC");	
			        break;
					
				case 10:
				    string = rePlaceStr3(str_1,169,"1",190,"3",176,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0190"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"190"+"AC");		
			        break;	
					
				case 11:
				    string = rePlaceStr3(str_1,169,"1",191,"3",190,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0191"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"191"+"AC");	
			        break;	
				
				case 12:
				    string = rePlaceStr6(str_1,42,"1",169,"1",191,"1",192,"3",193,"2",195,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0192"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"192"+"AC");	
			        break;	
				
				case 13:
				    string = rePlaceStr5(str_1,42,"4",169,"1",192,"1",193,"3",195,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0193"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"193"+"AC");		
			        break;	
					
				case 14:
				    string = rePlaceStr7(str_1,45,"1",169,"1",193,"1",195,"3",204,"2",205,"2",206,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0195"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"195"+"AC");		
			        break;	
					
				case 15:
				    string = rePlaceStr6(str_1,45,"4",169,"1",195,"1",204,"2",205,"2",206,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0206"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"206"+"AC");		
			        break;	
					
				case 16:
				    string = rePlaceStr4(str_1,169,"1",204,"2",205,"3",206,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0205"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"205"+"AC");	
			        break;	
					
				case 17:
				    string = rePlaceStr3(str_1,169,"1",204,"3",205,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0204"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"204"+"AC");		
			        break;
					
				case 18:
				    string = rePlaceStr3(str_1,169,"1",203,"3",204,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0203"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"203"+"AC");		
			        break;
					
				case 19:
				    string = rePlaceStr3(str_1,169,"1",202,"3",203,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0202"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"202"+"AC");		
			        break;
					
				case 20:
				    string = rePlaceStr3(str_1,169,"1",202,"1",214,"3");			   
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
				    string = rePlaceStr6(str,59,"1",169,"1",217,"1",219,"3",228,"2",229,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0219"+"AC");
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
					
				case 29:   // 此时第一辆车在区间，大排队定义为最初状态
				    string = rePlaceStr3(str,169,"1",226,"1",227,"1");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0000"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"226"+"AC");	
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
			        setCookie("站场图",string.substr(0,430)+Cch2+"0238"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"238"+"AC");
			        break;
					
				case 33:
				    string = rePlaceStr5(str,70,"4",169,"1",238,"1",239,"3",241,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0239"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"239"+"AC");
			        break;
					
				case 34:
				    string = rePlaceStr6(str,73,"1",169,"1",239,"1",241,"3",250,"2",251,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0241"+"AC");	
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
					
				case 39:  // 此时第一辆车在区间，大排队定义为最初状态
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
				    string = rePlaceStr6(str,87,"1",169,"1",261,"1",263,"3",272,"2",273,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0263"+"AC");	
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
				    string = rePlaceStr8(str,98,"3",154,"2",281,"1",282,"3",283,"2",284,"2",285,"2",287,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0282"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"282"+"AC");
			        break;
					
				case 52:
				    string = rePlaceStr8(str,98,"4",154,"2",169,"1",282,"1",283,"3",284,"2",285,"2",287,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0283"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"283"+"AC");
			        break;
					
				case 53:
				    string = rePlaceStr6(str,154,"2",169,"1",283,"1",284,"3",285,"2",287,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0284"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"284"+"AC");
			        break;
					
				case 54:
				    string = rePlaceStr5(str,154,"1",169,"1",284,"1",285,"3",287,"2");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0285"+"AC");	
					//setCookie("lieche_2","AB"+Cch2+"285"+"AC");
			        break;
					
				case 55:
				    string = rePlaceStr3(str,169,"1",285,"1",287,"3");			   
			        setCookie("站场图",string.substr(0,430)+Cch2+"0287"+"AC");
					//setCookie("lieche_2","AB"+Cch2+"287"+"AC");
			        break;
				
			}
	
	var str_2=$.cookie("站场图");    // 获取站场图大排队信息的初始状态
	
	switch(i)
	{
		case 17:
			string = rePlaceStr3(str_2,169,"1",204,"3",205,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0204"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"204"+"AC");
			break;
					
		case 18:
			string = rePlaceStr3(str_2,169,"1",203,"3",204,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0203"+string.substr(430,10));	
			//setCookie("lieche_1","AB"+Cch1+"203"+"AC");
			break;
					
		case 19:
			string = rePlaceStr3(str_2,169,"1",202,"3",203,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0202"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"202"+"AC");
			break;
					
		case 20:
			string = rePlaceStr3(str_2,169,"1",214,"3",202,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0214"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"214"+"AC");
			break;
					
		case 21:
			string = rePlaceStr3(str_2,169,"1",215,"3",214,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0215"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"215"+"AC");
			break;
					
		case 22:
			string = rePlaceStr6(str_2,56,"1",169,"1",215,"1",216,"3",217,"2",219,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0216"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"216"+"AC");	
			break;
					
		case 23:
			string = rePlaceStr5(str_2,56,"4",169,"1",216,"1",217,"3",219,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0217"+string.substr(430,10));	
			//setCookie("lieche_1","AB"+Cch1+"217"+"AC");
			break;
					
		case 24:
			string = rePlaceStr6(str_2,59,"1",169,"1",217,"1",219,"3",228,"2",229,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0219"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"219"+"AC");
			break;
					
		case 25:
			string = rePlaceStr5(str_2,59,"4",169,"1",219,"1",228,"2",229,"3");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0229"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"229"+"AC");
			break;
					
		case 26:
			string = rePlaceStr3(str_2,169,"1",228,"3",229,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0228"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"228"+"AC");	
			break;
					
		case 27:
			string = rePlaceStr3(str_2,169,"1",227,"3",228,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0227"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"227"+"AC");
			break;
					
		case 28:
			string = rePlaceStr3(str_2,169,"1",226,"3",227,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0226"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"226"+"AC");
			break;
			
		case 29:   // 此时该车在区间，将大排队信息定义为初始状态
			string = rePlaceStr3(str_2,169,"1",226,"1",227,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0000"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"226"+"AC");
			break;
					
		case 30:
			string = rePlaceStr3(str_2,169,"1",236,"3",226,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0236"+string.substr(430,10));	
			//setCookie("lieche_1","AB"+Cch1+"236"+"AC");
			break;
					
		case 31:
			string = rePlaceStr3(str_2,169,"1",237,"3",236,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0237"+string.substr(430,10));	
			//setCookie("lieche_1","AB"+Cch1+"237"+"AC");
			break;
					
		case 32:
			string = rePlaceStr6(str_2,70,"1",169,"1",237,"1",238,"3",239,"2",241,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0238"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"238"+"AC");
		    break;
					
		case 33:
			string = rePlaceStr5(str_2,70,"4",169,"1",238,"1",239,"3",241,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0239"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"239"+"AC");
			break;
					
		case 34:
			string = rePlaceStr6(str_2,73,"1",169,"1",239,"1",241,"3",250,"2",251,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0241"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"241"+"AC");	
			break;
					
		case 35:
			string = rePlaceStr5(str_2,73,"4",169,"1",241,"1",250,"2",251,"3");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0251"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"251"+"AC");
			break;
					
		case 36:
			string = rePlaceStr3(str_2,169,"1",250,"3",251,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0250"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"250"+"AC");
			break;
					
		case 37:
			string = rePlaceStr3(str_2,169,"1",249,"3",250,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0249"+string.substr(430,10));	
			//setCookie("lieche_1","AB"+Cch1+"249"+"AC");
			break;
					
		case 38:
			string = rePlaceStr3(str_2,169,"1",248,"3",249,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0248"+string.substr(430,10));	
			//setCookie("lieche_1","AB"+Cch1+"248"+"AC");
			break;
			
		case 39:   // 此时该车在区间，将大排队信息定义为初始转态
			string = rePlaceStr3(str_2,169,"1",248,"1",249,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0000"+string.substr(430,10));	
			//setCookie("lieche_1","AB"+Cch1+"248"+"AC");
			break;
					
		case 40:
			string = rePlaceStr3(str_2,169,"1",258,"3",248,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0258"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"258"+"AC");
			break;
					
		case 41:
			string = rePlaceStr3(str_2,169,"1",259,"3",258,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0259"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"259"+"AC");
			break;
					
		case 42:
			string = rePlaceStr6(str_2,84,"1",169,"1",259,"1",260,"3",261,"2",263,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0260"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"260"+"AC");
			break;
					
		case 43:
			string = rePlaceStr5(str_2,84,"4",169,"1",260,"1",261,"3",263,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0261"+string.substr(430,10));	
			//setCookie("lieche_1","AB"+Cch1+"261"+"AC");
			break;
					
		case 44:
			string = rePlaceStr6(str_2,87,"1",169,"1",261,"1",263,"3",272,"2",273,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0263"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"263"+"AC");
			break;
					
		case 45:
			string = rePlaceStr5(str_2,87,"4",169,"1",263,"1",272,"2",273,"3");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0273"+string.substr(430,10));		
			//setCookie("lieche_1","AB"+Cch1+"273"+"AC");
			break;
					
		case 46:
			string = rePlaceStr3(str_2,169,"1",272,"3",273,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0272"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"272"+"AC");
			break;
					
		case 47:
			string = rePlaceStr3(str_2,169,"1",271,"3",272,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0271"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"271"+"AC");	
			break;
					
		case 48:
			string = rePlaceStr3(str_2,169,"1",270,"3",271,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0270"+string.substr(430,10));
			//setCookie("lieche_1","AB"+Cch1+"270"+"AC");
			break;
					
		case 49:
			string = rePlaceStr3(str_2,169,"1",280,"3",270,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0280"+string.substr(430,10));	

			//setCookie("lieche_1","AB"+Cch1+"280"+"AC");
			break;
					
		case 50:
			string = rePlaceStr3(str_2,169,"1",281,"3",280,"1");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0281"+string.substr(430,10));	
			//setCookie("lieche_1","AB"+Cch1+"281"+"AC");
			break;
			
		case 51:
			string = rePlaceStr7(str_2,98,"1",169,"1",281,"1",282,"3",283,"2",284,"2",288,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0282"+string.substr(430,10));		
			//setCookie("lieche_1","AB"+Cch1+"282"+"AC");
			break;	
			
		case 52:
			string = rePlaceStr6(str_2,98,"4",169,"1",282,"1",283,"3",284,"2",288,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0283"+string.substr(430,10));	
			//setCookie("lieche_1","AB"+Cch1+"283"+"AC");
			break;
					
		case 53:
			string = rePlaceStr4(str_2,169,"1",283,"1",284,"3",288,"2");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0284"+string.substr(430,10));		
			//setCookie("lieche_1","AB"+Cch1+"284"+"AC");
			break;
					
		case 54:
			string = rePlaceStr3(str_2,169,"1",284,"1",288,"3");			   
			setCookie("站场图",string.substr(0,422)+Cch1+"0288"+string.substr(430,10));	
			//setCookie("lieche_1","AB"+Cch1+"288"+"AC");
			 break;			
		        
	        }
	//var st=$.cookie("站场图");      // 获取最新的站场图的cookie信息
	//console.log(st.substr(427,3))  //在后台1查看第一辆车所在的轨道区段信息
	
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
			/*x=2320;y=250
			context.beginPath();
			context.strokeStyle ='black';
			context.lineWidth = 2;
            context.arc(x-18,y-13,6,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke();*/
	
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
			
			xieshuzi(m+35,n+12,Cch2)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
			m=800;n=250
             xiaxingxinhaojilvdeng2(m,n)
			 
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+3]-zhongdianzhan_cexiantingche[j], 5);
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
			context.fillRect(fenjiedian[12], 250, fenjiedian[13]-fenjiedian[12], 5);  
			
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
   
	if(i==14&&j==8)
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
}
	
    if(i==12)  // 当第一辆车运行到天津南站的X1JG时，排列经3G侧线进站的接车进路
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
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
			
			//xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
	
     }
	 
	 

     else if((i<10)||(i>15&&i<52))
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);	
			
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);	
			
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);	
			
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
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
			
			/*context.fillStyle = "black";
			context.fillRect(10085, 243, 10, 7);*/  // 在上海虹桥站的5号道岔处画一个小黑块，实现5号道岔由反位转到定位
		     
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
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
			
			xieshuzi(x+35,y+12,Cch1)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(zhongjianzhan_cexiantingche[i-1], 250, zhongjianzhan_cexiantingche[i]-zhongjianzhan_cexiantingche[i-1], 5);			
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
	if(j==51)
	{//使该位置的第二个黄灯灯位灭灯
			x=9959;y=250
			context.beginPath();
			context.strokeStyle ='black';
			//context.lineWidth = 2;
            context.arc(x-18,y-13,7,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke();
	}
	if(j==52)  // 第二列车在上海虹桥站的X3JG下一个区段
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
	else if(j==53)
	{			
	        context.fillStyle = '#848284';
	        context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
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


	if (j<55)
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
			context.strokeStyle = '#848284';  // 当第二辆列车进入上海虹桥站的9DG时，将5DG的弯股变为灰色
			x=10076;
			y=252;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+17+k, y-9-k);
			context.stroke();
			
			context.fillStyle = "black";
			context.fillRect(10085, 243, 10, 7);  // 在上海虹桥站的5号道岔处画一个小黑块，实现5号道岔由反位转到定位
						
			context.fillStyle = "#848284";			
			context.fillRect(10145, 190, 45, 5);  // 5DG侧线股道
			
			/*context.fillStyle = "black";
			context.fillRect(10089, 250, 12, 5); */ // 将上海虹桥站的5号道岔由定位转到反位(画黑块）
			
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
	
	//经过济南西站时
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
	
	/*if(j==52)
	{
			m=9959;n=250
            xiaxingxinhaojihuangdeng(m,n)
	}*/
	if(j==52)
	{			
	        m=9959;n=250
            xiaxingxinhaojihongdeng(m,n)		
	}
	
	if(j==53)
	{
		    m=9959;n=250
            xiaxingxinhaojihongdeng3(m,n)
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
			
			xieshuzi(m+35,n+12,Cch2)   // 次式可在车身上写车次号
			
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
			
			xieshuzi(m+35,n+12,Cch2)   // 次式可在车身上写车次号
			
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
			
			xieshuzi(m+35,n+12,Cch2)   // 次式可在车身上写车次号
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
			
		    xieshuzi(m+35,n+12,Cch2)   // 次式可在车身上写车次号
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
			
		    xieshuzi(m+35,n+12,Cch2)   // 次式可在车身上写车次号
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
			    
			xieshuzi(m+35,n+12,Cch2)   // 次式可在车身上写车次号
			
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
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
			
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
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+1]-zhongdianzhan_cexiantingche[j], 5);
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
			
			if(j==22)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
			
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
			
			if(j==24)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
				
			// 将2DG的弯股变为白光带			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=4899;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";  // 将2DG的侧线股道变为白光带
			context.fillRect(4844, 190, 52, 5);
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
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
			
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
			
			if(j==34)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
				
			// 将2DG的弯股变为白光带			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=6840;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";  // 将2DG的侧线股道变为白光带
			context.fillRect(6785, 190, 52, 5);
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
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
			
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
			
			if(j==44)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
				
			// 将2DG的弯股变为白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=8781;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";  // 将2DG的侧线股道变为白光带
			context.fillRect(8726, 190, 52, 5);
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
			
			if(j==15)
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
			
			xieshuzi(m+35,n+12,Cch2)   // 次式可在车身上写车次号
			
			context.fillStyle = "red";
			context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);			
	}			
}


//下行行车越行场景（演示）----------------------------------------------------------------

function xiaxingxingcheyuexingchangjing()
{
	//var str=$.cookie("zhanchangtu");    // 获取站场图大排队信息的初始状态
	
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
			/*x=2320;y=250
			context.beginPath();
			context.strokeStyle ='black';
			context.lineWidth = 2;
            context.arc(x-18,y-13,6,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke();*/
	
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
			
			context.fillStyle = "red";
			context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
			m=800;n=250
             xiaxingxinhaojilvdeng2(m,n)
			 
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+3]-zhongdianzhan_cexiantingche[j], 5);
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
			context.fillRect(fenjiedian[12], 250, fenjiedian[13]-fenjiedian[12], 5);  
			
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
   
	if(i==14&&j==8)
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
			
			context.fillStyle = "red";
			context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
}
	
    if(i==12)  // 当第一辆车运行到天津南站的X1JG时，排列经3G侧线进站的接车进路
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);	
			
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);	
			
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);	
			
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
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
			context.fillRect(fenjiedian[i], 250, fenjiedian[i+2]-fenjiedian[i], 5);
			
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
			
			/*context.fillStyle = "black";
			context.fillRect(10085, 243, 10, 7);*/  // 在上海虹桥站的5号道岔处画一个小黑块，实现5号道岔由反位转到定位
		     
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
	if(j==51)
	{//使该位置的第二个黄灯灯位灭灯
			x=9959;y=250
			context.beginPath();
			context.strokeStyle ='black';
			//context.lineWidth = 2;
            context.arc(x-18,y-13,7,0,2*Math.PI);
            context.fillStyle="black";
            context.fill();
            context.stroke();
	}
	if(j==52)  // 第二列车在上海虹桥站的X3JG下一个区段
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
	else if(j==53)
	{			
	        context.fillStyle = '#848284';
	        context.fillRect(zhongdianzhan_cexiantingche[j-1], 250, zhongdianzhan_cexiantingche[j]-zhongdianzhan_cexiantingche[j-1], 5);
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


	if (j<55)
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
			context.strokeStyle = '#848284';  // 当第二辆列车进入上海虹桥站的9DG时，将5DG的弯股变为灰色
			x=10076;
			y=252;
			k=50;
			context.moveTo( x+10, y-1 ); // x+7,y-1
			context.lineTo( x+17+k, y-9-k);
			context.stroke();
			
			context.fillStyle = "black";
			context.fillRect(10085, 243, 10, 7);  // 在上海虹桥站的5号道岔处画一个小黑块，实现5号道岔由反位转到定位
						
			context.fillStyle = "#848284";			
			context.fillRect(10145, 190, 45, 5);  // 5DG侧线股道
			
			/*context.fillStyle = "black";
			context.fillRect(10089, 250, 12, 5); */ // 将上海虹桥站的5号道岔由定位转到反位(画黑块）
			
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
	
	/*if(j==52)
	{
			m=9959;n=250
            xiaxingxinhaojihuangdeng(m,n)
	}*/
	if(j==52)
	{			
	        m=9959;n=250
            xiaxingxinhaojihongdeng(m,n)		
	}
	
	if(j==53)
	{
		    m=9959;n=250
            xiaxingxinhaojihongdeng3(m,n)
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
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
			
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
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+1]-zhongdianzhan_cexiantingche[j], 5);
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
			
			if(j==22)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
			
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
			
			if(j==24)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
				
			// 将2DG的弯股变为白光带			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=4899;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";  // 将2DG的侧线股道变为白光带
			context.fillRect(4844, 190, 52, 5);
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
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
			
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
			
			if(j==34)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
				
			// 将2DG的弯股变为白光带			
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=6840;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";  // 将2DG的侧线股道变为白光带
			context.fillRect(6785, 190, 52, 5);
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
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
			
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
			
			if(j==44)
			{
			context.fillStyle = "#FFF";
			context.fillRect(zhongdianzhan_cexiantingche[j], 250, zhongdianzhan_cexiantingche[j+2]-zhongdianzhan_cexiantingche[j], 5);
				
			// 将2DG的弯股变为白光带
			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = '#FFF';
			x=8781;
			y=188;
			k=50;
			context.moveTo( x, y+6 ); // x+7,y-1
			context.lineTo( x+k, y+6+k);
			context.stroke();
			
			context.fillStyle = "#FFF";  // 将2DG的侧线股道变为白光带
			context.fillRect(8726, 190, 52, 5);
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