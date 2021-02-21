/**
 * Created by RWS on 2017/3/7.
 */var sm=true
$(function() {

    all_handle()

})
function all_handle() {
    /*   var docElm = document.documentElement;
     //W3C
     if (docElm.requestFullscreen) {
     docElm.requestFullscreen();
     }
     //FireFox
     else if (docElm.mozRequestFullScreen) {
     docElm.mozRequestFullScreen();
     }
     //Chrome等
     else if (docElm.webkitRequestFullScreen) {
     docElm.webkitRequestFullScreen();
     }
     //IE11
     else if (elem.msRequestFullscreen) {
     elem.msRequestFullscreen();
     }
     document.addEventListener("fullscreenchange", function () {

     fullscreenState.innerHTML = (document.fullscreen) ? "" : "not ";
     }, false);



     document.addEventListener("mozfullscreenchange", function () {

     fullscreenState.innerHTML = (document.mozFullScreen) ? "" : "not ";
     }, false);



     document.addEventListener("webkitfullscreenchange", function () {

     fullscreenState.innerHTML = (document.webkitIsFullScreen) ? "" : "not ";
     }, false);

     document.addEventListener("msfullscreenchange", function () {

     fullscreenState.innerHTML = (document.msFullscreenElement) ? "" : "not ";
     }, false);*/
    drop_n()

    drop_ttbz()
    drop_l()
    dat()
    bd_cli()
    pasw()

    bl()
    run_car()
    svg_sty()

    cliSvg_showName()
    fot_sle()
    CrtSle()
    CrtSite()
    hed_xs()
    svgB_chex()
    dd()

    drop_Overviews()
    svg_bg()
    eve()
    svgH()
    //dat_change()
    listen_svgScroll()
    locc()
    rigScro()
    GetExperiment()
};

function drop_Overviews() {
    $('.drop_sel').each(function() {
        $(this).click(function(e) {
            if(tiaoz=='全部正线'){
                e=e||event
                e.stopPropagation();
                var tex=$(this).text()
                $('#sel_head').val(tex)
			
                clarHead(tex)
            }
        })
    })
}

function CrtSle() {
    var op_arr=[]
    if(signal!=null){
        for(var i=0;i<signal.length;i++) {
            op_arr.indexOf(signal[i][14])==-1?op_arr.push(signal[i][14]):""
        }
    }

    //for(var j=0;j<op_arr.length;j++) {
	for(var j=2;j<4;j++) {
        var opti=document.createElement('option');
        opti.innerHTML=op_arr[j]
		
		//alert(opti.innerHTML)
        $('#sel_head').append(opti)
    }
    $('#sel_head').val(null)
}

