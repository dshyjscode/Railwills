/**
 * Created by asd on 2017/4/24.
 */
/**
 * Created by asd on 2017/4/6.
 */
/**
 * Created by asd on 2017/4/7.
 */
/**
 * Created by asd on 2017/3/9.
 */

//offLINEf
var comm
function onOff(n){
    var onOff=$("#onOff")
    n==1?comm="·¢ËÍ³É¹¦":"ÏµÍ³Á¬½ÓÊ§°Ü"
    n==1?onOff.text("Á¬½Ó"):onOff.text("¶Ï¿ª")
}
//ï¿½ï¿½È¡Í·ï¿½ï¿½Ñ¡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½

//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
var alaAll=[],alaAllTex=[]     //di,ï¿½ï¿½ï¿½ï¿½
//ï¿½ï¿½ï¿½ï¿½ï¿½É?
var g_cor='#848284'
//ï¿½ï¿½ï¿½á±£ï¿½ï¿½
var g_pro='#33ff33'
var gSideCol=null
//ï¿½ß¿ï¿½
var g_wid=6
var gSide_wid=2
var gSide_h=3
//ï¿½Å´ï¿½ï¿½ï¿½
var svg_big=45
//ï¿½ï¿½ï¿½Ý¿ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
function sunx(a,b) {
    return a[0] - b[0]
}
/*ï¿½ï¿½ï¿½Ã·ï¿½ï¿½Øºï¿½ï¿½ï¿½*/
/*ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ý±ï¿½Ê¾*/
/*
 * ï¿½ß¡ï¿½ï¿½ï¿½lin
 * ï¿½Æ¡ï¿½ï¿½ï¿½sig
 * ï¿½ï¿½ï¿½ï¿½swi
 * Ì¨ï¿½ï¿½ï¿½ï¿½sta
 */


if(switchdata!=null){
    var switchdata=switchdata.sort(sunx)
    var axle_counter=axle_counter.sort(sunx)
    var signal=signal.sort(sunx)
    var axle_logic_section=axle_logic_section.sort(sunx)
    var axle_section=axle_section.sort(sunx)
    var balise=balise.sort(sunx)
    var static_text=static_text.sort(sunx)
    var track_segment=track_segment.sort(sunx)
    var platform=platform.sort(sunx)
    var routing=routing.sort(sunx)
    var stationname=stationname.sort(sunx)
}

//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é´¢ï¿½æµ±Ç°Ò³ï¿½ï¿½Ä¸ï¿½ï¿½ï¿½ï¿½ï¿?
var switchdata_new=[]
var axle_counter_new=[]
var signal_new=[]
var axle_logic_section_new=[]
var axle_section_new=[]
var balise_new=[]
var static_text_new=[]
var track_segment_new=[]
var platform_new=[]
var routing_new=[]
var stationname_new=[]
var tiaoz
var url=window.location.href,
    dat_back=url.split('?data=')
/*dataALL_back=dat_back[1].split("&")*/
switch (dat_back[1]){
    case 'SCA0':
        tiaoz='È«²¿ÕýÏß'
        break;
    case 'SCA2':
        tiaoz='±±¾©±±Õ¾SCA2'
        break;
    case 'SCA3':
        tiaoz='ÉÏº£ºçÇÅÕ¾SCA3'
        break;
   /* case 'SCA4':
        tiaoz='¾ÛºþÂ·CA4'
        break;
    case 'SCA5':
        tiaoz='²èÉ½SCA5'
        break;
    case 'SCA6':
        tiaoz='ÎÄ»¯¹¬CA6'
        break;
    case 'SCA7':
        tiaoz='ÊÐÃñ¹ã³¡SCA7'
        break;
    case 'SCA8':
        tiaoz='ºÓº£´óÑ§SCA8'
        break;
    case 'SCA9':
        tiaoz='Áú»¢ÌÁCA9'
        break;
    case 'SCA10':
        tiaoz='ÂÃÓÎÑ§Ð£SCA10'
        break;
    case 'SCA11':
        tiaoz='É­ÁÖ¹«Ô°SCA11'
        break;*/
    case 'SCA12':
        tiaoz='ÉÏº£ºçÇÅÕ¾SCA3'
        break;
   /* case 'SCA1':
        tiaoz='ÄÏÏÄÊûSCA1'
        break;*/
    default:
	    tiaoz='ÉÏº£ºçÇÅÕ¾SCA3'
        break;
        //window.location.href='loginNex.html'
}
//¹Ø±Õ´°¿Ú
/* window.onbeforeunload=function() {
 var str=1+","+dataALL_back[1]+","+dataALL_back[2]
 login_rw(str)
 };*/

$(function () {
    $('#load_img').hide()
    sessionStorage.clear()

   /* $('#sel_head').find('option').attr({'disabled':'disabled'})
    tiaoz=='È«²¿ÕýÏß'? $('#sel_head').find('option').removeAttr('disabled'):(
        $('#sel_head').find('option').each(function() {
            $(this).text()==tiaoz?$(this).removeAttr('disabled'):""
        })
    )*/
    //alert("11")
    $('#sel_head').val(tiaoz)
    $('#head_sec_xs').find('input').val(tiaoz)
    $('#sel_fot').children().remove()
    $('#sleHead_btn').click(function(){
        tiaoz=='È«²¿ÕýÏß'?jup_zheng():alert('ÔÝÎÞÆäËû²Ù×÷È¨ÏÞ')
    })
    line_all()
    plat()
    statName()
    jiZh()
    signal_all()
    balise_all()

    duxian()
    tex_cont()
    loop_track(track_thisPage)
    init()

})
//ï¿½ï¿½È¡dataï¿½ï¿½ï¿½ï¿½ci
function data_C(data_CI){
    if(data_CI[0]!=null){
        var k_ci=new Array(data_CI.length)
        var k_dat_ci=new Array(data_CI.length)
        if(sessionStorage.getItem('a')!=null){
            k_dat_ci=JSON.parse(sessionStorage.getItem('a'))
        }
        else{
            for(var j=0;j<k_dat_ci.length;j++){
                k_dat_ci[j]=0
            }
        }
        sessionStorage.clear()
        for(var i=0;i<data_CI.length;i++){
            if(k_dat_ci[i]!=data_CI[i] ){

                if(eq_jz.indexOf(i)!=-1){
                    k_ci[i]=1
                }
                else{
                    k_ci[i]=data_CI[i]
                }
            }
            else{
                k_ci[i]=0
            }
        }
        hua(k_ci,data_CI)
        var da=JSON.stringify(data_CI)
        sessionStorage.setItem('a',da)
    }
}
function qiehuan(){
    sessionStorage.clear()
    signal_new=[]
    var bgS=$('#bgSec')
    bgS.children('li').remove()
    line_all()
    plat()
    statName()
    jiZh()
    signal_all()
    balise_all()
    duxian()
    tex_cont()
    loop_track(track_thisPage)
    speed()
    Carflag()
}

var eq_jz=[]
for(var i=0;i<equittype.length;i++){
    if(equittype[i]=='¼ÆÖá'||command[i]=='Ëø±Õ'||command[i]=='È·ÈÏ½âËø'||command[i]=='·âËø'||command[i]=='È·ÈÏ½â·â'||command[i]=='µÀ²íÊ§±í'||command[i]=='·ÖÂ·²»Á¼'||command[i]=='ºì¹â´ø¹ÊÕÏ'||command[i]=='°×¹â´ø¹ÊÕÏ'||command[i]=='¼ÆÖáÇÐ³ý'||command[i]=='½ô¼±Í£³µ'||command[i]=='È·ÈÏ½ô¼±Í£³µ'||equittype[i]=='ÐÅºÅ»ú'||equittype[i]=='Âß¼­Çø¶Î'||command[i]=="µÀ²íÊ§±í"||command[i]=="½øÂ·Õ¼ÓÃ"||command[i]=="Õ¼ÓÃ"||command[i]=="ÃðµÆ"||command[i]=='Õ¾Ì¨'||command[i]=='¿Û³µ'||command[i]=='ÌøÍ£'||command[i]=='ATB'
        ||command[i]=='ÆÁ±ÎÃÅ'   ||command[i]=='µ¥ÃÅ¿ªÃÅ¹ÊÕÏ'   ||command[i]=='µ¥ÃÅ¹ØÃÅ¹ÊÕÏ'   ||command[i]=='¶àÃÅ¿ªÃÅ¹ÊÕÏ'||command[i]=='¶àÃÅ¹ØÃÅ¹ÊÕÏ'||command[i]=='ÁÐ³µÍ£ÎÈ'
    ){
        eq_jz.push(i)
    }
}
var logicArr=[]
for(var j=0;j<axle_logic_section.length-1;j++) {
    logicArr.push(axle_logic_section[j][1])
}
/*
 * svg????
 */
var main = document.getElementById("main_svg");
var all_arr = []
var arr_6 = []
var arr_5 = []
var arr_1= [];
/*
 *
 */
/*
 * ï¿½ï¿½Ô²
 */
function sign(cx,cy,fi_color,str_color,n,id,cla) {
    var circl = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circl.setAttribute('cx', parseFloat(cx));
    circl.setAttribute('cy', parseFloat(cy));
    circl.setAttribute('r', n);
    circl.setAttribute('fill',fi_color)
    circl.setAttribute('stroke',str_color)
    circl.setAttribute('stroke-width',2)
    circl.setAttribute('class',cla)
    circl.setAttribute('id',id)
    main.appendChild(circl)
}
/*
 * ï¿½ï¿½ï¿½ï¿½
 * no:ï¿½ï¿½Å£ï¿½nï¿½ï¿½ï¿½ßµï¿½×´Ì¬ï¿½ï¿½widï¿½ï¿½ï¿½ß¿ï¿½,cla:class
 */
function line(x1,y1,x2,y2,str_dash,fi_color,str_color,wid,cla,id,n) {
    var line = document.createElementNS('http://www.w3.org/2000/svg', "line");
    line.setAttribute('x1',parseFloat(x1))
    line.setAttribute('y1',parseFloat(y1))
    line.setAttribute('x2',parseFloat(x2))
    line.setAttribute('y2',parseFloat(y2))
    line.setAttribute('stroke-dasharray',str_dash)
    line.setAttribute('fill',fi_color)
    line.setAttribute('stroke',str_color)
    line.setAttribute('class',cla)
    line.setAttribute('id',id)
    line.setAttribute('stroke-width',wid)
    main.appendChild(line)
}
/*
 * ï¿½Ä±ï¿½ï¿½ï¿½ï¿½ï¿½
 */
function cont(x1,y1,tex,fl_cor,str_cor,cla,fz,id) {
    var text = document.createElementNS('http://www.w3.org/2000/svg', "text");
    text.appendChild(document.createTextNode(" "));//ï¿½Ä±ï¿½ï¿½ï¿½ï¿½ï¿½
    text.firstChild.nodeValue=tex;
    text.setAttribute('x',parseFloat(x1))
    text.setAttribute('y',parseFloat(y1))
    text.setAttribute("font-size",fz);
    text.setAttribute('class',cla)

    text.setAttribute('fill',fl_cor)
    text.setAttribute('stroke',str_cor)
    text.setAttribute('id',id)
    main.appendChild(text);
}
/*
 * ï¿½ï¿½ï¿½ï¿½
 */
function rect(x,y,wid,hei,fil_color,str_color,str_wid,cla,id) {
    var rec = document.createElementNS('http://www.w3.org/2000/svg', "rect");
    rec.setAttribute('x',x)
    rec.setAttribute('y',y)
    rec.setAttribute('width',wid)
    rec.setAttribute('height',hei)
    rec.setAttribute('fill',fil_color)
    rec.setAttribute('stroke',str_color)
    rec.setAttribute('class',cla)
    rec.setAttribute('stroke-width',str_wid)
    rec.setAttribute('id',id)
    main.appendChild(rec)
}
/*
 * ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
 */
function polygon(poi,fil_color,str_color,str_wid,cla,n) {
    var n=n||0
    var plg = document.createElementNS('http://www.w3.org/2000/svg', "polygon");
    plg.setAttribute('points',poi)
    plg.setAttribute('fill',fil_color)
    plg.setAttribute('stroke',str_color)
    plg.setAttribute('class',cla)
    plg.setAttribute('stroke-width',str_wid)
    plg.setAttribute('stroke-dasharray',n)
    main.appendChild(plg)
}
function change_daocha(con_lin,di,key_val,cor,corl) {
    var noe_l=document.getElementsByClassName(di)[0]
    var noe_lin_id=noe_l.id
    var noe_lin_class_b=document.getElementsByClassName(noe_lin_id)

    var noe_lin_class=document.getElementsByClassName(di+noe_lin_id+'a')[0]
    if(data_CI[key_val]==0){
        for(var i=0;i<noe_lin_class_b.length;i++){
            chag_cor(noe_lin_class_b[i], '#848284', '#848284')
        }
        jizhoushixiao(noe_lin_class, '#848284', '#848284')
        chag_cor(con_lin, 'green', 'green')
    }
    else{
        for(var i=0;i<noe_lin_class_b.length;i++){
            chag_cor(noe_lin_class_b[i], '#848284', '#848284')
        }
        jizhoushixiao(noe_lin_class, cor, cor)
        chag_cor(con_lin, cor, cor)
    }
}
function change_zh_daocha(con_lin,di,key_val,cor,corl) {
    if(data_CI[key_val]==0){
        chag_cor(con_lin, 'green', 'green')
        chag_cor(con_lin, 'green', 'green')
    }
    else{
        var noe_l_all=document.getElementsByClassName(di)
        for(var i=0;i<noe_l_all.length;i++){
            chag_cor(noe_l_all[i],'#848284', '#848284')
        }
    }
}
function chag_cor(ele,str_cor,fil_cor){
    if(ele!=null){
        if('setAttribute' in ele) {
            ele.setAttribute('stroke', str_cor)
            ele.setAttribute('fill', fil_cor)
        }
    }
}
function xuxian(ele,n) {
    ele.setAttribute('stroke-dasharray',n)
}
function qingchushibiao(ele,cor) {
    clearInterval(ele.tim);
    clearInterval(ele.tin);
    chag_cor(ele,cor,cor)
}
function jizhouqiechu(ele) {
    var str_col= ele.attributes.stroke.value
    var fil_col= ele.attributes.fill.value
    clearInterval(ele.tin);
    clearInterval(ele.tim);
    blu(ele,fil_col,str_col)
}
function jizhoushixiao(ele,fil_cor,str_cor) {
    if(ele!=null){
        if(ele.tur==true){
            clearInterval(ele.tin);
            clearInterval(ele.tim);
            ele.tur=false
            blu(ele,fil_cor,str_cor)
        }
        else{
            chag_cor(ele,str_cor,fil_cor)
        }
    }
}
function guzhangqiechu(ele,fil_cor,str_cor) {
    clearInterval(ele.tin);
    clearInterval(ele.tim);
    chag_cor(ele,str_cor,fil_cor)
}
function daochadingcao(con_lin,con_lin_all,fan,fan_v,shi_bl,shib,shi_br,valu) {
    if (con_lin.conx!=null) {
        con_lin.setAttribute('x1', con_lin.conx)
        con_lin.setAttribute('y1', con_lin.cony)
        fan.setAttribute('stroke', 'none')
        fan.setAttribute('fill', 'none')
        con_lin.conx=null
        con_lin.cony=null
    }
    con_lin.bl_cor = 'none'
    con_lin.b_cor = 'none'
    con_lin.br_cor = 'none'
}
function jinluzhanyong(con_lin,con_lin_all,fan,fan_v,shi_bl,shib,shi_br,valu,k) {
    chag_cor(con_lin,'white','white')
}
function daochafancao(con_lin,con_lin_all,fan,fan_v,shi_bl,shib,shi_br,valu,k) {
    if(con_lin.conx==null){
        con_lin.conx=con_lin.attributes.x1.value
        con_lin.cony=con_lin.attributes.y1.value
    }
    for(var i=0;i<track_segment.length;i++){
        if(track_segment[i][0]==arr_6[k]){
            con_lin .setAttribute('x1',track_segment[i][1]*45)
            con_lin .setAttribute('y1',track_segment[i][2]*45)
        }
    }
    fan.setAttribute('stroke','black')
    fan.setAttribute('fill','black')

    con_lin.bl_cor='none'
    con_lin.b_cor='none'
    con_lin.br_cor='black'
}
function tiaoting(ele,fil_cor,str_cor) {
    if(ele.tur){
        clearInterval(ele.tin);
        clearInterval(ele.tim);
        ele.tur=false
        blu(ele,fil_cor,str_cor)
    }
    else{
        blu(ele,fil_cor,str_cor)
    }
}
function sigGZ(ele,str_cor ){
    if(ele.sigGZ){
        clearInterval(ele.sigT);
        ele.setAttribute('stroke', 'white');
        ele.sigGZ=false;
    }
    else{
        clearInterval(ele.sigT);
        ele.setAttribute('stroke', str_cor);
        ele.sigT= setInterval(function () {
            if(ele.attributes.stroke.value=="black"){
                ele.setAttribute('stroke', str_cor);
            }
            else{
                ele.setAttribute('stroke', 'black');
            }
            ele.sigGZ=true;
            //bla(lin,fil_color,str_color,lin.tim)
        },1000)
    }
}
get_k=function (noe,clas){
    var k
    var sw_arr=document.getElementsByClassName(clas)
    for(var i=0;i<sw_arr.length;i++){
        if (sw_arr[i]==noe){
            k=i
        }
    }
    return k
}

