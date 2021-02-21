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

