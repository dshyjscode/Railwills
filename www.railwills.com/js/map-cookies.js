$.cookie.json=true;

var json={
	 i:0,
	 s:0,   // 用作限速起始轨道区段的i值减一
	 e:0,   // 用作限速终点轨道区段的i值
	 B:[],
	 //zhanchangtu:{},
	 //lieche:{}
	 C:['16903','18004','17905','17806','17707','17608','19010','19111','19212','19313','19514','20615','20516','20417',    '20318','20219','21420','21521','21622','21723','21924','22925','22826','22727','22628','23630','23731','23832',
	  '23933','24134','25135','25036','24937','24838','25840','25941','26042','26143','26344','27345','27246','27147',
	   '27048','28049','28150','28251','28352','28453','28854']
}

var BgCom={
	xh:[],
	one_FH:'AB',              ///回执帧头
	one_FT:'AC',              ///回执帧尾
	dapaidui:null,
    Lieche:null
	
}

var car={
	first:[],
	second:[],
	//shangxing:[]
}

var Car={
	first:[],
	second:[],
	yuexing:[]   // 存储越行站所在的进路序号
}
 

var cch={
	cch1:[],
	cch2:[]
}

var Cch=null;
var Cch1=null;
var Cch2=null;

var map_tsrs=null;   // 定义获取的临时限速服务器发送的cookie信息
//var cookieTSRS;
/**cookies操作**/
function addCookie(name,mapJson){
	
    /*  cookie值中不能含有分号、逗号和空白符 除非在添加cookie值之前使用encodeURIComponent()全局函数进行编码
          当使用了encodeURIComponent()后 那么在获取cookie值就必须使用相应的decodeURIComponent()函数 */
	/*alert(svg.stations[0]+svg.stations[1]+svg.stations[2]+svg.stations.length)*/
	//  
	$.cookie(name, mapJson, { path: '/' });
	

}
 
 function getCookie_map()
{
	//var Len=[];
	i=0;
	var bj=null;
	var tj=null;
	var jn=null;
	var nj=null;
	var sz=null;
	var sh=null;
	
	var Bj=null;
	var Tj=null;
	var Jn=null;
	var Nj=null;
	var Sz=null;
	var Sh=null;
	
	var BJ=[];
	var TJ=[];
	var JN=[];
	var NJ=[];
	var SZ=[];
	var SH=[];
	
	bj=$.cookie('北京联锁');  // bj为object(对象)
	tj=$.cookie('天津联锁');
	jn=$.cookie('济南联锁');
	nj=$.cookie('南京联锁');
	sz=$.cookie('苏州联锁');
	sh=$.cookie('上海联锁');
	//alert(nj)
	
	
	
	Bj=JSON.stringify(bj);  // Bj为string(字符)
	Tj=JSON.stringify(tj);
	Jn=JSON.stringify(jn);
	Nj=JSON.stringify(nj);
	Sz=JSON.stringify(sz);
	Sh=JSON.stringify(sh);
	//alert(typeof bj)
    
    // 判断每个站的cookie是否为空，若不为空，将其转化为数组形式
    if(bj!=null)
	{ i=json.i;
	  BJ= Bj.substr(1,Bj.length-2).split(",");
	  json.B[i]=BJ;
	  i=i+1;
	  json.i=i;
	}
	
	if(tj!=null)
	{ i=json.i;
	  TJ= Tj.substr(1,Tj.length-2).split(",");
	  json.B[i]=TJ;
	  i=i+1;
	  json.i=i;
	}
	
	if(jn!=null)
	{ i=json.i;
	  JN= Jn.substr(1,Jn.length-2).split(",");
	  json.B[i]=JN;
	  i=i+1;
	  json.i=i;
	}

    if(nj!=null)
	{ i=json.i;
	  NJ= Nj.substr(1,Nj.length-2).split(",");
	  json.B[i]=NJ;
	  //alert(json.B[i])
	  i=i+1;
	  json.i=i;
	}

    if(sz!=null)
	{ i=json.i;
	  SZ= Sz.substr(1,Sz.length-2).split(",");
	  json.B[i]=SZ;
	  i=i+1;
	  json.i=i;
	}
	
	if(sh!=null)
	{ i=json.i;
	  SH= Sh.substr(1,Sh.length-2).split(",");
	  json.B[i]=SH;	  
	}
	//alert(Bj);
	/*json.B[0]=BJ;
	json.B[1]=TJ;
	json.B[2]=JN;
	json.B[3]=NJ;
	json.B[4]=SZ;
	json.B[5]=SH;*/
	//alert(json.B[1]);
	//alert(json.B[i])

	
    //var val="";
	//var cch1=null;
	//var cch2=null;
	if(bj!=null||tj!=null||jn!=null||nj!=null||sz!=null||sh!=null)
	{
	  var type=null;
	  if(bj!=null)
	  {
	    type=BJ[0].substr(5,2);
	  }
	  //alert(type)
	  if(type!=null&&type==03)   // 此时为调车作业
      {
		zq=1000;
	    Cch1=BJ[0].substr(11,4);   // 获取调车的车次号
	    jinlu_num=BJ[0].substr(19,3);  // 获取调车作业的进路序号
	    jinlu_num=Number(jinlu_num);
	    //i=0;c=0;
	    //alert(Cch1)
	    switch(jinlu_num)
	    {   
		  case 96:
		    i=0;
		    c=3;
		    setInterval("diaochezouche()",zq);		 		   
		    break;
		
		  case 97:
		    i=0;
		    c=3;			
		    setInterval("diaochezouche()",zq);		 		   
		    break;
		   
		  case 98:
		    i=0;
		    c=3;
		    setInterval("diaochezouche()",zq);
		    break;
		  
		  case 99:
		    i=0;
		    c=3;
		    setInterval("diaochezouche()",zq);
		    break;
		   
		  case 100:
		    i=0;
		    c=4;
		    setInterval("diaochezouche()",zq);
		    break;
		   
		  case 101:
		    i=0;
		    c=4;
		    setInterval("diaochezouche()",zq);
		    break;
		   
		  case 102:
		    i=0;
		    c=3;
		    setInterval("diaochezouche()",zq);
		    break;
		  
		  case 103:
		    i=0;
		    c=3;
		    setInterval("diaochezouche()",zq);
		    break;
		   
		  case 104:
		    i=0;
		    c=4;
		    setInterval("diaochezouche()",zq);
		    break;
		   
		  case 105:
		    i=0;
		    c=4;		   
		    setInterval("diaochezouche()",zq);
		    break;
		   
		  case 106:
		    i=0;
		    c=3;
		    setInterval("diaochezouche()",zq);
		    break;
		  
		  case 107:
		    i=0;
		    c=3;
		    setInterval("diaochezouche()",zq);
		    break;
		   
		  case 108:
		    i=0;
		    c=3;
		    setInterval("diaochezouche()",zq);
		    break;
		   
		  case 109:
		    i=0;
		    c=3;
		    setInterval("diaochezouche()",zq);
		    break;
		   
		  case 110:
		    i=0;
		    c=4;
		    setInterval("diaochezouche()",zq);
		    break;
		  
		  case 111:
		    i=0;
		    c=4;
		    setInterval("diaochezouche()",zq);
		    break;
		   
		  case 112:
		    //alert(jinlu_num)
		    i=0;
		    c=3;
		    setInterval("diaochezouche()",zq);
		    break;
		   
		  case 113:
		    i=0;
		    c=3;
		    setInterval("diaochezouche()",zq);
		    break;
		   
		  case 114:
		    i=0;
		    c=4;
		    setInterval("diaochezouche()",zq);
		    break;
		  
		  case 115:
		    i=0;
		    c=4;
		    setInterval("diaochezouche()",zq);
		    break;		
	     }	
      }
	   if((type!=null&&type!=03)||type==null)   // 非调车，此时为列车作业
      {   //alert($.cookie('临时限速服务器'))
	    map_tsrs =  $.cookie('临时限速服务器');
		zq=1000;
	    if(map_tsrs!=null)
	    {
		  IDofcar = map_tsrs.substr(19,4);
		  xiansu_start = map_tsrs.substr(23,3);   // 限速区段的始点
		  xiansu_end = map_tsrs.substr(31,3);     // 限速区段的终点
		  xianlu =map_tsrs.substr(16,2);         // 输出线路信息
		  xiansuzhi = map_tsrs.substr(64,2);     // 输出限速值
	      
		  //alert(json.C[4].substr(0,3))
		  zq=300;
			
		  json.C.forEach(function(val,key){
			  if(val.substr(0,3)== xiansu_start)
			  {
				  json.s=val.substr(3,2);			  			  
			  }
			  
			  if(val.substr(0,3)== xiansu_end)
			  {
				  json.e=val.substr(3,2);
			  }
		  });
		  
		  if(xianlu!=02)
		  {
			  json.s=0;
		  }
		  /*if( json.e>json.s||json.s==0||json.e==0)
			{
				alert("不好意思，您的操作有错误，请检查后再试！")
			}*/
			
		//alert(json.e)
		  /*if(xiansuzhi==01)
		  {
		    zq=1750;  // 当限速值为05时，将定时周期定位1750；
		  }
		  if(xiansuzhi==02)
	      {
			zq=1500;  // 当限速值为05时，将定时周期定位1500；
		  }
		  if(xiansuzhi==03)
		  {
			zq=1250;  // 当限速值为05时，将定时周期定位1250；
		  }
		  if(xiansuzhi==04)
		  {
			zq=1000;  // 当限速值为05时，将定时周期定位1000；
		  }
		
		  if(xiansuzhi==05)
		  {
			zq=750;  // 当限速值为05时，将定时周期定位750；
		  }
		
		  if(xiansuzhi==06)
		  {
			zq=500;  // 当限速值为05时，将定时周期定位500；
		  }*/
	    }
		//alert(json.B[0])
	    //getCookieof_TSRS();
	    
	    json.B.forEach(function(value,key){
		  $.each(value,function(k,val){		    
		    cch.cch1.push(val.substr(11,4));
		  })
	    });
	    Cch = cch.cch1[0];   // 获得的第一个车次号,理论上是从自上而下最前面的那个站获得的
	
	    //alert(Cch);
	    // 按照从北京南站依次向下查询的顺序
	    json.B.forEach(function(value,key){
		  $.each(value,function(k,val){	    
		    if(val.substr(11,4)==Cch)   
			{
			   car.first.push(val);    // 获得的第一个车次号带的所有信息
			   //alert(car.first.toString());
			   //console.log(car.first);
			   //cch1=v.substr(11,4);
			   //car.first.splice(0,2,v);  // 如果有两辆车，把第一辆车的第一次存的cookies清掉，用最新得到的
			}
			
			/*if(val.substr(11,4)==Cch&&Number(Cch)%2==0)   // 获取车次号，且为偶数
			{
			   car.shangxing.push(val);    // 获得的第一个车次号带的所有信息
			}*/
			
			else
			{
			   car.second.push(val);    // 获得的第二个车次号带的所有信息
			   //alert(car.second.toString());
			   //console.log(car.second);
			   //var cch2=v.substr(11,4);
			   //car.second.splice(0,2,v);
			}
		  })
	    });
	
	    /* var cardata ={};     // 存某几个车次号的联锁发来的信息(后续要从中找到每一辆车的始点站和终点站，用于走形列车)
	    $.each(car,function(index,value){
		 $.esch(car[index],function(n,val){
			 if(car.sizeof(0001))   // 将同一车次号的联锁发来的信息顺序存在一起
			 {
				cardata.push();
			 }
		 })
	    }); *///////////////////////////////////////////////////////////////////////////////////
	

	    var car1_first=null;
	    var car1_end=null;
	    var car2_first=null;
	    var car2_end=null;
	
	
	    var Car1_first="";
	    var Car1_end="";
	    var Car2_first=null;
	    var Car2_end=null;
		
	    var car1_time=null;
	    var car2_time=null;
	
	    var liecheshu=null;
	
	    var len1 = Object.keys(car.first).length;// 取到字典的长度(键值对的个数，获得的第一个车次号所在的列车)
	    var len2 = Object.keys(car.second).length;// 取到字典的长度(键值对的个数，获得的第一个车次号所在的列车)
        //var len3 = Object.keys(car.shangxing).length;
	
	    car1_first = car.first[0];   //  从中截取获得的第一个车次号所在列车的始发站信息
	    car1_end =car.first[len1-1];   //  从中截取获得的第一个车次号所在列车的终点站信息
	    //alert(car.second);
	
	    car2_first = car.second[0];   //  从中截取获得的第二个车次号所在列车的始发站信息
	    car2_end =car.second[len2-1];   //  从中截取获得的第二个车次号所在列车的终点站信息
	
	    var sfz1 = car1_first[7]+car1_first[8];   // 获得第一辆车的始发站
	    //alert(sfz1);
	    var zdz1 = car1_end[7]+car1_end[8];       // 获得取第一辆车的终点站
	    var checihao1 = car1_first[11]+car1_first[12]+car1_first[13]+car1_first[14];  // 获得取第一辆车的车次号
        //alert(zdz1);
	    //var cch1=Number(checihao1);   // 将车次号转为数值类型
	    
	    switch(sfz1)  // 判断得到第一个车次号在第一个车站的发车时间
	    {
	
	      case '16':
		    if(bj!=null)
	        {car1_time=BJ[0].substr(15,4);}
		    break;
	
	      case '17':
		    if(tj!=null)
	        {car1_time=TJ[0].substr(15,4);}
		    break;
		   
	      case '18':
		    if(jn!=null)			
	        {car1_time=JN[0].substr(15,4);}
		    break;
	
	      case '19':
		    if(nj!=null)
	        {car1_time=NJ[0].substr(15,4);}
		    break;
		   
	      case '20':
		    if(sz!=null)
	        {car1_time=SZ[0].substr(15,4);}
		    break;
	
	      case '21':
		    if(sh!=null)
	        {car1_time=SH[0].substr(15,4);}
		    break;
	    }
	
	    //alert(car1_time)
	    /*if(sfz1==16)
	    {
		  car1_time=BJ[0].substr(15,4);  //第一辆车的发车时间
	    }
	    alert(car1_time)*/
	    if(car2_first!=null)   // 第二辆车的信息不为空，表示此时有两辆车
        {
		
	      var sfz2 = car2_first[7]+car2_first[8];    // 获得第二辆车的始发站
	      //alert(sfz2);
	      var zdz2 = car2_end[7]+car2_end[8];        // 获得第二辆车的始发站
	      //alert(zdz2);
	      var checihao2 = car2_first[11]+car2_first[12]+car2_first[13]+car2_first[14];   // 获得取第二辆车的车次号
	      //var cch2=Number(checihao2);    // 将车次号转为数值类型
		  //alert(sfz2)
	      switch(sfz2)  // 判断得到的第二个车次号在第一个车站的发车时间
	      {
	
	        case '16':
			  if(bj!=null)
	          {car2_time=BJ[1].substr(15,4);}
		      break;
	
	        case '17':
			  if(tJ!=null)
	          {car2_time=TJ[1].substr(15,4);}
		      break;
		   
	        case '18':
			  if(jn!=null)	
	          {car2_time=JN[1].substr(15,4);}
		      break;
	
	        case '19':
			  if(nj!=null)
	          {car2_time=NJ[1].substr(15,4);}
		      break;
		   
	        case '20':
			  if(sz!=null)
	          {car2_time=SZ[1].substr(15,4);}
		      break;
	
	        case '21':
			  if(sh!=null)
	          {car2_time=SH[1].substr(15,4);}
		      break;
	      }
	
	      car1_time=Number(car1_time);
	      car2_time=Number(car2_time);
		
	      // 对第一辆车和第二辆车进行区分，时间最小的为第一辆车
	      if(car1_time<car2_time)   // 如果获得的第一个车次号在第一站的发车时间小于第二个车次号在第二站的发车时间，第一个车次号为第一辆车
	      {
		    Car.first=car.first;   // 把获得的第一个车次号的信息给第一辆车
		    Car.second=car.second;  // 把获得的第二个车次号的信息给第二辆车
		    Cch1=checihao1;         // 第一辆车的车次号等于获得的第一个车次号
		    Cch2=checihao2;         // 第二辆车的车次号等于获得的第二个车次号
	      }
	
	      else if(car1_time>car2_time)     // 如果获得的第一个车次号在第一站的发车时间大于第二个车次号在第二站的发车时间，第二个车次号为第一辆车
	      {
   		    Car.first=car.second;        // 把获得的第二个车次号的信息给第一辆车
		    Car.second=car.first;        // 把获得的第一个车次号的信息给第二辆车
		    Cch1=checihao2;              // 第一辆车的车次号等于获得的第二个车次号
		    Cch2=checihao1;              // 第二辆车的车次号等于获得的第一个车次号
	      }
	
          //  找到越行所在站的到发类型
          Car.first.forEach(function(value,key){		    		
			Car.yuexing.push(value.substr(22,2));   // 获取每个车站列车的到发类型，02为到发类型
	      });
	
	      if(Car.yuexing.indexOf('02')>-1)  // 如果越行所在站的进路序号为22，则该站为天津南站,开始执行列车在天津南站的下行越行场景
	      {
	        var Len1 = Object.keys(Car.first).length;// 取到字典的长度(键值对的个数，第一辆车)	
	        var Len2 = Object.keys(Car.second).length;// 取到字典的长度(键值对的个数，第二辆车)
	        Car1_first = Car.first[0];   //  从中截取获得的第一个车次号所在列车的始发站信息
	        Car1_end =Car.first[Len1-1];   //  从中截取第一辆车的终点站信息
	
	        Car2_first = Car.second[0];   //  从中截取获得的第二个车次号所在列车的始发站信息
	        Car2_end =Car.second[Len2-1];   //  从中截取第二辆车的终点站信息
	        //alert(Car1_first[7])
	
	        //var Sfz1 = Car1_first[7]+Car1_first[8];   // 获得第一辆车的始发站
	        var Zd1 = Car1_end[7]+Car1_end[8];       // 获得取第一辆车的终点站
	
	        //var Sfz2 = Car2_first[7]+Car2_first[8];    // 获得第二辆车的始发站
	        var Zd2 = Car2_end[7]+Car2_end[8];        // 获得第二辆车的终点站   后续可利用此来对越行场景的终点站进行判断
	        if(Zd1==18&&Zd2==18)
	        {
	          i=3
	 
	          //x=490;y=235	
	          //每隔3000ms调用一次dingshidanduhuaxiaxingxiaoche()函数
	          setInterval("xiaxingyuexing_jinan()",zq);
	
	          var canvas = document.getElementById("canvas");
              var context = canvas.getContext("2d");
		
	          x=800;y=250
              xiaxingxinhaojilvdeng2(x,y)
	
	
	          x=490;y=235
	          context.fillStyle = "blue";
            
	          context.fillRect(x, y, 60, 15);
	          context.beginPath();
	          context.lineWidth = 1;
	          context.strokeStyle = 'blue';
			
	          context.moveTo( x+60, y ); // x+7,y-1
	          context.lineTo( x+60, y+15);
	          context.lineTo( x+90, y+15);
	          context.lineTo( x+60, y);
	          context.fill();
	          context.stroke();
	
	          xieshuzi(x+35,y+12,Cch1)
			
	          context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
	          context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
            			
	          //在始发站办理发车进路后的白光带显示
              context.fillStyle = "#FFF";
	          context.fillRect(fenjiedian[i], 250, fenjiedian[i+3]-fenjiedian[i], 5);
				
	          context.fillStyle = "#FFF";
	          context.fillRect(753, 190, 57, 5);
				
	          context.beginPath();
	          context.lineWidth = 5;
	          context.strokeStyle = '#FFF';
	          x=810;
	          y=189;
	          k=50;
	          context.moveTo( x, y+6 ); // x+7,y-1
	          context.lineTo( x+k, y+6+k);
	          context.stroke();
			    
	          context.beginPath();
	          context.lineWidth = 5;
	          context.strokeStyle = '#FFF';  // 将4DG的双动道岔变为白光带
	          x1=930;
	          y1=260;
	          x2=978;
	          y2=282;
	          context.moveTo( x1, y1 ); // x+7,y-1
	          context.lineTo( x2, y2);
	          context.stroke();	
	          } 
	
	        else
	        {
	        i=3
	        x=490;y=235	
	        //每隔3000ms调用一次dingshidanduhuaxiaxingxiaoche()函数
	        setInterval("xiaxingyuexingchangjing()",zq);
	
	        var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
		
	        x=800;y=250
            xiaxingxinhaojilvdeng2(x,y)
		
	        x=490;y=235
	        context.fillStyle = "blue";
            
	        context.fillRect(x, y, 60, 15);
	        context.beginPath();
	        context.lineWidth = 1;
	        context.strokeStyle = 'blue';
			
	        context.moveTo( x+60, y ); // x+7,y-1
	        context.lineTo( x+60, y+15);
	        context.lineTo( x+90, y+15);
	        context.lineTo( x+60, y);
	        context.fill();
	        context.stroke();
	
	        xieshuzi(x+35,y+12,Cch1)
			
	        context.fillStyle = "red";   // #848284代表灰色（股道的颜色）
	        context.fillRect(fenjiedian[i-1], 250, fenjiedian[i]-fenjiedian[i-1], 5);
            			
	        //在始发站办理发车进路后的白光带显示
            context.fillStyle = "#FFF";
	        context.fillRect(fenjiedian[i], 250, fenjiedian[i+3]-fenjiedian[i], 5);
				
	        context.fillStyle = "#FFF";
	        context.fillRect(753, 190, 57, 5);
				
	        context.beginPath();
	        context.lineWidth = 5;
	        context.strokeStyle = '#FFF';
	        x=810;
	        y=189;
	        k=50;
	        context.moveTo( x, y+6 ); // x+7,y-1
	        context.lineTo( x+k, y+6+k);
	        context.stroke();
			    
	        context.beginPath();
	        context.lineWidth = 5;
	        context.strokeStyle = '#FFF';  // 将4DG的双动道岔变为白光带
	        x1=930;
	        y1=260;
	        x2=978;
	        y2=282;
	        context.moveTo( x1, y1 ); // x+7,y-1
	        context.lineTo( x2, y2);
	        context.stroke();	
			}
          }
          else
	      { 
	        var Len1 = Object.keys(Car.first).length;// 取到字典的长度(键值对的个数，第一辆车)	
	        var Len2 = Object.keys(Car.second).length;// 取到字典的长度(键值对的个数，第二辆车)
	        Car1_first = Car.first[0];   //  从中截取获得的第一个车次号所在列车的始发站信息
	        Car1_end =Car.first[Len1-1];   //  从中截取第一辆车的终点站信息
	
	        Car2_first = Car.second[0];   //  从中截取获得的第二个车次号所在列车的始发站信息
	        Car2_end =Car.second[Len2-1];   //  从中截取第二辆车的终点站信息
	        //alert(Car1_first[7])
	
	        var Sfz1 = Car1_first[7]+Car1_first[8];   // 获得第一辆车的始发站
	        var Zdz1 = Car1_end[7]+Car1_end[8];       // 获得取第一辆车的终点站
	      }
	    }
	
	    else if(car2_first==null)  // 只有一辆车
	    {
		  Car.first=car.first;   // 把获得的第一个车次号的信息给第一辆车
		  Cch1=checihao1;         // 第一辆车的车次号等于获得的第一个车次号
		  var Len1 = Object.keys(Car.first).length;// 取到字典的长度(键值对的个数，第一辆车)
		  Car1_first = Car.first[0];   //  从中截取获得的第一个车次号所在列车的始发站信息
	      Car1_end =Car.first[Len1-1];   //  从中截取第一辆车的终点站信息
		
		  // 车次号为奇数，下行车
		  if(Number(Cch1)%2==1)  
		  {
		    var Sfz1 = Car1_first[7]+Car1_first[8];   // 获得第一辆车的始发站
	        var Zdz1 = Car1_end[7]+Car1_end[8];       // 获得取第一辆车的终点站
		  }		
		  else    // 车次号为偶数，上行车
		  {
			var Sfz1 = Car1_end[7]+Car1_end[8];   // 获得第一辆车的始发站,换顺序是因为每次检查车站是从北京南站开始查
	        var Zdz1 = Car1_first[7]+Car1_first[8];       // 获得取第一辆车的终点站
		  }		
	    }
	
	    switch(Zdz1)  // 获得第一辆车的终点车站所含的cookie信息的数组个数，大于1，则有两辆车，等于1，有一辆车
	    {
	
	      case '16':
	        liecheshu=BJ.length;
		    break;
	
	      case '17':
	        liecheshu=TJ.length;
		    break;
		   
	      case '18':
	        liecheshu=JN.length;
		    break;
	
	      case '19':
	        liecheshu=NJ.length;
		    break;
		   
	      case '20':
	        liecheshu=SZ.length;
		    break;
	
	      case '21':
	        liecheshu=SH.length;
		    break;
	    }   
	
	    if(Car2_first!=null)
	    {
	      var Sfz2 = Car2_first[7]+Car2_first[8];    // 获得第二辆车的始发站
	      var Zdz2 = Car2_end[7]+Car2_end[8];        // 获得第二辆车的终点站   后续可利用此来对越行场景的终点站进行判断	
	    }	
	    //alert(Zdz2)
	    //////// 第一辆车运行
	    // 下行行车---	
	    //var i=0;
	    //var c=0;
	    if(liecheshu==1&&Car2_first==null)  //此时只有一辆车(上行或下行)
	    {
			
	      if(Sfz1=='16'&&Zdz1=='17')   //终点站在天津南站的下行行车
	      {   //i=json.i;
		    i=2;
		    c=14;
		    //b=2000;
		    //alert(i)	
		    setInterval("xiaxingzilvmoshizouche_danche()",zq);
		    //$.cookie('列调',"");   // 将列调计划的cookie设为0
	      }	
	      if(Sfz1=='16'&&Zdz1=='18')   //终点站在济南西站的下行行车
	      {  
	        //i=json.i;
	        i=2;
		    c=24;
			z=0;
		    //BgCom.xh.push(i);
		    //$.cookie('列调',"");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_danche()",zq);				
	      }
	      if(Sfz1=='17'&&Zdz1=='18')   //终点站在济南西站的下行行车
	      {   
		    i=13;
		    c=24;
		    //$.cookie('列调',"");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_danche()",zq);
	      }	
	      if(Sfz1=='16'&&Zdz1=='19')   //终点站在南京南站的下行行车
	      {   
		    i=2;
		    c=34;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_danche()",zq);
	      }
	      if(Sfz1=='17'&&Zdz1=='19')   //终点站在济南西站的下行行车
	      {   
		    i=13;
		    c=34;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_danche()",zq);
	      }
	
	      if(Sfz1=='18'&&Zdz1=='19')   //终点站在南京南站的下行行车
	      {   
		    i=23;
		    c=34;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_danche()",zq);
	      }
	
	
	      if(Sfz1=='16'&&Zdz1=='20')   //终点站在苏州北站的下行行车
	      {   
		    i=2;
		    c=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_danche()",zq);
	      }
	      if(Sfz1=='17'&&Zdz1=='20')   //终点站在苏州北站的下行行车
	      {   
		    i=13;
		    c=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_danche()",zq);
	      }
	
	      if(Sfz1=='18'&&Zdz1=='20')   //终点站在苏州北站的下行行车
	      {   
		    i=23;
		    c=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_danche()",zq);
	      }
	
	      if(Sfz1=='19'&&Zdz1=='20')   //终点站在苏州北站的下行行车
	      {   
		    i=33;
		    c=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_danche()",zq);
	      }	
	
	      if(Sfz1=='16'&&Zdz1=='21')   //终点站在上海虹桥站的下行行车
	      {   
		    i=2;
		    c=54;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_danche()",zq);
	      }
	
	      if(Sfz1=='17'&&Zdz1=='21')   //终点站在上海虹桥站的下行行车
	      {   
		    i=13;
		    c=54;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_danche()",zq);
	      }
	
	      if(Sfz1=='18'&&Zdz1=='21')   //终点站在上海虹桥站的下行行车
	      {  
		    i=23;
		    c=54;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_danche()",zq);
	      }
	
	      if(Sfz1=='19'&&Zdz1=='21')   //终点站在上海虹桥站的下行行车
	      {  
		    i=33;
		    c=54;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_danche()",zq);
	      }
	
	      if(Sfz1=='20'&&Zdz1=='21')   //终点站在上海虹桥站的下行行车
	      {   
		    i=43;
		    c=54;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_danche()",zq);
	      }
    
	      // 上行行车------------------------------------------
	      if(Sfz1=='21'&&Zdz1=='20')   //终点站在苏州北站的上行行车
	      {
		    p=55;
		    d=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("shangxingzilvmoshizouche_beijing()",zq);
	      }
	
	      if(Sfz1=='21'&&Zdz1=='19')   //终点站在南京南站的上行行车
	      {   
		    p=55;
		    d=34;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("shangxingzilvmoshizouche_beijing()",zq);
	      }
	      if(Sfz1=='20'&&Zdz1=='19')   //终点站在南京南站的上行行车
	      {   
		    p=45;
		    d=34;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("shangxingzilvmoshizouche_beijing()",zq);
	      }
	
	      if(Sfz1=='21'&&Zdz1=='18')   //终点站在济南西站的上行行车
	      {
		    p=55;
		    d=24;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("shangxingzilvmoshizouche_beijing()",zq);
	      }
	
	      if(Sfz1=='20'&&Zdz1=='18')   //终点站在济南西站的上行行车
	      {  
		    p=45;
		    d=24;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("shangxingzilvmoshizouche_beijing()",zq);
	      }
	      if(Sfz1=='19'&&Zdz1=='18')   //终点站在济南西站的上行行车
	      {   
		    p=35;
		    d=24;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("shangxingzilvmoshizouche_beijing()",zq);
	      }
	
	
	      if(Sfz1=='21'&&Zdz1=='17')   //终点站在天津南站的上行行车
	      {
		    p=55;
		    d=14;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("shangxingzilvmoshizouche_beijing()",zq);
	      }
	      if(Sfz1=='20'&&Zdz1=='17')   //终点站在天津南站的上行行车
	      {   
		    p=45;
		    d=14;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("shangxingzilvmoshizouche_beijing()",zq);
	      }
	      if(Sfz1=='19'&&Zdz1=='17')   //终点站在天津南站的上行行车
	      {   
		    p=35;
		    d=14;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("shangxingzilvmoshizouche_beijing()",zq);
	      }

	      if(Sfz1=='18'&&Zdz1=='17')   //终点站在天津南站的上行行车
	      {  
		    p=25;
		    d=14;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("shangxingzilvmoshizouche_beijing()",zq);
	      }
	
	      if(Sfz1=='21'&&Zdz1=='16')   //终点站在北京南站的上行行车
	      {
		    p=55;
		    d=3;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("shangxingzilvmoshizouche_beijing()",zq);
	      }

	      if(Sfz1=='20'&&Zdz1=='16')   //终点站在北京南站的上行行车
	      {   
		    p=45;
		    d=3;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("shangxingzilvmoshizouche_beijing()",zq);
	      }
	      if(Sfz1=='19'&&Zdz1=='16')   //终点站在北京南站的上行行车
	      {   
		    p=35;
		    d=3;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("shangxingzilvmoshizouche_beijign()",zq);
	      }
	      if(Sfz1=='18'&&Zdz1=='16')   //终点站在北京南站的上行行车
	      {   
		    p=25;
		    d=3;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("shangxingzilvmoshizouche_beijing()",zq);
	      }
	
	      if(Sfz1=='17'&&Zdz1=='16')   //终点站在北京南站的上行行车
	      {   
		    p=15;
		    d=3;
		    //alert(p)
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("shangxingzilvmoshizouche_beijing()",zq);
	      }	
	    }
		
        if(liecheshu==1&&Car2_first!=null)  //此时有两辆车，都在正线
	    {
	      if(Sfz1=='16'&&Zdz1=='17')   //终点站在天津南站的下行行车
	      {   //i=json.i;
		    i=2;
		    c=14;	
		    //alert(i)	
		    setInterval("xiaxingzilvmoshizouche_shanghai()",zq);
		    //$.cookie('列调',"");   // 将列调计划的cookie设为0
	      }	
	      //document.write(lastLog);
	      //alert(lastLog);
	      if(Sfz1=='16'&&Zdz1=='18')   //终点站在济南西站的下行行车
	      {  
	        //i=json.i;
	        i=2;
		    c=24;
		    //BgCom.xh.push(i);
		    //$.cookie('列调',"");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_shanghai()",zq);				
	      }
	      //alert(json.i);
	      if(Sfz1=='17'&&Zdz1=='18')   //终点站在济南西站的下行行车
	      {   
		    i=13;
		    c=24;
		    //$.cookie('列调',"");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_shanghai()",zq);
	      }
		
	      if(Sfz1=='16'&&Zdz1=='19')   //终点站在南京南站的下行行车
	      {   
		    i=2;
		    c=34;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_shanghai()",zq);
	      }
	      if(Sfz1=='17'&&Zdz1=='19')   //终点站在南京西站的下行行车
	      {   
		    i=13;
		    c=34;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_shanghai()",zq);
	      }
	
	      if(Sfz1=='18'&&Zdz1=='19')   //终点站在南京南站的下行行车
	      {   
		    i=23;
		    c=34;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_shanghai()",zq);
		  }
	
	      if(Sfz1=='16'&&Zdz1=='20')   //终点站在苏州北站的下行行车
	      {   
		    i=2;
		    c=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_shanghai()",zq);
	      }
	      if(Sfz1=='17'&&Zdz1=='20')   //终点站在苏州北站的下行行车
	      {   
		    i=13;
		    c=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_shanghai()",zq);
	      }
	
	      if(Sfz1=='18'&&Zdz1=='20')   //终点站在苏州北站的下行行车
	      {   
		    i=23;
		    c=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_shanghai()",zq);
	      }
	
	      if(Sfz1=='19'&&Zdz1=='20')   //终点站在苏州北站的下行行车
	      {   
		    i=33;
		    c=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_shanghai()",zq);
	      }	
	
	      if(Sfz1=='16'&&Zdz1=='21')   //终点站在上海虹桥站的下行行车
	      {   
		    i=2;
		    c=54;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_shanghai()",zq);
	      }
	
	      if(Sfz1=='17'&&Zdz1=='21')   //终点站在上海虹桥站的下行行车
	      {   
		    i=13;
		    c=54;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_shanghai()",zq);
	      }
	
	      if(Sfz1=='18'&&Zdz1=='21')   //终点站在上海虹桥站的下行行车
	      {  
		    i=23;
		    c=54;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_shanghai()",zq);
	      }
	
	      if(Sfz1=='19'&&Zdz1=='21')   //终点站在上海虹桥站的下行行车
	      {   
		    i=33;
		    c=54;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_shanghai()",zq);
	      }
	
	      if(Sfz1=='20'&&Zdz1=='21')   //终点站在上海虹桥站的下行行车
	      {   
		    i=43;
		    c=54;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_shanghai()",zq);
	      }
	      //////第二辆车运行
	      //var f;
	      //var g;	
	      if(Sfz2=='16'&&Zdz2=='17')   //终点站在天津南站的下行行车
	      {
		    f=2-5;
		    g=14;
		    //sleep(6000);		
		    setInterval("xxzilvmoshizouche()",zq);
		    //$.cookie('列调',"");   // 将列调计划的cookie设为0
	      }
	
	      if(Sfz2=='16'&&Zdz2=='18')   //终点站在济南西站的下行行车
	      {   
		    f=2-5;
		    g=24;
		    //$.cookie('列调',"");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche()",zq);
	      }
	      /*if(Sfz2=='17'&&Zdz2=='18')   //终点站在济南西站的下行行车   第二辆车不是从北京站发车
	      {   
		    f=13-5;
		    g=24;
		    //$.cookie('列调',"");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche_shanghai()",zq);
	      }*/
	
	      if(Sfz2=='16'&&Zdz2=='19')   //终点站在南京南站的下行行车
	      {   
		    f=2-5;
		    g=34;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche()",zq);
	      }
	      /*if(Sfz2=='17'&&Zdz2=='19')   //终点站在南京西站的下行行车   第二辆车不是从北京站发车
  	      {   
		    f=13-5;
		    g=34;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche_shanghai()",zq);
	      }
	
	      if(Sfz2=='18'&&Zdz2=='19')   //终点站在南京南站的下行行车
	      {   
		    f=23-5;
		    g=34;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche_shanghai()",zq);
	      }*/
	
	
	      if(sfz2=='16'&&Zdz2=='20')   //终点站在苏州北站的下行行车
	      {   
		    f=2-5;
		    g=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche()",zq);
	      }
	      /*if(Sfz2=='17'&&Zdz2=='20')   //终点站在苏州北站的下行行车   第二辆车不是从北京站发车
	      {   
		    f=13-5;
		    g=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche_shanghai()",zq);
	      }
	
	      if(Sfz2=='18'&&Zdz2=='20')   //终点站在苏州北站的下行行车
	      {   
		    f=23-5;
		    g=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche_shanghai()",zq);
	      }
	
	      if(Sfz2=='19'&&Zdz2=='20')   //终点站在苏州北站的下行行车
	      {   
		    f=33-5;
		    g=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche_shanghai()",zq);
	      }	*/
	
	      if(Sfz2=='16'&&Zdz2=='21')   //终点站在上海虹桥站的下行行车
	      {  
		    f=2-5;
		    g=54;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche()",zq);
	      }
	
	      /*if(Sfz2=='17'&&Zdz2=='21')   //终点站在上海虹桥站的下行行车   第二辆车不是从北京站发车
	      {  
		    f=13-5;
		    g=54;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche_shanghai()",zq);
	      }
	
	      if(Sfz2=='18'&&Zdz2=='21')   //终点站在上海虹桥站的下行行车
	      {   
		    f=23-5;
		    g=54;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche_shanghai()",zq);
	      }
	
	      if(Sfz2=='19'&&Zdz2=='21')   //终点站在上海虹桥站的下行行车
	      {   
		    f=33-5;
		    g=54;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche_shanghai()",zq);
	      }
	
	      if(Sfz2=='20'&&Zdz2=='21')   //终点站在上海虹桥站的下行行车
	      {   
		    f=43-5;
		    g=54;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche_shanghai()",zq);
	      }*/
	
	      /*if(JSON.stringify(json.B)!="{}"){		
		    setTimeout(getCookie_map,100)
	      }*/	
	    }	
	
        /////////////////////////////////////////////////////////////////////////////////
        if(liecheshu>1)  //  如果列车数大于1，两辆车，第一辆侧线停车，第二辆正线正常行车
	    {	
	      if(Sfz1=='16'&&Zdz1=='17')   //终点站在天津南站的下行行车
	      {   
		    i=2;
		    c=14;		
		    setInterval("xiaxingzilvmoshizouche_cexianjinzhan()",zq);
		    //alert($.cookie("lieche_1"))
		    //$.cookie('列调',"");   // 将列调计划的cookie设为0
	      }
	      if(Sfz1=='16'&&Zdz1=='18')   //终点站在济南西站的下行行车
	      {  
	        i=2;
		    c=24;
		    //BgCom.xh.push(i);
		    //$.cookie('列调',"");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_cexianjinzhan()",zq);				
	      }
	      //alert(json.i);
	      if(Sfz1=='17'&&Zdz1=='18')   //终点站在济南西站的下行行车
	      {   
		    i=13;
		    c=24;
		    //$.cookie('列调',"");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_cexianjinzhan()",zq);
	      }	
	      if(Sfz1=='16'&&Zdz1=='19')   //终点站在南京南站的下行行车
	      {   
		    i=2;
		    c=34;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_cexianjinzhan()",zq);
	      }
	      if(Sfz1=='17'&&Zdz1=='19')   //终点站在南京西站的下行行车
	      {   
		    i=13;
		    c=34;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_cexianjinzhan()",zq);
	      }
	
	      if(Sfz1=='18'&&Zdz1=='19')   //终点站在南京南站的下行行车
	      {   
		    i=23;
		    c=34;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_cexianjinzhan()",zq);
	      }
	
	
	      if(Sfz1=='16'&&Zdz1=='20')   //终点站在苏州北站的下行行车
	      {  
		    i=2;
		    c=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_cexianjinzhan()",zq);
	      }
	      if(Sfz1=='17'&&Zdz1=='20')   //终点站在苏州北站的下行行车
	      {   
		    i=13;
		    c=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_cexianjinzhan()",zq);
	      }
	
	      if(Sfz1=='18'&&Zdz1=='20')   //终点站在苏州北站的下行行车
	      {   
		    i=23;
		    c=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_cexianjinzhan()",zq);
	      }
	
	      if(Sfz1=='19'&&Zdz1=='20')   //终点站在苏州北站的下行行车
	      {   
		    i=33;
		    c=44;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_cexianjinzhan()",zq);
	      }	
	
	      if(Sfz1=='16'&&Zdz1=='21')   //终点站在上海虹桥站的下行行车
	      {   
		    i=2;
		    c=55;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_cexianjinzhan()",zq);
	      }
	
	      if(Sfz1=='17'&&Zdz1=='21')   //终点站在上海虹桥站的下行行车
	      {   
		    i=13;
		    c=55;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_cexianjinzhan()",zq);
	      }
	
	      if(Sfz1=='18'&&Zdz1=='21')   //终点站在上海虹桥站的下行行车
	      {   
		    i=23;
		    c=55;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_cexianjinzhan()",zq);
	      }
	
	      if(Sfz1=='19'&&Zdz1=='21')   //终点站在上海虹桥站的下行行车
	      {   
		    i=33;
		    c=55;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_cexianjinzhan()",zq);
	      }
	
	      if(Sfz1=='20'&&Zdz1=='21')   //终点站在上海虹桥站的下行行车
	      {  
		    i=43;
		    c=55;
		    //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		    setInterval("xiaxingzilvmoshizouche_cexianjinzhan()",zq);
	      }
    
	      //////第二辆车运行
	      //var f;
	      //var g;
	
	      if(Sfz2=='16'&&Zdz2=='17')   //终点站在天津南站的下行行车
	      {
		    f=2-5;
		    g=14;
		    //sleep(6000);		
		    setInterval("xxzilvmoshizouche_shanghai()",zq);
		    //$.cookie('列调',"");   // 将列调计划的cookie设为0
	      }
	
	      if(Sfz2=='16'&&Zdz2=='18')   //终点站在济南西站的下行行车
	      {  
		    f=2-5;
		    g=24;
		    //$.cookie('列调',"");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche_shanghai()",zq);
	      }
	      /*if(Sfz2=='17'&&Zdz2=='18')   //终点站在济南西站的下行行车   第二辆车不是从北京站发车
	      {   
		    f=13-5;
		    g=24;
		    //$.cookie('列调',"");   // 将列调计划的cookie设为0
		    setInterval("xxzilvmoshizouche_shanghai()",zq);
	      }*/
		  	
	     if(Sfz2=='16'&&Zdz2=='19')   //终点站在南京南站的下行行车
	     {   
		   f=2-5;
		   g=34;
		   //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		   setInterval("xxzilvmoshizouche_shanghai()",zq);
	     }
	     /*if(Sfz2=='17'&&Zdz2=='19')   //终点站在南京西站的下行行车   第二辆车不是从北京站发车
  	     {   
		   f=13-5;
		   g=34;
		   //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		   setInterval("xxzilvmoshizouche_shanghai()",zq);
	     }
	
	     if(Sfz2=='18'&&Zdz2=='19')   //终点站在南京南站的下行行车
	     {   
		   f=23-5;
		   g=34;
		   //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		   setInterval("xxzilvmoshizouche_shanghai()",zq);
	     }*/
	
	
	     if(sfz2=='16'&&Zdz2=='20')   //终点站在苏州北站的下行行车
	     {   
		   f=2-5;
		   g=44;
		   //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		   setInterval("xxzilvmoshizouche_shanghai()",zq);
	     }
	     /*if(Sfz2=='17'&&Zdz2=='20')   //终点站在苏州北站的下行行车   第二辆车不是从北京站发车
	     {   
		   f=13-5;
		   g=44;
		   //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		   setInterval("xxzilvmoshizouche_shanghai()",zq);
	     }
	
	     if(Sfz2=='18'&&Zdz2=='20')   //终点站在苏州北站的下行行车
	     {   
		   f=23-5;
		   g=44;
		   //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		   setInterval("xxzilvmoshizouche_shanghai()",zq);
	     }
	
	     if(Sfz2=='19'&&Zdz2=='20')   //终点站在苏州北站的下行行车
	     {   
		   f=33-5;
		   g=44;
		   //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		   setInterval("xxzilvmoshizouche_shanghai()",zq);
	     }	*/
	
	     if(Sfz2=='16'&&Zdz2=='21')   //终点站在上海虹桥站的下行行车
	     {  
		   f=2-5;
		   g=54;
		   //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		   setInterval("xxzilvmoshizouche_shanghai()",zq);
	      }
	
	    /*if(Sfz2=='17'&&Zdz2=='21')   //终点站在上海虹桥站的下行行车   第二辆车不是从北京站发车
	    {   
		  f=13-5;
		  g=54;
		  //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		  setInterval("xxzilvmoshizouche_shanghai()",zq);
	    }
	
	    if(Sfz2=='18'&&Zdz2=='21')   //终点站在上海虹桥站的下行行车
	    {  
		  f=23-5;
		  g=54;
		  //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		  setInterval("xxzilvmoshizouche_shanghai()",zq);
	    }
	
	    if(Sfz2=='19'&&Zdz2=='21')   //终点站在上海虹桥站的下行行车
	    {   
		  f=33-5;
		  g=54;
		  //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		  setInterval("xxzilvmoshizouche_shanghai()",zq);
	    }
	
	    if(Sfz2=='20'&&Zdz2=='21')   //终点站在上海虹桥站的下行行车
	    {  
		  f=43-5;
		  g=54;
		  //$.cookie('列调', "0");   // 将列调计划的cookie设为0
		  setInterval("xxzilvmoshizouche_shanghai()",zq);
	    }*/
	
	    /*if(JSON.stringify(json.B)!="{}"){	
		   setTimeout(getCookie_map,100)
	    }*/	
	  }  //   if(liecheshu>1) 的结束
    }  // 列车作业的结束
  }  // 判断六个站其中有一站有信息的结束
}  // function getCookie_map函数的结束
	
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

