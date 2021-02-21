//写cookies
function setCookie(type,value) 
{ 
    $.cookie(type, value, { path: '/' });
} 

//读取cookies 
function getCookie(type) 
{        
    
	var cookieNet = $.cookie(type);
	return cookieNet
} 
//字符串替换位操作
function rePlaceStr(str,i,d){
	var string
	if(i==1){
		string=d+str.substr(1)
	}
	else if(i==str.length){
		string=str.substr(0,i-1)+d
	}
	else{
		string=str.substr(0,i-1)+d+str.substr(i)
	}
	return string
}

//删除cookies 
function delCookie(name) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
}

