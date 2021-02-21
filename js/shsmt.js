window.onload = function () {
				
			shmap()
    
            //模式转换
            get_mszh();
    
            //复现
            getCookie_recurrent()
    
        
}
	
var model=1;
function get_moshizhuanhuan()
  {
   if(model==1){
   //alert("模式转换成功");
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x,y;
    x=620;
    y=145;
    context.beginPath();
    context.strokeStyle = 'red';
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="red";
    context.fill();
    context.stroke();

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x,y;
    x=880;
    y=145;
    context.beginPath();
    context.strokeStyle = 'black';
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="black";
    context.fill();
    context.stroke();
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x,y;
    x=750;
    y=145;
    context.beginPath();
    context.strokeStyle = 'yellow';
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="yellow";
    context.fill();
    context.stroke();
    model=0;
    setCookie("模式转换","0")
   }
   else {
    //alert("模式转换成功");
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x,y;
    x=620;
    y=145;
    context.beginPath();
    context.strokeStyle = 'black';
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="black";
    context.fill();
    context.stroke();

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x,y;
    x=880;
    y=145;
    context.beginPath();
    context.strokeStyle = 'green';
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="green";
    context.fill();
    context.stroke();
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x,y;
    x=750;
    y=145;
    context.beginPath();
    context.strokeStyle = 'black';
    context.arc(x-30,y-13,5,0,2*Math.PI);
    context.fillStyle="black";
    context.fill();
    context.stroke();
    model=1;
    setCookie("模式转换","1")
   }

  }



function showTime(){ 
 var week=new Array('星期一','星期二','星期三','星期四','星期五','星期六','星期日');
 var now = new Date();
 var year = now.getFullYear();
 var month = now.getMonth();
 var date = now.getDate();
 var day = now.getDay();
 var hour = now.getHours();
 var minutes = now.getMinutes();
 var second = now.getSeconds(); 
  month=month+1;
     month<10?month='0'+month:month; 
     
     hour<10?hour='0'+hour:hour; 
     minutes<10?minutes='0'+minutes:minutes; 
     second<10?second='0'+second:second;
     var now_time =  year + '年' + month + '月' + date + '日' + ' ' + hour + ':' + minutes + ':' + '' + second + ' '; 
     document.getElementById('timetext').value=now_time; 
     setTimeout("showTime();",1000);      //每隔1秒刷新一次
 } 

//弹窗功能
//hhj 2020/5/14 pm
function get_jieduanjihua(){
	document.getElementById('zhezhao').style.display="block";
	}

function get_diaodumingling(){
	document.getElementById('zhezhao1').style.display="block";
	}

function get_qingqiumingling(){
	document.getElementById('zhezhao2').style.display="block";
	}

function login_account(){
	document.getElementById('zhezhao3').style.display="block";
	}

function hidder(){
	document.getElementById('zhezhao').style.display="none";
	}

function hidder1(){
	document.getElementById('zhezhao1').style.display="none";
	}

function hidder2(){
	document.getElementById('zhezhao2').style.display="none";
	}

function hidder3(){
	document.getElementById('zhezhao3').style.display="none";
	}

//登录弹窗
//user_val 用户工号;user_val 用户密码；password_val 用户密码
//hhj 2020/5/14 pm
function submit_user(){
	var user_val = document.getElementById("user").value;
	var name_val = document.getElementById("name").value;
	var password_val = document.getElementById("password").value;
	if(user_val == ""){
		alert("用户工号不能为空！！");
		}else if(name_val == ""){
			alert("用户姓名不能为空！！");
			}else if(password_val == ""){
				alert("用户密码不能为空！！")
			}
}

function get_01(){
	parent.document.getElementById("txt1").value = "封锁区间";
	parent.document.getElementById("txt2").value = "站至  站间  行线因 ，自接令时（  次列车到  站）起（至  时  分止），区间封锁。";
}

function get_02(){
	parent.document.getElementById("txt1").value = "开通封锁区间";
	parent.document.getElementById("txt2").value = "根据  站报告，  站至  站间  行线  完毕（区间已空闲），自接令时起区间开通。";
}

