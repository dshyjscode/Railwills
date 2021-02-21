/**
 * Created by asd on 2017/11/14.
 */

/**
 * Created by asd on 2017/10/16.
 */
//暂时使用
function statement(){
  
  alert('此功能本实验并未涉及，请按照指导书要求进行实验!');
}
//暂时使用

$(function() {
    svgBgHead()   //TimeNex.js
    allBG()     //YXTNex.js
    leftT()    //TimeNex.js 显示时间
    ReadAlexSection()     //tdadj.js
})  //所有函数在window加载之前加载


//阻止冒泡
function stopP(e) {
    e=e||event
    e.preventDefault()
    e.stopPropagation()
}




//界面弹出操作
$('#a').click(function(e) {
    stopP(e)
})



//清除dom
function removeDom(el) {
    for(var i=0;i<arguments.length;i++){
        arguments[i].remove()
    }
}
//对象复制
function cloneObjectFn (obj){ // 对象复制
    return JSON.parse(JSON.stringify(obj))
}

//计算点击位置
//X
function coordX(e) {
    var scroll=document.documentElement.scrollLeft||document.body.scrollLeft,
        scX=$("#Sec").scrollLeft(),
        x=e.pageX+scX||scroll+ e.clientX+scX
    return x
}
//Y
function coordY(e){
    var scroll=document.documentElement.scrollTop||document.body.scrollTop,
        scY=$('#Sec').scrollTop(),
        y= e.pageY+scY||scroll+ e.clientY+scY
    return y
}



//比较大小 返回数组，大值，小值
function BM(a,b) {
    return a>b?[a,b]:[b,a]
}



//点击svg背景，隐藏shiRect   并让背景色变为虚色
function cliYxt() {
    /*$('#YXT').click(function(e) {
        stopP(e)
        //可移动矩形背景虚色
        $('.dropdown').removeClass('open')
        $('.shiRect,.shiMovRect').hide()
        $('#lineAlert_div').hide()
        //$('.shiReat,.shiMovRect').setAttribute('fill',svg.rectXFC)
    })*/
    $('.shiRect,.shiMovRect').each(function(){
        $(this).click(function(e) {
            stopP(e)
            $('.shiRect,.shiMovRect').each(function(i){
                $(this).get(0).attributes[4].value=svg.rectXFC
            })
            $(this).get(0).attributes[4].value=svg.rectFC

            //获取车次号
            var carNum= $(this).get(0).attributes[10].value
            //显示选择菜单
            var x=Math.round(e.pageX),
                y=Math.round(e.pageY)
            showLineAlert(x,y,carNum)
            // $('#lineAlert_div').css({'left':x,"top":y}).show()
            return false
        })
    })
}


/*$('.shiRect,.shiMovRect').each(function(){

    $(this).click(function(e) {

        stopP(e)
        $('.shiRect,.shiMovRect').each(function(i){
            $(this).get(0).attributes[4].value=svg.rectXFC
        })
        $(this).get(0).attributes[4].value=svg.rectFC

        //获取车次号
        var carNum= $(this).get(0).attributes[10].value
        //显示选择菜单
        var x=Math.round(e.pageX),
            y=Math.round(e.pageY)
        showLineAlert(x,y,carNum)
        // $('#lineAlert_div').css({'left':x,"top":y}).show()
        return false
    })
})*/




//处理车次号
/* (num) =>CarNum {

 }*/


//获取svg
var SVG=document.getElementById('YXT')
var SVGT=document.getElementById('Tim')


//时间0点到24点
//变量声明
var svg={
    drawTure:false,              //是否画图
    where:{},
    Gh:2,                        //股道间距
    G:[],                        //股道号
    Car:[],                      //存放车次号
    CarALL:[],
    AnoNum:-2,                  //Another计数
    Anocli:0,                   //点击计数
    pageY:95,
    pageX:180,
    bgH:50,
    z_station:60,
    TimeX:20,
    staNum:30,
    rectWid:12,
    rectHei:12,
    rectW:7,
    rectH:7,
    rectXFC:'rgba(0,0,0,.1)',
    rectFC:'red',
    rectSC:'blue',
    lineWid:2,
    lineSC:'red',
    lineXSC:'black',
    texXSC:"blue",
    texSC:'black',
    texFZ:12,
    AllPoints:[],
    AllPointsXZ:[],
    AllPointsYH:[],
    AllPointX:[],
    AllPointY:[],                         
    WhilePoint:[],
	carStaTim:{},                          //站名与车次号
    CarNum:{},                             //线位置点与车次号
    Point:{
        x:null,
        y:null
    },
    newPoint:{
        x:null,
        y:null
    },

    oldPoint:{
        x:null,
        y:null
    },
    AllNewPoint:[],
    AnoY:3,
    AnoMovRectW:12,
    AnoMovRectH:12,
    AnoAllPoint:[],
    AnoRectSC:'red',
    AnoTex:[
        "区间封锁","区间慢行","电网检修","区间变更闭塞方式","区间综合天窗修"
    ],
    AnoTexH:30,
    Ano:{},
    cliY:20,
    CarDoNum:{
        num:[],
        coord:{},
        Where:{},
        change:{},
        del:[],
        order:[],
        addCar:[]
    },
    oldCarNum:{}
}

//以秒为单位计算   1秒=1px
//场面大小         站台纵坐标 150px
//未被调用函数
function initSvg(){
    SVG.w=60*60*15+SVG.lf
    SVG.h=svg.z_station*svg.staNum+SVG.hed

}

//背景表格  线
function WLine(x1,y1,x2,y2,fillC,strC,n,wid,cla,all,CarNum,child){
    if(all!=null){
        all=='allH'?svg.AllPointsYH.push(y1):svg.AllPointsXZ.push(x1)
    }

    var Line=document.createElementNS('http://www.w3.org/2000/svg',"line")
    Line.setAttribute('x1',x1)
    Line.setAttribute('y1',y1)
    Line.setAttribute('x2',x2)
    Line.setAttribute('y2',y2)
    Line.setAttribute('fill',fillC)
    Line.setAttribute('stroke',strC)
    Line.setAttribute('stroke-dasharray',n)
    Line.setAttribute('stroke-width',wid)
    Line.setAttribute('class',cla)
    Line.setAttribute('CarNum',CarNum)
    child==null? SVG.appendChild(Line):child.appendChild(Line)
}
//矩形
function WRect(x,y,wid,hei,fillC,strC,strW,cla,CarNum) {
    var Rect=document.createElementNS('http://www.w3.org/2000/svg',"rect")
    Rect.setAttribute('x',x-svg.rectW)
    Rect.setAttribute('y',y-svg.rectH)
    Rect.setAttribute('width',wid)
    Rect.setAttribute('height',hei)
    Rect.setAttribute('fill',fillC)
    Rect.setAttribute('stroke',strC)
    Rect.setAttribute('stroke-width',strW)
    Rect.setAttribute('class',cla)
    Rect.setAttribute('centerX',x)
    Rect.setAttribute('centerY',y)
    Rect.setAttribute('CarNum',CarNum)
    SVG.appendChild(Rect)
}


