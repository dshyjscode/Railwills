/**
 * Created by asd on 2017/10/25.
 */
$(function() {
    svgBgHead()
    leftT()
})

//位数不租补零
function zero(tim) {
    return tim<10&&!(tim<0)?'0'+tim:tim
}





function svgBgHead(){
    for(var i=0;i<60*15+1;i+=2){
        if(i%60==0){
            WLine(i*svg.TimeX,14,i*svg.TimeX,18,'','green',0,2,"","","",SVGT)
            WText(i/60+6,i*svg.TimeX,16,"",'green',12,"",SVGT)
        }
        else{
            WLine(i*svg.TimeX,16,i*svg.TimeX,18,'','green',0,2,"","","",SVGT)       //纵线
            WText(i%60,i*svg.TimeX,16,"",'#ccc',12,"",SVGT)
        }

    }
    WLine(0,18,svg.TimeX*900,18,'','green',0,2,"","","",SVGT)       //横线
}





//图中左上显示时间
function leftT() {
    var date=new Date(),
        year=date.getFullYear(),
        month=zero(date.getMonth()+ 1),
        day=zero(date.getDate()),
        hour=zero(date.getHours()),
        minute=zero(date.getMinutes()),
        sec=zero(date.getSeconds());

    var texP=year+'年'+month+'月'+day+'日',
        texH=hour+':'+minute+":"+sec;
    $('#leftTimP').text(texP)
    $('#leftTimH').text(texH)
    setTimeout(leftT,1000)
}


