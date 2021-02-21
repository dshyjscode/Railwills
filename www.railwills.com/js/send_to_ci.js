//var data_CI=new Array(10000);//大排队数组，用于将收到的二进制大排队信息转换为数字值
 var wsUri ="ws://47.92.110.96:2001/"; //websocket服务器端地址
 var websocket;
	//var wsUri="localhost:60002"
	/**通信协议参数**/
    var output;  
	var send_head='\x7d';	//帧头
	var send_shoubulen='\x04';//首部长
	var send_version='\x11';//版本号
	var send_fasongxuhao='\x01';//发送序号
	var send_jieshouxuhao='\x01';//确认序号
	var send_streamtype='\x95';//帧类型
	var send_datalen=new Array(2);//双字节
	var send_command;//命令类型
	var send_button1_ex;//发送按钮高四位
	var send_button1;//发送按钮
	var send_button2_ex;//发送按钮高四位
	var send_button2;//发送按钮
	var send_button;
	var send_CRCh='\x01';//校验位高字节
	var send_CRCl='\x01';//校验位低字节
	var send_end='\x7e';//帧尾
	var send_stream;//发送的通信数据
	var time1,time2;
	var axle_speed;//返回的临时速度
	var axle_session_name;//返回的临时限速区段号
	var data_CI=new Array(11000);//大排队数组，用于将收到的二进制大排队信息转换为数字值
//	var axle=new Array(324);
//	for(var i=0;i<324;i++)
//	{
//		axle[i]=new Array(2);//存放临时限速区段号和速度值的数组
//		axle[i][0]=0;//区段号赋初值为0
//	}
	var AxleNum=0;
	var AxleSpeed=[];
	var AxleSessionName=[];
	var flag=0;
	var CBTC=0;//设置后备模式，1为设置，0为取消
	/*添加车次用，发送的车次信息*/
	var		BCCtype_send_ex='\x00';		//命令类型  添加车次返回信息，1：成功  2：区段有车 3：车次号冲突  4：车次已经存在，车次信息编号冲突,发送任意值即可
	var		BCCtype_send='\x00';
	var		DataType_ex;				//1:添加 2;修改 3:删除
	var		DataType;
	var 	PVID_Send;				//车组号
	var 	TID_Send;				//服务号
	var 	SID_Send;				//序列号
	var 	DID_Send;				//目的地号
	PVID_Send=new Array(10);				//车组号
	TID_Send=new Array(10);				//服务号
	SID_Send=new Array(10);				//序列号
	DID_Send=new Array(10);				//目的地号
	var		Type_Send;				// 类型   1：计划车   2：目的地车   3：人工车   4：特殊人工车
	var		ShowType;			// 识别号显示类型 1: 服务号+目的地号 2:车组号+目的地号
	var		InRoadNo_Send;			// 所在轨道
	var     hisInRoadNo_Send;		// 历史所在轨道
	var		InRoadType_Send;		// 所在轨道编号类型 1：逻辑区段 2：计轴区段  3：道岔
	var     hisInRoadType_Send;  // 历史所在轨道编号类型 1：逻辑区段 2：计轴区段  3：道岔
	var    AddPosition_Send;		// 车次添加位置
	var    hisAddPosition_Send;		// 历史车次添加位置
	var    AddPositionType_Send;	// 车次添加轨道编号类型 1：逻辑区段 2：计轴区段  3：道岔
	var    hisAddPositionType_Send;	// 历史车次添加轨道编号类型 1：逻辑区段 2：计轴区段  3：道岔
	var		ForwardRoad_Send;		// 后一个轨道（要去哪个区段？）
	var		Mode_Send;				// 跟踪运行模式   1：固定闭塞模式(RM)   2：点式信息模式(ATP)   3：CBTC模式(ATO)  
	var		Direct;				// 列车运行方向   0：方向未知   1：向左（上行）   2：向右（下行） 
	var		Wayno;				// 进路编号
	var		Door;				// 车门状态  0：关闭   1：打开
	var		Jump;				// 跳停  0：停   1：跳停
	var		Ketain;				// 扣车  0：不扣   1：扣车
	var		Alarm;				// 故障警报  0：无   1：有警报
	var		TrainStop;			// 列车停车, 0:行车状态	1: 停车状态	
	var    AddPosition_Send_ex;//这几个变量都是双字类型的低4位
	var   hisAddPosition_Send_ex;
	var   InRoadNo_Send_ex;
	var   hisInRoadNo_Send_ex;
	var   ForwardRoad_Send_ex;
	var   No_ex;
	var   send_array=0;
	///以下为接收的车次信息变量
	var BCCtype_returned;
	var BCCtype_returned_ex;
	var car_return;
	var CarShowType=[];
	var CarNo=[];
	var CarPVID=[];
	var CarTID=[];
	var CarSID=[];
	var CarDID=[];
	var CarPVIDTemp=new Array(10);
	var CarTIDTemp=new Array(10);
	var CarSIDTemp=new Array(10);
	var CarDIDTemp=new Array(10);
	var CarPVIDString;
	var CarTIDString;
	var CarSIDString;
	var CarDIDString;
	var CarInRoadNo=[];
	var CarhisInRoadNo=[];
	var CarInRoadType=[];
	var CarhisInRoadType=[];
	var CarAddPosition=[];
	var CarhisAddPosition=[];
	var CarAddPositionType=[];
	var CarhisAddPositionType=[];
	var CarForwardRoad=[];
	var CarDirect=[];
	var CarType=[];
	var CarMode=[];
	var CarDoor=[];//车门状态 0关闭 1打开
	var CarJump=[];//跳停 0停 1不停
	var CarKetain=[]; //扣车 0不扣 1扣
	var CarAlarm=[];//故障警报 0无 1有
	var CarTrainStop=[];//列车停车 0行车 1停车
	var CarNum;
	var CarDelete=0;//删除车次标志位