//文字
function WText(tex,x,y,fillC,strC,FZ,cla,child){
    var Text=document.createElementNS('http://www.w3.org/2000/svg','text')
    Text.appendChild(document.createTextNode(""))
    Text.firstChild.nodeValue=tex
    Text.setAttribute('x',x+svg.rectW)
    Text.setAttribute('y',y-svg.rectH)
    Text.setAttribute('fill',fillC)
    Text.setAttribute('stroke',strC)
    Text.setAttribute('font-size',FZ)
    Text.setAttribute('class',cla)
    child==null? SVG.appendChild(Text):child.appendChild(Text)
}


//基础背景表格线
function allBG(){
    for(var i=0;i<6*24+1;i+=1){
		if(i%6==0){
			WLine(i*svg.TimeX,svg.bgH,i*svg.TimeX,750+svg.bgH,'','green',0,2,'allZ','allZ')//画运行图实粗 纵线
			}
		else if (i % 3 == 0 && i % 6 != 0){
			 WLine(i*svg.TimeX,svg.bgH,i*svg.TimeX,750+svg.bgH,'','green',1,1,'allZ','allZ')//画运行图虚 纵线
			}
		else{
			 WLine(i*svg.TimeX,svg.bgH,i*svg.TimeX,750+svg.bgH,'','green',0,1,'allZ','allZ')       //纵线
			} 
      
    }
    for(var j=0;j<6;j++){
        WLine(0,150*j+svg.bgH,6*24*svg.TimeX,150*j+svg.bgH,'','green',0,2,'allH','allH')       //横线
    }
    //AllPoints()
}




//显示股道号时的背景表格样式

//未被调用函数
function showG(n) {
    //移除svg的所有线，重新画
    $('#YXT').children().remove()
    //n处的线的基础Y值为中线，向上下扩张
    //纵线在此线上下边界会断开

    var StationName;
    var ArrSection=[];
    for(var i=0;i<Station.length;i++)
    {
        if(n==Station[i][0])
        {
            StationName=Station[i][1];
            break;
        }
    }
    for(var i=0;i<AlexSection.length;i++)
    {
        if(StationName==AlexSection[i][0])
        {
            ArrSection.push(AlexSection[i][1]);
        }
    }
    for(var i=0;i<60*15+1;i++){
        //判断位置 分割纵线
        //不是头尾
        if(n!=0||n!=svg.staNum){
            var hHop=n*100-svg.cliY,
                hBot=n*100+svg.cliY
            WLine(i*60,svg.bgH,i*60,hHop+svg.bgH,'','#ccc',0,2,'allZ','allZ')       //纵线
            WLine(i*60,hBot,i*60,3000+svg.bgH,'','#ccc',0,2,'allZ','allZ')       //纵线
        }
        //WLine(i*60,+svg.bgH,i*60,3000+svg.bgH,'','#ccc',0,2,'allZ','allZ')       //纵线
    }
    //横线在此线中显示股道虚线
    for(var j=0;j<31;j++){
        if(j==n){

            WLine(0,100*j+svg.bgH-svg.cliY,54000,100*j+svg.bgH-svg.cliY,'','#ccc',0,2,'allH','allH')       //横线
            //虚线部分
            for(var k=4;k<4+8*ArrSection.length;k+=8){
                WLine(0,100*j+svg.bgH-svg.cliY+k,54000,100*j+svg.bgH-svg.cliY+k,'','red',4,1,'allH','allH')       //横线
            }

            WLine(0,100*j+svg.bgH+svg.cliY,54000,100*j+svg.bgH+svg.cliY,'','#ccc',0,2,'allH','allH')       //横线
        }
        else{
            WLine(0,100*j+svg.bgH,54000,100*j+svg.bgH,'','#ccc',0,2,'allH','allH')       //横线
        }

    }
    //重新根据储存数组画图
}




//收录交点
function AllPoints() {
    //console.log(  $('.allH').attr('x1'))
    /* console.log(svg.AllPointsXH)
     console.log(svg.AllPointsXZ)*/
    svg.AllPointsXZ.forEach(function(item,index){

        svg.AllPointsYH.forEach(function(item2,index2) {
            if(svg.AllPointsXZ[index]==svg.AllPointsYH[index2]){
				/*下方未用函数*/
                $('.allH').each(function(i) {

                })
				/*上方未用函数*/
               // console.log(index)
            }
            svg.Point.x=svg.AllPointsXZ[index]
            svg.Point.y=svg.AllPointsYH[index2]
            svg.AllPoints.push(svg.Point)
        })

        /*    svg.staNum.forEach(function(itemI,index){

         })*/
    })
}


//监听鼠标点击，获取位置,查找交点
//function MouseD(Carnum){
    /*$('#YXT').bind('click',function(e) {
        stopP(e)
        $('#DraOver').hide()

        //清除指示虚线
        var pageX= Math.round(coordX(e)-svg.pageX),
            pageY= Math.round(coordY(e)-svg.pageY)
        svg.AllPointsYH.forEach(function(item){
            if(!(pageY>item+svg.cliY)&&!(pageY<item-svg.cliY)&&0<pageX<15*60*svg.TimeX){
                svg.drawTure=true
                //判断股道号 并储存
                var arr=[];
                arr=BM(pageY,item)

                svg.G.push({x:pageX,y:pageY})

                svg.newPoint.x=pageX
                svg.newPoint.y=item
                var Point={x:pageX, y:item}
                goDraw(Carnum,Point)


            }
            /!* else{
             $('#DraOver').hide()
             }*!/
            //stopDra()
        })
    })*/
    //stopDra()
//}



//起点前头样式
function svgHead(x,y,CarNum,cla) {
    var yf2,yt2, xf2=x-20,xs2=x-40,xt2=x-55,ytex
    //判断方向上行。下行
    /*console.log(svg.where[CarNum])*/
    if(svg.where[CarNum]=='down'){
        yf2=y-20
        yt2=y-35
        ytex=yf2
    }
    else{
        yf2=y+20
        yt2=y+35
        ytex=yt2
    }
    WLine(x, y,xf2,yf2,'',svg.lineSC,0,svg.lineWid,'ha'+CarNum+" "+cla+" svgHeadAll")
    WLine(xf2, yf2,xs2,yf2,'',svg.lineSC,0,svg.lineWid,'ha'+CarNum+" "+cla+" svgHeadAll")
    WLine(xs2, yf2,xt2,yt2,'',svg.lineSC,0,svg.lineWid,'ha'+CarNum+" "+cla+" svgHeadAll")
    //文字
    WText(CarNum,xf2,ytex,"",'#ccc',12,'htex ha'+CarNum+" "+cla+" svgHeadAll")
}


//终止时尾样式
function svgFoot(x,y,CarNum,cla) {
    var yf2,ys2,xs2=x-5,wid=10,hei=10,strW=2
    if(svg.where[CarNum]=='down'){
        yf2=y+20
        ys2=yf2+6
    }
    else{
        yf2=y-20
        ys2=yf2-4
    }
    WLine(x, y,x,yf2,'',svg.lineSC,0,svg.lineWid,'fa'+CarNum+" "+cla+" svgFootAll")
    WRect(x,ys2,wid,hei,'none',svg.rectSC,strW,"fa"+CarNum+" "+cla+" svgFootAll")
}




