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

//skb

$('#skb').click(function(e) {
    stop(e)
    /*
     *弹出画线界面
     */
    $('#skbModal').modal('show')
})


$('#wllj').click(function(e) {
    stop(e)
    /*
     *弹出画线界面
     */
    var str = rePlaceStr(getCookie_wl(),19,"1");
	setCookie_wl(str);
    alert("连接应用服务器成功");
    
    $("#txt5").val("已连接")
    $("#txt5").css("color","black")
    $("#txt5").css("background","green")
    
})


$('#login').click(function(e) {
    stop(e)
    /*
     *弹出填写车次号
     */
    $('#loginModal').modal('show')
})

//login
$('#nav_login').click(function(e) {
    stop(e)
    /*
     *弹出登录界面
     */
    $('#loginModal').modal('show')
})




//暂时
$('#Change_Password').click(function(e) {
    stop(e)
    /*
     *修改密码
     */
    statement()
})
$('#Select_Section').click(function(e) {
    stop(e)
    /*
     *选择区段
     */
    statement()
})
$('#sign_out').click(function(e) {
    stop(e)
    /*
     *退出
     */
    alert('本实验尚未做完，请继续完成实验!')
})
$('#Delete_plan_line').click(function(e) {
    stop(e)
    /*
     *删除线
     */
    statement()
})
$('#deleteLine').click(function(e) {
    stop(e)
    /*
     *删除多条计划线
     */
    statement()
})
$('#Mobile_plan_line').click(function(e) {
    stop(e)
    /*
     *移动计划线
     */
    statement()
})
$('#Train_decomposition').click(function(e) {
    stop(e)
    /*
     *列车分解
     */
    statement()
})
$('#Train_combination').click(function(e) {
    stop(e)
    /*
     *列车组合
     */
    statement()
})

$('#Fixed_plan').click(function(e) {
    stop(e)
    /*
     *固定计划
     */
    statement()
})
$('#Issue_train_plan').click(function(e) {
    stop(e)
    /*
     *弹出下计划
     */
	$('#xjhModal').modal('show')
	
	//显示计划表
	showPlanTab()
})
$('#Reporting_information').click(function(e) {
    stop(e)
    /*
     *报点信息
     */
    $('#bdxxModal').modal('show')
})
$('#windows').click(function(e) {
    stop(e)
    /*
     *窗口
     */
    statement()
})
$('#Historical_maps').click(function(e) {
    stop(e)
    /*
     *调阅历史图
     */
    statement()
})
$('#Adjacent_stations').click(function(e) {
    stop(e)
    /*
     *调阅邻台
     */
    statement()
})
$('#infrared').click(function(e) {
    stop(e)
    /*
     *查询红外线设置
     */
    statement()
})
$('#Detailed_train_data').click(function(e) {
    stop(e)
    /*
     *列车详细数据
     */
    statement()
})
$('#rateLimitingIn').click(function(e) {
    stop(e)
    /*
     *限速命令输入
     */
    statement()
})
$('#Speed_limit_command_management').click(function(e) {
    stop(e)
    /*
     *限速命令管理
     */
    statement()
})
$('#Parameter_setting').click(function(e) {
    stop(e)
    /*
     *参数设置
     */
    statement()
})
$('#option').click(function(e) {
    stop(e)
    /*
     *选项
     */
    statement()
})
$('#help').click(function(e) {
    stop(e)
    /*
     *帮助
     */
    alert('请查阅实验指导书!')
})
$('#bc').click(function(e) {
    stop(e)
    /*
     *保存
     */
    alert('已保存!')
})
$('#sx').click(function(e) {
    stop(e)
    /*
     *刷新
     */
    window.location.reload()
})
$('#sc').click(function(e) {
    stop(e)
    /*
     *删除
     */
    statement()
})
$('#yd').click(function(e) {
    stop(e)
    /*
     *移动
     */
    statement()
})
$('#zh').click(function(e) {
    stop(e)
    /*
     *组合
     */
    statement()
})
$('#fj').click(function(e) {
    stop(e)
    /*
     *分解
     */
    statement()
})
$('#xs').click(function(e) {
    stop(e)
    /*
     *限速
     */
    statement()
})
$('#xsmlb').click(function(e) {
    stop(e)
    /*
     *限速命令表
     */
    statement()
})
$('#ddml').click(function(e) {
    stop(e)
    /*
     *调度命令
     */
    $('#orderModal').modal('show')
})
//暂时











