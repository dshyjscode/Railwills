	//排列进路，获取进路始端、终端位置
	var d=100;
	var JinLuPos=new Array([],[]);//存始端坐标、终端坐标
	var CancelPos = new Array();//存放取消进路的始端按钮
	//var p =new Array();//存始端坐标、终端坐标
	var CancelX=1;//下行取消进路标志,0:取消进路；1：保持进路
	var CancelS=1;//上行取消进路标志
    var jinlutimer;
	var canceljinlutimer;
	var Djinlu={
		Dcount:0,
		ind:null
    }
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
			
			alert("取消进路");
		}
		else if(CancelS==0)
		{
			CancelPos[count++]=obj;
			CancelS=1;
			alert("取消进路");
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
			
			JinLuPos[row][col]=obj;
            //alert("点击一个按钮");
            if(row==0){
                row++; 
            }
            else{
                row=0
                col++; 
            }
            
            if(Djinlu.Dcount==0 && json.ad_PlanWait.length>0){
                //alert(JinLu.size[0]);
                json.ad_PlanWait.forEach(function(val,num){   

                   console.log(obj) 
                   console.log(JinLuPos[0].slice(-1).id) 
                   if(JinLuPos[0].slice(-1)[0].id==val.startButton){
                       Djinlu.ind = num
                       Djinlu.Dcount++             
                   }    
                     
                        
                })  
            }
            else if( Djinlu.Dcount==1){
                if(JinLuPos[1][col-1].id==json.ad_PlanWait[Djinlu.ind].endButton){
					console.log(obj) 
                    console.log(JinLuPos[0].slice(-1).id) 
                    SmtShuntingRoute_to_CBI(Djinlu.ind)
                    Djinlu.Dcount=0
                    Djinlu.ind=null
                    
                }
                else{
                    alert("进路排列错误")
                    Djinlu.Dcount = 0
                }  
               
            }  
            
			//alert(JinLu.size[0]);
		}  
        return true;
    }