//鼠标点击交点开始画图
//传入参数 ：  CarNum：车次号
//var  CarNum=0
function goDraw(CarNum,Point,read){
    var read=read||null;
    if(svg.newPoint.y!=null){
        //储存车次号。且车次号不可重复
            svg.Car.indexOf(CarNum)==-1?(svg.Car.push(CarNum),BgCom.BgCar.push(CarNum),BgCom.newCar.push(CarNum)):""
			
			
        //储存之后从总数据处删除该车次
        if(read=='read'){
            svg.CarALL.splice(svg.CarALL.indexOf(CarNum),1)
        }

        //判断是否是只有x有变化
        if(svg.AllNewPoint.length>1){
            var leng=svg.AllNewPoint.length
          // console.log(svg.AllNewPoint)
            var y1=svg.AllNewPoint[leng-1].y,
                y2=svg.AllNewPoint[leng-2].y
            //查找前两个点是否都在同一y轴下
            console.log( Point.y,y1,y2)
            Point.y==y1&&Point.y==y2?(svg.AllNewPoint.splice(svg.AllNewPoint.length-1,1),svg.oldPoint.x=svg.AllNewPoint[svg.AllNewPoint.length-1].x,
                svg.oldPoint.y=svg.AllNewPoint[svg.AllNewPoint.length-1].y,svg.AllNewPoint.push(Point),removeDom($('.la'+CarNum+':last'),$('.ta'+CarNum+':last'),$('.xuRect:last')))
                : svg.AllNewPoint.push(Point)
        }
        else{
            //传入一个起始标记，以后 重新画图时区分
            // svg.AllNewPoint.push('star')

            //传入正式值
            svg.AllNewPoint.push(Point)
        }
        //第一个点
        if(svg.oldPoint.x==null){
            svgHead(svg.newPoint.x,svg.newPoint.y,CarNum)
            if(read!='again'){
                svg.AllPoints.push('star_'+CarNum)
            }

        }
        else{
            //根据new和old确定线
            removeDom($('.xuXian'),$('.xuTex'))
            WLine(svg.oldPoint.x, svg.oldPoint.y,svg.newPoint.x,svg.newPoint.y,'','red',0,svg.lineWid,'shiXian la'+CarNum,"","a"+CarNum)

            //svgFoot(svg.newPoint.x,svg.newPoint.y,'up')
        }
        svg.oldPoint.x=svg.newPoint.x
        svg.oldPoint.y=svg.newPoint.y
        //文字
        //console.log(svg.newPoint.x*60/svg.TimeX%60)
        var text=(svg.newPoint.x%svg.TimeX)/2
            //parseInt(svg.newPoint.x/svg.TimeX%60%10)
        WText(text,svg.newPoint.x,svg.newPoint.y,"",svg.texSC,svg.texFZ,'shiTex ta'+CarNum)

        if(read==null){
            //矩形
            WRect(svg.newPoint.x,svg.newPoint.y,svg.rectWid,svg.rectHei,svg.rectXFC,svg.rectSC,1,'xuRect ra'+CarNum)
            dasharrey()
        }
    }
}

//画图时鼠标移动捕捉鼠标位置形成虚线
function dasharrey() {
    //重新获取始点 ——为上一次点击位置newPoint

    //移动重绘
    $('#YXT').bind('mousemove',function(e) {

        stopP(e)
        var moveX= coordX(e)-svg.pageX,
            moveY= coordY(e)-svg.pageY

        removeDom($('.xuXian'),$('.xuTex'))
        //画虚线
        WLine(svg.oldPoint.x, svg.oldPoint.y,moveX,moveY,'',svg.lineXSC,4,svg.lineWid,'xuXian')

        //鼠标移动时显示相应纵线值
        WText(parseInt(moveX%svg.TimeX),moveX,moveY,"",svg.texXSC,svg.texFZ,'xuTex')

        //判断是否重新生成点
		//下方程序无用
        if(svg.newPoint.x==svg.oldPoint.x&&svg.newPoint.y==svg.oldPoint.y){
            //无需重新定义起点，只需重新定义终点——鼠标现在位置
        }
        else{
            //重新定义起点，及终点——鼠标现在位置
        }
		//上方程序无用
    })
}

//画图结束，调取最后矩形的位置，加入终止样式，并清空oldPoint和newPiont
function DrawOver(Carnum,read) {
    if(svg.AllNewPoint.length>0){
        var read=read||null
        // svg.AllNewPoint.push('over')
        //将svg.AllNewPoint储存在整体坐标svg.AllPoints内
        if(read!='again'){
            if(svg.AllPoints.indexOf('star'+Carnum)!=-1&&svg.AllPoints.indexOf('over'+Carnum)!=-1){
                svg.AllNewPoint.forEach(function(item) {
                    var ind=svg.AllPoints.indexOf('over'+Carnum)
                    var x=item.x/svg.TimeX
                    svg.AllPoints.splice(ind, 0, {x:x,y:item.y})
                })
            }
            else{
                svg.AllNewPoint.forEach(function(item) {
                    var x=item.x/svg.TimeX
                    svg.AllPoints.push({x:x,y:item.y})
                })
                svg.AllPoints.push('over_'+Carnum)
            }
        }


        //传入一个结束标志，以便重新画图时区分

        //最后位置暂存在svg.newPoint中
        svgFoot(svg.newPoint.x,svg.newPoint.y,Carnum)
        //清除oldPoint和newPiont
        clearNewAndOld()


        //解除绑定鼠标事件的虚线绘制和鼠标点击画图事件
        $('#YXT').unbind('click')
        $('#YXT').unbind('mousemove')
        //清除界面上的虚线及虚字
        removeDom($('.xuXian'),$('.xuTex'))
		//传入车次号
        Dover(Carnum)
		
		
		//当read==null时(待改)
        if(read!='read'&&read!='again'){
            if(read!='change'){
                svg.CarDoNum.Where[Carnum]=svg.where[Carnum]
                if(svg.CarDoNum.addCar.indexOf(Carnum)==-1){
                    svg.CarDoNum.addCar.push(Carnum)
                }
            }
            AddCar(Carnum)
        }
      /*  if(read!="read"){

        }*/

    }
}

//清空new和old
function clearNewAndOld() {
    svg.newPoint.x=null
    svg.newPoint.y=null
    svg.oldPoint.x=null
    svg.oldPoint.y=null
}


//添加车


function AddCar(num) {
    svg.CarDoNum.num.indexOf(num)==-1?svg.CarDoNum.num.push(num):""
    for(var i=0;i<svg.CarDoNum.num.length;i++){
        if( svg.CarDoNum.num[i]==num){
            svg.CarDoNum.coord[num]=svg.CarNum[num].slice(0)
        }
    }
}
//删除车
function DelCar(num){
    //svg.CarDoNum.num.indexOf(num)!=?svg.CarDoNum.num.push(num):""
    if(svg.CarDoNum.coord[num]!=undefined&&svg.CarDoNum.coord[num]!=null){
        delete svg.CarDoNum.coord[num]
    }
}

//点击线选中当前车
function XnowLine(){

}