//logined
$('#loginTrue').click(function(e) {
    stop(e)
    
	login_Function();	
})
//cancerlogin
$('#cancerLogin').click(function(e) {
    stop(e)
    
	login_Refresh();
})

//print
$('#print').click(function(e) {
    stop(e)
    /*
     *弹出填写车次号
     */
	$('#printModal').modal('show')	
})

//deleteLine
$('#deleteLine').click(function(e) {
    stop(e)
    /*
     *弹出填写车次号
     */
	$('#deleteLineModal').modal('show')	
})

//order按钮
$('#orderButton').click(function(e) {
    stop(e)
    /*
     *弹出填写车次号
     */
	$('#orderModal').modal('show')	
})

//order
$('#order').click(function(e) {
    stop(e)
    /*
     *弹出填写车次号
     */
	$('#orderModal').modal('show')	
})

//orderM
$('#orderM').click(function(e) {
    stop(e)
    /*
     *弹出填写车次号
     */
	$('#orderMModal').modal('show')	
})

//orderTemplateM
$('#orderTemplateM').click(function(e) {
    stop(e)
    /*
     *弹出填写车次号
     */
	$('#orderTemplateMModal').modal('show')	
})


//td按钮
$('#tdjhButton').click(function(e) {
    stop(e)
    /*
     *弹出图定计划
     */
	$('#chartPlanModal').modal('show')	
})

//td
$('#chartPlan').click(function(e) {
    stop(e)
    /*
     *弹出图定计划
     */
	$('#chartPlanModal').modal('show')	
})
$('#jbt').click(function(e) {
    stop(e)
    /*
     *从数据库调取基本图
     */
	getBasicimages_Function()
})

//恢复初始状态
$('#deleteAllCookies').click(function(e){
    stop(e)
    clearCookie()
})

//xjh按钮
$('#xjhButton').click(function(e) {
    stop(e)
    /*
     *弹出下计划
     */
	$('#xjhModal').modal('show')
	
	//显示计划表
	showPlanTab()
		
})

//xjh
$('#xjh').click(function(e) {
    stop(e)
    /*
     *弹出下计划
     */
	$('#xjhModal').modal('show')
	
	//显示计划表
	showPlanTab()
		
})
//下计划中的选择框操作
$('#staCheckbox').click(function(e) {
	stop(e)
	if($(this).is(':checked')){
		$('input[name=selectSta]').prop("checked",true)
	}
	else{
		$('input[name=selectSta]').prop("checked",false)
	}
	
})

//关闭下计划弹窗清除数据
function xjhclearData(){
	
	var PlanTable=document.getElementById("addtable")
	console.log(PlanTable.rows.length)
	for(var i=PlanTable.rows.length-1;i>=1;i--){
		PlanTable.deleteRow(i);
	}
}



