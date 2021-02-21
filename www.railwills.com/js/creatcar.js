
//建车
function createCar(carNum) {

    if(CarPVID.length>0){

    }

}

//查找数据库位置   percentageX:x轴百分比  GoTime:运行时间
function findSql(axle_section,car_i,percentageXStr,percentageXEnd,GoTime) {
    var tex,alaStr,alaEnd
    var starx,stary,endx,endy        //行车开始结束点坐标
    var creatX,creatY                //建车坐标
    for(var inr_i=0;inr_i<axle_section.length;inr_i++) {
        if (axle_section[inr_i][0] == CarForwardRoad[car_i]) {
            alaEnd = axle_section[inr_i][1]
        }
        if (axle_section[inr_i][0] == CarInRoadNo[car_i]) {
            alaStr = axle_section[inr_i][1]
        }
        var lin=document.getElementById(axle_section[inr_i][1])
        if(lin!=null) {
            lin.car = true
            lin.carPVID = CarPVID[car_i]           //锟斤拷锟斤拷锟?
            lin.carPTID = CarTID[car_i]            //锟斤拷锟斤拷锟?
            lin.carSID = CarSID[car_i]             //锟斤拷锟叫猴拷
            lin.carDID = CarDID[car_i]             //目锟侥地猴拷
            lin.carType = CarType[car_i]           //锟斤拷锟斤拷
            lin.carMode = CarMode[car_i]           //锟斤拷锟斤拷模式
            lin.carNo = CarNo[car_i]
        }
    }
            var id='car'+alaStr

    track_segment.forEach(function (value,index) {
        if(value[6]==alaStr){
            starx=parseInt(value[3]-value[1])*percentageXStr  //开始轴
            creatX=parseInt(value[1])+starx
            stary=parseInt(value[2])
        }
        if(value[6]==alaEnd){
            endx=(value[3]-value[1])*percentageXEnd   //结束轴
            endy=value[2]
        }
    })
            //查找数据位置 track表
            if(CarDirect==0||CarTrainStop==1){
                //车显示文字
                switch (CarShowType[car_i]) {
                    case 1:                   //服务号+目的地号
                        tex=CarTID[car_i] + CarDID[car_i]
                        break;
                    case 2:                   //车组号+目的地号
                        tex= CarPVID[car_i] + CarDID[car_i]
                        break;
                }
                //画车
                carShape(CarNo[car_i],creatX*svg_big,(stary-1)*svg_big,CarDirect[car_i],tex)
            }
           /* else{
                //运行中更改车次号

                //加动画
                var G=document.getElementById('carNum'+CarNo[car_i])
                var pat='M'+starx+','+stary+" L"+endx+","+endy
                         //运行时间
                var Animate='<animateMotion path='+pat+' begin="0s" bur='+GoTime+'"s"  rotate="auto"  repeatCount="indefinite"/>'
                G.appendChild(Animate)
            }*/





            /*var car=document.getElementById(id)
            if(car!=null){
                car.setAttribute('fill','blue')
                car.setAttribute('stroke','blue')
            }*/





}

//车形状  参数：车次号。x,y, 方向 ，
function carShape(carNum,x,y,direction,tex) {
    var G='<g id="carNum'+carNum+'"></g>'
    main.append(G)
    var creatG=document.getElementById('carNum'+carNum)
    rect(x,y,100,40,'blue','white',2,"","",creatG)
    //判断车方向
    var point,xCenter
    var yCenter=y+20
    var yEnd=y+40
    switch (direction){
        case 1:                  //左
            xCenter=x-30
            point=x + "," + y + " " + xCenter + "," + yCenter + " " + x + "," + yEnd
            polygon(point,'yellow','white',2,"","",creatG)
            break;
        case 2:                  //右
            var xStar=x+100
            xCenter=xStar+30
            point=xStar + "," + y + " " + xCenter + "," + yCenter + " " + xStar + "," + yEnd
            polygon(point,'yellow','white',2,"","",creatG)
            break;
        default:
            break;
    }
    cont(x,y+15,tex,'white','white',"",12,tex+carNum,creatG)

}