var push_zy=[];  //×°ï¿½ï¿½Â·Õ¼ï¿½Ã²ï¿½ï¿½Ö?
var push_k=[];//ï¿½æ´¢ï¿½ï¿½Â·Õ¼ï¿½ï¿½contkÖµ
var jl_arr=[]//ï¿½Ý´ï¿½ï¿½Â·Õ¼ï¿½ï¿?
var jlcont_arr=[]//ï¿½Ý´ï¿½ï¿½Â·Õ¼ï¿½ï¿?
function hua( data,data_CI) {
    var key_arr=[];
    var psh_zy=[];  //×°Õ¼ï¿½Ã²ï¿½ï¿½Ö?

    var psh_k=[];//ï¿½æ´¢Õ¼ï¿½ï¿½contkÖµ
    var pu_kz;//contkÖµÄ³Ò»ï¿½ï¿½
    var lei={l:'red',d:'green'}                  //ï¿½ï¿½Ì¨ï¿½ï¿½ï¿½ï¿½Öµï¿½ï¿½ï¿½Í´ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
    var diall=[];//ï¿½æ´¢ï¿½ï¿½ï¿½Ð½ï¿½Â·Õ¼ï¿½Ã²ï¿½ï¿½Ö?
    var diall_zy=[];//ï¿½æ´¢ï¿½ï¿½ï¿½ï¿½Õ¼ï¿½Ã²ï¿½ï¿½Ö?
    var dibll=[];//ï¿½æ´¢ï¿½ï¿½ï¿½Ð½ï¿½Â·Õ¼ï¿½ï¿½contkÖµ
    var dibll_zy=[];//ï¿½æ´¢ï¿½ï¿½ï¿½ï¿½Õ¼ï¿½ï¿½contkÖµ
    for(var i=0;i< data.length;i++){
        if(data[i]==1){
            key_arr.push(i)
        }
    }
    if (data != null&&data.length>0) {
        var dia=[]
        var dia_zy=[]
        var dib=[]
        var dib_zy=[]
        for(var key_val_i=0;key_val_i<key_arr.length;key_val_i++) {
            var key_val = key_arr[key_val_i]
            var di = name1[key_val]
            var zhuT = command[key_val]
            var noe = document.getElementById(di)
            if (noe != null) {
                if (equittype[key_val] == 'µÀ²í') {
                    var cont_k = get_k(noe, 'cont_lin')
                    var valu
                    for (var i = 0; i < switchdata_new.length; i++) {
                        if (switchdata_new[i][7] == di) {
                            valu = switchdata_new[i]
                        }
                    }
                    for (var m = 0; m < switchdata_new.length; m++) {
                        if (switchdata_new[m][7] == switchdata_new[cont_k][1]) {
                            var valuu = m
                        }
                    }
                    var con_lin_all = document.getElementsByClassName('cont_lin')
                    var con_lin = con_lin_all[cont_k]

                    var con_5_lin_all = document.getElementsByClassName('con_5_lin')
                    var con_5_lin = con_5_lin_all[cont_k]
                    var fan = document.getElementsByClassName('fan_c')[cont_k]
                    var fa_z = document.getElementsByClassName('fan_z')[cont_k]
                    var fan_v = document.getElementsByClassName('fan_c')[valuu]
                    var fan_zv = document.getElementsByClassName('fan_z')[valuu]
                    var shib_v = document.getElementsByClassName('shi_B')[valuu]
                    var shi_bl = document.getElementsByClassName('shi_B_l')[cont_k]
                    var shib = document.getElementsByClassName('shi_B')[cont_k]
                    var shi_br = document.getElementsByClassName('shi_B_r')[cont_k]

                    var suo = document.getElementsByClassName('suo')[cont_k]
                    var cont_suo = document.getElementsByClassName('cont_suo')[cont_k]
                }

                else if (equittype[key_val] == '¼ÆÖá') {
                    var noe_lin = document.getElementsByClassName(di)

                    if (push_zy.length > 0) {
                        diall = []
                        dibll = []
                        for (var pusZY_i = 0; pusZY_i < push_zy.length; pusZY_i++) {

                            if ($('.' + push_zy[pusZY_i] + "_" + di + 'a').length != 0) {
                                dia = document.getElementsByClassName(push_zy[pusZY_i] + "_" + di + 'a')   //ï¿½Òµï¿½ï¿½ï¿½Î»ï¿½ï¿½

                                diall.push(dia)

                                dib = document.getElementsByClassName(push_zy[pusZY_i] + "_" + di + 'b')   //ï¿½Òµï¿½ï¿½ï¿½Î»ï¿½ï¿½
                                dibll.push(dib)
                            }
                        }
                    }
                    if(psh_zy.length>0){
                        diall_zy=[]
                        dibll_zy=[]
                        for(var psZY_i=0;psZY_i<psh_zy.length;psZY_i++) {

                            if ($('.' + psh_zy[psZY_i]+"_" + di + 'a').length!=0) {

                                dia_zy = document.getElementsByClassName(psh_zy[psZY_i]+"_"+di + 'a')   //ï¿½Òµï¿½ï¿½ï¿½Î»ï¿½ï¿½
                                diall_zy.push(dia_zy)

                                dib_zy = document.getElementsByClassName(psh_zy[psZY_i]+"_"+di + 'b')   //ï¿½Òµï¿½ï¿½ï¿½Î»ï¿½ï¿½
                                dibll_zy.push(dib_zy)
                            }
                        }
                    }
                    var lin_k = get_k(noe, 'lin')

                    var xsf = document.getElementsByClassName('xsfir')[lin_k]
                    var xss = document.getElementsByClassName('xssec')[lin_k]

                    var re_g = document.getElementsByClassName('re_g')[lin_k]

                    var con_g = document.getElementsByClassName('con_gT')[lin_k]

                    var li_lg = document.getElementsByClassName('li_lg')[lin_k]

                    var li_rg = document.getElementsByClassName('li_rg')[lin_k]

                }

                else if (equittype[key_val] == 'ÐÅºÅ»ú') {
                    var sig_k = get_k(noe, 'cir')
                    var lin_m1 = document.getElementsByClassName('mie1')[sig_k]
                    var lin_m2 = document.getElementsByClassName('mie2')[sig_k]
                    var rig_houbei = document.getElementsByClassName('rig_houbei')[sig_k]
                    var sig_b = document.getElementsByClassName('sig_b')[sig_k]

                    var auto_rec = document.getElementsByClassName('auto_rect')[sig_k]
                    var auto_pol = document.getElementsByClassName('auto_poly')[sig_k]

                    var auto_Grec = document.getElementsByClassName('auto_Grerect')[sig_k]
                }
                //Õ¾Ì¨
                else if (equittype[key_val] == 'Õ¾Ì¨') {
                    var stat_k = get_k(noe, 'stat')
                    var stat_c = document.getElementsByClassName('stat_c')[stat_k]

                    //Õ¾Ì¨
                    var stat=document.getElementsByClassName('stat')[stat_k]
                    var statl=document.getElementsByClassName('statl')[stat_k]
                    var statr=document.getElementsByClassName('statr')[stat_k]
                    //ï¿½ï¿½Í£
                    var jup_sta_pol=document.getElementsByClassName('jup_sta_pol')[stat_k]
                    var jup_sta_por=document.getElementsByClassName('jup_sta_por')[stat_k]
                    var jup_sta_l=document.getElementsByClassName('jup_sta_l')[stat_k]
                    var jup_sta_r=document.getElementsByClassName('jup_sta_r')[stat_k]
                    //ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Å¥
                    var quic = document.getElementsByClassName('quic')[stat_k]

                    var stop_E = document.getElementsByClassName('stop_E')[stat_k]
                    //ï¿½ï¿½ï¿½ï¿½Ê±
                    var Dcont=document.getElementsByClassName('plt_cont')[stat_k]
                }
                //ï¿½ß¼ï¿½ï¿½ï¿½ï¿½ï¿½
                else if(equittype[key_val] == 'Âß¼­Çø¶Î'){
                    var duxian = get_k(noe, 'duxian')
                }
                //ATB
                else if(equittype[key_val] == 'ATB'){
                    var ATBname=document.getElementById(di)
                }
                switch (zhuT) {
                    case 'L':

                        if(noe!=null) {
                            if (data_CI[key_val] == 1) {
                                chag_cor(noe, 'white', 'green');
                                chag_cor(auto_rec, 'green', 'green');
                                chag_cor(auto_pol, 'green', 'green');
                            }
                        }
                        break;
                    case 'H':
                        if(noe!=null) {
                            if (data_CI[key_val - 2] == 1) {
                                chag_cor(noe, 'white', 'green');
                            }
                            else if (data_CI[key_val - 1] == 1) {
                                chag_cor(noe, 'white', 'yellow')
                            }
                            else {
                                for (var sigOver_i = 0; sigOver_i < signal.length; sigOver_i++) {
                                    if (signal[sigOver_i][1] == di) {
                                        if (signal[sigOver_i][13] == 2) {
                                            chag_cor(noe, 'white', 'blue');
                                            chag_cor(auto_rec, 'none', 'none');
                                            chag_cor(auto_pol, 'none', 'none');
                                        }
                                        else {
                                            chag_cor(noe, 'white', 'red');
                                            chag_cor(auto_rec, 'none', 'none');
                                            chag_cor(auto_pol, 'none', 'none');
                                        }
                                    }
                                }
                            }
                        }
                        break;
                    case 'U':
                        if(noe!=null) {
                            if (data_CI[key_val] == 1) {
                                chag_cor(noe, 'white', 'yellow')
                                chag_cor(auto_rec, 'green', 'green');
                                chag_cor(auto_pol, 'green', 'green');
                            }
                        }
                        break;
                    case 'HU':
                        if(noe!=null) {
                            if (data_CI[key_val] == 1) {
                                chag_cor(noe, 'red', 'yellow')
                                chag_cor(auto_rec, 'green', 'green');
                                chag_cor(auto_pol, 'green', 'green');
                            }
                        }
                        break;
                    case 'W':
                        if(noe!=null) {
                            if (data_CI[key_val] == 1) {
                                chag_cor(noe, 'white', 'white')
                                chag_cor(auto_rec, 'green', 'green');
                                chag_cor(auto_pol, 'green', 'green');
                            }
                        }
                        break;
                    case 'ÃðµÆ':
                        if (data_CI[key_val] == 0) {
                            chag_cor(lin_m1, 'none', 'none')
                            chag_cor(lin_m2, 'none', 'none')
                        }
                        else {
                            chag_cor(lin_m1, 'black', 'black')
                            chag_cor(lin_m2, 'black', 'black')
                        }
                        break;
                    case 'µãµÆ':
                        break;
                    case 'ºì/À¶µÆ¹ÊÕÏ':
                        if(data_CI[key_val] ==1){
                            for (var sigOver_i = 0; sigOver_i < signal.length; sigOver_i++) {
                                if (signal[sigOver_i][1] == di) {
                                    if (signal[sigOver_i][13] == 2) {
                                        sigGZ(noe,'blue' )
                                    }
                                    else {
                                        sigGZ(noe,'red' )
                                    }
                                }
                            }
                            Alarmaa(di,key_val)
                        }
                        else{
                            sigGZ(noe)
                        }
                        break;
                    case 'ÂÌµÆ¹ÊÕÏ':
                        if(data_CI[key_val] ==1){
                            sigGZ(noe,'green' )
                            Alarmaa(di,key_val)
                        }
                        else{
                            sigGZ(noe)
                        }
                        break;
                    case '»ÆµÆ¹ÊÕÏ':
                        if(data_CI[key_val] ==1){
                            sigGZ(noe,'yellow' )
                            Alarmaa(di,key_val)
                        }
                        else{
                            sigGZ(noe)
                        }
                        break;
                    case '°×µÆ¹ÊÕÏ':
                        if(data_CI[key_val] ==1){
                            sigGZ(noe,'white' )
                            Alarmaa(di,key_val)
                        }
                        else{
                            sigGZ(noe)
                        }
                        break;
                    case 'ÐÅºÅ·âËø':
                        if(noe!=null) {
                            blu(noe, 'pink', 'pink')
                        }
                        break;
                    case 'ÐÅºÅ½â·â':
                        if(noe!=null) {
                            guzhangqiechu(noe, 'red', 'red')
                        }
                        break;
                    case '×Ô¶¯½øÂ·':
                        if(data_CI[key_val]==1){
                            chag_cor(auto_Grec, 'green', 'none')
                        }
                        break;
                    case 'È·ÈÏÈ¡Ïû×Ô¶¯½øÂ·':
                        if(noe!=null) {
                            if (data_CI[key_val] == 1 && data_CI[key_val - 1] == 1) {
                                sig_b.firstChild.nodeValue = 'F'
                                sig_b.setAttribute('fill', 'red')
                                sig_b.setAttribute('stroke', 'red')
                                chag_cor(auto_Grec, 'green', 'none')
                                noe.right = true
                            }
                            else if (data_CI[key_val] == 0 && data_CI[key_val - 1] == 0) {
                                sig_b.setAttribute('fill', 'none')
                                sig_b.setAttribute('stroke', 'none')
                                chag_cor(auto_Grec, 'none', 'none')
                                noe.right = false
                            }
                        }
                        break;
                    case 'ºó±¸Ä£Ê½':
                        if(noe!=null) {
                            if(data_CI[key_val]==1 ){
                                rig_houbei.setAttribute('fill', '#00f0ff')
                                rig_houbei.setAttribute('stroke', '#00f0ff')
                                sig_b.setAttribute('fill', 'none')
                                sig_b.setAttribute('stroke', 'none')
                                noe.houBei = false
                            }
                            else if (data_CI[key_val] == 0 && data_CI[key_val - 1] == 0) {
                                rig_houbei.setAttribute('fill', 'none')
                                rig_houbei.setAttribute('stroke', 'none')
                                noe.houBei = false
                            }
                        }
                        break;
                    case 'È·ÈÏÉèÖÃºó±¸Ä£Ê½':
                        if(noe!=null) {
                            if (data_CI[key_val] == 1 && data_CI[key_val - 1] == 0) {
                                sig_b.firstChild.nodeValue = 'B'
                                sig_b.setAttribute('fill', 'red')
                                sig_b.setAttribute('stroke', 'red')
                                noe.houBei = true
                            }
                        }
                        break;
                    //µÀ²í
                    case '¶¨Î»':
                        if(data_CI[key_val]==1){
                            daochadingcao(con_lin, con_lin_all, fan, fan_v, shi_bl, shib, shi_br, valu)
                            var JZ_red=document.getElementsByClassName(di)
                            var JZ_red_fan=document.getElementById(di)
                            D_f(JZ_red,JZ_red_fan,key_val+11,di,shib,shi_bl,shi_br,data_CI)
                            D_s(JZ_red,JZ_red_fan,key_val+15,di,shib,shi_bl,shi_br,data_CI)
                            speed()
                        }
                        break;
                    case '·´Î»':
                        if(data_CI[key_val]==1){
                            daochafancao(con_lin, con_lin_all, fan, fan_v, shi_bl, shib, shi_br, valu, cont_k)
                            var JZ_red=document.getElementsByClassName(di)
                            var JZ_red_fan=document.getElementById(di)
                            D_f(JZ_red,JZ_red_fan,key_val+10,di,shib,shi_bl,shi_br,data_CI)
                            D_s(JZ_red,JZ_red_fan,key_val+14,di,shib,shi_bl,shi_br,data_CI)
                            speed()
                        }
                        break;
                    case '·âËø':
                        if(data_CI[key_val]==1){
                            chag_cor(suo, 'red', 'none')
                        }
                        break;
                    case 'Ëø±Õ':
                        if(data_CI[key_val]==1){
                            chag_cor(suo, 'white', 'none')
                        }
                        break;
                    case 'È·ÈÏ½âËø':
                        if(data_CI[key_val]==1&&data_CI[key_val-1]==1){
                            cont_suo.firstChild.nodeValue='L'
                            cont_suo.setAttribute('fill','red')
                            cont_suo.setAttribute('stroke','red')
                            suo.sclose=true
                        }
                        else if(data_CI[key_val]==0&&data_CI[key_val-1]==0){
                            cont_suo.setAttribute('fill','none')
                            cont_suo.setAttribute('stroke','none')
                            chag_cor(suo, 'none', 'none')
                            suo.sclose=false
                        }
                        break;

                    case 'È·ÈÏ½â·â':
                        if(data_CI[key_val]==1&&data_CI[key_val-1]==1){
                            cont_suo.firstChild.nodeValue='T'
                            cont_suo.setAttribute('fill','red')
                            cont_suo.setAttribute('stroke','red')
                            suo.fclose=true
                        }
                        else if(data_CI[key_val]==0&&data_CI[key_val-1]==0){
                            cont_suo.setAttribute('fill','none')
                            cont_suo.setAttribute('stroke','none')
                            chag_cor(suo, 'none', 'none')
                            suo.fclose=false
                        }
                        break;
                    case 'µÀ²íÊ§±í':
                        var JZ_red=document.getElementsByClassName(di)
                        var JZ_red_fan=document.getElementById(di)
                        if(JZ_red_fan!=null) {
                            if (data_CI[key_val] == 1) {
                                for (var fan_swi = 0; fan_swi < arr_1.length; fan_swi++) {
                                    if (arr_1[fan_swi] == di) {
                                        for (var fan_str = 0; fan_str < track_segment.length; fan_str++) {
                                            if (track_segment[fan_str][0] == arr_6[fan_swi] - 1) {
                                                if (JZ_red_fan.attributes.x1.value == track_segment[fan_str][1] * 45) {        //ï¿½ï¿½ï¿½ï¿½

                                                    tiaoting(shi_bl, 'red', 'red')
                                                    tiaoting(shib, 'red', 'red')
                                                    tiaoting(shi_br, 'red', 'red')
                                                }
                                                else {

                                                    tiaoting(shi_bl, 'red', 'red')
                                                    tiaoting(shib, 'red', 'red')
                                                    tiaoting(shi_br, 'red', 'red')
                                                }
                                            }
                                        }
                                    }

                                }

                            }

                            else if (data_CI[key_val] == 0 && data_CI[key_val + 3] == 0 && data_CI[key_val + 4] == 0 && data_CI[key_val + 5] == 0 && data_CI[key_val + 6] == 0 && data_CI[key_val + 7] == 0) {

                                for (var fan_swi = 0; fan_swi < arr_1.length; fan_swi++) {
                                    if (arr_1[fan_swi] == di) {
                                        for (var fan_str = 0; fan_str < track_segment.length; fan_str++) {
                                            if (track_segment[fan_str][0] == arr_6[fan_swi] - 1) {
                                                if (JZ_red_fan.attributes.x1.value == track_segment[fan_str][1] * 45) {        //ï¿½ï¿½ï¿½ï¿½
                                                    xuxian(JZ_red[0], 0)
                                                    xuxian(JZ_red_fan, 0)

                                                    guzhangqiechu(shib, 'none', 'none')
                                                    guzhangqiechu(shi_br, 'none', 'none')
                                                    guzhangqiechu(shi_bl, 'black', 'black')
                                                }
                                                else {
                                                    xuxian(JZ_red[0], 0)
                                                    xuxian(JZ_red[1], 0)

                                                    guzhangqiechu(shib, 'none', 'none')
                                                    guzhangqiechu(shi_br, 'none', 'none')
                                                    guzhangqiechu(shi_bl, 'none', 'none')

                                                }
                                            }
                                        }
                                    }

                                }
                            }
                        }
                        if(data_CI[key_val] == 1)
                            lostB(di,key_val)
                        //Alarm(di,key_val)
                        break;
                    case 'Çå³ýÊ§±í':
                        guzhangqiechu(fa_z, con_lin.bl_cor, con_lin.bl_cor)
                        guzhangqiechu(shib, con_lin.b_cor, con_lin.b_cor)
                        guzhangqiechu(fan, con_lin.br_cor, con_lin.br_cor)
                        break;
                    case 'ºì¹â´ø¹ÊÕÏ':
                        if(data_CI[key_val]==1){
                            Alarmaa(di,key_val)
                        }
                        var JZ_red=document.getElementsByClassName(di)
                        var JZ_red_fan=document.getElementById(di)
                        D_r(JZ_red,JZ_red_fan,key_val,di,shib,shi_bl,shi_br,data_CI)
                        break;
                    case '°×¹â´ø¹ÊÕÏ':
                        if(data_CI[key_val]==1){
                            alaAll.push(di)
                            alaAllTex.push(command[key_val])
                        }
                        var JZ_red=document.getElementsByClassName(di)
                        var JZ_red_fan=document.getElementById(di)
                        D_w(JZ_red,JZ_red_fan,key_val,di,shib,shi_bl,shi_br,data_CI)
                        speed()
                        break;
                    case '·ÖÂ·²»Á¼':
                        var JZ_red=document.getElementsByClassName(di)
                        var JZ_red_fan=document.getElementById(di)
                        D_f(JZ_red,JZ_red_fan,key_val,di,shib,shi_bl,shi_br,data_CI)
                        break;
                    case '¼ÆÖáÇÐ³ý':
                        var JZ_red=document.getElementsByClassName(di)
                        var JZ_red_fan=document.getElementById(di)
                        D_q(JZ_red,JZ_red_fan,key_val,di,shib,shi_bl,shi_br,data_CI)
                        break;
                    case '¼ÆÖáÊ§Ð§':
                        if(data_CI[key_val]==1){
                            Alarmaa(di,key_val)
                        }
                        var JZ_red=document.getElementsByClassName(di)
                        var JZ_red_fan=document.getElementById(di)
                        D_s(JZ_red,JZ_red_fan,key_val,di,shib,shi_bl,shi_br,data_CI)
                        break;
                    case '½øÂ·Õ¼ÓÃ':
                        if(data_CI[key_val]==1){
                            push_zy.indexOf(di)==-1?  push_zy.push(di) :""
                            push_k.indexOf(cont_k)==-1?  push_k.push(cont_k) :""
                        }
                        else{
                            jl_arr.push(di)
                            jlcont_arr.push(cont_k)
                            setTimeout(function(){
                                for(var jl_k=0;jl_k<jl_arr.length;jl_k++){
                                    push_zy.indexOf(jl_arr[jl_k])!=-1? push_zy.splice(push_zy.indexOf(jl_arr[jl_k]),1):""
                                    push_k.indexOf(jlcont_arr[jl_k])!=-1?push_k.splice(push_k.indexOf(jlcont_arr[jl_k]),1):""
                                }
                                jl_arr=[]
                                jlcont_arr=[]
                            },2)
                        }
                        break;
                    case 'Õ¼ÓÃ':
                        psh_zy.push(di)
                        psh_k.push(cont_k)//
                        break;
                    case 'ÂÌ¹â´ø':
                        if(noe!=null){
                            if(data_CI[key_val+9]==0&& noe.attributes.fill.value!='red'){
                                zhanyo(diall,dibll,noe_lin,push_k,push_zy,key_val,'green',1,data_CI)
                                zhanyo(diall_zy,dibll_zy,noe_lin,psh_k,psh_zy,key_val,'green',1,data_CI)
                                speed()
                            }
                        }
                        break;
                    case 'ºì¹â´ø':
                        if(noe!=null){
                            if(data_CI[key_val+8]==0) {
                                zhanyo(diall,dibll,noe_lin,push_k,push_zy,key_val,'red',data_CI)
                                zhanyo(diall_zy,dibll_zy,noe_lin,psh_k,psh_zy,key_val,'red',data_CI)
                            }
                        }
                        break;
                    case '°×¹â´ø':
                        if(noe!=null){
                            if(data_CI[key_val+7]==0&&noe.attributes.stroke.value!='red') {
                                zy_white(diall_zy,dibll_zy,noe_lin,psh_k,psh_zy,key_val,'green','red',"",data_CI)
                                zy_white(diall,dibll,noe_lin,push_k,push_zy,key_val,'green','red',"",data_CI)
                                speed()
                            }
                        }
                        break;
                    case "¼ÆÖáºì¹â´ø¹ÊÕÏ":
                        if(noe!=null){
                            if(data_CI[key_val]==1){
                                Alarm(di,key_val)
                                if(data_CI[key_val+3] == 1){
                                    jizhoushixiao(noe, 'brown', 'brown')
                                }
                                else if(data_CI[key_val+2] == 1){
                                    jizhoushixiao(noe, 'black', 'black')
                                }
                                else{
                                    jizhoushixiao(noe,'red','red')
                                }
                            }
                            else if(data_CI[key_val]==0&&data_CI[key_val+1]==0&&data_CI[key_val+2]==0&&data_CI[key_val+3]==0&&data_CI[key_val-1]==0){
                                speed()
                                if(data_CI[key_val-6]==1){
                                    jizhoushixiao(noe,'white','white')
                                }
                                else if(data_CI[key_val-4]==1){
                                    jizhoushixiao(noe,'green','green')
                                }

                                else if(data_CI[key_val-5]==1){
                                    jizhoushixiao(noe,'red','red')
                                }
                                else{
                                    jizhoushixiao(noe,g_cor,g_cor)
                                }
                                xuxian(noe, 0)
                            }
                        }
                        break;
                    case "¼ÆÖá°×¹â´ø¹ÊÕÏ":
                        if(noe!=null) {
                            if (data_CI[key_val] == 1) {
                                Alarm(di,key_val)
                                if(data_CI[key_val+2] == 1){
                                    jizhoushixiao(noe, 'brown', 'brown')
                                }
                                else if(data_CI[key_val+1] == 1){
                                    jizhoushixiao(noe, 'black', 'black')
                                }
                                else if(data_CI[key_val-1] == 1){
                                    jizhoushixiao(noe, 'red', 'red')
                                }
                                else if(data_CI[key_val+5]==1){
                                    jizhoushixiao(noe,'#ff6633','#ff6633')
                                }
                                else{
                                    jizhoushixiao(noe, 'white', 'white')
                                }
                            }
                            else if (data_CI[key_val] == 0 && data_CI[key_val + 1] == 0 && data_CI[key_val + 2] == 0 && data_CI[key_val - 1] == 0 && data_CI[key_val - 2] == 0) {
                                xuxian(noe, 0)
                                speed()
                                if(data_CI[key_val-6]==1){
                                    jizhoushixiao(noe,'white','white')
                                }
                                else if(data_CI[key_val-4]==1){
                                    jizhoushixiao(noe,'green','green')
                                }
                                else if(data_CI[key_val-5]==1){
                                    jizhoushixiao(noe,'red','red')
                                }
                                else if(data_CI[key_val+5]==1){
                                    jizhoushixiao(noe,'#ff6633','#ff6633')
                                }
                                else{
                                    jizhoushixiao(noe,g_cor,g_cor)
                                }
                            }
                        }
                        break;
                    case "¼ÆÖá·ÖÂ·²»Á¼":
                        if(noe!=null) {
                            var nx,nm
                            if (data_CI[key_val] == 1) {
                                var duxian_lin=document.getElementsByClassName(di)
                                if(duxian_lin.length>1){
                                    nx='6,6'
                                    xuxian(noe, nx)
                                }
                                else{
                                    nx='6,6'
                                    xuxian(noe, nx)
                                }
                            }
                            else if (data_CI[key_val] == 0 && data_CI[key_val + 1] == 0 && data_CI[key_val + 2] == 0 && data_CI[key_val + 3] == 0 && data_CI[key_val + 4] == 0) {
                                nx='0,0'
                                xuxian(noe, nx)
                                var duxian_lin=document.getElementsByClassName(di)
                                for(var du_i=1;du_i<duxian_lin.length;du_i++) {
                                    xuxian(duxian_lin[du_i],nx)
                                }
                                speed()
                            }
                        }
                        break;
                    case '¼ÆÖá¼ÆÖáÇÐ³ý':
                        if(noe!=null){
                            if(data_CI[key_val]==1){
                                if(data_CI[key_val+1] == 1){
                                    jizhoushixiao(noe, 'brown', 'brown')
                                }
                                else{
                                    jizhoushixiao(noe, 'black', 'black')
                                }
                            }
                            else if(data_CI[key_val]==0&&data_CI[key_val+1]==0&&data_CI[key_val-2]==0&&data_CI[key_val-3]==0&&data_CI[key_val-1]==0){
                                speed()
                                if(data_CI[key_val-5]==1){
                                    jizhoushixiao(noe,'white','white')
                                }
                                else if(data_CI[key_val-3]==1){
                                    jizhoushixiao(noe,'green','green')
                                }

                                else if(data_CI[key_val-4]==1){
                                    jizhoushixiao(noe,'red','red')
                                }
                                else{
                                    jizhoushixiao(noe,g_cor,g_cor)
                                }
                                xuxian(noe, 0)
                            }
                        }
                        break;
                    case '¼ÆÖá¼ÆÖáÊ§Ð§':
                        if(noe!=null){
                            if(data_CI[key_val]==1){
                                Alarmaa(di,key_val)
                                jizhoushixiao(noe, 'brown', 'brown')
                            }
                            else if(data_CI[key_val]==0&&data_CI[key_val-1]==0&&data_CI[key_val-2]==0&&data_CI[key_val-3]==0&&data_CI[key_val-4]==0){
                                speed()
                                if(data_CI[key_val-5]==1||data_CI[key_val-7]==1){
                                    jizhoushixiao(noe,'white','white')
                                }
                                else if(data_CI[key_val-3]==1||data_CI[key_val-9]==1){
                                    jizhoushixiao(noe,'green','green')
                                }

                                else if(data_CI[key_val-4]==1||data_CI[key_val-8]==1){
                                    jizhoushixiao(noe,'red','red')
                                }
                                else if(data_CI[key_val+3]==1){
                                    jizhoushixiao(noe,'#ff6633','#ff6633')
                                }
                                else{
                                    jizhoushixiao(noe,g_cor,g_cor)
                                }
                                xuxian(noe, 0)
                            }
                        }
                        break;
                    case 'ÁÙÊ±ÏÞËÙ':
                        xsf.setAttribute('stroke', 'yellow')
                        xss.setAttribute('stroke', 'yellow')
                        break;
                    case '±£»¤Çø¶Î':
                        if(noe!=null) {
                            var proAll = []
                            if (data_CI[key_val] == 1) {
                                if (noe.attributes.fill.value != 'red' || noe.attributes.fill.value != 'brown') {
                                    for (var pro_i = 0; pro_i < track_segment.length; pro_i++) {
                                        if (track_segment[pro_i][6] == di) {
                                            if (proAll.indexOf(track_segment[pro_i][5]) == -1&&track_segment[pro_i][5]!=null&&track_segment[pro_i][5]!="") {
                                                proAll.push(track_segment[pro_i][5])
                                            }
                                        }
                                    }
                                    if (proAll.length > 0) {
                                        for (var proA_i = 0; proA_i < proAll.length; proA_i++) {
                                            for (var proName_i = 0; proName_i < name1.length; proName_i++) {
                                                if (name1[proName_i] == proAll[proA_i] && command[proName_i] == '¶¨Î»') {
                                                    if (data_CI[proName_i] == 1) {
                                                        var proL = document.getElementsByClassName(di)
                                                        var proLb = document.getElementsByClassName(proAll[proA_i]+"_"+di + 'b')
                                                        pro(proL)
                                                        pro(proLb)
                                                    }
                                                    else {
                                                        var proL = document.getElementsByClassName(di)
                                                        var proLb = document.getElementsByClassName(proAll[proA_i]+"_"+di + 'a')
                                                        pro(proL)
                                                        pro(proLb)
                                                    }
                                                }
                                            }
                                        }
                                        proAll = []
                                    }
                                    else{
                                        if(noe.attributes.fill.value == g_cor){
                                            jizhoushixiao(noe, '#33ff33', "#33ff33")
                                        }
                                    }
                                }
                            }
                            else{
                                for (var pro_i = 0; pro_i < track_segment.length; pro_i++) {
                                    if (track_segment[pro_i][6] == di) {
                                        if (proAll.indexOf(track_segment[pro_i][5]) == -1&&track_segment[pro_i][5]!=null&&track_segment[pro_i][5]!="") {
                                            proAll.push(track_segment[pro_i][5])
                                        }
                                    }
                                }
                                if(proAll.length > 0){
                                    for (var proA_i = 0; proA_i < proAll.length; proA_i++) {
                                        for (var proName_i = 0; proName_i < name1.length; proName_i++) {
                                            if (name1[proName_i] == proAll[proA_i] && command[proName_i] == '¶¨Î»') {
                                                if (data_CI[proName_i] == 1) {
                                                    var proL = document.getElementsByClassName(di)
                                                    var proLb = document.getElementsByClassName(di + 'b')
                                                    pro(proL,g_cor)
                                                    pro(proLb,g_cor)
                                                }
                                                else {
                                                    var proL = document.getElementsByClassName(di)
                                                    var proLb = document.getElementsByClassName(di + 'a')
                                                    pro(proL,g_cor)
                                                    pro(proLb,g_cor)
                                                }
                                            }
                                        }
                                    }
                                    proAll = []
                                }
                                else{
                                    if(noe.attributes.fill.value == '#33ff33'){
                                        jizhoushixiao(noe,g_cor,g_cor)
                                    }
                                }
                            }
                        }
                        break;
                    case '¼ÆÖá·âËø':
                        if(data_CI[key_val]==1){
                            chag_cor(re_g, 'red', 'none')
                            chag_cor(li_lg, 'red', 'red')
                            chag_cor(li_rg, 'red', 'red')
                        }
                        break;
                    case 'È·ÈÏ¼ÆÖá½â·â':
                        if(data_CI[key_val]==1&&data_CI[key_val-1]==1){
                            con_g.firstChild.nodeValue='T'
                            con_g.setAttribute('fill','red')
                            con_g.setAttribute('stroke','red')
                            noe.clos=true
                        }
                        else if(data_CI[key_val]==0&&data_CI[key_val-1]==0){
                            con_g.setAttribute('fill','none')
                            con_g.setAttribute('stroke','none')
                            chag_cor(re_g, 'none', 'none')
                            chag_cor(li_lg, 'none', 'none')
                            chag_cor(li_rg, 'none', 'none')
                            noe.clos=false
                        }
                        break;
                    case '¿Û³µ':
                        if (data_CI[key_val] == 0) {
                            statl.setAttribute('fill','#add7ff')
                            stat.setAttribute('fill','#add7ff')
                            statr.setAttribute('fill','#add7ff')
                            statl.setAttribute('stroke','#add7ff')
                            stat.setAttribute('stroke','#add7ff')
                            statr.setAttribute('stroke','#add7ff')

                            $('#unKouCar').addClass('no')
                            $('#kouCar').removeClass('no')
                        }
                        else {
                            statl.setAttribute('fill','yellow')
                            stat.setAttribute('fill','yellow')
                            statr.setAttribute('fill','yellow')
                            statl.setAttribute('stroke','yellow')
                            stat.setAttribute('stroke','yellow')
                            statr.setAttribute('stroke','yellow')

                            $('#unKouCar').removeClass('no')
                            $('#kouCar').addClass('no')
                        }
                        break;
                    case 'ÌøÍ£':
                        if (data_CI[key_val] == 0) {
                            chag_cor(jup_sta_pol,'none','none')
                            chag_cor(jup_sta_por,'none','none')
                            chag_cor(jup_sta_l,'none','none')
                            chag_cor(jup_sta_r,'none','none')

                            $('#unJumpCar').addClass('no')
                            $('#jumpCar').removeClass('no')
                        }
                        else {
                            chag_cor(jup_sta_pol,'yellow','yellow')
                            chag_cor(jup_sta_por,'yellow','yellow')
                            chag_cor(jup_sta_l,'yellow','yellow')
                            chag_cor(jup_sta_r,'yellow','yellow')


                            $('#unJumpCar').removeClass('no')
                            $('#jumpCar').addClass('no')
                        }
                        break;
                    case 'Çå¿Í':
                        if(noe!=null) {
                            chag_cor(noe, 'pink', 'pink')
                        }
                        break;
                    case '½ô¼±¹Ø±Õ':
                        chag_cor(quic,'purple','purple')
                        break;
                    case '½ô¼±Í£³µ':
                        if(data_CI[key_val]==1){
                            chag_cor(quic, 'pink', 'pink')
                        }
                        break;
                    case 'È·ÈÏ½ô¼±Í£³µ':
                        if(data_CI[key_val]==1&&data_CI[key_val-3]==1){
                            stop_E.firstChild.nodeValue='E'
                            stop_E.setAttribute('fill','red')
                            stop_E.setAttribute('stroke','red')
                            quic.sclose=true
                        }
                        else if(data_CI[key_val]==0&&data_CI[key_val-1]==0){

                            stop_E.setAttribute('fill','none')
                            stop_E.setAttribute('stroke','none')
                            chag_cor(quic, '#c6c3c6', '#222')
                            quic.sclose=false
                        }
                        break;
                    case '':
                        if(data_CI[key_val]==1){
                            chag_cor(quic, 'pink', 'pink')
                        }
                        break;
                    case 'ÁÐ³µÍ£ÎÈ':
                        if(data_CI[key_val]==1){

                            dj(Dcont,di)
                        }
                        break;

                    case 'µ¥ÃÅ¿ªÃÅ¹ÊÕÏ':
                        if(stat_c!=null) {
                            var cor
                            if (stat_c.cor == true) {
                                cor = 'none'
                            }
                            if (data_CI[key_val] == 1) {
                                pbm('red',"", stat_c)
                                Alarmaa(di,key_val)
                            }
                            else {
                                pbmGz(data_CI, key_val + 1, key_val + 2, key_val + 3, cor, stat_c)
                            }
                        }
                        break;
                    case 'µ¥ÃÅ¹ØÃÅ¹ÊÕÏ':
                        if(stat_c!=null) {
                            var cor
                            if (stat_c.cor == true) {
                                cor = 'none'
                            }
                            if (data_CI[key_val] == 1) {
                                pbm('blue',"", stat_c)
                                Alarmaa(di,key_val)
                            }
                            else {
                                pbmGz(data_CI, key_val - 1, key_val + 1, key_val + 2, cor, stat_c)
                            }
                        }
                        break;
                    case '¶àÃÅ¿ªÃÅ¹ÊÕÏ':
                        if(stat_c!=null) {
                            var cor
                            if (stat_c.cor == true) {
                                cor = 'none'
                            }
                            if (data_CI[key_val] == 1) {
                                pbm('yellow',"", stat_c)
                                Alarmaa(di,key_val)
                            }
                            else {
                                pbmGz(data_CI, key_val - 2, key_val - 1, key_val + 1, cor, stat_c)
                            }
                        }
                        break;
                    case '¶àÃÅ¹ØÃÅ¹ÊÕÏ':
                        if(stat_c!=null) {
                            var cor
                            if (stat_c.cor == true) {
                                cor = 'none'
                            }
                            if (data_CI[key_val] == 1) {
                                pbm('green',"", stat_c)
                                Alarmaa(di,key_val)
                            }
                            else {
                                pbmGz(data_CI, key_val - 3, key_val - 2, key_val - 1, cor, stat_c)
                            }
                        }
                        break;
                    case 'ÆÁ±ÎÃÅ':
                        if(stat_c!=null){
                            if(data_CI[key_val]==1){
                                xuxian(stat_c, 4)
                            }
                            else{
                                xuxian(stat_c, 0)
                            }
                        }
                        break;
                    //ATB
                    case 'ATB':
                        if(data_CI[key_val]==1){
                            chag_cor(ATBname, 'white', 'green')
                        }
                        else{
                            chag_cor(ATBname,'white', 'red')
                        }
                        break;
                    //Âß¼­Çø¶Î
                    case 'Âß¼­Õ¼ÓÃ':
                        if(noe!=null&&noe.classList!=null){
                            var clas=noe.classList[0]
                            var clas_lin=document.getElementById(clas)
                            if (data_CI[key_val] == 0) {
                                if(data_CI[key_val+1]==0){
                                    var loNoe=document.getElementsByClassName(clas)
                                    for(var logN_i=0;logN_i<loNoe.length;logN_i++) {
                                        if(logicArr.indexOf(di)!=-1) {
                                            if ('classList' in   loNoe[logN_i]) {
                                                var l=document.getElementById(di.split("-")[0])
                                                var corAll=['red','green']
                                                if(corAll.indexOf(l.attributes.fill.value)!=-1){
                                                    jizhoushixiao(l, g_cor, g_cor)
                                                }
                                                loNoe[logN_i].classList.contains('dux') ? jizhoushixiao(loNoe[logN_i], 'none', 'none') : ""
                                            }
                                            else {
                                                var clD1 = loNoe[logN_i].className.baseVal.split(" ")
                                                if ('dux' in clD1) {
                                                    jizhoushixiao(loNoe[logN_i], 'none', 'none')
                                                }
                                            }
                                        }
                                        else{
                                            var l=document.getElementById(di.split("-")[0])
                                            var corAll=['red','green']
                                            if(corAll.indexOf(l.attributes.fill.value)!=-1){
                                                jizhoushixiao(noe, g_cor, g_cor)
                                            }
                                        }
                                    }
                                }
                                else{
                                    var rgba_g='rgba(0,255,0,0.4)'
                                    noe.setAttribute('fill','green')
                                    noe.setAttribute('stroke','green')
                                }
                            }
                            else {

                                var rgba_r='rgba(255,0,0,0.4)'
                                noe.setAttribute('fill','red')
                                noe.setAttribute('stroke','red')
                            }
                        }
                        break;
                    case 'Âß¼­Ëø±Õ':

                        if(noe!=null) {
                            var clas = noe.className.baseVal
                            var clas_lin = document.getElementById(clas)
                            if (data_CI[key_val] == 0) {
                                if (data_CI[key_val - 1] == 1) {
                                    var rgba_r='rgba(255,0,0,0.4)'
                                    noe.setAttribute('fill','red')
                                    noe.setAttribute('stroke','red')
                                }
                                else {
                                    var loNoe2=document.getElementsByClassName(clas)
                                    for(var logN_i2=0;logN_i2<loNoe2.length;logN_i2++) {
                                        if(logicArr.indexOf(di)!=-1){
                                            if('classList' in  loNoe2[logN_i2]){
                                                // console.log(loNoe2[logN_i2] ,di)
                                                if(loNoe2[logN_i2].classList.contains('dux')){
                                                    var l=document.getElementById(di.split("-")[0])
                                                    var corAll=['red','green']
                                                    if(corAll.indexOf(l.attributes.fill.value)!=-1){
                                                        jizhoushixiao(l, g_cor, g_cor)
                                                    }
                                                    jizhoushixiao(noe, 'none', 'none')
                                                }
                                            }
                                            else{
                                                var clD=loNoe2[logN_i2].className.baseVal.split(" ")
                                                if('dux' in clD){
                                                    jizhoushixiao(loNoe2[logN_i2], 'none', 'none')
                                                }
                                            }
                                        }
                                        else{
                                            var l=document.getElementById(di.split("-")[0])
                                            var corAll=['red','green']
                                            if(corAll.indexOf(l.attributes.fill.value)!=-1){
                                                jizhoushixiao(noe, g_cor, g_cor)
                                            }
                                        }
                                    }
                                }
                            }
                            else {
                                if (data_CI[key_val - 1] == 1) {
                                    var rgba_r='rgba(255,0,0,0.4)'
                                    noe.setAttribute('fill','red')
                                    noe.setAttribute('stroke','red')
                                }
                                else {
                                    var rgba_g='rgba(0,255,0,0.4)'
                                    noe.setAttribute('fill','green')
                                    noe.setAttribute('stroke','green')
                                }
                            }
                        }
                        break
                }
            }

        }
    }
}
//ÑÓÊ±ÅÐ¶ÏµÀ²íÊ§±í
var shibiaoArr=[],shibiaoDiArr=[]


function Alarmaa(di,key_val){
    if(alaAll.indexOf(di)==-1&&alaAllTex.indexOf(command[key_val])==-1){
        alaAll.push(di)
        alaAllTex.push(command[key_val])
    }
    var alaBtn=$('#Ala_btn')

    if(alaAll.length==1&&(!alaBtn.ala||alaBtn.ala==null)){
        timAla()
    }
    function timAla(){
        var audio=document.getElementById('audioP')
        if(alaAll.length==0){
            clearTimeout(alaTim)
            if(alaBtn.hasClass('head_sec_liBtn')){
                alaBtn.removeClass('head_sec_liBtn')
            }
            alaBtn.ala=false
            audio.pause()
            audio.currentTime = 0;
        }
        else{
            if(sm) {
                /* $('#smool').removeClass('kai')
                 $('#smool').removeClass('kai')*/
                audio.play()
            }
            clearTimeout(alaTim)
            if(alaBtn.hasClass('head_sec_liBtn')){
                alaBtn.removeClass('head_sec_liBtn')
            }
            else{
                alaBtn.addClass('head_sec_liBtn')
            }
            var alaTim=setTimeout(timAla,500)

            alaBtn.ala=true


        }
    }

}
function lostB(di,key_val) {
    shibiaoArr.push(key_val)
    shibiaoDiArr.push(di)
    setTimeout(function() {
        shibiaoArr.forEach(function (item,index) {
            if(data_CI[item]== 1)
                Alarmaa(shibiaoDiArr[index],item)
            shibiaoArr.splice(index,1)
            shibiaoDiArr.splice(index,1)
        })
    },5000)
}
function Alax() {
    if(alaAll.length>0){
        for(var sta=0;sta<static_text.length;sta++) {
            var sca= static_text[sta][1]==alaAll[0]?static_text[sta][8]:""
        }
        var tex=sca+alaAll[0]+alaAllTex[0]
        $('#aleDiv').find('span').text(tex)
        $('#alet').show()
    }
}
$('#aleT').click(function(e) {
    alaAll.splice(0,1)
    alaAllTex.splice(0,1)
    $('#alet').hide()
})
$('#aleF').click(function() {
    $('#alet').hide()
})

function dj(Dcont,di) {

    var contTime
    var pltAll=[]
    var GoCarAll=[]
    var namPlt=di.split("-")
    var linCar
    //ÏÈÅÐ¶ÏÊÇ·ñ°´ÔËÐÐÍ¼ÅÜ
    for(var platformI= 0;platformI<platform.length;platformI++){
        if(platform[platformI][1]==namPlt[0]){
            pltAll.push(platform[platformI][7])
            GoCarAll.push(platform[platformI][0])
            //²éÕÒ¶ÔÓ¦Ïß
            if(namPlt[1]==1){
                for(var axle_sectionI=0;axle_sectionI<axle_section.length;axle_sectionI++){
                    if(axle_section[axle_sectionI][0]==pltAll[0]){
                        linCar=axle_section[axle_sectionI][1]
                    }
                }
            }
            else{
                for(var axle_sectionIel=0;axle_sectionIel<axle_section.length;axle_sectionIel++){
                    if(axle_section[axle_sectionIel][0]==pltAll[1]){
                        linCar=axle_section[axle_sectionIel][1]
                    }
                }
            }
        }
    }

    //ÅÐ¶Ï³µÀàÐÍ
    var linL=document.getElementById(linCar)
    var TimArr=[]
    if(linL.carType==5){
        countDown(namPlt[0],linL.carPTID,TimArr)
        console.log(TimArr);
        contTime=TimArr[0]
    }
    else{
        contTime=30
    }

  /*  if(Dcont.cont==null){

    }
    else{
        contTime=Dcont.cont
    }*/
    clearTimeout(Dcont.t)
    var k=contTime>0?contTime:1
    Dco()
    function Dco() {
        k--
        Dcont.firstChild.nodeValue = k
        Dcont.setAttribute('stroke', 'yellow');
        Dcont.setAttribute('fill', 'yellow');

        if (k > 0) {
            Dcont.t = setTimeout(Dco, 1000)
        }
        else {

            /*for(var namP_i= 0;namP_i<platform.length;namP_i++){
                if(platform[namP_i][1]==namPlt[0]){
                    pltAll.push(platform[namP_i][0])
                }
            }*/
            if(linL.car){
                if (linL.carType == 5) {
                    GetSignal(TimArr[1], TimArr[2])
                    if (namPlt[1] == 1) {
                        sed(["fc", GoCarAll[0], 0]);
                    }
                    else {
                        sed(["fc", GoCarAll[1], 0]);
                    }
                }
                else {
                    if (namPlt[1] == 1) {
                        sed(["fc", GoCarAll[0], 0]);
                    }
                    else {
                        sed(["fc", GoCarAll[1], 0]);
                    }
                }
            }
            Dcont.setAttribute('stroke', 'none');
            Dcont.setAttribute('fill', 'none');
            clearTimeout(Dcont.t)
        }
    }
}

function pro(eleAll,cor) {
    for(var i=0;i<eleAll.length;i++){
        if(cor==g_cor) {
            if (eleAll[i].attributes.fill.value == '#33ff33') {
                jizhoushixiao(eleAll[i],g_cor, g_cor)
            }
        }
        else{
            if (eleAll[i].attributes.fill.value == g_cor){

                jizhoushixiao(eleAll[i], '#33ff33', "#33ff33")
            }
        }
    }
}