//字符串替换位操作-----将第i为替换为d
function rePlaceStr1(str,a,b){
	var string
	/*if(i==1){
		string=d+str.substr(1)
	}*/
	/*else if(i==str.length){
		string=str.substr(0,i-1)+d
	}*/	
	string=str.substr(0,a-1)+b+str.substr(a)
	
	return string
}

function rePlaceStr2(str,a,b,c,d){
	var string
	/*if(i==1){
		string=d+str.substr(1)
	}*/
	/*else if(i==str.length){
		string=str.substr(0,i-1)+d
	}*/	
	string=str.substr(0,a-1)+b+str.substr(a)
	string=string.substr(0,c-1)+d+str.substr(c)
	
	return string
}

function rePlaceStr3(str,a,b,c,d,e,f){
	var string
	/*if(i==1){
		string=d+str.substr(1)
	}*/
	/*else if(i==str.length){
		string=str.substr(0,i-1)+d
	}*/	
	string=str.substr(0,a-1)+b+str.substr(a)
	string=string.substr(0,c-1)+d+str.substr(c)
	string=string.substr(0,e-1)+f+str.substr(e)
	
	return string
}

function rePlaceStr4(str,a,b,c,d,e,f,g,h){
	var string
	/*if(i==1){
		string=d+str.substr(1)
	}*/
	/*else if(i==str.length){
		string=str.substr(0,i-1)+d
	}*/	
	string=str.substr(0,a-1)+b+str.substr(a)
	string=string.substr(0,c-1)+d+str.substr(c)
	string=string.substr(0,e-1)+f+str.substr(e)
	string=string.substr(0,g-1)+h+str.substr(g)
	
	return string
}

