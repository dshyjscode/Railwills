/**
 * Created by asd on 2017/10/19.
 */

/*处理具体位置及大小问题*/

/*导航栏各种点击操作*/

/*选择绘图开始画线*/

var TArr=[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
$(document).bind('contextmenu',function(){
    return false;
});
$(function(){
//禁止点击a标签

    stopA()
    //窗口属性框
    $('#attr').draggable().resizable()
    //属性窗口中部折叠
    $('.collapse').collapse(
        {toggle:false}
    )

    //左边双击
    secLeftCli()
    var H=$(window).height(),
        hH=$('header').height(),
        fH=$('footer').height()
    $('#Sec').height(H-hH-fH)
})



//点击body
function hideDm() {
    $('#YXT').click(function (e) {
        $('#YXT').unbind('click')
    })
}



$('#Draw').click(function(e) {
    stop(e)
    /*
     *弹出填写车次号
     */
    $('#lineModal').modal('show')
})

//输入车次号，点击确定

$('#DrawTrue').click(function(e){
    stop(e)
    $('#lineModal').modal('hide')
    //判断车次号不为空 执行画图
    var CarnumX=parseInt($('#carNum').val());
    var Carnum
    if($(".CarWhere:checked").val()=="up"){
        if(CarnumX%2==0){
            carnm(CarnumX+1)
            Carnum=Car_num_ber
        }
        else{
            Carnum=CarnumX
        }
    }
    else{
        if(CarnumX%2!=0){
            carnm(CarnumX+1)
            Carnum=Car_num_ber
        }
        else{
            Carnum=CarnumX
        }
    }


    svg.Car.indexOf(Carnum)==-1&&svg.Car.indexOf(Carnum.toString())==-1? typeof Carnum==='number'&&Carnum%1===0?($('#YXT').unbind('click'),svg.where[Carnum]=$(".CarWhere:checked").val(),svg.mouseDCarnum=Carnum,svg.drawTure=true):"":alert('车次号重复')
})
var Car_num_ber
function carnm(carn) {

    if(svg.Car.indexOf(carn)!=-1||svg.CarALL.indexOf(carn)!=-1){
        carn+=2
        carnm(carn)
    }
    else{
        Car_num_ber=carn
       // return Car_num_ber
    }
}


/*右键屏幕弹出绘图终止框*/
/*function stopDra() {*/
    $('#YXT').mousedown(function(e){
     
        stopP(e)

            if(svg.AllPoints.length>0){
                $('.dropdown').removeClass('open')
                $('.shiRect,.shiMovRect').hide()
                $('#lineAlert_div').hide()
            }

        if(svg.drawTure){
            if(e.which==3){
                var x= e.pageX,
                    y= e.pageY
                $('#lineAlert_div').hide()
                $('#DraOver').css({'left':x,"top":y}).show()
                $('#YXT').unbind('dblclick')
                }

            else{
                $('#DraOver').hide()
                //清除指示虚线
                var pageX= Math.round(coordX(e)-svg.pageX),
                    pageY= Math.round(coordY(e)-svg.pageY)
                var draNewPoint
                svg.AllPointsYH.forEach(function(item){
                    if(!(pageY>item+svg.cliY)&&!(pageY<item-svg.cliY)&&0<pageX<15*60*svg.TimeX){

                            draNewPoint=false

                            //限制跨站
                          if(svg.oldPoint.y!=null) {
                              var Car = svg.mouseDCarnum
                              var where = svg.where[Car]
                              if (item - svg.oldPoint.y > 100 || item - svg.oldPoint.y < -100) {
                                  return
                              }
                              else if ((where == 'up' && item - svg.oldPoint.y >= -100 && 0 > item - svg.oldPoint.y) || (where == 'down' && item - svg.oldPoint.y <= 100 && 0 < item - svg.oldPoint.y)) {
                                  //判断上下行
                                  svg.oldPoint.x = null
                                  svg.oldPoint.y = null
                                  /*重新定义车次号
                                   * 获取之前的车次及方向
                                   * */
                                  var CarNum = carnm(Car + 1)
                                  svg.mouseDCarnum = CarNum
                                  svg.where[CarNum] = where == 'up' ? 'down' : 'up'
                                  //自动画尾部
                                  DrawOver(Car)
                                  console.log(svg.CarDoNum)
                                  draNewPoint = true
                              }
                              else {
                                  draNewPoint=true
                              }
                          }
                          else {
                                draNewPoint=true
                          }

                        //画线
                        if(draNewPoint){
                            var arr=BM(pageY,item)

                            svg.G.push({x:pageX,y:pageY})

                            svg.newPoint.x=pageX
                            svg.newPoint.y=item
                            var Point={x:pageX, y:item}
                            console.log(svg.mouseDCarnum);
                            goDraw(svg.mouseDCarnum,Point)
                        }
                    }
                })

                        //判断股道号 并储存
                         //arr=[];

                    /* else{
                     $('#DraOver').hide()
                     }*/
                    //stopDra()


            }
        }
    })
//}

/*点击停止绘图*/
$('#Over').click(function(e){
    stop(e)
    //隐藏弹出框
    $('#DraOver').hide()
    //调取结束样式绘图函数
    if(svg.AllNewPoint.length>0){
        var Carnum=svg.mouseDCarnum
        DrawOver(Carnum)
    }
    svg.drawTure=false
})
//取消画线
$('#None').click(function(e){
    stop(e)
    //隐藏弹出框
    $('#DraOver').hide()
    //清除线的储存信息，和车次号储存信息
    if(svg.AllNewPoint.length>0){
        var Carnum=svg.mouseDCarnum
        delAllPoints(Carnum)
    }
    svg.drawTure=false
    //清除svg.CarDoNum中车次号
})



//监听sec的scroll。  控制左边站显示位置保持left=0

/*var scro=false
 var scroL=$('#Sec').scrollLeft()
 var Stimer=true
 var scrlArr=[]
 Sdraw=true*/
$('#Sec').scroll(function() {
    /*
     if(!Sdraw){
     return false
     }
     */

    var Lv=$('#SL').offset().left
    Lv!=20?$('#SL').offset({'left':20}):""
    var svgTv=$('#timSvg').offset().top
    svgTv!=60?$('#timSvg').offset({'top':60}):""
    /*  var scrLeft=null
     scrLeft=$('#Sec').scrollLeft()
     scrlArr.push(scrLeft)
     console.log(scrLeft);
     /!*过滤画图*!/
     if(scro){
     if(scroL+1200<scrLeft ||scroL-1200>scrLeft){
     var scrTimer=null
     scro=false
     clearInterval(scrTimer)
     scrTimer=setInterval(function() {
     var Sl=$('#Sec').scrollLeft()
     console.log(Sl)
     if(Sl=scrlArr[scrlArr.length-1]){
     clearInterval(scrTimer)
     scroLoadYXT(Sl)
     scroL=Sl
     scro=true
     scrlArr.splice(0,scrlArr.length)
     }
     else{
     return false
     }
     },1000)
     }
     }
     */
})

function scroLoadYXT(Sl) {
    var n=7+parseInt(Sl/1200)
    /* TArr.indexOf(n)!=-1?
     TArr.indexOf(n-2)!=-1?
     loadAll(n,n-2):
     TArr.indexOf(n-1)!=-1?
     loadAll(n,n-1):""
     :TArr.indexOf(n-1)!=-1?
     TArr.indexOf(n-2)!=-1?
     loadAll(n-1,n-2):
     loadAll(n,n-1) :
     TArr.indexOf(n-2)!=-1? loadAll(n-1,n-2) :""*/
    //if( TArr.indexOf(n)!=-1&&TArr.indexOf(n-2)!=-1) loadAll(n,n-2)
    if(Sdraw){
        if(TArr.indexOf(n)!=-1&&TArr.indexOf(n-1)!=-1)loadAll(n,n-1)
        else if(TArr.indexOf(n-1)!=-1)loadAll(n,n-1)
        else{
            return false
        }
        Sdraw=true
    }

}



//点击封锁区间
$(".AnoCli").each(function() {
    $(this).click(function() {
        svg.Anocli=0;
        console.log($(this).get(0).attributes[1].value)
        var dat=$(this).get(0).attributes[1].value
        $('#YXT').unbind('click')
        DrawAno(dat)
    })
})



//显示具体菜单栏
var caN
function showLineAlert(x,y,carNum) {
    $('#DraOver').hide()
    $('#lineAlert_div').css({'left':x,"top":y}).show()
    //更改车次号
    caN=carNum
}
$('#cNum').click(function(e){
    stop(e)
    $('#lineAlert_div').hide()
    var oldNum=caN.substr(1)
    $('#oldCarNum').children('input').val(oldNum)
    $('#changeNum').modal('show')
    // chanCar(caN)
})
//删除列车
$('#cDel').click(function(e) {
    stop(e)
    $('#lineAlert_div').hide()
    delCar(caN)
})
//复制列车
$('#cCopy').click(function(e) {
    stop(e);
    $('#lineAlert_div').hide()
    /*
     *弹出填写车次号
     */
    $('#CarCop').modal('show')

})

//编辑列车
$('#cEdi').click(function(e) {
    stop(e)
    $('#lineAlert_div').hide()
    ediContinue(caN)
})



//根据车次号改变对应位置
function oldCN(carNum) {
    var Arr=[]
    svg.AllPoints.forEach(function(item,index){
        item=='star'+carNum? Arr.push(index):""

        item=='over'+carNum?Arr.push(index):""
    })
    return Arr
}


//执行变更车次

//点击确定键

//点击取消键   关闭弹出的模态框
/* $('#changeCarNumF').click(function(e) {
 stop(e)
 $('#changeNum').modal('hide')
 })*/

$('#changeCarNumT').click(function(e) {
    var oldNum=caN.substr(1)
    //旧车次号显示
    var newNum=parseFloat($('#newCarNum').children('input').val())
    if(svg.Car.indexOf(newNum)==-1){
        if(newNum!=null&&(typeof newNum)==='number'&&newNum%1===0){
            changeAll(oldNum,newNum)
            $('#changeNum').modal('hide')
            stop(e)
            //获取 新值
        }
    }
    else{
        alert('车次号重复')
    }
    return false
})

//修改车次号及车次号对应路线的属性
function changeAll(oldNum,newNum) {

    //删除旧列车
    removeDom($('.ra'+oldNum),$('.la'+oldNum),$('.ta'+oldNum),$('.ha'+oldNum),$('.fa'+oldNum))
    var Arr=[]
    //找到对应数组
    Arr=oldCN(oldNum)
    svg.where[newNum]=svg.where[oldNum]
    delete svg.where[oldNum]
   /* if(svg.CarDoNum.coord[carNum]!=undefined&&svg.CarDoNum.coord[carNum]!=null){
        svg.CarDoNum.coord[oldNum].splice(0,svg.CarDoNum.coord[oldNum].length)
    }*/
    if(Arr[0]!=null&&Arr[1]!=null){

        //重新画图
        for(var i=Arr[0]+1;i<Arr[1];i++){
            svg.newPoint.x=svg.AllPoints[i].x
            svg.newPoint.y=svg.AllPoints[i].y
            goDraw(newNum,svg.AllPoints[i])
        }
        if(svg.CarDoNum.del.indexOf(newNum.toString())!=-1){
            svg.CarDoNum.del.splice(svg.CarDoNum.del.indexOf(newNum.toString()),1)
        }
        svg.oldCarNum[newNum]=oldNum
        //svg.CarDoNum.Where[newNum]=svg.CarDoNum.Where[oldNum]
        delete svg.CarDoNum.Where[oldNum]
        DrawOver(newNum,'change')
        var oldN=parseInt(oldNum)
        if(svg.CarDoNum.addCar.indexOf(oldN)!=-1){
            svg.CarDoNum.Where[newNum]=svg.where[newNum]
            svg.CarDoNum.addCar.splice(svg.CarDoNum.addCar.indexOf(oldN),1,newNum)
        }
        delete svg.CarDoNum.coord[oldNum]

        //AddCar(newNum)
        svg.CarDoNum.change[oldNum]=newNum
        svg.CarDoNum.order.push(oldNum)
        svg.CarDoNum.num.splice(svg.CarDoNum.num.indexOf(oldNum),1)

        //清空储存数组
        svg.AllPoints.splice(Arr[0],Arr[1]-Arr[0]+1)
    }


    //通过旧号找到对应数据，改成新号
    /* $('.ra'+oldNum).get(0).attributes[10].value='a'+newNum
     $('.la'+oldNum).get(0).attributes[9].value='a'+newNum
     $("text[class='ha'"+oldNum+']').
     chanCla($('.ra'+oldNum),'.ra'+oldNum,'ra'+newNum)
     chanCla($('.la'+oldNum),'.la'+oldNum,'la'+newNum)
     chanCla($('.ta'+oldNum),'.ta'+oldNum,'ta'+newNum)
     chanCla($('.ha'+oldNum),'.ha'+oldNum,'ha'+newNum)
     chanCla($('.fa'+oldNum),'.fa'+oldNum,'fa'+newNum)*/
}

//更换类名
function chanCla(el,oldCla,newCla) {
    el.removeClass(oldCla).addClass(newCla)
}

//执行删除列车
var DelcarNum
function delCar(CarNum) {
    DelcarNum = CarNum.substr(1)
    $('#DelBody').find('span').text(DelcarNum)
    $('#CarDle').modal('show')
}
//点击确定按钮
$('#delCarT').click(function(e) {
    stop(e)
    $('#CarDle').modal('hide')
    delAllPoints(DelcarNum)
    return false
})

//删除列车，清空列车对应的数据
function delAllPoints(carNum) {
//解除鼠标移动 点击等事件
    $('#YXT').unbind('mousemove')
    $('#YXT').unbind('click')
    //删除虚线
    removeDom($('.xuRect'),$('.xuXian'),$('.xuTex'))
    var Arr=[]
    //删除图上列车
    removeDom($('.ra'+carNum),$('.la'+carNum),$('.ta'+carNum),$('.ha'+carNum),$('.fa'+carNum))
    //找到对应数组
    Arr=oldCN(carNum)
    //清空储存数组
    if(Arr[0]!=null&&Arr[1]!=null){
        svg.AllPoints.splice(Arr[0],Arr[1]-Arr[0]+1)
    }
    //清掉车次号数组值
    svg.Car.splice(svg.Car.indexOf(carNum),1)

    //记录删除操作

    function old(caNum){
        if(svg.oldCarNum[caNum]!=null&&svg.oldCarNum[caNum]!=undefined){
            var oldD= svg.oldCarNum[caNum]
            delete svg.oldCarNum[caNum]
            old(oldD)
        }
        else{
            if(svg.CarDoNum.del.indexOf(caNum))
            svg.CarDoNum.del.push(caNum)
        }
    }
    old(carNum)

    delete svg.CarDoNum.Where[carNum]
    var car=parseInt(carNum)
    if(svg.CarDoNum.addCar.indexOf(car)!=-1){
        svg.CarDoNum.addCar.splice(svg.CarDoNum.addCar.indexOf(car),1)
    }

    DelCar(carNum)

    //清空临时储存点
    svg.oldPoint.x=null
    svg.oldPoint.y=null
    svg.newPoint.x=null
    svg.newPoint.y=null
    //清空整线临时储存点
    svg.AllNewPoint.splice(0,svg.AllNewPoint.length)
}


//执行复制列车
$('#copyCarT').click(function(e){
    stop(e)
    $('#CarCop').modal('hide')
    copyNum(caN)
})
function copyNum(carNum) {
    //判断车次号不为空 执行画图
    var Carnum=parseFloat($('#copyCarNum').find('input').val())
    svg.Car.indexOf(Carnum)==-1&&typeof (Carnum)==='number'&&Carnum%1===0?copyCar(carNum,Carnum):alert("车次号不可用")
}
//生成复制图
function copyCar(oldNum,newNum) {

    //找到对应数组
    var old=oldNum.substr(1)
    var Arr=oldCN(oldNum.substr(1))
    if(Arr[0]!=null&&Arr[1]!=null){
        //
        svg.where[newNum]=svg.where[old]

        //重新画图
        for(var i=Arr[0]+1;i<Arr[1];i++){
            svg.newPoint.x=svg.AllPoints[i].x+60
            svg.newPoint.y=svg.AllPoints[i].y
            var piont={x:svg.AllPoints[i].x+60,y:svg.AllPoints[i].y}

            goDraw(newNum,piont)
        }
        if(svg.CarDoNum.del.indexOf(newNum.toString())!=-1){
            svg.CarDoNum.del.splice(svg.CarDoNum.del.indexOf(newNum.toString()),1)
        }
        DrawOver(newNum)
        //AddCar(newNum)

        //方向
        svg.CarDoNum.Where[newNum]=svg.where[old]
        /*  for(var i=0;i<svg.CarDoNum.num.length;i++){
         if(svg.CarDoNum.num[i]==newNum){
         svg.CarDoNum.coord[newNum]=svg.CarNum[newNum].slice(0)
         }
         }*/
        console.log( svg.AllPoints)
        //console.log( svg.AllPoints)
        /* //清空储存数组
         svg.AllPoints.splice(Arr[0],Arr[1]-Arr[0]+1)*/
    }
    //生成新的数组加入到永久储存里
}



//继续编辑列车
function ediContinue(car) {
    var carNum=car.substr(1)
    var ind=svg.AllPoints.indexOf('over'+carNum)
    var indStr=svg.AllPoints.indexOf('star'+carNum)
    if(ind!=-1&&indStr!=-1){
       for(var i=indStr+1;i<ind;i++){
           svg.AllNewPoint.push(svg.AllPoints[i])
       }

        var x1=svg.AllPoints[ind-1].x
        var y1=svg.AllPoints[ind-1].y
        svg.oldPoint.x=x1
        svg.oldPoint.y=y1

        //移除所有实体矩形
        //移除尾部样式
        removeDom($('.ra'+carNum), $(".fa"+carNum))
        svg.mouseDCarnum=carNum
        svg.drawTure=true
    }
}



//点击左侧站名显示相应的股道具体样式
function secLeftCli() {
    $('.secP').each(function(i){
        $(this).dblclick(function(e) {
            stop(e)
            //更改svg背景表格样式
            //    showG(i)
            return false
        })
    })
}



//当前时间线





//数据加载完成前禁止点击a标签
function stopA() {
    $('#basic').find('a').click(function(e) {
        e.preventDefault()
    })
}


//点击加载图
$('#inpTim').click(function(e) {             //手动输入时间
    stopP(e)
    $('#basicDiv').toggle()
    $("#basicIP").val(null)
});
//点击打开基本图   此为从新打开清空svg中所有变量
$('#basicLi').click(function(e) {
    stopP(e)
    $('#fun').removeClass('open')
    $('#basic').removeClass('open')
    if(svg.CarDoNum.num.length>0||svg.CarDoNum.del.length>0){
        $('#saveSvg').modal('show')
        saveDiv()
    }
    else{
        loadAll()
    }
})

/*提示确定保存*/
function saveDiv(b,f){
var b=b||null,
    f=f||null
    $('#saveSvgT').click(function(e) {
        stopP(e)
        $('#saveSvg').modal('hide')
        GetData()
        cleObj()
        b!=null?loadAll(b,f):loadAll()
    })
    /*提示确定不保存*/
    $('#saveSvgF').click(function(e) {
        stopP(e)
        $('#saveSvg').modal('hide')
        //GetData()
        cleObj()
        b!=null?loadAll(b,f):loadAll()
    })

}



//手动输入时间打开图
$('#basicBtn').click(function(e) {
    stopP(e)
    $('#fun').removeClass('open')
    $('#basic').removeClass('open')
    var value=$("#basicIP").val()
    var valArr=value.split(',')
    valArr.forEach(function(itm,ind){
        var ARR=itm.split('-')
        if(ARR.length==2&&typeof (ARR[0]-0)==='number'&&typeof (ARR[1]-0)==='number'){
            var Max=BM(ARR[1]-0,ARR[0]-0)[0]
            var Min=BM(ARR[1]-0,ARR[0]-0)[1]
            var before= Max>21?21:Max<7?"":Max
            var after=Min<6?"":Min>20?20:Min
            if(after!=""&&before!=""){
                if(svg.CarDoNum.num.length>0||svg.CarDoNum.del.length>0){
                    $('#saveSvg').modal('show')
                    saveDiv(before,after)
                }
                else{
                    loadAll(before,after)
                }
            }

        }
    })
})




//保存
$('#save').click(function(e) {
    stop(e)

    //console.log(JSON.parse(svg.CarDoNum))
  /*  svg.CarDoNum.change.forEach(function(item,ind){
        consoel.log(item,ind)
    })*/
    var carArr=[]

    svg.CarALL.forEach(function(item,ind){
        if(svg.Car.indexOf(item)!=-1){
           carArr.push(item)
        }
    })
 /*   GetData()
    cleObj()*/
    if(carArr.length>0){
       var str= carArr.toString()
        alert('车次号'+str+'不可用')
    }
    else{
        GetData()
        cleObj()
    }

});



//初始化对象
function Nobj() {}
//清空svg.CarDoNum
function cleObj() {
    svg.CarDoNum.num.splice(0,svg.CarDoNum.num.length)
    svg.CarDoNum.del.slice(0,svg.CarDoNum.del.length)
    svg.CarDoNum.change=new Nobj()
    svg.CarDoNum.coord=new Nobj()
    svg.CarDoNum.Where=new Nobj()
}

//复位svg中部分其他变量
/*function restSvgAll() {
        svg.drawTure=false              //是否画图
        svg.where={}
        svg.G=[]                        //股道号
        svg.Car=[]                     //存放车次号
        svg.CarALL=[]
        svg.TimeX=20
        svg.AllPoints=[]
        svg.AllPointsXZ=[]
        svg.AllPointsYH=[]
        svg.AllPointX=[]
        svg.AllPointY=[]
        svg.WhilePoint=[]
        svg.CarNum={}
        svg.Point={
            x:null,
            y:null
        }
        svg.newPoint={
            x:null,
            y:null
        }

        svg.oldPoint={
            x:null,
            y:null
        }
       svg.AllNewPoint=[]
        svg.cliY=20
        svg.oldCarNum={}

}*/





/*底部按钮*/
//缩小
$('#shrink').click(function (e) {
    stopP(e)

        svg.TimeX>10?svg.TimeX-=2:svg.TimeX=10
        againDraw()

});
$('#bUp').click(function (e) {
    stopP(e)
    svg.TimeX<20?svg.TimeX+=2:svg.TimeX=20
        againDraw()

});

//放大缩小时重新画图
function againDraw() {
    //重新画背景格，需要清空svg.AllPointsXZ
    svg.AllPointsXZ.splice(0,svg.AllPointsXZ.length)

    $('#Tim').children().remove()
    $('#YXT').children().remove()
    svgBgHead()
    allBG()
    leftT()
    console.log(svg);
    basicLocationDraw()
    //AutoDraw()
    changeWhere()
}

//之前为重新根据数据库数据画图，更改为根据本地内容画图
function basicLocationDraw() {
    //根据svg.AllPoints内容重新画图
    var num
    svg.AllPoints.forEach(function (value,index) {
        if(typeof value ==="string"){           //判断开头和结尾
            var ValArr=value.split('_')
            if(ValArr[0]=='star'){
                num=ValArr[1]
            }
            else{
                DrawOver(num,"again")
            }
        }
        else{
            svg.newPoint.x=value.x*svg.TimeX
            svg.newPoint.y=value.y
            var Point={x:value.x*svg.TimeX, y:value.y}
            goDraw(num,Point,"again")
        }
    })
}





//上下行
$('.middle:radio').change(function () {
    changeWhere()
})

//更改筛选上下行时显示车
function changeWhere() {
    var tex=$('.middle:radio:checked').val()
    //console.log(svg);
    svg.Car.forEach(function (value) {
        switch (tex) {
            case '上行':
                if(value%2==1){
                    $('.ha'+value+',.fa'+value+',.ra'+value+',.ta'+value+',.la'+value).hide()
                }
                else{
                    $('.ha'+value+',.fa'+value+',.ta'+value+',.la'+value).show()
                }
                break;
            case '下行':
                if(value%2==0){
                    $('.ha'+value+',.fa'+value+',.ra'+value+',.ta'+value+',.la'+value).hide()
                }
                else{
                    $('.ha'+value+',.fa'+value+',.ta'+value+',.la'+value).show()
                }
                break;
            default:
                $('.ha'+value+',.fa'+value+',.ta'+value+',.la'+value).show()
                break;
        }
    })
}