//画线结束
//传入参数  num：车次号
function Dover(num) {
    //解除svg鼠标移动事件停止虚线渲染和文字显示
    $('#YXT').unbind('mousemove')
    //清除所有矩形框。虚线。文字
    removeDom($('.xuRect'),$('.xuXian'),$('.xuTex'))
    //把线位置点与车次号绑定
    svg.CarNum[num]=svg.AllNewPoint.slice(0)
	//转换线位置点为车站、时间
	pointTostatim(num)
	//console.log(svg.carStaTim);
    //清空储存新点坐标的数组
    svg.AllNewPoint.splice(0,svg.AllNewPoint.length)

    newRect(num)
}
//转换线位置点为车站、时间
function pointTostatim(n){
	var allstationTime=[]
	var sta
	var startTime
	var endTime
	var hour
	var minute
	var sec
	for(var i=0;i<svg.AllNewPoint.length;i++){
		if(svg.AllNewPoint[i].y==50){
			sta="北京南站"
		}
		else if(svg.AllNewPoint[i].y==200){
			sta="天津南站"
		}
		else if(svg.AllNewPoint[i].y==350){
			sta="济南西站"
		}
		else if(svg.AllNewPoint[i].y==500){
			sta="南京南站"
		}
		else if(svg.AllNewPoint[i].y==650){
			sta="苏州北站"
		}
		else {
			sta="上海虹桥站"	
		}
		
		hour=zero(parseInt(svg.AllNewPoint[i].x/120))
		minute=zero(parseInt((svg.AllNewPoint[i].x%120)/2))
		sec=zero(parseInt(svg.AllNewPoint[i].x%2)*30)
		if(i==0){
			
			startTime=hour+":"+minute+":"+sec
			endTime=null
			allstationTime.push({station:sta,start:startTime,end:endTime})
			
			
		}
		else if(i==svg.AllNewPoint.length-1){
			startTime=null
			endTime=hour+":"+minute+":"+sec
			allstationTime.push({station:sta,start:startTime,end:endTime})
		}
		else{
			var hour_t=zero(parseInt(svg.AllNewPoint[i+1].x/120))
			var minute_t=zero(parseInt((svg.AllNewPoint[i+1].x%120)/2))
			var sec_t=zero(parseInt(svg.AllNewPoint[i+1].x%2)*30)
			
			if(svg.AllNewPoint[i].y!=svg.AllNewPoint[i-1].y){
				if(svg.AllNewPoint[i].y!=svg.AllNewPoint[i+1].y){
					endTime=hour+":"+minute+":"+sec,startTime=hour+":"+minute+":"+sec
				}
				else{
					endTime=hour+":"+minute+":"+sec,startTime=hour_t+":"+minute_t+":"+sec_t
				}
			} 
			else{ 
				continue;
			}
			allstationTime.push({station:sta,start:startTime,end:endTime})
		}

    }
	svg.carStaTim[n]=allstationTime.slice(0)
	console.log(svg.carStaTim)
}


//读取存入的点，重新画矩形及文字位置
function newRect(CarNum) {
    //console.log(svg.CarNum[CarNum])

    svg.CarNum[CarNum].forEach(function(item){
        WRect(item.x,item.y,svg.rectWid,svg.rectHei,svg.rectXFC,svg.rectSC,1,"ra"+CarNum+' shiRect',"a"+CarNum)
    })
    CliSX()
    cliYxt()
}

//为实线添加点击事件，且只允许在未画图时点击
function CliSX() {
    $('.shiXian').each(function(i){
        $(this).click(function(e) {
            if(!svg.drawTure){

                stopP(e);
                //console.log ($(this))
                var CarN= $(this).get(0).attributes[9].value
                $('.shiRect').hide()
                $('.r'+CarN).show()

                XMouseDown(CarN)
                return false
            }
        })
    })
}


//鼠标选中矩形
function XMouseDown(CarN){
    $('.r'+CarN).each(function(i){
        $(this).bind('mousedown',function(e) {
            if(e.which==1){
                var carnum
                stopP(e)
                var that=$(this)
                carnum=CarN!=null?CarN.substr(1):$(this).get(0).attributes[10].value.substr(1)
                //找到点击位置，获取当前dom
                var DownX= Math.round(coordX(e)-svg.pageX),
                    DownY= Math.round(coordY(e)-svg.pageY)
                //找到当前矩形所处在当前svg。num的位置

                var nowPoint
                svg.CarNum[carnum].forEach(function(item,index){
                    if((item.x-6<DownX&&DownX<item.x+6)&&(item.y-6<DownY&&DownY<item.y+6)){
                        nowPoint=index
                        return false
                    }
                })

                //改变当前点击的矩形的填充颜色
                $(this).get(0).attributes[4].value=svg.rectFC
                //找到点击的矩形
                // $('rect[centerX=DownX][centerY=DownY]').
                svg.WhilePoint.length= svg.CarNum[carnum].length
                svg.CarNum[carnum].forEach(function(item,ind){
                    svg.WhilePoint.splice(ind,1,{x:item.x,y:item.y})
                })
                $('#YXT').bind('mousemove',function(e) {
                    stopP(e)
                    that.unbind('mousedown')
                    var MoveX= coordX(e) -svg.pageX        //只允许移动x
                    XMouseMove(carnum,nowPoint,MoveX)
                    return false
                })
                $('#YXT').bind('mouseup',function(e){
                    stopP(e)
                    $('#YXT').unbind('mousemove')

                    $('#YXT').unbind('mouseup')

                    XMouseUp(carnum)
                    return false
                })
                return false
            }
            else if(e.which==3){
                stopP(e)
                $('.shiRect,.shiMovRect').each(function(i){
                    $(this).get(0).attributes[4].value=svg.rectXFC
                })
                $(this).get(0).attributes[4].value=svg.rectFC
                //获取车次号
                var carNum= $(this).get(0).attributes[10].value
                //显示选择菜单
                var x=Math.round(e.pageX),
                    y=Math.round(e.pageY)
                showLineAlert(x,y,carNum)
                // $('#lineAlert_div').css({'left':x,"top":y}).show()
                return false
            }
        });
    })
}

//鼠标移动
function XMouseMove(num,index,MoveX) {
    //监听鼠标移动
    /*
     更新whilepoint内容，根据其内数据画暂时的图形
     判断鼠标移动是否为向右侧即MoveX大于当前x
     */

    if((index>0&&MoveX>svg.CarNum[num][index-1].x)||index==0){
        removeDom($('.whileXian'),$('.whileRect'),$('.whileTex'),$('.whileHed'),$('.whileFot'))
        var MoveL=MoveX-svg.WhilePoint[index].x   //移动差值
        for(var i=index;i<svg.WhilePoint.length;i++){
            svg.WhilePoint[i].x+=MoveL
        }
        whilePoint(num)
    }

    //根据svg。while的变化实时绘制新图形并擦去旧图

    //重新更新svg。num内元素

    //遍历线上所有矩形，当前矩形后的矩形需要移动
    //???需要改变储存线端点的数组元素。
    //选中矩形位置为起点再新画线
    //

}



//根据svg。while绘制图形
function whilePoint(CarNum) {
    svg.WhilePoint.forEach(function(item,index){
        if(index==0){
            svgHead(item.x,item.y,CarNum,"whileHed")
        }
        if(index<svg.WhilePoint.length-1){
            WLine(item.x, item.y,svg.WhilePoint[index+1].x,svg.WhilePoint[index+1].y,'','red',0,svg.lineWid,'whileXian la'+CarNum)
        }
        WRect(item.x,item.y,svg.rectWid,svg.rectHei,"",svg.rectSC,1,'whileRect ra'+CarNum)

        WText(Math.round(item.x/svg.TimeX)%60,item.x,item.y,"",svg.texXSC,svg.texFZ,'whileTex ta'+CarNum)
        if(index==svg.WhilePoint.length-1){
            svgFoot(item.x,item.y,CarNum,'whileFot')
        }
    })
}


