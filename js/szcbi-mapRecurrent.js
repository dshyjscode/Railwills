// JavaScript Document

$.cookie.json=true;

function getCookie_recurrent(){
    getCookie_MapAndCar()
	setTimeout(getCookie_recurrent,500);	
}

//站场图和车信息存储
var recurrent=[]

//获取站场图设备状态
function getCookie_MapAndCar(){
    var timer
    var cookieMap = $.cookie('站场图');
    if(JSON.stringify(cookieMap)=="{}"||cookieMap==undefined) {
		timer = setTimeout(function(){
		this.getCookie_MapAndCar()
		},10); 
	}
	else{
        clearTimeout(timer) //清理定时任务
        recurrent.push(cookieMap)
        Recurrent_MapAndCar(cookieMap)
	} 
}






//复现站场图和列车
function Recurrent_MapAndCar(map){
	var d=100;
    var s,tr;//ss
    var x,y,x1,x2,y1;
    var n,m;
    var signal=map.substr(83,12)
    var turnout=map.substr(146,4)
    var track=map.substr(257,20)
    var car =map.slice(422,-2)
    var previousTurnout
    if(recurrent.length==1){
            
            previousTurnout=null
        }
        else{
            previousTurnout=recurrent.slice(-2)[0].substr(126,6)
    }
    //信号机复现
    for(var i=0;i<12;i++){
        s = signal.substr(i,1);
        n=84+i
        if (s==1){
            x=coordinate[n].x
            y=coordinate[n].y+d
            xinhaojifuxian(x,y,"green",coordinate[n].name.substr(1),"")   
            
        }
        else if(s==2){
            x=coordinate[n].x
            y=coordinate[n].y+d
            xinhaojifuxian(x,y,"yellow",coordinate[n].name.substr(1),"")
        }
        else if(s==3){
            x=coordinate[n].x
            y=coordinate[n].y+d
            xinhaojifuxian(x,y,"yellow",coordinate[n].name.substr(1),"double")
            
        }
        else if(s==4){
            x=coordinate[n].x
            y=coordinate[n].y+d
            xinhaojifuxian(x,y,"red",coordinate[n].name.substr(1),"")
        }
    }
    //调车信号机复现
    /*for(var i=0;i<4;i++){
        ss = shunting_signal.substr(i,1);
        
        if (ss==1){
           x=coordinate[306+i].x
           y=coordinate[306+i].y
           xinhaojifuxian(x,y,"blue",coordinate[306+i].name.substr(1),"shunting") 
        }
        else if(ss==2){
           x=coordinate[306+i].x
           y=coordinate[306+i].y
           xinhaojifuxian(x,y,"#FFF",coordinate[306+i].name.substr(1),"shunting") 
        }
        
    }*/
    
    //轨道复现、道岔复现
    for(var i=0;i<20;i++){
        tr = track.substr(i,1);
        m=258+i
        if (tr==1){
            x1=coordinate[m].x1
            y1=coordinate[m].y1+d
            x2=coordinate[m].x2
            
            guidaofuxian(x1,y1,x2,'#848284',coordinate[m].name.substr(1),turnout) 
        }
        else if(tr==3){
            x1=coordinate[m].x1
            y1=coordinate[m].y1+d
            x2=coordinate[m].x2
            
            guidaofuxian(x1,y1,x2,'red',coordinate[m].name.substr(1),turnout)
        }
        else if(tr==2){
            x1=coordinate[m].x1
            y1=coordinate[m].y1+d
            x2=coordinate[m].x2
            
            guidaofuxian(x1,y1,x2,'#FFF',coordinate[m].name.substr(1),turnout)
        }
    }
    Recurrent_car(car,turnout,previousTurnout)
}
//列车所有位置信息
var carPosition={}

function Recurrent_car(car,turnout,previousTurnout){
	var d=100
    var carNum
    var position
    var previous
    var x1,x2,y1;
    for(var i=0;i<car.length;i+=8){
        
        //列车当前位置信息
        carNum = car.substr(i,4)
        position = parseInt(car.substr(i+4,4))
        if(carNum=="0000"){
            continue
        }
        //console.log(position)
        if(position!=0){
            x1=coordinate[position].x1
            y1=coordinate[position].y1+d
            x2=coordinate[position].x2
            if(coordinate[position].name.substr(0,1)=="Z"){
                //小车复现
                xiaochefuxian(x1,y1,x2,carNum,coordinate[position].name.substr(1),turnout,"blue","#fff")
               
            }
            //存储列车位置信息
            if(!carPosition.hasOwnProperty(carNum)){
               carPosition[carNum]=[]
            }
            carPosition[carNum].push(position)
        }
        
        //判断列车前一次位置
        if(carPosition[carNum].length==1){
            
            previous=null
            x1=null
            x2=null
            y1=null
        }
        else{
            previous=carPosition[carNum].slice(-2)[0]
            x1=coordinate[previous].x1
            y1=coordinate[previous].y1+d
            x2=coordinate[previous].x2
        }
        if(previous!=null && coordinate[previous].name.substr(0,1)=="Z" && previous!=position){
            //前一次小车消失
            xiaochefuxian(x1,y1,x2,carNum,coordinate[previous].name.substr(1),previousTurnout,"black","black")
        }
        
    }

    
}




function shangxingxinhaoji_Recurrent(x,y,color){ 
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	context.beginPath();
	context.strokeStyle = '#FFF';
    context.lineWidth = 5;
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="#FFF";
    context.fill();
    context.stroke();
	
	context.beginPath();
	context.strokeStyle = color;
    context.lineWidth = 5;
    context.arc(x-30,y-13,3,0,2*Math.PI);
    context.fillStyle=color;
    context.fill();
    context.stroke();
	
	context.beginPath();
	context.lineWidth = 2;
	context.strokeStyle = '#FFF';
	context.moveTo( x-30+6, y-13 ); // x+7,y-1
	context.lineTo( x-30+16, y-13);
	
	context.stroke();
	
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#FFF';
	context.moveTo( x-30+16, y-8 ); // x+7,y-1
	context.lineTo( x-30+16, y-18);
	
	context.stroke();
}



