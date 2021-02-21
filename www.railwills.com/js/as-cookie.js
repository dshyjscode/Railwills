// JavaScript Document
$.cookie.json=true;

//写cookies
function setCookie(value) 
{ 
    $.cookie("网络连接", value, { path: '/' });
} 
//读取cookies 
function getCookie() 
{        
    
	var cookieNet = $.cookie('网络连接');
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
njsacmgetcookies();
bjsacmgetcookies();
jnsacmgetcookies();
tjsacmgetcookies();
szsacmgetcookies();
shsacmgetcookies();
TDgetcookies();
ADgetcookies();
RBCgetcookies();


function njsacmgetcookies(){ 
	 if(getCookie()== undefined){
		setCookie("00000000000000000000000000000") 
	 }
     setTimeout("njsacmgetcookies();",1000);
	 
	 if(getCookie().substr(9,1)=="1")
	 { 
		 alert("南京南站自律机连接状态更新") 
		 document.getElementById("yyfwqnjnzzljline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"南京南站自律机已连接"
		 var str = rePlaceStr(getCookie(),10,"2");
		 setCookie(str);
	 }
} 
function bjsacmgetcookies(){ 
	if(getCookie()== undefined){
		setCookie("00000000000000000000000000000") 
	 }
	
     setTimeout("bjsacmgetcookies();",1000);
    
	 if(getCookie().substr(0,1)=="1")
	 {
		 alert("北京南站自律机连接状态更新") 
		 document.getElementById("yyfwqbjnzzljline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"北京南站自律机已连接"
		 var str = rePlaceStr(getCookie(),1,"2");
		 setCookie(str);
	 }
}
function jnsacmgetcookies(){ 
	 if(getCookie()== undefined){
		setCookie("00000000000000000000000000000") 
	 }
     setTimeout("jnsacmgetcookies();",1000);
	
	 if(getCookie().substr(6,1)=="1")
	 {
		 alert("济南西站自律机连接状态更新") 
		 document.getElementById("yyfwqjnxzzljline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"济南西站自律机已连接"
		var str = rePlaceStr(getCookie(),7,"2");
		 setCookie(str);
	 }
}
function tjsacmgetcookies(){ 
	 if(getCookie()== undefined){
		setCookie("00000000000000000000000000000") 
	 }
     setTimeout("tjsacmgetcookies();",1000);
	 
	 if(getCookie().substr(3,1)=="1")
	 {
		 alert("天津南站自律机连接状态更新") 
		 document.getElementById("yyfwqtjnzzljline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"天津南站自律机已连接"
		 var str = rePlaceStr(getCookie(),4,"2");
		 setCookie(str);
		 
		 
	 }
}
function szsacmgetcookies(){ 
	 if(getCookie()== undefined){
		setCookie("00000000000000000000000000000") 
	 }
     setTimeout("szsacmgetcookies();",1000);
	 
	 if(getCookie().substr(12,1)=="1")
	 {
		 alert("苏州北站自律机连接状态更新") 
		 document.getElementById("yyfwqszbzzljline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"苏州北站自律机已连接"
		 var str = rePlaceStr(getCookie(),13,"2");
		 setCookie(str);
	 }
}
function shsacmgetcookies(){ 
	 if(getCookie()== undefined){
		setCookie("00000000000000000000000000000") 
	 }
     setTimeout("shsacmgetcookies();",1000);
	 
	 if(getCookie().substr(15,1)=="1")
	 {
		 alert("上海虹桥站自律机连接状态更新") 
		 document.getElementById("yyfwqshhqzzljline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"上海虹桥站自律机已连接"
		 var str = rePlaceStr(getCookie(),16,"2");
		 setCookie(str);
	 }
}

function TDgetcookies(){ 
	 if(getCookie()== undefined){
		setCookie("00000000000000000000000000000")  
	 }
     setTimeout("TDgetcookies();",1000);
	 
	 if(getCookie().substr(18,1)=="1")
	 {
		 alert("列调连接状态更新") 
		 document.getElementById("yyfwqlidiaoline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"列调已连接"
		 var str = rePlaceStr(getCookie(),19,"2");
		 setCookie(str);
	 }
}
function ADgetcookies(){ 
	 if(getCookie()== undefined){
		setCookie("00000000000000000000000000000") 
	 }
     setTimeout("ADgetcookies();",1000);
	 
	 if(getCookie().substr(20,1)=="1")
	 {
		 alert("助调连接状态更新") 
		 document.getElementById("yyfwqzhudiaoline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"助调已连接"
		 var str = rePlaceStr(getCookie(),21,"2");
		 setCookie(str);
	 }
}
function RBCgetcookies(){ 
	 if(getCookie()== undefined){
		setCookie("00000000000000000000000000000") 
	 }
     setTimeout("RBCgetcookies();",1000);
	 
	 if(getCookie().substr(19,1)=="1")
	 {
		 alert("RBC连接状态更新") 
		 document.getElementById("yyfwqrbcline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"RBC已连接"
		 var str = rePlaceStr(getCookie(),20,"2");
		 setCookie(str);
	 }
}
window.onload=function(){
    setInterval(getCookie_tx,3000)
    chushizhuangtai()
    
}
function chushizhuangtai(){
    if(getCookie()== undefined){
		setCookie("00000000000000000000000000000") 
	 }
    if(getCookie().substr(9,1)=="2"){
        document.getElementById("yyfwqnjnzzljline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"南京南站自律机已连接"
    }
	 if(getCookie().substr(0,1)=="2"){
         document.getElementById("yyfwqbjnzzljline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"北京南站自律机已连接"
     }
	 if(getCookie().substr(6,1)=="2"){
         document.getElementById("yyfwqjnxzzljline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"济南西站自律机已连接"
     }
	 if(getCookie().substr(3,1)=="2"){
          document.getElementById("yyfwqtjnzzljline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"天津南站自律机已连接"
     }
	 if(getCookie().substr(12,1)=="2"){
         document.getElementById("yyfwqszbzzljline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"苏州北站自律机已连接"
     }
	 if(getCookie().substr(15,1)=="2"){
         document.getElementById("yyfwqshhqzzljline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"上海虹桥站自律机已连接"
     }
    if(getCookie().substr(18,1)=="2"){
        document.getElementById("yyfwqlidiaoline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"列调已连接"
    }
    if(getCookie().substr(20,1)=="2"){
        document.getElementById("yyfwqzhudiaoline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"助调已连接"
    }
    if(getCookie().substr(19,1)=="2")
	 {
         document.getElementById("yyfwqrbcline").style.backgroundImage= "url(images/lvline.png)"
         document.getElementById("yyfwqinput1").innerHTML=document.getElementById("yyfwqinput1").innerHTML+"RBC已连接"
     }
}

function getCookie_tx(){
	var com=[]
    var textCom=""
    var cookie = $.cookie();
	
    if(cookie=="") return;  
    $.each(cookie,function(key,value){
        
        if(key=="列调"){
            if(value!="{}"){
                $.each(value,function(k,v){
                    com.push(v)
               
                }) 
            }
            
        }
        else if(key=="北京车务终端"){
            $.each(value,function(k,v){
                com.push(v)
                
            }) 
        }
        else if(key=="天津车务终端"){
            $.each(value,function(k,v){
                com.push(v)
                
            }) 
        }
        else if(key=="济南车务终端"){
            $.each(value,function(k,v){
                com.push(v)
               
            }) 
        }
        else if(key=="南京车务终端"){
            $.each(value,function(k,v){
                com.push(v)
               
            }) 
        }
        else if(key=="苏州车务终端"){
            $.each(value,function(k,v){
                com.push(v)
               
            }) 
        }
        else if(key=="上海车务终端"){
            $.each(value,function(k,v){
                com.push(v)
               
            }) 
        }
        else if(key=="北京联锁"){
            $.each(value,function(k,v){
                com.push(v)
                
            }) 
        }
         else if(key=="天津联锁"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
         else if(key=="济南联锁"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
         else if(key=="南京联锁"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
         else if(key=="苏州联锁"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
         else if(key=="上海联锁"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
        else if(key=="北京车务终端回执"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
        else if(key=="天津车务终端回执"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
        else if(key=="济南车务终端回执"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
        else if(key=="南京车务终端回执"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
        else if(key=="苏州车务终端回执"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
        else if(key=="上海车务终端回执"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
        else if(key=="北京联锁回执"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
        else if(key=="天津联锁回执"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
        else if(key=="济南联锁回执"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
        else if(key=="南京联锁回执"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
        else if(key=="苏州联锁回执"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
        else if(key=="上海联锁回执"){
            $.each(value,function(k,v){
                com.push(v)
            }) 
        }
         else{
             com.push(value)
         }
          
    })
    $.each(com,function(k,v){
        
        textCom=textCom+v
    })
    document.getElementById("yyfwqinput2").innerHTML="通信状态："+"\r\n" +textCom
	var text = document.getElementById("yyfwqinput2");
    
    text.style.color = "#fff";
    text.style.background = "#fff";
    setTimeout(shanshuo,500)
    function shanshuo(){
        text.style.color = "black";
        text.style.background = "#fff";
    }
      
	
 }