//鼠标抬起
//传入参数  ：
function XMouseUp(CarNum) {
    //清除当前车的之前画线
    removeDom($('.ra'+CarNum),$('.la'+CarNum),$('.ta'+CarNum),$('.ha'+CarNum),$('.fa'+CarNum))

    //清空svg.CarNum[CarNum]内数据
    //svg.CarNum[CarNum].splice(0,svg.CarNum[CarNum].length)
    //重新更新对应svg.CarNum[CarNum]内数据并清空svg。while内数据
    svg.WhilePoint.forEach(function(item,index){
        svg.CarNum[CarNum].splice(index,1,{x:svg.WhilePoint[index].x,y:svg.WhilePoint[index].y})
    })
    svg.WhilePoint.splice(0,svg.WhilePoint.length)
    //擦除之前线的位置重新根据数组内端点渲染
    newDraw(CarNum)
}

//根据svg.CarNum[num]画图
function newDraw(num) {

    svg.CarNum[num].forEach(function(item,index){
        if(index<svg.CarNum[num].length-1){
            if(index==0){
                svgHead(item.x,item.y,num)
            }
            WLine(item.x, item.y, svg.CarNum[num][index+1].x, svg.CarNum[num][index+1].y,'','red',0,svg.lineWid,'shiXian la'+num,"","a"+num)
        }
        WText(Math.round(item.x/svg.TimeX)%60,item.x,item.y,"",svg.texSC,svg.texFZ,'shiTex ta'+num)
        svg.AllPoints.splice(svg.AllPoints.indexOf('star'+num)+1+index,1,item)
        if(index==svg.CarNum[num].length-1){
            svgFoot(item.x,item.y,num)
        }
    })

    newRect(num)

    AddCar(num)
    $('.ra'+num).show()
    XMouseDown('a'+num)
}







//其他绘图操作  封锁区间  限速  半自动闭塞??上下行综合天窗修 上下行电网检修

//点击倒工或者矩形显示可拖动的矩形
function Ano() {
    var num,that
    $('.shiAnoLine').each(function() {
        $(this).click(function(e) {
            stopP(e)
            that=$(this)
            //zhaod
            num= reNum(that,9)
            $('.AnoMR'+num).show()
            return false
        })
    });
    $('.shiAnoRect').each(function() {
        $(this).click(function(e) {
            stopP(e)
            that=$(this)
            num= reNum(that,10)
            $('.AnoMR'+num).show()
            return false
        })
    })
}

//返回对应号码num
function reNum(that,n) {
    console.log(that)
    return that.get(0).attributes[n].value
}


function DrawAno(dat){
    var txt,type,typ
    var datF=dat.substr(0,1),
        datS=dat.substr(1,1)
    switch (datF) {
        case 'G':
            type=1
            break;
        case 'R':
            type=2
            break;
        case 'L':
            type=1
            typ=4
            break
        default :
            break;
    }
    txt=svg.AnoTex[datS]
    //第一次点击avg

    $('#YXT').bind('click',function(e) {
        stopP(e)
        var Point

        var pageX= Math.round(coordX(e)-svg.pageX),
            pageY= Math.round(coordY(e)-svg.pageY)


        if(svg.Anocli==0){

            svg.AllPointsYH.forEach(function(item){
                if(pageY<item+svg.cliY&&pageY>item-svg.cliY&&0<pageX<50400){
                    svg.Anocli++
                    svg.newPoint.x=pageX
                    svg.newPoint.y=item
                    Point={x:pageX, y:item}
                    //画一个虚拟矩形
                    antherMove()
                    //goDraw(Carnum,Point)
                    svg.oldPoint.x=Point.x
                    svg.oldPoint.y=Point.y
                    //加入永久储存点
                    svg.AnoAllPoint.push(Point)
                }
            })

        }
        else{
            svg.AllPointsYH.forEach(function(item){
                if(pageY<item+svg.cliY&&pageY>item-svg.cliY&&0<pageX<svg.TimeX*900){
                    //解除svg鼠标移动
                    $('#YXT').unbind('mousemove')
                    //清除假的矩形
                    removeDom($('.xuAnoRect'))
                    //重新赋值newPiont
                    console.log(pageY)
                    console.log(svg.oldPoint.y)
                    if(pageY<svg.oldPoint.y+100+svg.cliY&&pageY>svg.oldPoint.y-100-svg.cliY&&!(svg.oldPoint.y-svg.cliY<pageY&&pageY<svg.oldPoint.y+svg.cliY)){
                        svg.newPoint.x=pageX
                        svg.newPoint.y=item
                        var Point={x:pageX, y:item}

                        //加入永久储存点
                        svg.AnoAllPoint.push(Point)
                        //去执行画图
                        svg.AnoNum+=2
                        var num=svg.AnoNum
                        goDrawAno(txt,type,typ,num)
                    }
                    svg.Anocli=0
                }
            })
        }
    });
}

//操作鼠标移动产生矩形
function antherMove() {
    $('#YXT').bind('mousemove',function(e) {
        removeDom($('.xuAnoRect'))
        stopP(e)
        var x= Math.round(coordX(e)-svg.pageX),
            y= Math.round(coordY(e)-svg.pageY),
            arrX=[],arrY=[]
        arrX=BM(x,svg.newPoint.x)
        arrY=BM(y,svg.newPoint.y)
        WRect(svg.oldPoint.x,svg.oldPoint.y+svg.AnoY+12,arrX[0]-arrX[1],arrY[0]-arrY[1],"none",svg.rectSC,1,'xuAnoRect')
    })
}
//执行画图完成其他类型图
//根据选择不同会有不同显示样式，1：倒工 -0：实线 -4：虚线  2：矩形
function goDrawAno(txt,type,typ,num,cla){

    var t=typ!=null?typ:0
    switch (parseInt(type)) {
        case 1:
            DrawAnoDG(txt,type,t,num,cla)
            break;
        case 2:
            DrawAnoR(txt,type,t,num,cla)
            break;
    }
}

//画倒工
function DrawAnoDG(txt,type,typ,num,cla) {
    //比较大小
    var arrX=[],arrY=[]
    arrX=BM(svg.oldPoint.x,svg.newPoint.x)
    arrY=BM(svg.oldPoint.y,svg.newPoint.y)
    //左
    WLine(arrX[1],arrY[1]+svg.AnoY,arrX[1],arrY[0]-svg.AnoY,"",svg.lineSC,0,svg.lineWid,cla+' shiAnoLine Ano'+num,"",num)
    //中
    WLine(arrX[1],arrY[1]+(arrY[0]-arrY[1])/2,arrX[0],arrY[1]+(arrY[0]-arrY[1])/2,"",svg.lineSC,typ,svg.lineWid,cla+' shiAnoLine Ano'+num,"",num)
    //右
    WLine(arrX[0],arrY[1]+svg.AnoY,arrX[0],arrY[0]-svg.AnoY,"",svg.lineSC,0,svg.lineWid,cla+' shiAnoLine Ano'+num,"",num)
    //写文字
    //名称
    WText(txt,arrX[1]+(arrX[0]-arrX[1])/2-txt.length/2*12,arrY[1]+svg.AnoTexH,"",svg.lineSC,svg.texFZ,cla+' shiAnoTxt Ano'+num)

    DrawAnoMovRect(arrX,arrY,txt,type,typ,num,cla)
}


