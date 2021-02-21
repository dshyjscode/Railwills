var StartSignal=[];
var ToSignal=[];
function AutoRoad(a,b)//ATO模式下的自动进路排列
{
	//GetSignal("G01009");
}

function GetSignal(a,b)//得到进路的始端和终端信号机
{
	var NowPosition=a;
	var ToPosition=b;
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
            var GSignal=xmlhttp.responseText;
			var arrGSignal=GSignal.split(",");
			for(var i=0;i<(arrGSignal.length-1)/2;i++)
			{				
				for(var j=0;j<signal.length;j++)
				{
					if(arrGSignal[2*i]==signal[j][0])
						arrGSignal[2*i]=signal[j][1];
					if(arrGSignal[2*i+1]==signal[j][0])
						arrGSignal[2*i+1]=signal[j][1]
				}
				StartSignal.push(arrGSignal[2*i]);
				ToSignal.push(arrGSignal[2*i+1]);				
			}
			StartSignal.push(GSignal.split(",")[0]);
			builtRoad();
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./js/YXTFunction.asp?NowPosition="+NowPosition+"&ToPosition="+ToPosition,true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}
//GetSignal("G04013","G04003")