function CrtSite(){
    var siteArr=[]
    var that
    var sc1=$('<ul class="sec" id="Sc1"></ul>')
    if(platform!=null){
        for(var i=0;i<platform.length;i++) {
            siteArr.indexOf(platform[i][10])==-1?siteArr.push(platform[i][10]):""
        }
        for(var j=0;j<siteArr.length;j++) {
            $('#sit_sle').append( '<li class="sit_li" id="sit'+j+'"><input type="checkbox" class="drop_inp"><span class="drop_chex">'+siteArr[j]+'</span></li>')

            $('.sit_li').each(function(l){
                $(this).click(function(e) {

                    e=e||event
                    e.stopPropagation()
                    var siteChirArr = []
                    for (var k = 0; k < platform.length; k++) {
                        if (platform[k][10] == siteArr[l]) {
                            siteChirArr.indexOf(platform[k][11]) == -1 ? siteChirArr.push(platform[k][11]) : ''
                        }
                    }
                    var s1= $('#S1')
                    s1.children().remove()
                    for( var n=0;n<siteChirArr.length;n++) {
                        s1.append( '<li class="sitChir_li" id="sitChir'+n+'"><input type="checkbox" class="drop_inp"><span class="drop_chex tex ">'+siteChirArr[n]+'</span></li>')
                    }
                    $(this).append(s1)
                    sitchid(siteChirArr)
                })
            })

        }

        function sitchid(siteChirArr){
            $('.sitChir_li').each(function(z){
                $(this).bind('click',function(e) {
                    e=e||event
                    that=$(this)
                    e.stopPropagation()
                    sc1.children().remove()
                    var sitC=[]
                    for(var m=0;m<platform.length;m++){
                        if(platform[m][11]==siteChirArr[z]){
                            sitC.indexOf(platform[m][1])==-1?sitC.push(platform[m][1]):''
                        }
                    }
                    for(var f=0;f<sitC.length;f++){
                        sc1.append('<li class="sitC_li no" id="sitC'+f+'"><input type="checkbox" class="drop_inp"><span class="drop_chex">'+sitC[f]+'</span></li>')
                    }
                    sc1.append('<li class="sitLs"><input type="checkbox" class="drop_inp"><span class="drop_chex">连锁状态</span></li>')
                    $(this).append(sc1)

                    LcClick(that)
                })
            })
        }

    }
}
function LcClick(that) {
    $('.sitLs').click(function(e){
        $('#sit_sle').hide()
        e=e||event
        e.stopPropagation()
        $('#Ls_div').text(that.find('.tex').text())
        $('#lians').modal('show')
        LC(that.find('.tex').text())
        $('#lians').click(function(e) {
            e=e||event
            e.stopPropagation();
            $('#lians_LC').hide()
        })
    })
    LsTrue()
}
function LsTrue() {
    $('#LS_true').click(function(e){
        e=e||event
        e.stopPropagation();
        $('#lians').modal('hide')
    })
}
//底部按钮
function drop_n() {
    var n
    $('.fot_but_div').each(function (i) {
        $(this).click(function (e) {
            e.stopPropagation()
            $('.fot_but_div').not($(this)).removeClass('fot_but_div_down')
            $('.fot_but_div')[i].className.indexOf(('fot_but_div_down') )!=-1?$(this).removeClass('fot_but_div_down'):$(this).addClass('fot_but_div_down')
        })
    })
    $('.btn_but_div').click(function () {
        $('.fot_but_div').removeClass('fot_but_div_down')
    })
}
//头部下拉菜单
function drop_l( ind) {
    if(ind!=null){
        var drop_f=$('.drop_fir').eq(ind)
        $('.drop_fir').not(drop_f).hide()
        drop_f .css('display')=='none'? drop_f.show():drop_f.hide()
    }
    else{
        $('.drop_li').each(function() {
            $(this).click(function (e) {
                e= e || event;
                e.stopPropagation()
                e.preventDefault()
                $('.drop_fir').not($(this).find('.drop_fir')).hide()
                $('.ttb_ul').hide()
                $('.GhandsNa').hide()
                $('#GhandsFisName').hide()
                $(this).find('.drop_fir').toggle()
            })
        })
    }
}
function drop_ttbz(){
    $('#ttb').click(function(e){
        e=e||event;
        e.stopPropagation();
        $('.drop_fir').hide()
        $(this).find('.ttb_ul').toggle()
    })
}
function bd_cli(){

    $('body').click(function (e) {
        e=e||event
        e.stopPropagation()
        $('#men_signal').hide()
        $('#menu_sw').hide()
        $('#menu_track').hide()
        $('#men_stspan').hide()
        $('.drop_fir').hide()
        $('#svg_bg').hide()
        $('#qui_stop').hide()
        $('#ATB').hide()
        $('#route').hide()
        $('#auto_roud').hide()
    })
    $('body').mousedown(function (e) {
        e=e||event
        e.stopPropagation()
        if(e.which==3){
            $('.svg_bg').find('.greRect').remove()
            $('#men_signal').hide()
            $('#menu_sw').hide()
            $('#menu_track').hide()
            $('#men_stspan').hide()
            $('.drop_fir').hide()
            //$('#svg_bg').hide()
            $('#qui_stop').hide()
            $('#ATB').hide()
            $('#route').hide()
            $('#auto_roud').hide()
            /*$('#svg_bg').hide()*/
        }
    })
}
/*背景点击隐藏显示名称*/
function cliSvg_showName() {
    $('.svg_inp').eq(0).css('visibility')!='hidden'==true?$('.cont_G').show():$('.cont_G').hide()
    $('.svg_inp').eq(1).css('visibility')!='hidden'==true?$('.cont_tex').show():$('.cont_tex').hide()
    $('.svg_inp').eq(2).css('visibility')!='hidden'==true?$('.cont_sig').show():$('.cont_sig').hide()
    $('.svg_inp').eq(3).css('visibility')!='hidden'==true?$('.cont_dux').show():$('.cont_dux').hide()
    $('.svg_inp').eq(4).css('visibility')!='hidden'==true?$('.ydq_tex').show():$('.ydq_tex').hide()
    $('.svg_inp').eq(4).css('visibility')!='hidden'==true?$('.bls').show():$('.bls').hide()
}
/*模拟行车*/
function run_car() {
    $('.drop_inp').eq(1).css('visibility')!='hidden'==true?$('#run_car').removeClass('aa'):''
}