//画矩形
function DrawAnoR(txt,type,typ,num,cla) {
    //比较大小
    var arrX=[],arrY=[]

    arrX=BM(svg.oldPoint.x,svg.newPoint.x)
    arrY=BM(svg.oldPoint.y,svg.newPoint.y)
    //矩形
    WRect(arrX[1]+svg.rectW,arrY[1]+svg.AnoY+9,arrX[0]-arrX[1],arrY[0]-arrY[1]-svg.AnoY-6,svg.rectXFC,svg.AnoRectSC,1,cla+' shiAnoRect Ano'+num,num)
    //
    DrawAnoMovRect(arrX,arrY,txt,type,typ,num,cla)
}


//画拖动的矩形和两边坐标
function DrawAnoMovRect(arrX,arrY,txt,type,typ,num,cla) {
    //X坐标

    WText(arrX[1]%60,arrX[1]-5,arrY[1]+(arrY[0]-arrY[1])/2,"",svg.lineSC,svg.texFZ,cla+' shiAnoTxtX Ano'+num)
    WText(arrX[0]%60,arrX[0]-5,arrY[1]+(arrY[0]-arrY[1])/2,"",svg.lineSC,svg.texFZ,cla+' shiAnoTxtX Ano'+num)
    //画三个可拖动的矩形框
    //左
    WRect(arrX[1],arrY[1]+(arrY[0]-arrY[1])/2,svg.AnoMovRectW,svg.AnoMovRectH,svg.rectXFC,svg.AnoRectSC,1,cla+' shiMovRect AnoMR'+num,'RAno'+num+"_"+txt+"_"+type+"_"+typ+"_L"+"_"+arrX[0]+"_"+arrX[1])
    //中
    WRect(arrX[1]+(arrX[0]-arrX[1])/2,arrY[1]+(arrY[0]-arrY[1])/2,svg.AnoMovRectW,svg.AnoMovRectH,svg.rectXFC,svg.AnoRectSC,1,cla+' shiMovRect AnoMR'+num,'RAno'+num+"_"+txt+"_"+type+"_"+typ+"_C"+"_"+arrX[0]+"_"+arrX[1])
    //右
    WRect(arrX[0],arrY[1]+(arrY[0]-arrY[1])/2,svg.AnoMovRectW,svg.AnoMovRectH,svg.rectXFC,svg.AnoRectSC,1,cla+' shiMovRect AnoMR'+num,'RAno'+num+"_"+txt+"_"+type+"_"+typ+"_R"+"_"+arrX[0]+"_"+arrX[1])

    //绑定位置和计数值
    if(cla==null){
        //console.log('null')
        svg.Ano[num]=[]
        svg.Ano[num].length=svg.AnoAllPoint.length
        svg.AnoAllPoint.forEach(function(item,index) {
            svg.Ano[num].splice(index,1,{x:item.x,y:item.y})
        })
        clearNewAndOld()
    }

    //清空储存点坐标的组
    svg.AnoAllPoint.splice(0,svg.AnoAllPoint.length)
    //清空svg.new和svg.old

    //解绑clcik
    $('#YXT').unbind('click')

    AnoRectCli()
    Ano()
    cliYxt()
}


//点击矩形移动Ano的图形
function AnoRectCli() {
    $('.shiMovRect').each(function() {
        $(this).unbind('mousedown')
        $(this).bind('mousedown',function(e) {
            var that=$(this)

            stopP(e)
            var str=$(this).get(0).attributes[10].value.substr(4),
                strX=$(this).get(0).attributes[8].value

            var strArr=str.split('_')
            //找到svg.AnoNum的值，以及文字等信息
            var Anonum=parseInt(strArr[0])
            //找到点击位置，获取当前dom
            var DownX= Math.round(coordX(e)-svg.pageX),
                DownY= Math.round(coordY(e)-svg.pageY)


            //重新赋值old和new
            svg.oldPoint.x=parseInt(strArr[5])
            svg.oldPoint.y=svg.Ano[Anonum][0].y
            svg.newPoint.x=parseInt(strArr[6])
            svg.newPoint.y=svg.Ano[Anonum][1].y


            //改变当前点击的矩形的填充颜色
            $(this).get(0).attributes[4].value=svg.rectFC

            $('#YXT').bind('mousemove',function(e) {
                stopP(e)
                that.unbind('mousedown')
                var MoveX= coordX(e) -svg.pageX        //只允许移动x
                AnoMouseMove(MoveX,strArr,strX,Anonum)

            })
            $('#YXT').bind('mouseup',function(e){
                stopP(e)
                $('#YXT').unbind('mousemove')
                $('#YXT').unbind('mouseup')

                AnoMouseUp(strArr,Anonum)

            })
            return false
        })
    })
}


//鼠标移动
function AnoMouseMove(MoveX,strArr,strX,num) {

    //监听鼠标移动

    //清除移动时的图形
    removeDom($('.AnoMov'))


    //移动差值
    var MoveL=MoveX-strX
    //通过strArr[4]判断当前点击矩形
    //重新赋值newpoint和oldpoint
    switch (strArr[4]) {
        case 'L':
            svg.oldPoint.x=parseInt(strArr[5])
            svg.newPoint.x=parseInt(strArr[6])+MoveL
            break;
        case 'C':
            svg.oldPoint.x=parseInt(strArr[5])+MoveL
            svg.newPoint.x=parseInt(strArr[6])+MoveL
            break;
        case 'R':
            svg.oldPoint.x=parseInt(strArr[5])+MoveL
            svg.newPoint.x=parseInt(strArr[6])
            break;
        default :
            break;
    }
    //由于每次清空了AnoAllPoint,需要重新给其赋值
    svg.AnoAllPoint.push(svg.oldPoint)
    svg.AnoAllPoint.push(svg.newPoint)

    AnoPoint(strArr,num)
}



//移动时绘制图形
function AnoPoint(strArr,num) {
    goDrawAno(strArr[1],strArr[2],strArr[3],num,'AnoMov')
}

//鼠标抬起
//传入参数  ：
function AnoMouseUp(strArr,CarNum) {

    //清除所要移动的图形
    removeDom($('.Ano'+CarNum),$('.RAno'+CarNum),$('.AnoMR'+CarNum))

    //重新更新对应AnoAllPoint内数据

    svg.AnoAllPoint.push(svg.oldPoint)
    svg.AnoAllPoint.push(svg.newPoint)
    //擦除之前线的位置重新根据数组内端点渲染
    goDrawAno(strArr[1],strArr[2],strArr[3],CarNum)
}