//上行双黄灯
function shangxingxinhaojiUUdeng_Recurrent(x,y,color1,color2){ 
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	//第二个灯位
	context.beginPath();
	context.strokeStyle =color1;
	context.lineWidth = 2;
    context.arc(x-42,y-13,7,0,2*Math.PI);
    context.fillStyle=color1;
    context.fill();
    context.stroke();
	//第二个黄灯
	context.beginPath();
	context.strokeStyle = color2;
    context.arc(x-42,y-13,5,0,2*Math.PI);
    context.fillStyle= color2;
    context.fill();
    context.stroke(); 
}


function xiaxingxinhaoji_Recurrent(x,y,color){ 
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	context.beginPath();
	context.strokeStyle = '#FFF';
    context.lineWidth = 5;
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="#FFF";
    context.fill();
    context.stroke();
	
	context.beginPath();
	context.strokeStyle = color;
    context.lineWidth = 5;
    context.arc(x-30,y-13,3,0,2*Math.PI);
    context.fillStyle=color;
    context.fill();
    context.stroke();
	
	context.beginPath();
	context.lineWidth = 2;
	context.strokeStyle = '#FFF';
	context.moveTo( x-30-6, y-13 ); // x+7,y-1
	context.lineTo( x-30-16, y-13);
	
	context.stroke();
	
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = '#FFF';
	context.moveTo( x-30-16, y-8 ); // x+7,y-1
	context.lineTo( x-30-16, y-18);
	
	context.stroke();
}

//下行双黄灯
function xiaxingxinhaojiUUdeng_Recurrent(x,y,color1,color2){ 
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	//第二个灯位
	context.beginPath();
	context.strokeStyle =color1;
	context.lineWidth = 2;
    context.arc(x-18,y-13,7,0,2*Math.PI);
    context.fillStyle=color1;
    context.fill();
    context.stroke();
	//第二个黄灯
	context.beginPath();
	context.strokeStyle = color2;
    context.arc(x-18,y-13,5,0,2*Math.PI);
    context.fillStyle= color2;
    context.fill();
    context.stroke(); 
	
	
}


function xinhaojifuxian(x,y,color,equipment,douYellow){
    
   
    
    if(douYellow==""){
        if(equipment=="X"){
            xiaxingxinhaojiUUdeng_Recurrent(x,y,"black","black")
        }
        else if(equipment=="S"){
            shangxingxinhaojiUUdeng_Recurrent(x,y,"black","black")
        }
		if(equipment.substr(0,1)=="X"){
            xiaxingxinhaoji_Recurrent(x,y,color)
        }
        else if(equipment.substr(0,1)=="S"){
            shangxingxinhaoji_Recurrent(x,y,color)
        }
    }
    else if(douYellow=="double"){
        if(equipment=="X"){
            xiaxingxinhaoji_Recurrent(x,y,color)
        }
        else if(equipment=="S"){
           shangxingxinhaoji_Recurrent(x,y,color)
        }
		if(equipment=="X"){
            xiaxingxinhaojiUUdeng_Recurrent(x,y,"#FFF","yellow")
            
        }
        else if(equipment=="S"){
            shangxingxinhaojiUUdeng_Recurrent(x,y,"#FFF","yellow")
        }  
    }
	else if(douYellow=="shunting"){
        if(equipment=="D1" || equipment=="D3"){
            xiaxingdiaochexinhaoji(x,y,color)
        }
        else {
            shangxingdiaochexinhaoji(x,y,color)
        }
    }
	
}

function juxingzhuguidao(x1,y1,x2,color){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    context.fillStyle= color
    context.fillRect(x1,y1,x2-x1,5)
}
function suzhoucexiangguidao1(x,y,color,k){
    
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	// 1号道岔处弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = color;
	
	context.moveTo( x, y-1 ); // x+7,y-1
	context.lineTo( x+k, y-1-k);
	context.stroke();
}
function suzhoucexiangguidao2(x,y,color,k){
   
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    //10号道岔处弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = color;			
	context.moveTo( x, y+6 ); // x+7,y-1
	context.lineTo( x+k, y+6+k);
	context.stroke();
}
function suzhoucexiangguidao3(x,y,color,k){
    
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    
    // 3号道岔处弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle =  color;		
	context.moveTo( x, y+1 ); // x+7,y-1
	context.lineTo( x+k, y+1+k);
	context.stroke();
	
	
}
function suzhoucexiangguidao4(x,y,color,k){
   
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    // 12号道岔处弯股绘制
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = color;
	context.moveTo( x, y-1 ); // x+7,y-1
	context.lineTo( x+k, y-1-k);
	context.stroke();	
}


