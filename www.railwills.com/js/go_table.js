/**
 * Created by asd on 2017/8/17.
 */
var AfterT,BeforeT
var autoCarNum=[]

function openYxtTable(N,K) {
    var date=new Date()
    var H=date.getHours()
    K!=null?Sdraw=false:Sdraw=true
     AfterT=N||H+1,
        BeforeT=K||H
    ReadCarTD(1)
}


/*生成列表*/
function goTable() {

    var arr1=arrTDAdj
    var arr2=arrTDCar
    var tab=$('#goT_table')
    var td=$('')
    for(var i=0;i<arr1.length;i++) {
        var arr=[]
        //车次号，“”，发车时间，到达时间，发车地点，到达地点，方向 ，发车区段，接车区段
        var num,strTim,endTim,strPlf,endPlf,wherenum,where,strLin,endLin,strLinNum,endLinNum
        num=arr1[i][0]
        strTim=arr1[i][3]
        endTim=arr1[i][2]
        if((arr1[i+1]!=null&&num==arr1[i+1][0])||(arr1[i-1]!=null&&num==arr1[i-1][0])){
            for(var j=0;j<arr2.length;j++) {
                if(arr2[j][0]==num){
                    where=arr2[j][2]
                    where==1?wherenum='下行':wherenum='上行'
                }
            }
            if(arr1[i][1]==1){
                if(arr1[i+1]!=null&&arr1[i][0]==arr1[i+1][0]){
                    if(where==1){
                        strPlf='南夏墅停车场'
                        endPlf='南夏墅站'
                        strLin='G01004'
                        endLin='G01010'
                    }
                    else{
                        strPlf='南夏墅停车场'
                        endPlf='南夏墅站'
                        strLin='G01003'
                        endLin='G01009'
                    }
                    arr=[num,"",strTim,endTim,strPlf,endPlf,wherenum,strLin,endLin]
                    appendTable(arr)
                }

            }
            else{
                strPlf=platform[(arr1[i][1]-1)*2-1][1]
                if(where==1){
                   // strLin=platform[(arr1[i][1])*2-3][7]
				   if((arr1[i][1])*2-2<58)
				   {
						endPlf=platform[(arr1[i][1])*2-2][1]
					   // endLin=platform[(arr1[i][1])*2-1][7]
						strLinNum=platform[(arr1[i][1])*2-3][7]
						endLinNum=platform[(arr1[i][1])*2-4][7]
						for(var n=0;n<axle_section.length;n++){
							if(axle_section[n][0]==strLinNum){
								strLin=axle_section[n][1]
							}
							else if(axle_section[n][0]==endLinNum){
								endLin=axle_section[n][1]
							}
						}
				   }
                }
                else{

                    if((arr1[i][1])*2-5<0){
                        endPlf='南夏墅停车场'
                        strLin='G01009'
                        endLin='G01003'
                    }
                    else{

                        strLinNum=platform[(arr1[i][1])*2-4][7]
                        endPlf=platform[(arr1[i][1])*2-6][1]
                        endLinNum=platform[(arr1[i][1])*2-6][7]
                        for(var n=0;n<axle_section.length;n++){
                            if(axle_section[n][0]==strLinNum){
                                strLin=axle_section[n][1]
                            }
                            else if(axle_section[n][0]==endLinNum){
                                endLin=axle_section[n][1]
                            }
                        }
                    }
                }
                arr=[num,"",strTim,endTim,strPlf,endPlf,wherenum,strLin,endLin]
                appendTable(arr)
            }
            //自动触发，车次号，“”，发车时间，到达时间，发车地点，到达地点，方向，发车区段，接车区段


        }

    }
    GoTable()
    autoCar()

}
function appendTable(arr){
    var tab=$('#goT_table')

    var tr=$('<tr><td><input type="checkbox" checked/>自触</td></tr>')
    for(var i=0;i<arr.length;i++){
        tr.append('<td class="tabl'+i+'">'+arr[i]+'</td>')
    }
    tab.append(tr)
}
function ReadBasicTD()
{
    var Basic5TD=[];
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
            TDBasic=xmlhttp.responseText;
            Basic5TD=TDBasic.split(",");
            for(var j=0;j<30;j++)
                for(var i=0;i<5;i++)
                    arrTDBasic[j][i]=Basic5TD[i+5*j];
            console.log(arrTDBasic)
            /*chart(5760,arrTDBasic)
             stName(arrTDBasic)*/
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./ReadTDBasic.asp",true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}


var AutoSignal=[]
//自动触发

var strLA=[],endLA=[],strTA=[],endT=[],CarNumA=[],strStat=[]
function autoCar(){
    //var strL=[],endL=[],strT=[],endT=[],CarNum=[]        //发车轨道，接车轨道。发车时间。接车时间

    inArr('tabl8',endLA)
    inArr('tabl7',strLA)
    inArr('tabl2',strTA)
    inArr('tabl0',CarNumA)
    inArr('tabl4',strStat)


    //设置第一次从时间读，之后按起始站
    var fir=true


    //获取当日设定值时间
    function setT(){

        for(var i=0;i<strTA.length;i++) {
            //判断车次号
            //if(){}
            //if(fir){
            if(i==0||CarNumA[i]!= CarNumA[i-1]){
                var T=strTA[i].split(':')
                var H=T[0]
                var M=T[1]
                var timeNow=new Date()
                var NH=timeNow.getHours(),
                    NM=timeNow.getMinutes()
                if(NH==H&&NM==M){
                    var time=new Date(new Date().setHours())
                    //如果是第一次
                    var sedArr
                        var carLin=document.getElementById(strLA[i])
                        if(carLin!=null&&carLin!=undefined){
                            if( carLin.car){
                                //console.log(carLin)
                                //goDo(strLA[i],endLA[i],data_CI)
                                sedArr=['ac', LSXS(strLA[i]),2,carLin.carNo , "",CarNumA[i], CarNumA[i],CarNumA[i],CarNumA[i],5 ,1 ,strLA[i]+ "轨道"]
                            }
                            else{
                                sedArr=['ac', LSXS(strLA[i]),1,"" , "", CarNumA[i], CarNumA[i],CarNumA[i],CarNumA[i],5 ,1 ,strLA[i]+ "轨道"]
                                //sed(sedArr)
                                // goDo(strLA[i],endLA[i],data_CI)
                            }
                            // fir=false
                        }
                        else{
                            sedArr=['ac', LSXS(strLA[i]),1,"" , "", CarNumA[i], CarNumA[i],CarNumA[i],CarNumA[i],5 ,1 ,strLA[i] + "轨道"]

                            //goDo(strLA[i],endLA[i],data_CI)
                        }
                        autoCarNum.push(CarNumA[i])

                        sed(sedArr)
                        console.log(strLA[i],endLA[i])
                        GetSignal(strLA[i],endLA[i])
                    }
                    //console.log(strLA[i])

                   //StartSignalToSignal
                    
                   // goDo(strLA[i],endLA[i],data_CI)
                }
           // }
                //if((strLA[i]=='G01004'||strLA[i]=='G01003'||strLA[i]=='G04055'||strLA[i]=='G04054')){

      /*      else{
                //循环车次号在起始位置建车
                CarNum.forEach(function(item,index){

                        if(NH==H&&NM==M){
                            if(index==0){
                            console.log(strLA[i])
                            var carLin=document.getElementById(strLA[i])
                            if(carLin!=null&&carLin!=undefined){
                                if( carLin.car){
                                    console.log(carLin)
                                    //goDo(strLA[i],endLA[i],data_CI)
                                }
                                else{
                                    sedArr=['ac', LSXS(strLA[i]),1,"" , "", + CarNum[i], CarNum[i],CarNum[i],CarNum[i],1 ,1 ,strLA[i] + "轨道"]
                                    sed(sedArr)
                                   // goDo(strLA[i],endLA[i],data_CI)
                                }
                            }
                            else{
                                sedArr=['ac', LSXS(strLA[i]),1,"" , "", + CarNum[i], CarNum[i],CarNum[i],CarNum[i],1 ,1 ,strLA[i] + "轨道"]
                                sed(sedArr)
                               // goDo(strLA[i],endLA[i],data_CI)
                            }
                                GetSignal(strLA[i],endLA[i])
                                console.log(strLA[i],endLA[i])
                               // goDo(strLA[i],endLA[i],data_CI)
                        }
                        else{
                            if(item!=CarNum[index-1]){
                                if(carLin!=null&&carLin!=undefined){
                                    if( carLin.car){
                                       // goDo(strLA[i],endLA[i],data_CI)
                                    }
                                    else{
                                        sedArr=['ac', LSXS(strLA[i]),1,"" , "", + CarNum[i], CarNum[i],CarNum[i],CarNum[i],1 ,1 ,strLA[i]+ "轨道"]
                                        sed(sedArr)
                                       // goDo(strLA[i],endLA[i],data_CI)
                                    }
                                }
                                else{
                                    sedArr=['ac', LSXS(strLA[i]),1,"" , "", + CarNum[i], CarNum[i],CarNum[i],CarNum[i],1 ,1 ,strLA[i] + "轨道"]
                                    sed(sedArr)
                                   // goDo(strLA[i],endLA[i],data_CI)
                                }
                                GetSignal(strLA[i],endLA[i])
                               // goDo(strLA[i],endLA[i],data_CI)
                            }
                        }
                    }
                })
            }*/   //判断不是第一次发送

                  /*  console.log(strLA[i])
                    var carLin=document.getElementById(strLA[i])
                    if(carLin!=null&&carLin!=undefined){
                        if( carLin.car){
                            console.log(carLin)
                            goDo(strLA[i],endLA[i],data_CI)
                        }
                        else{
                            fot_sle(sig_fir + "_" + tha.innerText, 'ac' + "_" + LSXS(strLA[i]) + "_" + 1 + "_" + "" + "_" + "" + "_" + ci.eq(0).val() + "_" + ci.eq(1).val() + "_" + ci.eq(2).val() + "_" + ci.eq(3).val() + "_" + car_cla_name + "_" + moshi_name + "_" + sig_fir + "轨道") : ""

                            goDo(strLA[i],endLA[i],data_CI)
                        }
                    }*/

                //}

           // setTimeout(setT,1000)
        }


         /*  for(var carI=0;carI<AutoSignal.length-1;carI++){
            console.log('cc')
            var sig_key_f = name_out.indexOf(AutoSignal[carI])+1
            var  sig_key_s = name_out.indexOf(AutoSignal[carI+1])+1  //修改于12.26，不知道这个做什么的了
            sed(['t',sig_key_f,sig_key_s,""])
            // sed(['c',AutoSignal[carI],""])
            /!* var sigMN = signal.indexOf(AutoSignal[carI])
             sed(['c',sigMN,""])*!/
            for(var sigI=0;sigI<signal.length;sigI++){
                if(signal[sigI][1]==AutoSignal[carI]){
                    sed(['c',signal[sigI][0],""])
                    //       return
                }
            }
        }*/


        //setTimeout(setT,30000)
    }
    setT()
  /*  setTimeout (function tarCar() {
        var date=new Date()
        var dateH=date.getHours()
        var dateHStr=date.getHours()
        var dateM=date.getMinutes()
        var nowMs=dateHStr*60*1000*60+dateM*60*1000
        var tim=[]   //触发时间毫秒
        for(var i=0;i<strT.length;i++) {
            var strMs = strT[i].split(':')
            var ms=strMs[0]*60*60*1000+strMs[1]*1000*60]
            if(nowMs==ms){

            }
        }
    },30000);
*/

}

//查找发车时间
function countDown(staName,carNo ,arr){
    if(CarNumA.length>0){
        CarNumA.forEach(function (value,index) {
            if(value==carNo&&strStat[index]==staName){
                var tim=new Date()
                var H=tim.getHours(),
                    M=tim.getMinutes(),
                    S=tim.getSeconds()
                var staM=strTA[index].split(':')[1]
                TM=staM*60-M*60-S
                arr.push(TM,strLA[index],endLA[index])
                console.log(arr)
            }
        })
    }
    else{
        console.log('读不到CarNumA')
    }

}




function builtRoad() {
    for(var i=StartSignal.length-2;i>-1;i--){
        var sig_key_f = name_out.indexOf(StartSignal[i])+1
        var sig_key_s = name_out.indexOf(ToSignal[i])+1
        var sedArr=['t',sig_key_f,sig_key_s,'signal']
        sed(sedArr)
    }
    sed(["c", StartSignal[StartSignal.length-1], "signal"])
    StartSignal.splice(0,StartSignal.length)
    ToSignal.splice(0,ToSignal.length)
}


var RouteNum=true;
//触发路径。模拟行车
function goDo(strLA,endLA,data_CI){
  //  console.log(endLA)
    //寻找路径
    var strL=[],endL=[],endT=[]         //发车轨道，接车轨道。发车时间。接车时间
    var sig,toLin,formLin,sigNum,swichNameAll,Lin,rout5All=[],findRoute=false//是否找到了进路的标志          //始端信号机名称，到线，来线，信号机对应序号,储存道岔数组,正则rout数组里的线,rout5线的数组
   //var strLA=inArr('tabl7',strL)
    //var endLA=inArr('tabl8',endL)
	
    loop(strLA)                  //循环函数
function loop(strL) {//原来的自动触发函数
//    console.log(strL,endLA)
	if(strL=='G01004' || strL=='G01003')
	{
		if(strL=='G01003')
		{
			AutoSignal.push('X0101')
			return;
		}
		else if(strL=='G01004')
		{
			AutoSignal.push('X0102')
			return;
		}
	}
    if(strL!=endLA){                                                   //判断发车轨道与接车轨道不为同一轨道
        for(var i=0;i<signal.length;i++){
            //找到formNAME
            if(signal[i][8]==strL){
                sig=signal[i][1]
				if(sig.indexOf('V')>=0)
						continue;
				AutoSignal.push(sig)
//               console.log(sig)
                sigNum=signal[i][0]
                // formLin=signal[i][8]
                for(var j=0;j<routing.length;j++){
                    if(routing[j][1]==sigNum){
						if(routing[j+1][1]==routing[j][1])
								RountNum=true;
						else
								RountNum=false;
						findRoute=true
							rout5All.length=0
						   rout5All.push(routing[j][5])
                        var wayStr=routing[j][5].split('%')
                     
                        if(wayStr.length<2){
                            //没有道岔
                            toLin=signal[i][9]
                            loop(toLin)            //将接车轨道重新定义成发车轨道调用goDo函数
                            return
                        }
                        else{
                            for(var k=1;k<wayStr.length;k++){
                              toLin=  swi(wayStr[k].split('#')[0],data_CI,rout5All,j+1)   //找到道岔名
 //                               console.log(toLin)								
 								if(toLin!=0)
								{
                            	    loop(toLin)								
                       		         return
								}
                            }
                        }
                    }
					
                }
//				if(!findRoute)//放在for外面
//					return ;
//				else
//					findRoute=false;
            }
        }
    }
    else{
        return
    }
}
    //fromname:8 toname:9



}

//遍历data_CI 查找对应道岔情况
function swi(name,data_CI,rout5All,num) {
    var str=new RegExp("\\((.| )+?\\)","igm");   //正则小括号
    //console.log(str.match(rout5All))
	var SwitchName=rout5All[0].split('#')//得到道岔名
    var LinAll=[],Lin                            //路线数组,路线
    //正则得到路线数组
 //   for(var data_i=0;data_i<name1.length;data_i++){
 //       if(name1[data_i]==name&&command[data_i]=='定位'){
 //           if(data_CI[data_i]==1){
				if(SwitchName[1][0]==1)
				{
					if(rout5All[0].indexOf('(')>=0)
           			     LinAll = rout5All[0].match(str);            //定位时，选择线路（包括form，to）
					else
					{
						if(SwitchName[2][0]==1)
						LinAll.push("G01003");
						else 
						return 0;
					}
		
				}
				else //如果当前找到的数据库的进路与当前状态不符
				{
					if(RountNum)
					return 0;
					else
					{
						if(rout5All[0].indexOf('(')>=0)
							 return 0;
						else
						{
							if(SwitchName[2][0]==1)
							LinAll.push("G01003");
							else 
							return 0;
						}
					}
				}
//	           }
//		}
    //   else if(name1[data_i]==name&&command[data_i]=='反位'){
//	
//			if(data_CI[data_i]==1)
//			{
//				if(SwitchName[1][0]==2)
//				{
//					if(rout5All[0].indexOf('(')>=0)
//               			 LinAll =rout5All[0] .match(str);            //定位时，选择线路
//					else
//					{
//						if(SwitchName[2][0]==2)
//						LinAll.push("G01003");
//						else 
//						return 0;
//					}
//				
//				}
//				else 
//				{
//					if(!RountNum)//如果只有一条进路
//					{
//						LinAll =rout5All[0] .match(str); 
//						RountNum=true;
//						break;
//					}
//					if(rout5All[0].indexOf('(')>=0)
//						 return 0;
//					else
//					{
//						if(SwitchName[2][0]==1)
//						LinAll.push("G01003");
//						else 
//						return 0;
//					}
//				}
//            }
//	   }
//    }
    if(LinAll.length>1){
        Lin=LinAll[1]
		if(Lin[0]=='(')
		{
			Lin=Lin.replace(/\(/,"");
			Lin=Lin.replace(/\)/,"");
		}
//        console.log(Lin)
    }
    else{
        Lin=LinAll[0]
		if(Lin[0]=='(')
		{
			Lin=Lin.replace(/\(/,"");
			Lin=Lin.replace(/\)/,"");
		}
//        console.log(Lin)
    }
    return Lin


}


//取运行表内数据传入数组
function inArr(cla,arr ) {
    $('.'+cla).each(function(){
        arr.push($(this).text())
    })
}

function GoTable(){
    console.log( $('#goT_table').find('tr'))
    $('#goT_table').find('tr').each(function(i){
        $(this).click(function(e) {
            e=e||event
            e.stopPropagation()

            $('#goT_table').find('tr').removeClass('BgBlue')
            $(this).addClass('BgBlue')

        });
    })
}