//ï¿½ï¿½ï¿½ï¿½ï¿½Å¸ï¿½ï¿½Ö²ï¿½ï¿½ï¿½
function pbm(cor,color,stat_c){
    chag_cor(stat_c, cor, cor)
}
//ï¿½ï¿½ï¿½ï¿½ï¿½Å¹ï¿½ï¿½ï¿½ï¿½Ð¶ï¿½
function pbmGz(data_CI,key_val2,key_val3,key_val4,cor,stat_c) {

    if(data_CI[key_val4]==1){
        cor!='none'?cor='green':'none'
        pbm('green',cor,stat_c)
    }
    else if(data_CI[key_val3]==1){
        cor!='none'?cor='yellow':'none'
        pbm('yellow',cor,stat_c)
    }
    else if(data_CI[key_val2]==1){
        cor!='none'?cor='blue':'none'
        pbm('blue',cor,stat_c)
    }

    else{
        cor!='none'?cor='white':'none'
        pbm('white',cor,stat_c)
    }
}

//ï¿½ï¿½Ê±ï¿½ï¿½ï¿½ï¿½
function speed(){
    /*ï¿½ï¿½ï¿½Ã´ï¿½ï¿½ï¿½ï¿½ï¿½Ê±ï¿½ï¿½ï¿½ï¿½ï¿½ß¶Îºï¿½ï¿½Ù¶ï¿½*/
    var speed_str=[]     //ï¿½Ù¶ï¿½
    var axle_speed_str=[] //ï¿½ï¿½ï¿½ï¿½
    var speed_lin
    var speed_lin_fan    //ï¿½Ò·ï¿½Î»ï¿½ï¿½
    var speed_lin_d   //ï¿½Ò¶ï¿½Î»ï¿½ï¿½
    var cont_speed
    var lin_pro_filcolor,lin_pro_strcolor,linF_pro_filcol,linF_pro_strcol,linD_pro_filcol,linD_pro_strcol
    for(var AxleSessionName_i=0;AxleSessionName_i<AxleSessionName.length;AxleSessionName_i++){
        for(var axle_i=0;axle_i<axle_section.length;axle_i++){
            if(axle_section[axle_i][0]==AxleSessionName[AxleSessionName_i]) {
                var sped_id = document.getElementById(axle_section[axle_i][1])
                if (sped_id != null) {
                    speed_lin = document.getElementsByClassName(axle_section[axle_i][1])				//ï¿½ï¿½ï¿½ï¿½ï¿½Úºï¿½ï¿½ï¿½ï¿½ï¿½Ê¼Î»ï¿½Ã£ï¿½ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.22
                    speed_lin_fan = document.getElementsByClassName(axle_section[axle_i][1] + "a")   //ï¿½Ò·ï¿½Î»ï¿½ß£ï¿½ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.22
                    speed_lin_d = document.getElementsByClassName(axle_section[axle_i][1] + "b")   //ï¿½Ò¶ï¿½Î»ï¿½ß£ï¿½ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.22
                    if (speed_lin_fan != null || speed_lin_d != null) {
                        for (var speed_fan_i = 0; speed_fan_i < speed_lin_fan.length; speed_fan_i++) {
                            //ï¿½Òµï¿½ï¿½ï¿½Ç°ï¿½ï¿½Î»ï¿½ß¶ï¿½Ó¦idï¿½ï¿½ï¿½ï¿½ï¿½ï¿½idÎªï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
                            var speed_fan_id = speed_lin_fan[speed_fan_i].id
                            for (var swich_i = 0; swich_i < arr_1.length; swich_i++) {
                                if (speed_fan_id == arr_1[swich_i]) {
                                    for (var traSe_i = 0; traSe_i < track_segment.length; traSe_i++) {
                                        if (track_segment[traSe_i][0] == arr_6[swich_i] - 1) {
                                            if (speed_lin_fan[speed_fan_i].attributes.x1.value == track_segment[traSe_i][1] * 45) {       //ï¿½Ð¶Ï·ï¿½ï¿½ï¿½
                                                if (speed_lin_fan[speed_fan_i].attributes.fill.value != 'blue') {
                                                    speed_lin_fan[speed_fan_i].linF_pro_filcol = speed_lin_fan[speed_fan_i].attributes.fill.value
                                                    speed_lin_fan[speed_fan_i].linF_pro_strcol = speed_lin_fan[speed_fan_i].attributes.stroke.value
                                                }
                                                if(speed_lin_d[speed_fan_i]!=null){
                                                    if (speed_lin_d[speed_fan_i].linD_pro_filcol != null) {
                                                        jizhoushixiao(speed_lin_d[speed_fan_i], speed_lin_d[speed_fan_i].linD_pro_filcol, speed_lin_d[speed_fan_i].linD_pro_strcol)
                                                    }
                                                }
                                                jizhoushixiao(speed_lin_fan[speed_fan_i], 'blue', 'blue')
                                            }
                                            else {
                                                if(speed_lin_d[speed_fan_i]!=null){
                                                    if (speed_lin_d[speed_fan_i].attributes.fill.value != 'blue') {
                                                        speed_lin_d[speed_fan_i].linD_pro_filcol = speed_lin_d[speed_fan_i].attributes.fill.value
                                                        speed_lin_d[speed_fan_i].linD_pro_strcol = speed_lin_d[speed_fan_i].attributes.stroke.value
                                                    }
                                                }

                                                if (speed_lin_fan[speed_fan_i].linF_pro_filcol != null) {
                                                    jizhoushixiao(speed_lin_fan[speed_fan_i], speed_lin_fan[speed_fan_i].linF_pro_filcol, speed_lin_fan[speed_fan_i].linF_pro_strcol)
                                                }

                                                jizhoushixiao(speed_lin_d[speed_fan_i], 'blue', 'blue')
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    cont_speed = document.getElementsByClassName('cont' + axle_section[axle_i][1])  //ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.22ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Úºï¿½ï¿½ï¿½ï¿½ï¿½Ê¼

                    cont_speed[0].firstChild.nodeValue = AxleSpeed[AxleSessionName_i];

                    for (var sped_lin_i = 0; sped_lin_i < speed_lin.length; sped_lin_i++) {

                        if( 'classList' in speed_lin[sped_lin_i]){

                            if(!speed_lin[sped_lin_i].classList.contains('dux')){

                                if (speed_lin[sped_lin_i].attributes.fill.value != 'blue') {
                                    speed_lin[sped_lin_i].lin_pro_filcolor = speed_lin[sped_lin_i].attributes.fill.value
                                    speed_lin[sped_lin_i].lin_pro_strcolor = speed_lin[sped_lin_i].attributes.stroke.value
                                }

                                jizhoushixiao(speed_lin[sped_lin_i], 'blue', 'blue')
                            }
                        }
                        else{
                            var speedClas=speed_lin[sped_lin_i].className.baseVal.split(" ")
                            if(!("dux" in speedClas)){
                                if (speed_lin[sped_lin_i].attributes.fill.value != 'blue') {
                                    speed_lin[sped_lin_i].lin_pro_filcolor = speed_lin[sped_lin_i].attributes.fill.value
                                    speed_lin[sped_lin_i].lin_pro_strcolor = speed_lin[sped_lin_i].attributes.stroke.value
                                }
                                jizhoushixiao(speed_lin[sped_lin_i], 'blue', 'blue')
                            }
                        }


                    }
                }
            }
        }
    }
    if(DelSessionName!=null)//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.22ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½È¥ï¿½ï¿½ï¿½ï¿½Ê±ï¿½ï¿½ï¿½ÙµÄ±ï¿½Ö¾ï¿½ï¿½
    {
        speed_lin = document.getElementsByClassName(axle_section[DelSessionName-1][1])
        speed_lin_fan = document.getElementsByClassName(axle_section[DelSessionName-1][1]+"a")   //ï¿½Ò·ï¿½Î»ï¿½ß£ï¿½ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.22
        speed_lin_d = document.getElementsByClassName(axle_section[DelSessionName-1][1]+"b")   //ï¿½Ò¶ï¿½Î»ï¿½ß£ï¿½ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.22
        cont_speed=document.getElementsByClassName('cont'+axle_section[DelSessionName-1][1])
        for(var speed_lin_j=0;speed_lin_j<speed_lin.length;speed_lin_j++){

            if('classList' in speed_lin[speed_lin_j]){
                !speed_lin[speed_lin_j].classList.contains('dux')?jizhoushixiao(speed_lin[speed_lin_j],speed_lin[speed_lin_j].lin_pro_filcolor, speed_lin[speed_lin_j].lin_pro_strcolor):""

            }
            else{
                var sliCla=speed_lin[speed_lin_j].className.baseVal.split(" ")
                if(!('dux' in sliCla)){
                    jizhoushixiao(speed_lin[speed_lin_j],speed_lin[speed_lin_j].lin_pro_filcolor, speed_lin[speed_lin_j].lin_pro_strcolor)
                }
            }
        }

        if(speed_lin_fan!=null||speed_lin_d!=null){
            for(var speed_fan_i=0;speed_fan_i<speed_lin_fan.length;speed_fan_i++) {
                //ï¿½Òµï¿½ï¿½ï¿½Ç°ï¿½ï¿½Î»ï¿½ß¶ï¿½Ó¦idï¿½ï¿½ï¿½ï¿½ï¿½ï¿½idÎªï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
                var speed_fan_id=speed_lin_fan[speed_fan_i].id
                for(var swich_i=0;swich_i<arr_1.length;swich_i++){
                    if(speed_fan_id==arr_1[swich_i]) {
                        for(var traSe_i=0;traSe_i<track_segment.length;traSe_i++){
                            if(track_segment[traSe_i][0]==arr_6[swich_i]-1){
                                if(speed_lin_fan[speed_fan_i].attributes.x1.value==track_segment[traSe_i][1]*45){       //ï¿½Ð¶Ï·ï¿½ï¿½ï¿½
                                    jizhoushixiao(speed_lin_fan[speed_fan_i], speed_lin_fan[speed_fan_i].linF_pro_filcol,speed_lin_fan[speed_fan_i].linF_pro_strcol)
                                }
                                else{
                                    jizhoushixiao(speed_lin_d[speed_fan_i],speed_lin_d[speed_fan_i].linD_pro_filcol,speed_lin_d[speed_fan_i].linD_pro_strcol)
                                }
                            }
                        }
                    }
                }
            }
        }
        sessionStorage.clear()
        cont_speed[0].firstChild.nodeValue=null
        DelSessionName=null
    }
    speed_str=AxleSpeed
    axle_speed_str=AxleSessionName
}
//ï¿½ï¿½Ê¾ï¿½ï¿½

function Carflag() {
    if(CarPVID.length>0){
        if(CarhisInRoadNo.length>0){

            for( var car_i=0;car_i<CarInRoadNo.length;car_i++){
                switch (CarInRoadType[car_i]){
                    case 1:              //ï¿½ß¼ï¿½
                        car_now(axle_logic_section,car_i)
                        break;
                    case 2:             //ï¿½ï¿½ï¿½ï¿½
                        car_now(axle_section,car_i)
                        break;
                    case 3:             //ï¿½ï¿½ï¿½ï¿½
                        car_now(switchdata,car_i)
                        break;
                }

            }
            if(CarDelete==1){
                switch (CarInRoadType[CarNum]){
                    case 1:              //ï¿½ß¼ï¿½
                        hiscar(axle_logic_section,CarInRoadNo[CarNum])
                        break;
                    case 2:             //ï¿½ï¿½ï¿½ï¿½
                        hiscar(axle_section,CarInRoadNo[CarNum])
                        break;
                    case 3:             //ï¿½ï¿½ï¿½ï¿½
                        hiscar(switchdata,CarInRoadNo[CarNum])
                        break;
                }
                //CarInRoadNo[CarNum]
            }
            else{

                for( var hiscar_i=0;hiscar_i<CarhisInRoadNo.length;hiscar_i++){

                    if(CarInRoadNo.indexOf(CarhisInRoadNo[hiscar_i])==-1){
                        switch (CarhisInRoadType[hiscar_i]){
                            case 1:              //ï¿½ß¼ï¿½
                                hiscar(axle_logic_section,CarhisInRoadNo[hiscar_i])
                                break;
                            case 2:             //ï¿½ï¿½ï¿½ï¿½
                                hiscar(axle_section,CarhisInRoadNo[hiscar_i])
                                break;
                            case 3:             //ï¿½ï¿½ï¿½ï¿½
                                hiscar(switchdata,CarhisInRoadNo[hiscar_i])
                                break;
                        }
                    }

                }
            }

        }
    }

    /* }*/
}
function hiscar(axl,hiscar_i) {
    for(var hisinr_i=0;hisinr_i<axl.length;hisinr_i++){
        if(axl[hisinr_i][0]==hiscar_i){
            var hisid='car'+axl[hisinr_i][1]

            var hiscar=document.getElementById(hisid)
            //          console.log(hiscar)
            var hisl_car=document.getElementById('l'+axl[hisinr_i][1])
            var hisr_car=document.getElementById('r'+axl[hisinr_i][1])
            if(hiscar!=null) {
                hiscar.setAttribute('fill', 'none')
                hiscar.setAttribute('stroke', 'none')
                hisl_car.setAttribute('fill', 'none')
                hisl_car.setAttribute('stroke', 'none')
                hisr_car.setAttribute('fill', 'none')
                hisr_car.setAttribute('stroke', 'none')
            }
            var hiscar_cont=document.getElementById('c'+axl[hisinr_i][1])
            if(hiscar_cont!=null){
                hiscar_cont.firstChild.nodeValue=""
            }
            var hislin=document.getElementById(axl[hisinr_i][1])
            if(hislin!=null){
                hislin.car=false
            }
        }
    }
}
function car_now(axle_section,car_i) {
    for(var inr_i=0;inr_i<axle_section.length;inr_i++){
        if(axle_section[inr_i][0]==CarInRoadNo[car_i]){

            var id='car'+axle_section[inr_i][1]

            var car=document.getElementById(id)
            if(car!=null){
                car.setAttribute('fill','blue')
                car.setAttribute('stroke','blue')
            }

            switch (CarDirect[car_i]) {
                case 0:
                    break;
                case 1:
                    var l_car=document.getElementById('l'+axle_section[inr_i][1])
                    if(l_car!=null){
                        l_car.setAttribute('fill','yellow')
                        l_car.setAttribute('stroke','yellow')
                    }

                    break;
                case 2:
                    var r_car=document.getElementById('r'+axle_section[inr_i][1])
                    if(r_car!=null) {
                        r_car.setAttribute('fill', 'yellow')
                        r_car.setAttribute('stroke', 'yellow')
                    }
                    break;
            }
            switch (CarShowType[car_i]) {
                case 1:                   //ï¿½ï¿½ï¿½ï¿½+Ä¿ï¿½ï¿½
                    var car_cont=document.getElementById('c'+axle_section[inr_i][1])
                    if(car_cont!=null) {
                        car_cont.firstChild.nodeValue = CarTID[car_i] + CarDID[car_i]
                    }
                    break;
                case 2:                   //ï¿½ï¿½ï¿½ï¿½+Ä¿ï¿½ï¿½
                    var car_cont=document.getElementById('c'+axle_section[inr_i][1])
                    if(car_cont!=null) {
                        car_cont.firstChild.nodeValue = CarPVID[car_i] + CarDID[car_i]
                    }
                    break;
            }
            var lin=document.getElementById(axle_section[inr_i][1])
            if(lin!=null) {
                lin.car = true
                lin.carPVID = CarPVID[car_i]           //ï¿½ï¿½ï¿½ï¿½ï¿?
                lin.carPTID = CarTID[car_i]            //ï¿½ï¿½ï¿½ï¿½ï¿?
                lin.carSID = CarSID[car_i]             //ï¿½ï¿½ï¿½Ðºï¿½
                lin.carDID = CarDID[car_i]             //Ä¿ï¿½ÄµØºï¿½
                lin.carType = CarType[car_i]           //ï¿½ï¿½ï¿½ï¿½
                lin.carMode = CarMode[car_i]           //ï¿½ï¿½ï¿½ï¿½Ä£Ê½
                lin.carNo = CarNo[car_i]
            }
        }
    }
}
//ï¿½Ð¶ï¿½ï¿½ï¿½ï¿½é³¤ï¿½È±È½ï¿½
arr_long=function (a,b) {
    if(a.length<b.length){
        return b
    }
    else{
        return a
    }
}
//ï¿½Ð¶Ï·ï¿½ï¿½ï¿½
fccc=function(diall_ind,diall_i,push_k) {
    var tt=[]
    for(var i=0;i<push_k.length;i++){

        for(var j=0;j<track_segment.length;j++){
            if(track_segment[j][0]==arr_6[push_k[i]])
            {
                if (diall_ind[diall_i].attributes.x1.value == track_segment[j][1] * 45){
                    tt.push("tru")
                }
                else{
                    tt.push("fal")
                }
            }
        }
    }
    return(tt.indexOf('tru'))
}
//ï¿½ï¿½ï¿½ï¿½ï¿½Ð³ï¿½
function D_q(JZ_red,JZ_red_fan,key_val,di,shib,shi_bl,shi_br,data_CI){
    if(JZ_red_fan!=null){
        if(data_CI[key_val]==1){
            for(var fan_swi=0;fan_swi<arr_1.length;fan_swi++){
                if(arr_1[fan_swi]==di){
                    for(var fan_str=0;fan_str<track_segment.length;fan_str++){
                        if(track_segment[fan_str][0]==arr_6[fan_swi]-1){
                            if(JZ_red_fan.attributes.x1.value==track_segment[fan_str][1]*45) {        //ï¿½ï¿½ï¿½ï¿½
                                if(data_CI[key_val+1] == 1){
                                    guz_fan(JZ_red,JZ_red_fan,'brown','brown')
                                }
                                else{
                                    guz_fan(JZ_red,JZ_red_fan,'black','black')
                                }
                            }
                            else {
                                if(data_CI[key_val+1] == 1){
                                    guz_zh(JZ_red,'brown','brown')
                                }
                                else{
                                    guz_zh(JZ_red,'black','black')
                                }

                            }
                        }
                    }
                }

            }
        }
        else if(data_CI[key_val]==0&&data_CI[key_val-1]==0&&data_CI[key_val-2]==0&&data_CI[key_val-3]==0&&data_CI[key_val+1]==0&&data_CI[key_val-6]==0){
            for (var fan_swi = 0; fan_swi < arr_1.length; fan_swi++) {
                if (arr_1[fan_swi] == di) {
                    for (var fan_str = 0; fan_str < track_segment.length; fan_str++) {
                        if (track_segment[fan_str][0] == arr_6[fan_swi] - 1) {
                            if (JZ_red_fan.attributes.x1.value == track_segment[fan_str][1] * 45) {        //ï¿½ï¿½ï¿½ï¿½
                                xuxian(JZ_red[0], 0)
                                xuxian(JZ_red_fan,0)
                                var name_val=name1.indexOf(JZ_red[0].id)
                                if(data_CI[name_val]==1){
                                    guz_fan(JZ_red,JZ_red_fan,'white','white')
                                }
                                else if(data_CI[name_val+2]==1){
                                    guz_fan(JZ_red,JZ_red_fan,'green','green')
                                }
                                else if(data_CI[name_val+1]==1){
                                    guz_fan(JZ_red,JZ_red_fan,'red','red')
                                }
                                else{
                                    guz_fan(JZ_red,JZ_red_fan,g_cor,g_cor)

                                }

                                guzhangqiechu(shib,'none', 'none')
                                guzhangqiechu(shi_br, 'none', 'none')
                                guzhangqiechu(shi_bl, 'black', 'black')

                            }
                            else {
                                xuxian(JZ_red[0], 0)
                                xuxian(JZ_red[1],0)
                                var name_val=name1.indexOf(JZ_red[0].id)
                                if(data_CI[name_val]==1){
                                    guz_zh(JZ_red,'white','white')
                                }
                                else if(data_CI[name_val+2]==1){
                                    guz_zh(JZ_red,'green','green')
                                }
                                else if(data_CI[name_val+1]==1){
                                    guz_zh(JZ_red,'red','red')
                                }
                                else{
                                    guz_zh(JZ_red,g_cor,g_cor)
                                }
                                guzhangqiechu(shib,'none', 'none')
                                guzhangqiechu(shi_br, 'none', 'none')
                                guzhangqiechu(shi_bl, 'none', 'none')

                            }
                        }
                    }
                }

            }
        }
    }
}
//ï¿½ï¿½ï¿½ï¿½Ê§Ð§
function D_s(JZ_red,JZ_red_fan,key_val,di,shib,shi_bl,shi_br,data_CI){
    if(JZ_red_fan!=null){
        if(data_CI[key_val]==1){
            for(var fan_swi=0;fan_swi<arr_1.length;fan_swi++){
                if(arr_1[fan_swi]==di){
                    for(var fan_str=0;fan_str<track_segment.length;fan_str++){
                        if(track_segment[fan_str][0]==arr_6[fan_swi]-1){
                            if(JZ_red_fan.attributes.x1.value==track_segment[fan_str][1]*45) {        //ï¿½ï¿½ï¿½ï¿½
                                guz_fan(JZ_red,JZ_red_fan,'brown','brown')
                                guz_fan(JZ_red,JZ_red_fan,'brown','brown')
                                chag_cor(JZ_red[1],g_cor,g_cor)
                            }
                            else {
                                guz_zh(JZ_red,'brown','brown')
                                chag_cor(JZ_red_fan,g_cor,g_cor)
                            }
                        }
                    }
                }

            }
        }
        else if(data_CI[key_val]==0&&data_CI[key_val-1]==0&&data_CI[key_val-2]==0&&data_CI[key_val-3]==0&&data_CI[key_val-4]==0&&data_CI[key_val-7]==0){
            for (var fan_swi = 0; fan_swi < arr_1.length; fan_swi++) {
                if (arr_1[fan_swi] == di) {
                    for (var fan_str = 0; fan_str < track_segment.length; fan_str++) {
                        if (track_segment[fan_str][0] == arr_6[fan_swi] - 1) {
                            if (JZ_red_fan.attributes.x1.value == track_segment[fan_str][1] * 45) {        //ï¿½ï¿½ï¿½ï¿½
                                xuxian(JZ_red[0], 0)
                                xuxian(JZ_red_fan,0)
                                var name_val=name1.indexOf(JZ_red[0].id)
                                if(data_CI[name_val]==1){
                                    guz_fan(JZ_red,JZ_red_fan,'white','white')
                                }
                                else if(data_CI[name_val+2]==1){
                                    guz_fan(JZ_red,JZ_red_fan,'green','green')
                                }
                                else if(data_CI[name_val+1]==1){
                                    guz_fan(JZ_red,JZ_red_fan,'red','red')
                                }
                                else{
                                    guz_fan(JZ_red,JZ_red_fan,g_cor,g_cor)
                                }
                                guzhangqiechu(shib,'none', 'none')
                                guzhangqiechu(shi_br, 'none', 'none')
                                guzhangqiechu(shi_bl, 'black', 'black')

                            }
                            else {
                                xuxian(JZ_red[0], 0)
                                xuxian(JZ_red[1],0)
                                var name_val=name1.indexOf(JZ_red[0].id)
                                if(data_CI[name_val]==1){
                                    guz_zh(JZ_red,'white','white')
                                }
                                else if(data_CI[name_val+2]==1){
                                    guz_zh(JZ_red,'green','green')
                                }
                                else if(data_CI[name_val+1]==1){
                                    guz_zh(JZ_red,'red','red')
                                }
                                else{
                                    guz_zh(JZ_red,g_cor,g_cor)
                                }
                                guzhangqiechu(shib,'none', 'none')
                                guzhangqiechu(shi_br, 'none', 'none')
                                guzhangqiechu(shi_bl, 'none', 'none')
                            }
                        }
                    }
                }

            }
        }
    }
}
//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
function D_r(JZ_red,JZ_red_fan,key_val,di,shib,shi_bl,shi_br,data_CI) {
    if(JZ_red_fan!=null){
        if(data_CI[key_val]==1){
            for(var fan_swi=0;fan_swi<arr_1.length;fan_swi++){
                if(arr_1[fan_swi]==di){
                    for(var fan_str=0;fan_str<track_segment.length;fan_str++){
                        if(track_segment[fan_str][0]==arr_6[fan_swi]-1){
                            if(JZ_red_fan.attributes.x1.value==track_segment[fan_str][1]*45) {        //ï¿½ï¿½ï¿½ï¿½
                                if(data_CI[key_val+3] == 1){
                                    guz_fan(JZ_red,JZ_red_fan,'brown','brown')
                                }
                                else if(data_CI[key_val+2] == 1){
                                    guz_fan(JZ_red,JZ_red_fan,'black','black')
                                }
                                else{
                                    guz_fan(JZ_red,JZ_red_fan,'red','red')
                                }
                            }
                            else {
                                if(data_CI[key_val+3] == 1){
                                    guz_zh(JZ_red,'brown','brown')
                                }
                                else if(data_CI[key_val+2] == 1){
                                    guz_zh(JZ_red,'black','black')
                                }
                                else{
                                    guz_zh(JZ_red,'red','red')
                                }
                            }
                        }
                    }
                }

            }
        }
        else if(data_CI[key_val]==0&&data_CI[key_val-1]==0&&data_CI[key_val+1]==0&&data_CI[key_val+2]==0&&data_CI[key_val+3]==0&&data_CI[key_val-4]==0){
            for (var fan_swi = 0; fan_swi < arr_1.length; fan_swi++) {
                if (arr_1[fan_swi] == di) {
                    for (var fan_str = 0; fan_str < track_segment.length; fan_str++) {
                        if (track_segment[fan_str][0] == arr_6[fan_swi] - 1) {
                            if (JZ_red_fan.attributes.x1.value == track_segment[fan_str][1] * 45) {        //ï¿½ï¿½ï¿½ï¿½
                                xuxian(JZ_red[0], 0)
                                xuxian(JZ_red_fan,0)
                                var name_val=name1.indexOf(JZ_red[0].id)
                                if(data_CI[name_val]==1){
                                    guz_fan(JZ_red,JZ_red_fan,'white','white')
                                    /* jizhoushixiao(JZ_red[0],'white','white')
                                     jizhoushixiao(JZ_red_fan,'white','white')*/
                                }
                                else if(data_CI[name_val+2]==1){
                                    guz_fan(JZ_red,JZ_red_fan,'green','green')
                                }
                                else if(data_CI[name_val+1]==1){
                                    guz_fan(JZ_red,JZ_red_fan,'red','red')
                                }
                                else{
                                    guz_fan(JZ_red,JZ_red_fan,g_cor,g_cor)
                                }
                                guzhangqiechu(shib,'none', 'none')
                                guzhangqiechu(shi_br, 'none', 'none')
                                guzhangqiechu(shi_bl, 'black', 'black')

                            }
                            else {
                                xuxian(JZ_red[0], 0)
                                xuxian(JZ_red[1],0)
                                var name_val=name1.indexOf(JZ_red[0].id)
                                if(data_CI[name_val]==1){
                                    guz_zh(JZ_red,'white','white')
                                }
                                else if(data_CI[name_val+1]==1){
                                    guz_zh(JZ_red,'red','red')
                                }
                                else if(data_CI[name_val+2]==1){
                                    guz_zh(JZ_red,'green','green')
                                }

                                else{
                                    guz_zh(JZ_red,g_cor,g_cor)
                                }
                                guzhangqiechu(shib,'none', 'none')
                                guzhangqiechu(shi_br, 'none', 'none')
                                guzhangqiechu(shi_bl, 'none', 'none')
                            }
                        }
                    }
                }
            }
        }
    }
}
//ï¿½ï¿½ï¿½ï¿½
function guz_fan(JZ_red,JZ_red_fan,cor,corl){
    if(JZ_red[0].id=='32DG'||JZ_red[0].id=='33DG'||JZ_red[0].id=='30DG'||JZ_red[0].id=='21DG'||JZ_red[0].id=='20DG'||JZ_red[0].id=='18DG'||JZ_red[0].id=='17DG'||JZ_red[0].id=='16DG'||JZ_red[0].id=='31DG'){
        jizhoushixiao(JZ_red[0], cor,corl)
        jizhoushixiao(JZ_red[3],cor,corl)
        jizhoushixiao(JZ_red[2],cor,corl)
        jizhoushixiao(JZ_red_fan,cor,corl)
    }
    else{
        jizhoushixiao(JZ_red[0], cor,corl)
        jizhoushixiao(JZ_red_fan, cor,corl)
    }
}
function guz_zh(JZ_red,cor,col) {
    if (JZ_red[0].id == '23DG' || JZ_red[0].id == '2DG' || JZ_red[0].id == '4DG' || JZ_red[0].id == 'DG01037') {
        for (var jz_ri = 0; jz_ri < JZ_red.length - 1; jz_ri++) {
            jizhoushixiao(JZ_red[jz_ri],cor,col)
        }
    }
    else {

        jizhoushixiao(JZ_red[0],cor,col)
        jizhoushixiao(JZ_red[1], cor,col)
        //}
    }
}
//ï¿½ï¿½ï¿½ï¿½×¹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
function D_w(JZ_red,JZ_red_fan,key_val,di,shib,shi_bl,shi_br,data_CI) {
    if(JZ_red_fan!=null) {
        if (data_CI[key_val] == 1) {
            for (var fan_swi = 0; fan_swi < arr_1.length; fan_swi++) {
                if (arr_1[fan_swi] == di) {
                    for (var fan_str = 0; fan_str < track_segment.length; fan_str++) {
                        if (track_segment[fan_str][0] == arr_6[fan_swi] - 1) {
                            if (JZ_red_fan.attributes.x1.value == track_segment[fan_str][1] * 45) {        //ï¿½ï¿½ï¿½ï¿½
                                if(data_CI[key_val+2] == 1){
                                    guz_fan(JZ_red,JZ_red_fan,'brown','brown')
                                }
                                else if(data_CI[key_val+1] == 1){
                                    guz_fan(JZ_red,JZ_red_fan,'black','black')
                                }
                                else if(data_CI[key_val-1] == 1){
                                    guz_fan(JZ_red,JZ_red_fan,'red','red')
                                }

                                else{
                                    guz_fan(JZ_red,JZ_red_fan,'white','white')
                                }
                            }
                            else {
                                if(data_CI[key_val+2] == 1){
                                    guz_zh(JZ_red,'brown','brown')
                                }
                                else if(data_CI[key_val+1] == 1){
                                    guz_zh(JZ_red,'black','black')
                                }
                                else if(data_CI[key_val-1] == 1){
                                    guz_zh(JZ_red,'red','red')
                                }

                                else{
                                    guz_zh(JZ_red,'white','white')
                                }
                            }
                        }
                    }
                    speed()
                }

            }
        }
        else if (data_CI[key_val] == 0 && data_CI[key_val - 1] == 0 && data_CI[key_val + 1] == 0 && data_CI[key_val + 2] == 0 && data_CI[key_val - 2] == 0 && data_CI[key_val - 5] == 0) {
            for (var fan_swi = 0; fan_swi < arr_1.length; fan_swi++) {
                if (arr_1[fan_swi] == di) {
                    for (var fan_str = 0; fan_str < track_segment.length; fan_str++) {
                        if (track_segment[fan_str][0] == arr_6[fan_swi] - 1) {
                            if (JZ_red_fan.attributes.x1.value == track_segment[fan_str][1] * 45) {        //ï¿½ï¿½ï¿½ï¿½
                                xuxian(JZ_red[0], 0)
                                xuxian(JZ_red_fan, 0)
                                var name_val=name1.indexOf(JZ_red[0].id)
                                if(data_CI[name_val]==1){
                                    guz_fan(JZ_red,JZ_red_fan,'white','white')
                                }
                                else if(data_CI[name_val+2]==1){
                                    guz_fan(JZ_red,JZ_red_fan,'green','green')
                                }
                                else if(data_CI[name_val+1]==1){
                                    guz_fan(JZ_red,JZ_red_fan,'red','red')
                                }
                                else{
                                    guz_fan(JZ_red,JZ_red_fan,g_cor,g_cor)
                                }

                                guzhangqiechu(shib, 'none', 'none')
                                guzhangqiechu(shi_br, 'none', 'none')
                                guzhangqiechu(shi_bl, 'black', 'black')

                            }
                            else {
                                xuxian(JZ_red[0], 0)
                                xuxian(JZ_red[1], 0)
                                var name_val=name1.indexOf(JZ_red[0].id)
                                if(data_CI[name_val]==1){
                                    guz_zh(JZ_red,'white','white')

                                }
                                else if(data_CI[name_val+2]==1){
                                    guz_zh(JZ_red,'green','green')
                                }
                                else if(data_CI[name_val+1]==1){
                                    guz_zh(JZ_red,'red','red')
                                }
                                else{
                                    guz_zh(JZ_red,g_cor,g_cor)
                                }
                                guzhangqiechu(shib, 'none', 'none')
                                guzhangqiechu(shi_br, 'none', 'none')
                                guzhangqiechu(shi_bl, 'none', 'none')
                            }
                        }
                    }
                    speed()
                }
            }
        }
    }
}
//ï¿½ï¿½ï¿½ï¿½ï¿½Â·ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
function D_f(JZ_red,JZ_red_fan,key_val,di,shib,shi_bl,shi_br,data_CI) {
    if(JZ_red_fan!=null) {
        var nx,nm
        if (data_CI[key_val] == 1) {
            for (var fan_swi = 0; fan_swi < arr_1.length; fan_swi++) {
                if (arr_1[fan_swi] == di) {
                    for (var fan_str = 0; fan_str < track_segment.length; fan_str++) {
                        if (track_segment[fan_str][0] == arr_6[fan_swi] - 1) {
                            if (JZ_red_fan.attributes.x1.value == track_segment[fan_str][1] * 45) {        //ï¿½ï¿½ï¿½ï¿½
                                xuxian(JZ_red[0],6)
                                xuxian(JZ_red_fan, 6)
                                xuxian(JZ_red[1], 0)
                            }
                            else {
                                xuxian(JZ_red[0], 6)
                                xuxian(JZ_red[1], 6)
                                xuxian(JZ_red_fan, 0)
                            }
                        }
                    }
                }
            }
        }
        else if (data_CI[key_val] == 0 && data_CI[key_val - 3] == 0 && data_CI[key_val + 1] == 0 && data_CI[key_val + 2] == 0 && data_CI[key_val + 3] == 0 && data_CI[key_val + 4] == 0) {
            for (var fan_swi = 0; fan_swi < arr_1.length; fan_swi++) {
                if (arr_1[fan_swi] == di) {
                    for (var fan_str = 0; fan_str < track_segment.length; fan_str++) {
                        if (track_segment[fan_str][0] == arr_6[fan_swi] - 1) {
                            if (JZ_red_fan.attributes.x1.value == track_segment[fan_str][1] * 45) {        //ï¿½ï¿½ï¿½ï¿½
                                xuxian(JZ_red[0], 0)
                                xuxian(JZ_red_fan, 0)
                                guzhangqiechu(shib, 'none', 'none')
                                guzhangqiechu(shi_br, 'none', 'none')
                                guzhangqiechu(shi_bl, 'black', 'black')
                            }
                            else {
                                xuxian(JZ_red[0], 0)
                                xuxian(JZ_red[1], 0)
                                guzhangqiechu(shib, 'none', 'none')
                                guzhangqiechu(shi_br, 'none', 'none')
                                guzhangqiechu(shi_bl, 'none', 'none')
                            }
                        }
                    }
                    speed()
                }
            }
        }
    }
}
//ï¿½Ð¶ï¿½dataci
function dataci(){

}
//ï¿½ß±ï¿½É«Ê±ï¿½Ð¶ï¿½ï¿½Ç·ï¿½Õ¼ï¿½ï¿½
function zhanyo(diall,dibll,noe_lin,push_k,push_zy,key_val,cor,data_CI) {
    if(diall.length == 0 && noe_lin.length ==1) {
        for (var vn= 0; vn < noe_lin.length; vn++) {
            if (data_CI[key_val] == 0) {
                if(data_CI[key_val+1]==0&&data_CI[key_val-1]==0){
                    if(data_CI[key_val+4]==1){
                        jizhoushixiao(noe_lin[vn], 'red', 'red')
                    }
                    else if(data_CI[key_val+5]==1){
                        jizhoushixiao(noe_lin[vn], 'white', 'white')
                    }
                    else if(data_CI[key_val+10]==1){
                        jizhoushixiao(noe_lin[vn],'#ff6633','#ff6633')
                    }
                    else{
                        jizhoushixiao(noe_lin[vn], '#848284', '#848284')
                    }
                    speed()

                }

                else if(data_CI[key_val+1]==1){
                    jizhoushixiao(noe_lin[vn], 'green', 'green')
                    speed()
                }
                else {
                    jizhoushixiao(noe_lin[vn], 'white', 'white')
                    speed()
                }
            }
            else {
                jizhoushixiao(noe_lin[vn], cor, cor)
            }
        }
    }
    else if(diall.length == 0 && noe_lin.length >2&&noe_lin[0].id!='25-28DG'&&noe_lin[0].id!='16DG'){

        for (var vn = 0; vn < noe_lin.length; vn++) {
            var noeCl= noe_lin[vn].className.baseVal.split(" ")
            if(!'dux' in  noeCl) {
                if (data_CI[key_val] == 0) {

                    if (data_CI[key_val - 1] == 1) {
                        jizhoushixiao(noe_lin[vn], 'red', 'red')
                    }
                    else {

                        if (data_CI[key_val + 4] == 1) {
                            jizhoushixiao(noe_lin[vn], 'red', 'red')
                        }
                        else if (data_CI[key_val + 5] == 1) {
                            jizhoushixiao(noe_lin[vn], 'white', 'white')
                        }
                        else if(data_CI[key_val+10]==1){
                            jizhoushixiao(noe_lin[vn],'#ff6633','#ff6633')
                        }
                        else {
                            jizhoushixiao(noe_lin[vn], '#848284', '#848284')
                        }
                        speed()
                    }
                }
                else {
                    if (data_CI[key_val - 1] == 0) {
                        jizhoushixiao(noe_lin[vn], cor, cor)
                    }
                    else {
                        jizhoushixiao(noe_lin[vn], rig_cor, rig_cor)
                    }
                }
            }
        }
    }
    else{
        for (var dia_i = 0; dia_i < diall.length; dia_i++) {
            var diall_ind = diall[dia_i]
            var dibll_ind = dibll[dia_i]
            var dicll = []
            var pushi
            //pushi<push_zy.length
            dicll = arr_long(diall_ind, dibll_ind) //Ñ¡ï¿½ï¿½Ï³ï¿½ï¿½ï¿½ï¿½ï¿?
            var dibll_i
            var diall_i
            for (var dicll_i = 0; dicll_i < dicll.length; dicll_i++) {
                dicll_i < dibll_ind.length ? dibll_i = dicll_i : dibll_i = dibll_i

                dicll_i < diall_ind.length ? diall_i = dicll_i : diall_i = diall_i

                if (fccc(diall_ind, diall_i, push_k) != -1) {         //ï¿½ï¿½ï¿½ï¿½

                    for (var v = 0; v < noe_lin.length; v++) {
                        var clB_r=noe_lin[v].className.baseVal.split(" ")
                        if (data_CI[key_val] == 0) {
                            if (clB_r.length > 2) {
                                for (var push_pushzy_i = 0; push_pushzy_i < push_zy.length; push_pushzy_i++) {
                                    if (clB_r.indexOf(push_zy[push_pushzy_i]) != -1) {
                                        if(data_CI[key_val+1]==0&&data_CI[key_val-1]==0){
                                            jizhoushixiao(noe_lin[v], '#848284', '#848284')
                                            speed()
                                        }

                                        else if(data_CI[key_val+1]==1){
                                            jizhoushixiao(noe_lin[v], 'green', 'green')
                                        }

                                        else {
                                            jizhoushixiao(noe_lin[v], 'white', 'white')
                                            speed()
                                        }
                                    }
                                }
                            }
                            else {
                                if(data_CI[key_val+1]==0&&data_CI[key_val-1]==0){
                                    jizhoushixiao(noe_lin[v], '#848284', '#848284')
                                    speed()
                                }

                                else if(data_CI[key_val+1]==1){
                                    jizhoushixiao(noe_lin[v], 'green', 'green')
                                }
                                else if(data_CI[key_val+11]==1){
                                    jizhoushixiao(noe_lin[vn],'#ff6633','#ff6633')
                                }
                                else {
                                    jizhoushixiao(noe_lin[v], 'white', 'white')
                                    speed()
                                }
                            }
                            if(data_CI[key_val+1]==0&&data_CI[key_val-1]==0){
                                jizhoushixiao(diall_ind[diall_i], '#848284', '#848284')
                                speed()
                            }

                            else if(data_CI[key_val+1]==1){
                                jizhoushixiao(diall_ind[diall_i], 'green', 'green')
                            }
                            else if(data_CI[key_val+11]==1){
                                jizhoushixiao(noe_lin[vn],'#ff6633','#ff6633')
                            }
                            else {
                                jizhoushixiao(diall_ind[diall_i], 'white', 'white')
                                speed()
                            }
                            var fanwei_c=diall_ind[diall_i].id

                            var fan_lin=document.getElementsByClassName(fanwei_c+'a')
                            for(var fan_li_i=0;fan_li_i<fan_lin.length;fan_li_i++){
                                if(data_CI[key_val+1]==0&&data_CI[key_val-1]==0){
                                    jizhoushixiao(fan_lin[fan_li_i], '#848284', '#848284')
                                    speed()
                                }
                                else if(data_CI[key_val+1]==1){
                                    jizhoushixiao(fan_lin[fan_li_i],'green', 'green')
                                }
                                else if(data_CI[key_val+11]==1){
                                    jizhoushixiao(noe_lin[vn],'#ff6633','#ff6633')
                                }
                                else {
                                    jizhoushixiao(fan_lin[fan_li_i], 'white', 'white')
                                    speed()
                                }
                            }
                        }
                        else {
                            if (clB_r.length > 2) {
                                for (var push_pushzy_i = 0; push_pushzy_i < push_zy.length; push_pushzy_i++) {
                                    if (clB_r.indexOf(push_zy[push_pushzy_i]) != -1) {
                                        jizhoushixiao(noe_lin[v],cor, cor)
                                    }
                                }
                            }
                            else {
                                jizhoushixiao(noe_lin[v], cor, cor)
                            }
                            jizhoushixiao(diall_ind[diall_i], cor, cor)
                            var fanwei_c=diall_ind[diall_i].id

                            var fan_lin=document.getElementsByClassName(fanwei_c+'a')
                            for(var fan_li_i=0;fan_li_i<fan_lin.length;fan_li_i++){
                                jizhoushixiao(fan_lin[fan_li_i], cor, cor)
                            }
                        }
                    }
                }
                else {
                    for (var esv = 0; esv < noe_lin.length; esv++) {
                        var el_clB_r=noe_lin[esv].className.baseVal.split(" ")
                        if (data_CI[key_val] == 0) {
                            if (el_clB_r.length > 2) {
                                for (var push_pushzy_i = 0; push_pushzy_i < push_zy.length; push_pushzy_i++) {
                                    if (el_clB_r.indexOf(push_zy[push_pushzy_i]) != -1) {
                                        if(data_CI[key_val+1]==0&&data_CI[key_val-1]==0){
                                            var D_val=name1.indexOf(push_zy[push_pushzy_i])
                                            if(data_CI[D_val+12]==1){
                                                jizhoushixiao(noe_lin[esv], 'red', 'red')
                                                jizhoushixiao(dibll_ind[dibll_i], 'red', 'red')
                                            }
                                            else if(data_CI[D_val+13]==1){
                                                jizhoushixiao(noe_lin[esv], 'white', 'white')
                                                jizhoushixiao(dibll_ind[dibll_i], 'white', 'white')
                                            }
                                            else{
                                                jizhoushixiao(noe_lin[esv], '#848284', '#848284')
                                                jizhoushixiao(dibll_ind[dibll_i], '#848284', '#848284')
                                            }
                                            speed()
                                        }

                                        else if(data_CI[key_val+1]==1){
                                            jizhoushixiao(noe_lin[esv], 'green', 'green')
                                            jizhoushixiao(dibll_ind[dibll_i], 'green', 'green')
                                            speed()
                                        }
                                        else {
                                            jizhoushixiao(noe_lin[esv], 'white', 'white')
                                            jizhoushixiao(dibll_ind[dibll_i], 'white', 'white')
                                            speed()
                                        }
                                    }
                                }
                            }
                            else {
                                if(data_CI[key_val+1]==0&&data_CI[key_val-1]==0){
                                    var D_val=name1.indexOf(push_zy[push_pushzy_i])
                                    if(data_CI[D_val+12]==1){
                                        jizhoushixiao(noe_lin[esv], 'red', 'red')
                                    }
                                    else if(data_CI[D_val+13]==1){
                                        jizhoushixiao(noe_lin[esv], 'white', 'white')
                                    }
                                    else{
                                        jizhoushixiao(noe_lin[esv], '#848284', '#848284')
                                    }
                                    speed()
                                }

                                else if(data_CI[key_val+1]==1){
                                    jizhoushixiao(noe_lin[esv], 'green', 'green')
                                    speed()
                                }
                                else {
                                    jizhoushixiao(noe_lin[esv], 'white', 'white')
                                    speed()
                                }
                            }
                        }
                        else {
                            if (el_clB_r.length > 2) {
                                for (var push_pushzy_i = 0; push_pushzy_i < push_zy.length; push_pushzy_i++) {
                                    if (el_clB_r.indexOf(push_zy[push_pushzy_i]) != -1) {
                                        jizhoushixiao(noe_lin[esv], cor,cor)
                                    }
                                }
                            }
                            else {
                                jizhoushixiao(noe_lin[esv], cor,  cor)
                            }
                            jizhoushixiao(dibll_ind[dibll_i], cor, cor)
                        }
                    }
                }
            }

        }

    }
}
//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½

/*ï¿½Ö½ï¿½className*/
function splitClas(clasname){
    var sliCla=clasname.className.baseVal.split(" ")
    return ('dux' in sliCla)
}
function zy_white(diall,dibll,noe_lin,push_k,push_zy,key_val,cor,rig_cor,k,data_CI) {
    if (diall.length == 0 && noe_lin.length ==1) {

        for (var vn = 0; vn < noe_lin.length; vn++) {
            if (data_CI[key_val] == 0) {
                if(data_CI[key_val-1]==1 ){
                    jizhoushixiao(noe_lin[vn], 'red', 'red')
                }
                else{
                    if(k==1){
                        if(data_CI[key_val+5]==1){
                            jizhoushixiao(noe_lin[vn], 'red', 'red')
                        }
                        else if(data_CI[key_val+6]==1){
                            jizhoushixiao(noe_lin[vn], 'white', 'white')
                            speed()
                        }
                        else if (data_CI[key_val + 10] == 1) {
                            jizhoushixiao(noe_lin[vn], g_pro, g_pro)
                        }
                        else{
                            jizhoushixiao(noe_lin[vn], '#848284', '#848284')
                        }
                    }
                    else{
                        if(data_CI[key_val+3]==1){
                            jizhoushixiao(noe_lin[vn], 'red', 'red')
                        }
                        else if(data_CI[key_val+4]==1){
                            jizhoushixiao(noe_lin[vn], 'white', 'white')
                        }
                        else if (data_CI[key_val + 10] == 1) {
                            jizhoushixiao(noe_lin[vn], g_pro, g_pro)
                        }
                        else{
                            jizhoushixiao(noe_lin[vn], '#848284', '#848284')
                        }
                        speed()
                    }
                }
            }
            else {
                if (data_CI[key_val - 1] == 0) {
                    jizhoushixiao(noe_lin[vn], cor, cor)
                }
                else {
                    jizhoushixiao(noe_lin[vn], rig_cor, rig_cor)
                }
            }
        }
    }
    else if(diall.length == 0 && noe_lin.length >2&&noe_lin[0].id!='25-28DG'&&noe_lin[0].id!='16DG'){

        for (var vn = 0; vn < noe_lin.length; vn++) {
            var noeCl= noe_lin[vn].className.baseVal.split(" ")
            if(!'dux' in  noeCl) {
                if (data_CI[key_val] == 0) {

                    if (data_CI[key_val - 1] == 1) {
                        jizhoushixiao(noe_lin[vn], 'red', 'red')
                    }
                    else {
                        if (k == 1) {
                            if (data_CI[key_val + 5] == 1) {
                                jizhoushixiao(noe_lin[vn], 'red', 'red')
                            }
                            else if (data_CI[key_val + 6] == 1) {
                                jizhoushixiao(noe_lin[vn], 'white', 'white')
                            }
                            else if (data_CI[key_val + 10] == 1) {
                                jizhoushixiao(noe_lin[vn], g_pro, g_pro)
                            }
                            else {
                                jizhoushixiao(noe_lin[vn], '#848284', '#848284')
                            }
                            speed()
                        }
                        else {
                            if (data_CI[key_val + 3] == 1) {
                                jizhoushixiao(noe_lin[vn], 'red', 'red')
                            }
                            else if (data_CI[key_val + 4] == 1) {
                                jizhoushixiao(noe_lin[vn], 'white', 'white')
                            }
                            else if (data_CI[key_val + 10] == 1) {
                                jizhoushixiao(noe_lin[vn], g_pro, g_pro)
                            }
                            else {
                                jizhoushixiao(noe_lin[vn], '#848284', '#848284')
                            }
                            speed()
                        }
                    }
                }
                else {
                    if (data_CI[key_val - 1] == 0) {
                        jizhoushixiao(noe_lin[vn], cor, cor)
                    }
                    else {
                        jizhoushixiao(noe_lin[vn], rig_cor, rig_cor)
                    }
                }
            }
        }
    }
    else {
        for (var dia_i = 0; dia_i < diall.length; dia_i++) {
            var diall_ind = diall[dia_i]
            var dibll_ind = dibll[dia_i]
            var dicll = []
            var pushi
            dicll = arr_long(diall_ind, dibll_ind) //Ñ¡ï¿½ï¿½Ï³ï¿½ï¿½ï¿½ï¿½ï¿?
            var dibll_i
            var diall_i
            for (var dicll_i = 0; dicll_i < dicll.length; dicll_i++) {
                dicll_i < dibll_ind.length ? dibll_i = dicll_i : dibll_i = dibll_i

                dicll_i < diall_ind.length ? diall_i = dicll_i : diall_i = diall_i

                if (fccc(diall_ind, diall_i, push_k) != -1) {         //ï¿½ï¿½ï¿½ï¿½

                    for (var v = 0; v < noe_lin.length; v++) {
                        var clB = noe_lin[v].className.baseVal.split(" ")
                        if (data_CI[key_val] == 0) {
                            if (clB.length > 2) {
                                // console.log("ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½"+noe_lin[v])
                                for (var push_pushzy_i = 0; push_pushzy_i < push_zy.length; push_pushzy_i++) {

                                    if (clB.indexOf(push_zy[push_pushzy_i]) != -1) {
                                        if(data_CI[key_val-1] == 1){
                                            jizhoushixiao(noe_lin[v], 'red', 'red')
                                        }
                                        else{
                                            if(k==1){
                                                if(data_CI[key_val+5]==1){
                                                    jizhoushixiao(noe_lin[v], 'red', 'red')
                                                }
                                                else if(data_CI[key_val+6]==1){
                                                    jizhoushixiao(noe_lin[v], 'white', 'white')
                                                }
                                                else if (data_CI[key_val + 11] == 1) {
                                                    jizhoushixiao(noe_lin[vn], g_pro, g_pro)
                                                }
                                                else{
                                                    jizhoushixiao(noe_lin[v], '#848284', '#848284')
                                                }
                                                speed()
                                            }
                                            else{
                                                var D_val=name1.indexOf(push_zy[push_pushzy_i])
                                                if(data_CI[D_val+12]==1){
                                                    jizhoushixiao(noe_lin[v], 'red', 'red')
                                                }
                                                else if(data_CI[D_val+13]==1){
                                                    jizhoushixiao(noe_lin[v], 'white', 'white')
                                                }
                                                else{
                                                    jizhoushixiao(noe_lin[v], '#848284', '#848284')
                                                }
                                                speed()
                                                var fanwei_c=diall_ind[diall_i].id

                                                var fan_lin=document.getElementsByClassName(fanwei_c+'a')
                                                for(var fan_li_i=0;fan_li_i<fan_lin.length;fan_li_i++){

                                                    if(k==1){
                                                        if(data_CI[key_val+5]==1){
                                                            jizhoushixiao(fan_lin[fan_li_i], 'red', 'red')
                                                        }
                                                        else if(data_CI[key_val+6]==1){
                                                            jizhoushixiao(fan_lin[fan_li_i], 'white', 'white')
                                                        }
                                                        else if (data_CI[key_val + 11] == 1) {
                                                            jizhoushixiao(noe_lin[vn], g_pro, g_pro)
                                                        }
                                                        else{
                                                            jizhoushixiao(fan_lin[fan_li_i], '#848284', '#848284')
                                                        }
                                                        speed()
                                                    }
                                                    else{
                                                        var D_val=name1.indexOf(push_zy[push_pushzy_i])
                                                        if(data_CI[D_val+12]==1){
                                                            jizhoushixiao(fan_lin[fan_li_i], 'red', 'red')
                                                        }
                                                        else if(data_CI[D_val+13]==1){
                                                            jizhoushixiao(fan_lin[fan_li_i], 'white', 'white')
                                                        }
                                                        else{
                                                            jizhoushixiao(fan_lin[fan_li_i], '#848284', '#848284')
                                                        }
                                                        speed()
                                                    }
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                            else {
                                if(data_CI[key_val-1] == 1){
                                    jizhoushixiao(noe_lin[v], 'red', 'red')
                                }
                                else{
                                    var D_val=name1.indexOf(push_zy[push_pushzy_i])
                                    if(k==1){
                                        if(data_CI[key_val+5]==1){
                                            jizhoushixiao(noe_lin[v], 'red', 'red')
                                            jizhoushixiao(diall_ind[diall_i], 'red', 'red')
                                        }
                                        else if(data_CI[key_val+6]==1){
                                            jizhoushixiao(noe_lin[v], 'white', 'white')
                                            jizhoushixiao(diall_ind[diall_i], 'white', 'white')
                                        }
                                        else if (data_CI[key_val + 11] == 1) {
                                            jizhoushixiao(noe_lin[vn], g_pro, g_pro)
                                        }
                                        else{
                                            jizhoushixiao(noe_lin[v], '#848284', '#848284')
                                            jizhoushixiao(diall_ind[diall_i], '#848284', '#848284')
                                        }
                                        speed()
                                    }
                                    else{
                                        if(data_CI[D_val+12]==1){
                                            jizhoushixiao(noe_lin[v], 'red', 'red')
                                            jizhoushixiao(diall_ind[diall_i], 'red', 'red')
                                        }
                                        else if(data_CI[D_val+13]==1){
                                            jizhoushixiao(noe_lin[v], 'white', 'white')
                                            jizhoushixiao(diall_ind[diall_i], 'white', 'white')
                                        }
                                        else{
                                            jizhoushixiao(noe_lin[v], '#848284', '#848284')
                                            jizhoushixiao(diall_ind[diall_i], '#848284', '#848284')
                                        }
                                        speed()
                                    }
                                }
                            }
                        }
                        else {
                            if (data_CI[key_val - 1] == 0) {
                                if (clB.length > 2) {
                                    for (var push_pushzy_i = 0; push_pushzy_i < push_zy.length; push_pushzy_i++) {
                                        if (clB.indexOf(push_zy[push_pushzy_i]) != -1) {
                                            jizhoushixiao(noe_lin[v], cor, cor)
                                        }
                                    }
                                }
                                else {
                                    jizhoushixiao(noe_lin[v], cor, cor)
                                }
                                jizhoushixiao(diall_ind[diall_i], cor, cor)

                                var fanwei_c=diall_ind[diall_i].id

                                var fan_lin=document.getElementsByClassName(fanwei_c+'a')
                                for(vafan_li_i=0;fan_li_i<fan_lin.length;fan_li_i++){
                                    jizhoushixiao(fan_lin[fan_li_i], cor, cor)
                                }
                            }
                            else {
                                if (clB.length > 2) {
                                    for (var push_pushzy_i = 0; push_pushzy_i < push_zy.length; push_pushzy_i++) {
                                        if (clB.indexOf(push_zy[push_pushzy_i]) != -1) {
                                            jizhoushixiao(noe_lin[v], rig_cor, rig_cor)
                                        }
                                    }
                                }
                                else {
                                    jizhoushixiao(noe_lin[v], rig_cor, rig_cor)
                                }
                                jizhoushixiao(diall_ind[diall_i], rig_cor, rig_cor)
                                var fanwei_c=diall_ind[diall_i].id

                                var fan_lin=document.getElementsByClassName(fanwei_c+'a')
                                for(var fan_li_i=0;fan_li_i<fan_lin.length;fan_li_i++){
                                    jizhoushixiao(fan_lin[fan_li_i], rig_cor, rig_cor)
                                }
                            }
                        }
                    }
                }

                else {

                    for (var esv = 0; esv < noe_lin.length; esv++) {
                        var el_clB = noe_lin[esv].className.baseVal.split(" ")
                        if (data_CI[key_val] == 0) {
                            if (el_clB.length > 2) {
                                for (var push_pushzy_i = 0; push_pushzy_i < push_zy.length; push_pushzy_i++) {
                                    if (el_clB.indexOf(push_zy[push_pushzy_i]) != -1) {
                                        if(data_CI[key_val-1] == 1){
                                            jizhoushixiao(noe_lin[esv], 'red', 'red')
                                            jizhoushixiao(dibll_ind[dibll_i], 'red', 'red')
                                        }
                                        else{
                                            if(k==1){
                                                if(data_CI[key_val+5]==1){
                                                    jizhoushixiao(noe_lin[esv], 'red', 'red')
                                                    jizhoushixiao(dibll_ind[dibll_i], 'red', 'red')
                                                }
                                                else if(data_CI[key_val+6]==1){
                                                    jizhoushixiao(noe_lin[esv], 'white', 'white')
                                                    jizhoushixiao(dibll_ind[dibll_i], 'white', 'white')
                                                }

                                                else{
                                                    jizhoushixiao(noe_lin[esv],'#848284', '#848284')
                                                    jizhoushixiao(dibll_ind[dibll_i],'#848284', '#848284')
                                                }
                                                speed()
                                            }
                                            else{
                                                var D_val=name1.indexOf(push_zy[push_pushzy_i])
                                                if(data_CI[D_val+12]==1){
                                                    jizhoushixiao(noe_lin[esv], 'red', 'red')
                                                    jizhoushixiao(dibll_ind[dibll_i], 'red', 'red')
                                                }
                                                else if(data_CI[D_val+13]==1){
                                                    jizhoushixiao(noe_lin[esv], 'white', 'white')
                                                    jizhoushixiao(dibll_ind[dibll_i], 'white', 'white')
                                                }

                                                else{
                                                    jizhoushixiao(noe_lin[esv], '#848284', '#848284')
                                                    jizhoushixiao(dibll_ind[dibll_i], '#848284', '#848284')
                                                }
                                                speed()
                                            }
                                        }
                                    }
                                }
                            }
                            else {
                                if(data_CI[key_val-1] == 1){
                                    jizhoushixiao(noe_lin[esv], 'red', 'red')
                                    jizhoushixiao(dibll_ind[dibll_i], 'red', 'red')
                                }
                                else{
                                    if(k==1){
                                        if(data_CI[key_val+5]==1){
                                            jizhoushixiao(noe_lin[esv], 'red', 'red')
                                            jizhoushixiao(dibll_ind[dibll_i], 'red', 'red')
                                        }
                                        else if(data_CI[key_val+6]==1){
                                            jizhoushixiao(noe_lin[esv], 'white', 'white')
                                            jizhoushixiao(dibll_ind[dibll_i], 'white', 'white')
                                        }
                                        else if (data_CI[key_val + 11] == 1) {
                                            jizhoushixiao(noe_lin[vn], g_pro, g_pro)
                                        }
                                        else{
                                            jizhoushixiao(noe_lin[esv],'#848284', '#848284')
                                            jizhoushixiao(dibll_ind[dibll_i],'#848284', '#848284')
                                        }
                                        speed()
                                    }
                                    else{
                                        var D_val=name1.indexOf(push_zy[push_pushzy_i])
                                        if(data_CI[D_val+12]==1){
                                            jizhoushixiao(noe_lin[esv], 'red', 'red')
                                            jizhoushixiao(dibll_ind[dibll_i], 'red', 'red')
                                        }
                                        else if(data_CI[D_val+13]==1){
                                            jizhoushixiao(noe_lin[esv], 'white', 'white')
                                            jizhoushixiao(dibll_ind[dibll_i], 'white', 'white')
                                        }
                                        else{
                                            jizhoushixiao(noe_lin[esv], '#848284', '#848284')
                                            jizhoushixiao(dibll_ind[dibll_i], '#848284', '#848284')
                                        }
                                        speed()
                                    }
                                }
                            }
                        }
                        else {
                            if (data_CI[key_val - 1] == 0) {
                                if (el_clB.length > 2) {
                                    for (var push_pushzy_i = 0; push_pushzy_i < push_zy.length; push_pushzy_i++) {
                                        if (el_clB.indexOf(push_zy[push_pushzy_i] != -1)) {
                                            jizhoushixiao(noe_lin[esv], cor, cor)
                                        }
                                    }
                                }
                                else {
                                    jizhoushixiao(noe_lin[esv], cor, cor)
                                }

                                jizhoushixiao(dibll_ind[dibll_i], cor, cor)
                            }
                            else {
                                if (el_clB.length > 2) {
                                    for (var push_pushzy_i = 0; push_pushzy_i < push_zy.length; push_pushzy_i++) {
                                        if (el_clB.indexOf(push_zy[push_pushzy_i]) != -1) {
                                            console.log(noe_lin[esv])
                                            jizhoushixiao(noe_lin[esv], rig_cor, rig_cor)
                                        }
                                    }
                                }
                                else {
                                    jizhoushixiao(noe_lin[esv], rig_cor, rig_cor)
                                }
                                jizhoushixiao(dibll_ind[dibll_i], rig_cor, rig_cor)
                            }
                        }
                    }
                }
            }

        }

    }

}
/*
 * ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
 */
function jiZh() {
    /*ï¿½Ð¶Ï¾ï¿½Ôµï¿½ï¿½È¦*/
    chooseMain(XZ_jz,axle_counter)
}
/*ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ñ¡ï¿½ï¿½Í¼*/
function XZ_jz(axl_i,mai) {
    if(axl_i[10]=='True'){

        sign(axl_i[2] * 45 ,axl_i[3] * 45,'black','red',6)
    }
    /*ï¿½Ð¶Ï¾ï¿½Ôµï¿½Ú·ï¿½ï¿½ï¿½ï¿½ï¿½Ê½*/
    switch (parseInt(axl_i[9])) {
        case 1:
            hua_jiz(5, 0)
            break;
        case 2:
            hua_jiz(3.5, 1)
            break;
        case 3:
            hua_jiz(3.5, -1)
            break;
        case 4:
            e(1)
            break;
        case 5:
            e(-1)
            break
    }
    function hua_jiz(n, k) {
        k == 0 ? line(axl_i[2] * 45 - n * k, axl_i[3] * 45 - n, axl_i[2] *45 + n * k, axl_i[3] * 45 + n, 0, 'white', 'white',2,"","","",mai) : line(axl_i[2] * 45 - n, axl_i[3] * 45 - k * n, axl_i[2] * 45 + n, axl_i[3] * 45 + k * n, 0, 'white', 'white', 2)
    }
    function e(n){
        line(axl_i[2] * 45,axl_i[3] * 45-10,axl_i[2] * 45-n*10,axl_i[3] * 45-10,0, 'white', 'white', 2 )
        line(axl_i[2] * 45,axl_i[3] * 45+10,axl_i[2] * 45-n*10,axl_i[3] * 45+10,0, 'white', 'white', 2)
        line(axl_i[2] * 45,axl_i[3] * 45-10,axl_i[2] * 45,axl_i[3] * 45+10,0, 'white', 'white', 2 )
    }
}

/*
 * ï¿½ï¿½ï¿½ï¿½
 */
/*Ñ­ï¿½ï¿½ï¿½ï¿½ï¿½é£¬ï¿½ï¿½ï¿½ï¿½*/

//ï¿½Ð¶Ïµï¿½Ç°ï¿½ï¿½ï¿½ï¿½
loop=function (arr) {
    var svg_quyu = $('#sel_head').val()
    var arr_alll=[]
    //ï¿½æ´¢Í·ï¿½ï¿½Ñ¡ï¿½ï¿½ï¿½Ó¦ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
    for(var i=0;i<arr.length;i++) {
        if(svg_quyu=="È«²¿ÕýÏß"){
            if(arr[i].indexOf("ÄÏÏÄÊûÍ£³µ³¡SCA0")==-1||arr[i].indexOf("ÄÏÏÄÊûSCA1")!=-1){            //ï¿½Ð¶Ïµï¿½Ç°ï¿½ï¿½Ñ¡ï¿½ï¿½
                arr_alll.push(i)
            }
        }
        else if(svg_quyu==""){

        }
        else{
            if(arr[i].indexOf(svg_quyu)!=-1){            //ï¿½Ð¶Ïµï¿½Ç°ï¿½ï¿½Ñ¡ï¿½ï¿½
                arr_alll.push(i)
            }
        }
    }

    return arr_alll
}
//Ñ­ï¿½ï¿½ï¿½Ð¶ï¿½ï¿½ï¿½Îªï¿½ï¿½ï¿½ï¿½ï¿½Ç¼ï¿½ï¿½ï¿½
function loopLine(arr,x) {
    var tra_arr=[]
    for(var lop_i=0;lop_i<arr.length;lop_i++) {
        if(arr[lop_i].indexOf(x)!=-1){
            console.log(lop_i)
            tra_arr.push(1)
        }
    }
    if(tra_arr.length>0){
        return true
    }
    else{
        return false
    }
}
//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é£¬ï¿½ï¿½Åµï¿½Ç°Ò³ï¿½ï¿½ï¿½Ðµï¿½ï¿½ï¿?
var track_thisPage=[]
//ï¿½ï¿½ï¿½ï¿½ï¿½Ç²ï¿½ï¿?
function HLineAll(tra_lin,arr_4,arr_8,arr_9) {
    track_thisPage.push(tra_lin)
    if (all_arr.indexOf(tra_lin[0]) == -1) {
        line(tra_lin[1] * svg_big, tra_lin[2] * 45-gSide_h, tra_lin[3] * 45, tra_lin[4] * 45-gSide_h, 0, gSideCol, gSideCol, gSide_wid);
        line(tra_lin[1] * svg_big, tra_lin[2] * 45, tra_lin[3] * 45, tra_lin[4] * 45, 0, '#848284', '#848284', g_wid, 'lin'+' '+tra_lin[6],tra_lin[6] );
        line(tra_lin[1] * svg_big, tra_lin[2] * 45+gSide_h, tra_lin[3] * 45, tra_lin[4] * 45+gSide_h, 0, gSideCol,gSideCol, gSide_wid );
        cont(tra_lin[3] * svg_big-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2,tra_lin[4] * 45+20,"",'red',"red","cont"+tra_lin[6],6)
        /*ï¿½ï¿½ï¿½ï¿½*/
        var k=(tra_lin[4] * svg_big-tra_lin[2] * 45)/(tra_lin[3] * 45-tra_lin[1] * 45)            //ï¿½ï¿½ï¿½ï¿½Ð±ï¿½ï¿½
        var x1=tra_lin[3] * svg_big-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2
        var x2=tra_lin[3] * svg_big-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2
        var y1=tra_lin[4] * svg_big-3-parseFloat(tra_lin[4] * 45-tra_lin[2] * 45)/2
        var y2=tra_lin[4] * svg_big-3-parseFloat(tra_lin[4] * 45-tra_lin[2] * 45)/2

        //ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
        rect(x1,y1,16,8,'none','none',2,'re_g')
        line(tra_lin[3] * svg_big-parseFloat(tra_lin[3] * svg_big-tra_lin[1] * svg_big)/2,tra_lin[2] * svg_big-3,tra_lin[3] * svg_big-parseFloat(tra_lin[3] * svg_big-tra_lin[1] * svg_big)/2+16,tra_lin[4] * svg_big+5,0,'none','none',2,'li_lg')
        line(tra_lin[3] * svg_big-parseFloat(tra_lin[3] * svg_big-tra_lin[1] * svg_big)/2,tra_lin[2] * svg_big+5,tra_lin[3] * svg_big-parseFloat(tra_lin[3] * svg_big-tra_lin[1] * svg_big)/2+16,tra_lin[4] * svg_big-3,0,'none','none',2,'li_rg')
        cont(tra_lin[3] * svg_big-parseFloat(tra_lin[3] * svg_big-tra_lin[1] * svg_big)/2+8,tra_lin[2] * svg_big+15,'T','none','none','con_gT',6)

    }
//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
    else if (all_arr.indexOf(tra_lin[0]) != -1 && arr_4.indexOf(tra_lin[0]) != -1) {
        //ï¿½Ð¶Ï¹ï¿½ï¿½ï¿½ï¿½ß·ï¿½ï¿½ï¿½
        line(tra_lin[1] * svg_big, tra_lin[2] * svg_big-gSide_h, tra_lin[3] * svg_big, tra_lin[4] * 45-gSide_h, 0, gSideCol, gSideCol, gSide_wid);
        line(tra_lin[1] * svg_big, tra_lin[2] * svg_big, tra_lin[3] * svg_big, tra_lin[4] * 45, 0, g_cor, g_cor, g_wid, 'lin'+' '+tra_lin[5]+tra_lin[6]+'a'+' '+tra_lin[5]+' '+tra_lin[6] ,tra_lin[6]);
        line(tra_lin[1] * svg_big, tra_lin[2] * svg_big+gSide_h, tra_lin[3] * svg_big, tra_lin[4] * 45+gSide_h, 0, gSideCol, gSideCol, gSide_wid);
        cont(tra_lin[3] * svg_big-(tra_lin[3] * svg_big-tra_lin[1] * svg_big)/2,tra_lin[4] * svg_big+20,"",'red',"red","cont"+tra_lin[6],6)

        rect(tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2,tra_lin[2] * 45-3,16,8,'none','none',2,'re_g')
        line(tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2,tra_lin[2] * 45-3,tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2+16,tra_lin[4] * 45+5,0,'none','none',2,'li_lg')
        line(tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2,tra_lin[2] * 45+5,tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2+16,tra_lin[4] * 45-3,0,'none','none',2,'li_rg')
        cont( tra_lin[1]*20+(tra_lin[3]*20-tra_lin[1]*20)*0.2, tra_lin[4]*20+20,'','none','none','con_gT')
    }
    //ï¿½ï¿½Î»ï¿½ï¿½
    else if (all_arr.indexOf(tra_lin[0]) != -1 && arr_5.indexOf(tra_lin[0]) != -1) {
        line(tra_lin[1] * svg_big, tra_lin[2] * svg_big-gSide_h, tra_lin[3] * svg_big, tra_lin[4] * svg_big-gSide_h, 0, gSideCol, gSideCol, gSide_wid);
        line(tra_lin[1] * svg_big, tra_lin[2] * svg_big, tra_lin[3] * svg_big, tra_lin[4] * svg_big, 0, g_cor, g_cor, g_wid, 'con_5_lin lin'+' '+tra_lin[5]+" "+tra_lin[5]+"_"+tra_lin[6]+'b'+' '+tra_lin[6]+'b'+' '+tra_lin[5]+"b",tra_lin[6] );
        line(tra_lin[1] * svg_big, tra_lin[2] * svg_big+gSide_h, tra_lin[3] * svg_big, tra_lin[4] * svg_big+gSide_h, 0, gSideCol, gSideCol, gSide_wid);

        rect(tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2,tra_lin[2] * 45-3,16,8,'none','none',2,'re_g')
        line(tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2,tra_lin[2] * 45-3,tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2+16,tra_lin[4] * 45+5,0,'none','none',2,'li_lg')
        line(tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2,tra_lin[2] * 45+5,tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2+16,tra_lin[4] * 45-3,0,'none','none',2,'li_rg')
        cont( tra_lin[1]*20+(tra_lin[3]*20-tra_lin[1]*20)*0.2, tra_lin[4]*20+20,'','none','none','con_gT')
    }
    //ï¿½ï¿½ï¿½ï¿½ï¿½Ó³ï¿½ï¿½ï¿½
    else if (all_arr.indexOf(tra_lin[0]) != -1 && arr_8.indexOf(tra_lin[0]) != -1&&i!=0) {
        line(tra_lin[1] * svg_big, tra_lin[2] * svg_big-gSide_h, tra_lin[3] * svg_big, tra_lin[4] * svg_big-gSide_h, 0, gSideCol, gSideCol, gSide_wid);

        line(tra_lin[1] * svg_big, tra_lin[2] * svg_big, tra_lin[3] * svg_big, tra_lin[4] * svg_big, 0, '#848284', '#848284', g_wid, 'lin'+' '+tra_lin[6]+'b'+' '+tra_lin[5]+' '+tra_lin[6],tra_lin[6]);
        line(tra_lin[1] * svg_big, tra_lin[2] * svg_big+gSide_h, tra_lin[3] * svg_big, tra_lin[4] * svg_big+gSide_h, 0, gSideCol, gSideCol, gSide_wid);
        cont(tra_lin[3] * svg_big-(tra_lin[3] * svg_big-tra_lin[1] * svg_big)/2,tra_lin[4] * svg_big+20,"",'red',"red","cont"+tra_lin[6],6)

        rect(tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2,tra_lin[2] * 45-3,16,8,'none','none',2,'re_g')
        line(tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2,tra_lin[2] * 45-3,tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2+16,tra_lin[4] * 45+5,0,'none','none',2,'li_lg')
        line(tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2,tra_lin[2] * 45+5,tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2+16,tra_lin[4] * 45-3,0,'none','none',2,'li_rg')
        cont( tra_lin[1]*20+(tra_lin[3]*20-tra_lin[1]*20)*0.2, tra_lin[4]*20+20,'','none','none','con_gT')
    }
    //ï¿½ï¿½Î»ï¿½Ó³ï¿½ï¿½ï¿½
    else if (all_arr.indexOf(tra_lin[0]) != -1 && arr_9.indexOf(tra_lin[0]) != -1&&i!=0) {
        line(tra_lin[1] * svg_big, tra_lin[2] * svg_big-gSide_h, tra_lin[3] * svg_big, tra_lin[4] * svg_big-gSide_h, 0, gSideCol, gSideCol, gSide_wid);

        line(tra_lin[1] * svg_big, tra_lin[2] * svg_big, tra_lin[3] * svg_big, tra_lin[4] * svg_big, 0, g_cor, g_cor, g_wid, 'lin'+' '+tra_lin[5]+"_"+tra_lin[6]+'b'+' '+tra_lin[5]+" "+tra_lin[6]+'b'+' '+tra_lin[5]+"b",tra_lin[6] );
        line(tra_lin[1] * svg_big, tra_lin[2] * svg_big+gSide_h, tra_lin[3] * svg_big, tra_lin[4] * svg_big+gSide_h, 0, gSideCol, gSideCol, gSide_wid);

        rect(tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2,tra_lin[2] * 45-3,16,8,'none','none',2,'re_g')
        line(tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2,tra_lin[2] * 45-3,tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2+16,tra_lin[4] * 45+5,0,'none','none',2,'li_lg')
        line(tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2,tra_lin[2] * 45+5,tra_lin[3] * 45-parseFloat(tra_lin[3] * 45-tra_lin[1] * 45)/2+16,tra_lin[4] * 45-3,0,'none','none',2,'li_rg')
        cont( tra_lin[1]*20+(tra_lin[3]*20-tra_lin[1]*20)*0.2, tra_lin[4]*20+20,'','none','none','con_gT')
    }
}
function line_all() {
    chooseMain(push_track,track_segment)
    track_thisPage=[]
    var arr_4 = [];
    var arr_10 = [];
    var arr_9 = [];
    var arr_8 = [];
    var arr_x = [];
    var arr_y = [];
    arr_5=[]
    arr_1=[]
    arr_6=[]
    var swi_al=[]
    swi_al= loop(switchdata)

    for (var val_i=0;val_i<switchdata.length;val_i++) {
        for (var swi_al_i = 0; swi_al_i < swi_al.length; swi_al_i++) {
            if(switchdata[val_i][0]==swi_al[swi_al_i]+1){
                arr_6.push(switchdata[swi_al[swi_al_i]][6]);//ï¿½ï¿½Î»
                arr_10.push(switchdata[swi_al[swi_al_i]][10]);//ï¿½ï¿½Î»ï¿½Ó³ï¿½
                arr_5.push(switchdata[swi_al[swi_al_i]][5]);//ï¿½ï¿½Î»
                arr_4.push(switchdata[swi_al[swi_al_i]][4]);//ï¿½ï¿½ï¿½ï¿½
                arr_8.push(switchdata[swi_al[swi_al_i]][8]);//ï¿½ï¿½ï¿½ï¿½ï¿½Ó³ï¿½
                arr_1.push(switchdata[swi_al[swi_al_i]][1]);
                all_arr.push(switchdata[swi_al[swi_al_i]][4], switchdata[swi_al[swi_al_i]][5], switchdata[swi_al[swi_al_i]][6], switchdata[swi_al[swi_al_i]][8], switchdata[swi_al[swi_al_i]][10]);
                var swi_9=switchdata[swi_al[swi_al_i]][9].split(',')
                for(var s_i=0;s_i<swi_9.length;s_i++){
                    arr_9.push(swi_9[s_i]);//ï¿½ï¿½Î»ï¿½Ó³ï¿½
                    all_arr.push(swi_9[s_i]);
                }
                arr_x.push(switchdata[swi_al[swi_al_i]][2]);
                arr_y.push(switchdata[swi_al[swi_al_i]][3])
            }
        }
    }
    var arr_al=[]
    arr_al= loop(axle_section)
    for(var arr_al_i=0;arr_al_i<arr_al.length;arr_al_i++) {
        for (var tra_i = 0; tra_i < track_segment.length; tra_i++) {
            var tra_lin = track_segment[tra_i]
            if(tra_lin[6]==axle_section[arr_al[arr_al_i]][1]){
                HLineAll(tra_lin,arr_4,arr_8,arr_9)
            }
        }
    }
    var swid
    var p_tra_3
    var p_tra_4
    var ar_x
    var ar_y
    for (var vi = 0; vi < track_segment.length; vi++) {
        for (var j = 0; j < arr_6.length; j++) {
            if (track_segment[vi][0] == arr_6[j]) {
                var tra = track_segment[vi]
                swid = switchdata[swi_al[j]]
                p_tra_3 = parseFloat(tra[3])
                p_tra_4 = parseFloat(tra[4])
                ar_x = parseFloat(arr_x[j])
                ar_y = parseFloat(arr_y[j])
                daoCXZ(tra,swid,p_tra_3,p_tra_4,ar_x,ar_y,arr_1,arr_4,arr_10,j)
            }
        }
    }
    cli_lin()
    linHover()
}
//×°trackï¿½ï¿½ï¿½Ðµï¿½Öµ
function push_track(tra) {
    track_segment_new.push(tra)
}
//ï¿½ï¿½ï¿½ï¿½Ñ¡ï¿½ï¿½Í¼
function daoCXZ(tra,swid,p_tra_3,p_tra_4,ar_x,ar_y,arr_1,arr_4,arr_10,j){
    switchdata_new.push(swid)
    for(var trvi=0;trvi<track_segment.length;trvi++) {
        if (track_segment[trvi][0] == arr_10[j] && arr_10[j] != 0) {
            var tra_fan = track_segment[trvi]

            line(tra_fan[1] * 45, tra_fan[2] * 45, tra_fan[3] * 45, tra_fan[4] * 45, 0, '#848284', "#848284", g_wid, ' lin ' + ' ' + arr_1[j] + " " + arr_1[j]+ "_" + tra[6] + "c"+" "+tra[6]+'a'+" "+arr_1[j]+'a', tra_fan[6]);

            rect(tra[3] * 45-parseFloat(tra[3] * 45-tra[1] * 45)/2,tra[2] * 45-3,16,8,'none','none',2,'re_g')
            line(tra[3] * 45-parseFloat(tra[3] * 45-tra[1] * 45)/2,tra[2] * 45-3,tra[3] * 45-parseFloat(tra[3] * 45-tra[1] * 45)/2+16,tra[4] * 45+5,0,'none','none',2,'li_lg')
            line(tra[3] * 45-parseFloat(tra[3] * 45-tra[1] * 45)/2,tra[2] * 45+5,tra[3] * 45-parseFloat(tra[3] * 45-tra[1] * 45)/2+16,tra[4] * 45-3,0,'none','none',2,'li_rg')
            cont( tra[1]*20+(tra[3]*20-tra[1]*20)*0.2, tra[4]*20+20,'','none','none','con_gT')
        }
    }
    if (p_tra_3 > ar_x && p_tra_4 > ar_y) {
        if(public(arr_4,j)) {
            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 +20, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_l fan_c');
            line(tra[1] * 45 + 13.5, tra[2] * 45 + 13.5, tra[3] * 45, tra[4] * 45, 0, '#848284', '#848284', g_wid, 'cont_lin ' + " " + arr_1[j] + "_" + tra[6] + "a" + " " + tra[6] + 'a' + " " + arr_1[j] + " " + arr_1[j] + 'a', arr_1[j]);
            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + 13.5, swid[3] * 45 + 13.5, 0, 'none', 'none', 7, 'shi_B');
            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 -10.2, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_r fan_z');
        }
        else{
            dingw(j)? line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + 15.2, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_l fan_c'): line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 15.2, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_l fan_c');

            line(tra[1] * 45 + 13.5, tra[2] * 45 + 13.5, tra[3] * 45, tra[4] * 45, 0, '#848284', '#848284', g_wid, 'cont_lin ' + " " + arr_1[j] + "_" + tra[6] + "a" + " " + tra[6] + 'a' + " " + arr_1[j] + " " + arr_1[j] + 'a', arr_1[j]);
            //line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 13.5, swid[3] * 45 - 13.5, 0, 'white', 'white', 7, 'shi_B_r fan_c');
            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + 13.5, swid[3] * 45 + 13.5, 0, 'none', 'none', 7, 'shi_B');
            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 13.5, swid[3] * 45 - 13.5, 0, 'none', 'none', 7, 'shi_B_r fan_z');
        }
    }
    else if (p_tra_3 < ar_x && p_tra_4 > ar_y) {
        if(public(arr_4,j)) {
            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 20, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_l fan_c');
            line(tra[1] * 45 - 13.5, tra[2] * 45 + 13.5, tra[3] * 45, tra[4] * 45, 0, '#848284', '#848284', g_wid, 'cont_lin ' + " " + arr_1[j] + "_" + tra[6] + "a" + " " + tra[6] + 'a' + " " + arr_1[j] + " " + arr_1[j] + 'a', arr_1[j]);
            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 13.5, swid[3] * 45 + 13.5, 0, 'none', 'none', 7, 'shi_B');

            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + 10.5, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_r fan_z');
        }
        else{
            dingw(j)? line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + 15.2, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_l fan_c'):  line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 15.2, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_l fan_c');

            line(tra[1] * 45 - 13.5, tra[2] * 45 + 13.5, tra[3] * 45, tra[4] * 45, 0, '#848284', '#848284', g_wid, 'cont_lin ' + " " + arr_1[j] + "_" + tra[6] + "a" + " " + tra[6] + 'a' + " " + arr_1[j] + " " + arr_1[j] + 'a', arr_1[j]);
            //line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + 13.5, swid[3] * 45 - 13.5, 0, 'white', 'white', 7, 'shi_B_l fan_c');
            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 13.5, swid[3] * 45 + 13.5, 0, 'none', 'none', 7, 'shi_B');

            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + 13.5, swid[3] * 45 - 13.5, 0, 'none', 'none', 7, 'shi_B_r fan_z');
        }
    }
    else if (p_tra_3 > ar_x && p_tra_4 < ar_y) {
        if(public(arr_4,j)) {
            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + 20, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_l fan_c');
            line(tra[1] * 45 + 13.5, tra[2] * 45 - 13.5, tra[3] * 45, tra[4] * 45, 0, '#848284', '#848284', g_wid, 'cont_lin ' + " " + arr_1[j] + "_" + tra[6] + "a" + " " + tra[6] + 'a' + " " + arr_1[j] + " " + arr_1[j] + 'a', arr_1[j]);
            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + 13.5, swid[3] * 45 - 13.5, 0, 'none', 'none', 7, 'shi_B');
            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 10.2, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_r fan_z');
        }
        else{
            dingw(j)?line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + 15.2, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_l fan_c'):line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 15.2, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_l fan_c');

            line(tra[1] * 45 + 13.5, tra[2] * 45 - 13.5, tra[3] * 45, tra[4] * 45, 0, '#848284', '#848284', g_wid, 'cont_lin ' + " " + arr_1[j] + "_" + tra[6] + "a" + " " + tra[6] + 'a' + " " + arr_1[j] + " " + arr_1[j] + 'a', arr_1[j]);
            //line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 13.5, swid[3] * 45 + 13.5, 0, 'white', 'white', 7, 'shi_B_r fan_c');
            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + 13.5, swid[3] * 45 - 13.5, 0, 'none', 'none', 7, 'shi_B');

            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 13.5, swid[3] * 45 + 13.5, 0, 'none', 'none', 7, 'shi_B_r fan_z');
        }
    }
    else if (p_tra_3 < ar_x && p_tra_4 < ar_y) {
        if(public(arr_4,j)) {
            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 20, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_l fan_c');
            line(tra[1] * 45 - 13.5, tra[2] * 45 - 13.5, tra[3] * 45, tra[4] * 45, 0, '#848284', '#848284', g_wid, 'cont_lin ' + " " + arr_1[j] + "_" + tra[6] + "a" + " " + tra[6] + 'a' + " " + arr_1[j] + " " + arr_1[j] + 'a', arr_1[j]);
            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 13.5, swid[3] * 45 - 13.5, 0, 'none', 'none', 7, 'shi_B');
            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + 10.5, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_r fan_z');
        }
        else{
            dingw(j)? line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + 15.2, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_l fan_c'):  line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 15.2, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B_l fan_c');

            line(tra[1] * 45 - 13.5, tra[2] * 45 - 13.5, tra[3] * 45, tra[4] * 45, 0, '#848284', '#848284', g_wid, 'cont_lin ' + " " + arr_1[j] + "_" + tra[6] + "a" + " " + tra[6] + 'a' + " " + arr_1[j] + " " + arr_1[j] + 'a', arr_1[j]);

            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 13.5, swid[3] * 45 - 13.5, 0, 'none', 'none', 7, 'shi_B');

            line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + 13.5, swid[3] * 45 +13.5, 0, 'none', 'none', 7, 'shi_B_r fan_z');
        }
    }
    else {
        var ka_5 = arr_5[j]

        var ka_4 = arr_4[j]
        for (var iz = 0; iz < track_segment.length; iz++) {
            if (track_segment[iz][0] == ka_5) {
                if ((track_segment[iz][3] - track_segment[iz][1]) > 0) {
                    var tkx_5 = 1
                }
                else {
                    var tkx_5 = -1
                }
                if ((track_segment[iz][4] - track_segment[iz][2]) > 0) {
                    var tky_5 = 1

                }
                else {
                    var tky_5 = -1
                }
            }
            if (track_segment[iz][0] == ka_4) {
                if ((track_segment[iz][3] - track_segment[iz][1]) > 0) {
                    var tkx_4 = 1
                }
                else {
                    var tkx_4 = -1
                }
                if ((track_segment[iz][4] - track_segment[iz][2]) > 0) {
                    var tky_4 = 1
                }
                else {
                    var tky_4 = -1
                }
            }
        }
        line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + tkx_5 * 9, swid[3] * 45 + tky_5 * 9, 0, 'none', 'none', 7, 'shi_B_l fan_c');
        line(tra[1] * 45 - 13.5, tra[2] * 45, tra[3] * 45, tra[4] * 45, 0, '#848284', '#848284', g_wid, 'cont_lin ' + " "+arr_1[j]+"_"+tra[6]+"a"+" "+tra[6]+'a'+" "+arr_1[j]+" "+arr_1[j]+'a', arr_1[j]);
        line(swid[2] * 45, swid[3] * 45, swid[2] * 45 - 13.5, swid[3] * 45, 0, 'none', 'none', 7, 'shi_B');
        line(swid[2] * 45, swid[3] * 45, swid[2] * 45 + tkx_4 * 12, swid[3] * 45 + tky_4 * 12, 0, 'none', 'none', 7, 'shi_B_r fan_z');
    }

    rect(swid[2] * 45 - 4, swid[3] * 45 - 12, 30, 30, 'none', 'none', 4, 'suo');
    cont(swid[2] * 45 +10, swid[3] * 45 - 20,"","none",'none','cont_suo',10)
    rect(swid[2] * 45 - 4+32, swid[3] * 45 - 4+4, 12, 4, 'none', 'none', 2, 're_car acar'+arr_1[j],"r"+arr_1[j]);   //ï¿½ï¿½
    rect(swid[2] * 45 - 4-12, swid[3] * 45 - 4+4, 12, 4, 'none', 'none', 2, 're_car bcar'+arr_1[j],'l'+arr_1[j]);   //ï¿½ï¿½
    rect(swid[2] * 45 - 4, swid[3] * 45 - 4, 32, 12, 'none', 'none', 2, 're_car car'+arr_1[j],'car'+arr_1[j]);
    cont(swid[2] * 45 - 4, swid[3] * 45 - 4,"","white",'white','re_car c'+arr_1[j],10,'c'+arr_1[j])
}
//ï¿½Ð¶Ï¹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ç·ï¿½ÎªÐ±ï¿½ï¿½
function public(arr_4,j) {
    var ka_4 = arr_4[j]
    for (var iz = 0; iz < track_segment.length; iz++) {
        if (track_segment[iz][0] == ka_4) {
            if ((track_segment[iz][4] - track_segment[iz][2]) ==0) {
                return true
            }
            else {
                return false
            }
        }
    }
}
//ï¿½Ð¶ï¿½Ë®Æ½ï¿½ï¿½Î»ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
function dingw(j){
    for(var tr_daoc=0;tr_daoc<track_segment.length;tr_daoc++){
        if(track_segment[tr_daoc][0]==arr_5[j]){
            if ((track_segment[tr_daoc][3] - track_segment[tr_daoc][1]) >0) {
                return true
            }
            else{
                return false
            }
        }
    }
}
function duxian() {
    // chooseMain(XZ_duxian,axle_logic_section)
    for(var ax_i=0;ax_i<axle_logic_section.length;ax_i++) {
        var ax=axle_logic_section[ax_i]
        XZ_duxian(ax)
    }
    cli_dux()
}
function XZ_duxian(axl) {
    line(axl[3] * svg_big, axl[4] * svg_big, axl[5] * svg_big , axl[6] * svg_big, 0, 'none', 'none', 6,axl[2]+' '+'dux',axl[1])
    line(axl[3] * svg_big, axl[4] * svg_big, axl[3] * svg_big + 2, axl[6] * svg_big, 0, 'black', 'black', 6);
    var x=axl[5] * svg_big-(axl[5] * svg_big-axl[3] * svg_big)/2-20
    var y=axl[4] * svg_big
    rect(x+8+32,y-2+4,12,4,'none','none',2, 're_car acar'+axl[1],'r'+axl[1])  //ï¿½ï¿½
    rect(x+8-12,y-2+4,12,4,'none','none',2, 're_car bcar'+axl[1],'l'+axl[1])  //ï¿½ï¿½
    rect(x+8,y-2,32,12,'none','none',2, 're_car car'+axl[1],'car'+axl[1])
    cont(x+8,y-2+20,'','white','white','re_car c'+axl[1],10,'c'+axl[1])
}
function XZ_sig(sin) {
    signal_new.push(sin)
    var sig_cor
    var plx
    var ysig_x
    var ysig_s
    var x_sig, y_sig, y_lin, y_cot, plg_xl, plg_xr
    var claCir
    if(parseInt(sin[7])==2){
        sig_cor='#CCC'
        claCir=""
    }
    else{
        claCir='cir'
        switch (parseInt(sin[13])) {
            case 1:
                sig_cor='red'
                break;
            case 2:
                sig_cor='blue'
                break;
            case 3:
                sig_cor='red'
                break;
        }
    }
    switch (parseInt(sin[5])) {
        case 1:
            (y_sig = sin[4] * svg_big - 15, y_lin = sin[4] * svg_big - 20, y_cot = sin[4] * svg_big - 20)
            x_sig = sin[3] * svg_big - 12;
            plg_xr = sin[3] * svg_big
            plx = plg_xr + 10
            ysig_x = y_sig + 5
            ysig_s = y_sig - 5
            var pol = plg_xr + "," + y_sig + " " + plx + "," + ysig_x + " " + plx + "," + ysig_s
            polygon(pol, 'none', 'none', 1, 'plgo ')  //ï¿½ÅºÅ»ï¿½ï¿½Ôµï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
            line(sin[3] * svg_big, sin[4] * svg_big-10, sin[3] * svg_big, y_lin, 0, 'white', 'white', 5);  //ï¿½ÅºÅ»ï¿½ï¿½ï¿½
            line(sin[3] * svg_big, sin[4] * svg_big-15, x_sig-6, sin[4] * svg_big-15, 0, 'white', 'white', 3);  //ï¿½ÅºÅ»ï¿½ï¿½ï¿½ï¿?
            sign(x_sig-6-5, sin[4] * svg_big-15-4,'none','none',2 ,"","rig_houbei")
            cont(x_sig+15,y_sig,'B','none','none','sig_b',6,"")
            rect(x_sig-15,y_sig+30,20,4,"none",'none',1,'auto_rect')
            var auto_x1=x_sig-15-5,
                auto_x2=x_sig-15,
                auto_y1=y_sig+30+ 2,
                auto_y2=y_sig+30+2- 4,
                auto_y3=y_sig+30+2+ 4
            var auto_ply=auto_x1 + "," + auto_y1 + " " + auto_x2 + "," + auto_y2 + " " + auto_x2 + "," + auto_y3
            polygon(auto_ply,'none','none',1,'auto_poly')
            rect(x_sig-22,y_sig+26,30,12,"none",'none',2,'auto_Grerect')
            break;
        case 2:           //ï¿½ï¿½ï¿½ï¿½
            (y_sig = sin[4] * svg_big + 15, y_cot = sin[4] * svg_big + 25, y_lin = sin[4] * svg_big + 20)
            x_sig = sin[3] * svg_big + 12;
            plg_xl = sin[3] * svg_big
            plx = plg_xl - 10
            ysig_x = y_sig + 5
            ysig_s = y_sig - 5
            var po = plg_xl + "," + y_sig + " " + plx + "," + ysig_x + " " + plx + "," + ysig_s
            polygon(po, 'none', 'none', 1, 'plgo ')
            line(sin[3] * svg_big, sin[4] * svg_big+10, sin[3] * svg_big, y_lin, 0, 'white', 'white', 5);
            line(sin[3] * svg_big, sin[4] * svg_big+15, x_sig+6, sin[4] * svg_big+15, 0, 'white', 'white', 3);
            sign(x_sig-6+18, sin[4] * svg_big+15+4,'none','none',2,"","rig_houbei")
            cont(x_sig-25,y_sig,'B','none','none','sig_b',6,"")
            rect(x_sig-5,y_sig-30,20,4,"none",'none',1,'auto_rect')
            var RDauto_x1=x_sig-5+20+5,
                RDauto_x2=x_sig-5+20,
                RDauto_y1=y_sig-30+ 2,
                RDauto_y2=y_sig-30+2- 4,
                RDauto_y3=y_sig-30+2+ 4
            var RDauto_ply=RDauto_x1 + "," + RDauto_y1 + " " + RDauto_x2 + "," + RDauto_y2 + " " + RDauto_x2 + "," + RDauto_y3
            polygon(RDauto_ply,'none','none',1,'auto_poly')
            rect(x_sig-8,y_sig-34,30,12,"none",'none',2,'auto_Grerect')
            break;
        case 3:          //ï¿½ï¿½ï¿½ï¿½
            (y_sig = sin[4] * svg_big - 15, y_lin = sin[4] * svg_big - 20, y_cot = sin[4] * 45 - 20)
            x_sig = sin[3] * svg_big + 12;
            plg_xl = sin[3] * svg_big
            plx = plg_xl - 10
            ysig_x = y_sig + 5
            ysig_s = y_sig - 5
            var po = plg_xl + "," + y_sig + " " + plx + "," + ysig_x + " " + plx + "," + ysig_s
            polygon(po, 'none', 'none', 1, 'plgo ')
            line(sin[3] * svg_big, sin[4] * svg_big-10, sin[3] * svg_big, y_lin, 0, 'white', 'white', 5);
            line(sin[3] * svg_big, sin[4] * svg_big-15, x_sig+6, sin[4] * svg_big-15, 0, 'white', 'white', 3);
            sign(x_sig-6+18, sin[4] * svg_big-15-4,'none','none',2,"","rig_houbei")
            cont(x_sig-25,y_sig,'B','none','none','sig_b',6,"")
            rect(x_sig-5,y_sig+30,20,4,"none",'none',1,'auto_rect')
            var LDauto_x1=x_sig-5+20+5,
                LDauto_x2=x_sig-5+20,
                LDauto_y1=y_sig+30+ 2,
                LDauto_y2=y_sig+30+2- 4,
                LDauto_y3=y_sig+30+2+ 4
            var LDauto_ply=LDauto_x1 + "," + LDauto_y1 + " " + LDauto_x2 + "," + LDauto_y2 + " " + LDauto_x2 + "," + LDauto_y3
            polygon(LDauto_ply,'none','none',1,'auto_poly')
            rect(x_sig-8,y_sig+26,30,12,"none",'none',2,'auto_Grerect')
            break;
    }

    sign(x_sig, y_sig, sig_cor, 'white',7,sin[1],claCir)
    rect(x_sig - 25, y_sig - 10,50,24,'none','none',2,'sig_gre',"")
    rect(x_sig - 25, y_sig - 10,50,24,'none','none',2,'sig_whi',"")
    line(x_sig - 5, y_sig - 5, x_sig + 5, y_sig + 5, 0, 'none', 'none', 2, 'mie1 ')
    line(x_sig - 5, y_sig + 5, x_sig + 5, y_sig - 5, 0, 'none', 'none', 2, 'mie2 ')
}
function signal_all() {
    chooseMain(XZ_sig,signal)
    cli_sig()
}
function XZ_bal(bal,mai,cla) {
    var plg_xl
    var y_sig
    var plx
    var ysig_x
    var ply
    var ysig_s
    var po
    switch (parseInt(bal[6])) {
        case 1:
            plg_xl=bal[2]*svg_big-10
            y_sig=bal[3]*svg_big
            plx= bal[2]*svg_big
            ysig_x= bal[3]*svg_big-5
            ply= bal[2]*svg_big
            ysig_s= bal[3]*svg_big+5
            po = plg_xl + "," + y_sig + " " + plx + "," + ysig_x + " " + ply + "," + ysig_s
            polygon(po,'pink','green',2,'bls',mai)
            break;
        case 2:
            plg_xl=bal[2]*svg_big+10
            y_sig=bal[3]*svg_big
            plx= bal[2]*svg_big
            ysig_x= bal[3]*svg_big+5
            ply= bal[2]*svg_big
            ysig_s= bal[3]*svg_big-5
            po = plg_xl + "," + y_sig + " " + plx + "," + ysig_x + " " + ply + "," + ysig_s
            polygon(po,'pink','green',2,'bls',mai)
            break;
        case 3:
            plg_xl=bal[2]*svg_big
            y_sig=bal[3]*svg_big-5
            plx= bal[2]*svg_big+5
            ysig_x= bal[3]*svg_big+5
            ply= bal[2]*svg_big-5
            ysig_s= bal[3]*svg_big+5
            po = plg_xl + "," + y_sig + " " + plx + "," + ysig_x + " " + ply + "," + ysig_s
            polygon(po,'pink','green',2,'bls',mai)
            break;
        case 4:
            rect(bal[2] * svg_big, bal[3] * svg_big - 7, 22, 14, 'white', 'yellow', 2, 'bls')
            var po = bal[2] + "," + bal[3]+6 + " " + bal[2]+3 + "," + bal[3]+ " " + bal[2]+3 + "," + bal[3]
            polygon(po,fil_color,str_color,str_wid,cla)
            break;
    }
}
function balise_all() {
    chooseMain(XZ_bal,balise)
}
var plat_thisPage=[]
function XZ_plat(palt) {
    plat_thisPage.push(palt)
    var bgS=$('#bgSec')
    bgS.children('li').remove()

    if(palt[6]=='True'){
        if(palt[0]==11){
            rect(palt[2] * svg_big + 65, palt[3] * svg_big, palt[4] * 30, palt[5] * 30, 'black', 'none', 2, 'statBack', palt[1]+'rect')
            // line(palt[2] * svg_big + 65, palt[3] * svg_big + 35, palt[2] * svg_big + 65 + 90, palt[3] * svg_big + 35, 0, 'none', '#f6f6f6', 4, 'stat_l')
            line(palt[2] * svg_big + 65 , palt[3] * svg_big + 35, palt[2] * svg_big + 65 + 270, palt[3] * svg_big + 35, 0, 'none', '#f6f6f6', 4, 'stat_c')
            //line(palt[2] * svg_big + 65 + 180, palt[3] * svg_big + 35, palt[2] * svg_big + 65 + 270, palt[3] * svg_big + 35, 0, 'none', '#f6f6f6', 4, 'stat_r')
            line(palt[2] * svg_big + 65, palt[3] * svg_big, palt[2] * svg_big + 65 + palt[4] * 30, palt[3] * svg_big, 0, '#add7ff', '#add7ff', 4, 'statl ')
            line(palt[2] * svg_big + 65, palt[3] * svg_big, palt[2] * svg_big + 65, palt[3] * 45 + palt[5] * 30, 0, '#add7ff', '#add7ff', 4, 'stat ', palt[1] + "-" + 1)
            line(palt[2] * svg_big + 65 + palt[4] * 30, palt[3] * svg_big, palt[2] * svg_big + 65 + palt[4] * 30, palt[3] * svg_big + palt[5] * 30, 0, '#add7ff', '#add7ff', 4, 'statr')
            cont(palt[2] * 45+360, palt[3] * svg_big,'','yellow','','plt_cont',10,palt[1] + "-" + 1+'_cont')
        }
        else{
            rect(palt[2] * svg_big+65, palt[3] * svg_big, palt[4]*30, palt[5]*30, 'black', 'none', 2, 'statBack',palt[1]+'rect')
            line(palt[2] * svg_big+65, palt[3] * svg_big -10,palt[2] * svg_big+65+270, palt[3] * svg_big -10,0,'none','#f6f6f6',4,'stat_c')

            line(palt[2] * svg_big+65, palt[3] * svg_big+palt[5]*30,palt[2] * svg_big+65+palt[4]*30, palt[3] * svg_big+palt[5]*30,0,'#add7ff','#add7ff',4,'statl')
            line(palt[2] * svg_big+65, palt[3] * svg_big+palt[5]*30,palt[2] * svg_big+65, palt[3] * svg_big,0,'#add7ff','#add7ff',4,'stat ',palt[1]+"-"+1)
            line(palt[2] * svg_big+65+palt[4]*30, palt[3] * svg_big+palt[5]*30,palt[2] * svg_big+65+palt[4]*30, palt[3] * svg_big,0,'#add7ff','#add7ff',4,'statr')

            cont(palt[2] * 45+360, palt[3] * svg_big,'','yellow','','plt_cont',10,palt[1] + "-" + 1+'_cont')
        }
    }
    else{
        rect(palt[2] * svg_big + 65, palt[3] * svg_big, palt[4] * 30, palt[5] * 30, 'black', 'none', 2, 'statBack', palt[1]+'rect')
        line(palt[2] * svg_big + 65, palt[3] * svg_big + 35, palt[2] * svg_big + 65 + 270, palt[3] * svg_big + 35,0, 'none', '#f6f6f6',4, 'stat_c')
        line(palt[2] * svg_big + 65, palt[3] * svg_big, palt[2] * svg_big + 65 + palt[4] * 30, palt[3] * svg_big, 0, '#add7ff', '#add7ff', 4, 'statl ')
        line(palt[2] * svg_big + 65, palt[3] * svg_big, palt[2] * svg_big + 65, palt[3] * 45 + palt[5] * 30, 0, '#add7ff', '#add7ff', 4, 'stat ', palt[1] + "-" + 0)
        line(palt[2] * svg_big + 65 + palt[4] * 30, palt[3] * svg_big, palt[2] * svg_big + 65 + palt[4] * 30, palt[3] * svg_big + palt[5] * 30, 0, '#add7ff', '#add7ff', 4, 'statr')

        cont(palt[2] * 45+360,palt[3] * svg_big,'','yellow','','plt_cont',10,palt[1] + "-" + 0+'_cont')
    }
    var jup_x1=palt[2] * svg_big+100-15
    var jump_x1=palt[2] * svg_big+330-15
    var jup_y1=palt[3] * svg_big+palt[5]*15;

    var jup_x2=palt[2] * svg_big+110-15
    var jump_x2=palt[2] * svg_big+320-15
    var jup_y2=palt[3] * svg_big+palt[5]*15+4;

    var jup_x3=palt[2] * svg_big+110-15
    var jump_x3=palt[2] * svg_big+320-15
    var jup_y3=palt[3] * svg_big+palt[5]*15-4;

    polygon(jup_x1+","+jup_y1+" "+jup_x2+","+jup_y2+" "+jup_x3+","+jup_y3,'none',"none",2,'jup_sta_pol')
    polygon(jump_x1+","+jup_y1+" "+jump_x2+","+jup_y2+" "+jump_x3+","+jup_y3,'none',"none",2,'jup_sta_por')
    line(palt[2] * svg_big+110-15,palt[3] * svg_big+palt[5]*15,palt[2] * 45+140-15,palt[3] * svg_big+palt[5]*15,0,'none','none',6,'jup_sta_l')
    line(palt[2] * svg_big+320-15,palt[3] * svg_big+palt[5]*15,palt[2] * 45+290-15,palt[3] * svg_big+palt[5]*15,0,'none','none',6,'jup_sta_r')
    var sta_x1=palt[2] * svg_big+45
    var sta_y1=palt[3] * svg_big+palt[5]*15;
    var sta_x2=palt[2] * svg_big+50
    var sta_y2=palt[3] * svg_big+palt[5]*30;
    var sta_x3=palt[2] * svg_big+55
    var sta_y3=palt[3] * svg_big+palt[5]*15;
    var sta_x4=palt[2] * svg_big+50
    var sta_y4=palt[3] * svg_big;
    polygon(sta_x1+","+sta_y1+" "+sta_x2+","+sta_y2+" "+sta_x3+","+sta_y3+" "+sta_x4+","+sta_y4,'#222',"#c6c3c6",2,"quic")
    cont(palt[2] * 45+25,sta_y1,'E','none','','stop_E',10)
    loop_bgSec(plat_thisPage,bgS)
}
function plat() {
    plat_thisPage=[]
    chooseMain(XZ_plat,platform)
    cli_statBj()
    cli_statz()
    cli_statr()
    cli_statl()
    cli_quic()
    quicHover()
}
function show_and_hide(n,cla) {
    $('.svg_inp').eq(n).get(0).checked==true?$(cla).show():$(cla).hide()
}

