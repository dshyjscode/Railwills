//var data_CI=new Array(10000);//���Ŷ����飬���ڽ��յ��Ķ����ƴ��Ŷ���Ϣת��Ϊ����ֵ
 var wsUri ="ws://47.92.110.96:2001/"; //websocket�������˵�ַ
 var websocket;
	//var wsUri="localhost:60002"
	/**ͨ��Э�����**/
    var output;  
	var send_head='\x7d';	//֡ͷ
	var send_shoubulen='\x04';//�ײ���
	var send_version='\x11';//�汾��
	var send_fasongxuhao='\x01';//�������
	var send_jieshouxuhao='\x01';//ȷ�����
	var send_streamtype='\x95';//֡����
	var send_datalen=new Array(2);//˫�ֽ�
	var send_command;//��������
	var send_button1_ex;//���Ͱ�ť����λ
	var send_button1;//���Ͱ�ť
	var send_button2_ex;//���Ͱ�ť����λ
	var send_button2;//���Ͱ�ť
	var send_button;
	var send_CRCh='\x01';//У��λ���ֽ�
	var send_CRCl='\x01';//У��λ���ֽ�
	var send_end='\x7e';//֡β
	var send_stream;//���͵�ͨ������
	var time1,time2;
	var axle_speed;//���ص���ʱ�ٶ�
	var axle_session_name;//���ص���ʱ�������κ�
	var data_CI=new Array(11000);//���Ŷ����飬���ڽ��յ��Ķ����ƴ��Ŷ���Ϣת��Ϊ����ֵ
//	var axle=new Array(324);
//	for(var i=0;i<324;i++)
//	{
//		axle[i]=new Array(2);//�����ʱ�������κź��ٶ�ֵ������
//		axle[i][0]=0;//���κŸ���ֵΪ0
//	}
	var AxleNum=0;
	var AxleSpeed=[];
	var AxleSessionName=[];
	var flag=0;
	var CBTC=0;//���ú�ģʽ��1Ϊ���ã�0Ϊȡ��
	/*��ӳ����ã����͵ĳ�����Ϣ*/
	var		BCCtype_send_ex='\x00';		//��������  ��ӳ��η�����Ϣ��1���ɹ�  2�������г� 3�����κų�ͻ  4�������Ѿ����ڣ�������Ϣ��ų�ͻ,��������ֵ����
	var		BCCtype_send='\x00';
	var		DataType_ex;				//1:��� 2;�޸� 3:ɾ��
	var		DataType;
	var 	PVID_Send;				//�����
	var 	TID_Send;				//�����
	var 	SID_Send;				//���к�
	var 	DID_Send;				//Ŀ�ĵغ�
	PVID_Send=new Array(10);				//�����
	TID_Send=new Array(10);				//�����
	SID_Send=new Array(10);				//���к�
	DID_Send=new Array(10);				//Ŀ�ĵغ�
	var		Type_Send;				// ����   1���ƻ���   2��Ŀ�ĵس�   3���˹���   4�������˹���
	var		ShowType;			// ʶ�����ʾ���� 1: �����+Ŀ�ĵغ� 2:�����+Ŀ�ĵغ�
	var		InRoadNo_Send;			// ���ڹ��
	var     hisInRoadNo_Send;		// ��ʷ���ڹ��
	var		InRoadType_Send;		// ���ڹ��������� 1���߼����� 2����������  3������
	var     hisInRoadType_Send;  // ��ʷ���ڹ��������� 1���߼����� 2����������  3������
	var    AddPosition_Send;		// �������λ��
	var    hisAddPosition_Send;		// ��ʷ�������λ��
	var    AddPositionType_Send;	// ������ӹ��������� 1���߼����� 2����������  3������
	var    hisAddPositionType_Send;	// ��ʷ������ӹ��������� 1���߼����� 2����������  3������
	var		ForwardRoad_Send;		// ��һ�������Ҫȥ�ĸ����Σ���
	var		Mode_Send;				// ��������ģʽ   1���̶�����ģʽ(RM)   2����ʽ��Ϣģʽ(ATP)   3��CBTCģʽ(ATO)  
	var		Direct;				// �г����з���   0������δ֪   1���������У�   2�����ң����У� 
	var		Wayno;				// ��·���
	var		Door;				// ����״̬  0���ر�   1����
	var		Jump;				// ��ͣ  0��ͣ   1����ͣ
	var		Ketain;				// �۳�  0������   1���۳�
	var		Alarm;				// ���Ͼ���  0����   1���о���
	var		TrainStop;			// �г�ͣ��, 0:�г�״̬	1: ͣ��״̬	
	var    AddPosition_Send_ex;//�⼸����������˫�����͵ĵ�4λ
	var   hisAddPosition_Send_ex;
	var   InRoadNo_Send_ex;
	var   hisInRoadNo_Send_ex;
	var   ForwardRoad_Send_ex;
	var   No_ex;
	var   send_array=0;
	///����Ϊ���յĳ�����Ϣ����
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
	var CarDoor=[];//����״̬ 0�ر� 1��
	var CarJump=[];//��ͣ 0ͣ 1��ͣ
	var CarKetain=[]; //�۳� 0���� 1��
	var CarAlarm=[];//���Ͼ��� 0�� 1��
	var CarTrainStop=[];//�г�ͣ�� 0�г� 1ͣ��
	var CarNum;
	var CarDelete=0;//ɾ�����α�־λ