/*信号灯弹出密码输入*/
function pasw() {

    $('.num').each(function() {
        $(this).click(function() {
            var val=$('#inp_pas').val()
            $('#inp_pas').val(val+$(this).text())
        })
    })
    $('.del').each(function(i) {
        $(this).click(function() {
            switch (i) {
                case 0:
                    var val=$('#inp_pas').val()
                    var str_val=val.substr(0,val.length-1)
                    $('#inp_pas').val(str_val)
                    break;
                case 1:
                    $('#inp_pas').val(null)
                    break;
            }
        })
    })
}

/*
 *  头部下拉框选择及显示
 */

function hed_xs() {
    $('#sel_head').change(function () {
        var sel_hed_val = $('#sel_head').val()
        $('#head_sec_xs').find('input').val(sel_hed_val)
        clarHead(sel_hed_val)
    })
}
/*
 * 头部下拉选择后，清空当前svg子元素
 * 显示对应选项的图
 */
function clarHead(sel_hed_val){
    $('#main_svg').children().remove()
    qiehuan()
}
/*
 * 头部下拉选择后，对应显示相应svg
 */
/*循环站台位置*/
//比较线的长度  ---返回最长
long=function(a,b) {
    if(a>b){
        return a
    }
    else{
        return b
    }
}
//比较线的长度  ---返回最短
shot=function(a,b) {
    if(a<b){
        return a
    }
    else{
        return b
    }
}
function loop_track(arr) {
    var k=0
    var lh=0
    var sh=10000000
    var s=1000000

    for(var i=0;i<arr.length;i++){
        k=long(k,arr[i][3]*45)
        lh=long(lh,arr[i][4]*45)
        s=shot(s,arr[i][1]*45)
        sh=shot(sh,arr[i][2]*45)
    }
    var h=$('#svg').height()+200
    $('#main_svg').css({'width':k+80,'margin-left':-s+50})
    if($('#sel_head').val()=='南夏墅停车场SCA0'){
        $('#main_svg').css({'height':lh+100,'margin-top':-100})
        var vB=0+" "+0+' '+k+' '+lh
        $('#main_svg').attr({'viewBox':vB})
    }
    else{
        $('#main_svg').css({'height':h+400,'margin-top':-200})
        var vB=0+" "+0+' '+k+' '+h
        $('#main_svg').attr({'viewBox':vB})
    }
}
/*
 * svg
 */
function svg_sty(){
    var wib=$(window).width()
    var heub=$(window).height()
    $('#svg').width(wib)
    $('#svg').height(heub-200)
}
/*
 * 底部下拉框内容注入
 */
