// JavaScript Document
//联锁定时查询车务终端的cookie信息
//设置 cookie 的数据使用 json 存储与读取，这时就不需要使用 JSON.stringify 和 JSON.parse 了
$.cookie.json=true;
//定时执行函数
////声明后台通信变量Background communication，CBI给车务终端的回执
var BgCom={
	one_FH:'AB',              ///回执帧头
	one_FT:'AC',              ///回执帧尾
	typeReceipt:"8F",         // 回执类型
	send:"21",               //回执的发送方
	smt_rec:'15',            //回执的接收方
	csn:null,
	//联锁给站场图的数据
	CBItoSTMap_type:"7F",    //CBI-StationMap类型
	stmap_rec:"24",        //站场图接收方
	cbi_sender:"21",        //联锁发送方
	Car_Id:null,          //车次号
	rs_type:null           //到发类型
	
}
var json={
	 k:0,
	 l:0,
	 td_Plan:[],  //车务终端下达的阶段计划json数据
	 recJson:{},  //联锁回执json数据

	 //等待发送的进路信息
	 td_PlanWait:[],     //列调下达的阶段计划json数据
	 routeAllNum:[],    //总进路信息
}

//联锁回执数据帧编码
//每一位信息  帧头、类型、功能码、发送方、接收方、命令序号、车次号、到发类型、帧尾
function CBIReceiptFrame(head,type,fun,send,rec,csn,Car_Id,tail){
	
	var frame=head+type+fun+send+rec+csn+Car_Id+tail;
	return frame
}
//进路信息数据帧编码
//每一位信息  帧头、类型、功能码、发送方、接收方、车次号、到站/发车时间、进路序号、到发类型、帧尾
function routeFrame(head,type,fun,send,rec,Car_Id,df_time,routeNum,rs_type,tail){
	
	var frame=head+type+fun+send+rec+Car_Id+df_time+routeNum+rs_type+tail;
	return frame
}

/**cookies操作**/
function addCookie(name,Json){
	
    /*  cookie值中不能含有分号、逗号和空白符 除非在添加cookie值之前使用encodeURIComponent()全局函数进行编码
          当使用了encodeURIComponent()后 那么在获取cookie值就必须使用相应的decodeURIComponent()函数 */
	 
	$.cookie(name, Json, { path: '/' });
	  
}


//定时执行函数
 
function getCookie_one(){
	var timer
	var cookieSMT = $.cookie('上海车务终端');
    if(JSON.stringify(cookieSMT)=="{}"||JSON.stringify(cookieSMT)==undefined){
		timer = setTimeout(function(){
		this.getCookie_one()
		},10); 
	}
	else {
		clearTimeout(timer) //清理定时任务
		saveJson_SMT(cookieSMT)
	}
}
//存储获取到的车务终端json信息，并提取本站车务终端信息
function saveJson_SMT(cks){
    var timer
	var content = cks;
	//console.log(content)
	
    if(content==null){
        addCookie('上海联锁',null)
        timer=setTimeout(getCookie_one,1000)
    }
    else{
        clearTimeout(timer)
        $.each(content,function(n,val){
		
            json.td_Plan.push(val)
		
        })
		CBIReceiptJson_to_SMT()
    }
	
	//console.log(json.td_Plan)
}

//CBI给车务终端回执json数据
function CBIReceiptJson_to_SMT(){
	var k=json.k;

	//变量
	var head=BgCom.one_FH
	var type = BgCom.typeReceipt
	
	var send=BgCom.send
	var rec=BgCom.smt_rec
	//命令序号、车次号、始端、终端按钮
	json.td_Plan.forEach(function(val,n){
		var csn=val.substr(10,2)
		var Car_Id=val.substr(12,4)
		var BegainA=val.substr(16,3).replace(/\b(0+)/gi,"")//始端按钮,去除前面的0
		var EndA=val.substr(19,3).replace(/\b(0+)/gi,"")   //终端按钮,去除前面的0
		var fun_HZ=RouteBeArrange(LianSuoBiao,BegainA,EndA)
		var tail = BgCom.one_FT
		var recFrame=CBIReceiptFrame(head,type,fun_HZ,send,rec,csn,Car_Id,tail)
		
		json.recJson[k]=recFrame;
		//console.log(json.recJson)
		k++
	})
	//json.k=k
	//发送给上海车务终端回执
	addCookie('上海联锁回执',json.recJson)
	//alert(JSON.stringify( $.cookie('上海联锁回执')))
    json.recJson={}
    //存储车务终端计划在等待发送变量里
	json.td_PlanWait=json.td_Plan.slice(0)

	//清空存储计划的变量
	json.td_Plan.splice(0,json.td_Plan.length)
    
    CBI_to_STMap();//给站场图发进路信息
	
	
}
//发送给站场图的进路信息为3位，不足位的前面补零
function PrefixInteger(num, length) {
 return (Array(length).join('0') + num).slice(-length);
}

//联锁给车务终端回执，进路能否被排列
function RouteBeArrange(LianSuoBiao,BegainA,EndA){
	var record = null;//记录进路序号
	for(var index=0;index<LianSuoBiao.length;index++){
		if(LianSuoBiao[index].startA==BegainA &&LianSuoBiao[index].endA==EndA ){
			record=index;
			break;   //找到就跳出循环
			}
		}
	if(record!=null){
		return "01";
		}
	else{
		return "02";  //若为空，表示不能排列进路，返回“02”
		}

}
//联锁给站场图，进路具体信息，在联锁表中的序号
function RouteArrangement(LianSuoBiao,BegainA,EndA){
	var record = null;//记录进路序号
	for(var index=0;index<LianSuoBiao.length;index++){
		if(LianSuoBiao[index].startA==BegainA &&LianSuoBiao[index].endA==EndA ){
			record=index;
			break;   //找到就跳出循环
			}
		}
	if(record!=null){
		return record;
		}
	else{
		return "02";  //若为空，表示不能排列进路，返回“02”
		}

}
function CBI_to_STMap(){
	//var l=json.l;
    var routeNum
	//变量
	var head = BgCom.one_FH
	var type = BgCom.CBItoSTMap_type
	var send = BgCom.cbi_sender
	var rec = BgCom.stmap_rec
	//车次号、到发类型、始端终端按钮、下达时间、到站发车时间
	json.td_PlanWait.forEach(function(val){
		var fun = val.substr(4,2)
		var df_time=val.substr(24,4)
		var Car_Id=val.substr(12,4)
		var rs_type=val.substr(28,2)
		var BegainA=val.substr(16,3).replace(/\b(0+)/gi,"")//始端按钮,去除前面的0
		var EndA=val.substr(19,3).replace(/\b(0+)/gi,"")   //终端按钮,去除前面的0
		var temp=RouteArrangement(LianSuoBiao,BegainA,EndA)
		if(temp!="02"){
			//存在进路的话，将进路序号变为三位
			routeNum= PrefixInteger(temp, 3);
		}
		else
			{
			routeNum='999';}
		var tail = BgCom.one_FT
		var recFrame=routeFrame(head,type,fun,send,rec,Car_Id,df_time,routeNum,rs_type,tail)
		json.routeAllNum.push(recFrame);
		//l++;
	})
	//json.l=l
	//发送给站场图
	addCookie('上海联锁',json.routeAllNum)
	//alert(JSON.stringify( $.cookie('上海联锁')))
	//清空存储列调计划的变量
	json.td_PlanWait.splice(0,json.td_PlanWait.length)
    json.routeAllNum=[]
    
	//发完cookie3s后继续查询车务终端
	setTimeout(getCookie_one,3000)
}