function rePlaceStr5(str,a,b,c,d,e,f,g,h,i,j){
	var string
	/*if(i==1){
		string=d+str.substr(1)
	}*/
	/*else if(i==str.length){
		string=str.substr(0,i-1)+d
	}*/	
	string=str.substr(0,a-1)+b+str.substr(a)
	string=string.substr(0,c-1)+d+str.substr(c)
	string=string.substr(0,e-1)+f+str.substr(e)
	string=string.substr(0,g-1)+h+str.substr(g)
	string=string.substr(0,i-1)+j+str.substr(i)
	
	return string
}

function rePlaceStr6(str,a,b,c,d,e,f,g,h,i,j,k,l){
	var string
	/*if(i==1){
		string=d+str.substr(1)
	}*/
	/*else if(i==str.length){
		string=str.substr(0,i-1)+d
	}*/	
	string=str.substr(0,a-1)+b+str.substr(a)
	string=string.substr(0,c-1)+d+str.substr(c)
	string=string.substr(0,e-1)+f+str.substr(e)
	string=string.substr(0,g-1)+h+str.substr(g)
	string=string.substr(0,i-1)+j+str.substr(i)
	string=string.substr(0,k-1)+l+str.substr(k)
	
	return string
}

function rePlaceStr7(str,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
	var string
	/*if(i==1){
		string=d+str.substr(1)
	}*/
	/*else if(i==str.length){
		string=str.substr(0,i-1)+d
	}*/	
	string=str.substr(0,a-1)+b+str.substr(a)
	string=string.substr(0,c-1)+d+str.substr(c)
	string=string.substr(0,e-1)+f+str.substr(e)
	string=string.substr(0,g-1)+h+str.substr(g)
	string=string.substr(0,i-1)+j+str.substr(i)
	string=string.substr(0,k-1)+l+str.substr(k)
	string=string.substr(0,m-1)+n+str.substr(m)
	
	return string
}