/*Ó¦ï¿½ï¿½ï¿½ï¿½*/
function bl(){
    show_and_hide(4,'.bls')
    show_and_hide(4,'.ydq_tex')
    show_and_hide(3,'.cont_dux')
    $('.jzh_tex').hide()
    show_and_hide(0,'.cont_G')
    show_and_hide(1,'.cont_tex')
    show_and_hide(2,'.cont_sig')
}
var send_type,equit_name,button_daocha,equit_name_end,CBTC,PVID,TID,SID,DID,Type,Mode
function
sed(arr){
    for(var i=0;i<arr.length-1;i++){
        switch(i){
            case 0:
                send_type=arr[i]
                break;
            case 1:
                equit_name=arr[i]
                break;
            case 2:
                equit_name_end=arr[i]
                break;
            case 3:
                button_daocha=arr[i]
                break;
            case 4:
                CBTC=arr[i]
                break;
            case 5:
                PVID=arr[i]
                break;
            case 6:
                TID=arr[i]                   //ï¿½ï¿½ï¿½ï¿½ï¿?
                break;
            case 7:
                SID=arr[i]             //ï¿½ï¿½ï¿½Ðºï¿½
                break;
            case 8:
                DID=arr[i]         //Ä¿ï¿½ÄµØºï¿½
                break;
            case 9:
                Type=arr[i]             //ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
                break;
            case 10:
                Mode=arr[i]           //ï¿½ï¿½ï¿½ï¿½Ä£Ê½
                break;
        }
    }
    SetSendtype();
}
function get_i(id) {
    var k
    for(var i=0;i<name_out.length;i++) {
        if(name_out[i]==id){
            k=i
        }
    }
    return k
}
/*
 * Ð´Õ¾Ì¨ï¿½ï¿½ï¿½ï¿½
 */