var fot_sleN=false
function fot_sle(x,y) {
    if(x!=null){
        /*  if($('.opt').length>0){
         if($('.opt').text().indexOf(x)==-1)
         {
         $('#sel_fot').val(x);
         var opi=$('<option class="opt" id='+y+'>'+x+'</option>');
         $('#sel_fot').prepend(opi)
         var arry= y.split("_")

         $('#info').text(arry[arry.length-1])
         }
         else{
         $('.opt').each(function(i){
         if($('.opt')[i].text==x){
         $('#sel_fot').val(x);
         $(this).get(0).id=null
         $(this).get(0).id=y
         var arry= $(this).context.id.split("_")
         $('#info').text(arry[arry.length-1])
         }
         else{
         return
         }
         })
         }
         }
         else{*/
        var kkll= x.split('_')
        $('#sel_fot').find('span').remove();
        var opi=$('<span class="opt" id='+y+'>'+x+'</span>');
        $('#sel_fot').prepend(opi)
        var arry= y.split("_")
        $('#info').text(arry[arry.length-1])
        //}
        fot_sleN=true
        exc()
    }
}
var timSed
function exc() {
    if(fot_sleN){
        clearTimeout($('#cli_send').tim)
        sedTime()
        function sedTime() {
            clearTimeout(timSed)
            if($('#cli_send').hasClass('bacR')){
                $('#cli_send').removeClass('bacR')
            }
            else{
                $('#cli_send').addClass('bacR')
            }
            timSed=setTimeout(sedTime,500)
        }
    }
    else{
        clearTimeout(timSed)
        $('#cli_send').removeClass('bacR')
    }
}
//底部下拉内容下面的注释部分
function dd() {
    $('#sel_fot').change(function() {
        var fot_val = $('#sel_fot').val()
        if (fot_val != null) {
            $(".opt").each(function (i) {
                if ($(".opt")[i].text == fot_val) {
                    var id_arr = $(this).context.id.split("_")
                    $('#info').text(id_arr[id_arr.length - 1])
                }
            })
        }
    })
}
/*
 * 底部命令栏跟随鼠标右键移动
 */
function ml_bar(){
    var n
    $('#mling').mousedown(function(e) {
        n=true
        e=e||event
        if(e.which==3){
            var scr_wid= e.pageX
            var scr_hei= e.pageY
            $('#mling').mousemove(function (e) {
                e=e||event
                var mov_wid=e.pageX
                var mov_hei=e.pageY
                if(n){
                    $('#mling').css({left:mov_wid-scr_wid,bottom:scr_hei-mov_hei})
                }
            });
        }
    })
    $('#mling').mouseup(function(e) {
        n=false
    })
}
/*
 * svg点击背景弹出
 */
function svg_bg() {
    $('svg').each(function(){
        $(this).mousedown(function(e) {
            e = e || event;
            e.stopPropagation()
            if(e.which==3){
                $('#men_stspan').hide()//修改于2017.5.23，用于在点击股道右键时屏蔽站台的右键
                $('#men_signal').hide()//信号机右键屏蔽
                $('#menu_sw').hide()//道岔右键屏蔽
                $('#menu_track').hide()//股道右键屏蔽
                e.stopPropagation()
                var val=$('#sel_head').val()
                var svg_b_x = e.pageX;
                var svg_b_y= e.pageY;
                $('#svg_bg').find('p').text(val)
                open_mode('svg_bg',svg_b_x,svg_b_y)
            }
        })
    })
}
//循环创造二级站台菜单
function loop_bgSec(arr,bgs) {
    var arr_dan=[]
    for(var i=0;i<arr.length;i++) {
        i==0?arr_dan.push(arr[0]):arr[i-1].indexOf(arr[i][1])==-1?arr_dan.push(arr[i]):""
    }
    for(var j=0;j<arr_dan.length;j++) {
        bgs.append('<li class="bgSec_cla">'+arr_dan[j][1]+'</li>')
    }
    cli_SecPla()
}
function cli_SecPla() {
    $('.bgSec_cla').each(function(i) {
        $(this).click(function () {
            var tex=$(this).text()

            //找到站台对应字
            $(".plof").each(function(j) {
                if($(".plof")[j].innerHTML==tex){
                    var lef=$(this).offset().left
                    var scr_lef=$('#svg').scrollLeft()
                    $('#svg').scrollLeft(scr_lef+lef-300)
                }
            })
        })
    })
}
//监听svg滚动条
function listen_svgScroll() {
    $('#svg').scroll(function() {
        $('#men_signal').hide()
        $('#menu_sw').hide()
        $('#menu_track').hide()
        $('#men_stspan').hide()
        $('.drop_fir').hide()
        $('#svg_bg').hide()
        $('#qui_stop').hide()
        $('#ATB').hide()
        $('#route').hide()
        $('#auto_roud').hide()
    })
}
/*
 *  底部时钟
 */
function dat() {
    var date = new Date();
    var hour=date.getHours(),
        minute=date.getMinutes(),
        sec=date.getSeconds();
    if(minute<10){
        minute='0'+minute
    }
    if(sec<10) {
        sec='0'+sec
    }
    $('#tim_fot').html(hour+':'+minute+':'+sec)
    setTimeout(dat,500)
}