function guidaofuxian(x1,y1,x2,color,equipment,turnout){
    
    //道岔定位
    var k=50;
    //道岔反位
    var l=55
    var d=100;
    
	
        
     if(equipment=="1DG"){
        
        if (turnout.substr(0,1)=="1"){
            
            suzhoucexiangguidao1(x1+39,y1,"black",l)
            
            juxingzhuguidao(x1,y1,x2,color)
            
            suzhoucexiangguidao1(x1+44,y1-5,color,k)
            
            juxingzhuguidao(x2-5,y1-60,x2+40,color)
        }
        else if(turnout.substr(0,1)=="2"){
            juxingzhuguidao(x1,y1,x1+39,color)
            
            juxingzhuguidao(x1+49,y1,x2,color)
            
            suzhoucexiangguidao1(x1+39,y1,color,l)
            
            juxingzhuguidao(x2-5,y1-60,x2+40,color)
        }
        
        
    }
    else if(equipment=="3DG"){
        if (turnout.substr(1,1)=="1"){
            suzhoucexiangguidao3(x1+39,y1+5,"black",l)
            
            juxingzhuguidao(x1,y1,x2,color)
            
            suzhoucexiangguidao3(x1+44,y1+10,color,k)
            
            juxingzhuguidao(x2-5,y1+60,x2+40,color)
        }
        else if(turnout.substr(1,1)=="2"){
           juxingzhuguidao(x1,y1,x1+39,color)
            
            juxingzhuguidao(x1+49,y1,x2,color)
            
            suzhoucexiangguidao3(x1+39,y1+5,color,l)
            
            juxingzhuguidao(x2-5,y1+60,x2+40,color)
        }
        
    }
    else if(equipment=="2DG"){
        if (turnout.substr(2,1)=="1"){
            suzhoucexiangguidao2(x1+13,y1-62,"black",l)
            
            juxingzhuguidao(x1,y1,x2,color)
            
            juxingzhuguidao(x1-40,y1-60,x1+10,color)
            
            suzhoucexiangguidao2(x1+13,y1-62,color,k)
        }
        else if(turnout.substr(2,1)=="2"){
            juxingzhuguidao(x1,y1,x1+13+l-10,color)
            
            juxingzhuguidao(x1+13+l,y1,x2,color)
            
            juxingzhuguidao(x1-40,y1-60,x1+10,color)
            
            suzhoucexiangguidao2(x1+13,y1-62,color,l)
        }
            
		
    }
    else if(equipment=="4DG"){
        if (turnout.substr(3,1)=="1"){
            suzhoucexiangguidao4(x1+13,y1+62,"black",l)
            
            juxingzhuguidao(x1,y1,x2,color)
            
            juxingzhuguidao(x1-40,y1+60,x1+10,color)
            
            suzhoucexiangguidao4(x1+13,y1+62,color,k)
        }
        else if(turnout.substr(3,1)=="2"){
            juxingzhuguidao(x1,y1,x1+13+l-10,color)
            
            juxingzhuguidao(x1+13+l,y1,x2,color)
            
            juxingzhuguidao(x1-40,y1+60,x1+10,color)
            
            suzhoucexiangguidao4(x1+13,y1+62,color,l)
        }
        
    }
    else {
        juxingzhuguidao(x1,y1,x2,color)
    }
    
}


/*function xieshuzi_color(x,y,text,color)
{
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	
	context.fillStyle = color;
	context.font="12px bold 宋体";
    context.fillText(text,x-10,y);
}*/



function xiaxingxiaoche(x,y,text,color,color1){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	context.fillStyle = color;
    
	context.fillRect(x-45, y-15, 60, 15);
	context.beginPath();
	context.lineWidth = 1;
	context.strokeStyle = color;
	
	context.moveTo( x+15, y-15); // x+7,y-1
	context.lineTo( x+15, y);
	context.lineTo( x+45, y);
	context.lineTo( x+15, y-15);
	context.fill();
	context.stroke();
    
    
    //写数字
    context.fillStyle = color1;
	context.font="12px bold 宋体";
    context.fillText(text,x-20,y-3);
}


function shangxingxiaoche(x,y,text,color,color1){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	
	context.fillStyle = color;
    
	context.fillRect(x-15, y-15, 60, 15);
	context.beginPath();
	context.lineWidth = 1;
	context.strokeStyle = color;
	
	context.moveTo( x-15, y-15 ); // x+7,y-1
	context.lineTo( x-15, y);
	context.lineTo( x-45, y);
	context.lineTo( x-15, y-15);
	context.fill();
	context.stroke();
    
    //写数字
    context.fillStyle = color1;
	context.font="12px bold 宋体";
    context.fillText(text,x+10,y-3);
}


function xiaxingcexianxiaoche1(x,y,color){
    x=x-3
    y=y-3
    
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.fillStyle = color;
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = color;
    
    context.moveTo( x, y); // 起点
    context.lineTo( x+50, y-50);
    context.lineTo( x+26, y-45);
    context.lineTo( x-11, y-8);
    context.lineTo( x, y); // 起点
    context.fill();
    context.stroke();
    
}

function shangxingcexianxiaoche1(x,y,color){
    
    x=x-3
    y=y-3
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.fillStyle = color;
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = color;
    
    context.moveTo( x, y); // 起点
    context.lineTo( x+50, y-50);
    context.lineTo( x+39, y-58);
    context.lineTo( x+5, y-24);
    context.lineTo( x, y); // 起点
    
    context.fill();
    context.stroke();
    
}

function xiaxingcexianxiaoche2(x,y,color){
    x=x+3
    y=y-3
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.fillStyle = color;
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = color;
    
    context.moveTo( x, y); // 起点
    context.lineTo( x+50, y+50);
    context.lineTo( x+45, y+26);
    context.lineTo( x+11, y-8);
    context.lineTo( x, y); // 起点
    context.fill();
    context.stroke();
    
    
}
function shangxingcexianxiaoche2(x,y,color){
    x=x+3
    y=y-3
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.fillStyle = color;
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = color;
    
    context.moveTo( x, y); // 起点
    context.lineTo( x+50, y+50);
    context.lineTo( x+61, y+42);
    context.lineTo( x+24, y+5);
    context.lineTo( x, y); // 起点
    context.fill();
    context.stroke();
    
}