function statName() {
    chooseMain(XZ_statN,stationname)
}
function XZ_statN(statName,mai,cla) {
    cont(statName[3]*svg_big-statName[2].length*13/2,statName[4]*svg_big-20,statName[2],'yellow','yellow',"",20)
    cont(statName[3]*svg_big-statName[1].length*28/2,statName[4]*svg_big+18,statName[1],'yellow','yellow',"plof",28)
    rect(statName[3]*svg_big-svg_big*3,statName[4]*svg_big-15,statName[6]*svg_big*3,statName[5]*svg_big,"none",'#f6f6f6',2)
    switch (parseInt(statName[7])){
        case 1:
            rect(statName[3]*svg_big+statName[6]*svg_big+45,statName[4]*svg_big-15,statName[6]*30,statName[5]*svg_big,"red","white",1," rec_ATB",statName[1])
            cont(statName[3]*svg_big+statName[6]*svg_big+50,statName[4]*svg_big+16,'ATB','black','black',"ATB",28,statName[1])
    }
    cli_ATB()
}
function XZ_writ(stat) {
    switch (parseInt(stat[6])) {
        case 1:
            cont(stat[2]*svg_big,stat[3]*svg_big,stat[1],'white','white',"jzh_tex",12)
            break;
        case 2:
            cont(stat[2]*svg_big-25,stat[3]*svg_big+5,stat[1],'#00f0ff','#00f0ff',"cont_G",12)
            if(stat[1]=='DG01005'||stat[1]=='DG02060'||stat[1]=='DG03054'||stat[1]=='DG04034'||stat[1]=='DG04060'){
                rect(stat[2]*svg_big-25+32,stat[3]*svg_big-10,10,4,'none','none',2,'re_car acar'+stat[1],"r"+stat[1])        //ï¿½ï¿½
                rect(stat[2]*svg_big-25-12,stat[3]*svg_big-10,10,4,'none','none',2,'re_car bcar'+stat[1],'l'+stat[1])        //ï¿½ï¿½
                rect(stat[2]*svg_big-25,stat[3]*svg_big-12,32,8,'none','none',2,'re_car car'+stat[1],'car'+stat[1])
                cont(stat[2]*svg_big-25, stat[3]*svg_big+8,"",'white',"white",'txt_lin', 10,'c'+stat[1])
            }
            else if(stat[1]=='G04022'||stat[1]=='G04016'||stat[1]=='G04021'
                ||stat[1]=='G04011'||stat[1]=='G04012'||stat[1]=='G04015'||stat[1]=='G04005'||stat[1]=='G04006'||stat[1]=='G04001'||stat[1]=='G04002'||stat[1]=='G03095'||stat[1]=='G03092'
                ||stat[1]=='G03073'||stat[1]=='G03070'||stat[1]=='DG03058'||stat[1]=='G03058'||stat[1]=='G03033'||stat[1]=='G03032'||stat[1]=='G03027'||stat[1]=='G03028'||stat[1]=='G02098'||stat[1]=='G02092'
                ||stat[1]=='G02023'||stat[1]=='G02026'){
                rect(stat[2]*svg_big-25+32,stat[3]*svg_big-15,10,4,'none','none',2,'re_car acar'+stat[1],"r"+stat[1])        //ï¿½ï¿½
                rect(stat[2]*svg_big-25-12,stat[3]*svg_big-15,10,4,'none','none',2,'re_car bcar'+stat[1],'l'+stat[1])        //ï¿½ï¿½
                rect(stat[2]*svg_big-25,stat[3]*svg_big-17,32,8,'none','none',2,'re_car car'+stat[1],'car'+stat[1])
                cont(stat[2]*svg_big-25, stat[3]*svg_big+8-5,"",'white',"white",'txt_lin', 10,'c'+stat[1])
            }
            else if(stat[1]=='DG04038') {
                rect(stat[2]*svg_big-25+32,stat[3]*svg_big-5,10,4,'none','none',2,'re_car acar'+stat[1],"r"+stat[1])        //ï¿½ï¿½
                rect(stat[2]*svg_big-25-12,stat[3]*svg_big-5,10,4,'none','none',2,'re_car bcar'+stat[1],'l'+stat[1])        //ï¿½ï¿½
                rect(stat[2]*svg_big-25,stat[3]*svg_big-7,32,8,'none','none',2,'re_car car'+stat[1],'car'+stat[1])
                cont(stat[2]*svg_big-25, stat[3]*svg_big+8+5,"",'white',"white",'txt_lin', 10,'c'+stat[1])
            }
            else if(stat[1]=='DG02053'){
                rect(stat[2]*svg_big-25+32,stat[3]*svg_big-12,10,4,'none','none',2,'re_car acar'+stat[1],"r"+stat[1])        //ï¿½ï¿½
                rect(stat[2]*svg_big-25-12,stat[3]*svg_big-12,10,4,'none','none',2,'re_car bcar'+stat[1],'l'+stat[1])        //ï¿½ï¿½
                rect(stat[2]*svg_big-25,stat[3]*svg_big-14,32,8,'none','none',2,'re_car car'+stat[1],'car'+stat[1])
                cont(stat[2]*svg_big-25, stat[3]*svg_big+8-2,"",'white',"white",'txt_lin', 10,'c'+stat[1])
            }
            else{
                rect(stat[2]*svg_big-25+32,stat[3]*svg_big+12,10,4,'none','none',2,'re_car acar'+stat[1],"r"+stat[1])        //ï¿½ï¿½
                rect(stat[2]*svg_big-25-12,stat[3]*svg_big+12,10,4,'none','none',2,'re_car bcar'+stat[1],'l'+stat[1])        //ï¿½ï¿½
                rect(stat[2]*svg_big-25,stat[3]*svg_big+10,32,8,'none','none',2,'re_car car'+stat[1],'car'+stat[1])
                cont(stat[2]*svg_big-25, stat[3]*svg_big+30,"",'white',"white",'txt_lin', 10,'c'+stat[1])
            }
            break;
        case  7:
            cont(stat[2]*svg_big,stat[3]*svg_big,stat[1],'yellow','yellow',"cont_dux",12)
            break;
        case 4:
            switchdata_new.push(stat)
            cont(stat[2]*svg_big-10,stat[3]*svg_big+5,stat[1],'yellow','yellow',"cont_tex",12,stat[1])
            rect(stat[2]*svg_big-15,stat[3]*svg_big-7,56,16,"none",null,1)
            break;
        case 5:
            for(var sig_i=0;sig_i<signal_new.length;sig_i++){
                var s_i=signal_new[sig_i]
                if(stat[1]==s_i[1]){
                    switch (parseInt(s_i[5])) {
                        case 1:   //ï¿½ï¿½ï¿½ï¿½
                            cont(stat[2]*svg_big-15,stat[3]*svg_big,stat[1],'white','white',"cont_sig",12)
                            break;
                        case 2:   //ï¿½ï¿½ï¿½ï¿½
                            cont(stat[2]*svg_big-5,stat[3]*svg_big+5,stat[1],'white','white',"cont_sig",12)
                            break;
                        case 3:   //ï¿½ï¿½ï¿½ï¿½
                            cont(stat[2]*svg_big-5,stat[3]*svg_big,stat[1],'white','white',"cont_sig",12)
                            break;
                    }
                }
            }
            break;
        case 6:
            var stat1=stat[1].split('')
            for(var stat1i=stat1.length-1;stat1i>-1;stat1i--){
                cont(stat[2]*svg_big,stat[3]*svg_big-10-10*stat1i,stat1[stat1i],'white','white',"ydq_tex",12)
            }
            break;
    }
    rect(10*svg_big-25+32,7 *svg_big-2,10,4,'none','none',2,'re_car acar25-28DG',"r25-28DG")        //ï¿½ï¿½
    rect(10 *svg_big-25-12,7 *svg_big-2,10,4,'none','none',2,'re_car bcar25-28DG','l25-28DG')        //ï¿½ï¿½
    rect(10 *svg_big-25,7 *svg_big-4,32,8,'none','none',2,'re_car car25-28DG','car25-28DG')
    cont(10 *svg_big-25, 7 *svg_big+8,"",'white',"white",'txt_lin', 10,'c25-28DG')
    //ï¿½ï¿½26-27DG
    rect(10*svg_big-25+32,5 *svg_big-2,10,4,'none','none',2,'re_car acar26-27DG',"r26-27DG")        //ï¿½ï¿½
    rect(10 *svg_big-25-12,5 *svg_big-2,10,4,'none','none',2,'re_car bcar26-27DG','l26-27DG')        //ï¿½ï¿½
    rect(10 *svg_big-25,5 *svg_big-4,32,8,'none','none',2,'re_car car26-27DG','car26-27DG')
    cont(10 *svg_big-25, 5 *svg_big+8,"",'white',"white",'txt_lin', 10,'c26-27DG')
    //ï¿½ï¿½9-12DG
    rect(21*svg_big-25+32,19 *svg_big-2,10,4,'none','none',2,'re_car acar9-12DG',"r9-12DG")        //ï¿½ï¿½
    rect(21 *svg_big-25-12,19 *svg_big-2,10,4,'none','none',2,'re_car bcar9-12DG','l9-12DG')        //ï¿½ï¿½
    rect(21 *svg_big-25,19 *svg_big-4,32,8,'none','none',2,'re_car car9-12DG','car9-12DG')
    cont(21 *svg_big-25, 19 *svg_big+8,"",'white',"white",'txt_lin', 10,'c9-12DG')
    //ï¿½ï¿½10-11DG
    rect(21*svg_big-25+32,21 *svg_big-2,10,4,'none','none',2,'re_car acar10-11DG',"r10-11DG")        //ï¿½ï¿½
    rect(21 *svg_big-25-12,21 *svg_big-2,10,4,'none','none',2,'re_car bcar10-11DG','l10-11DG')        //ï¿½ï¿½
    rect(21 *svg_big-25,21 *svg_big-4,32,8,'none','none',2,'re_car car10-11DG','car10-11DG')
    cont(21 *svg_big-25, 21 *svg_big+8,"",'white',"white",'txt_lin', 10,'c10-11DG')
    //ï¿½ï¿½6-7DG
    rect(30*svg_big-25+32,12 *svg_big-2,10,4,'none','none',2,'re_car acar6-7DG',"r6-7DG")        //ï¿½ï¿½
    rect(30 *svg_big-25-12,12 *svg_big-2,10,4,'none','none',2,'re_car bcar6-7DG','l6-7DG')        //ï¿½ï¿½
    rect(30 *svg_big-25,12 *svg_big-4,32,8,'none','none',2,'re_car car6-7DG','car6-7DG')
    cont(30 *svg_big-25, 12 *svg_big+8,"",'white',"white",'txt_lin', 10,'c6-7DG')
    //ï¿½ï¿½5-8DG
    rect(30*svg_big-25+32,19 *svg_big-2,10,4,'none','none',2,'re_car acar5-8DG',"r5-8DG")        //ï¿½ï¿½
    rect(30 *svg_big-25-12,19 *svg_big-2,10,4,'none','none',2,'re_car bcar5-8DG','l5-8DG')        //ï¿½ï¿½
    rect(30 *svg_big-25,19 *svg_big-4,32,8,'none','none',2,'re_car car5-8DG','car5-8DG')
    cont(30 *svg_big-25, 19 *svg_big+8,"",'white',"white",'txt_lin', 10,'c5-8DG')
}
function tex_cont() {
    chooseMain(XZ_writ,static_text)
    cli_cont()
    bl()
    contHover()
}
/*
 * ï¿½Ð¶ï¿½ï¿½ï¿½ï¿½ï¿½
 */
