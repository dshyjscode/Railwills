
function CompareAdmPsw(str)
{
	var logindata;
	var PswResult;
	logindata=str;
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
			PswResult=xmlhttp.responseText;
			log(PswResult);
		}
	}
	if (xmlhttp!=null)
	{
		xmlhttp.open("GET","./AdmLogin.asp?logindata="+logindata,true);
		xmlhttp.send(null);
	}

	else
	{
		alert("Your browser does not support XMLHTTP.");
	}
	
}