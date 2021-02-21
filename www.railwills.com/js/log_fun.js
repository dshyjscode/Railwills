var SendLog;
var RecLog;
var arrRecLog=[];
function login_rw(SendLog)
{
	var Rec2Log=[];
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
            RecLog=xmlhttp.responseText;
            Rec2Log=RecLog.split(",");
			arrRecLog.splice(0,arrRecLog.length);
            for(var j=0;j<(Rec2Log.length-1)/2;j++)
			{
				arrRecLog.push(Rec2Log);
				arrRecLog[j]=new Array(2);
                for(var i=0;i<2;i++)
                    arrRecLog[j][i]=Rec2Log[i+2*j];
			}
			var Num=SendLog.split(",");
			if(Num[0]=='0')
			{
				disRadio();
				}
		//		pageClosed(arrRecLog);
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./LOGIN.asp?SendLog="+SendLog,true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
	
}