function chooseMain(fun,cont) {
    var arr_al=[]
    arr_al= loop(cont)               //ï¿½ï¿½Ç°ï¿½ï¿½ï¿½Ú¶ï¿½Ó¦ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
    for(var i=0;i<arr_al.length;i++) {
        fun(cont[arr_al[i]])
    }
}
/*
 *  ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ñ¡ï¿½ï¿½ï¿½Ð§ï¿½ï¿½
 *  ï¿½ß¼ï¿½ï¿½ï¿½ï¿½ï¿½
 *
 */
function cli_dux(){
    document.oncontextmenu = function(e){
        e=e||event
        e.stopPropagation()
        e.preventDefault();
    };
    var k,thi,lin=null
    $('.dux').each(function (i) {
        $(this).mousedown(function (e) {
            e = e || event
            e.stopPropagation()
            if (e.which == 3) {
                e = e || event
                e.stopPropagation()
                e.preventDefault()
                thi=$(this)
                if(thi.get(0).classList&&thi!=null) {
                    var cla = $(this).get(0).classList[0]
                    var lined = $('#' + cla)
                    var px = e.pageX;
                    var py = e.pageY;
                    var thiName = $(this).attr('id')
                    cli_jup(thiName, $('#menu_track'))
                    if (lined.get(0).car) {
                        $('#menu_track').find('li').eq(2).removeClass('no')
                        $('#menu_track').find('li').eq(3).removeClass('no')
                    }
                    else {
                        $('#menu_track').find('li').eq(2).addClass('no')
                        $('#menu_track').find('li').eq(3).addClass('no')
                    }
                    if (lined.get(0).clos) {
                        $('#menu_track').find('li').eq(6).removeClass('no')
                    }
                    else {
                        $('#menu_track').find('li').eq(6).addClass('no')
                    }
                    if (thi.get(0).classList && thi != null) {
                        if (lined.get(0).car) {
                            $('#menu_track').find('li').eq(1).addClass('no')
                            $('#menu_track').find('li').eq(4).addClass('no')
                            $('#menu_track').find('li').eq(5).addClass('no')
                        }
                        else {
                            $('#menu_track').find('li').eq(1).removeClass('no')
                            $('#menu_track').find('li').eq(4).removeClass('no')
                            $('#menu_track').find('li').eq(5).removeClass('no')
                        }
                    }
                    open_mode('menu_track', px, py)
                    k = i
                    $('#menu_track').attr({'cli': true})
                }
                else{
                    cla=null
                }
                cl_d(cla)
            }
        })
    })
    function cl_d(cla) {
        $('#menu_track').find('li').each(function (kjp) {
            $(this).click(function (e) {
                e = e || event
                e.stopPropagation()
                e.preventDefault();
                if ($('#menu_track').attr('cli') == 'true' && cla != null) {
                    e = e || event
                    e.stopPropagation()
                    e.preventDefault()
                    lin = document.getElementById(cla)
                    $('#menu_track').hide()
                    switch (kjp) {
                        case 1:/*ï¿½ï¿½Ó³ï¿½ï¿½ï¿?*/
                            if ($(this).get(0).className.indexOf('no') == -1) {
                                var tha = this
                                var sig_key_f = LSXS(lin.id)
                                var sig_fir = lin.id
                                var car_cla_name, moshi_name, car_inp_val = []
                                $('#car').modal('show')
                                for (var i = 0; i < $('.car_inp').length; i++) {
                                    $('.car_inp').eq(i).val("")
                                }
                                $('.car_cla').each(function (i) {
                                    $('.car_cla:eq(' + i + '):checked').removeAttr('checked')
                                })
                                $('.ms_cla').each(function (i) {
                                    $('.ms_cla:eq(' + i + '):checked').removeAttr('checked')
                                })
                                document.getElementById("RM").checked = true;//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.24ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ó³ï¿½ï¿½Îµï¿½Ä¬ï¿½ï¿½Ñ¡ï¿½ï¿?
                                document.getElementById("PlanCar").checked = true;//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.24ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ó³ï¿½ï¿½Îµï¿½Ä¬ï¿½ï¿½Ñ¡ï¿½ï¿?
                                $('#add_rig').click(function () {
                                    $('#car').modal('hide')
                                    var ci = $('.car_inp')
                                    for (var i = 0; i < $('.car_inp').length; i++) {
                                        if ($('.car_inp').eq(i).val() != "") {
                                            car_inp_val.push($('.car_inp').eq(i).val())
                                        }
                                    }
                                    $('.car_cla').each(function (i) {
                                        if ($('.car_cla').eq(i).get(0).checked) {
                                            car_cla_name = i + 1
                                        }
                                    })
                                    $('.ms_cla').each(function (i) {
                                        if ($('.ms_cla').eq(i).get(0).checked) {
                                            moshi_name = i + 1
                                        }
                                    })
                                    var t = 'ac'
                                    if ($('.car_inp').eq(0).val() != "" && $('.car_inp').eq(1).val() != "" && $('.car_inp').eq(2).val() != "" && $('.car_inp').eq(3).val() != "" && moshi_name > 0 && car_cla_name > 0) {
                                        fot_sle(sig_fir + "_" + tha.innerText, t + "_" + sig_key_f + "_" + 1 + "_" + "" + "_" + "" + "_" + ci.eq(0).val() + "_" + ci.eq(1).val() + "_" + ci.eq(2).val() + "_" + ci.eq(3).val() + "_" + car_cla_name + "_" + moshi_name + "_" + sig_fir + "¹ìµÀ")
                                    }
                                });
                            }
                            break;
                        case 2:                   //ï¿½Þ¸Ä³ï¿½ï¿½ï¿½
                            if ($(this).get(0).className.indexOf('no') == -1) {
                                var t = 'ac'
                                var tha = this
                                var sig_key_f = LSXS(lin.id)
                                var sig_fir = lin.id
                                var car_cla_name, moshi_name, car_inp_val = []
                                $('#car').modal('show')
                                $('.car_inp').eq(0).val(lin.carPVID)
                                $('.car_inp').eq(1).val(lin.carPTID)
                                $('.car_inp').eq(2).val(lin.carSID)
                                $('.car_inp').eq(3).val(lin.carDID)
                                if(lin.carType==5){
                                    $('.car_cla').attr({'checked': false,'disabled':'disabled'})
                                }
                                else{
                                    $('.car_cla').eq(lin.carType).attr({'checked': 'checked'})
                                }
                                $('.ms_cla').eq(lin.carMode).attr({'checked': 'checked'})
                                $('#add_rig').click(function () {
                                    $('#car').modal('hide')
                                    var ci = $('.car_inp')
                                    for (var i = 0; i < $('.car_inp').length; i++) {

                                        if ($('.car_inp').eq(i).val() != "") {
                                            car_inp_val.push($('.car_inp').eq(i).val())
                                        }
                                    }
                                    $('.car_cla').each(function (i) {


                                        if ($('.car_cla').eq(i).get(0).checked) {
                                            car_cla_name = i + 1
                                        }
                                    })
                                    $('.ms_cla').each(function (i) {
                                        if ($('.ms_cla').eq(i).get(0).checked) {
                                            moshi_name = i + 1
                                        }
                                    })
                                    var No = lin.carNo
                                    if ($('.car_inp').eq(0).val() != "" && $('.car_inp').eq(1).val() != "" && $('.car_inp').eq(2).val() != "" && $('.car_inp').eq(3).val() != "" && moshi_name > 0 && car_cla_name > 0) {
                                        fot_sle(sig_fir + "_" + tha.innerText, t + "_" + sig_key_f + "_" + 2 + "_" + No + "_" + "" + "_" + ci.eq(0).val() + "_" + ci.eq(1).val() + "_" + ci.eq(2).val() + "_" + ci.eq(3).val() + "_" + lin.carType + "_" + lin.carMode + "_" + sig_fir + "¹ìµÀ")
                                    }
                                })
                            }
                            break;
                        case 3:                  //É¾ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
                            if ($(this).get(0).className.indexOf('no') == -1) {
                                var t = 'ac'
                                var tha = this
                                var sig_key_f = LSXS(lin.id)
                                var sig_fir = lin.id
                                var No = lin.carNo
                                fot_sle(sig_fir + "_" + tha.innerText, t + "_" + sig_key_f + "_" + 3 + "_" + No + "_" + "" + "_" + lin.carPVID + "_" + lin.carPTID + "_" + lin.carSID + "_" + lin.carDID + "_" + lin.carType + "_" + lin.carMode + "_" + sig_fir + "¹ìµÀ")
                            }
                            break;
                        case 4:             //ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
                            var t = 'trl'
                            var sig_key_f = name_out.indexOf(lin.id) + 1
                            var sig_fir = lin.id
                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "¹ìµÀ")
                            break;
                        case 5:             //ï¿½ï¿½ï¿½ï¿½ï¿?
                            var t = 'trl'
                            var sig_key_f = name_out.indexOf(lin.id) + 1
                            var sig_fir = lin.id
                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "¹ìµÀ")
                            break;
                        case 6:             //È·ï¿½Ï½ï¿½ï¿½ï¿½ï¿?
                            if ($(this).get(0).className.indexOf('no') == -1) {
                                var t = 'qtrl'
                                var sig_key_f = name_out.indexOf(lin.id) + 1
                                var sig_fir = lin.id
                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "¹ìµÀ")
                            }
                            break;
                        case 7:             //ï¿½ï¿½ï¿½ï¿½0
                            var t = 'p'
                            var sig_key_f = name_out.indexOf(lin.id) + 1
                            var sig_fir = lin.id
                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + 0 + "_" + sig_fir + "¹ìµÀ")
                            break;
                        case 8:            //ï¿½ï¿½ï¿½ï¿½15
                            var t = 'p'
                            var sig_key_f = name_out.indexOf(lin.id) + 1
                            var sig_fir = lin.id
                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + 15 + "_" + sig_fir + "¹ìµÀ")
                            break;
                        case 9:            //ï¿½ï¿½ï¿½ï¿½30
                            var t = 'p'
                            var sig_key_f = name_out.indexOf(lin.id) + 1
                            var sig_fir = lin.id
                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + 30 + "_" + sig_fir + "¹ìµÀ")
                            break;
                        case 10:            //ï¿½ï¿½ï¿½ï¿½45
                            var t = 'p'
                            var sig_key_f = name_out.indexOf(lin.id) + 1
                            var sig_fir = lin.id
                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + 45 + "_" + sig_fir + "¹ìµÀ")
                            break;
                        case 11:            //ï¿½ï¿½ï¿½ï¿½60
                            var t = 'p'
                            var sig_key_f = name_out.indexOf(lin.id) + 1
                            var sig_fir = lin.id
                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + 60 + "_" + sig_fir + "¹ìµÀ")
                            break;
                        case 12:           //ï¿½ï¿½ï¿½Ù¹Ø±ï¿½
                            var t = 'p'
                            var sig_key_f = name_out.indexOf(lin.id) + 1
                            var sig_fir = lin.id
                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + 2 + "_" + sig_fir + "¹ìµÀ")//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.19ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ö»ï¿½ï¿½break
                            break;
                        case 13:          //ï¿½ï¿½ï¿½ï¿½Ê§Ð§
                            var t, se, sig_fir, sig_key_f
                            var clB = lin.className.baseVal.split(" ")
                            var txt
                            if (ForTrack(lin)) {
                                t = 'switchaccident'
                                se = 3
                                sig_key_f = name_out.indexOf(clB[2]) + 1
                                sig_fir = clB[2]
                                txt = "µÀ²í"
                            }
                            else {
                                t = 'axleaccident'
                                se = 5
                                sig_key_f = name_out.indexOf(lin.id) + 1
                                sig_fir = lin.id
                                txt = '¹ìµÀ'
                            }
                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + se + "_" + sig_fir + txt)//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.19ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ö»ï¿½ï¿½break

                            break;
                        case 14:           //ï¿½ï¿½ï¿½á¸´Î»
                            var t, se, sig_fir, sig_key_f
                            var clB = lin.className.baseVal.split(" ")
                            var txt
                            if (ForTrack(lin)) {
                                t = 'switchaccident'
                                se = 3
                                sig_key_f = name_out.indexOf(clB[2]) + 1
                                sig_fir = clB[2]
                                txt = "µÀ²í"
                            }
                            else {
                                t = 'axleaccident'
                                se = 8
                                sig_key_f = name_out.indexOf(lin.id) + 1
                                sig_fir = lin.id
                                txt = '¹ìµÀ'
                            }
                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + se + "_" + sig_fir + txt)//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.19ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ö»ï¿½ï¿½break

                            break;
                        case 16:           //ï¿½ï¿½ï¿½ï¿½TWC
                            var se
                            var clB = lin.className.baseVal.split(" ")
                            var txt
                            if (ForTrack(lin)) {
                                t = 'switchaccident'
                                se = 7
                                sig_key_f = name_out.indexOf(clB[2]) + 1
                                sig_fir = clB[2]
                                txt = "µÀ²í"
                            }
                            else {
                                t = 'axleaccident'
                                se = 7
                                sig_key_f = name_out.indexOf(lin.id) + 1
                                sig_fir = lin.id
                                txt = '¹ìµÀ'
                            }
                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + se + "_" + sig_fir + txt)//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.19ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ö»ï¿½ï¿½break
                            break;
                        case 17:          //ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
                            var se, sig
                            var clB = lin.className.baseVal.split(" ")
                            var txt
                            if (ForTrack(lin)) {
                                t = 'switchaccident'
                                se = 9
                                sig_key_f = name_out.indexOf(clB[2]) + 1
                                sig_fir = clB[2]
                                txt = "µÀ²í"
                            }
                            else {
                                t = 'axleaccident'
                                se = 6
                                sig_key_f = name_out.indexOf(lin.id) + 1
                                sig_fir = lin.id
                                txt = '¹ìµÀ'
                            }
                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + se + "_" + sig_fir + txt)//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.19ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ö»ï¿½ï¿½break
                            break;
                        case 18:            //ï¿½ï¿½ï¿½Ê½ï¿½
                            t = 'r'
                            sig_key_f = name_out.indexOf(lin.id) + 1
                            sig_fir = lin.id
                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "ï¿½ï¿½ï¿?")
                            break;
                        case 19:            //ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
                            t = 'axleaccident'
                            se = 3
                            sig_key_f = name_out.indexOf(lin.id) + 1
                            sig_fir = lin.id
                            txt = '¹ìµÀ'
                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + se + "_" + sig_fir + txt)//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.19ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ö»ï¿½ï¿½break
                            break;
                    }
                    $('#menu_track').attr({'cli': false})
                    cla = null
                    return
                }
            })
        })
    }
}
/*
 *  ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ñ¡ï¿½ï¿½ï¿½Ð§ï¿½ï¿½
 *  ï¿½ï¿½ï¿½ï¿½ï¿?
 *
 */