function AutoDraw()//自动生成运行图
{

    /*restSvgAll()
    console.log(svg);*/
    //清空svg的AllPoints
    svg.AllPoints.splice(0,svg.AllPoints.length)
    svg.Car.splice(0,svg.Car.length)

    arrTDCar.forEach(function(item,index) {
        svg.CarALL.push(item[0])
        var CarNum=item[0];//车次号
        var CarUp=item[2];//列车的上下行，2下行，1上行
        CarUp==1?svg.where[CarNum]='up':svg.where[CarNum]='down'
    })
    arrTDAdj.forEach(function(itm,ind) {
        if(itm[0]==null||itm[0]==""||itm[0]==undefined){
            return
        }
            item2()
            item3()
            function item2(){
                if(itm[6]==2){
                    svg.newPoint.x=null
                    svg.newPoint.y=null
                    svg.CarALL.splice(svg.CarALL.indexOf(itm[0]),1)
                }
                var pagX=itm[2]

                var hour=parseInt(pagX.split(':')[0],10)
                var minute=parseInt(pagX.split(':')[1],10)

                var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
                var pageY=(parseInt(itm[1],10))*100+50-100   //是否需要改动？？、


                //底部滚动条移动相应位置
                if(ind==0){
                    $('#Sec').scrollLeft(pageX+5*svg.TimeX)
                }

                svg.newPoint.x=pageX
                svg.newPoint.y=pageY
                var Point={x:pageX, y:pageY}
                goDraw(itm[0],Point,"read")
            }
            function item3() {
                var pagX=itm[3]
                var hour=parseInt(pagX.split(':')[0],10)
                var minute=parseInt(pagX.split(':')[1],10)
                var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
                var pageY=(parseInt(itm[1],10))*100+50-100   //是否需要改动？？、
                svg.newPoint.x=pageX
                svg.newPoint.y=pageY
                var Point={x:pageX, y:pageY}
                goDraw(itm[0],Point,"read")
                if(itm[6]==1){
                    DrawOver(itm[0],"read")
                }
            }
            /* if(itm[6]==2){
             svg.newPoint.x=null
             svg.newPoint.y=null
             }
             var pagX=itm[2]
             var hour=parseInt(pagX.split(':')[0],10)
             var minute=parseInt(pagX.split(':')[1],10)
             var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
             var pageY=(parseInt(itm[1],10))*100+50-100   //是否需要改动？？、
             svg.newPoint.x=pageX
             svg.newPoint.y=pageY
             var Point={x:pageX, y:pageY}
             goDraw(CarNum,Point,"read")
             if(itm[6]==1){
             DrawOver(CarNum)
             }*/
    })
    /*arrTDAdj.forEach(function(itm,ind){
        if(itm[0]==null||itm[0]==""||itm[0]==undefined){
            return
        }
        else {
            JS(itm,2)
            JS(itm,3)
            var pageY= (parseInt(itm[1],10))*100+50-100   //是否需要改动？？、
            itm.splice(1,1,pageY)
        }
    })*/

   /* $('#basic').removeClass('ban').addClass('NoBan').find('#basicA').click(function(e) {
        $('#basic').addClass('open')
        $('#basicDiv').hide()
        stopP(e)
    })*/
    changeWhere()
}
//点击基本图
$('#basic').find('#basicA').click(function(e) {
    $('#basic').addClass('open')
    $('#basicDiv').hide()
    stopP(e)
})


//计算时间
function JS(itm,ind) {
    var pagX=itm[ind]
    var hour=parseInt(pagX.split(':')[0],10)
    var minute=parseInt(pagX.split(':')[1],10)
    var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
    itm.splice(ind,1,pageX)
}


var arrTDAdjArr=[]

 function loadAll(N,K) {
     //复位svg变量



         var date=new Date()
         var H=date.getHours()
     K!=null?Sdraw=false:Sdraw=true
     var n=N||H+1,
     k=K||H

     ReadAdjTD(k,n,0)
     //清空svg图
     removeDom($('.shiXian'),$('.shiRect'),$('.shiTex'),$('.svgHeadAll'),$('.svgFootAll'),$('.xuRect'),$('.xuXian'),$('.xuTex'))


     /*if(TArr.indexOf(n-1)!=-1){
     TArr.splice(TArr.indexOf(n-1),1)
     }*/
   /*  if(TArr.indexOf(k)!=-1){
        TArr.splice(TArr.indexOf(k),1)
     }
     var CN,CT
     arrTDAdj.forEach(function(itm,ind) {
     if(itm[0]==null||itm[0]==""||itm[0]==undefined){
        return
     }
     if(parseInt(itm[6])==2){
        CN=parseInt(itm[0])
        CT=parseInt(itm[2].split(':')[0],10)
     }

     if(CT>=k&&CT<n&&itm[0]==CN) {
         arrTDAdjArr.push(ind)
         item2()
         item3()
        function item2(){
            if(itm[6]==2){
            svg.newPoint.x=null
             svg.newPoint.y=null
             svg.CarALL.splice(svg.CarALL.indexOf(itm[0]),1)
            }
             var pagX=itm[2]
             var hour=parseInt(pagX.split(':')[0],10)
             var minute=parseInt(pagX.split(':')[1],10)
             var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
             var pageY=(parseInt(itm[1],10))*100+50-100   //是否需要改动？？、
             svg.newPoint.x=pageX
             svg.newPoint.y=pageY
             var Point={x:pageX, y:pageY}
             goDraw(itm[0],Point,"read")
        }
        function item3() {
             var pagX=itm[3]
             var hour=parseInt(pagX.split(':')[0],10)
             var minute=parseInt(pagX.split(':')[1],10)
             var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
             var pageY=(parseInt(itm[1],10))*100+50-100   //是否需要改动？？、
             svg.newPoint.x=pageX
             svg.newPoint.y=pageY
             var Point={x:pageX, y:pageY}
             goDraw(itm[0],Point,"read")
             if(itm[6]==1){
                DrawOver(itm[0],"read")
             }
        }
 /!* if(itm[6]==2){
 svg.newPoint.x=null
 svg.newPoint.y=null
 }
 var pagX=itm[2]
 var hour=parseInt(pagX.split(':')[0],10)
 var minute=parseInt(pagX.split(':')[1],10)
 var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
 var pageY=(parseInt(itm[1],10))*100+50-100   //是否需要改动？？、
 svg.newPoint.x=pageX
 svg.newPoint.y=pageY
 var Point={x:pageX, y:pageY}
 goDraw(CarNum,Point,"read")
 if(itm[6]==1){
 DrawOver(CarNum)
 }*!/
 }

 })
     arrTDAdjArr.forEach(function(its,indes){
     arrTDAdj.splice(its,1,[null])
     console.log(arrTDAdj.length)
     })
    arrTDAdjArr.splice(0,arrTDAdjArr.length)*/
 }