//显示计划表函数
function showPlanTab(){
	var PlanTable=document.getElementById("addtable")
	var startTime
	var endTime
	BgCom.newCar.forEach(function(val){
        $.each(svg.carStaTim[val],function(n,v){
			if(n==0) startTime=v.start;
			if(n==svg.carStaTim[val].length-1) endTime=v.end;
		})
		$.each(svg.carStaTim[val],function(n,v){
			var trow = getDataRow(v,n,startTime,endTime)
			PlanTable.appendChild(trow);
		})
	})
}
function getDataRow(h,i,stT,eT){
	//var _img = document.createElement("img")
	var checkBox=document.createElement("input");  
	checkBox.setAttribute("type","checkbox");  
	checkBox.setAttribute("name","selectSta"); 
	checkBox.setAttribute("value",""); 
	var row =document.createElement('tr');    //创建行
	var Cell = document.createElement('td'); //创建第一列
	var idCell =document.createElement('td'); //创建第二列序号
	var selectCell=document.createElement('td');//创建第三列选择
	var stationCell=document.createElement('td');//创建第四列车站
	var lastTimeCell=document.createElement('td');//创建第五列上次下达
	var startTimeCell=document.createElement('td');//创建第六列开始时间
	var endTimeCell=document.createElement('td');//创建第七列结束时间
	var jieshouCell=document.createElement('td');//创建第八列是否接收
	var qianshouCell=document.createElement('td');//创建第九列是否签收
	var qianshourenCell=document.createElement('td');//创建第十列签收人	
	//if(n==0){
	//	Cell.appendChild(_img)
	//	row.setAttribute('background-color','#0000FF')
	//	Cell.setAttribute('background-color','#87CEFA')	
	//}
	//Cell.appendChild(_img)
	//_img.src="../images/三角形.jpg"
	//_img.setAttribute("height","100px")
	//_img.setAttribute("width","100px")
	idCell.innerHTML= i+1
	selectCell.appendChild(checkBox)
	stationCell.innerHTML=h.station
	startTimeCell.innerHTML=stT
	endTimeCell.innerHTML=eT
	
	row.appendChild(Cell); //加入行  ，下面类似
	row.appendChild(idCell); //加入行  ，下面类似
	row.appendChild(selectCell); //加入行  ，下面类似
	row.appendChild(stationCell); //加入行  ，下面类似
	row.appendChild(lastTimeCell); //加入行  ，下面类似
	row.appendChild(startTimeCell); //加入行  ，下面类似
	row.appendChild(endTimeCell); //加入行  ，下面类似
	row.appendChild(jieshouCell); //加入行  ，下面类似
	row.appendChild(qianshouCell); //加入行  ，下面类似
	row.appendChild(qianshourenCell); //加入行  ，下面类似
	return row
}




//下计划，点击确定
$('#xiajihuaTrue').click(function(e) {
    stop(e)
	$('#xjhModal').modal('hide')
	//清除下计划表数据
	xjhclearData()
	//下发和回执显示
	receiptShow()
	//运行图转换，点到编码变量
	pointTojs();
	//发送cookies
	addCookie()
	//获取回执
	getCookie_All()
	
})
//下发和回执显示
function receiptShow(){
	$("#bjReceipt>.circle1").css('background-color',"red")
	$("#tjReceipt>.circle1").css('background-color',"red")
	$("#jnReceipt>.circle1").css('background-color',"red")
	$("#njReceipt>.circle1").css('background-color',"red")
	$("#szReceipt>.circle1").css('background-color',"red")
	$("#shReceipt>.circle1").css('background-color',"red")
	
	$("#bjReceipt>.circle2").css('background-color',"red")
	$("#tjReceipt>.circle2").css('background-color',"red")
	$("#jnReceipt>.circle2").css('background-color',"red")
	$("#njReceipt>.circle2").css('background-color',"red")
	$("#szReceipt>.circle2").css('background-color',"red")
	$("#shReceipt>.circle2").css('background-color',"red")
	BgCom.newCar.forEach(function(val){
		$.each(svg.carStaTim[val],function(n,v){
			if(v.station=="北京南站"){
				$("#bjReceipt>.circle2").css('background-color',"green")
			}
			
			if(v.station=="天津南站"){
				$("#tjReceipt>.circle2").css('background-color',"green")
			}
			
			if(v.station=="济南西站"){
				$("#jnReceipt>.circle2").css('background-color',"green")
			}
			
			if(v.station=="南京南站"){
				$("#njReceipt>.circle2").css('background-color',"green")
			}
			
			if(v.station=="苏州北站"){
				$("#szReceipt>.circle2").css('background-color',"green")
			}
			
			if(v.station=="上海虹桥站"){
				$("#shReceipt>.circle2").css('background-color',"green")
			}
			
		})
	})
	
	
}

//回执窗口弹出
$('#receipt').click(function(e) {
    stop(e)
    /*
     *单击一次弹出窗口，再次单击关闭窗口
     */
	//alert($('#receiptModal').css("display"))
	
	if($('#receiptModal').css("display")=="none"){
		$('#receiptModal').css("display","block")
	}
	else{
		$('#receiptModal').css("display","none")
	}
		
		
})