function getpositionofDiaoChe(obj) {

		if(CancelX==0)
		{
			CancelPos[count++]=obj;
			CancelX=1;
			
			alert("取消调车进路");
		}
		else if(CancelS==0)
		{
			CancelPos[count++]=obj;
			CancelS=1;
			alert("取消调车进路");
		}
		else{
			//for(var i=0;i<JinLuPos[0].length;i++){
			//	if (JinLuPos[0][i]==obj)
			//	{
			//		alert("不能排列进路！");//抵触进路不能排列
			//	    return false;}
			//}
			//for(var j=0;j<JinLuPos[0].length;j++){
			//	if (JinLuPos[1][j]==obj)
			//	{
			//		alert("不能排列进路！");//抵触进路不能排列
			//		JinLuPos[--row][col]=null;//不能排列进路，清空此列数据，下一条数据依然在此列存放，否则导致此列始端按钮有值，而终端按钮为空，包含这个始端按钮的进路不能排列
					//row=0;                //排列进路列表转到下一列记录数据，否则容易崩溃
				    //col++;
			//	    return false;}
			//}
			JinLuPos[row][col]=obj;
            //alert("点击一个按钮");
            if(row==0){
                row++; 
            }
            else{
                row=0
                col++; 
            }
           
            if(Djinlu.Dcount==0 && json.ad_PlanWait.length>0){
                //alert(JinLu.size[0]);
                json.ad_PlanWait.forEach(function(val,num){   
                    
                   console.log(JinLuPos[0].slice(-1).id)        
                   if(JinLuPos[0].slice(-1).id==val.startButton){
                       Djinlu.ind = num
                       Djinlu.Dcount++             
                   }    
                     
                        
                })  
            }
            else if( Djinlu.Dcount==1){
               if(JinLuPos[1][col-1].id==json.ad_PlanWait[Djinlu.ind].endButton){
                   
                   SmtShuntingRoute_to_CBI(Djinlu.ind)
                   Djinlu.Dcount==0
                   Djinlu.ind=null
                   Djinlu.index=null
               }
               else{
                   alert("进路排列错误")
                   Djinlu.Dcount = 0
               }  
               
            }  
		}
	     
        return true;
    }
    //定期刷新，检测是否取消进路标志为0，若为零，获取进路始端按钮，存入CancelPos[]中
	//在取消进路列表中搜索始端按钮，若找到，则将以这个按钮为始端的所有进路都取消
	function CancelJinLu(){
		var x,y,k;
		for(var i=0;i<CancelPos.length;i++)
		{
			if(CancelPos[i]==document.getElementById('XLA')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('XLA')){
							if(JinLuPos[1][p] == document.getElementById('SILA')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';
								x=195;
								y=245+d;
								k=50;		
								context.moveTo( 163,352); 
								context.lineTo( 753, 352);
								//道岔上部分
								context.moveTo( x+10+k-50, y-1-k+50); 
								context.lineTo( x+10+k-2, y-1-k+2);
								context.moveTo( x+10+k-2, 292); 
								context.lineTo( 326, 292);
								context.stroke();
								//CancelX=1;//还原
								//X信号机红灯
								x=210;y=250+d
								xiaxingxinhaoji(x,y)
								}
							else if(JinLuPos[1][p] == document.getElementById('S3LA')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								//恢复
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 163,352); 
								context.lineTo( 205, 352); 
								//1
								x=195;
								y=245+d;
								k=55;
								context.moveTo( x+7, y+2 ); 
								context.lineTo( x+7+k, y+2-k);
								
								context.moveTo( x+7+k,292);
								context.lineTo( 653, 292);
								
								context.moveTo( x+7+20,352);
								context.lineTo( 326, 352);
								//5
								x=315;
								y=187+d;
								k=55;
								context.moveTo( x+40+6, y-3-6 ); 
								context.lineTo( x+40+k-2, y-3-k+2);
								context.moveTo( x+40+k,233); 
								context.lineTo( 436, 233);
								context.stroke();
								//CancelX=1;//还原
								//X信号机红灯
								x=210;y=250+d
								xiaxingxinhaojiUUdengD(x,y)
								xiaxingxinhaoji(x,y)
								}
							else if(JinLuPos[1][p] == document.getElementById('S5LA')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 163,352); 
								context.lineTo( 205, 352); 
								//1
								x=195;
								y=245+d;
								k=55;
								context.moveTo( x+7, y+2 ); 
								context.lineTo( x+7+k, y+2-k);
								context.moveTo( x+7+k,292);
								context.lineTo( 352, 292);
								context.moveTo( 372,292);
								context.lineTo( 406, 292);
								
								context.moveTo( x+7+20,352);
								context.lineTo( 326, 352);
								//5
								x=315;
								y=187+d;
								k=55;	
								context.moveTo( x+37, y ); 
								context.lineTo( x+37+k, y-k);
								context.moveTo( x+37+k,233); 
								context.lineTo( 613, 233); 
						
								context.stroke();
								//CancelX=1;//还原
								//X信号机红灯
								x=210;y=250+d
								xiaxingxinhaojiUUdengD(x,y)
								xiaxingxinhaoji(x,y)
								}
						}
					}		
			}
			else if(CancelPos[i]==document.getElementById('SLA'))
			{
				for(var q=0;q<JinLuPos[0].length;q++){
						if(JinLuPos[0][q]==document.getElementById('SLA')){
							if(JinLuPos[1][q] == document.getElementById('XIILA')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';
								x=810;
								y=371+d;
								k=50;		
								context.moveTo( 1050,413); 
								context.lineTo( 326, 413);
								//道岔反位部分
								context.moveTo(x+k-5, y-1-k+5); 
								context.lineTo( x, y-1);
								context.moveTo( x,473); 
								context.lineTo( 753, 473);
								context.stroke();
								//CancelS=1;//还原
								//S信号机红灯
								x=1063;y=340+d
								shangxingxinhaoji(x,y)
								}
							else if(JinLuPos[1][q] == document.getElementById('X4LA')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';
								//8
								x=810;
								y=371+d;
								k=50;
								context.moveTo( 1050,413); 
								context.lineTo( x+k, 413);
								context.moveTo( x, y-1 ); 
								context.lineTo( x+k, y-1-k);	 
								
								context.moveTo(x,473);
								context.lineTo( 406, 473);
								
								context.moveTo( 753, 413); 
								context.lineTo( x+k-20, 413);
								
								//12
								x=654;
								y=434+d;
								k=50;
								context.moveTo( x, y-3 ); 
								context.lineTo( x+k-5, y-3-k+5);
								context.moveTo( x, 533 ); 
								context.lineTo( 613,533);
								context.stroke();
								
								//S信号机红灯
								x=1063;y=340+d
								shangxingxinhaojiUUdengD(x,y)
								shangxingxinhaoji(x,y)
								}
							else if(JinLuPos[1][q] == document.getElementById('X6LA')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';
								//8
								x=810;
								y=371+d;
								k=50;
								context.moveTo( 1050,413); 
								context.lineTo( x+k, 413);
								context.moveTo( x, y-1 ); 
								context.lineTo( x+k, y-1-k);	 
								
								context.moveTo(x,473);
								context.lineTo( 704, 473);
								context.moveTo(684,473);
								context.lineTo( 653, 473);
								
								context.moveTo( 753, 413); 
								context.lineTo( x+k-20, 413);
								//12
								x=654;
								y=434+d;
								k=50;
								context.moveTo( x, y-3 ); 
								context.lineTo( x+k, y-3-k);
								context.moveTo( x, 533 ); 
								context.lineTo( 436,533);
								context.stroke();
								//CancelS=1;//还原
								//S信号机红灯
								x=1063;y=340+d
								shangxingxinhaojiUUdengD(x,y)
								shangxingxinhaoji(x,y)
								}
						}
					}
				}
			else if(CancelPos[i]==document.getElementById('SIILA')){
				        var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = '#848284';
						x=195;
						y=320+d;
						k=50;		
						context.moveTo( 326,413); 
						context.lineTo( 163, 413);
						
						context.moveTo( x+8+5, y-1+5); 
						context.lineTo( x+10+k, y+1+k);
						context.moveTo( x+10+k, 473 ); 
						context.lineTo( 326, 473);
						context.stroke();
						
						//S信号机红灯
						x=340;y=340+d
						shangxingxinhaoji(x,y)
				}
			else if(CancelPos[i]==document.getElementById('S4LA')){
				       var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = '#848284';		
						//3号道岔
						x=195;
						y=320+d;
						k=52;		
						context.moveTo( 406,473); 
						context.lineTo( x+8+k, 473);
						context.moveTo( x+8, y-1 ); 
						context.lineTo( x+8+k, y-1+k);
						context.moveTo(  x+8,413); 
						context.lineTo( 163, 413);
						
						context.moveTo(  223, 413); 
						context.lineTo( 326, 413);
						//7号道岔
						x=315;
						y=378+d;
						k=50;
						context.moveTo( x+37+10, y+10 ); 
						context.lineTo( x+40+k, y+3+k);
						context.moveTo( x+40+k, 533 ); 
						context.lineTo( 436, 533);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 203, 413); 
						context.lineTo( 223, 413);
						context.stroke();
						//CancelS=1;//还原
						//S信号机红灯
						x=420;y=400+d
						shangxingxinhaoji(x,y)
				}
			else if(CancelPos[i]==document.getElementById('S6LA')){
				       var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = '#848284';		
						//3号道岔
						x=195;
						y=320+d;
						k=52;		
						context.moveTo(  x+8,413); 
						context.lineTo( 163, 413);
						context.moveTo(  223, 413); 
						context.lineTo( 326, 413);
						context.moveTo( x+8, y-1 ); 
						context.lineTo( x+8+k, y-1+k);
						context.moveTo( x+8+k,473); 
						context.lineTo( 352, 473);
						context.moveTo( 406,473); 
						context.lineTo(372, 473);
						
				        //7号道岔
						x=315;
						y=378+d;
						k=55;
						context.moveTo( x+37, y ); 
						context.lineTo( x+37+k, y+k);	
						context.moveTo( x+37+k, 533 ); 
						context.lineTo( 436, 533);
						context.stroke();
						
						//S信号机红灯
						x=450;y=460+d
						shangxingxinhaoji(x,y)
			}
			else if(CancelPos[i]==document.getElementById('XILA')){
				       var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = '#848284';
						//6
						x=810;
						y=189+d;
						k=55;		
						context.moveTo( 753,353); 
						context.lineTo( 1050,353);
						//6号道岔
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k-10, y+6+k-10);
						context.moveTo( 753,293); 
						context.lineTo( x, 293);
						context.stroke();
						//CancelX=1;//还原
						//X信号机红灯
						x=800;y=250+d
						xiaxingxinhaoji(x,y)
				}
			else if(CancelPos[i]==document.getElementById('X3LA')){
				       var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = '#848284';		
						context.moveTo( 653,293); 
						context.lineTo( 811, 293);
						//6
						x=810;
						y=189+d;
						k=55;
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k, y+6+k);
						
						context.moveTo( x+k,353); 
						context.lineTo( 1050, 353);
						context.moveTo( 753,353); 
						context.lineTo( 845, 353);
						//10
						x=652;
						y=128+d;
						k=55;
						context.moveTo( x, y+6 ); 
						context.lineTo(x+k-10, y+6+k-10);
						context.moveTo( 613,233);
						context.lineTo( x, 233);
						context.stroke();
						
						//X信号机红灯
						x=700;y=190+d
						xiaxingxinhaoji(x,y)
		}
		  else if(CancelPos[i]==document.getElementById('X5LA')){
			            var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = '#848284';		
						//10
						x=652;
						y=128+d;
						k=55;
						context.moveTo( 613,233);
						context.lineTo( x, 233);
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k, y+6+k);
						
						context.moveTo( 653,293); 
						context.lineTo( x+k-20, 293);
						context.moveTo( x+k,293); 
						context.lineTo( 811, 293);
						//6
						x=810;
						y=189+d;
						k=55;
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k, y+6+k);
						context.moveTo( x+k,353); 
						context.lineTo( 1050, 353);
						context.moveTo( 753,353); 
						context.lineTo( 845, 353);
						context.stroke();
						
						//X信号机红灯
						x=660;y=130+d
						xiaxingxinhaoji(x,y)
			  }
			 //取消调车进路
			 //D1
			else if(CancelPos[i]==document.getElementById('D1')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('D1')){
							if(JinLuPos[1][p] == document.getElementById('S5DA')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';
								//5
								x=315;
								y=187+d;
								k=55;		
								context.moveTo( 326,292);
								context.lineTo(  352, 292);
									
								context.moveTo( x+37, y ); 
								context.lineTo( x+37+k, y-k);
								context.moveTo( x+37+k,233); 
								context.lineTo( 613, 233); 
								 
								context.moveTo( 372,292);
								context.lineTo( 406, 292);
								context.stroke();
								//D1白灯
								x=373;y=290
								xiaxingdiaochexinhaoji(x,y);

							}
							else if(JinLuPos[1][p] == document.getElementById('S3DA')){
								
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								
								//画进路
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 326,292); 
								context.lineTo( 653, 292); 
								//5
								x=315;
								y=187+d;
								k=55;
								context.moveTo( x+37+10, y-10); 
								context.lineTo( x+37+k, y-k);
								context.moveTo( x+37+k,233); 
								context.lineTo(  436, 233);
								context.stroke()
								//D1白灯
								x=373;y=290
								xiaxingdiaochexinhaoji(x,y);
								
								}
						}
				}
			}
			//D3
			else if(CancelPos[i]==document.getElementById('D3')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('D3')){
							if(JinLuPos[1][p] == document.getElementById('S4DA')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								//7号道岔
								x=315;
								y=378+d;
								k=50;	
								//进路绘制
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 326,473); 
								context.lineTo( 653, 473);

								
								context.moveTo(  x+37+10, y+10 ); 
								context.lineTo( x+40+k, y+3+k);
								context.moveTo( x+40+k, 533 ); 
								context.lineTo( 436, 533);
								context.stroke();
								//D3白灯
								x=373;y=470
								xiaxingdiaochexinhaoji(x,y);
								
							}
							else if(JinLuPos[1][p] == document.getElementById('S6DA')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';	
								//7号道岔
								x=315;
								y=378+d;
								k=55;
								context.moveTo( x+37, y ); 
								context.lineTo( x+37+k, y+k);	
								context.moveTo( x+37+k, 533 ); 
								context.lineTo( 613, 533);	
								
								context.moveTo( 352,473);
								context.lineTo( 326, 473);
								context.moveTo( 406,473); 
								context.lineTo(372, 473);
								context.stroke();
								//D3白灯
								x=373;y=470
								xiaxingdiaochexinhaoji(x,y);
								}
						}
				}
			}
			//D2
			else if(CancelPos[i]==document.getElementById('D2')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('D2')){
							if(JinLuPos[1][p] == document.getElementById('X5DA')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								//10
								x=652;
								y=128+d;
								k=55;
								context.moveTo( 436,233);
								context.lineTo( x, 233);
								context.moveTo( x, y+6 ); 
								context.lineTo( x+k, y+6+k);
								
								context.moveTo( 653,293); 
								context.lineTo( x+k-20, 293);
								context.moveTo( x+k,293); 
								context.lineTo( 811, 293);
								//6
								x=810;
								y=189+d;
								k=55;
								context.moveTo( x, y+6 ); 
								context.lineTo( x+k, y+6+k);
								context.moveTo( x+k,353); 
								context.lineTo( 905, 353);
								context.moveTo( 753,353); 
								context.lineTo( 845, 353);
								context.stroke();
								//D2白灯
								x=919;y=380
								shangxingdiaochexinhaoji(x,y);
									
							}
							else if(JinLuPos[1][p] == document.getElementById('X3DA')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								//进路绘制
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 406,293); 
								context.lineTo( 811, 293);
								//6
								x=810;
								y=189+d;
								k=55;
								context.moveTo( x, y+6 ); 
								context.lineTo( x+k, y+6+k);
								
								context.moveTo( x+k,353); 
								context.lineTo( 905, 353);
								context.moveTo( 753,353); 
								context.lineTo( 845, 353);
								//10
								x=652;
								y=128+d;
								k=55;
								context.moveTo( x, y+6 ); 
								context.lineTo(x+k-10, y+6+k-10);
								context.moveTo( 613,233);
								context.lineTo( x, 233);
								context.stroke();
								//D2白灯
								x=919;y=380
								shangxingdiaochexinhaoji(x,y);
								
								}
							else if(JinLuPos[1][p] == document.getElementById('XIDA')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								
								//进路绘制
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 326,353); 
								context.lineTo( 905,353);
								//6号道岔
								x=810;
								y=189+d;
								k=55;
								context.moveTo( x, y+6 ); 
								context.lineTo( x+k-10, y+6+k-10);
								context.moveTo( 753,293); 
								context.lineTo( x, 293);
								context.stroke();
								//D2白灯
								x=919;y=380
								shangxingdiaochexinhaoji(x,y);
										
								}
						}
				}
			}
			//D4
			else if(CancelPos[i]==document.getElementById('D4')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('D4')){
							if(JinLuPos[1][p] == document.getElementById('XIIDA')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								
								//进路绘制
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 905,413); 
								context.lineTo( 326, 413);
								//道岔反位部分
								x=810;
								y=371+d;
								k=50;
								context.moveTo(x+k-5, y-1-k+5); 
								context.lineTo( x, y-1);
								context.moveTo( x,473); 
								context.lineTo( 753, 473);
								context.stroke();
								//D4白灯
								x=919;y=440
								shangxingdiaochexinhaoji(x,y);
								
							}
							else if(JinLuPos[1][p] == document.getElementById('X4DA')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								
								//进路绘制
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';
								//8
								x=810;
								y=371+d;
								k=50;
								context.moveTo( 905,413); 
								context.lineTo( x+k, 413);
								context.moveTo( x, y-1 ); 
								context.lineTo( x+k, y-1-k);	 
								
								context.moveTo(x,473);
								context.lineTo( 406, 473);
								
								context.moveTo( 753, 413); 
								context.lineTo( x+k-20, 413);
								//12
								x=654;
								y=434+d;
								k=50;
								context.moveTo( x, y-3 ); 
								context.lineTo( x+k-5, y-3-k+5);
								context.moveTo( x, 533 ); 
								context.lineTo( 613,533);
								context.stroke();
								//D4白灯
								x=919;y=440
								shangxingdiaochexinhaoji(x,y);
									
								}
							else if(JinLuPos[1][p] == document.getElementById('X6DA')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								//8
								x=810;
								y=371+d;
								k=50;
								context.moveTo( 905,413); 
								context.lineTo( x+k, 413);
								context.moveTo( x, y-1 ); 
								context.lineTo( x+k, y-1-k);	 
								
								context.moveTo(x,473);
								context.lineTo( 704, 473);
								context.moveTo(684,473);
								context.lineTo( 653, 473);
								
								context.moveTo( 753, 413); 
								context.lineTo( x+k-20, 413);
								//12
								x=654;
								y=434+d;
								k=50;
								context.moveTo( x, y-3 ); 
								context.lineTo( x+k, y-3-k);
								context.moveTo( x, 533 ); 
								context.lineTo( 436,533);
								
								context.stroke();
								//D4白灯
								x=919;y=440
								shangxingdiaochexinhaoji(x,y);
								}
						}
				}
			}
			//S5b
			else if(CancelPos[i]==document.getElementById('S5DA')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('S5DA')){
							if(JinLuPos[1][p] == document.getElementById('D1')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';
								//5
								x=315;
								y=187+d;
								k=55;		
								context.moveTo( 255,292);
								context.lineTo( 355, 292);
								context.moveTo( x+37, y ); 
								context.lineTo( x+37+k, y-k);
								context.moveTo( 407,233); 
								context.lineTo( 436, 233); 
								
								context.moveTo( 372,292);
								context.lineTo( 406, 292);
								context.stroke(); 
								
								//S5信号机兼做调车信号
								x=450;y=260
								shangxingxinhaoji(x,y);
							}
						}
				}
			}
			
			//S3b
			else if(CancelPos[i]==document.getElementById('S3DA')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('S3DA')){
							if(JinLuPos[1][p] == document.getElementById('D1')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								
								//画进路
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 255,292); 
								context.lineTo( 406, 292); 
								//5
								x=315;
								y=187+d;
								k=55;
								context.moveTo( x+37+10, y-10); 
								context.lineTo( x+37+k, y-k);
								context.moveTo( x+37+k,233); 
								context.lineTo(  436, 233);
								context.stroke()
								//S3信号机兼做调车信号
								x=420;y=320
								shangxingxinhaoji(x,y);
								
							}
						}
				}
			}
			
			//S4b
			else if(CancelPos[i]==document.getElementById('S4DA')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('S4DA')){
							if(JinLuPos[1][p] == document.getElementById('D3')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
									
								//进路绘制
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';
								//7号道岔
								x=315;
								y=378+d;
								k=50;		
								context.moveTo( 406,473); 
								context.lineTo( 255, 473);
								context.moveTo(  x+37+10, y+10 ); 
								context.lineTo( x+40+k, y+3+k);
								context.moveTo( x+40+k, 533 ); 
								context.lineTo( 436, 533);
								context.stroke();
								//S4信号机兼做调车信号
								x=420;y=500
								shangxingxinhaoji(x,y);
								
							}
						}
				}
			}
			//S6b
			else if(CancelPos[i]==document.getElementById('S6DA')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('S6DA')){
							if(JinLuPos[1][p] == document.getElementById('D3')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';	
								//7号道岔
								x=315;
								y=378+d;
								k=55;
								context.moveTo( x+37, y ); 
								context.lineTo( x+37+k, y+k);	
								context.moveTo( x+37+k, 533 ); 
								context.lineTo( 436, 533);	
									 
								context.moveTo( 355,473);
								context.lineTo(255, 473);
								
								context.moveTo( 406,473); 
								context.lineTo(372, 473);
								context.stroke();
								//S6信号机兼做调车信号
								x=450;y=560
								shangxingxinhaoji(x,y);
								
							}
						}
				}
			}
			
			//X5b
			else if(CancelPos[i]==document.getElementById('X5DA')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('X5DA')){
							if(JinLuPos[1][p] == document.getElementById('D2')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								//10
								x=652;
								y=128+d;
								k=55;
								context.moveTo( 613,233);
								context.lineTo( x, 233);
								context.moveTo( x, y+6 ); 
								context.lineTo( x+k, y+6+k);
								
								context.moveTo( 653,293); 
								context.lineTo( x+k-20, 293);
								context.moveTo( x+k,293); 
								context.lineTo( 811, 293);
								//6
								x=810;
								y=189+d;
								k=55;
								context.moveTo( x, y+6 ); 
								context.lineTo( x+k, y+6+k);
								context.moveTo( x+k,353); 
								context.lineTo( 905, 353);
								context.moveTo( 753,353); 
								context.lineTo( 845, 353);
								context.stroke();
								//X3信号机兼做调车信号
								x=660;y=230
								xiaxingxinhaoji(x,y);
									
							}
						}
				}
			}
		
			//X3b
			else if(CancelPos[i]==document.getElementById('X3DA')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('X3DA')){
							if(JinLuPos[1][p] == document.getElementById('D2')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								//进路绘制
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 653,293); 
								context.lineTo( 811, 293);
								//6
								x=810;
								y=189+d;
								k=55;
								context.moveTo( x, y+6 ); 
								context.lineTo( x+k, y+6+k);
								
								context.moveTo( x+k,353); 
								context.lineTo( 905, 353);
								context.moveTo( 753,353); 
								context.lineTo( 845, 353);
								//10
								x=652;
								y=128+d;
								k=55;
								context.moveTo( x, y+6 ); 
								context.lineTo(x+k-10, y+6+k-10);
								context.moveTo( 613,233);
								context.lineTo( x, 233);
								context.stroke();
								//X3信号机兼做调车信号
								x=700;y=290
								xiaxingxinhaoji(x,y);
								
								
							}
						}
				}
			}
		    //XIb
			else if(CancelPos[i]==document.getElementById('XIDA')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('XIDA')){
							if(JinLuPos[1][p] == document.getElementById('D2')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								
								//进路绘制
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 753,353); 
								context.lineTo( 1050,353);
								//6号道岔
								x=810;
								y=189+d;
								k=55;
								context.moveTo( x, y+6 ); 
								context.lineTo( x+k-10, y+6+k-10);
								context.moveTo( 753,293); 
								context.lineTo( x, 293);
								context.stroke();
							
								//XI信号机兼做调车信号
								x=800;y=350
								xiaxingxinhaoji(x,y);
							}
						}
				}
			}
		    //XIIb
			else if(CancelPos[i]==document.getElementById('XIIDA')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('XIIDA')){
							if(JinLuPos[1][p] == document.getElementById('D4')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								
								//进路绘制
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								context.moveTo( 1050,413); 
								context.lineTo( 753, 413);
								x=810;
								y=371+d;
								k=50;
								//道岔反位部分
								context.moveTo(x+k-5, y-1-k+5); 
								context.lineTo( x, y-1);
								context.moveTo( x,473); 
								context.lineTo( 753, 473);
								context.stroke();
								//XII信号机兼做调车信号
								x=800;y=410
								xiaxingxinhaoji(x,y);
								
							}
						}
				}
			}
		
			 //X4b
			else if(CancelPos[i]==document.getElementById('X4DA')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('X4DA')){
							if(JinLuPos[1][p] == document.getElementById('D4')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								
								//进路绘制
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';
								x=810;
								y=371+d;
								k=50;
								context.moveTo( 1050,413); 
								context.lineTo( x+k, 413);
								context.moveTo( x, y-1 ); 
								context.lineTo( x+k, y-1-k);	 
								
								context.moveTo(x,473);
								context.lineTo( 653, 473);
								
								context.moveTo( 753, 413); 
								context.lineTo( x+k-20, 413);
								//12
								x=654;
								y=434+d;
								k=50;
								context.moveTo( x, y-3 ); 
								context.lineTo( x+k-5, y-3-k+5);
								context.moveTo( x, 533 ); 
								context.lineTo( 613,533);
								context.stroke();
								//X4信号机兼做调车信号
								x=700;y=470
								xiaxingxinhaoji(x,y);
								
							}
						}
				}
			}
		
		    //X6b
			else if(CancelPos[i]==document.getElementById('X6DA')){
				for(var p=0;p<JinLuPos[0].length;p++){
						if(JinLuPos[0][p]==document.getElementById('X6DA')){
							if(JinLuPos[1][p] == document.getElementById('D4')){
								var canvas = document.getElementById("canvas");
								var context = canvas.getContext("2d");
								context.beginPath();
								context.lineWidth = 5;
								context.strokeStyle = '#848284';		
								//8
								x=810;
								y=371+d;
								k=50;
								context.moveTo( 1050,413); 
								context.lineTo( x+k, 413);
								context.moveTo( x, y-1 ); 
								context.lineTo( x+k, y-1-k);	 
								
								context.moveTo(x,473);
								context.lineTo( 704, 473);
								context.moveTo(684,473);
								context.lineTo( 653, 473);
								
								context.moveTo( 753, 413); 
								context.lineTo( x+k-20, 413);
								//12
								x=654;
								y=434+d;
								k=50;
								context.moveTo( x, y-3 ); 
								context.lineTo( x+k, y-3-k);
								context.moveTo( x, 533 ); 
								context.lineTo( 613,533);
								
								context.stroke();
								//X6信号机兼做调车信号
								x=660;y=530
								xiaxingxinhaoji(x,y);
								
							}
						}
				}
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
		canceljinlutimer=setTimeout("CancelJinLu();",1000);      //每隔1秒刷新一次
	}
	//排列进路，重画轨道
	function JinLu(){
		var x,y,k;
		
		if(JinLuPos[0].length>0){
			for(var i=0;i<JinLuPos[0].length;i++){
				
				if(JinLuPos[0][i]==document.getElementById('XLA')){
					if(JinLuPos[1][i]==document.getElementById('SILA')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						x=195;
						y=245+d;
						k=55;
						context.moveTo( x+7, y+2); 
						context.lineTo( x+10+k-50, y-1-k+50);
						context.stroke();
					    //画进路，1
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 163,352); 
						context.lineTo( 753, 352);
					    //道岔上部分
						context.moveTo( x+10+k-50, y-1-k+50); 
						context.lineTo( x+10+k-2, y-1-k+2);
						context.moveTo( x+10+k-2, 292); 
						context.lineTo( 326, 292);
						context.stroke();
						
						//X信号机单黄灯
						x=210;y=250+d
						xiaxingxinhaojihuangdeng(x,y)
						
						
						}
					else if(JinLuPos[1][i]==document.getElementById('S3LA')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						x=315;
						y=187+d;
						k=55;
						context.moveTo( x+37, y); 
						context.lineTo( x+40+6, y-3-6);
						context.stroke();
						//画进路
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 163,352); 
						context.lineTo( 205, 352); 
						//1
						x=195;
						y=245+d;
						k=55;
						context.moveTo( x+7, y+2 ); 
						context.lineTo( x+7+k, y+2-k);
						
						context.moveTo( x+7+k,292);
						context.lineTo( 653, 292);
						
						context.moveTo( x+7+20,352);
						context.lineTo( 326, 352);
						//5
						x=315;
						y=187+d;
						k=55;
						context.moveTo( x+40+6, y-3-6 ); 
						context.lineTo( x+40+k-2, y-3-k+2);
						context.moveTo( x+40+k,233); 
						context.lineTo( 436, 233);
						context.stroke()
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 202, 352); 
						context.lineTo( 222, 352);
						context.stroke();
						//X信号机双黄灯
						x=210;y=250+d
						xiaxingxinhaojiUUdeng(x,y)
					
						
						}
					else if(JinLuPos[1][i]==document.getElementById('S5LA')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';	
						context.moveTo( 163,352); 
						context.lineTo( 205, 352); 
						//1
						x=195;
						y=245+d;
						k=55;
						context.moveTo( x+7, y+2 ); 
						context.lineTo( x+7+k, y+2-k);
						context.moveTo( x+7+k,292);
						context.lineTo( 352, 292);
						context.moveTo( 372,292);
						context.lineTo( 406, 292);
						
						context.moveTo( x+7+20,352);
						context.lineTo( 326, 352);
						//5
						x=315;
						y=187+d;
						k=55;	
						context.moveTo( x+37, y ); 
						context.lineTo( x+37+k, y-k);
						context.moveTo( x+37+k,233); 
						context.lineTo( 613, 233); 
						
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 202, 352); 
						context.lineTo( 222, 352);
						context.stroke();
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 352, 292); 
						context.lineTo( 372, 292);
						context.stroke();
						
						//X信号机双黄灯
						x=210;y=250+d
						xiaxingxinhaojiUUdeng(x,y)
						
						}
					}
				else if(JinLuPos[0][i]==document.getElementById('SLA')){
					if(JinLuPos[1][i]==document.getElementById('XIILA')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						x=810;
						y=371+d;
						k=50;
						context.moveTo(x+k, y-1-k ); 
						context.lineTo( x+k-5, y-1-k+5);
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 1050,413); 
						context.lineTo( 326, 413);
						//道岔反位部分
						context.moveTo(x+k-5, y-1-k+5); 
						context.lineTo( x, y-1);
						context.moveTo( x,473); 
						context.lineTo( 753, 473);
						context.stroke();
						//S信号机黄灯
						x=1063;y=340+d
            			shangxingxinhaojihuangdeng(x,y)
						
						}
					else if(JinLuPos[1][i]==document.getElementById('X4LA')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						//12
						x=654;
						y=434+d;
						k=50;
						context.moveTo(x+k, y-3-k );
						context.lineTo( x+k-5, y-3-k+5);
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';
						//8
						x=810;
						y=371+d;
						k=50;
						context.moveTo( 1050,413); 
						context.lineTo( x+k, 413);
						context.moveTo( x, y-1 ); 
						context.lineTo( x+k, y-1-k);	 
						
						context.moveTo(x,473);
						context.lineTo( 406, 473);
						
						context.moveTo( 753, 413); 
						context.lineTo( x+k-20, 413);
						
						//12
						x=654;
						y=434+d;
						k=50;
						context.moveTo( x, y-3 ); 
						context.lineTo( x+k-5, y-3-k+5);
						context.moveTo( x, 533 ); 
						context.lineTo( 613,533);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 860, 413); 
						context.lineTo( 840, 413);
						context.stroke();
						//S信号机双黄灯
						x=1063;y=340+d
						shangxingxinhaojiUUdeng(x,y)
						
						}
					else if(JinLuPos[1][i]==document.getElementById('X6LA')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';
						//8
						x=810;
						y=371+d;
						k=50;
						context.moveTo( 1050,413); 
						context.lineTo( x+k, 413);
						context.moveTo( x, y-1 ); 
						context.lineTo( x+k, y-1-k);	 
						
						context.moveTo(x,473);
						context.lineTo( 704, 473);
						context.moveTo(684,473);
						context.lineTo( 653, 473);
						
						context.moveTo( 753, 413); 
						context.lineTo( x+k-20, 413);
						//12
						x=654;
						y=434+d;
						k=50;
						context.moveTo( x, y-3 ); 
						context.lineTo( x+k, y-3-k);
						context.moveTo( x, 533 ); 
						context.lineTo( 436,533);
						
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 860, 413); 
						context.lineTo( 840, 413);
						context.stroke();
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 684, 473); 
						context.lineTo( 704, 473);
						context.stroke();
						//S信号机双黄灯
						x=1063;y=340+d
						shangxingxinhaojiUUdeng(x,y)
						
						}
					}
				else if(JinLuPos[0][i]==document.getElementById('SIILA')){
					if(JinLuPos[1][i]==document.getElementById('XFLA')){
						var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						x=195;
						y=320+d;
						k=50;
						context.moveTo(x+8, y-1 ); 
						context.lineTo( x+8+5, y-1+5);
						
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 326,413); 
						context.lineTo( 163, 413);
						
						context.moveTo( x+8+5, y-1+5); 
						context.lineTo( x+10+k, y+1+k);
						context.moveTo( x+10+k, 473 ); 
						context.lineTo( 326, 473);
						context.stroke();
						
						//S信号机绿灯
						x=340;y=340+d
						shangxingxinhaojilvdeng(x,y)
						
						}
					}
				else if(JinLuPos[0][i]==document.getElementById('S4LA')){
					if(JinLuPos[1][i]==document.getElementById('XFLA')){
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						//7
						x=315;
						y=378+d;
						k=50;
						context.moveTo( x+37, y ); 
						context.lineTo( x+37+10, y+10);
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';
						//3号道岔
						x=195;
						y=320+d;
						k=52;		
						context.moveTo( 406,473); 
						context.lineTo( x+8+k, 473);
						context.moveTo( x+8, y-1 ); 
						context.lineTo( x+8+k, y-1+k);
						context.moveTo(  x+8,413); 
						context.lineTo( 163, 413);
						
						context.moveTo(  223, 413); 
						context.lineTo( 326, 413);
						//7号道岔
						x=315;
						y=378+d;
						k=50;
						context.moveTo( x+37+10, y+10); 
						context.lineTo( x+40+k, y+3+k);
						context.moveTo( x+40+k, 533 ); 
						context.lineTo( 436, 533);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 203, 413); 
						context.lineTo( 223, 413);
						context.stroke();
						//S4信号机绿灯
						x=420;y=400+d
						shangxingxinhaojilvdeng(x,y)
						
					}
				}
				else if(JinLuPos[0][i]==document.getElementById('S6LA')){
					if(JinLuPos[1][i]==document.getElementById('XFLA')){
					   var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';	
						//3号道岔
						x=195;
						y=320+d;
						k=52;		
						context.moveTo(  x+8,413); 
						context.lineTo( 163, 413);
						context.moveTo(  223, 413); 
						context.lineTo( 326, 413);
						context.moveTo( x+8, y-1 ); 
						context.lineTo( x+8+k, y-1+k);
						context.moveTo( x+8+k,473); 
						context.lineTo( 352, 473);
						context.moveTo( 406,473); 
						context.lineTo(372, 473);
						
				        //7号道岔
						x=315;
						y=378+d;
						k=55;
						context.moveTo( x+37, y ); 
						context.lineTo( x+37+k, y+k);	
						context.moveTo( x+37+k, 533 ); 
						context.lineTo( 436, 533);
					
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 203, 413); 
						context.lineTo( 223, 413);
						context.stroke();
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 352, 473); 
						context.lineTo( 372, 473);
						context.stroke();
						//S6信号机绿灯
						x=450;y=460+d
						shangxingxinhaojilvdeng(x,y)
						
					}
				}
				else if(JinLuPos[0][i]==document.getElementById('XILA')){
					if(JinLuPos[1][i]==document.getElementById('SFLA')){
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						//6
						x=810;
						y=189+d;
						k=55;
						context.moveTo( x+k-10, y+6+k-10 ); 
						context.lineTo( x+k, y+6+k);
						
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 753,353); 
						context.lineTo( 1050,353);
						//6号道岔
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k-10, y+6+k-10);
						context.moveTo( 753,293); 
						context.lineTo( x, 293);
						context.stroke();
						//XI信号机绿灯
						x=800;y=250+d
						xiaxingxinhaojilvdeng(x,y)
						
					    }  
					}
				else if(JinLuPos[0][i]==document.getElementById('X3LA')){
					if(JinLuPos[1][i]==document.getElementById('SFLA')){
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						//10号道岔
						x=652;
						y=128+d;
						k=55;
						context.moveTo( x+k-10, y+6+k-10 ); 
						context.lineTo( x+k, y+6+k);
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 653,293); 
						context.lineTo( 811, 293);
						//6
						x=810;
						y=189+d;
						k=55;
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k, y+6+k);
						
						context.moveTo( x+k,353); 
						context.lineTo( 1050, 353);
						context.moveTo( 753,353); 
						context.lineTo( 845, 353);
						//10
						x=652;
						y=128+d;
						k=55;
						context.moveTo( x, y+6 ); 
						context.lineTo(x+k-10, y+6+k-10);
						context.moveTo( 613,233);
						context.lineTo( x, 233);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 845, 353); 
						context.lineTo( 865, 353);
						context.stroke();
						
						//X3信号机绿灯
						x=700;y=190+d
						xiaxingxinhaojilvdeng(x,y)
						
						}
					}
				else if(JinLuPos[0][i]==document.getElementById('X5LA')){
					if(JinLuPos[1][i]==document.getElementById('SFLA')){
					   var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';	
						//10
						x=652;
						y=128+d;
						k=55;
						context.moveTo( 613,233);
						context.lineTo( x, 233);
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k, y+6+k);
						
						context.moveTo( 653,293); 
						context.lineTo( x+k-20, 293);
						context.moveTo( x+k,293); 
						context.lineTo( 811, 293);
						//6
						x=810;
						y=189+d;
						k=55;
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k, y+6+k);
						context.moveTo( x+k,353); 
						context.lineTo( 1050, 353);
						context.moveTo( 753,353); 
						context.lineTo( 845, 353);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 845, 353); 
						context.lineTo( 865, 353);
						context.stroke();
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 707, 293); 
						context.lineTo( 687, 293);
						context.stroke();
						//X5信号机绿灯
						x=660;y=130+d
						xiaxingxinhaojilvdeng(x,y)
					
						}
					}
				//排列调车进路
				else if(JinLuPos[0][i]==document.getElementById('D1')&&JinLuPos[1][i]==document.getElementById('S5DA')){
					
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';
						//5
						x=315;
						y=187+d;
						k=55;		
						context.moveTo( 326,292);
						context.lineTo(  352, 292);
							
						context.moveTo( x+37, y ); 
						context.lineTo( x+37+k, y-k);
						context.moveTo( x+37+k,233); 
						context.lineTo( 613, 233); 
						 
						context.moveTo( 372,292);
						context.lineTo( 406, 292);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo(  352, 292); 
						context.lineTo( 372, 292);
						
						context.stroke();
						
						//D1白灯
						x=373;y=190+d
						xiaxingdiaochexinhaojiBai(x,y);
						
				}
				else if(JinLuPos[0][i]==document.getElementById('S5DA')&&JinLuPos[1][i]==document.getElementById('D1')){
					
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';
						//5
						x=315;
						y=187+d;
						k=55;		
						context.moveTo( 255,292);
						context.lineTo( 355, 292);
						context.moveTo( x+37, y ); 
						context.lineTo( x+37+k, y-k);
						context.moveTo( 407,233); 
						context.lineTo( 436, 233); 
						
						context.moveTo( 372,292);
						context.lineTo( 406, 292);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 355, 292); 
						context.lineTo( 375, 292);
						context.stroke();
						
						//S5信号机兼做调车信号
						x=450;y=160+d
						shangxingxinhaojiBai(x,y);	
	
				}
				else if(JinLuPos[0][i]==document.getElementById('D1')&&JinLuPos[1][i]==document.getElementById('S3DA')){
					
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
			
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						//5
						x=315;
						y=187+d;
						k=55;
						context.moveTo( x+37, y ); 
						context.lineTo( x+37+10, y-10);
						
						context.stroke();
						//画进路
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 326,292); 
						context.lineTo( 653, 292); 
						
						context.moveTo( x+37+10, y-10); 
						context.lineTo( x+37+k, y-k);
						context.moveTo( x+37+k,233); 
						context.lineTo(  436, 233);
						context.stroke()
						
						//D1白灯
						x=373;y=190+d
						xiaxingdiaochexinhaojiBai(x,y);
						
				}
				else if(
				        JinLuPos[0][i]==document.getElementById('S3DA')&&JinLuPos[1][i]==document.getElementById('D1')){
					
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
			
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						//5
						x=315;
						y=187+d;
						k=55;
						context.moveTo( x+37, y ); 
						context.lineTo( x+37+10, y-10);
						context.stroke();
						//画进路
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 255,292); 
						context.lineTo( 406, 292); 
						
						context.moveTo( x+37+10, y-10); 
						context.lineTo( x+37+k, y-k);
						context.moveTo( x+37+k,233); 
						context.lineTo(  436, 233);
						context.stroke()
						
						//S3信号机兼做调车信号
						
						x=420;y=320
						shangxingxinhaojiBai(x,y);
								
				}
				//D3
				 else if(JinLuPos[0][i]==document.getElementById('D3')&&JinLuPos[1][i]==document.getElementById('S4DA')){
					
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//7号道岔
						x=315;
						y=378+d;
						k=50;		
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						
						context.moveTo( x+37, y ); 
						context.lineTo( x+37+10, y+10);
						 
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 326,473); 
						context.lineTo( 653, 473);
						
						context.moveTo(  x+37+10, y+10 ); 
						context.lineTo( x+40+k, y+3+k);
						context.moveTo( x+40+k, 533 ); 
						context.lineTo( 436, 533);
						
						context.stroke();
						
						//D3白灯
						//x=373;y=370+d
						x=373;y=470
						xiaxingdiaochexinhaojiBai(x,y);
						
				}
				 else if(
				        JinLuPos[0][i]==document.getElementById('S4DA')&&JinLuPos[1][i]==document.getElementById('D3')){
					
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//7号道岔
						x=315;
						y=378+d;
						k=50;			
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( x+37, y ); 
						context.lineTo( x+37+10, y+10);
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 406,473); 
						context.lineTo( 255, 473);
						context.moveTo(  x+37+10, y+10 ); 
						context.lineTo( x+40+k, y+3+k);
						context.moveTo( x+40+k, 533 ); 
						context.lineTo( 436, 533);
						context.stroke();
						
						//S4信号机兼做调车信号
						x=420;y=500
						//x=420;y=400+d
						shangxingxinhaojiBai(x,y);
					
				}
				else if(JinLuPos[0][i]==document.getElementById('D3')&&JinLuPos[1][i]==document.getElementById('S6DA')
				        ){
					
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';
						//7号道岔
						x=315;
						y=378+d;
						k=55;
						context.moveTo( x+37, y ); 
						context.lineTo( x+37+k, y+k);	
						context.moveTo( x+37+k, 533 ); 
						context.lineTo( 613, 533);	
						
						context.moveTo( 352,473);
						context.lineTo( 326, 473);
						context.moveTo( 406,473); 
						context.lineTo(372, 473);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 352, 473); 
						context.lineTo( 372, 473);
						context.stroke();
						
						//D3白灯
						x=373;y=470
						xiaxingdiaochexinhaojiBai(x,y);
							
				}
				else if(
				        JinLuPos[0][i]==document.getElementById('S6DA')&&JinLuPos[1][i]==document.getElementById('D3')){
					
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';
						//7号道岔
						x=315;
						y=378+d;
						k=55;
						context.moveTo( x+37, y ); 
						context.lineTo( x+37+k, y+k);	
						context.moveTo( x+37+k, 533 ); 
						context.lineTo( 436, 533);	
							
						//context.moveTo( 436,533);
//						context.lineTo( 412, 533);
//						context.moveTo( 413,533); 
//						context.lineTo( 355, 471); 
						context.moveTo( 355,473);
						context.lineTo(255, 473);
						
						context.moveTo( 406,473); 
						context.lineTo(372, 473);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 352, 473); 
						context.lineTo( 372, 473);
						context.stroke();
						
						
						//S6信号机兼做调车信号
						x=450;y=560
						//x=450;y=460+d
						shangxingxinhaojiBai(x,y);
							
				}
				//D2
				else if((JinLuPos[0][i]==document.getElementById('D2')&&JinLuPos[1][i]==document.getElementById('XIDA'))
				)
						{
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						//6
						x=810;
						y=189+d;
						k=55;
						context.moveTo( x+k-10, y+6+k-10 ); 
						context.lineTo( x+k, y+6+k);
						
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 326,353); 
						context.lineTo( 905,353);
						//6号道岔
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k-10, y+6+k-10);
						context.moveTo( 753,293); 
						context.lineTo( x, 293);
						context.stroke();
						
						
						//D2白灯
						x=919;y=380
						shangxingdiaochexinhaojiBai(x,y);
						
				}
				else if( 
				(JinLuPos[0][i]==document.getElementById('XIDA')&&JinLuPos[1][i]==document.getElementById('D2')))
						{
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						//6
						x=810;
						y=189+d;
						k=55;
						context.moveTo( x+k-10, y+6+k-10 ); 
						context.lineTo( x+k, y+6+k);
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 753,353); 
						context.lineTo( 1050,353);
						//6号道岔
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k-10, y+6+k-10);
						context.moveTo( 753,293); 
						context.lineTo( x, 293);
						context.stroke();
						
						
						//XI白灯
						x=800;y=350
						xiaxingxinhaojiBai(x,y);
						
				}
					else if(JinLuPos[0][i]==document.getElementById('D2')&&JinLuPos[1][i]==document.getElementById('X3DA')
				       ){
					
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						//10号道岔
						x=652;
						y=128+d;
						k=55;
						context.moveTo( x+k-10, y+6+k-10 ); 
						context.lineTo( x+k, y+6+k);
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 406,293); 
						context.lineTo( 811, 293);
						//6
						x=810;
						y=189+d;
						k=55;
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k, y+6+k);
						
						context.moveTo( x+k,353); 
						context.lineTo( 905, 353);
						context.moveTo( 753,353); 
						context.lineTo( 845, 353);
						//10
						x=652;
						y=128+d;
						k=55;
						context.moveTo( x, y+6 ); 
						context.lineTo(x+k-10, y+6+k-10);
						context.moveTo( 613,233);
						context.lineTo( x, 233);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 845, 353); 
						context.lineTo( 865, 353);
						context.stroke();

						//D2白灯
						x=919;y=380
						shangxingdiaochexinhaojiBai(x,y);
					
				}
				else if(
				        JinLuPos[0][i]==document.getElementById('X3DA')&&JinLuPos[1][i]==document.getElementById('D2')){
					
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						//10号道岔
						x=652;
						y=128+d;
						k=55;
						context.moveTo( x+k-10, y+6+k-10 ); 
						context.lineTo( x+k, y+6+k);
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 653,293); 
						context.lineTo( 811, 293);
						//6
						x=810;
						y=189+d;
						k=55;
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k, y+6+k);
						
						context.moveTo( x+k,353); 
						context.lineTo( 905, 353);
						context.moveTo( 753,353); 
						context.lineTo( 845, 353);
						//10
						x=652;
						y=128+d;
						k=55;
						context.moveTo( x, y+6 ); 
						context.lineTo(x+k-10, y+6+k-10);
						context.moveTo( 613,233);
						context.lineTo( x, 233);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 845, 353); 
						context.lineTo( 865, 353);
						context.stroke();
						
						//X3信号机兼做调车信号
						x=700;y=290
						xiaxingxinhaojiBai(x,y);
						
				}
				
					else if(JinLuPos[0][i]==document.getElementById('D2')&&JinLuPos[1][i]==document.getElementById('X5DA')
				        ){
					
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						//10
						x=652;
						y=128+d;
						k=55;
						context.moveTo( 436,233);
						context.lineTo( x, 233);
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k, y+6+k);
						
						context.moveTo( 653,293); 
						context.lineTo( x+k-20, 293);
						context.moveTo( x+k,293); 
						context.lineTo( 811, 293);
						//6
						x=810;
						y=189+d;
						k=55;
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k, y+6+k);
						context.moveTo( x+k,353); 
						context.lineTo( 905, 353);
						context.moveTo( 753,353); 
						context.lineTo( 845, 353);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 845, 353); 
						context.lineTo( 865, 353);
						context.stroke();
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 707, 293); 
						context.lineTo( 687, 293);
						context.stroke();
						
						//D2白灯
						x=919;y=380
						shangxingdiaochexinhaojiBai(x,y);
					
				}	
				else if(
				        JinLuPos[0][i]==document.getElementById('X5DA')&&JinLuPos[1][i]==document.getElementById('D2')){
					
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						//10
						x=652;
						y=128+d;
						k=55;
						context.moveTo( 613,233);
						context.lineTo( x, 233);
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k, y+6+k);
						
						context.moveTo( 653,293); 
						context.lineTo( x+k-20, 293);
						context.moveTo( x+k,293); 
						context.lineTo( 811, 293);
						//6
						x=810;
						y=189+d;
						k=55;
						context.moveTo( x, y+6 ); 
						context.lineTo( x+k, y+6+k);
						context.moveTo( x+k,353); 
						context.lineTo( 905, 353);
						context.moveTo( 753,353); 
						context.lineTo( 845, 353);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 845, 353); 
						context.lineTo( 865, 353);
						context.stroke();
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 707, 293); 
						context.lineTo( 687, 293);
						context.stroke();
						
						
						//X5信号机兼做调车信号
						x=660;y=230
						xiaxingxinhaojiBai(x,y);
					
				}	
				//D4
				else if((JinLuPos[0][i]==document.getElementById('D4')&&JinLuPos[1][i]==document.getElementById('XIIDA')) 
				)
						{
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						x=810;
						y=371+d;
						k=50;
						context.moveTo(x+k, y-1-k ); 
						context.lineTo( x+k-5, y-1-k+5);
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 905,413); 
						context.lineTo( 326, 413);
						//道岔反位部分
						context.moveTo(x+k-5, y-1-k+5); 
						context.lineTo( x, y-1);
						context.moveTo( x,473); 
						context.lineTo( 753, 473);
						context.stroke();
						
						
						//D4白灯
						x=919;y=440
						shangxingdiaochexinhaojiBai(x,y);
						
				}
				else if( 
				(JinLuPos[0][i]==document.getElementById('XIIDA')&&JinLuPos[1][i]==document.getElementById('D4')))
						{
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						x=810;
						y=371+d;
						k=50;
						context.moveTo(x+k, y-1-k ); 
						context.lineTo( x+k-5, y-1-k+5);
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						context.moveTo( 1050,413); 
						context.lineTo( 753, 413);
						//道岔反位部分
						context.moveTo(x+k-5, y-1-k+5); 
						context.lineTo( x, y-1);
						context.moveTo( x,473); 
						context.lineTo( 753, 473);
						context.stroke();
						
						
						//XII白灯
						x=800;y=410
						xiaxingxinhaojiBai(x,y);
						
				}
					else if(JinLuPos[0][i]==document.getElementById('D4')&&JinLuPos[1][i]==document.getElementById('X4DA')
				       ){
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						//12
						x=654;
						y=434+d;
						k=50;
						context.moveTo(x+k, y-3-k );
						context.lineTo( x+k-5, y-3-k+5);
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';
						//8
						x=810;
						y=371+d;
						k=50;
						context.moveTo( 905,413); 
						context.lineTo( x+k, 413);
						context.moveTo( x, y-1 ); 
						context.lineTo( x+k, y-1-k);	 
						
						context.moveTo(x,473);
						context.lineTo( 406, 473);
						
						context.moveTo( 753, 413); 
						context.lineTo( x+k-20, 413);
						//12
						x=654;
						y=434+d;
						k=50;
						context.moveTo( x, y-3 ); 
						context.lineTo( x+k-5, y-3-k+5);
						context.moveTo( x, 533 ); 
						context.lineTo( 613,533);
						context.stroke();
						
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 860, 413); 
						context.lineTo( 840, 413);
						context.stroke();
						
						
						//D4白灯
						x=919;y=440
						shangxingdiaochexinhaojiBai(x,y);
						
				}
				else if(
				        JinLuPos[0][i]==document.getElementById('X4DA')&&JinLuPos[1][i]==document.getElementById('D4')){
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						//12
						x=654;
						y=434+d;
						k=50;
						context.moveTo(x+k, y-3-k );
						context.lineTo( x+k-5, y-3-k+5);
						context.stroke();
						//进路绘制
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';
						//8
						x=810;
						y=371+d;
						k=50;
						context.moveTo( 1050,413); 
						context.lineTo( x+k, 413);
						context.moveTo( x, y-1 ); 
						context.lineTo( x+k, y-1-k);	 
						
						context.moveTo(x,473);
						context.lineTo( 653, 473);
						
						context.moveTo( 753, 413); 
						context.lineTo( x+k-20, 413);
						//12
						x=654;
						y=434+d;
						k=50;
						context.moveTo( x, y-3 ); 
						context.lineTo( x+k-5, y-3-k+5);
						context.moveTo( x, 533 ); 
						context.lineTo( 613,533);
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 860, 413); 
						context.lineTo( 840, 413);
						context.stroke();
						
						
						//X4信号机兼做调车信号
						x=700;y=470
						xiaxingxinhaojiBai(x,y);
					
				}
					else if(JinLuPos[0][i]==document.getElementById('D4')&&JinLuPos[1][i]==document.getElementById('X6DA')
				        ){
					
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						//8
						x=810;
						y=371+d;
						k=50;
						context.moveTo( 905,413); 
						context.lineTo( x+k, 413);
						context.moveTo( x, y-1 ); 
						context.lineTo( x+k, y-1-k);	 
						
						context.moveTo(x,473);
						context.lineTo( 704, 473);
						context.moveTo(684,473);
						context.lineTo( 653, 473);
						
						context.moveTo( 753, 413); 
						context.lineTo( x+k-20, 413);
						//12
						x=654;
						y=434+d;
						k=50;
						context.moveTo( x, y-3 ); 
						context.lineTo( x+k, y-3-k);
						context.moveTo( x, 533 ); 
						context.lineTo( 436,533);
						
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 860, 413); 
						context.lineTo( 840, 413);
						context.stroke();
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 684, 473); 
						context.lineTo( 704, 473);
						context.stroke();
						
						//D4白灯
						x=919;y=440
						shangxingdiaochexinhaojiBai(x,y);
						
						
				}	
				else if(
				        JinLuPos[0][i]==document.getElementById('X6DA')&&JinLuPos[1][i]==document.getElementById('D4')){
					
					    var canvas = document.getElementById("canvas");
						var context = canvas.getContext("2d");
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'white';		
						//8
						x=810;
						y=371+d;
						k=50;
						context.moveTo( 1050,413); 
						context.lineTo( x+k, 413);
						context.moveTo( x, y-1 ); 
						context.lineTo( x+k, y-1-k);	 
						
						context.moveTo(x,473);
						context.lineTo( 704, 473);
						context.moveTo(684,473);
						context.lineTo( 653, 473);
						
						context.moveTo( 753, 413); 
						context.lineTo( x+k-20, 413);
						//12
						x=654;
						y=434+d;
						k=50;
						context.moveTo( x, y-3 ); 
						context.lineTo( x+k, y-3-k);
						context.moveTo( x, 533 ); 
						context.lineTo( 613,533);
						
						context.stroke();
						
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 860, 413); 
						context.lineTo( 840, 413);
						context.stroke();
						//道岔处应该有缝隙
						context.beginPath();
						context.lineWidth = 5;
						context.strokeStyle = 'black';
						context.moveTo( 684, 473); 
						context.lineTo( 704, 473);
						context.stroke();
						
						//X6信号机兼做调车信号
						x=660;y=530
						xiaxingxinhaojiBai(x,y);
						
				}	
			}
			
		}
	
	      //重画闭塞分区标志
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
			
		    jinlutimer=setTimeout("JinLu();",50);      //每隔1秒刷新一次
	}