//svg背景复选框变化
function svgB_chex() {
    $('.svgB_li').each(function(i) {
        $(this).click(function() {
            bl()
        })
    })

}
//弹出events事件框
function eve() {
    $('.mode_li').each(function(i) {
        $(this).click(function(e) {
            e=e||event;
            e.stopPropagation()
            $('#eveUl').hide()
            $('#event').modal('show')
            Setflag()
            $('#station').val($(this).text())
            /*   $('#d4311').bind('input',function() {
             consoel.log($(this).val())
             });
             $('#d4312').bind('input',function() {
             consoel.log($(this).val())
             });*/
            return false
        })
    })

    //监听ID Object


    /*   function eve_tab(strDate,n){
     $('#event_tab').find('tbody').children().remove()
     for(var j=0;j<ArrAlarmEvent.length-1;j++){
     switch (j%4){
     case 0:
     break;
     case 1:
     //判断日期范围选择
     var nowData=new Date( ArrAlarmEvent[i])
     if(n==1){
     if($('#d4312').val()!=null){
     console.log($('#d4312').val())
     var endVal=$('#d4312').val()
     var endDat=new Date(endVal)
     if((!nowData<strDate)&&(!nowData>endDat)){
     var Ti=ArrAlarmEvent[i]
     }
     }
     else{
     if(!nowData<strDate){
     var Ti=ArrAlarmEvent[i]
     }
     }
     }
     else{
     if($('#d4311').val()!=null){
     var strVal=$('#d4311').val()
     var strDat=new Date(strVal)
     if((!nowData<strDat)&&(!nowData>strDate)){
     var Ti=ArrAlarmEvent[i]
     }
     }
     else{
     if(!nowData>strDate){
     var Ti=ArrAlarmEvent[i]
     }
     }
     }
     break;
     case 2:
     var eve=ArrAlarmEvent[i]
     break;
     case 3:
     var obj=ArrAlarmEvent[i]
     break;
     }

     $('#event_tabBody').appendChild('<tr><td>'+Ti+'</td><td></td><td></td><td>'+obj+'</td><td>'+eve+'</td></tr>>')
     }

     }*/
}
//点击隐藏日历
function cli_eve() {
    $('#eve_mod').click(function(e) {
        e=e||event;
        e.stopPropagation()
        $('.dt').hide()
    })
}

/*动态确定svg的div高度*/
function svgH(){
    var h= $(window).height()
    var w= $(window).width()

    $('#svg').height(h-130-50)
    $('#svg').width(w)
}
$(window).resize(function() {
        $('#main_svg').children().remove()
        svgH()
        qiehuan()
    }
)

//点击底部按钮清除
function clear_fotSel(){
    $('#sel_fot').val(null).children().remove()
    $('#info').text(null)
}
function jup_zheng(){
    $('#sel_head').val('全部正线')
    $('#head_sec_xs').find('input').val('全部正线')
    clarHead()
}

//点击运行表加载
$('#goTab').click(function(e){
    e=e||event
    e.stopPropagation();
    openYxtTable()
    $('#goTable').modal('show')
    //window.open('show_tab.html')
})

//运行表点击显示背景颜色


function linHover() {
    $('.lin').each(function(i) {
        $(this).mouseover(function(e) {
            e=e||event
            $(this).next().get(0).attributes[4].value=2
            $(this).next().get(0).attributes[6].value='red'
            $(this).prev().get(0).attributes[4].value=2
            $(this).prev().get(0).attributes[6].value='red'
            // $(this).prev().get(0).attributes.stroke-dasharray.value=2
            return false
        })
        $(this).mouseout(function(e){
            e=e||event
            $(this).next().get(0).attributes[4].value=0
            $(this).next().get(0).attributes[6].value=null
            $(this).prev().get(0).attributes[4].value=0
            $(this).prev().get(0).attributes[6].value=null
            return false
            /*document.getElementsByClassName('lin')[i+1].setAttribute('stroke-dasharray',2)
             document.getElementsByClassName('lin')[i-1].setAttribute('stroke-dasharray',2)*/
        })
    })
}