function get_03(){
	parent.document.getElementById("txt1").value = "向封锁区间开行救援列车";
	parent.document.getElementById("txt2").value = "（自接令时起，  站至  站间  行线区间封锁。）准许  站（利用  机车）开  次列车，进入  站至  站间  行线封锁区间  km  m处进行救援，将  次列车推进（拉回）至  站（返回开  次列车）（按救援负责人的指挥办理）。";
}

function get_04(){
	parent.document.getElementById("txt1").value = "向封锁区间开行录用列车";
	parent.document.getElementById("txt2").value = "准许  站开  次列车，进入  站至  站间  行线封锁区间  km  m防护点处停车，按作业负责人的指示进行作业（返回开  次列车），限  时  分前到达  站。";
}

function get_05(){
	parent.document.getElementById("txt1").value = "停用基本闭塞法，改用电话闭塞法";
	parent.document.getElementById("txt2").value = "自接令时（  次列车到  站）起，  站至  站间  行线停用基本闭塞法，改用电话闭塞法行车。";
}

function get_06(){
	parent.document.getElementById("txt1").value = "恢复原行车闭塞法";
	parent.document.getElementById("txt2").value = "自接令时（  次列车到  站）起，  站至  站间  行线，恢复原行车闭塞法。";
}

function get_07(){
	parent.document.getElementById("txt1").value = "在车站、区间临时停车上、下人员";
	parent.document.getElementById("txt2").value = "准许  次列车在  站（  站至  站间  行线  km  m处）停车上人，在  站（  站至  站间  行线  km  m处）停车下人。";
}

function get_08(){
	parent.document.getElementById("txt1").value = "改按天气恶劣难以辨认信号的办法行车";
	parent.document.getElementById("txt2").value = "根据  报告，  站至  站间信号显示距离不足200m，自接令时起，改按天气恶劣难以辨认信号的办法行车。";
}

function get_09(){
	parent.document.getElementById("txt1").value = "天气转好，恢复正常行车";
	parent.document.getElementById("txt2").value = "根据  报告，  站至  站间天气转好，自接令时起，恢复正常行车。";
}

function get_10(){
	parent.document.getElementById("txt1").value = "施工作业开始";
	parent.document.getElementById("txt2").value = "站（含）至  站（含）间  行线自接令时（  时  分）起，准许进行施工作业，限  时  分施工完毕。";
}

function get_11(){
	parent.document.getElementById("txt1").value = "施工作业结束";
	parent.document.getElementById("txt2").value = "根据  报告，  站（含）至  站（含）间  行线施工作业完毕。";
}

function get_12(){
	parent.document.getElementById("txt1").value = "施工作业较指定时间延迟结束";
	parent.document.getElementById("txt2").value = "根据  请求，准许  站（含  道、  号道岔）至  站（含  道、  号道岔）间  行线施工作业延迟至  时  分结束。";
}

function get_13(){
	parent.document.getElementById("txt1").value = "维修作业较指定时间延迟结束";
	parent.document.getElementById("txt2").value = "根据  请求，准许  站（含  道、  号道岔）至  站（含  道、  号道岔）间  行线维修作业延迟至  时  分结束。";
}

//位数不足补零
function zero(tim) {
    return tim<10&&!(tim<0)?'0'+tim:tim
}

//查询当前时间
function writeCurrentDate() {
   var now = new Date();
   var year = now.getFullYear(); //得到年份
   var month = zero(now.getMonth()+1);//得到月份
   var date = zero(now.getDate());//得到日期
   //var day = now.getDay();//得到周几
   var hour = zero(now.getHours());//得到小时
   var minu = zero(now.getMinutes());//得到分钟
   var sec = zero(now.getSeconds());//得到秒
 　//var MS = now.getMilliseconds();//获取毫秒
   //var week;
  // var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
  // week = arr_week[day];
   //var time = "";
   //time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu + ":" + sec + " " + week;
   //设置得到当前日期的函数的执行间隔时间，每1000毫秒刷新一次。
  // var timer = setTimeout("writeCurrentDate()", 1000);
  return{ 
         year:year,
		 month:month,
		 date:date,
		 hour:hour,
		 minute:minu,
		 sec:sec
        }	
}		