function shangxingcexianxiaoche3(x,y,color){
    x=x+3
    y=y-3
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.fillStyle = color;
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = color;
    
    context.moveTo( x, y); // 起点
    context.lineTo( x+50, y+50);
    context.lineTo( x+61, y+42);
    context.lineTo( x+24, y+5);
    context.lineTo( x, y); // 起点
    context.fill();
    context.stroke();
}
function xiaxingcexianxiaoche3(x,y,color){
    x=x+3
    y=y-3
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.fillStyle = color;
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = color;
    
    context.moveTo( x, y); // 起点
    context.lineTo( x+50, y+50);
    context.lineTo( x+45, y+26);
    context.lineTo( x+11, y-8);
    context.lineTo( x, y); // 起点
    context.fill();
    context.stroke();
}

function shangxingcexianxiaoche4(x,y,color){
    x=x-3
    y=y-3
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.fillStyle = color;
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = color;
    
    context.moveTo( x, y); // 起点
    context.lineTo( x+50, y-50);
    context.lineTo( x+39, y-58);
    context.lineTo( x+5, y-24);
    context.lineTo( x, y); // 起点
    
    context.fill();
    context.stroke();
}
function xiaxingcexianxiaoche4(x,y,color){
    x=x-3
    y=y-3
    
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.fillStyle = color;
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = color;
    
    context.moveTo( x, y); // 起点
    context.lineTo( x+50, y-50);
    context.lineTo( x+26, y-45);
    context.lineTo( x-11, y-8);
    context.lineTo( x, y); // 起点
    context.fill();
    context.stroke();
}




//
function xiaochefuxian(x1,y1,x2,carNum,equipment,turnout,color,color1){
	var d=100
	var c=7592;
	
    if(equipment=="1DG"){ 
        if(turnout.substr(0,1)==1){ 
            
            if(parseInt(carNum)%2=="1"){
                
                xiaxingxiaoche((x1+x2)/2,y1,carNum,color,color1)
               
            }
            else{
               
                shangxingxiaoche((x1+x2)/2,y1,carNum,color,color1)
            }
        }
        else{
            if(parseInt(carNum)%2=="1"){
                
                xiaxingcexianxiaoche1(x1+44,y1-5,color)
               
            }
            else{
                shangxingcexianxiaoche1(x1+44,y1-5,color)
            }
        }
    }
    else if(equipment=="3DG"){
        
        if(turnout.substr(1,1)==1){
            
            if(parseInt(carNum)%2=="1"){
                
                xiaxingxiaoche((x1+x2)/2,y1,carNum,color,color1)
               
            }
            else{
               
                shangxingxiaoche((x1+x2)/2,y1,carNum,color,color1)
            }
           
        }
        else{
            if(parseInt(carNum)%2=="1"){
                
                xiaxingcexianxiaoche3(x1+44,y1+10,color)
               
            }
            else{
                shangxingcexianxiaoche3(x1+44,y1+10,color)
            }
        }
    }
    else if(equipment=="2DG"){
         
        if(turnout.substr(2,1)==1){
            
            if(parseInt(carNum)%2=="1"){
                
                xiaxingxiaoche((x1+x2)/2,y1,carNum,color,color1) 
               
            }
            else{
               
                shangxingxiaoche((x1+x2)/2,y1,carNum,color,color1)
            }
           
        }
        else{
            if(parseInt(carNum)%2=="1"){
                
                xiaxingcexianxiaoche2(x1+13,y1-62,color)
               
            }
            else{
                shangxingcexianxiaoche2(x1+13,y1-62,color)
            }
            
            
        }
    }   
    else if(equipment=="4DG"){  
        if(turnout.substr(3,1)==1){
           
           if(parseInt(carNum)%2=="1"){
                
                xiaxingxiaoche((x1+x2)/2,y1,carNum,color,color1) 
               
            }
            else{
               
                shangxingxiaoche((x1+x2)/2,y1,carNum,color,color1)
            }
           
        }
        else{
             if(parseInt(carNum)%2=="1"){
                
                xiaxingcexianxiaoche4(x1+13,y1+62,color)
            }
            else{
                shangxingcexianxiaoche4(x1+13,y1+62,color)
            }
           
        }
    }
    else {
        
        if(parseInt(carNum)%2=="1"){
            
            xiaxingxiaoche((x1+x2)/2,y1,carNum,color,color1) 
           
        }
        else{
           
            shangxingxiaoche((x1+x2)/2,y1,carNum,color,color1)
        }
    }
	
	
	
	xieshuzi(8138-c,225+d,'X')
	
	xieshuzi(8133-c,350+d,'XF')
	
	
	xieshuzi(8865-c,350+d,'S')
	
	xieshuzi(8861-c,225+d,'SF')
	
	
	
	xieshuzi(8253-c,230+d,'S3')
	
	xieshuzi(8213-c,290+d,'SI')
	xieshuzi(8158-c,230+d,'1')
    
	xieshuzi(8213-c,350+d,'SII')
	xieshuzi(8158-c,340+d,'3')
	
	xieshuzi(8253-c,410+d,'S4')
	
	
	
	xieshuzi(8743-c,165+d,'X3')
	
	xieshuzi(8783-c,225+d,'XI')
	xieshuzi(8843-c,235+d,'2')
	
	xieshuzi(8783-c,285+d,'XII')
	xieshuzi(8843-c,340+d,'4')
	
	xieshuzi(8743-c,345+d,'X4')
	
	
}