//	var Carflag;
	var StationInCar=[];//车次所在的车站编号
	var CarSignal=[];//车辆所在轨道对应的信号机
	var DelSessionName=null;//删除的轨道编号
	var CarStoped;//车辆停止所在站台号
	var PlatformStoped=0;//车辆停站站台
	var GetDataCI=1;//是否接收到大排队信息
	var Reset=false;
    function init()//websocket连接初始化
	{ 

    testWebSocket(); 
    }  

    function testWebSocket() { 
        websocket = new WebSocket(wsUri); //建立一个新的连接
	//	websocket.type=egret.Websocket.TYPE_BINATY;
		websocket.binaryType='arraybuffer';//将二进制数转化为数组
        websocket.onopen = function(evt) { 
			
            onOpen(evt) 
        }; 
       websocket.onclose = function(evt) { 
			
            onClose(evt) 
        }; 
        websocket.onmessage = function(evt) { 
            onMessage(evt) 
        }; 
        websocket.onerror = function(evt) { 
            onError(evt) 
        }; 
    }  
 
    function onOpen(evt) { 
		doSend(send_stream);
		//AutoRoad();
		if(typeof(AllVar)!="undefined")
			if(AllVar==true)
			{
				 ReadExperimentShow(localStorage.getItem('Ghand'))
				 AllVar=false;
			}
    }  
 
    function onClose(evt) { 
//		init();
//        writeToScreen("DISCONNECTED" -"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"); 
    }  
 
    function onMessage(evt) { 
//	alert(evt.data.byteLength);
//	document.write(evt.data.byteLength);
	if(Reset==true)
	{
		loc();
		Reset=false;
	}
	var bufView=new Uint8Array(evt.data);
//	alert(bufView[1]);	
GetDataCI=1;
	if(bufView[5]==133)//如果接收到的是0x85，即大排队信息
	{
		var k=(bufView[7]*256+bufView[6])*8;//程序中没有使用
		var n,p;
		var data_p=new Array(8);	//转换的临时数组	
		for(var j=0;j<(bufView[7]*256+bufView[6]);j++)//bufView[7]*256+bufView[6]为大排队数据总长，bufView[6]，[7]为接收帧中的数据总长
		{
//			document.write(j+':');
			for(var i=0;i<8;i++)//收到的是字符型数据，因此每8位读一次
			{			
				n=bufView[14+j].toString(2);//将其转换为二进制字符型，即如：0xaa转换为10101010的字符形式
				
				for(p=0;p<n.length;p++)
				{
					data_p[p]=n[n.length-p-1];	//读字符串是从低往高读，将字符串的低位存放在数组的高数字的位
					data_p[p]=parseInt(data_p[p]);//字符转数字，否则读出来的0和1是字符型
				}
				for(p=n.length;p<8;p++)
				{
					data_p[p]=0;//如果数据比0x80小，则会出现高几位为0的情况，这时需要将缺的位补零
				}
//				if(i<n.length)
//				{
				data_CI[8*j+i]=data_p[i];//将临时数组中的数据存放在大排队数据中
//				document.write(data_CI[8*j+i]);
//				}				
//				else
//				{
//				data_CI[8*j+i]=0;
				
//				}				
				if(data_CI[8*j+i]==1)
				{
//					document.write('('+''+(8*j+i)+''+')');
//					document.write(name[8*j+i]+command[8*j+i]);
//					document.write(' ');
				}		
				
			}
//			console.log(data_CI[8*j+i]);
			//document.write(' ');
			if((8*j+i)>10503)//如果超出了大排队的总数，则跳出循环
			{
				
				break;		
			}
		}
		
			for(CarStoped=9283;CarStoped<9979;CarStoped++)//用于列车停稳发送
			{
				if(equittype[CarStoped]=="站台" && data_CI[CarStoped]==1 &&command[CarStoped]=="列车停稳")
				{
					for(var z=0;z<58;z++)
					if((name1[CarStoped].split('-'))[0]==platform[z][1] )
					{
						if(((name1[CarStoped].split('-'))[1]=="1"&&platform[z][6]=="True")||((name1[CarStoped].split('-'))[1]=="0"&&platform[z][6]=="False"))
						PlatformStoped=z+1;
					}
				break;
				}
			}
			//if(PlatformStoped>0)
//			{
////				sed(["fc",PlatformStoped,0]);//原来的代码
//				function time(){
//											
//						sed(["fc",PlatformStoped,0]);
//					
//					}
//				var timer1=window.setTimeout(function(){time()},5000);
//				
//				PlatformStoped=0;
//			}
	}
	else if(bufView[5]==230)//如果接收到的是0xe6，即临时限速信息
		{
//			flag=0;
			axle_speed=bufView[13]*256+bufView[12];//区段限速值
			axle_session_name=bufView[11]*256+bufView[10];//区段号，对应数据库中编号
//			console.log(axle_session_name);
//			console.log(axle_speed);
//			for(AxleNum=0;AxleNum<324;AxleNum++)
//			{
//				if(axle[AxleNum][0]==axle_session_name)
//				{
//					axle[AxleNum][1]=axle_speed;
//					flag=1;
//					break;
//				}
//				else if(axle[AxleNum][0]==0)
//				break;
//			}
//			if(flag==0)
//			{
//				axle[AxleNum][0]=axle_session_name;
//				axle[AxleNum][1]=axle_speed;
//			}	
			for(AxleNum=0;AxleNum<AxleSessionName.length;AxleNum++)
			{
				if(AxleSessionName[AxleNum]==axle_session_name)
				{
					if(AxleSpeed[AxleNum]==axle_speed)
					break;
					else
					{
						if(axle_speed==65535)
						{
							DelSessionName=AxleSessionName[AxleNum];
							AxleSpeed.splice(AxleNum,1);
							AxleSessionName.splice(AxleNum,1);
							
						}	
						else 
						AxleSpeed[AxleNum]=axle_speed;						
						AxleNum=-1;
						speed();
						break;
					}
					
				}
			}
			if(AxleNum==AxleSessionName.length )
			{
				if(axle_speed!=65535)
				{
				AxleSessionName.push(axle_session_name);
				AxleSpeed.push(axle_speed);
				speed();
				}
				
			}
			AxleNum=0;
//			console.log(AxleSessionName);
//			console.log(AxleSpeed);
		}
	else if (bufView[5]==229 && bufView[8]==169)//收到的是0xe5，车次信息命令码为0xa9
		{
			var CarInRoadNoName;//车辆所在轨道名
			var NumSignal;
			var NumPlatform;
			BCCtype_returned_ex=bufView[10];
			BCCtype_returned=bufView[11];
			car_return=BCCtype_returned_ex+BCCtype_returned*256;
			for(var i=0;i<40;i++)
			{
				if(i<10 && bufView[16+i]!=0)
				CarPVIDTemp[i]=(bufView[16+i]-30).toString();
				else if(i>9 && i<20&& bufView[16+i]!=0)
				CarTIDTemp[i-10]=(bufView[16+i]-30).toString();
				else if(i>19 && i<30&& bufView[16+i]!=0)
				CarSIDTemp[i-20]=(bufView[16+i]-30).toString();
				else if(i>29&& bufView[16+i]!=0)
				CarDIDTemp[i-30]=(bufView[16+i]-30).toString();
			}
			CarPVIDString=CarPVIDTemp.join("");
			CarTIDString=CarTIDTemp.join("");
			CarSIDString=CarSIDTemp.join("");
			CarDIDString=CarDIDTemp.join("");
			CarPVIDTemp.splice(0,CarPVIDTemp.length);
			CarTIDTemp.splice(0,CarTIDTemp.length);
			CarSIDTemp.splice(0,CarSIDTemp.length);
			CarDIDTemp.splice(0,CarDIDTemp.length);
			for(CarNum=0;CarNum<CarNo.length;CarNum++)
			{
				
				if(car_return!=1)
					break;
//				CarNo.push(bufView[14]+bufView[15]*256);
				if(CarNo[CarNum]==bufView[14]+bufView[15]*256)
				{
					if((bufView[12]+bufView[13]*256)==3)
					{
						CarDelete=1;
						Carflag();
						CarNo.splice(CarNum,1);
						CarPVID.splice(CarNum,CarPVIDString.length);// 车组号
						CarTID.splice(CarNum,CarTIDString.length);// 服务号
						CarSID.splice(CarNum,CarSIDString.length);// 序列号
						CarDID.splice(CarNum,CarDIDString.length);// 目的地号
						CarType.splice(CarNum,1);// 类型   1：计划车   2：目的地车   3：人工车   4：特殊人工车
						CarShowType.splice(CarNum,1);// 识别号显示类型 1: 服务号+目的地号 2:车组号+目的地号
						CarInRoadNo.splice(CarNum,1);// 所在轨道
						CarhisInRoadNo.splice(CarNum,1);// 历史所在轨道
						CarInRoadType.splice(CarNum,1);// 所在轨道编号类型 1：逻辑区段 2：计轴区段  3：道岔
						CarhisInRoadType.splice(CarNum,1);// 历史所在轨道编号类型 1：逻辑区段 2：计轴区段  3：道岔
						CarAddPosition.splice(CarNum,1);// 车次添加位置
						CarhisAddPosition.splice(CarNum,1);// 历史车次添加位置
						CarAddPositionType.splice(CarNum,1);// 车次添加轨道编号类型 1：逻辑区段 2：计轴区段  3：道岔
						CarhisAddPositionType.splice(CarNum,1);	// 历史车次添加轨道编号类型 1：逻辑区段 2：计轴区段  3：道岔
						CarForwardRoad.splice(CarNum,1);// 后一个轨道（要去哪个区段？）
						CarMode.splice(CarNum,1);// 跟踪运行模式   1：固定闭塞模式(RM)   2：点式信息模式(ATP)   3：CBTC模式(ATO) 
						CarDirect.splice(CarNum,1);// 列车运行方向   0：方向未知   1：向左（上行）   2：向右（下行）
						CarDoor.splice(CarNum,1);//车门状态
						CarJump.splice(CarNum,1);//跳停
						CarKetain.splice(CarNum,1);//扣车
						CarAlarm.splice(CarNum,1);//故障警报
						CarTrainStop.splice(CarNum,1);//列车停车
						CarSignal.splice(CarNum,1);
						StationInCar.splice(CarNum,1);
						CarDelete=0;
						CarNum=0;
						break;
					}
					else
					{
					CarPVID[CarNum]=CarPVIDString;// 车组号
					CarTID[CarNum]=CarTIDString;// 服务号
					CarSID[CarNum]=CarSIDString;// 序列号
					CarDID[CarNum]=CarDIDString;// 目的地号
					CarType[CarNum]=bufView[56];// 类型   1：计划车   2：目的地车   3：人工车   4：特殊人工车
					CarShowType[CarNum]=bufView[57];// 识别号显示类型 1: 服务号+目的地号 2:车组号+目的地号
					CarInRoadNo[CarNum]=bufView[58]+bufView[59]*256;// 所在轨道
					CarhisInRoadNo[CarNum]=bufView[60]+bufView[61]*256;// 历史所在轨道
					CarInRoadType[CarNum]=bufView[62];// 所在轨道编号类型 1：逻辑区段 2：计轴区段  3：道岔
					CarhisInRoadType[CarNum]=bufView[63];// 历史所在轨道编号类型 1：逻辑区段 2：计轴区段  3：道岔
					CarAddPosition[CarNum]=bufView[64]+bufView[65]*256;// 车次添加位置
					CarhisAddPosition[CarNum]=bufView[66]+bufView[67]*256;// 历史车次添加位置
					CarAddPositionType[CarNum]=bufView[68];// 车次添加轨道编号类型 1：逻辑区段 2：计轴区段  3：道岔
					CarhisAddPositionType[CarNum]=bufView[69];	// 历史车次添加轨道编号类型 1：逻辑区段 2：计轴区段  3：道岔
					CarForwardRoad[CarNum]=bufView[70]+bufView[71]*256;// 后一个轨道（要去哪个区段？）
					CarMode[CarNum]=bufView[72];// 跟踪运行模式   1：固定闭塞模式(RM)   2：点式信息模式(ATP)   3：CBTC模式(ATO) 
					CarDirect[CarNum]=bufView[73];// 列车运行方向   0：方向未知   1：向左（上行）   2：向右（下行）
					CarDoor[CarNum]=bufView[75];//车门状态
					CarJump[CarNum]=bufView[79];//跳停
					CarKetain[CarNum]=bufView[83];//扣车
					CarAlarm[CarNum]=bufView[87];//故障警报
					CarTrainStop[CarNum]=bufView[91];//列车停车
					CarInRoadNoName=axle_section[CarInRoadNo[CarNum]-1][1];
					for(NumSignal=0;NumSignal<225;NumSignal++)
					{
						if(CarInRoadNoName==signal[NumSignal][8])
						{
							CarSignal[CarNum]=NumSignal+1;//车辆对应的前向信号机
							break;
						}
						if(NumSignal==225)
						CarSignal[CarNum]=NumSignal+1;//车辆对应的前向信号机
					}
					for(NumPlatform=0;NumPlatform<58;NumPlatform++)	
					{
						if(CarInRoadNo[CarNum]==platform[NumPlatform][7])
						{
							StationInCar[CarNum]=NumPlatform+1;//车辆对应的站
							break;
						}							
					}
					if(NumPlatform==58)
					{
						StationInCar[CarNum]=NumPlatform+1;//车辆对应的站
					}
					Carflag();
					break;
					}
				}
			}
			if((bufView[12]+bufView[13]*256)==1)
			{
			if(CarNum==CarNo.length)
			{		
				
				CarPVID.push(CarPVIDString);
				CarTID.push(CarTIDString);
				CarSID.push(CarSIDString);
				CarDID.push(CarDIDString);
				CarNo.push(bufView[14]+bufView[15]*256);
				CarType.push(bufView[56]);
				CarShowType.push(bufView[57]);
				CarInRoadNo.push(bufView[58]+bufView[59]*256);
				CarhisInRoadNo.push(bufView[60]+bufView[61]*256);
				CarInRoadType.push(bufView[62]);
				CarhisInRoadType.push(bufView[63]);
				CarAddPosition.push(bufView[64]+bufView[65]*256);
				CarhisAddPosition.push(bufView[66]+bufView[67]*256);
				CarAddPositionType.push(bufView[68]);
				CarhisAddPositionType.push(bufView[69]);
				CarForwardRoad.push(bufView[70]+bufView[71]*256);
				CarMode.push(bufView[72]);
				CarDirect.push(bufView[73]);
				CarDoor.push(bufView[75]);//车门状态
				CarJump.push(bufView[79]);//跳停
				CarKetain.push(bufView[83]);//扣车
				CarAlarm.push(bufView[87]);//故障警报
				CarTrainStop.push(bufView[91]);//列车停车
				CarInRoadNoName=axle_section[CarInRoadNo[CarNum]-1][1];
				for(NumSignal=0;NumSignal<225;NumSignal++)
				{
					if(CarInRoadNoName==signal[NumSignal][8])
					{
						CarSignal.push(NumSignal+1);//车辆对应的前向信号机
						break;
					}					
				}
				for(NumPlatform=0;NumPlatform<58;NumPlatform++)	
				{
					if(CarInRoadNo[CarNum]==platform[NumPlatform][7])
					{
						StationInCar.push(NumPlatform+1);//车辆对应的站
						break;
					}
				}
				if(NumSignal==225)
				{
					CarSignal.push(NumSignal+1);//车辆对应的前向信号机
				}
				if(NumPlatform==58)
				{
					StationInCar.push(NumPlatform+1);//车辆对应的站
				}
				Carflag();
			}
			}
			//for(var i=0;i<CarNo.length;i++)//找到车站所在站台
//			{								
//				CarInRoadNoName=axle_section[CarInRoadNo[i]-1][1];
//				for(var j=0;j<225;j++)
//					if(CarInRoadNoName==signal[j][8])
//					{
//						CarSignal.push(j+1);//车辆对应的前向信号机
//						break;
//					}
//				for(var k=0;k<58;k++)	
//				{
//					if(CarInRoadNo==platform[k][7])
//					{
//						StationInCar.push(k+1);//车辆对应的站
//						break;
//					}
//				}					
//			}
		}
//	console.log(data_CI);
data_C(data_CI);
//console.log(1);
//		websocket.close();
    }  
 
    function onError(evt) { 
//	alert(typeof(evt.data));
//        writeToScreen('<span style="color: red;">ERROR:</span> '+ evt.data); 
	websocket.close();
    }  
 
    function doSend(message) { 
		sed(['i',null]);
/*		if(send_type=='t')//帧类型,进路
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=='s')//道岔
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=='z')//站台
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='q')//总取消
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='c')//模拟行车
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='y')//引导进路
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='r')//总人解
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='d')//点灯/灭灯
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=='p')//临时限速,未接收到信息
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="sf")//信号封锁
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="sr")//信号重开
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=="q_j")//区故解
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=="a_c")//添加车次
	{
		send_datalen[0]='\x3c';
		send_datalen[1]='\x00';
	}
	else if(send_type=="setr")//添加车次
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	if(send_type=='t')//进路
	{
//		equit_name=21;
//		equit_name_end=23;

		send_command='\x00';
		send_command_ex='\x05';
//		send_button1='\x00';
//		send_button2='\x00';
		send_button1=unum[parseInt((parseInt(equit_name)+1)/256)];
		send_button2=unum[parseInt((parseInt(equit_name_end)+1)/256)];
		send_button1_ex=unum[parseInt(parseInt(equit_name)+1)-parseInt((parseInt(equit_name)+1)/256)*256];
		send_button2_ex=unum[parseInt(parseInt(equit_name_end)+1)-parseInt((parseInt(equit_name_end)+1)/256)*256];

		console.log(parseInt((equit_name+1)/256));
		console.log(parseInt((equit_name_end+1)/256));
		console.log(parseInt(equit_name+1)-parseInt((equit_name+1)/256)*256);
		console.log(parseInt(equit_name_end+1)-parseInt((equit_name_end+1)/256)*256);

		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='s')//道岔
	{
//		equit_name=173;
		
		if(button_daocha==1)//定位
		{
		send_button1='\x00';
		send_button1_ex='\x01';
		}
		else if(button_daocha==2)//反位
		{
		send_button1='\x00';
		send_button1_ex='\x02';
		}
		else if(button_daocha==3)//单锁
		{
		send_button1='\x00';
		send_button1_ex='\x03';
		}
		else if(button_daocha==4)//解锁
		{
		send_button1='\x00';
		send_button1_ex='\x05';
		}
		else if(button_daocha==5)//封锁
		{
		send_button1='\x00';
		send_button1_ex='\x04';
		}
		send_command_ex='\x25';
		send_command='\x00';
//		send_button1=equit_name+1;
		send_button2=unum[parseInt(parseInt(equit_name)/256)];
//		console.log(parseInt(equit_name/256));
		send_button2_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
//		send_button2_ex='\xf5';
		send_button=send_button1_ex+''+send_button1;
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='z')//站台
	{
//		equit_name=1106;
		send_command='\x00';
		send_command_ex='\xa2';
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
//		send_button2='\x00';
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
//		send_button2_ex=unum[equit_name_end+1];
//		send_button=send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2;
//		console.log(parseInt((equit_name+1)/256));
//		console.log(parseInt(equit_name+1)-parseInt((equit_name+1)/256)*256);
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='q')//总取消
	{
//		equit_name=10;//发送的是信号机在数据库中的编码
		send_command='\x00';
		send_command_ex='\x1a';
//		send_button1='\x00';
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
//		send_button2_ex=unum[equit_name_end+1];
//		send_button=send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2;
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='c')//模拟行车
	{
		//发送的是信号机在数据库中的编码
		send_command='\x00';
		send_command_ex='\xab';
//		send_button1='\x00';
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];

//		console.log(equit_name);
//		send_button1_ex=unum[parseInt(equit_name)];
//		send_button2_ex=unum[equit_name_end+1];
//		send_button=send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2;
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='y')//引导进路，需先进行道岔相应的操作
	{
//		equit_name=13;//发送的是信号机在输出码位表中的编码
		send_command='\x00';
		send_command_ex='\xca';
//		send_button1='\x00';
//		send_button1_ex=unum[equit_name];
		console.log(equit_name);
		console.log(parseInt(parseInt(equit_name)/256));
		console.log(parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256);
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='r')//总人解
	{
//		equit_name=13;//发送的是信号机在数据库中的编码
		send_command='\x00';
		send_command_ex='\x45';
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='d')//点灯/灭灯
	{
//		equit_name=1;//发送的是信号机在数据库中的编码
		send_command='\x00';
		send_command_ex='\xa3';
		send_button1='\x00';
		send_button1_ex='\x00';
		send_button2=unum[parseInt(parseInt(equit_name)/256)];
		send_button2_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
//		console.log(parseInt(equit_name/256));
//		console.log(parseInt(equit_name)-parseInt(equit_name/256)*256);
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='p')//临时限速
	{
//		equit_name=1;//发送的是逻辑区段在数据库中的编码
//		equit_name_end=50;
		send_command='\x00';
		send_command_ex='\xac';
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		console.log(equit_name);
		console.log(equit_name_end);
		send_button2=unum[parseInt(parseInt(equit_name_end)/256)];
		send_button2_ex=unum[parseInt(equit_name_end)-parseInt(parseInt(equit_name_end)/256)*256];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="sf" || send_type=="sr")//信号封锁,信号重开
	{		
					//发送的是信号机在数据库中的编码
		send_command='\x00';
		send_command_ex='\xb5';
		send_button1='\x00';
		send_button1_ex='\x00';
		send_button2_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button2=unum[parseInt(parseInt(equit_name)/256)];
//		console.log(equit_name);
//		console.log(parseInt(equit_name)-parseInt(equit_name/256)*256);
//		console.log(parseInt(equit_name/256));
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
//	else if(send_type=="s_r")//信号重开
//	{
//				//发送的是信号机在数据库中的编码
//		send_command='\x00';
//		send_command_ex='\xb5';
//		send_button1='\x00';
//		send_button1_ex='\x00';
//		send_button2_ex=unum[parseInt(equit_name)-parseInt(equit_name/256)*256];
//		send_button2=unum[parseInt(equit_name/256)];
//		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
//	}
	else if(send_type=="q_j")//区故解
	{
//		equit_name=144;//发送的是计轴区段/道岔的码位
		send_command='\x00';
		send_command_ex='\x5a';
		send_button1=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1_ex=unum[parseInt(parseInt(equit_name)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="setr")//设置后备模式
	{
//		equit_name=144;//发送的是信号机在数据库的码位
		send_command='\x00';
		send_command_ex='\xa6';
		send_button1_ex=unum[parseInt(parseInt(equit_name))-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		console.log(parseInt(equit_name))
		if(CBTC==0)
		send_button2_ex='\x00';
		else if(CBTC==1)
		send_button2_ex='\x01';
		send_button2='\x00';
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="a_c")//添加车次
	{
		PVID=new Array(10);				//车组号
		TID=new Array(10);				//服务号
		SID=new Array(10);				//序列号
		DID=new Array(10);				//目的地号
//		equit_name=144;//发送的是计轴区段/道岔的码位
		send_command='\x00';
		send_command_ex='\xa9';
		No='\x06';				//车辆编号
//		PVID=new Array(10);				//车组号
//		TID=new Array(10);				//服务号
//		SID=new Array(10);				//序列号
//		DID=new Array(10);				//目的地号
		for(var i=0;i<10;i++)
		{
			PVID[i]='\x00';
			TID[i]='\x00';
			SID[i]='\x00';
			DID[i]='\x00';
		}
		Type='\x01';				// 类型   1：计划车   2：目的地车   3：人工车   4：特殊人工车
		ShowType='\x02';			// 识别号显示类型 1: 服务号+目的地号 2:车组号+目的地号
		InRoadNo='\x00';
		InRoadNo_ex='\x01';			// 所在轨道
		RoadDeveieType='\x02';		// 所在轨道编号类型 1：逻辑区段 2：计轴区段  3：道岔
		RoadDeviveFrom='\x00';
		RoadDeviveFrom_ex='\x15';		// 前一个轨道（从哪个区段开来的？）
		RoadDeviveTo='\x00';		// 后一个轨道（要去哪个区段？）
		RoadDeviveTo_ex='\x20';
		Mode='\x03';				// 跟踪运行模式   1：固定闭塞模式(RM)   2：点式信息模式(ATP)   3：CBTC模式(ATO)  
		Direct='\x02';				// 列车运行方向   0：方向未知   1：向左（上行）   2：向右（下行） 
		Wayno='\x15';				// 进路编号
		Door='\x00';				// 车门状态  0：关闭   1：打开
		Jump='\x00';				// 跳停  0：停   1：跳停
		Ketain='\x00';				// 扣车  0：不扣   1：扣车
		Alarm='\x00';				// 故障警报  0：无   1：有警报
		TrainStop='\x00';			// 列车停车, 0:行车状态	1: 停车状态	
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+No+''+PVID[0]+''+PVID[1]+''+PVID[2]+''+PVID[3]+''+PVID[4]+''+PVID[5]+''+PVID[6]+''+PVID[7]+''+PVID[8]+''+PVID[9]+''+TID[0]+''+TID[1]+''+TID[2]+''+TID[3]+''+TID[4]+''+TID[5]+''+TID[6]+''+TID[7]+''+TID[8]+''+TID[9]+''+SID[0]+''+SID[1]+''+SID[2]+''+SID[3]+''+SID[4]+''+SID[5]+''+SID[6]+''+SID[7]+''+SID[8]+''+SID[9]+''+DID[0]+''+DID[1]+''+DID[2]+''+DID[3]+''+DID[4]+''+DID[5]+''+DID[6]+''+DID[7]+''+DID[8]+''+DID[9]+''+Type+''+ShowType+''+InRoadNo_ex+''+InRoadNo+''+RoadDeveieType+''+RoadDeviveFrom_ex+''+RoadDeviveFrom+''+RoadDeviveTo_ex+''+RoadDeviveTo+''+Mode+''+Direct+''+Wayno+''+Door+''+Jump+''+Ketain+''+Alarm+''+TrainStop+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	  websocket.send(send_stream); */
    }  
 	function f3()
	{
//		if(websocket.readyState!=3)
//			websocket.close();
		if(websocket.readyState!=1)
		{
//			console.log("websocket.readyState:"+websocket.readyState);
			init();
		}
		else 
		{
//			console.log("websocket.readyState:"+websocket.readyState);
			websocket.send('0');
		}
//		time1=setTimeout(f3,1500);		
	}
	function SetSendtype()//设置发送类型，确定发送帧，注意：双字节都是以低字节在前发的
	{
		//以下是正常操作的部分
	if(send_type=='t')//帧类型,进路
	{
		send_datalen[0]='\x06';//帧长度高4位
		send_datalen[1]='\x00';//帧长度低4位
	}
	else if(send_type=='s')//道岔
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=='z')//站台
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='q')//总取消
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='c')//模拟行车
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='y')//引导进路
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='r')//总人解
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='d')//点灯/灭灯
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=='p')//临时限速,未接收到信息
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="sf")//信号封锁
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="sr")//信号重开
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=="q_j")//区故解
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=="ac")//添加车次
	{
		send_datalen[0]='\x48';
		send_datalen[1]='\x00';
	}
	else if(send_type=="setr")//设置后备模式
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="zdl")//设置自动进路
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="conr")//确认后备模式
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="qzdl")//确认取消自动进路
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=="trl")//轨道封锁/解封
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=="qtrl")//轨道确认解封
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=="fc")//倒计时发车
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	//以下为设置故障的通信部分
	else if(send_type=="switchaccident")//道岔故障设置
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="signalaccident")//信号机故障设置
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="axleaccident")//计轴故障设置
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="atb")//ATB按钮
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else  if(send_type=="doorfault")//屏蔽门故障按钮
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else  if(send_type=="door")//屏蔽门开关按钮
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else  if(send_type=="reset")//复位
	{
		send_datalen[0]='\x02';
		send_datalen[1]='\x00';
	}
	//以下为正常操作的部分
	if(send_type=='t')//进路
	{
//		equit_name=21;
//		equit_name_end=23;

		send_command='\x00';//命令类型低4位
		send_command_ex='\x05';//命令类型高4位
//		send_button1='\x00';
//		send_button2='\x00';
		send_button1=unum[parseInt((parseInt(equit_name)+1)/256)];//发送的第一个信息（双字）的高4位，这里用parseInt()用于：1将浏览器传递的字符串转化为数字值 2将含小数的数字向下取整
		send_button2=unum[parseInt((parseInt(equit_name_end)+1)/256)];//发送的第二个信息（双字）的高4位
		send_button1_ex=unum[parseInt(parseInt(equit_name)+1)-parseInt((parseInt(equit_name)+1)/256)*256];//发送的第一个信息（双字）的低4位
		send_button2_ex=unum[parseInt(parseInt(equit_name_end)+1)-parseInt((parseInt(equit_name_end)+1)/256)*256];//发送的第一个信息（双字）的低4位

//		console.log(parseInt((equit_name+1)/256));
//		console.log(parseInt((equit_name_end+1)/256));
//		console.log(parseInt(equit_name+1)-parseInt((equit_name+1)/256)*256);
//		console.log(parseInt(equit_name_end+1)-parseInt((equit_name_end+1)/256)*256);

		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;//发送流目前只能这么写，否则传送的过程中会出现乱码
	}
	else if(send_type=='s')//道岔
	{
//		equit_name=173;
		
		if(button_daocha==1)//定位
		{
		send_button1='\x00';
		send_button1_ex='\x01';
		}
		else if(button_daocha==2)//反位
		{
		send_button1='\x00';
		send_button1_ex='\x02';
		}
		else if(button_daocha==3)//单锁
		{
		send_button1='\x00';
		send_button1_ex='\x03';
		}
		else if(button_daocha==4)//解锁
		{
		send_button1='\x00';
		send_button1_ex='\x04';
		}
		else if(button_daocha==5)//确认解锁
		{
		send_button1='\x00';
		send_button1_ex='\x05';
		}
		else if(button_daocha==6)//封锁
		{
		send_button1='\x00';
		send_button1_ex='\x06';
		}
		else if(button_daocha==7)//解封
		{
		send_button1='\x00';
		send_button1_ex='\x07';
		}
		else if(button_daocha==8)//确认解封
		{
		send_button1='\x00';
		send_button1_ex='\x08';
		}
		else if(button_daocha==9)//强制转岔
		{
		send_button1='\x00';
		send_button1_ex='\x09';
		}
		send_command_ex='\x25';
		send_command='\x00';
//		send_button1=equit_name+1;
		send_button2=unum[parseInt(parseInt(equit_name)/256)];
//		console.log(parseInt(equit_name/256));
		send_button2_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
//		send_button2_ex='\xf5';
		send_button=send_button1_ex+''+send_button1;
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='z')//站台
	{
//		equit_name=1106;
		send_command='\x00';
		send_command_ex='\xa2';
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
//		send_button2='\x00';
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
//		send_button2_ex=unum[equit_name_end+1];
//		send_button=send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2;
//		console.log(parseInt((equit_name+1)/256));
//		console.log(parseInt(equit_name+1)-parseInt((equit_name+1)/256)*256);
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='q')//总取消
	{
//		equit_name=10;//发送的是信号机在数据库中的编码
		send_command='\x00';
		send_command_ex='\x1a';
//		send_button1='\x00';
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
//		send_button2_ex=unum[equit_name_end+1];
//		send_button=send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2;
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='c')//模拟行车
	{
		//发送的是信号机在数据库中的编码
		send_command='\x00';
		send_command_ex='\xab';
//		send_button1='\x00';
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];