function quicHover() {
    $('.quic').each(function(i) {
        $(this).mouseover(function(e) {
            e=e||event
            $(this).get(0).attributes[5].value=2
            $(this).get(0).attributes[2].value='red'

            // $(this).prev().get(0).attributes.stroke-dasharray.value=2
            return false
        })
        $(this).mouseout(function(e){
            e=e||event
            $(this).get(0).attributes[5].value=0
            $(this).get(0).attributes[2].value='#c6c3c6'
            return false
            /*document.getElementsByClassName('lin')[i+1].setAttribute('stroke-dasharray',2)
             document.getElementsByClassName('lin')[i-1].setAttribute('stroke-dasharray',2)*/
        })
    })
}
function contHover() {
    $('.cont_tex').each(function(i) {
        $(this).mouseover(function(e) {
            e=e||event
            console.log($(this).next())
            //$(this).next().get(0).attributes[4].value=0
            $(this).next().get(0).attributes[5].value='red'
            return false
        })
        $(this).mouseout(function(e){
            e=e||event
            // $(this).next().get(0).attributes[4].value=0
            $(this).next().get(0).attributes[5].value=null
            return false
            /*document.getElementsByClassName('lin')[i+1].setAttribute('stroke-dasharray',2)
             document.getElementsByClassName('lin')[i-1].setAttribute('stroke-dasharray',2)*/
        })
    })
}


//实验提交
var submitT,SubRecord=true
/*var lef=$('#svgName').offset().left*/
//监听svg滚动条
$('#svg').scroll(function() {
    var l=$('#svg').width
    var w=$('#svgName').width
    $('#svgName').offset({'left':l/2})
    $('#svgName').css({'transform':'translate('+w/2+')'})
})

function cloEl(id) {
    $('#'+id).hide()
}
//点击实验项目
$('#testItem').click(function(e) {
    window.location.href='btn.html'
});
//
$('.btnALL_diaodu').each(function() {
    $(this).click(function () {
        var src='./image/call.png'
        var srcF='./image/guaji.png'
        if($(this).find('img').attr('src')==src){
            $(this).find('img').attr({'src':srcF})
        }
        else{
            $(this).find('img').attr({'src':src})
        }
        return false
    })
})


$('.btnALL_wuxian').each(function() {
    $(this).click(function () {
        var src='./image/wuxOpen.png'
        var srcF='./image/wuxClo.png'
        if($(this).find('img').attr('src')==src){
            $(this).find('img').attr({'src':srcF})
        }
        else{
            $(this).find('img').attr({'src':src})
        }
        return false
    })
})

$('.allBtn').each(function() {
    $(this).click(function() {
        $('.allBtn').css({'zIndex':96})
        $(this).css({'zIndex':97})
    });
})
//点击调度电话
$('#diaodu').click(function() {
    //var src='call.png'
    $('.allBtn').css({'zIndex':96}).hide()
    $('#diaoduC').css({'zIndex':97}).show()
    THtext=null
})
//点击调度中心
$('#diaoDuCent').click(function() {
    var srcF='./image/call.png'
    if($(this).find('img').attr('src')==srcF) {
        $('.allBtn').css({'zIndex':96})
        //var all=['道岔故障','信号机故障','计轴故障','列车故障']
        //pushTH($('#tongHd'),all)
        $('#tongh').css({'zIndex':97}).show()
    }
    else{
        // $(this).find('img').attr({'src':srcF})
    }
})

//点击电务
$('#dianWu').click(function() {
    var srcF='./image/call.png'
    if($(this).find('img').attr('src')==srcF) {
        $('.allBtn').css({'zIndex':96})
        //var all=['道岔故障','信号机故障','计轴故障','列车故障']
        //pushTH($('#tongHd'),all)
        $('#tonghDwu').css({'zIndex':97}).show()
    }
    else{
        // $(this).find('img').attr({'src':srcF})
    }
})

