var TDCar;
var arrTDCar=[];
//for(var i=0;i<30;i++)
//    arrTDCar[i]=new Array(4);
	
var TDAdj;
var arrTDAdj=[];
//for(var i=0;i<3000;i++)
//    arrTDAdj[i]=new Array(6);
var TDAdj1;
var strAdj1;
var TDCar1;
var strCar1;

var AlexS;
var AlexSection=[];
var StationS;
var Station=[];
var StartTime;
var EndTime;
function ReadCarTD(a)
{

    var Car4TD=[];
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
			arrTDCar.splice(0,arrTDCar.length)
            TDCar=xmlhttp.responseText;
            Car4TD=TDCar.split(",");
            for(var j=0;j<(Car4TD.length-1)/4;j++)
			{
				arrTDCar.push(Car4TD);
				arrTDCar[j]=new Array(4);
                for(var i=0;i<4;i++)
                    arrTDCar[j][i]=Car4TD[i+4*j];
			}
			if(a==1)
			ReadAdjTD(BeforeT,AfterT,1)
			console.log(arrTDCar)
        }
    }
    if (xmlhttp!=null)
    {
		if(a==0)//运行图调用
        xmlhttp.open("GET","./TDCar.asp",true);
		else if(a==1)//时刻表调用
		xmlhttp.open("GET","./yxtNex/TDCar.asp",true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}

function ReadAdjTD(a,b,c)
{
	StartTime=a;
	EndTime=b;
    var Adj6TD=[];
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
			arrTDAdj.splice(0,arrTDAdj.length)
            TDAdj=xmlhttp.responseText;
            Adj6TD=TDAdj.split(",");
            for(var j=0;j<(Adj6TD.length-1)/7;j++)
			{
				arrTDAdj.push(Adj6TD[j]);
				arrTDAdj[j]=new Array(7);
                for(var i=0;i<7;i++)
                    arrTDAdj[j][i]=Adj6TD[i+7*j];
			}
			console.log(arrTDAdj)
			if(c==0)//画运行图
			AutoDraw();
			else if(c==1)//调用时刻表
			goTable();
			
        }
    }
    if (xmlhttp!=null)
    {
		if(c==0)
        xmlhttp.open("GET","./TDAdj.asp?StartTime="+StartTime+"&EndTime="+EndTime,true);
		else if(c==1)
		xmlhttp.open("GET","./yxtNex/TDAdj.asp?StartTime="+StartTime+"&EndTime="+EndTime,true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}
function WriteAdj1TD(str)
{	
	TDAdj1=str;
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
            strAdj1=xmlhttp.responseText;	
			console.log(strAdj1)
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./TDAdj1.asp?TDAdj1="+TDAdj1,true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}
function WriteCar1TD(str)
{	
	TDCar1=str;
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
            strCar1=xmlhttp.responseText;	
			console.log(strAdj1)
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./TDCar1.asp?TDCar1="+TDCar1,true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}
function TableCarTD()
{
    var Car4TD=[];
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
            TDCar=xmlhttp.responseText;
            Car4TD=TDCar.split(",");
            for(var j=0;j<(Car4TD.length-1)/4;j++)
			{
				arrTDCar.push(Car4TD);
				arrTDCar[j]=new Array(4);
                for(var i=0;i<4;i++)
                    arrTDCar[j][i]=Car4TD[i+4*j];
			}
			TableAdjTD();
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./TDCar.asp",true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}

function TableAdjTD()
{
    var Adj6TD=[];
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
            TDAdj=xmlhttp.responseText;
            Adj6TD=TDAdj.split(",");
            for(var j=0;j<(Adj6TD.length-1)/7;j++)
			{
				arrTDAdj.push(Adj6TD[j]);
				arrTDAdj[j]=new Array(7);
                for(var i=0;i<7;i++)
                    arrTDAdj[j][i]=Adj6TD[i+7*j];
			}
			//ReadBasicTD();
			goTable(arrTDCar,arrTDAdj);
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./TDAdj.asp",true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}

function ReadAlexSection()
{
	var arrAlexSection=[];
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
            AlexS=xmlhttp.responseText;
            arrAlexSection=AlexS.split(",");
            for(var j=0;j<(arrAlexSection.length-1)/2;j++)
			{
				AlexSection.push(arrAlexSection);
				AlexSection[j]=new Array(2);
                for(var i=0;i<2;i++)
				{
                    AlexSection[j][i]=arrAlexSection[i+2*j];
					if(i==0)
					{
						if(AlexSection[j][i].split("S")[0]!="南夏墅停车场")
						AlexSection[j][i]=AlexSection[j][i].split("S")[0]+"站";	
						else 
						AlexSection[j][i]=AlexSection[j][i].split("S")[0];
					}
				}
			}
		//	console.log(AlexSection)
			ReadStation()
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./AlexSection.asp",true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}

function ReadStation()
{
	var arrStation=[];
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
            StationS=xmlhttp.responseText;
            arrStation=StationS.split(",");
            Station.push(0);
            Station[0]=new Array(2);
            Station[0][0]="0";
            Station[0][1]="南夏墅停车场";
            for(var j=0;j<(arrStation.length-1)/2;j++)
			{
				Station.push(arrStation);
				Station[j+1]=new Array(2);
                for(var i=0;i<2;i++)
				{
                    Station[j+1][i]=arrStation[i+2*j];
				}
			}

            console.log(Station)
		//	console.log(Station)
		//	console.log(Station.length)
			for(var k=0;k<30;k++)
			{var id='S'+k
           var p='<p class="secP"><span class="colGreen secLeftFloat">图</span><span class="colRed secLeftFloat">断</span><span class="colRed" id='+id+'>'+Station[k][1]+'</span><span></span></p>'
				$('#svgFP').append(p)
				//document.getElementById("S"+Station[i][0]).innerHTML=Station[i][1];
			}	
			ReadCarTD(0);
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./Station.asp",true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}