//		console.log(equit_name);
//		send_button1_ex=unum[parseInt(equit_name)];
//		send_button2_ex=unum[equit_name_end+1];
//		send_button=send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2;
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='y')//引导进路，需先进行道岔相应的操作
	{
//		equit_name=13;//发送的是信号机在输出码位表中的编码
		send_command='\x00';
		send_command_ex='\xca';
//		send_button1='\x00';
//		send_button1_ex=unum[equit_name];
//		console.log(equit_name);
//		console.log(parseInt(parseInt(equit_name)/256));
//		console.log(parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256);
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='r')//总人解
	{
//		equit_name=13;//发送的是信号机在数据库中的编码
		send_command='\x00';
		send_command_ex='\x45';
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='d')//点灯/灭灯
	{
//		equit_name=1;//发送的是信号机在数据库中的编码
		send_command='\x00';
		send_command_ex='\xa3';
		send_button1='\x00';
		send_button1_ex='\x00';
		send_button2=unum[parseInt(parseInt(equit_name)/256)];
		send_button2_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
//		console.log(parseInt(equit_name/256));
//		console.log(parseInt(equit_name)-parseInt(equit_name/256)*256);
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='p')//临时限速
	{
//		equit_name=1;//发送的是逻辑区段在数据库中的编码
//		equit_name_end=50;
		send_command='\x00';
		send_command_ex='\xac';
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
//		console.log(equit_name);
//		console.log(equit_name_end);
		send_button2=unum[parseInt(parseInt(equit_name_end)/256)];
		send_button2_ex=unum[parseInt(equit_name_end)-parseInt(parseInt(equit_name_end)/256)*256];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="sf" || send_type=="sr")//信号封锁,信号重开
	{		
					//发送的是信号机在数据库中的编码
		send_command='\x00';
		send_command_ex='\xb5';
		send_button1='\x00';
		send_button1_ex='\x00';
		send_button2_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button2=unum[parseInt(parseInt(equit_name)/256)];
//		console.log(equit_name);
//		console.log(parseInt(equit_name)-parseInt(equit_name/256)*256);
//		console.log(parseInt(equit_name/256));
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
//	else if(send_type=="s_r")//信号重开
//	{
//				//发送的是信号机在数据库中的编码
//		send_command='\x00';
//		send_command_ex='\xb5';
//		send_button1='\x00';
//		send_button1_ex='\x00';
//		send_button2_ex=unum[parseInt(equit_name)-parseInt(equit_name/256)*256];
//		send_button2=unum[parseInt(equit_name/256)];
//		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
//	}
	else if(send_type=="q_j")//区故解
	{
//		equit_name=144;//发送的是计轴区段/道岔的码位
		send_command='\x00';
		send_command_ex='\x5a';
		send_button1=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1_ex=unum[parseInt(parseInt(equit_name)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="i")//页面刷新发送车辆信息
	{
//		equit_name=144;//发送的是计轴区段/道岔的码位
//		send_command='\x00';
		send_command='\x6a';
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_command+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="zdl")//自动进路
	{
//		equit_name=144;//发送的是信号机在数据库的码位
		send_command='\x00';
		send_command_ex='\xa4';
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button2_ex=unum[parseInt(equit_name_end)-parseInt(parseInt(equit_name_end)/256)*256];
		send_button2=unum[parseInt(parseInt(equit_name_end)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="qzdl")//确认取消自动进路
	{
//		equit_name=144;//发送的是信号机在数据库的码位
		send_command='\x00';
		send_command_ex='\xad';
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="trl")//轨道封锁，解封
	{
//		equit_name=144;//发送的是信号机在数据库的码位
		send_command='\x00';
		send_command_ex='\xb1';
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="qtrl")//轨道确认解封
	{
//		equit_name=144;//发送的是信号机在数据库的码位
		send_command='\x00';
		send_command_ex='\xb2';
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="fc")//倒计时发车
	{
//		equit_name=144;//发送的是车站在数据库的码位
		send_command='\x00';
		send_command_ex='\xb7';
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="setr")//设置后备模式
	{
//		equit_name=144;//发送的是信号机在数据库的码位
		send_command='\x00';
		send_command_ex='\xa6';
		send_button1_ex=unum[parseInt(parseInt(equit_name))-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
//		console.log(parseInt(equit_name))
		if(CBTC==0)
		send_button2_ex='\x00';
		else if(CBTC==1)
		send_button2_ex='\x01';
		send_button2='\x00';
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="conr")//确认设置后备模式
	{
//		equit_name=144;//发送的是信号机在数据库的码位
		send_command='\x00';
		send_command_ex='\xae';
		send_button1_ex=unum[parseInt(parseInt(equit_name))-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		console.log(parseInt(equit_name))
		if(CBTC==0)
		send_button2_ex='\x01';
		else if(CBTC==1)
		send_button2_ex='\x00';
		send_button2='\x00';
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="ac")//添加车次
	{
//		console.log(PVID);
//		console.log(TID);
//		console.log(SID);
//		console.log(DID);
//		equit_name=144;//发送的是计轴区段/道岔的码位
		send_command='\x00';
		send_command_ex='\xa9';
		if(equit_name_end==1)//添加车次
		{
			var SendNo=parseInt(Math.random()*256);
			for(var i=0;i<CarNo.length;i++)
				if(SendNo==CarNo[i])
				{
					i=0;	
					SendNo=parseInt(Math.random()*256);
				}
		No_ex=unum[SendNo];				//车辆编号
		No='\x00';
		}
		else if(equit_name_end==2||equit_name_end==3)
		{
			No_ex=unum[parseInt(parseInt(button_daocha))-parseInt(parseInt(button_daocha)/256)*256];
			No=unum[parseInt(parseInt(button_daocha)/256)];
		}
//		PVID=new Array(10);				//车组号
//		TID=new Array(10);				//服务号
//		SID=new Array(10);				//序列号
//		DID=new Array(10);				//目的地号
//	console.log(PVID);
//		console.log(TID);
//		console.log(SID);
//		console.log(DID);
		for(var i=0;i<10;i++)
		{
			if(i<PVID.length)
			PVID_Send[i]=unum[parseInt(PVID[i])+30];
			else
			PVID_Send[i]='\x00';
			if(i<TID.length)
			TID_Send[i]=unum[parseInt(TID[i])+30];
			else
			TID_Send[i]='\x00';
			if(i<SID.length)
			SID_Send[i]=unum[parseInt(SID[i])+30];
			else
			SID_Send[i]='\x00';
			if(i<DID.length)
			DID_Send[i]=unum[parseInt(DID[i])+30];
			else
			DID_Send[i]='\x00';
//			PVID[i]='\x00';
//			TID[i]='\x00';
//			SID[i]='\x00';
//			DID[i]='\x00';
		}
//		console.log(PVID[0]);
//		console.log(TID);
//		console.log(SID);
//		console.log(DID);
		DataType_ex=unum[parseInt(equit_name_end)];
//		DataType_ex='\x01';
		DataType='\x00';
		Type_Send=unum[parseInt(Type)];				// 类型   1：计划车   2：目的地车   3：人工车   4：特殊人工车
		ShowType='\x02';			// 识别号显示类型 1: 服务号+目的地号 2:车组号+目的地号
		InRoadNo_Send=unum[parseInt(parseInt(equit_name)/256)];
		InRoadNo_Send_ex=unum[parseInt(parseInt(equit_name))-parseInt(parseInt(equit_name)/256)*256];
		hisInRoadNo_Send='\x00';// 所在轨道
		hisInRoadNo_Send_ex='\x00';
		InRoadType_Send='\x02';// 所在轨道编号类型 1：逻辑区段 2：计轴区段  3：道岔
		hisInRoadType_Send='\x00';
		AddPosition_Send='\x00';
		AddPosition_Send_ex='\x00';			
		hisAddPosition_Send='\x00';
		hisAddPosition_Send_ex='\x00';
		AddPositionType_Send='\x01';		
		hisAddPositionType_Send='\x00';
		ForwardRoad_Send_ex='\x00';
		ForwardRoad_Send='\x00';
//		RoadDeviveFrom='\x00';
//		RoadDeviveFrom_ex='\x15';		// 前一个轨道（从哪个区段开来的？）
//		RoadDeviveTo='\x00';		// 后一个轨道（要去哪个区段？）
//		RoadDeviveTo_ex='\x20';
		Mode_Send=unum[parseInt(Mode)];			// 跟踪运行模式   1：固定闭塞模式(RM)   2：点式信息模式(ATP)   3：CBTC模式(ATO)  
		Direct='\x00';				// 列车运行方向   0：方向未知   1：向左（上行）   2：向右（下行） 
		Wayno='\x15';				// 进路编号
		Door='\x00';				// 车门状态  0：关闭   1：打开
		Jump='\x00';				// 跳停  0：停   1：跳停
		Ketain='\x00';				// 扣车  0：不扣   1：扣车
		Alarm='\x00';				// 故障警报  0：无   1：有警报
		TrainStop='\x00';			// 列车停车, 0:行车状态	1: 停车状态	
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex  +''+send_command+''+BCCtype_send_ex+''+BCCtype_send+''+DataType_ex+''+DataType+''+No_ex+''+No+''+PVID_Send[0]+''+PVID_Send[1]+''+PVID_Send[2]+''+PVID_Send[3]+''+PVID_Send[4]+''+PVID_Send[5]+''+PVID_Send[6]+''+PVID_Send[7]+''+PVID_Send[8]+''+PVID_Send[9]+''+TID_Send[0]+''+TID_Send[1]+''+TID_Send[2]+''+TID_Send[3]+''+TID_Send[4]+''+TID_Send[5]+''+TID_Send[6]+''+TID_Send[7]+''+TID_Send[8]+''+TID_Send[9]+''+SID_Send[0]+''+SID_Send[1]+''+SID_Send[2]+''+SID_Send[3]+''+SID_Send[4]+''+SID_Send[5]+''+SID_Send[6]+''+SID_Send[7]+''+SID_Send[8]+''+SID_Send[9]+''+DID_Send[0]+''+DID_Send[1]+''+DID_Send[2]+''+DID_Send[3]+''+DID_Send[4]+''+DID_Send[5]+''+DID_Send[6]+''+DID_Send[7]+''+DID_Send[8]+''+DID_Send[9]+''+Type_Send+''+ShowType+''+InRoadNo_Send_ex+''+InRoadNo_Send+''+hisInRoadNo_Send_ex+''+hisInRoadNo_Send+''+InRoadType_Send+''+hisInRoadType_Send+''+AddPosition_Send_ex+''+AddPosition_Send+''+hisAddPosition_Send_ex+''+hisAddPosition_Send+''+AddPositionType_Send+''+hisAddPositionType_Send+''+ForwardRoad_Send_ex+''+ForwardRoad_Send+''+Mode_Send+''+Direct+''+Wayno+''+Door+''+Jump+''+Ketain+''+Alarm+''+TrainStop+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	//以下为设置故障的通信部分
	else if(send_type=="switchaccident")//道岔故障设置
	{
		send_command='\x00';
		send_command_ex='\xb8';
		send_button1_ex=unum[parseInt(parseInt(equit_name))-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
//		console.log(parseInt(equit_name))
		send_button2_ex=unum[parseInt(parseInt(equit_name_end))-parseInt(parseInt(equit_name_end)/256)*256];
		send_button2=unum[parseInt(parseInt(equit_name_end)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="signalaccident")//信号机故障设置
	{
		send_command='\x00';
		send_command_ex='\xb9';
		send_button1_ex=unum[parseInt(parseInt(equit_name))-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
//		console.log(parseInt(equit_name))
		send_button2_ex=unum[parseInt(parseInt(button_daocha))-parseInt(parseInt(button_daocha)/256)*256];
		send_button2=unum[parseInt(parseInt(button_daocha)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="axleaccident")//计轴故障设置
	{
		send_command='\x00';
		send_command_ex='\xba';
		send_button1_ex=unum[parseInt(parseInt(equit_name))-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
//		console.log(parseInt(equit_name))
		send_button2_ex=unum[parseInt(parseInt(equit_name_end))-parseInt(parseInt(equit_name_end)/256)*256];
		send_button2=unum[parseInt(parseInt(equit_name_end)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="atb")//ATB按钮
	{
//		equit_name=144;//发送的是车站在数据库的码位
		send_command='\x00';
		send_command_ex='\xbb';
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="doorfault")//屏蔽门故障按钮
	{
//		equit_name=144;//发送的是车站在数据库的码位
		send_command='\x00';
		send_command_ex='\xbc';
		send_button1_ex=unum[parseInt(parseInt(equit_name))-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button2_ex=unum[parseInt(parseInt(equit_name_end))-parseInt(parseInt(equit_name_end)/256)*256];
		send_button2=unum[parseInt(parseInt(equit_name_end)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else  if(send_type=="door")//屏蔽门开关按钮
	{
		send_command='\x00';
		send_command_ex='\xa2';
		send_button1_ex=unum[parseInt(parseInt(equit_name))-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button2_ex=unum[parseInt(parseInt(equit_name_end))-parseInt(parseInt(equit_name_end)/256)*256];
		send_button2=unum[parseInt(parseInt(equit_name_end)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else  if(send_type=="reset")//复位
	{
		send_command='\x00';
		send_command_ex='\xa1';
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	websocket.send(send_stream);//发送数据
	}
//	init();
//	f3();
//	f4();
setTimeout(function(){
					console.log(GetDataCI);
					onOff(GetDataCI);
					setTimeout(arguments.callee,1000);
					GetDataCI=0;
					
					},1000)   
		  