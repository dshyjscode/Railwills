var StringData;
var a;
function GetData()
{
	a=svg.CarDoNum;
	var temp=""
	var temp2=""
	var temp3=""
	var temp4=""
	var hour;//时
	var minute;//分
	var station;//站台序号
	var time;
	var IsNew=false;//表示是否为新增的车次
	var CarNum=[];//修改的车次号
	var CarChangePosition=[];//修改的车次信息，包括站台和时间
	var CarNewPosition=[];//添加的车次信息，包括站台和时间
	var CarTime=[];//车辆的时刻数组
	var CarStation=[];//车辆站台号
//	var CarDirection=[];//列车的上下行，up为上行，down为下行
	var CarDirNum=[];//列车上下行对应的车次号及其上下行,1上行，2下行
	var CarDel=[];//删除的车次号
	var CarChangeNum=[];//修改的车次号
	var CarChangeNewNum=[];//修改的新车次号
	var CarChangeOldNum=[];//修改的旧车次号
	var CarAddChange=[];//新增的车次号 用于车次新增而又修改的情况
	var IsChange=false;//表示该删除的车次号是否被修改过
	for(var j in a.Where)//新增车辆的上下行
	{
		temp2+=j+":"+a.Where[j];
		CarDirNum.push(parseInt(j))
		//CarDirNum.push(";")//中间用";"分割功能中的每部分
		if(a.Where[j]=="up")
		CarDirNum.push(1);
		else if(a.Where[j]=="down")
		CarDirNum.push(2);
		//CarDirNum.push(";")		
	}
	for(var j in a.addCar)
	{
		for(var i=0;i<CarDirNum.length/2;i++)
		{
			if(CarDirNum[i*2+1]!=a.addCar[j])//如果新增的车次号和where里的不相等
			CarAddChange.push(a.addCar[j]);//就加入数组中
		}		
	}
	if(CarDirNum.length==0)//如果数组是空的，加入一个字符'a'
		CarDirNum.push('a');
	for(var m in a.change)//车次号修改的车辆
	{
		temp4+=m+":"+a.change[m];	
		CarChangeOldNum.push(parseInt(m))
		CarChangeNewNum.push(a.change[m])

	//	CarChangeNum.push(parseInt(m))
	//	CarChangeNum.push(a.change[m])		
	}
		for(var s=0;s<CarChangeOldNum.length;s++)//处理变化的车次号
		{
			for(var p=s+1;p<CarChangeOldNum.length;p++)
			{
				if(CarChangeOldNum[p]==CarChangeNewNum[s])
				{
					CarChangeOldNum.splice(p,1);
					CarChangeNewNum.splice(s,1);
					break;
				}
			}
		}
		for(var s=0;s<CarChangeOldNum.length;s++)
		{
			CarChangeNum.push(CarChangeOldNum[s]);
			CarChangeNum.push(CarChangeNewNum[s]);
		}
	if(CarChangeNum.length==0)//如果数组是空的，加入一个字符'a'
		CarChangeNum.push('a');
	for(var i in a.coord)//车辆的坐标和停靠站台
	{
		temp+=i+":"+a.coord[i];	
//		CarNum.push(parseInt(i))
		for(var t=0;t<a.coord[i].length;t++)
		{
			minute=Math.ceil((a.coord[i][t].x-14)/svg.TimeX);
			hour=Math.floor(minute/60)+6;
			minute=minute-(hour-6)*60;
			if(minute<10)
				minute="0"+minute.toString();
			else
				minute=minute.toString();
			time=hour.toString()+":"+minute;
			station=(a.coord[i][t].y-50)/100+1;
			CarStation.push(station)
			CarTime.push(time)			
		}
		for(var t=0;t<CarDirNum.length;t++)
		{
			if(parseInt(i)==CarDirNum[t])//如果是新增的车辆
			{
				CarNewPosition.push(parseInt(i));//车次号
				CarNewPosition.push(";")
				CarNewPosition.push(CarStation);//车站
				CarNewPosition.push(";")
				CarNewPosition.push(CarTime);//时刻
				CarNewPosition.push(";")
				IsNew=true;
				break;
			}
		}
		for(var t=0;t<CarAddChange.length;t++)//如果是新增后再修改车次的车辆
		{
			if(parseInt(i)==CarAddChange[t] && !IsNew)
			{
				CarNewPosition.push(parseInt(i));//车次号
				CarNewPosition.push(";")
				CarNewPosition.push(CarStation);//车站
				CarNewPosition.push(";")
				CarNewPosition.push(CarTime);//时刻
				CarNewPosition.push(";")
				IsNew=true;
				break;
			}
		}
		if(!IsNew)//如果是时刻修改的车次
		{
			CarChangePosition.push(parseInt(i));//车次号
			CarChangePosition.push(";")
			CarChangePosition.push(CarStation);//车站
			CarChangePosition.push(";")
			CarChangePosition.push(CarTime);//时刻
			CarChangePosition.push(";")
		}
		IsNew=false;
		CarStation=[]
		CarTime=[]	
	}
	if(CarNewPosition.length==0)//如果数组是空的，加入一个字符'a'
		CarNewPosition.push('a');
	if(CarChangePosition.length==0)//如果数组是空的，加入一个字符'a'
		CarChangePosition.push('a');
	for(var k in a.del)//删除车次
	{
		temp3+=k+":"+a.del[k];
			
		for(var i=0;i<CarChangeNum.length/2;i++)
		{
			if(parseInt(a.del[k])==CarChangeNum[2*i])
			{
				CarDel.push(parseInt(CarChangeNum[2*i+1]));
				IsChange=true;
				break;
			}
		}
		if(!IsChange)
		{
			CarDel.push(parseInt(a.del[k]));			
		}
		IsChange=false;
	}
	if(CarDel.length==0)//如果数组是空的，加入一个字符'a'
		CarDel.push('a');
	//转换为字符串
	StringData=CarDel.join(",");//先添加删除的部分
	StringData+=".";//用.分割功能
	StringData+=CarChangePosition.join(",");//添加时刻发生修改的车次
	StringData+=".";//用.分割功能
	StringData+=CarChangeNum.join(",")//添加车次号修改的车次
	StringData+=".";//用.分割功能
	StringData+=CarDirNum.join(",")//添加新增上下行的车次
	StringData+=".";//用.分割功能
	StringData+=CarNewPosition.join(",")//添加时刻添加的车次
	SendToChange();
}
function SendToChange()
{

    if (window.XMLHttpRequest)
    {// code for IE7, Firefox, Opera, etc.
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var k=xmlhttp.responseText;
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./ChangeTable.asp?StringData="+StringData,true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}