//点击司机
$('#cartor').click(function() {
    var srcF='./image/wuxOpen.png'
    if($(this).find('img').attr('src')==srcF) {
        $('.allBtn').css({'zIndex':96})
        //var all=['道岔故障','信号机故障','计轴故障','列车故障']
        //pushTH($('#tongHd'),all)
        $('#cartorDo').css({'zIndex':97}).show()
    }
    else{
        // $(this).find('img').attr({'src':srcF})
    }
})
//添加显示对话
function pushTH(el,all) {
    all.forEach((function(item) {
        var p='<p>'+item+'</p>'
        el.append(p)
    }))
}
//点击通话内容
var strAll=[]
$('#tonghT').click(function() {
    //关闭通话
    $('#tongh').hide()
    //记录调度通话完成
    var srcF='./image/guaji.png'
    $('#diaoDuCent').find('img').attr({'src':srcF})
    var str='与调度中心通话完成'
    call(str)
})

//
$('#tonghDWT').click(function() {
    //关闭通话
    $('#tonghDwu').hide()
    //记录调度通话完成
    var srcF='./image/guaji.png'
    $('#dianWu').find('img').attr({'src':srcF})
    var str='与电务通话完成'
    call(str)
})

$('#cartorT').click(function() {
    //关闭通话
    $('#cartorDo').hide()
    var srcF='./image/wuxClo.png'
    $('#cartor').find('img').attr({'src':srcF})
    //记录调度通话完成
    //var srcF='guaji.png'
    //$('#diaoDuCent').find('img').attr({'src':srcF})

    var str='与司机通话完成'
    call(str)
})
function call(str) {
    //需储存字样
    if(submitT){
        if(THtext!=null){
            var str=str/*+'。内容为：'+THtext*/
            str.split()
            strAll.push(str)
            //
            var strA=strAll.join()
            console.log(strAll)
            loclSed(strA)
        }
    }
}

//点击无线电台
$('#wuxian').click(function() {
    $('.allBtn').css({'zIndex':96}).hide()
    $('#wuX').css({'zIndex':97}).show()
    THtext=null
});
//点击提交实验

//点击查看过程记录
var disp,ind=null
$('#record').click(function() {
    ind=localStorage.getItem('test')
    if(ind!=null){
        ReadExmAnswer(ind)
    }
    else{
        var H=$(document).height()
        var h=H-60-116
        console.log($('#shiy').offset())
        $('#shiy').css({'height':h,'zIndex':96,'left':-240}).show()
        console.log($('#shiy').offset())
        $('#shiyImgl').attr({'src':'./image/Jl.png'})
        disp=true
    }

})

//储存序号
var TestNum

function testName(arr) {

       $('#testNameH').text(arr[0][2])
        TestNum=arr[0][0]
    $('#NametabSY').children().remove()
       arr[0][1].forEach(function(itm,index){

           var trtd='<tr><td>'+itm+'</td></tr>'
           $('#NametabSY').append(trtd)
       })
    var H=$(document).height()
    var h=H-60-116
    $('#shiy').css({'height':h,'zIndex':96,'left':0}).show()
    $('#shiyImgl').attr({'src':'./image/Jl.png'})
    disp=true
}
$("#shiyImg").click(function (e) {
    e=e||event
    e.stopPropagation()
    var src
    disp=!disp
    src=disp?'./image/Jl.png':'./image/Jr.png'
    var Simg=$('#shiyImgl')
    Simg.attr({'src':src})
    if(disp){
        if(ind!=null){
            $('#shiy').css({'left':0})
        }
       else{
            $('#shiy').css({'left':-240})
        }
    }
    else{
            $('#shiy').css({'left':-450})
    }
})


//跳转显示名称
function locc() {
    var text=localStorage.getItem('tex')
    if(text!=null&&text!=undefined){
        var tex=text.split("_")
        $('#svgH').text(tex[0])
        Reset=true
        submitT=true
        localStorage.removeItem('tex')
    }
}
function  loc(){
    //send_type='reset'
   // SetSendtype();
    sed(["switchaccident", "1238", "1", "null", "SW0116道岔"])
    sed(["ac", "105", "1", "", "", "1", "1", "1", "1", "1", "3", "G01060轨道"])
    sed(["t", "292", "304", "X01161信号机"])

    sed(["ac", "99", "1", "", "", "2", "2", "2", "2", "1", "3", "G01046轨道"])
    setTimeout(function () {
        sed(["t", "280", "286", "X0128信号机"])
    },1000)
    var k=setTimeout(function () {
        sed(["c", "98", "X01141信号机"])
        sed(["c", "94", "X0124信号机"])
    },2000)
    $('#shiyJS').text('实验计时')
    JSHTime()
}
var M=0,S=0
var JStim
function JSHTime(){
    clearTimeout(JStim)
    if(M-0<10){
        M='0'+(M-0)
    }
    if(S-0<10){
        S='0'+(S-0)
    }
    var str=M+":"+S
    $('#JSTime').text(str)
    if(S<60){
        S++
    }
    else{
        S=S%60;
        M++
    }
    JStim=setTimeout(JSHTime,1000)
}