var DC="µÀ²í"
var GDL="¹ìµÀ"
function cli_lin() {
    document.oncontextmenu = function(e){
        e=e||event
        e.preventDefault();
    };
    var k,thi
    var cliN
    var t
    var lin
    var tha
    var sig_key_f
    var sig_fir
    var car_cla_name, moshi_name, car_inp_val = []

    $('.lin').each(function (i) {
        $(this).mousedown(function (e) {
            e = e || event
            e.stopPropagation()

            if (e.which == 3) {
                k=null
                lin=null
                e = e || event
                e.stopPropagation()
                e.preventDefault()
                cliN=true
                $('#svg_bg').hide()
                $('#men_stspan').hide()//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.23ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Úµï¿½ï¿½ï¿½Éµï¿½ï¿½Ò¼ï¿½Ê±ï¿½ï¿½ï¿½ï¿½Õ¾Ì¨ï¿½ï¿½ï¿½Ò¼ï¿?
                $('#men_signal').hide()//ï¿½ÅºÅ»ï¿½ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
                $('#menu_sw').hide()//ï¿½ï¿½ï¿½ï¿½ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
                $('#auto_roud').hide()//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Â·ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
                thi=$(this)
                var px = e.pageX;
                var py = e.pageY;
                var thiName=$(this).attr('id')
                cli_jup(thiName,$('#menu_track'))
                if($(this).get(0).car){
                    $('#menu_track').find('li').eq(2).removeClass('no')
                    $('#menu_track').find('li').eq(3).removeClass('no')
                }
                else{
                    $('#menu_track').find('li').eq(2).addClass('no')
                    $('#menu_track').find('li').eq(3).addClass('no')
                }
                if($(this).get(0).clos){
                    $('#menu_track').find('li').eq(6).removeClass('no')

                }
                else{
                    $('#menu_track').find('li').eq(6).addClass('no')
                }

                if($(this).context.classList!=null&&$(this).context.car){
                    $('#menu_track').find('li').eq(1).addClass('no')
                    $('#menu_track').find('li').eq(4).addClass('no')
                    $('#menu_track').find('li').eq(5).addClass('no')
                }
                else{
                    $('#menu_track').find('li').eq(1).removeClass('no')
                    $('#menu_track').find('li').eq(4).removeClass('no')
                    $('#menu_track').find('li').eq(5).removeClass('no')
                }
                open_mode('menu_track',px,py)
                k= i
                $('#menu_track').attr({'linC':true})
            }

        })
    })
    $('#menu_track').find('li').each(function (j) {
        $(this).click(function () {
            if( $('#menu_track').attr('linC')=='true') {
                if (k != null || k === 0) {
                    lin = document.getElementsByClassName('lin')[k]
                    var gd = document.getElementsByClassName('GD')[k]
                    var con_g = document.getElementsByClassName('con_g')[k]   //ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ê¾T
                    if (lin != null) {
                        $('#menu_track').hide()
                        switch (j) {
                            case 1:/*ï¿½ï¿½Ó³ï¿½ï¿½ï¿?*/
                                if ($(this).get(0).className.indexOf('no') == -1) {
                                    sig_fir = null
                                    tha = this
                                    sig_key_f = LSXS(lin.id)

                                    // console.log(lin)
                                    sig_fir = lin.id
                                    //console.log(sig_fir)
                                    $('#car').modal('show')

                                    for (var i = 0; i < $('.car_inp').length; i++) {
                                        $('.car_inp').eq(i).val("")
                                    }
                                    $('.car_cla').each(function (i) {
                                        $('.car_cla:eq(' + i + '):checked').removeAttr('checked')
                                    })
                                    $('.ms_cla').each(function (i) {
                                        $('.ms_cla:eq(' + i + '):checked').removeAttr('checked')
                                    })
                                    document.getElementById("RM").checked = true;//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.24ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ó³ï¿½ï¿½Îµï¿½Ä¬ï¿½ï¿½Ñ¡ï¿½ï¿?
                                    document.getElementById("PlanCar").checked = true;//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.24ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ó³ï¿½ï¿½Îµï¿½Ä¬ï¿½ï¿½Ñ¡ï¿½ï¿?
                                    $('#add_rig').click(function () {
                                        $('#car').modal('hide')
                                        var ci = $('.car_inp')
                                        for (var i = 0; i < $('.car_inp').length; i++) {

                                            if ($('.car_inp').eq(i).val() != "") {
                                                car_inp_val.push($('.car_inp').eq(i).val())
                                            }
                                        }
                                        $('.car_cla').each(function (i) {

                                            if ($('.car_cla').eq(i).get(0).checked) {
                                                car_cla_name = i + 1
                                            }
                                        })
                                        $('.ms_cla').each(function (i) {
                                            if ($('.ms_cla').eq(i).get(0).checked) {
                                                moshi_name = i + 1
                                            }
                                        })
                                        t = 'ac'
                                        if ($('.car_inp').eq(0).val() != "" && $('.car_inp').eq(1).val() != "" && $('.car_inp').eq(2).val() != "" && $('.car_inp').eq(3).val() != "" && moshi_name > 0 && car_cla_name > 0) {
                                            sig_fir != null ? fot_sle(sig_fir + "_" + tha.innerText, t + "_" + sig_key_f + "_" + 1 + "_" + "" + "_" + "" + "_" + ci.eq(0).val() + "_" + ci.eq(1).val() + "_" + ci.eq(2).val() + "_" + ci.eq(3).val() + "_" + car_cla_name + "_" + moshi_name + "_" + sig_fir + "¹ìµÀ") : ""
                                        }
                                        sig_fir = null
                                    });
                                }
                                break;
                            case 2:                   //ï¿½Þ¸Ä³ï¿½ï¿½ï¿½

                                if ($(this).get(0).className.indexOf('no') == -1) {
                                    t = 'ac'
                                    tha = this
                                    sig_key_f = LSXS(lin.id)
                                    sig_fir = lin.id
                                    $('#car').modal('show')
                                    $('.car_inp').eq(0).val(lin.carPVID)
                                    $('.car_inp').eq(1).val(lin.carPTID)
                                    $('.car_inp').eq(2).val(lin.carSID)
                                    $('.car_inp').eq(3).val(lin.carDID)
                                    if(lin.carType==5){
                                        $('.car_cla').attr({'checked': false,'disabled':'disabled'})
                                    }
                                    else{
                                        $('.car_cla').eq(lin.carType).attr({'checked': 'checked'})
                                    }

                                    $('.ms_cla').eq(lin.carMode).attr({'checked': 'checked'})
                                    $('#add_rig').click(function () {
                                        $('#car').modal('hide')
                                        var ci = $('.car_inp')
                                        for (var i = 0; i < $('.car_inp').length; i++) {
                                            if ($('.car_inp').eq(i).val() != "") {
                                                car_inp_val.push($('.car_inp').eq(i).val())
                                            }
                                        }
                                        $('.car_cla').each(function (i) {

                                            if ($('.car_cla').eq(i).get(0).checked) {
                                                car_cla_name = i + 1
                                            }
                                        })
                                        $('.ms_cla').each(function (i) {
                                            if ($('.ms_cla').eq(i).get(0).checked) {
                                                moshi_name = i + 1
                                            }
                                        })
                                        var No = lin.carNo
                                        if ($('.car_inp').eq(0).val() != "" && $('.car_inp').eq(1).val() != "" && $('.car_inp').eq(2).val() != "" && $('.car_inp').eq(3).val() != "" && moshi_name > 0 && car_cla_name > 0) {
                                            fot_sle(sig_fir + "_" + tha.innerText, t + "_" + sig_key_f + "_" + 2 + "_" + No + "_" + "" + "_" + ci.eq(0).val() + "_" + ci.eq(1).val() + "_" + ci.eq(2).val() + "_" + ci.eq(3).val() + "_" + lin.carType + "_" + lin.carMode + "_" + sig_fir + "¹ìµÀ")
                                        }
                                    })
                                }
                                break;
                            case 3:                  //É¾ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
                                if ($(this).get(0).className.indexOf('no') == -1) {
                                    t = 'ac'
                                    tha = this
                                    sig_key_f = LSXS(lin.id)
                                    sig_fir = lin.id
                                    No = lin.carNo
                                    fot_sle(sig_fir + "_" + tha.innerText, t + "_" + sig_key_f + "_" + 3 + "_" + No + "_" + "" + "_" + lin.carPVID + "_" + lin.carPTID + "_" + lin.carSID + "_" + lin.carDID + "_" + lin.carType + "_" + lin.carMode + "_" + sig_fir + "¹ìµÀ")
                                }
                                break;

                            case 4:             //ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
                                t = 'trl'
                                sig_key_f = name_out.indexOf(lin.id) + 1
                                sig_fir = lin.id
                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "¹ìµÀ")
                                break;
                            case 5:             //ï¿½ï¿½ï¿½ï¿½ï¿?
                                t = 'trl'
                                sig_key_f = name_out.indexOf(lin.id) + 1
                                sig_fir = lin.id
                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "¹ìµÀ")
                                break;
                            case 6:             //È·ï¿½Ï½ï¿½ï¿½ï¿½ï¿?
                                if ($(this).get(0).className.indexOf('no') == -1) {
                                    t = 'qtrl'
                                    sig_key_f = name_out.indexOf(lin.id) + 1
                                    sig_fir = lin.id
                                    fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "¹ìµÀ")
                                }

                                break;
                            case 7:             //ï¿½ï¿½ï¿½ï¿½0
                                t = 'p'
                                sig_key_f = name_out.indexOf(lin.id) + 1
                                sig_fir = lin.id
                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + 0 + "_" + sig_fir + "¹ìµÀ")
                                break;
                            case 8:            //ï¿½ï¿½ï¿½ï¿½15
                                t = 'p'
                                sig_key_f = name_out.indexOf(lin.id) + 1
                                sig_fir = lin.id
                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + 15 + "_" + sig_fir + "¹ìµÀ")
                                break;
                            case 9:            //ï¿½ï¿½ï¿½ï¿½30
                                t = 'p'
                                sig_key_f = name_out.indexOf(lin.id) + 1
                                sig_fir = lin.id
                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + 30 + "_" + sig_fir + "¹ìµÀ")
                                break;
                            case 10:            //ï¿½ï¿½ï¿½ï¿½45
                                t = 'p'
                                sig_key_f = name_out.indexOf(lin.id) + 1
                                sig_fir = lin.id
                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + 45 + "_" + sig_fir + "ï¿½ï¿½ï¿?")
                                break;
                            case 11:            //ï¿½ï¿½ï¿½ï¿½60
                                t = 'p'
                                var sig_key_f = name_out.indexOf(lin.id) + 1
                                var sig_fir = lin.id
                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + 60 + "_" + sig_fir + "¹ìµÀ")
                                break;
                            case 12:           //ï¿½ï¿½ï¿½Ù¹Ø±ï¿½
                                var t = 'p'
                                sig_key_f = name_out.indexOf(lin.id) + 1
                                sig_fir = lin.id
                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + 2 + "_" + sig_fir + "¹ìµÀ")//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.19ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ö»ï¿½ï¿½break
                                break;
                            case 13:           //ï¿½ï¿½ï¿½ï¿½Ê§Ð§
                                var se
                                var clB = lin.className.baseVal.split(" ")
                                var txt
                                if (ForTrack(lin)) {
                                    t = 'switchaccident'
                                    se = 3
                                    sig_key_f = name_out.indexOf(clB[2]) + 1
                                    sig_fir = clB[2]
                                    txt = "µÀ²í"
                                }
                                else {
                                    t = 'axleaccident'
                                    se = 5
                                    sig_key_f = name_out.indexOf(lin.id) + 1
                                    sig_fir = lin.id
                                    txt = GDL
                                }
                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + se + "_" + sig_fir + txt)//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.19ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ö»ï¿½ï¿½break
                                break;
                            case 14:           //ï¿½ï¿½ï¿½á¸´Î»
                                var se
                                var clB = lin.className.baseVal.split(" ")
                                var txt
                                if (ForTrack(lin)) {
                                    t = 'switchaccident'
                                    se = 3
                                    sig_key_f = name_out.indexOf(clB[2]) + 1
                                    sig_fir = clB[2]
                                    txt = DC
                                }
                                else {
                                    t = 'axleaccident'
                                    se = 8
                                    sig_key_f = name_out.indexOf(lin.id) + 1
                                    sig_fir = lin.id
                                    txt = GDL
                                }
                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + se + "_" + sig_fir + txt)//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.19ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ö»ï¿½ï¿½break
                                break;
                            case 16:           //ï¿½ï¿½ï¿½ï¿½TWC
                                var se
                                var clB = lin.className.baseVal.split(" ")
                                var txt
                                if (ForTrack(lin)) {
                                    t = 'switchaccident'
                                    se = 7
                                    sig_key_f = name_out.indexOf(clB[2]) + 1
                                    sig_fir = clB[2]
                                    txt = DC
                                }
                                else {
                                    t = 'axleaccident'
                                    se = 7
                                    sig_key_f = name_out.indexOf(lin.id) + 1
                                    sig_fir = lin.id
                                    txt = GDL
                                }
                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + se + "_" + sig_fir + txt)//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.19ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ö»ï¿½ï¿½break
                                break;
                            case 17:          //ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
                                var se, sig
                                var clB = lin.className.baseVal.split(" ")
                                var txt
                                if (ForTrack(lin)) {
                                    t = 'switchaccident'
                                    se = 9
                                    sig_key_f = name_out.indexOf(clB[2]) + 1
                                    sig_fir = clB[2]
                                    txt = DC
                                }
                                else {
                                    t = 'axleaccident'
                                    se = 6
                                    sig_key_f = name_out.indexOf(lin.id) + 1
                                    sig_fir = lin.id
                                    txt = GDL
                                }
                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + se + "_" + sig_fir + txt)//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.19ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ö»ï¿½ï¿½break
                                break;
                            case 18:            //ï¿½ï¿½ï¿½Ê½ï¿½
                                t = 'r'
                                sig_key_f = name_out.indexOf(lin.id) + 1
                                sig_fir = lin.id
                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "ï¿½ï¿½ï¿?")
                                break;
                            case 19:            //ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
                                t = 'axleaccident'
                                se = 3
                                sig_key_f = name_out.indexOf(lin.id) + 1
                                sig_fir = lin.id
                                txt = GDL
                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + se + "_" + sig_fir + txt)//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.19ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ö»ï¿½ï¿½break
                                break;
                        }
                    }
                    k = null
                    $('#menu_track').attr({'linC': false})
                }
            }
        })
    })
}
function ForTrack(x){
    var id= x.id
    for(var tr_i=0;tr_i<track_segment.length;tr_i++) {
        if(track_segment[tr_i][6]==id){

            if(track_segment[tr_i][5]!=""){
                return true
            }
            else{
                return false
            }
        }
    }
}
LSXS=function (x) {
    for(var i=0;i<axle_section.length;i++) {
        if(axle_section[i][1]==x){
            return axle_section[i][0]
        }
    }
}
/*
 *  ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ñ¡ï¿½ï¿½ï¿½Ð§ï¿½ï¿½
 *  ï¿½ï¿½
 *
 */