//xsmlb
$('#xsmlb').click(function(e) {
    stop(e)
    /*
     *弹出填写车次号
     */
	$('#xsmlbModal').modal('show')	
})

//rateLimitingIn
$('#rateLimitingIn').click(function(e) {
    stop(e)
    /*
     *弹出填写车次号
     */
	$('#rateLimitingInModal').modal('show')	
})

//画线按钮
$('#startDraw').click(function(e) {
    stop(e)
    /*
     *弹出填写车次号
     */
    $('#lineModal').modal('show')
})


//画线
$('#Draw').click(function(e) {
    stop(e)
    /*
     *弹出填写车次号
     */
    $('#lineModal').modal('show')
})
$('#hx').click(function(e) {
    stop(e)
    /*
     *弹出填写车次号
     */
    $('#lineModal').modal('show')
})
//bdxx
$('#bdxx').click(function(e) {
    stop(e)
    /*
     *弹出填写车次号
     */
    $('#bdxxModal').modal('show')
})

//输入车次号，点击确定

$('#DrawTrue').click(function(e){
    stop(e)
    $('#lineModal').modal('hide')
	//待改
    var CarnumX=parseInt($('#carNum').val());
	//判断车次号是否符合上下行规则
    var Carnum
    if($(".CarWhere:checked").val()=="up"){
        if(CarnumX%2!=0){
            carnm(CarnumX+1)
            Carnum=Car_num_ber
        }
        else{
            Carnum=CarnumX
        }
    }
    else{
        if(CarnumX%2==0){
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
        //return Car_num_ber
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
                    if(!(pageY>item+svg.cliY)&&!(pageY<item-svg.cliY)&&0<pageX<6*24*svg.TimeX){

                            draNewPoint=false

                            //限制跨站
                          if(svg.oldPoint.y!=null) {
                              var Car = svg.mouseDCarnum
                              var where = svg.where[Car]
                              if ((where == 'up' && item - svg.oldPoint.y < -150) || (where == 'down' && item - svg.oldPoint.y > 150)) {    	  
							      var leng = (Math.abs(item-svg.oldPoint.y))/150
								  var dx = Math.round((pageX-svg.oldPoint.x)/leng)
								  var dy =(item-svg.oldPoint.y)/Math.abs(item-svg.oldPoint.y)
							  	  for(var i=1; i<leng ;i++){
								  	var x =svg.oldPoint.x + dx
								  	var y = svg.oldPoint.y + dy*150
									draNewPoint = true
								  	drawLine(x,y)
								  }
								  draNewPoint = true
                                  drawLine(pageX,item)
                              }
                              else if ((where == 'up'/* && item - svg.oldPoint.y <= 150 */&& 0 < item - svg.oldPoint.y) || (where == 'down' /* && item - svg.oldPoint.y >=- 150 */&& 0 > item - svg.oldPoint.y)) {
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
                                  console.log(svg.CarDoNum);
                                  draNewPoint = true
								  drawLine(pageX,item)
								  
                              }
                              else {
                                  draNewPoint=true
								  drawLine(pageX,item)
                              }
                          }
                          else {
                              draNewPoint=true
							  drawLine(pageX,item)
                          }

                        //画线
						function drawLine(X,Y){
						
                        	if(draNewPoint){
                           		//暂无用处 var arr=BM(pageY,item)
						   

                           		//暂无用处svg.G.push({x:pageX,y:pageY})


                           		svg.newPoint.x=X
                           		svg.newPoint.y=Y
                           		var Point={x:X, y:Y}
                            	console.log(svg.mouseDCarnum);
                            	goDraw(svg.mouseDCarnum,Point)
                        	}
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
    Lv!=0?$('#SL').offset({'left':0}):""
    var svgTv=$('#timSvg').offset().top
    svgTv!=65?$('#timSvg').offset({'top':65}):""

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
	BgCom.BgCar.splice(BgCom.BgCar.indexOf(carNum),1)
	BgCom.newCar.splice(BgCom.newCar.indexOf(carNum),1)

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