//	var Carflag;
	var StationInCar=[];//�������ڵĳ�վ���
	var CarSignal=[];//�������ڹ����Ӧ���źŻ�
	var DelSessionName=null;//ɾ���Ĺ�����
	var CarStoped;//����ֹͣ����վ̨��
	var PlatformStoped=0;//����ͣվվ̨
	var GetDataCI=1;//�Ƿ���յ����Ŷ���Ϣ
	var Reset=false;
    function init()//websocket���ӳ�ʼ��
	{ 

    testWebSocket(); 
    }  

    function testWebSocket() { 
        websocket = new WebSocket(wsUri); //����һ���µ�����
	//	websocket.type=egret.Websocket.TYPE_BINATY;
		websocket.binaryType='arraybuffer';//����������ת��Ϊ����
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
	if(bufView[5]==133)//������յ�����0x85�������Ŷ���Ϣ
	{
		var k=(bufView[7]*256+bufView[6])*8;//������û��ʹ��
		var n,p;
		var data_p=new Array(8);	//ת������ʱ����	
		for(var j=0;j<(bufView[7]*256+bufView[6]);j++)//bufView[7]*256+bufView[6]Ϊ���Ŷ������ܳ���bufView[6]��[7]Ϊ����֡�е������ܳ�
		{
//			document.write(j+':');
			for(var i=0;i<8;i++)//�յ������ַ������ݣ����ÿ8λ��һ��
			{			
				n=bufView[14+j].toString(2);//����ת��Ϊ�������ַ��ͣ����磺0xaaת��Ϊ10101010���ַ���ʽ
				
				for(p=0;p<n.length;p++)
				{
					data_p[p]=n[n.length-p-1];	//���ַ����Ǵӵ����߶������ַ����ĵ�λ���������ĸ����ֵ�λ
					data_p[p]=parseInt(data_p[p]);//�ַ�ת���֣������������0��1���ַ���
				}
				for(p=n.length;p<8;p++)
				{
					data_p[p]=0;//������ݱ�0x80С�������ָ߼�λΪ0���������ʱ��Ҫ��ȱ��λ����
				}
//				if(i<n.length)
//				{
				data_CI[8*j+i]=data_p[i];//����ʱ�����е����ݴ���ڴ��Ŷ�������
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
			if((8*j+i)>10503)//��������˴��Ŷӵ�������������ѭ��
			{
				
				break;		
			}
		}
		
			for(CarStoped=9283;CarStoped<9979;CarStoped++)//�����г�ͣ�ȷ���
			{
				if(equittype[CarStoped]=="վ̨" && data_CI[CarStoped]==1 &&command[CarStoped]=="�г�ͣ��")
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
////				sed(["fc",PlatformStoped,0]);//ԭ���Ĵ���
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
	else if(bufView[5]==230)//������յ�����0xe6������ʱ������Ϣ
		{
//			flag=0;
			axle_speed=bufView[13]*256+bufView[12];//��������ֵ
			axle_session_name=bufView[11]*256+bufView[10];//���κţ���Ӧ���ݿ��б��
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
	else if (bufView[5]==229 && bufView[8]==169)//�յ�����0xe5��������Ϣ������Ϊ0xa9
		{
			var CarInRoadNoName;//�������ڹ����
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
						CarPVID.splice(CarNum,CarPVIDString.length);// �����
						CarTID.splice(CarNum,CarTIDString.length);// �����
						CarSID.splice(CarNum,CarSIDString.length);// ���к�
						CarDID.splice(CarNum,CarDIDString.length);// Ŀ�ĵغ�
						CarType.splice(CarNum,1);// ����   1���ƻ���   2��Ŀ�ĵس�   3���˹���   4�������˹���
						CarShowType.splice(CarNum,1);// ʶ�����ʾ���� 1: �����+Ŀ�ĵغ� 2:�����+Ŀ�ĵغ�
						CarInRoadNo.splice(CarNum,1);// ���ڹ��
						CarhisInRoadNo.splice(CarNum,1);// ��ʷ���ڹ��
						CarInRoadType.splice(CarNum,1);// ���ڹ��������� 1���߼����� 2����������  3������
						CarhisInRoadType.splice(CarNum,1);// ��ʷ���ڹ��������� 1���߼����� 2����������  3������
						CarAddPosition.splice(CarNum,1);// �������λ��
						CarhisAddPosition.splice(CarNum,1);// ��ʷ�������λ��
						CarAddPositionType.splice(CarNum,1);// ������ӹ��������� 1���߼����� 2����������  3������
						CarhisAddPositionType.splice(CarNum,1);	// ��ʷ������ӹ��������� 1���߼����� 2����������  3������
						CarForwardRoad.splice(CarNum,1);// ��һ�������Ҫȥ�ĸ����Σ���
						CarMode.splice(CarNum,1);// ��������ģʽ   1���̶�����ģʽ(RM)   2����ʽ��Ϣģʽ(ATP)   3��CBTCģʽ(ATO) 
						CarDirect.splice(CarNum,1);// �г����з���   0������δ֪   1���������У�   2�����ң����У�
						CarDoor.splice(CarNum,1);//����״̬
						CarJump.splice(CarNum,1);//��ͣ
						CarKetain.splice(CarNum,1);//�۳�
						CarAlarm.splice(CarNum,1);//���Ͼ���
						CarTrainStop.splice(CarNum,1);//�г�ͣ��
						CarSignal.splice(CarNum,1);
						StationInCar.splice(CarNum,1);
						CarDelete=0;
						CarNum=0;
						break;
					}
					else
					{
					CarPVID[CarNum]=CarPVIDString;// �����
					CarTID[CarNum]=CarTIDString;// �����
					CarSID[CarNum]=CarSIDString;// ���к�
					CarDID[CarNum]=CarDIDString;// Ŀ�ĵغ�
					CarType[CarNum]=bufView[56];// ����   1���ƻ���   2��Ŀ�ĵس�   3���˹���   4�������˹���
					CarShowType[CarNum]=bufView[57];// ʶ�����ʾ���� 1: �����+Ŀ�ĵغ� 2:�����+Ŀ�ĵغ�
					CarInRoadNo[CarNum]=bufView[58]+bufView[59]*256;// ���ڹ��
					CarhisInRoadNo[CarNum]=bufView[60]+bufView[61]*256;// ��ʷ���ڹ��
					CarInRoadType[CarNum]=bufView[62];// ���ڹ��������� 1���߼����� 2����������  3������
					CarhisInRoadType[CarNum]=bufView[63];// ��ʷ���ڹ��������� 1���߼����� 2����������  3������
					CarAddPosition[CarNum]=bufView[64]+bufView[65]*256;// �������λ��
					CarhisAddPosition[CarNum]=bufView[66]+bufView[67]*256;// ��ʷ�������λ��
					CarAddPositionType[CarNum]=bufView[68];// ������ӹ��������� 1���߼����� 2����������  3������
					CarhisAddPositionType[CarNum]=bufView[69];	// ��ʷ������ӹ��������� 1���߼����� 2����������  3������
					CarForwardRoad[CarNum]=bufView[70]+bufView[71]*256;// ��һ�������Ҫȥ�ĸ����Σ���
					CarMode[CarNum]=bufView[72];// ��������ģʽ   1���̶�����ģʽ(RM)   2����ʽ��Ϣģʽ(ATP)   3��CBTCģʽ(ATO) 
					CarDirect[CarNum]=bufView[73];// �г����з���   0������δ֪   1���������У�   2�����ң����У�
					CarDoor[CarNum]=bufView[75];//����״̬
					CarJump[CarNum]=bufView[79];//��ͣ
					CarKetain[CarNum]=bufView[83];//�۳�
					CarAlarm[CarNum]=bufView[87];//���Ͼ���
					CarTrainStop[CarNum]=bufView[91];//�г�ͣ��
					CarInRoadNoName=axle_section[CarInRoadNo[CarNum]-1][1];
					for(NumSignal=0;NumSignal<225;NumSignal++)
					{
						if(CarInRoadNoName==signal[NumSignal][8])
						{
							CarSignal[CarNum]=NumSignal+1;//������Ӧ��ǰ���źŻ�
							break;
						}
						if(NumSignal==225)
						CarSignal[CarNum]=NumSignal+1;//������Ӧ��ǰ���źŻ�
					}
					for(NumPlatform=0;NumPlatform<58;NumPlatform++)	
					{
						if(CarInRoadNo[CarNum]==platform[NumPlatform][7])
						{
							StationInCar[CarNum]=NumPlatform+1;//������Ӧ��վ
							break;
						}							
					}
					if(NumPlatform==58)
					{
						StationInCar[CarNum]=NumPlatform+1;//������Ӧ��վ
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
				CarDoor.push(bufView[75]);//����״̬
				CarJump.push(bufView[79]);//��ͣ
				CarKetain.push(bufView[83]);//�۳�
				CarAlarm.push(bufView[87]);//���Ͼ���
				CarTrainStop.push(bufView[91]);//�г�ͣ��
				CarInRoadNoName=axle_section[CarInRoadNo[CarNum]-1][1];
				for(NumSignal=0;NumSignal<225;NumSignal++)
				{
					if(CarInRoadNoName==signal[NumSignal][8])
					{
						CarSignal.push(NumSignal+1);//������Ӧ��ǰ���źŻ�
						break;
					}					
				}
				for(NumPlatform=0;NumPlatform<58;NumPlatform++)	
				{
					if(CarInRoadNo[CarNum]==platform[NumPlatform][7])
					{
						StationInCar.push(NumPlatform+1);//������Ӧ��վ
						break;
					}
				}
				if(NumSignal==225)
				{
					CarSignal.push(NumSignal+1);//������Ӧ��ǰ���źŻ�
				}
				if(NumPlatform==58)
				{
					StationInCar.push(NumPlatform+1);//������Ӧ��վ
				}
				Carflag();
			}
			}
			//for(var i=0;i<CarNo.length;i++)//�ҵ���վ����վ̨
//			{								
//				CarInRoadNoName=axle_section[CarInRoadNo[i]-1][1];
//				for(var j=0;j<225;j++)
//					if(CarInRoadNoName==signal[j][8])
//					{
//						CarSignal.push(j+1);//������Ӧ��ǰ���źŻ�
//						break;
//					}
//				for(var k=0;k<58;k++)	
//				{
//					if(CarInRoadNo==platform[k][7])
//					{
//						StationInCar.push(k+1);//������Ӧ��վ
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
/*		if(send_type=='t')//֡����,��·
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=='s')//����
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=='z')//վ̨
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='q')//��ȡ��
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='c')//ģ���г�
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='y')//������·
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='r')//���˽�
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='d')//���/���
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=='p')//��ʱ����,δ���յ���Ϣ
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="sf")//�źŷ���
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="sr")//�ź��ؿ�
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=="q_j")//���ʽ�
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=="a_c")//��ӳ���
	{
		send_datalen[0]='\x3c';
		send_datalen[1]='\x00';
	}
	else if(send_type=="setr")//��ӳ���
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	if(send_type=='t')//��·
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
	else if(send_type=='s')//����
	{
//		equit_name=173;
		
		if(button_daocha==1)//��λ
		{
		send_button1='\x00';
		send_button1_ex='\x01';
		}
		else if(button_daocha==2)//��λ
		{
		send_button1='\x00';
		send_button1_ex='\x02';
		}
		else if(button_daocha==3)//����
		{
		send_button1='\x00';
		send_button1_ex='\x03';
		}
		else if(button_daocha==4)//����
		{
		send_button1='\x00';
		send_button1_ex='\x05';
		}
		else if(button_daocha==5)//����
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
	else if(send_type=='z')//վ̨
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
	else if(send_type=='q')//��ȡ��
	{
//		equit_name=10;//���͵����źŻ������ݿ��еı���
		send_command='\x00';
		send_command_ex='\x1a';
//		send_button1='\x00';
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
//		send_button2_ex=unum[equit_name_end+1];
//		send_button=send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2;
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='c')//ģ���г�
	{
		//���͵����źŻ������ݿ��еı���
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
	else if(send_type=='y')//������·�����Ƚ��е�����Ӧ�Ĳ���
	{
//		equit_name=13;//���͵����źŻ��������λ���еı���
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
	else if(send_type=='r')//���˽�
	{
//		equit_name=13;//���͵����źŻ������ݿ��еı���
		send_command='\x00';
		send_command_ex='\x45';
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='d')//���/���
	{
//		equit_name=1;//���͵����źŻ������ݿ��еı���
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
	else if(send_type=='p')//��ʱ����
	{
//		equit_name=1;//���͵����߼����������ݿ��еı���
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
	else if(send_type=="sf" || send_type=="sr")//�źŷ���,�ź��ؿ�
	{		
					//���͵����źŻ������ݿ��еı���
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
//	else if(send_type=="s_r")//�ź��ؿ�
//	{
//				//���͵����źŻ������ݿ��еı���
//		send_command='\x00';
//		send_command_ex='\xb5';
//		send_button1='\x00';
//		send_button1_ex='\x00';
//		send_button2_ex=unum[parseInt(equit_name)-parseInt(equit_name/256)*256];
//		send_button2=unum[parseInt(equit_name/256)];
//		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
//	}
	else if(send_type=="q_j")//���ʽ�
	{
//		equit_name=144;//���͵��Ǽ�������/�������λ
		send_command='\x00';
		send_command_ex='\x5a';
		send_button1=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1_ex=unum[parseInt(parseInt(equit_name)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="setr")//���ú�ģʽ
	{
//		equit_name=144;//���͵����źŻ������ݿ����λ
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
	else if(send_type=="a_c")//��ӳ���
	{
		PVID=new Array(10);				//�����
		TID=new Array(10);				//�����
		SID=new Array(10);				//���к�
		DID=new Array(10);				//Ŀ�ĵغ�
//		equit_name=144;//���͵��Ǽ�������/�������λ
		send_command='\x00';
		send_command_ex='\xa9';
		No='\x06';				//�������
//		PVID=new Array(10);				//�����
//		TID=new Array(10);				//�����
//		SID=new Array(10);				//���к�
//		DID=new Array(10);				//Ŀ�ĵغ�
		for(var i=0;i<10;i++)
		{
			PVID[i]='\x00';
			TID[i]='\x00';
			SID[i]='\x00';
			DID[i]='\x00';
		}
		Type='\x01';				// ����   1���ƻ���   2��Ŀ�ĵس�   3���˹���   4�������˹���
		ShowType='\x02';			// ʶ�����ʾ���� 1: �����+Ŀ�ĵغ� 2:�����+Ŀ�ĵغ�
		InRoadNo='\x00';
		InRoadNo_ex='\x01';			// ���ڹ��
		RoadDeveieType='\x02';		// ���ڹ��������� 1���߼����� 2����������  3������
		RoadDeviveFrom='\x00';
		RoadDeviveFrom_ex='\x15';		// ǰһ����������ĸ����ο����ģ���
		RoadDeviveTo='\x00';		// ��һ�������Ҫȥ�ĸ����Σ���
		RoadDeviveTo_ex='\x20';
		Mode='\x03';				// ��������ģʽ   1���̶�����ģʽ(RM)   2����ʽ��Ϣģʽ(ATP)   3��CBTCģʽ(ATO)  
		Direct='\x02';				// �г����з���   0������δ֪   1���������У�   2�����ң����У� 
		Wayno='\x15';				// ��·���
		Door='\x00';				// ����״̬  0���ر�   1����
		Jump='\x00';				// ��ͣ  0��ͣ   1����ͣ
		Ketain='\x00';				// �۳�  0������   1���۳�
		Alarm='\x00';				// ���Ͼ���  0����   1���о���
		TrainStop='\x00';			// �г�ͣ��, 0:�г�״̬	1: ͣ��״̬	
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
	function SetSendtype()//���÷������ͣ�ȷ������֡��ע�⣺˫�ֽڶ����Ե��ֽ���ǰ����
	{
		//���������������Ĳ���
	if(send_type=='t')//֡����,��·
	{
		send_datalen[0]='\x06';//֡���ȸ�4λ
		send_datalen[1]='\x00';//֡���ȵ�4λ
	}
	else if(send_type=='s')//����
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=='z')//վ̨
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='q')//��ȡ��
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='c')//ģ���г�
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='y')//������·
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='r')//���˽�
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=='d')//���/���
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=='p')//��ʱ����,δ���յ���Ϣ
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="sf")//�źŷ���
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="sr")//�ź��ؿ�
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=="q_j")//���ʽ�
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=="ac")//��ӳ���
	{
		send_datalen[0]='\x48';
		send_datalen[1]='\x00';
	}
	else if(send_type=="setr")//���ú�ģʽ
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="zdl")//�����Զ���·
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="conr")//ȷ�Ϻ�ģʽ
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="qzdl")//ȷ��ȡ���Զ���·
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=="trl")//�������/���
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=="qtrl")//���ȷ�Ͻ��
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else if(send_type=="fc")//����ʱ����
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	//����Ϊ���ù��ϵ�ͨ�Ų���
	else if(send_type=="switchaccident")//�����������
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="signalaccident")//�źŻ���������
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="axleaccident")//�����������
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else if(send_type=="atb")//ATB��ť
	{
		send_datalen[0]='\x04';
		send_datalen[1]='\x00';
	}
	else  if(send_type=="doorfault")//�����Ź��ϰ�ť
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else  if(send_type=="door")//�����ſ��ذ�ť
	{
		send_datalen[0]='\x06';
		send_datalen[1]='\x00';
	}
	else  if(send_type=="reset")//��λ
	{
		send_datalen[0]='\x02';
		send_datalen[1]='\x00';
	}
	//����Ϊ���������Ĳ���
	if(send_type=='t')//��·
	{
//		equit_name=21;
//		equit_name_end=23;

		send_command='\x00';//�������͵�4λ
		send_command_ex='\x05';//�������͸�4λ
//		send_button1='\x00';
//		send_button2='\x00';
		send_button1=unum[parseInt((parseInt(equit_name)+1)/256)];//���͵ĵ�һ����Ϣ��˫�֣��ĸ�4λ��������parseInt()���ڣ�1����������ݵ��ַ���ת��Ϊ����ֵ 2����С������������ȡ��
		send_button2=unum[parseInt((parseInt(equit_name_end)+1)/256)];//���͵ĵڶ�����Ϣ��˫�֣��ĸ�4λ
		send_button1_ex=unum[parseInt(parseInt(equit_name)+1)-parseInt((parseInt(equit_name)+1)/256)*256];//���͵ĵ�һ����Ϣ��˫�֣��ĵ�4λ
		send_button2_ex=unum[parseInt(parseInt(equit_name_end)+1)-parseInt((parseInt(equit_name_end)+1)/256)*256];//���͵ĵ�һ����Ϣ��˫�֣��ĵ�4λ

//		console.log(parseInt((equit_name+1)/256));
//		console.log(parseInt((equit_name_end+1)/256));
//		console.log(parseInt(equit_name+1)-parseInt((equit_name+1)/256)*256);
//		console.log(parseInt(equit_name_end+1)-parseInt((equit_name_end+1)/256)*256);

		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;//������Ŀǰֻ����ôд�������͵Ĺ����л��������
	}
	else if(send_type=='s')//����
	{
//		equit_name=173;
		
		if(button_daocha==1)//��λ
		{
		send_button1='\x00';
		send_button1_ex='\x01';
		}
		else if(button_daocha==2)//��λ
		{
		send_button1='\x00';
		send_button1_ex='\x02';
		}
		else if(button_daocha==3)//����
		{
		send_button1='\x00';
		send_button1_ex='\x03';
		}
		else if(button_daocha==4)//����
		{
		send_button1='\x00';
		send_button1_ex='\x04';
		}
		else if(button_daocha==5)//ȷ�Ͻ���
		{
		send_button1='\x00';
		send_button1_ex='\x05';
		}
		else if(button_daocha==6)//����
		{
		send_button1='\x00';
		send_button1_ex='\x06';
		}
		else if(button_daocha==7)//���
		{
		send_button1='\x00';
		send_button1_ex='\x07';
		}
		else if(button_daocha==8)//ȷ�Ͻ��
		{
		send_button1='\x00';
		send_button1_ex='\x08';
		}
		else if(button_daocha==9)//ǿ��ת��
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
	else if(send_type=='z')//վ̨
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
	else if(send_type=='q')//��ȡ��
	{
//		equit_name=10;//���͵����źŻ������ݿ��еı���
		send_command='\x00';
		send_command_ex='\x1a';
//		send_button1='\x00';
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
//		send_button2_ex=unum[equit_name_end+1];
//		send_button=send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2;
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='c')//ģ���г�
	{
		//���͵����źŻ������ݿ��еı���
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
	else if(send_type=='y')//������·�����Ƚ��е�����Ӧ�Ĳ���
	{
//		equit_name=13;//���͵����źŻ��������λ���еı���
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
	else if(send_type=='r')//���˽�
	{
//		equit_name=13;//���͵����źŻ������ݿ��еı���
		send_command='\x00';
		send_command_ex='\x45';
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=='d')//���/���
	{
//		equit_name=1;//���͵����źŻ������ݿ��еı���
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
	else if(send_type=='p')//��ʱ����
	{
//		equit_name=1;//���͵����߼����������ݿ��еı���
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
	else if(send_type=="sf" || send_type=="sr")//�źŷ���,�ź��ؿ�
	{		
					//���͵����źŻ������ݿ��еı���
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
//	else if(send_type=="s_r")//�ź��ؿ�
//	{
//				//���͵����źŻ������ݿ��еı���
//		send_command='\x00';
//		send_command_ex='\xb5';
//		send_button1='\x00';
//		send_button1_ex='\x00';
//		send_button2_ex=unum[parseInt(equit_name)-parseInt(equit_name/256)*256];
//		send_button2=unum[parseInt(equit_name/256)];
//		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
//	}
	else if(send_type=="q_j")//���ʽ�
	{
//		equit_name=144;//���͵��Ǽ�������/�������λ
		send_command='\x00';
		send_command_ex='\x5a';
		send_button1=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1_ex=unum[parseInt(parseInt(equit_name)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="i")//ҳ��ˢ�·��ͳ�����Ϣ
	{
//		equit_name=144;//���͵��Ǽ�������/�������λ
//		send_command='\x00';
		send_command='\x6a';
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_command+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="zdl")//�Զ���·
	{
//		equit_name=144;//���͵����źŻ������ݿ����λ
		send_command='\x00';
		send_command_ex='\xa4';
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button2_ex=unum[parseInt(equit_name_end)-parseInt(parseInt(equit_name_end)/256)*256];
		send_button2=unum[parseInt(parseInt(equit_name_end)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="qzdl")//ȷ��ȡ���Զ���·
	{
//		equit_name=144;//���͵����źŻ������ݿ����λ
		send_command='\x00';
		send_command_ex='\xad';
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="trl")//������������
	{
//		equit_name=144;//���͵����źŻ������ݿ����λ
		send_command='\x00';
		send_command_ex='\xb1';
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="qtrl")//���ȷ�Ͻ��
	{
//		equit_name=144;//���͵����źŻ������ݿ����λ
		send_command='\x00';
		send_command_ex='\xb2';
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="fc")//����ʱ����
	{
//		equit_name=144;//���͵��ǳ�վ�����ݿ����λ
		send_command='\x00';
		send_command_ex='\xb7';
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="setr")//���ú�ģʽ
	{
//		equit_name=144;//���͵����źŻ������ݿ����λ
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
	else if(send_type=="conr")//ȷ�����ú�ģʽ
	{
//		equit_name=144;//���͵����źŻ������ݿ����λ
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
	else if(send_type=="ac")//��ӳ���
	{
//		console.log(PVID);
//		console.log(TID);
//		console.log(SID);
//		console.log(DID);
//		equit_name=144;//���͵��Ǽ�������/�������λ
		send_command='\x00';
		send_command_ex='\xa9';
		if(equit_name_end==1)//��ӳ���
		{
			var SendNo=parseInt(Math.random()*256);
			for(var i=0;i<CarNo.length;i++)
				if(SendNo==CarNo[i])
				{
					i=0;	
					SendNo=parseInt(Math.random()*256);
				}
		No_ex=unum[SendNo];				//�������
		No='\x00';
		}
		else if(equit_name_end==2||equit_name_end==3)
		{
			No_ex=unum[parseInt(parseInt(button_daocha))-parseInt(parseInt(button_daocha)/256)*256];
			No=unum[parseInt(parseInt(button_daocha)/256)];
		}
//		PVID=new Array(10);				//�����
//		TID=new Array(10);				//�����
//		SID=new Array(10);				//���к�
//		DID=new Array(10);				//Ŀ�ĵغ�
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
		Type_Send=unum[parseInt(Type)];				// ����   1���ƻ���   2��Ŀ�ĵس�   3���˹���   4�������˹���
		ShowType='\x02';			// ʶ�����ʾ���� 1: �����+Ŀ�ĵغ� 2:�����+Ŀ�ĵغ�
		InRoadNo_Send=unum[parseInt(parseInt(equit_name)/256)];
		InRoadNo_Send_ex=unum[parseInt(parseInt(equit_name))-parseInt(parseInt(equit_name)/256)*256];
		hisInRoadNo_Send='\x00';// ���ڹ��
		hisInRoadNo_Send_ex='\x00';
		InRoadType_Send='\x02';// ���ڹ��������� 1���߼����� 2����������  3������
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
//		RoadDeviveFrom_ex='\x15';		// ǰһ����������ĸ����ο����ģ���
//		RoadDeviveTo='\x00';		// ��һ�������Ҫȥ�ĸ����Σ���
//		RoadDeviveTo_ex='\x20';
		Mode_Send=unum[parseInt(Mode)];			// ��������ģʽ   1���̶�����ģʽ(RM)   2����ʽ��Ϣģʽ(ATP)   3��CBTCģʽ(ATO)  
		Direct='\x00';				// �г����з���   0������δ֪   1���������У�   2�����ң����У� 
		Wayno='\x15';				// ��·���
		Door='\x00';				// ����״̬  0���ر�   1����
		Jump='\x00';				// ��ͣ  0��ͣ   1����ͣ
		Ketain='\x00';				// �۳�  0������   1���۳�
		Alarm='\x00';				// ���Ͼ���  0����   1���о���
		TrainStop='\x00';			// �г�ͣ��, 0:�г�״̬	1: ͣ��״̬	
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex  +''+send_command+''+BCCtype_send_ex+''+BCCtype_send+''+DataType_ex+''+DataType+''+No_ex+''+No+''+PVID_Send[0]+''+PVID_Send[1]+''+PVID_Send[2]+''+PVID_Send[3]+''+PVID_Send[4]+''+PVID_Send[5]+''+PVID_Send[6]+''+PVID_Send[7]+''+PVID_Send[8]+''+PVID_Send[9]+''+TID_Send[0]+''+TID_Send[1]+''+TID_Send[2]+''+TID_Send[3]+''+TID_Send[4]+''+TID_Send[5]+''+TID_Send[6]+''+TID_Send[7]+''+TID_Send[8]+''+TID_Send[9]+''+SID_Send[0]+''+SID_Send[1]+''+SID_Send[2]+''+SID_Send[3]+''+SID_Send[4]+''+SID_Send[5]+''+SID_Send[6]+''+SID_Send[7]+''+SID_Send[8]+''+SID_Send[9]+''+DID_Send[0]+''+DID_Send[1]+''+DID_Send[2]+''+DID_Send[3]+''+DID_Send[4]+''+DID_Send[5]+''+DID_Send[6]+''+DID_Send[7]+''+DID_Send[8]+''+DID_Send[9]+''+Type_Send+''+ShowType+''+InRoadNo_Send_ex+''+InRoadNo_Send+''+hisInRoadNo_Send_ex+''+hisInRoadNo_Send+''+InRoadType_Send+''+hisInRoadType_Send+''+AddPosition_Send_ex+''+AddPosition_Send+''+hisAddPosition_Send_ex+''+hisAddPosition_Send+''+AddPositionType_Send+''+hisAddPositionType_Send+''+ForwardRoad_Send_ex+''+ForwardRoad_Send+''+Mode_Send+''+Direct+''+Wayno+''+Door+''+Jump+''+Ketain+''+Alarm+''+TrainStop+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	//����Ϊ���ù��ϵ�ͨ�Ų���
	else if(send_type=="switchaccident")//�����������
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
	else if(send_type=="signalaccident")//�źŻ���������
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
	else if(send_type=="axleaccident")//�����������
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
	else if(send_type=="atb")//ATB��ť
	{
//		equit_name=144;//���͵��ǳ�վ�����ݿ����λ
		send_command='\x00';
		send_command_ex='\xbb';
		send_button1_ex=unum[parseInt(equit_name)-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else if(send_type=="doorfault")//�����Ź��ϰ�ť
	{
//		equit_name=144;//���͵��ǳ�վ�����ݿ����λ
		send_command='\x00';
		send_command_ex='\xbc';
		send_button1_ex=unum[parseInt(parseInt(equit_name))-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button2_ex=unum[parseInt(parseInt(equit_name_end))-parseInt(parseInt(equit_name_end)/256)*256];
		send_button2=unum[parseInt(parseInt(equit_name_end)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else  if(send_type=="door")//�����ſ��ذ�ť
	{
		send_command='\x00';
		send_command_ex='\xa2';
		send_button1_ex=unum[parseInt(parseInt(equit_name))-parseInt(parseInt(equit_name)/256)*256];
		send_button1=unum[parseInt(parseInt(equit_name)/256)];
		send_button2_ex=unum[parseInt(parseInt(equit_name_end))-parseInt(parseInt(equit_name_end)/256)*256];
		send_button2=unum[parseInt(parseInt(equit_name_end)/256)];
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_button1_ex+''+send_button1+''+send_button2_ex+''+send_button2+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	else  if(send_type=="reset")//��λ
	{
		send_command='\x00';
		send_command_ex='\xa1';
		send_stream=send_head+''+send_shoubulen+''+send_version+''+send_fasongxuhao+''+send_jieshouxuhao+''+send_streamtype+''+send_datalen+''+send_command_ex+''+send_command+''+send_CRCh+''+send_CRCl+''+send_end;
	}
	websocket.send(send_stream);//��������
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
		  