function rePlaceStr8(str,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
	var string
	/*if(i==1){
		string=d+str.substr(1)
	}*/
	/*else if(i==str.length){
		string=str.substr(0,i-1)+d
	}*/	
	string=str.substr(0,a-1)+b+str.substr(a)
	string=string.substr(0,c-1)+d+str.substr(c)
	string=string.substr(0,e-1)+f+str.substr(e)
	string=string.substr(0,g-1)+h+str.substr(g)
	string=string.substr(0,i-1)+j+str.substr(i)
	string=string.substr(0,k-1)+l+str.substr(k)
	string=string.substr(0,m-1)+n+str.substr(m)
	string=string.substr(0,o-1)+p+str.substr(o)
	
	return string
}

//写cookies
/*function setCookie(name,value) 
{

    var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 

//读取cookies 
function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]); 
    else 
        return null; 
} */

//删除cookies 
function delCookie(name) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
}

//站场图定时查询临时限速的cookie信息
//存放接收到的临时限速信息
var TSRS_cookies=[]
var IDofcar
var xiansu_start
var xiansu_end
var xianlu
var xiansuzhi

//定时执行函数
function getCookieof_TSRS(){
	//alert('ok');
	var cookieTSRS;
	var timer
	$.cookie.json=true;
	cookieTSRS =  $.cookie('临时限速服务器');
	//alert( cookieTSRS);
    if(JSON.stringify(cookieTSRS)=="{}"||JSON.stringify(cookieTSRS)==undefined||cookieTSRS==null){
		timer = setTimeout(function(){
		this.getCookieof_TSRS()
		},10); 
	}
	else {
		clearTimeout(timer) //清理定时任务
		decoder_TSRS(cookieTSRS)
	}
}
//解析临时限速信息
function decoder_TSRS(cookieTSRS){
    
	var content = cookieTSRS;
	//alert(content)
	TSRS_cookies.push(content)

    //$.each(content,function(n,val){
		
    //      TSRS_cookies.push(val)
		
     //})
    TSRS_cookies.forEach(function(val,n){
		IDofcar = val.substr(19,4);
		xiansu_start = val.substr(23,3);   // 限速区段的始点
		xiansu_end = val.substr(31,3);     // 限速区段的终点
		xianlu =val.substr(16,2);         // 输出线路信息
		xiansuzhi = val.substr(62,2);     // 输出限速值
		})
	alert(xiansuzhi)
		
	//清空
	TSRS_cookies=[]
	//发完cookie3s后继续查询车务终端
	setTimeout(getCookieof_TSRS(),3000)

}