function cli_sig() {
    var XHJ = 'ÐÅºÅ»ú'
    var fil_col
    var tn = 1
    var rou_all = []
    var cont_sig_arr
    var sig_arr
    var cont_sig, k
    $('.cir').each(function (i) {    //ï¿½ï¿½ï¿½ï¿½ï¿½Ó¦ï¿½ï¿½ï¿½ï¿½ï¿½
        $(this).click(function () {
            var t = 't'
            cont_sig_arr = document.getElementsByClassName('cont_sig');
            sig_arr = document.getElementsByClassName('cir');
            cont_sig = cont_sig_arr[i]         //ï¿½ï¿½ï¿½ï¿½È¶ï¿½Ó¦ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
            if (tn == 1) {
                /*ï¿½Òµï¿½ï¿½ï¿½Ó¦ï¿½ï¿½Ë¸ï¿½ÅºÅ»ï¿½*/
                for (var m = 0; m < routing.length; m++) {
                    var rou = routing[m]
                    if (rou[1] == signal_new[i][0] && rou_all.indexOf(rou[3]) == -1) {
                        rou_all.push(rou[3])
                    }
                }
            }

            for (var l = 0; l < cont_sig_arr.length; l++) {
                if (cont_sig_arr[l].tur && tn == 2) {           //ï¿½ï¿½ï¿½Í¬Ò»ï¿½ï¿?
                    clearInterval(cont_sig_arr[l].tim)
                    clearInterval(cont_sig_arr[l].tin)
                    for (var rou_t_i = 0; rou_t_i < rou_all.length; rou_t_i++) {
                        for (var s_i = 0; s_i < signal_new.length; s_i++) {
                            if (signal_new[s_i][0] == rou_all[rou_t_i]) {
                                clearInterval(sig_arr[s_i].tim)
                                clearInterval(sig_arr[s_i].tin)
                                var di = sig_arr[s_i].id
                                for (var sigOver_i = 0; sigOver_i < signal.length; sigOver_i++) {
                                    if (signal[sigOver_i][1] == di) {
                                        chag_cor(sig_arr[s_i], 'white', sig_arr[s_i].fil_col);
                                    }
                                }
                                sig_arr[s_i].tur = false
                            }
                        }
                    }
                    cont_sig_arr[l].tur = false
                    cont_sig_arr[l].setAttribute('fill', 'white')
                    cont_sig_arr[l].setAttribute('stroke', 'white')
                    tn = 2 ? tn = 1 : ""
                    rou_all = []
                }
                else if (cont_sig_arr[l] == cont_sig && !cont_sig_arr[l].tur && tn == 1) {         //ï¿½ï¿½Ò»ï¿½Îµï¿½ï¿?
                    if (rou_all.length > 0) {
                        for (var rou_f_i = 0; rou_f_i < rou_all.length; rou_f_i++) {
                            for (var s_i = 0; s_i < signal_new.length; s_i++) {
                                if (signal_new[s_i][0] == rou_all[rou_f_i]) {
                                    sig_arr[s_i].fil_col = sig_arr[s_i].attributes.fill.value
                                    blu(sig_arr[s_i], 'yellow', 'yellow')
                                }
                            }
                        }
                        blu(cont_sig, 'green', 'green')
                        tn = tn + 1
                        //cli_r_rout(cont_sig, rou_all, tn)
                    }

                }
            }
        })
    })
    /*ï¿½Ò¼ï¿½ï¿½ï¿½ï¿?*/
    $('.cir').each(function (i) {
        var thi
        $(this).mousedown(function (e) {
            var thiName = $(this).attr('id')
            e = e || event;
            e.stopPropagation()
            if (e.which == 3) {
                thi = $(this)
                var sig_fir, sig_sec
                var px = e.pageX
                var py = e.pageY
                var t = 't'
                var cont_sig_arr = document.getElementsByClassName('cont_sig');
                var sig_arr = document.getElementsByClassName('cir');
                var sig = sig_arr[i]
                k = i
                if (this.tur) {
                    if (sig.tur && cont_sig.tur && cont_sig_arr[i]) {       //ï¿½ï¿½È·ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Â·ï¿½ï¿?
                        cli_jup(thiName, $('#route'))
                        clearInterval(cont_sig.tim)
                        clearInterval(cont_sig.tin)
                        cont_sig.tur = false
                        for (var rou_t_i = 0; rou_t_i < rou_all.length; rou_t_i++) {
                            for (var s_i = 0; s_i < signal_new.length; s_i++) {
                                if (signal_new[s_i][0] == rou_all[rou_t_i]) {
                                    clearInterval(sig_arr[s_i].tim)
                                    clearInterval(sig_arr[s_i].tin)
                                    var di = sig_arr[s_i].id
                                    for (var sigOver_i = 0; sigOver_i < signal.length; sigOver_i++) {
                                        if (signal[sigOver_i][1] == di) {
                                            chag_cor(sig_arr[s_i], 'white', sig_arr[s_i].fil_col);
                                        }
                                    }
                                    sig_arr[s_i].tur = false
                                }
                            }
                        }
                        clearInterval(sig.tim)
                        clearInterval(sig.tin)
                        var di2 = sig.id
                        for (var sigOver_i = 0; sigOver_i < signal.length; sigOver_i++) {
                            if (signal[sigOver_i][1] == di2) {
                                chag_cor(sig, 'white', sig.fil_col);
                            }
                        }
                        sig.tur = false
                        sig_fir = cont_sig.childNodes[0].textContent
                        sig_sec = cont_sig_arr[i].childNodes[0].textContent
                        cliRoute(t, sig_fir, sig_sec, XHJ)


                        open_mode('route', px, py)
                        cont_sig.setAttribute('fill', 'white')
                        cont_sig.setAttribute('stroke', 'white')
                        cont_sig_arr[i].setAttribute('fill', 'white')
                        cont_sig_arr[i].setAttribute('stroke', 'white')
                        tn = 1
                        rou_all = []
                    }
                }
                else {
                    for (var sig_n = 0; sig_n < signal.length; sig_n++) {
                        if (signal[sig_n][1] == thiName) {
                            if (signal[sig_n][5] == 2) {
                                $('#men_signal').find('li').eq(1).text('ÉèÖÃÉÏÐÐÒýµ¼')
                                $('#men_signal').find('li').eq(2).text('È¡ÏûÉÏÐÐ½øÂ·')
                                $('#men_signal').find('li').eq(3).text('ÉèÖÃÉÏÐÐ×Ô¶¯½øÂ·')
                                $('#men_signal').find('li').eq(4).text('¹Ø±ÕÉÏÐÐ×Ô¶¯½øÂ·')
                                $('#men_signal').find('li').eq(5).text('È·ÈÏ¹Ø±ÕÉÏÐÐ×Ô¶¯½øÂ·')
                            }
                            else {
                                $('#men_signal').find('li').eq(1).text('ÉèÖÃÏÂÐÐÒýµ¼')
                                $('#men_signal').find('li').eq(2).text('È¡ÏûÏÂÐÐ½øÂ·')
                                $('#men_signal').find('li').eq(3).text('ÉèÖÃÏÂÐÐ×Ô¶¯½øÂ·')
                                $('#men_signal').find('li').eq(4).text('¹Ø±ÕÏÂÐÐ×Ô¶¯½øÂ·')
                                $('#men_signal').find('li').eq(5).text('È·ÈÏ¹Ø±ÕÏÂÐÐ×Ô¶¯½øÂ·')
                            }
                        }
                    }
                    if ($(this).get(0).right) {
                        $('#men_signal').find('li').eq(5).removeClass('no')
                    }
                    else {
                        $('#men_signal').find('li').eq(5).addClass('no')
                    }
                    if ($(this).get(0).houBei) {
                        $('#men_signal').find('li').eq(7).removeClass('no')
                    }
                    else {
                        $('#men_signal').find('li').eq(7).addClass('no')
                    }
                    cli_jup(thiName, $('#men_signal'))
                    open_mode('men_signal', px, py)
                    $('#men_signal').children('ul').children('li').each(function (j) {
                        $(this).click(function () {
                            var cir = document.getElementsByClassName('circle')[k]
                            var sig_b = document.getElementsByClassName('sig_b')[k]
                            if ((k != null || k === 0) && !(k > signal_new.length)) {

                                if ($(this).context.className.indexOf(k + '_aa') == -1) {
                                    switch (j) {
                                        case 1:/*ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Â·*/
                                            var t = 'y'
                                            var cont_sig_r = document.getElementsByClassName('cont_sig')[k];
                                            if (cont_sig_r != null) {
                                                sig_fir = cont_sig_r.childNodes[0].textContent
                                                var sig_key_f = name_out.indexOf(cont_sig_r.childNodes[0].textContent) + 1
                                            }
                                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + XHJ)
                                            break;
                                        case 2:/*ï¿½ï¿½ï¿½Ë½ï¿½*/
                                            var t = 'q'
                                            var cont_sig = document.getElementsByClassName('cont_sig')[k];
                                            sig_key_f = signal_new[k][0]
                                            sig_fir = cont_sig.childNodes[0].textContent
                                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + XHJ)
                                            break;
                                        case 3:/*ï¿½ï¿½ï¿½ï¿½ï¿½Ô¶ï¿½ï¿½ï¿½Â·*/
                                            var t = 'zdl'
                                            var cont_sig = document.getElementsByClassName('cont_sig')[k];
                                            sig_key_f = signal_new[k][0]
                                            var num = 1
                                            sig_fir = cont_sig.childNodes[0].textContent
                                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + num + "_" + sig_fir + XHJ)
                                            break;
                                        case 4:/*ï¿½Ø±ï¿½ï¿½Ô¶ï¿½ï¿½ï¿½Â·*/
                                            var t = 'zdl'
                                            var cont_sig = document.getElementsByClassName('cont_sig')[k];
                                            sig_key_f = signal_new[k][0]
                                            var num = 0
                                            sig_fir = cont_sig.childNodes[0].textContent
                                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + num + "_" + sig_fir + XHJ)

                                            break;
                                        case 5:/*È·ï¿½Ï¹Ø±ï¿½*/
                                            if (thi.get(0).right) {
                                                var t = 'qzdl'
                                                var cont_sig = document.getElementsByClassName('cont_sig')[k];
                                                sig_key_f = signal_new[k][0]
                                                sig_fir = cont_sig.childNodes[0].textContent
                                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + XHJ)
                                            }
                                            break;
                                        case 6:/*ï¿½ï¿½ï¿½Ãºï¿½Ä£Ê½*/
                                            var t = 'setr'
                                            var cont_sig_r = document.getElementsByClassName('cont_sig')[k];
                                            sig_fir = cont_sig_r.childNodes[0].textContent
                                            sig_key_f = signal_new[k][0]
                                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + null + "_" + null + "_" + 1 + "_" + sig_fir + XHJ)
                                            break;
                                        case 7:/*È·ï¿½ï¿½ï¿½ï¿½ï¿½Ãºï¿½Ä£Ê½*/
                                            if (thi.get(0).houBei) {
                                                var t = 'conr'
                                                var cont_sig_r = document.getElementsByClassName('cont_sig')[k];
                                                sig_fir = cont_sig_r.childNodes[0].textContent
                                                sig_key_f = signal_new[k][0]
                                                fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + null + "_" + null + "_" + 1 + "_" + sig_fir + XHJ)
                                            }
                                            break;
                                        case 8:/*È¡ï¿½ï¿½ï¿½ï¿½Ä£Ê½*/
                                            var t = 'setr'
                                            var cont_sig_r = document.getElementsByClassName('cont_sig')[k];
                                            sig_key_f = signal_new[k][0]
                                            sig_fir = cont_sig_r.childNodes[0].textContent
                                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + null + "_" + null + "_" + 0 + "_" + sig_fir + XHJ)

                                            break;
                                        case 9:  /*Ä£ï¿½ï¿½ï¿½Ð³ï¿½*/
                                            //          console.log(11)
                                            var t = 'c';
                                            var cont_sig = document.getElementsByClassName('cont_sig')[k];
                                            var sig_key_f = signal_new[k][0]
                                            sig_fir = cont_sig.childNodes[0].textContent
                                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + XHJ)
                                            break;
                                        case 10:  //ï¿½ï¿½ï¿½ï¿½ï¿½Æ¹ï¿½ï¿½ï¿½
                                            var t = "signalaccident";
                                            var cont_sig = document.getElementsByClassName('cont_sig')[k];
                                            var sig_key_f = signal_new[k][0]
                                            var send_k = 1;
                                            sig_fir = cont_sig.childNodes[0].textContent
                                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "_" + send_k + "_"+sig_fir + XHJ)
                                            break;
                                        case 11:  //ï¿½ï¿½ï¿½ï¿½ï¿½Æ¹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
                                            var t = "signalaccident";
                                            var cont_sig = document.getElementsByClassName('cont_sig')[k];
                                            var sig_key_f = signal_new[k][0]
                                            var send_k = 2;
                                            sig_fir = cont_sig.childNodes[0].textContent
                                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "_" + send_k + "_"+sig_fir + XHJ)
                                            break;
                                        case 12:  //ï¿½ÌµÆ¹ï¿½ï¿½ï¿½
                                            var t = "signalaccident";
                                            var cont_sig = document.getElementsByClassName('cont_sig')[k];
                                            var sig_key_f = signal_new[k][0]
                                            var send_k = 3;
                                            sig_fir = cont_sig.childNodes[0].textContent
                                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "_" + send_k + "_"+sig_fir + XHJ)
                                            break;
                                        case 13:  //ï¿½ÌµÆ¹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
                                            var t = "signalaccident";
                                            var cont_sig = document.getElementsByClassName('cont_sig')[k];
                                            var sig_key_f = signal_new[k][0]
                                            var send_k = 4;
                                            sig_fir = cont_sig.childNodes[0].textContent
                                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "_" + send_k + "_"+sig_fir + XHJ)
                                            break;
                                        case 14:  //ï¿½ÆµÆ¹ï¿½ï¿½ï¿½
                                            var t = "signalaccident";
                                            var cont_sig = document.getElementsByClassName('cont_sig')[k];
                                            var sig_key_f = signal_new[k][0]
                                            var send_k = 5;
                                            sig_fir = cont_sig.childNodes[0].textContent
                                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "_" + send_k +"_"+sig_fir + XHJ)
                                            break;
                                        case 15:  //ï¿½ÆµÆ¹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
                                            var t = "signalaccident";
                                            var cont_sig = document.getElementsByClassName('cont_sig')[k];
                                            var sig_key_f = signal_new[k][0]
                                            var send_k = 6;
                                            sig_fir = cont_sig.childNodes[0].textContent
                                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "_" + send_k + "_"+sig_fir + XHJ)
                                            break;
                                        case 16:  //ï¿½×µÆ¹ï¿½ï¿½ï¿½
                                            var t = "signalaccident";
                                            var cont_sig = document.getElementsByClassName('cont_sig')[k];
                                            var sig_key_f = signal_new[k][0]
                                            var send_k = 7;
                                            sig_fir = cont_sig.childNodes[0].textContent
                                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "_" + send_k + "_"+sig_fir + XHJ)
                                            break;
                                        case 17:  //ï¿½×µÆ¹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
                                            var t = "signalaccident";
                                            var cont_sig = document.getElementsByClassName('cont_sig')[k];
                                            var sig_key_f = signal_new[k][0]
                                            var send_k = 8;
                                            sig_fir = cont_sig.childNodes[0].textContent
                                            fot_sle(sig_fir + "_" + this.innerText, t + "_" + sig_key_f + "_" + sig_fir + "_" + send_k + "_"+sig_fir + XHJ)
                                            break;
                                    }
                                }
                            }
                        })
                    })
                    $('#plg_ul').find('li').each(function (n) {
                        $(this).click(function () {
                            var k = i
                            var plo = document.getElementsByClassName('plgo')[k]
                            $('#men_signal').hide()
                            if ($(this).context.className.indexOf(k + '_aa') == -1) {
                                switch (n) {
                                    case 0:
                                        plo.setAttribute("fill", "red")
                                        plo.setAttribute("stroke", "red")
                                        break;
                                    case 1:
                                        plo.setAttribute("fill", "yellow")
                                        plo.setAttribute("stroke", "yellow")
                                        break;
                                    case 2:
                                        plo.setAttribute("fill", "green")
                                        plo.setAttribute("stroke", "green")
                                        break;
                                    case 3:
                                        plo.setAttribute("fill", "none")
                                        plo.setAttribute("stroke", "none")
                                        break;
                                }
                            }
                        })
                    })
                    deng(i, 'rb_ul', 'red')
                    deng(i, 'gre_ul', 'green')
                    deng(i, 'whi_ul', 'white')
                }
            }
        })
    })
}
function deng(d,id,cor) {
    $('#'+id).find('li').each(function (l) {
        $(this).click(function() {
            var k= i
            var cir=document.getElementsByTagName('cir')[k]
            $('#men_signal').hide()
            if($(this).context.className.indexOf(k+'_aa')==-1) {
                switch (l) {
                    case 0:
                        jizhouqiechu(cir)
                        fot_sle(this.innerText+cir.id)
                        break;
                    case 1:
                        fot_sle(this.innerText+cir.id)
                        jizhoushixiao(cir, 'black', cor)
                        break;
                    case 2:
                        fot_sle(this.innerText+cir.id)
                        guzhangqiechu(cir, 'red', 'red')
                        break;
                }
            }
        })
    })
}
function cli_cont() {
    var tha,valu,valuu
    var k
    $('.cont_tex').each(function(f) {
        $(this).mousedown(function(e) {
            e=e||event
            e.stopPropagation()
            if(e.which==3){
                var x= e.pageX
                var y= e.pageY
                var  suo_clo=$('.suo').eq(f)
                k = f
                console.log(k)
                var thiName=$(this).attr('id')
                cli_jup(thiName,$('#menu_sw'))
                if(suo_clo.get(0).sclose){
                    $('#menu_sw').find('li').eq(5).removeClass('no')
                }
                else{
                    $('#menu_sw').find('li').eq(5).addClass('no')
                }
                if(suo_clo.get(0).fclose){
                    $('#menu_sw').find('li').eq(8).removeClass('no')
                }
                else{
                    $('#menu_sw').find('li').eq(8).addClass('no')
                }
                open_mode('menu_sw',x,y)
            }
        })
    })

    $('#menu_sw').find('li').each(function(j) {
        $(this).click(function (e) {
            e=e||event
            e.stopPropagation()
            $('#menu_sw').hide()
            if(k!=null||k===0){
                var con_lin_all = document.getElementsByClassName('cont_lin')
                var con_lin = con_lin_all[k]
                var con_5_lin_all = document.getElementsByClassName('con_5_lin')
                var con_5_lin = con_5_lin_all[k]
                var obj
                var fan = document.getElementsByClassName('fan_c')[k]
                var fa_z = document.getElementsByClassName('fan_z')[k]
                var suo = document.getElementsByClassName('suo')[k]
                var fan_v = document.getElementsByClassName('fan_c')[k]
                var fan_zv = document.getElementsByClassName('fan_z')[k]
                var shib_v = document.getElementsByClassName('shi_B')[k]
                var shi_bl = document.getElementsByClassName('shi_B_l')[k]
                var shib = document.getElementsByClassName('shi_B')[k]
                var shi_br = document.getElementsByClassName('shi_B_r')[k]
                var cont_t = document.getElementsByClassName('cont_tex')[k]
                switch (j) {
                    case 1:/*ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½*/
                        var t='s'
                        var nam=con_lin.id
                        var get_k=get_i(nam)
                        var sec=1
                        fot_sle(nam+"_"+this.innerText,t+"_"+num_out[get_k]+"_"+null+"_"+sec+"_"+nam+DC)
                        break;
                    case 2:/*ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½*/
                        var t='s'
                        var nam=con_lin.id
                        var get_k=get_i(nam)
                        var sec=2
                        fot_sle(nam+"_"+this.innerText,t+"_"+num_out[get_k]+"_"+null+"_"+sec+"_"+nam+DC)
                        break;
                    case 3:/*???????*/
                        var t='s'
                        var nam=con_lin.id
                        var get_k=get_i(nam)
                        var sec=3
                        fot_sle(nam+"_"+this.innerText,t+"_"+num_out[get_k]+"_"+null+"_"+sec+"_"+nam+DC)
                        break;
                    case 4:/*??????*/
                        var t='s'
                        var nam=con_lin.id
                        var get_k=get_i(nam)
                        var sec=4
                        fot_sle(nam+"_"+this.innerText,t+"_"+num_out[get_k]+"_"+null+"_"+sec+"_"+nam+DC)
                        break;
                    case 5 :
                        if($(this).get(0).className.indexOf('no')==-1){
                            var t='s'
                            var nam=con_lin.id
                            var get_k=get_i(nam)
                            var sec=5
                            fot_sle(nam+"_"+this.innerText,t+"_"+num_out[get_k]+"_"+null+"_"+sec+"_"+nam+DC)
                        }
                        /*È·ï¿½Ï½ï¿½ï¿½ï¿½*/
                        break;
                    case 6:/*??????*/
                        /*ï¿½ï¿½ï¿½ï¿½*/
                        var t='s'
                        var nam=con_lin.id
                        var get_k=get_i(nam)
                        var sec=6
                        fot_sle(nam+"_"+this.innerText,t+"_"+num_out[get_k]+"_"+null+"_"+sec+"_"+nam+DC)
                        break;
                        break;
                    case 7:/*??????*/
                        var t='s'
                        var nam=con_lin.id
                        var get_k=get_i(nam)
                        var sec=7
                        fot_sle(nam+"_"+this.innerText,t+"_"+num_out[get_k]+"_"+null+"_"+sec+"_"+nam+DC)
                        break;
                        break;
                    case 8:/*??????*/
                        if($(this).get(0).className.indexOf('no')==-1){
                            var t='s'
                            var nam=con_lin.id
                            var get_k=get_i(nam)
                            var sec=8
                            fot_sle(nam+"_"+this.innerText,t+"_"+num_out[get_k]+"_"+null+"_"+sec+"_"+nam+DC)
                        }
                        break;
                    case 9:/*??????*///ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.24ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ê§ï¿½ï¿½ï¿½ï¿½
                        var t="switchaccident"
                        var nam=con_lin.id
                        var get_k=get_i(nam)
                        var sec=1
                        fot_sle(nam+"_"+this.innerText,t+"_"+num_out[get_k]+"_"+sec+"_"+null+"_"+nam+DC)
                        break;
                    case 10: //ï¿½ï¿½ï¿½ï¿½Ê§Ð§
                        var t="switchaccident"
                        var nam=con_lin.id
                        var get_k=get_i(nam)
                        var sec=6
                        fot_sle(nam+"_"+this.innerText,t+"_"+num_out[get_k]+"_"+sec+"_"+null+"_"+nam+DC)
                        break;
                    case 11: //ï¿½ï¿½ï¿½á¸´Î»
                        var t="switchaccident"
                        var nam=con_lin.id
                        var get_k=get_i(nam)
                        var sec=3
                        fot_sle(nam+"_"+this.innerText,t+"_"+num_out[get_k]+"_"+sec+"_"+null+"_"+nam+DC)
                        break;
                    case 12: //ï¿½ï¿½ï¿½Ù¹ï¿½ï¿½ï¿½
                        var t="switchaccident"
                        var nam=con_lin.id
                        var get_k=get_i(nam)
                        var sec=7
                        fot_sle(nam+"_"+this.innerText,t+"_"+num_out[get_k]+"_"+sec+"_"+null+"_"+nam+DC)
                        break;
                    case 13: //ï¿½ï¿½ï¿½Ù¹ï¿½ï¿½ï¿½
                        var t="switchaccident"
                        var nam=con_lin.id
                        var get_k=get_i(nam)
                        var sec=8
                        fot_sle(nam+"_"+this.innerText,t+"_"+num_out[get_k]+"_"+sec+"_"+null+"_"+nam+DC)
                        break;
                    case 14: //ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
                        var t="switchaccident"
                        var nam=con_lin.id
                        var get_k=get_i(nam)
                        var sec=9
                        fot_sle(nam+"_"+this.innerText,t+"_"+num_out[get_k]+"_"+sec+"_"+null+"_"+nam+DC)
                        break;
                    case 15: //Ç¿ï¿½ï¿½×ªï¿½ï¿½
                        var t='s'
                        var nam=con_lin.id
                        var get_k=get_i(nam)
                        var sec=9
                        fot_sle(nam+"_"+this.innerText,t+"_"+num_out[get_k]+"_"+null+"_"+sec+"_"+nam+DC)
                        break;
                }
            }
            k=null
            return false
        });
    })
}
function stat_cli_all() {
    document.oncontextmenu = function(e){
        e=e||event
        e.preventDefault();
    };
    var k
    this.y= function(cla,id){
        if($('.'+cla).length!=0) {
            $('.' + cla).each(function (i) {
                $(this).on('mousedown',function (e) {
                    e = e || event
                    e.stopPropagation()
                    if (e.which == 3) {
                        var stat=document.getElementsByClassName('statBack')[i]
                        $('#svg_bg').hide()
                        $('#menu_track').hide()//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.23ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Úµï¿½ï¿½Õ¾Ì¨ï¿½Ò¼ï¿½Ê±ï¿½ï¿½ï¿½Î¹Éµï¿½ï¿½ï¿½ï¿½Ò¼ï¿?
                        $('#men_signal').hide()//ï¿½ÅºÅ»ï¿½ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
                        $('#menu_sw').hide()//ï¿½ï¿½ï¿½ï¿½ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
                        var px = e.pageX;
                        var py = e.pageY;
                        var thiName = stat.id
                        cli_jup(thiName,$('#'+id))
                        open_mode(id,px,py)
                        k= i
                        cli_stat(k)
                        chosDoor(k)

                        chosDoorAny(k)
                    }
                })
            })
        }

    }
}
//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
function cli_statr() {
    var d=new stat_cli_all()
    d.y('statr','men_stspan')
}
//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
function cli_statz() {
    var d=new stat_cli_all()
    d.y('stat','men_stspan')
}
//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
function cli_statl() {
    var d=new stat_cli_all()
    d.y('statl','men_stspan')
}
//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿?
function cli_statBj() {
    var d=new stat_cli_all()
    d.y('statBack','men_stspan')
}
function cli_stat(k) {
    var stat=document.getElementsByClassName('stat')[k]
    var Dcont=document.getElementsByClassName('plt_cont')[k]
    var statl=document.getElementsByClassName('statl')[k]
    var statr=document.getElementsByClassName('statr')[k]
    var jup_sta_pol=document.getElementsByClassName('jup_sta_pol')[k]
    var jup_sta_por=document.getElementsByClassName('jup_sta_por')[k]
    var jup_sta_l=document.getElementsByClassName('jup_sta_l')[k]
    var jup_sta_r=document.getElementsByClassName('jup_sta_r')[k]
    $('#men_stspan').children('ul').children('li').unbind('click')
    $('#men_stspan').children('ul').children('li').not('.no').each(function(j) {
        $(this).click(function (e) {
            $('#men_stspan').hide()
            e=e||event
            e.stopPropagation()
            switch (j) {
                case 1:/*ï¿½Û³ï¿½*/
                    var t='z'
                    var nam=stat.id
                    var get_k=get_i(nam)
                    var sed_getK=num_out[get_k]-3
                    fot_sle(nam+"_"+this.innerText,t+"_"+sed_getK+"_"+nam+"Õ¾Ì¨")
                    break;
                case 2:/*È¡ï¿½ï¿½ï¿½Û³ï¿½*/
                    var t='z'
                    var nam=stat.id
                    var get_k=get_i(nam)
                    var sed_getK=num_out[get_k]-3
                    fot_sle(nam+"_"+this.innerText,t+"_"+sed_getK+"_"+nam+"Õ¾Ì¨")
                    break;
                case 3:/*ï¿½ï¿½Í£*/
                    var t='z'
                    var nam=stat.id
                    var get_k=get_i(nam)
                    var sed_getK=num_out[get_k]-4
                    fot_sle(nam+"_"+this.innerText,t+"_"+sed_getK+"_"+nam+"Õ¾Ì¨")
                    break;
                case 4:/*È¡ï¿½ï¿½ï¿½ï¿½Í£*/
                    var t='z'
                    var nam=stat.id
                    var get_k=get_i(nam)
                    var sed_getK=num_out[get_k]-4
                    fot_sle(nam+"_"+this.innerText,t+"_"+sed_getK+"_"+nam+"Õ¾Ì¨")
                    break;
                case 5:/*ï¿½ï¿½Ç°ï¿½ï¿½ï¿½ï¿½*/
                    var pltAll=[]
                    var nam=stat.id
                    var namPlt=nam.split('-')
                    for(var namP_i= 0;namP_i<platform.length;namP_i++){
                        if(platform[namP_i][1]==namPlt[0]){
                            pltAll.push(platform[namP_i][0])
                        }
                    }
                    if(namPlt[1]==1){
                        sed(["fc",pltAll[0],0]);
                    }
                    else{
                        sed(["fc",pltAll[1],0]);
                    }
                    var pltCont=document.getElementById(nam+'_cont')
                    pltCont.setAttribute('stroke', 'none');
                    pltCont.setAttribute('fill', 'none');
                    clearTimeout(pltCont.t)
                    break;
            }
            return false
        })
    })
}
function chosDoor(k) {
    var stat=document.getElementsByClassName('stat')[k]
    var stat_l=document.getElementsByClassName('stat_l')[k]
    var stat_c=document.getElementsByClassName('stat_c')[k]
    var stat_r=document.getElementsByClassName('stat_r')[k]
    var Dcont=document.getElementsByClassName('plt_cont')[k]
    $('#men_door').children('li').each(function(j) {
        $(this).click(function (e) {
            e = e || event
            e.stopPropagation()
            e.preventDefault()
            $('#men_stspan').hide()
            switch (j) {
                case 0:
                    var t='door'
                    var nam=stat.id
                    var get_k=get_i(nam)
                    var sed_getK=num_out[get_k]
                    fot_sle(nam+"_"+this.innerText,t+"_"+sed_getK+"_"+1+"_"+nam+"Õ¾Ì¨")
                    break;
                case 1:
                    var t='door'
                    var nam=stat.id
                    var get_k=get_i(nam)
                    var sed_getK=num_out[get_k]
                    fot_sle(nam+"_"+this.innerText,t+"_"+sed_getK+"_"+2+"_"+nam+"Õ¾Ì¨")
                    Dcont.setAttribute('stroke', 'none');
                    Dcont.setAttribute('fill', 'none');
                    clearTimeout(Dcont.t)
                    break;
            }
            return false
        })
    })
}
function chosDoorAny(k) {
    var stat=document.getElementsByClassName('stat')[k]
    var stat_l=document.getElementsByClassName('stat_l')[k]
    var stat_c=document.getElementsByClassName('stat_c')[k]
    var stat_r=document.getElementsByClassName('stat_r')[k]
    $('#menAny_door').children('li').each(function(menj) {
        $(this).on('click',function(e) {
            if(stat!=null) {
                e = e || event
                e.stopPropagation()
                e.preventDefault()
                $('#men_stspan').hide()
                switch (menj) {
                    case 0:
                        var t = 'doorfault'
                        var se = 1
                        var nam = stat.id
                        var namF = nam.split('-')
                        var sed_getK
                        var tf
                        namF[1] == 1 ? tf = 'True' : tf = 'False'
                        for (var i = 0; i < platform.length; i++) {
                            if (platform[i][1] == namF[0] && platform[i][6] == tf) {
                                sed_getK = platform[i][0]
                            }
                        }
                        fot_sle(nam + "_" + this.innerText, t + "_" + sed_getK + "_" + se + "_" + "_" + nam + "Õ¾Ì¨")
                        break;
                    case 1:
                        var t = 'doorfault'
                        var se = 2
                        var nam = stat.id
                        var namF = nam.split('-')
                        var sed_getK
                        var tf
                        namF[1] == 1 ? tf = 'True' : tf = 'False'
                        for (var i = 0; i < platform.length; i++) {
                            if (platform[i][1] == namF[0] && platform[i][6] == tf) {
                                sed_getK = platform[i][0]
                            }
                        }
                        fot_sle(nam + "_" + this.innerText, t + "_" + sed_getK + "_" + se + "_" + "_" + nam + "Õ¾Ì¨")
                        break;
                    case 2:
                        var t = 'doorfault'
                        var se = 3
                        var nam = stat.id
                        var namF = nam.split('-')
                        var sed_getK
                        var tf
                        namF[1] == 1 ? tf = 'True' : tf = 'False'
                        for (var i = 0; i < platform.length; i++) {
                            if (platform[i][1] == namF[0] && platform[i][6] == tf) {
                                sed_getK = platform[i][0]
                            }
                        }
                        fot_sle(nam + "_" + this.innerText, t + "_" + sed_getK + "_" + se + "_" + "_" + nam + "Õ¾Ì¨")
                        break;
                    case 3:
                        var t = 'doorfault'
                        var se = 4
                        var nam = stat.id
                        var namF = nam.split('-')
                        var sed_getK
                        var tf
                        namF[1] == 1 ? tf = 'True' : tf = 'False'
                        for (var i = 0; i < platform.length; i++) {
                            if (platform[i][1] == namF[0] && platform[i][6] == tf) {
                                sed_getK = platform[i][0]
                            }
                        }
                        fot_sle(nam + "_" + this.innerText, t + "_" + sed_getK + "_" + se + "_" + "_" + nam + "Õ¾Ì¨")
                        break;
                    case 4:
                        var t = 'doorfault'
                        var se = 5
                        var nam = stat.id
                        var namF = nam.split('-')
                        var sed_getK
                        var tf
                        namF[1] == 1 ? tf = 'True' : tf = 'False'
                        for (var i = 0; i < platform.length; i++) {
                            if (platform[i][1] == namF[0] && platform[i][6] == tf) {
                                sed_getK = platform[i][0]
                            }
                        }
                        fot_sle(nam + "_" + this.innerText, t + "_" + sed_getK + "_" + se + "_" + "_" + nam + "Õ¾Ì¨")
                        break;
                }
                stat=null
                $(this).off('click')
            }
        })
    })
}
function cli_ATB() {
    var k
    $('.ATB').each(function (i) {
        $(this).mousedown(function (e) {
            e = e || event
            e.stopPropagation()
            if (e.which == 3) {
                e = e || event
                e.stopPropagation()
                e.preventDefault()
                $('#svg_bg').hide()
                $('#men_stspan').hide()//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.23ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Úµï¿½ï¿½ï¿½Éµï¿½ï¿½Ò¼ï¿½Ê±ï¿½ï¿½ï¿½ï¿½Õ¾Ì¨ï¿½ï¿½ï¿½Ò¼ï¿?
                $('#men_signal').hide()//ï¿½ÅºÅ»ï¿½ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
                $('#menu_sw').hide()//ï¿½ï¿½ï¿½ï¿½ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
                $('#auto_roud').hide()//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Â·ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
                var px = e.pageX;
                var py = e.pageY;
                open_mode('ATB', px, py)
                k = i
            }
        })
    })
    $('#ATB').children('ul').children('li').each(function(i) {
        $(this).click(function (e) {
            e=e||event
            e.stopPropagation()
            $('#ATB').hide()
            if(k!=null){
                var atb = document.getElementsByClassName('rec_ATB')[k]
                var atbId=atb.id
                var num
                for(var atb_i=0;atb_i<stationname.length;atb_i++){
                    if(stationname[atb_i][1]==atbId){
                        num=stationname[atb_i][0]
                    }
                }
                if(num!=null) {
                    switch (i) {
                        case 0:/*ï¿½ï¿½ï¿½ï¿½*/
                            break;
                        case 1:/*ï¿½Ô¶ï¿½ï¿½Û·ï¿½*/
                            var t='atb'
                            var sig_key_f=atbId
                            fot_sle(sig_key_f+"_"+this.innerText,t+"_"+num+"_"+sig_key_f+"ATB")
                            break;
                        case 2:/*È¡ï¿½ï¿½ï¿½Ô¶ï¿½ï¿½Û·ï¿½*/
                            var t='atb'
                            var sig_key_f=atbId
                            fot_sle(sig_key_f+"_"+this.innerText,t+"_"+num+"_"+sig_key_f+"ATB")
                            break;
                    }
                }
            }
        })
    })
}
function cli_quic() {
    var d=new cli_tu()
    d.x('quic','qui_stop')
    $('#qui_stop').children('ul').children('li').each(function(i) {
        $(this).click(function () {
            var k = d.x('quic', 'qui_stop')
            var quic = document.getElementsByClassName('quic')[k]
            var stop_E = document.getElementsByClassName('stop_E')[k]
            var stat=document.getElementsByClassName('stat')[k]
            switch (i) {
                case 0:/*ï¿½ï¿½ï¿½ï¿½*/
                    break;
                case 1:/*ï¿½ï¿½ï¿½Ã½ï¿½ï¿½ï¿½Í£ï¿½ï¿½*/
                    var t='z'
                    var nam=stat.id
                    var get_k=get_i(nam)
                    var sed_getK=num_out[get_k]-2
                    fot_sle(nam+"_"+this.innerText,t+"_"+sed_getK+"_"+nam+"Õ¾Ì¨")
                    break;
                case 2:/*È¡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Í£ï¿½ï¿½*/
                    var t='z'
                    var nam=stat.id
                    var get_k=get_i(nam)
                    var sed_getK=num_out[get_k]-2
                    fot_sle(nam+"_"+this.innerText,t+"_"+sed_getK+"_"+nam+"Õ¾Ì¨")
                    break;
                case 3:/*È·ï¿½ï¿½È¡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Í£ï¿½ï¿½*/
                    var t='z'
                    var nam=stat.id
                    var get_k=get_i(nam)
                    var sed_getK=num_out[get_k]-1
                    fot_sle(nam+"_"+this.innerText,t+"_"+sed_getK+"_"+nam+"Õ¾Ì¨")
                    break;
            }
        })
    })
}
function cli_auto() {
    $('.btn_zd').each(function(j) {
        document.oncontextmenu = function(e){
            e=e||event
            e.preventDefault();
        }
        $(this).mousedown(function(e) {
            e=e||event
            if(e.which==3){
                e.stopPropagation()
                var ex= e.pageX
                var ey= e.pageY
                open_mode('auto_roud',ex,ey)
                $('#auto_ul').children('li').each(function(i) {
                    $(this).click(function () {
                        $('#auto_roud').hide()
                        var k =j
                        var zd= document.getElementsByClassName('btn_zd')[k]
                        var cont = document.getElementsByClassName('btn_cont')[k]
                        switch (i) {
                            case 0:/*ï¿½ï¿½ï¿½ï¿½*/
                                zd.setAttribute('fill','green')
                                zd.setAttribute('stroke','green')
                                cont.firstChild.nodeValue='Enabled'
                                break;
                            case 1:/*ï¿½ï¿½ï¿½Ã½ï¿½ï¿½ï¿½Í£ï¿½ï¿½*/
                                zd.setAttribute('fill','red')
                                zd.setAttribute('stroke','red')
                                cont.firstChild.nodeValue='Disabled'
                                break;
                            case 2:/*È¡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Í£ï¿½ï¿½*/
                                stop_E.setAttribute('stroke','red')
                                stop_E.setAttribute('fill','red')
                                break;
                            case 3:/*È·ï¿½ï¿½È¡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Í£ï¿½ï¿½*/
                                stop_E.setAttribute('stroke','none')
                                guzhangqiechu(quic,'#ccc','#fff')
                                var t='z'
                                var nam=stat.id
                                var get_k=get_i(nam)
                                var sed_getK=num_out[get_k]
                                fot_sle(nam+"_"+this.innerText,t+"_"+sed_getK+"_"+nam+"Õ¾Ì¨")
                                break;
                        }
                    })
                })
            }
        })
    })
}
function blu(lin,fil_color,str_color,n) {
    clearInterval(lin.tim);
    lin.setAttribute('fill', fil_color);
    lin.setAttribute('stroke', str_color);
    lin.tim= setInterval(function () {
        if(lin.attributes.fill.value=="black"){
            lin.setAttribute('fill', fil_color);
            lin.setAttribute('stroke', str_color);
        }
        else{
            lin.setAttribute('fill', 'black');
            lin.setAttribute('stroke', 'black');
        }
        lin.tur=true;
    },1000)
}
function bla(lin,fil_color,str_color,tim) {
    clearTimeout(tim);
    clearTimeout(lin.tin);
    lin.setAttribute('fill', 'black');
    lin.setAttribute('stroke', 'black');
    lin.tin=setTimeout(function () {
        blu(lin,fil_color,str_color,lin.tin)
    },1000)
}
function cli_tu() {
    document.oncontextmenu = function(e){
        e=e||event
        e.preventDefault();
    };
    var k
    this.x= function(cla,id,x){
        if($('.'+cla).length!=0) {
            $('.' + cla).each(function (i) {
                $(this).mousedown(function (e) {
                    e = e || event
                    e.stopPropagation()
                    if (e.which == 3) {
                        $('#svg_bg').hide()
                        $('#men_stspan').hide()//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.23ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Úµï¿½ï¿½ï¿½Éµï¿½ï¿½Ò¼ï¿½Ê±ï¿½ï¿½ï¿½ï¿½Õ¾Ì¨ï¿½ï¿½ï¿½Ò¼ï¿?
                        $('#auto_roud').hide()//ï¿½ï¿½ï¿½ï¿½ï¿½Ô¶ï¿½ï¿½ï¿½Â·ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
                        $('#route').hide()//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Â·ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
                        //$('#svg_bg').hide()
                        $('#menu_track').hide()//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.23ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Úµï¿½ï¿½Õ¾Ì¨ï¿½Ò¼ï¿½Ê±ï¿½ï¿½ï¿½Î¹Éµï¿½ï¿½ï¿½ï¿½Ò¼ï¿?
                        $('#men_signal').hide()//ï¿½ÅºÅ»ï¿½ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
                        $('#menu_sw').hide()//ï¿½ï¿½ï¿½ï¿½ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
                        $('#ATB').hide()//ATBï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
                        $('#qui_stop').hide()//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Å¥ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
                        var fa=true
                        var px = e.pageX;
                        var py = e.pageY;
                        var thiName=$(this).attr('id')
                        cli_jup(thiName,$('#'+id))
                        var mv_px=$('#svg').scrollLeft()
                        var mv_py=$('#svg').scrollTop()
                        var cdom=document.getElementsByClassName(cla)[i].parentNode
                        $('.svg_bg').find('.greRect').remove()
                        $('#' + id).css({'left':30+px, 'top':25+ py, 'zIndex': 101}).show().find('li').each(function(j) {
                            if(cla=='lin'){
                                if($(this).get(0).car){
                                    $('#'+id).find('li').eq(2).removeClass('no')
                                    $('#'+id).find('li').eq(3).removeClass('no')
                                }
                            }
                        })
                        k= i
                    }
                })
            })
        }
        return k
    }
}
function font_cor(ele) {
    ele.addClass('ele_aa').css({"font-size":'#ccc'})
}
function cliRoute(t,sig_fir,sig_sec,x){
    var sig_key_f,sig_key_s
    sig_key_f = name_out.indexOf(sig_fir)+1
    sig_key_s = name_out.indexOf(sig_sec)+1
    $('#routTrue').click(function() {
        $("#route").hide()
        fot_sle(sig_fir+"_"+sig_sec+"_"+this.innerText,t+"_"+sig_key_f+"_"+sig_key_s+"_"+sig_sec+x)
    })
}
function cli_jup(name,alet) {
    alet.find('li').eq(0).text(name)
}
$('#cli_send').click(function(e) {
    e=e||event
    e.stopPropagation()
    var spli_ind=[]
    //var val= $('#sel_fot').val()
    var val=  $(".opt").text()
    if(val!=null&&val!=""){
        var ind=$('.opt')[0].id
        spli_ind=ind.split('_')
        var dat=new Date()
        var ye=dat.getFullYear()
        var mon=dat.getMonth()+1
        var ri=dat.getDate()
        console.log(spli_ind)
        sed(spli_ind)

        var text=val
        var tex=text.split('_')
        var tim=ye+"/"+mon+"/"+ri
        for(var j=0;j<axle_section.length;j++) {
            if (axle_section[j][1] == tex[tex.length - 2]) {
                var views = axle_section[j][7]
                var str=views+","+tim+','+tex[tex.length-2]+','+tex[tex.length-1]
                var strCall=views+" "+tex[tex.length-2]+" "+tex[tex.length-1]
                call(val)
                ff(str)
                break
            }
        }
        for (var z = 0; z < signal.length; z++) {
            if (signal[z][1] == tex[tex.length - 2]) {
                var views = signal[z][14]
                var str=views+","+tim+','+tex[tex.length-2]+','+tex[tex.length-1]
                var strCall=views+" "+tex[tex.length-2]+" "+tex[tex.length-1]
                call(val)
                ff(str)
                break
            }
        }
        for (var q = 0; q < switchdata.length; q++) {

            if (switchdata[q][1] == tex[tex.length - 2]) {
                var views = switchdata[q][12]
                var str=views+","+tim+','+tex[tex.length-2]+','+tex[tex.length-1]
                var strCall=views+" "+tex[tex.length-2]+" "+tex[tex.length-1]
                call(val)
                ff(str)
                break
            }
        }
        for (var r = 0; r < platform.length; r++) {
            var texAll=tex[tex.length - 2].split('-')
            if (platform[r][1]==texAll[0]) {
                var views = platform[r][11]
                var str=views+","+tim+','+tex[tex.length-2]+','+tex[tex.length-1]
                var strCall=views+" "+tex[tex.length-2]+" "+tex[tex.length-1]
                call(val)
                ff(str)
                break;
            }
        }
        /* for (var q = 0; q < switchdata.length; q++) {
         if (switchdata[q][1]==tex[tex.length - 2]) {
         views = switchdata[q][14]
         }
         }*/
        var time=new Date()
        var h=time.getHours()
        var m=time.getMinutes()
        var s=time.getSeconds()
        $('#tab').prepend('<tr><td class="td">'+h+":"+m+":"+s+'</td><td class="td">'+comm+'</td>')
        fot_sleN=false
        exc()
    }
    /*  $(".opt").each(function(i) {
     if($('.opt')[i].text==val){*/

    /*   }
     })*/
});
function open_mode(id,px,py){
    var wwid=$(window).width()
    var wh=$(window).height()
    var iw=$('#'+id).width()
    var ih=$('#'+id).height()
    var wid,hei
    if(px+iw<wwid){
        wid=px
    }
    else{
        wid=px-iw
    }
    if(py+ih<wh){
        hei=py
    }
    else{
        hei=py-ih
    }
    $('#svg_bg').hide()
    $('#men_stspan').hide()//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.23ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Úµï¿½ï¿½ï¿½Éµï¿½ï¿½Ò¼ï¿½Ê±ï¿½ï¿½ï¿½ï¿½Õ¾Ì¨ï¿½ï¿½ï¿½Ò¼ï¿?
    $('#auto_roud').hide()//ï¿½ï¿½ï¿½ï¿½ï¿½Ô¶ï¿½ï¿½ï¿½Â·ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
    $('#route').hide()//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Â·ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
    $('#menu_track').hide()//ï¿½Þ¸ï¿½ï¿½ï¿½2017.5.23ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Úµï¿½ï¿½Õ¾Ì¨ï¿½Ò¼ï¿½Ê±ï¿½ï¿½ï¿½Î¹Éµï¿½ï¿½ï¿½ï¿½Ò¼ï¿?
    $('#men_signal').hide()//ï¿½ÅºÅ»ï¿½ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
    $('#menu_sw').hide()//ï¿½ï¿½ï¿½ï¿½ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
    $('#ATB').hide()//ATBï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
    $('#qui_stop').hide()//ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Å¥ï¿½Ò¼ï¿½ï¿½ï¿½ï¿½ï¿½
    $('#'+id).css({'left':wid, 'top':hei, 'zIndex': 999}).show()
}
function LC(text) {
    $('#cli_LC').mousedown(function(e) {
        if(e.which==3){
            e=e||event
            e.stopPropagation();
            var px = e.pageX, py = e.pageY;
            $('#lians_LC').find('li').eq(0).text(text)
            $('#lians_LC').css({'left':px,'top':py,'zIndex':1099}).show()
        }
    })
    $('.lsCli_li').each(function(i){
        $(this).click(function(e) {
            e=e||event
            e.stopPropagation();
            $('#lians_LC').hide()
            switch (i){
                case 0:
                    $('#cli_LC').css({'background':'yellow'}).text('LC')
                    break;
                case 1:
                    $('#cli_LC').css({'background':'gray'}).text('LR')
                    break;
                case 2:
                    $('#cli_LC').css({'background':'green'}).text('CC')
                    break;
            }
        })
    })
}