/*function loadAll(N,K) {
    K!=null?Sdraw=false:Sdraw=true
    var n=N||7,
        k=K||n-1
 if()
    var date=new Date();
    var H=date.getHours()
    ReadAlexSection(H,H+1)
   /!* arrTDCar.forEach(function(item,index) {
     var CarNum=item[0];//车次号
     var CarUp=item[2];//列车的上下行，2下行，1上行
     CarUp==1?svg.where[CarNum]='up':svg.where[CarNum]='down'
     })*!/
        arrTDAdj.forEach(function(itm,ind) {
            if(itm[0]==null||itm[0]==""||itm[0]==undefined){
                return
            }
            else{
               // item2()
                if(itm[6]==2){
                    svg.newPoint.x=null
                    svg.newPoint.y=null
                }
                TimeAll(itm,2)
                TimeAll(itm,3)
                if(itm[6]==1){
                   DrawOver(itm[0])
                    //svgFoot(svg.newPoint.x,svg.newPoint.y,itm[0])
                    //console.log(new Date());
                }
            }
          /!*  if(CarNum==itm[0]){*!/
              /!*  function item2(){

                    var pagX=itm[2]
                    var hour=parseInt(pagX.split(':')[0],10)
                    //console.log(hour)

                    var minute=parseInt(pagX.split(':')[1],10)
                    //console.log(minute)
                    var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
                    var pageY=(parseInt(itm[1],10))*100+50-100   //是否需要改动？？、
                    svg.newPoint.x=pageX
                    svg.newPoint.y=pageY
                   /!* console.log(pageX)
                    console.log(pageY)*!/
                    var Point={x:pageX, y:pageY}
                    goDraw(itm[0],Point,"read")
                }
                function item3() {

                }*!/

                /!*  if(itm[6]==2){
                 svg.newPoint.x=null
                 svg.newPoint.y=null
                 }
                 var pagX=itm[2]
                 var hour=parseInt(pagX.split(':')[0],10)
                 var minute=parseInt(pagX.split(':')[1],10)
                 var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
                 var pageY=(parseInt(itm[1],10))*100+50-100   //是否需要改动？？、
                 svg.newPoint.x=pageX
                 svg.newPoint.y=pageY
                 var Point={x:pageX, y:pageY}
                 goDraw(CarNum,Point,"read")
                 if(itm[6]==1){
                 DrawOver(CarNum)
                 }*!/
           /!* }*!/
        })

    console.log(new Date());
}

function TimeAll(itm,ind) {
   /!* var pagX=itm3
    var hour=parseInt(pagX.split(':')[0],10)
    var minute=parseInt(pagX.split(':')[1],10)
    var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
    var pageY= (parseInt(itm[1],10))*100+50-100   //是否需要改动？？、*!/
    var pageX=itm[ind],pageY=itm[1]
    svg.newPoint.x=pageX
    svg.newPoint.y=pageY
    var Point={x:pageX, y:pageY}
    goDraw(itm[0],Point,"read")
}*/
/*var arrTDAdjArr=[]

function loadAll(N,K) {
    K!=null?Sdraw=false:Sdraw=true
    var n=N||7,
        k=K||n-1
/!*if(TArr.indexOf(n-1)!=-1){
    TArr.splice(TArr.indexOf(n-1),1)
}*!/
    if(TArr.indexOf(k)!=-1){
        TArr.splice(TArr.indexOf(k),1)
    }
    var CN,CT
        arrTDAdj.forEach(function(itm,ind) {
            if(itm[0]==null||itm[0]==""||itm[0]==undefined){
                return
            }
            if(parseInt(itm[6])==2){
                CN=parseInt(itm[0])
                    CT=parseInt(itm[2].split(':')[0],10)
            }

            if(CT>=k&&CT<n&&itm[0]==CN) {
                    arrTDAdjArr.push(ind)
                    item2()
                    item3()
                    function item2(){
                        if(itm[6]==2){
                            svg.newPoint.x=null
                            svg.newPoint.y=null
                            svg.CarALL.splice(svg.CarALL.indexOf(itm[0]),1)
                        }
                        var pagX=itm[2]
                        var hour=parseInt(pagX.split(':')[0],10)
                        var minute=parseInt(pagX.split(':')[1],10)
                        var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
                        var pageY=(parseInt(itm[1],10))*100+50-100   //是否需要改动？？、
                        svg.newPoint.x=pageX
                        svg.newPoint.y=pageY
                        var Point={x:pageX, y:pageY}
                        goDraw(itm[0],Point,"read")
                    }
                    function item3() {
                        var pagX=itm[3]
                        var hour=parseInt(pagX.split(':')[0],10)
                        var minute=parseInt(pagX.split(':')[1],10)
                        var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
                        var pageY=(parseInt(itm[1],10))*100+50-100   //是否需要改动？？、
                        svg.newPoint.x=pageX
                        svg.newPoint.y=pageY
                        var Point={x:pageX, y:pageY}
                        goDraw(itm[0],Point,"read")
                        if(itm[6]==1){
                            DrawOver(itm[0],"read")
                    }
                    }
                 /!* if(itm[6]==2){
                        svg.newPoint.x=null
                        svg.newPoint.y=null
                    }
                    var pagX=itm[2]
                    var hour=parseInt(pagX.split(':')[0],10)
                    var minute=parseInt(pagX.split(':')[1],10)
                    var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
                    var pageY=(parseInt(itm[1],10))*100+50-100   //是否需要改动？？、
                    svg.newPoint.x=pageX
                    svg.newPoint.y=pageY
                    var Point={x:pageX, y:pageY}
                    goDraw(CarNum,Point,"read")
                    if(itm[6]==1){
                        DrawOver(CarNum)
                    }*!/
                }

        })
    arrTDAdjArr.forEach(function(its,indes){
        arrTDAdj.splice(its,1,[null])
        console.log(arrTDAdj.length)
    })
    arrTDAdjArr.splice(0,arrTDAdjArr.length)
}*/
/*
function AutoDraw(N,K)//自动生成运行图
{
    var n=N||7,
        k=K||n-1

    var CN,CT
    arrTDCar.forEach(function(item,index) {
        var CarNum=item[0];//车次号
        var CarUp=item[2];//列车的上下行，2下行，1上行
        CarUp==1?svg.where[CarNum]='up':svg.where[CarNum]='down'

        arrTDAdj.forEach(function(itm,ind) {
            if(parseInt(itm[6])==2){
                CN=parseInt(itm[0]),
                    CT=parseInt(itm[2].split(':')[0],10)
            }

            if(CT>=k&&CT<=n&&itm[0]==CN) {
                if(CarNum==itm[0]){
                    item2()
                    item3()
                    function item2(){
                        if(itm[6]==2){
                            svg.newPoint.x=null
                            svg.newPoint.y=null
                        }
                        var pagX=itm[2]
                        var hour=parseInt(pagX.split(':')[0],10)
                        var minute=parseInt(pagX.split(':')[1],10)
                        var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
                        var pageY=(parseInt(itm[1],10))*100+50-100   //是否需要改动？？、
                        svg.newPoint.x=pageX
                        svg.newPoint.y=pageY
                        var Point={x:pageX, y:pageY}
                        goDraw(CarNum,Point,"read")
                    }
                    function item3() {
                        var pagX=itm[3]
                        var hour=parseInt(pagX.split(':')[0],10)
                        var minute=parseInt(pagX.split(':')[1],10)
                        var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
                        var pageY=(parseInt(itm[1],10))*100+50-100   //是否需要改动？？、
                        svg.newPoint.x=pageX
                        svg.newPoint.y=pageY
                        var Point={x:pageX, y:pageY}
                        goDraw(CarNum,Point,"read")
                        if(itm[6]==1){
                            DrawOver(CarNum)
                        }
                    }
                    /!*  if(itm[6]==2){
                     svg.newPoint.x=null
                     svg.newPoint.y=null
                     }
                     var pagX=itm[2]
                     var hour=parseInt(pagX.split(':')[0],10)
                     var minute=parseInt(pagX.split(':')[1],10)
                     var pageX=(hour-6)*60*svg.TimeX+minute*svg.TimeX;
                     var pageY=(parseInt(itm[1],10))*100+50-100   //是否需要改动？？、
                     svg.newPoint.x=pageX
                     svg.newPoint.y=pageY
                     var Point={x:pageX, y:pageY}
                     goDraw(CarNum,Point,"read")
                     if(itm[6]==1){
                     DrawOver(CarNum)
                     }*!/
                }
            }

        })
    })
}*/


//window.oncontextmenu=function(e)
//{
//e.preventDefault();
//	var menu=document.getElementById("lineAlert_div");
//	menu.style.left=e.clientX+'px';
//	menu.style.right=e.clientY+'px';
//	menu.show();
//}
//window.onclick=function(e)
//{
//document.getElementById("lineAlert_div").style.height=0;
//}
//重新画图
//
function againDraw() {

}