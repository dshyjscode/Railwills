// JavaScript Document
/*AJAX php 数据库*/
var xmlhttp;
function XMLDoc(url,mes,cfunc)
{
if (window.XMLHttpRequest)
  {// IE7+, Firefox, Chrome, Opera, Safari 代码
  xmlhttp=new XMLHttpRequest();
  }
else
  {// IE6, IE5 代码
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
xmlhttp.onreadystatechange=cfunc;

xmlhttp.open("POST",url,true);
if(mes){
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	}
xmlhttp.send(mes);//"name=李紫玉"

}


function login_Function(){  
     
	var nm=$('#uname').val();
	var sn=$('#studentNum').val();
	var pa=$('#pass').val();
	var mes="uname="+nm+"&studentNum="+sn+"&pass="+pa;
	
	XMLDoc("http://localhost/www.railwills.comV2.6/yxtNex/php/login.php",mes,function()
	{   
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{    
			
            xml_str=xmlhttp.responseText;  
			                
            var xml_strs = new Array();                  // 定义一个数组

            xml_strs = xml_str.split(",");              // 字符分割
		    if(xml_strs.length==1) 
		    {
		         document.getElementById("errorMessages").innerHTML=xml_strs[0];
		    }
		    else
		    {   
			    var d = new Date();
                var hour= d.getHours();//得到小时数
                var minute= d.getMinutes();//得到分钟数
                var second= d.getSeconds();//得到秒数
			    document.getElementById("errorMessages").innerHTML="";
                document.getElementById("uname").value=xml_strs[0];
			    document.getElementById("studentNum").value=xml_strs[1]; 
				document.getElementById("pass").style.display="none"
				document.getElementById("passchange").style.display="none"
				document.getElementById("loginTime").style.display="block"
				document.getElementById("loginTime").innerHTML="登录时间："+"&nbsp"+hour+":"+minute+":"+second;
				document.getElementById("loginTip").innerHTML="已登录";  
				document.getElementById("loginTip").style.color="green";
		    }                      	
		}
	});
}
function login_Refresh(){
	            document.getElementById("errorMessages").innerHTML="";
                document.getElementById("uname").value="";
			    document.getElementById("studentNum").value=""; 
				document.getElementById("pass").style.display="inline"
				document.getElementById("passchange").style.display="inline"
				document.getElementById("pass").value="";
				document.getElementById("loginTime").style.display="none"
				document.getElementById("loginTip").innerHTML="未登录";  
				document.getElementById("loginTip").style.color="red";

}


function getBasicimages_Function(){  
     
	var mes=null;
	XMLDoc("http://localhost/www.railwills.comV2.6/yxtNex/php/basicimage.php",mes,function()
	{    
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{    
			
		   var xlm_str=xmlhttp.responseText;
		   
			   document.getElementById("tab").innerHTML=StrToArr(xlm_str);
		}
	});
}

function StrToArr(str){
     //将在php里加的“，”和“^”去掉，并转成数组
    var arr=str.split('^');
    var brr=[];
    for(var i in arr){
        brr.push(arr[i].split(','));
	}
	return initHtml(brr);
} 
function initHtml(arr){ 
    
	var str = "<tr><td>车次</td><td>始发站</td><td>发车时间</td><td>终到站</td><td>终到时间</td><td>中途停靠站</td><td>到站时间</td><td>开车时间</td></tr>";  
    for(var i in arr){
        str+='<tr>';
        for(var j in arr[i]){
            str+='<td>'+arr[i][j]+'</td>';
        }
        str+='</tr>';
    }
	return str;
	

}         

/*结束，最后分出去*/