var coordinate={	
    
    //北京站
	24	:{	name	:	'BX',
		x	:	210,
		y	:	250,
	},			
25	:{	name	:	'BXF',
		x	:	210,
		y	:	340,
	},			
26	:{	name	:	'BX5',
		x	:	660,
		y	:	130,
	},			
27	:{	name	:	'BX3',
		x	:	700,
		y	:	190,
	},			
28	:{	name	:	'BXI',
		x	:	800,
		y	:	250,
	},			
29	:{	name	:	'BXII',
		x	:	800,
		y	:	310,
	},			
30	:{	name	:	'BX4',
		x	:	700,
		y	:	370,
	},			
31	:{	name	:	'BX6',
		x	:	660,
		y	:	430,
	},			
32	:{	name	:	'BS',
		x	:	1063,
		y	:	340,
	},			
33	:{	name	:	'BSF',
		x	:	1063,
		y	:	250,
	},			
34	:{	name	:	'BS5',
		x	:	450,
		y	:	160,
	},			
35	:{	name	:	'BS3',
		x	:	420,
		y	:	220,
	},			
36	:{	name	:	'BSI',
		x	:	340,
		y	:	280,
	},			
37	:{	name	:	'BSII',
		x	:	340,
		y	:	340,
	},			
38	:{	name	:	'BS4',
		x	:	420,
		y	:	400,
	},			
39	:{	name	:	'BS6',
		x	:	450,
		y	:	460,
     },
    
    306	:{	name	:	'BD1',
		x1	:	373,
		y1	:	190,
	},			
307	:{	name	:	'BD2',
		x1	:	919,
		y1	:	280,
	},			
308	:{	name	:	'BD3',
		x1	:	373,
		y1	:	370,
	},			
309	:{	name	:	'BD4',
		x1	:	919,
		y1	:	340,
	},			
		
    
    

    164	:{	name	:	'BX1JG',
		x1	:	20,
		y1	:	250,
		x2	:	163,
	},			
165	:{	name	:	'B1DG',
		x1	:	165,
		y1	:	250,
		x2	:	326,
	},			
166	:{	name	:	'B5DG',
		x1	:	328,
		y1	:	190,
		x2	:	406,
	},			
167	:{	name	:	'B5G',
		x1	:	438,
		y1	:	130,
		x2	:	613,
	},			
168	:{	name	:	'B3G',
		x1	:	408,
		y1	:	190,
		x2	:	653,
	},			
169	:{	name	:	'BIG',
		x1	:	328,
		y1	:	250,
		x2	:	753,
	},			
170	:{	name	:	'BS1LQ',
		x1	:	20,
		y1	:	310,
		x2	:	163,
	},			
171	:{	name	:	'B3DG',
		x1	:	165,
		y1	:	310,
		x2	:	326,
	},			
172	:{	name	:	'B7DG',
		x1	:	328,
		y1	:	370,
		x2	:	406,
	},			
173	:{	name	:	'BIIG',
		x1	:	328,
		y1	:	310,
		x2	:	753,
	},			
174	:{	name	:	'B4G',
		x1	:	408,
		y1	:	370,
		x2	:	653,
	},			
175	:{	name	:	'B6G',
		x1	:	438,
		y1	:	430,
		x2	:	613,
	},			
176	:{	name	:	'BX3LQ',
		x1	:	1412,
		y1	:	250,
		x2	:	1590,
	},			
177	:{	name	:	'BX2LQ',
		x1	:	1232,
		y1	:	250,
		x2	:	1412,
	},			
178	:{	name	:	'BX1LQ',
		x1	:	1052,
		y1	:	250,
		x2	:	1230,
	},			
179	:{	name	:	'B4DG',
		x1	:	907,
		y1	:	250,
		x2	:	1050,
	},			
180	:{	name	:	'B6DG',
		x1	:	755,
		y1	:	250,
		x2	:	905,
	},			
181	:{	name	:	'B10DG',
		x1	:	655,
		y1	:	190,
		x2	:	753,
	},			
182	:{	name	:	'BS1JG',
		x1	:	1412,
		y1	:	310,
		x2	:	1590,
	},			
183	:{	name	:	'BS2JG',
		x1	:	1232,
		y1	:	310,
		x2	:	1412,
	},			
184	:{	name	:	'BS3JG',
		x1	:	1052,
		y1	:	310,
		x2	:	1230,
	},			
185	:{	name	:	'B2DG',
		x1	:	907,
		y1	:	310,
		x2	:	1050,
	},			
186	:{	name	:	'B8DG',
		x1	:	755,
		y1	:	310,
		x2	:	905,
	},			
187	:{	name	:	'B12DG',
		x1	:	655,
		y1	:	370,
		x2	:	753,
	},			

    
    
    //天津站
    42	:{	name	:	'TX',
		x	:	570,
		y	:	250,
	},			
43	:{	name	:	'TXF',
		x	:	570,
		y	:	340,
	},			
44	:{	name	:	'TX3',
		x	:	1180,
		y	:	190,
	},			
45	:{	name	:	'TXI',
		x	:	1220,
		y	:	250,
	},			
46	:{	name	:	'TXII',
		x	:	1220,
		y	:	310,
	},			
47	:{	name	:	'TX4',
		x	:	1180,
		y	:	457,
	},			
48	:{	name	:	'TS',
		x	:	1443,
		y	:	370,
	},			
49	:{	name	:	'TSF',
		x	:	1443,
		y	:	250,
	},			
50	:{	name	:	'TS3',
		x	:	680,
		y	:	220,
	},			
51	:{	name	:	'TSI',
		x	:	640,
		y	:	280,
	},			
52	:{	name	:	'TSII',
		x	:	640,
		y	:	340,
	},			
53	:{	name	:	'TS4',
		x	:	680,
		y	:	400,
	},			


 
    
    
    
    190	:{	name	:	'TX1JG',
		x1	:	22,
		y1	:	250,
		x2	:	200,
	},			
191	:{	name	:	'TX2JG',
		x1	:	202,
		y1	:	250,
		x2	:	380,
	},			
192	:{	name	:	'TX3JG',
		x1	:	382,
		y1	:	250,
		x2	:	524,
	},			
193	:{	name	:	'T1DG',
		x1	:	526,
		y1	:	250,
		x2	:	627,
	},			
194	:{	name	:	'T3G',
		x1	:	669,
		y1	:	190,
		x2	:	1133,
	},			
195	:{	name	:	'TIG',
		x1	:	629,
		y1	:	250,
		x2	:	1173,
	},			
196	:{	name	:	'TS3LQ',
		x1	:	22,
		y1	:	310,
		x2	:	200,
	},			
197	:{	name	:	'TS2LQ',
		x1	:	202,
		y1	:	310,
		x2	:	380,
	},			
198	:{	name	:	'TS1LQ',
		x1	:	382,
		y1	:	310,
		x2	:	524,
	},			
199	:{	name	:	'T3DG',
		x1	:	526,
		y1	:	310,
		x2	:	627,
	},			
200	:{	name	:	'TIIG',
		x1	:	629,
		y1	:	310,
		x2	:	1173,
	},			
201	:{	name	:	'T4G',
		x1	:	669,
		y1	:	370,
		x2	:	1133,
	},			
202	:{	name	:	'TX3LQ',
		x1	:	1792,
		y1	:	250,
		x2	:	1970,
	},			
203	:{	name	:	'TX2LQ',
		x1	:	1612,
		y1	:	250,
		x2	:	1790,
	},			
204	:{	name	:	'TX1LQ',
		x1	:	1432,
		y1	:	250,
		x2	:	1610,
	},			
205	:{	name	:	'T2-8DG',
		x1	:	1277,
		y1	:	250,
		x2	:	1430,
	},			
206	:{	name	:	'T10DG',
		x1	:	1175,
		y1	:	250,
		x2	:	1275,
	},			
207	:{	name	:	'TS1JG',
		x1	:	1792,
		y1	:	310,
		x2	:	1970,
	},			
208	:{	name	:	'TS2JG',
		x1	:	1612,
		y1	:	310,
		x2	:	1790,
	},			
209	:{	name	:	'TS3JG',
		x1	:	1432,
		y1	:	310,
		x2	:	1610,
	},			
210	:{	name	:	'T4-6DG',
		x1	:	1277,
		y1	:	310,
		x2	:	1430,
	},			
211	:{	name	:	'T12DG',
		x1	:	1175,
		y1	:	310,
		x2	:	1275,
	},			
			

  //济南  
 56	:{	name	:	'JX',
		x	:	581,
		y	:	250,
	},			
57	:{	name	:	'JXF',
		x	:	581,
		y	:	340,
	},			
58	:{	name	:	'JX3',
		x	:	1191,
		y	:	190,
	},			
59	:{	name	:	'JXI',
		x	:	1231,
		y	:	250,
	},			
60	:{	name	:	'JXII',
		x	:	1231,
		y	:	310,
	},			
61	:{	name	:	'JX4',
		x	:	1191,
		y	:	370,
	},			
62	:{	name	:	'JS',
		x	:	1299,
		y	:	340,
	},			
63	:{	name	:	'JSF',
		x	:	1299,
		y	:	250,
	},			
64	:{	name	:	'JS3',
		x	:	691,
		y	:	220,
	},			
65	:{	name	:	'JSI',
		x	:	651,
		y	:	280,
	},			
66	:{	name	:	'JSII',
		x	:	651,
		y	:	340,
	},			
67	:{	name	:	'JS4',
		x	:	691,
		y	:	400,
	},			

    
    
    
    214	:{	name	:	'JX1JG',
		x1	:	22,
		y1	:	250,
		x2	:	200,
	},			
215	:{	name	:	'JX2JG',
		x1	:	202,
		y1	:	250,
		x2	:	380,
	},			
216	:{	name	:	'JX3JG',
		x1	:	382,
		y1	:	250,
		x2	:	535,
	},			
217	:{	name	:	'J1DG',
		x1	:	537,
		y1	:	250,
		x2	:	638,
	},			
218	:{	name	:	'J3G',
		x1	:	680,
		y1	:	190,
		x2	:	1144,
	},			
219	:{	name	:	'JIG',
		x1	:	640,
		y1	:	250,
		x2	:	1184,
	},			
220	:{	name	:	'JS3LQ',
		x1	:	22,
		y1	:	310,
		x2	:	200,
	},			
221	:{	name	:	'JS2LQ',
		x1	:	202,
		y1	:	310,
		x2	:	380,
	},			
222	:{	name	:	'JS1LQ',
		x1	:	382,
		y1	:	310,
		x2	:	535,
	},			
223	:{	name	:	'J3DG',
		x1	:	537,
		y1	:	310,
		x2	:	638,
	},			
224	:{	name	:	'JIIG',
		x1	:	640,
		y1	:	310,
		x2	:	1184,
	},			
225	:{	name	:	'J4G',
		x1	:	680,
		y1	:	370,
		x2	:	1144,
	},			
226	:{	name	:	'JX3LQ',
		x1	:	1613,
		y1	:	250,
		x2	:	1791,
	},			
227	:{	name	:	'JX2LQ',
		x1	:	1433,
		y1	:	250,
		x2	:	1611,
	},			
228	:{	name	:	'JX1LQ',
		x1	:	1288,
		y1	:	250,
		x2	:	1431,
	},			
229	:{	name	:	'J2DG',
		x1	:	1186,
		y1	:	250,
		x2	:	1286,
	},			
230	:{	name	:	'JS1JG',
		x1	:	1613,
		y1	:	310,
		x2	:	1791,
	},			
231	:{	name	:	'JS2JG',
		x1	:	1433,
		y1	:	310,
		x2	:	1611,
	},			
232	:{	name	:	'JS3JG',
		x1	:	1288,
		y1	:	310,
		x2	:	1431,
	},			
233	:{	name	:	'J4DG',
		x1	:	1186,
		y1	:	310,
		x2	:	1286,
	},			
			

   
 
    
    //南京
    70	:{	name	:	'NX',
		x	:	571,
		y	:	250,
	},			
71	:{	name	:	'NXF',
		x	:	571,
		y	:	340,
	},			
72	:{	name	:	'NX3',
		x	:	1181,
		y	:	190,
	},			
73	:{	name	:	'NXI',
		x	:	1221,
		y	:	250,
	},			
74	:{	name	:	'NXII',
		x	:	1221,
		y	:	310,
	},			
75	:{	name	:	'NX4',
		x	:	1181,
		y	:	370,
	},			
76	:{	name	:	'NS',
		x	:	1289,
		y	:	340,
	},			
77	:{	name	:	'NSF',
		x	:	1289,
		y	:	250,
	},			
78	:{	name	:	'NS3',
		x	:	681,
		y	:	220,
	},			
79	:{	name	:	'NSI',
		x	:	641,
		y	:	280,
	},			
80	:{	name	:	'NSII',
		x	:	641,
		y	:	340,
	},			
81	:{	name	:	'NS4',
		x	:	681,
		y	:	400,
	},			
	
    
    
    236	:{	name	:	'NX1JG',
		x1	:	22,
		y1	:	250,
		x2	:	200,
	},			
237	:{	name	:	'NX2JG',
		x1	:	202,
		y1	:	250,
		x2	:	380,
	},			
238	:{	name	:	'NX3JG',
		x1	:	382,
		y1	:	250,
		x2	:	525,
	},			
239	:{	name	:	'N1DG',
		x1	:	527,
		y1	:	250,
		x2	:	628,
	},			
240	:{	name	:	'N3G',
		x1	:	670,
		y1	:	190,
		x2	:	1134,
	},			
241	:{	name	:	'NIG',
		x1	:	630,
		y1	:	250,
		x2	:	1174,
	},			
242	:{	name	:	'NS3LQ',
		x1	:	22,
		y1	:	310,
		x2	:	200,
	},			
243	:{	name	:	'NS2LQ',
		x1	:	202,
		y1	:	310,
		x2	:	380,
	},			
244	:{	name	:	'NS1LQ',
		x1	:	382,
		y1	:	310,
		x2	:	525,
	},			
245	:{	name	:	'N3DG',
		x1	:	527,
		y1	:	310,
		x2	:	628,
	},			
246	:{	name	:	'NIIG',
		x1	:	630,
		y1	:	310,
		x2	:	1174,
	},			
247	:{	name	:	'N4G',
		x1	:	670,
		y1	:	370,
		x2	:	1134,
	},			
248	:{	name	:	'NX3LQ',
		x1	:	1603,
		y1	:	250,
		x2	:	1781,
	},			
249	:{	name	:	'NX2LQ',
		x1	:	1423,
		y1	:	250,
		x2	:	1601,
	},			
250	:{	name	:	'NX1LQ',
		x1	:	1278,
		y1	:	250,
		x2	:	1421,
	},			
251	:{	name	:	'N2DG',
		x1	:	1176,
		y1	:	250,
		x2	:	1276,
	},			
252	:{	name	:	'NS1JG',
		x1	:	1603,
		y1	:	310,
		x2	:	1781,
	},			
253	:{	name	:	'NS2JG',
		x1	:	1423,
		y1	:	310,
		x2	:	1601,
	},			
254	:{	name	:	'NS3JG',
		x1	:	1278,
		y1	:	310,
		x2	:	1421,
	},			
255	:{	name	:	'N4DG',
		x1	:	1176,
		y1	:	310,
		x2	:	1276,
	},			
			

    
    
    
    
//苏州
    
   84	:{	name	:	'ZX',
		x	:	571,
		y	:	250,
	},			
85	:{	name	:	'ZXF',
		x	:	571,
		y	:	340,
	},			
86	:{	name	:	'ZX3',
		x	:	1181,
		y	:	190,
	},			
87	:{	name	:	'ZXI',
		x	:	1221,
		y	:	250,
	},			
88	:{	name	:	'ZXII',
		x	:	1221,
		y	:	310,
	},			
89	:{	name	:	'ZX4',
		x	:	1181,
		y	:	370,
	},			
90	:{	name	:	'ZS',
		x	:	1289,
		y	:	340,
	},			
91	:{	name	:	'ZSF',
		x	:	1289,
		y	:	250,
	},			
92	:{	name	:	'ZS3',
		x	:	681,
		y	:	220,
	},			
93	:{	name	:	'ZSI',
		x	:	641,
		y	:	280,
	},			
94	:{	name	:	'ZSII',
		x	:	641,
		y	:	340,
	},			
95	:{	name	:	'ZS4',
		x	:	681,
		y	:	400,
	},			
			
 
    
    258	:{	name	:	'ZX1JG',
		x1	:	22,
		y1	:	250,
		x2	:	200,
	},			
259	:{	name	:	'ZX2JG',
		x1	:	202,
		y1	:	250,
		x2	:	380,
	},			
260	:{	name	:	'ZX3JG',
		x1	:	382,
		y1	:	250,
		x2	:	525,
	},			
261	:{	name	:	'Z1DG',
		x1	:	527,
		y1	:	250,
		x2	:	628,
	},			
262	:{	name	:	'Z3G',
		x1	:	670,
		y1	:	190,
		x2	:	1134,
	},			
263	:{	name	:	'ZIG',
		x1	:	630,
		y1	:	250,
		x2	:	1174,
	},			
264	:{	name	:	'ZS3LQ',
		x1	:	22,
		y1	:	310,
		x2	:	200,
	},			
265	:{	name	:	'ZS2LQ',
		x1	:	202,
		y1	:	310,
		x2	:	380,
	},			
266	:{	name	:	'ZS1LQ',
		x1	:	382,
		y1	:	310,
		x2	:	525,
	},			
267	:{	name	:	'Z3DG',
		x1	:	527,
		y1	:	310,
		x2	:	628,
	},			
268	:{	name	:	'ZIIG',
		x1	:	630,
		y1	:	310,
		x2	:	1174,
	},			
269	:{	name	:	'Z4G',
		x1	:	670,
		y1	:	370,
		x2	:	1134,
	},			
270	:{	name	:	'ZX3LQ',
		x1	:	1603,
		y1	:	250,
		x2	:	1781,
	},			
271	:{	name	:	'ZX2LQ',
		x1	:	1423,
		y1	:	250,
		x2	:	1601,
	},			
272	:{	name	:	'ZX1LQ',
		x1	:	1278,
		y1	:	250,
		x2	:	1421,
	},			
273	:{	name	:	'Z2DG',
		x1	:	1176,
		y1	:	250,
		x2	:	1276,
	},			
274	:{	name	:	'ZS1JG',
		x1	:	1603,
		y1	:	310,
		x2	:	1781,
	},			
275	:{	name	:	'ZS2JG',
		x1	:	1423,
		y1	:	310,
		x2	:	1601,
	},			
276	:{	name	:	'ZS3JG',
		x1	:	1278,
		y1	:	310,
		x2	:	1421,
	},			
277	:{	name	:	'Z4DG',
		x1	:	1176,
		y1	:	310,
		x2	:	1276,
	},			
			
		

    
    
  //上海虹桥站
   
    
   98	:{	name	:	'HX',
		x	:	786,
		y	:	250,
	},			
99	:{	name	:	'HXF',
		x	:	786,
		y	:	340,
	},			
100	:{	name	:	'HX5',
		x	:	1390,
		y	:	130,
	},			
101	:{	name	:	'HX3',
		x	:	1430,
		y	:	190,
	},			
102	:{	name	:	'HXI',
		x	:	1570,
		y	:	250,
	},			
103	:{	name	:	'HXII',
		x	:	1570,
		y	:	310,
	},			
104	:{	name	:	'HX4',
		x	:	1430,
		y	:	370,
	},			
105	:{	name	:	'HX6',
		x	:	1390,
		y	:	430,
	},			
106	:{	name	:	'HS',
		x	:	1639,
		y	:	340,
	},			
107	:{	name	:	'HSF',
		x	:	1639,
		y	:	250,
	},			
108	:{	name	:	'HS5',
		x	:	1180,
		y	:	160,
	},			
109	:{	name	:	'HS3',
		x	:	1140,
		y	:	220,
	},			
110	:{	name	:	'HSI',
		x	:	1030,
		y	:	280,
	},			
111	:{	name	:	'HSII',
		x	:	1030,
		y	:	340,
	},			
112	:{	name	:	'HS4',
		x	:	1140,
		y	:	400,
	},			
113	:{	name	:	'HS6',
		x	:	1180,
		y	:	460,
	},			
		

    
    
    
    
    
    
    280	:{	name	:	'HX1JG',
		x1	:	202,
		x2	:	380,
		y1	:	250,
	},			
281	:{	name	:	'HX2JG',
		x1	:	382,
		x2	:	560,
		y1	:	250,
	},			
282	:{	name	:	'HX3JG',
		x1	:	562,
		x2	:	740,
		y1	:	250,
	},			
283	:{	name	:	'H3DG',
		x1	:	742,
		x2	:	885,
		y1	:	250,
	},			
284	:{	name	:	'H5DG',
		x1	:	887,
		x2	:	1017,
		y1	:	250,
	},			
285	:{	name	:	'H9DG',
		x1	:	1019,
		x2	:	1127,
		y1	:	190,
	},			
286	:{	name	:	'H5G',
		x1	:	1169,
		x2	:	1343,
		y1	:	130,
	},			
287	:{	name	:	'H3G',
		x1	:	1129,
		x2	:	1383,
		y1	:	190,
	},			
288	:{	name	:	'HIG',
		x1	:	1019,
		x2	:	1524,
		y1	:	250,
	},			
289	:{	name	:	'HS3LQ',
		x1	:	202,
		x2	:	380,
		y1	:	310,
	},			
290	:{	name	:	'HS2LQ',
		x1	:	382,
		x2	:	560,
		y1	:	310,
	},			
291	:{	name	:	'HS1LQ',
		x1	:	562,
		x2	:	740,
		y1	:	310,
	},			
292	:{	name	:	'H1DG',
		x1	:	742,
		x2	:	885,
		y1	:	310,
	},			
293	:{	name	:	'H7DG',
		x1	:	887,
		x2	:	1017,
		y1	:	310,
	},			
294	:{	name	:	'H11DG',
		x1	:	1019,
		x2	:	1127,
		y1	:	370,
	},			
295	:{	name	:	'HIIG',
		x1	:	1019,
		x2	:	1524,
		y1	:	310,
	},			
296	:{	name	:	'H4G',
		x1	:	1129,
		x2	:	1383,
		y1	:	370,
	},			
297	:{	name	:	'H6G',
		x1	:	1169,
		x2	:	1343,
		y1	:	430,
	},			
298	:{	name	:	'HX1LQ',
		x1	:	1627,
		x2	:	1780,
		y1	:	250,
	},			
299	:{	name	:	'H2DG',
		x1	:	1526,
		x2	:	1625,
		y1	:	250,
	},			
300	:{	name	:	'H6DG',
		x1	:	1385,
		x2	:	1493,
		y1	:	190,
	},			
301	:{	name	:	'HS1JG',
		x1	:	1627,
		x2	:	1780,
		y1	:	310,
	},			
302	:{	name	:	'H4DG',
		x1	:	1526,
		x2	:	1625,
		y1	:	310,
	},			
303	:{	name	:	'H8DG',
		x1	:	1385,
		x2	:	1493,
		y1	:	370,
	},				
			


    
    
    
    
    
    

}