//设置储存通话内容的全局变量
var THtext=null

//通话选择内容

    $('.THP').click(function() {
        $('.THP').removeClass('tonghP')
        $(this).addClass('tonghP')
        THtext=$(this).text()
    })


//提交实验
$('#subm').click(function() {
    if(submitT){
        $('.allBtn').css({'zIndex':96})
        $('#submT').css({'zIndex':97}).show()
        var str='实验提交成功'
        clearTimeout(JStim)
        call(str)
        var strt=localStorage.getItem('str')
        var arr=[]
        if(strt!=null){
            arr=strt.split(',')
            arr.join("-")
        }
        GetScore(TestNum,arr)
        submitT=false
        SubRecord=false
    }

})
//本地储存
function loclSed(str) {
    localStorage.removeItem('str')
    localStorage.setItem('str',str)
    var strt=localStorage.getItem('str')
    if(strt!=null&&strt!=undefined){
        var arr=strt.split(',')
        $('#shiyan').find('tr').remove()
        arr.forEach(function(item,index){
            var ind=index+1
            var p='<tr><td>'+ind+'.'+item+'</td></tr>'
            $('#tabSY').append(p)
        })
        $('#shiyan').scrollTop($('#tabSY').height())
    }
}
//添加对话
function AddP(idInp,idDiv){
    var val=$('#'+idInp).find('input').val()
    if(val!=null&&val!=undefined){
        var p='<p>'+val+'</p>'
        $('#'+idDiv).append(p)
    }
    //$('.callDiv').scrollTop($('#shiyan').scrollTop())
}
//跳转scroll靠右侧
function rigScro() {
    $('#svgName').offset({'left':$('#svg').width()})
    $('#svg').scrollLeft($('#svg').width())
}
//jjingyin
$('#smool').click(function() {
    if($(this).hasClass('kai')){
        $(this).removeClass('kai')
        $(this).addClass('guan')
        var audio=document.getElementById('audioP')
        audio.pause()
        audio.currentTime = 0;
        sm=false
    }
    else{
        $(this).removeClass('guan')
        $(this).addClass('kai')
        sm=true
    }
})



//新手
function Ghands(arr) {
        objarr=[]
    var Fir=$('#GhandsFisName')
    arr.forEach(function (value,index) {
        if(index%2==0){
            if(objarr.indexOf(value)==-1){
                objarr.push(value)
                var tr='<li class="dropdown GhandsTy"><a href="#" class="dropdown-toggle" data-toggle="dropdown">'+value+'</a><ul class="dropdown-menu GhandsNa" role="menu" id="Ty'+objarr.indexOf(value)+'"></ul></li>'
                Fir.append(tr)
            }
        }
        else{
            var ul=$('#Ty'+objarr.indexOf(arr[index-1]))
            var trt='<li class="GhandsName"><a href="#">'+value+'</a></li>'
            ul.append(trt)
        }
    })
    $('.GhandsTy').click(function() {
        $('.GhandsNa').hide()
        $(this).children('ul').show()
    });
    $('.GhandsName').click(function() {
        var text=$(this).text();
        localStorage.setItem('Ghand',text)
        $('.GhandsNa,.drop_fir').hide()
        $('#GhandsFisName').hide()
        window.open('Ghands.asp')
    })
}


//Ghands
$('#Ghand').click(function(e) {
    e=e||event
    e.stopPropagation()
    $('#GhandsFisName').show()
})

$('#shouc').click(function(){
    window.open('shouc.html')
})


//读取关闭前清空本地储存
window.onbeforeunload=function (ev) {
    localStorage.clear()
}