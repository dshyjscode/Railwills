var unum=new Array(256);
var SendtoSever;

var AlarmEvent;
var ArrAlarmEvent=[];
var flag=0;
var xmlhttp=null;
unum[0]='\x00';
unum[1]='\x01';
unum[2]='\x02';
unum[3]='\x03';
unum[4]='\x04';
unum[5]='\x05';
unum[6]='\x06';
unum[7]='\x07';
unum[8]='\x08';
unum[9]='\x09'
unum[10]='\x0a'
unum[11]='\x0b'
unum[12]='\x0c'
unum[13]='\x0d'
unum[14]='\x0e'
unum[15]='\x0f'
unum[16]='\x10'
unum[17]='\x11'
unum[18]='\x12'
unum[19]='\x13'
unum[20]='\x14'
unum[21]='\x15'
unum[22]='\x16'
unum[23]='\x17'
unum[24]='\x18'
unum[25]='\x19'
unum[26]='\x1a'
unum[27]='\x1b'
unum[28]='\x1c'
unum[29]='\x1d'
unum[30]='\x1e'
unum[31]='\x1f'
unum[32]='\x20'
unum[33]='\x21'
unum[34]='\x22'
unum[35]='\x23'
unum[36]='\x24'
unum[37]='\x25'
unum[38]='\x26'
unum[39]='\x27'
unum[40]='\x28'
unum[41]='\x29'
unum[42]='\x2a'
unum[43]='\x2b'
unum[44]='\x2c'
unum[45]='\x2d'
unum[46]='\x2e'
unum[47]='\x2f'
unum[48]='\x30'
unum[49]='\x31'
unum[50]='\x32'
unum[51]='\x33'
unum[52]='\x34'
unum[53]='\x35'
unum[54]='\x36'
unum[55]='\x37'
unum[56]='\x38'
unum[57]='\x39'
unum[58]='\x3a'
unum[59]='\x3b'
unum[60]='\x3c'
unum[61]='\x3d'
unum[62]='\x3e'
unum[63]='\x3f'
unum[64]='\x40'
unum[65]='\x41'
unum[66]='\x42'
unum[67]='\x43'
unum[68]='\x44'
unum[69]='\x45'
unum[70]='\x46'
unum[71]='\x47'
unum[72]='\x48'
unum[73]='\x49'
unum[74]='\x4a'
unum[75]='\x4b'
unum[76]='\x4c'
unum[77]='\x4d'
unum[78]='\x4e'
unum[79]='\x4f'
unum[80]='\x50'
unum[81]='\x51'
unum[82]='\x52'
unum[83]='\x53'
unum[84]='\x54'
unum[85]='\x55'
unum[86]='\x56'
unum[87]='\x57'
unum[88]='\x58'
unum[89]='\x59'
unum[90]='\x5a'
unum[91]='\x5b'
unum[92]='\x5c'
unum[93]='\x5d'
unum[94]='\x5e'
unum[95]='\x5f'
unum[96]='\x60'
unum[97]='\x61'
unum[98]='\x62'
unum[99]='\x63'
unum[100]='\x64'
unum[101]='\x65'
unum[102]='\x66'
unum[103]='\x67'
unum[104]='\x68'
unum[105]='\x69'
unum[106]='\x6a'
unum[107]='\x6b'
unum[108]='\x6c'
unum[109]='\x6d'
unum[110]='\x6e'
unum[111]='\x6f'
unum[112]='\x70'
unum[113]='\x71'
unum[114]='\x72'
unum[115]='\x73'
unum[116]='\x74'
unum[117]='\x75'
unum[118]='\x76'
unum[119]='\x77'
unum[120]='\x78'
unum[121]='\x79'
unum[122]='\x7a'
unum[123]='\x7b'
unum[124]='\x7c'
unum[125]='\x7d'
unum[126]='\x7e'
unum[127]='\x7f'
unum[128]='\x80'
unum[129]='\x81'
unum[130]='\x82'
unum[131]='\x83'
unum[132]='\x84'
unum[133]='\x85'
unum[134]='\x86'
unum[135]='\x87'
unum[136]='\x88'
unum[137]='\x89'
unum[138]='\x8a'
unum[139]='\x8b'
unum[140]='\x8c'
unum[141]='\x8d'
unum[142]='\x8e'
unum[143]='\x8f'
unum[144]='\x90'
unum[145]='\x91'
unum[146]='\x92'
unum[147]='\x93'
unum[148]='\x94'
unum[149]='\x95'
unum[150]='\x96'
unum[151]='\x97'
unum[152]='\x98'
unum[153]='\x99'
unum[154]='\x9a'
unum[155]='\x9b'
unum[156]='\x9c'
unum[157]='\x9d'
unum[158]='\x9e'
unum[159]='\x9f'
unum[160]='\xa0'
unum[161]='\xa1'
unum[162]='\xa2'
unum[163]='\xa3'
unum[164]='\xa4'
unum[165]='\xa5'
unum[166]='\xa6'
unum[167]='\xa7'
unum[168]='\xa8'
unum[169]='\xa9'
unum[170]='\xaa'
unum[171]='\xab'
unum[172]='\xac'
unum[173]='\xad'
unum[174]='\xae'
unum[175]='\xaf'
unum[176]='\xb0'
unum[177]='\xb1'
unum[178]='\xb2'
unum[179]='\xb3'
unum[180]='\xb4'
unum[181]='\xb5'
unum[182]='\xb6'
unum[183]='\xb7'
unum[184]='\xb8'
unum[185]='\xb9'
unum[186]='\xba'
unum[187]='\xbb'
unum[188]='\xbc'
unum[189]='\xbd'
unum[190]='\xbe'
unum[191]='\xbf'
unum[192]='\xc0'
unum[193]='\xc1'
unum[194]='\xc2'
unum[195]='\xc3'
unum[196]='\xc4'
unum[197]='\xc5'
unum[198]='\xc6'
unum[199]='\xc7'
unum[200]='\xc8'
unum[201]='\xc9'
unum[202]='\xca'
unum[203]='\xcb'
unum[204]='\xcc'
unum[205]='\xcd'
unum[206]='\xce'
unum[207]='\xcf'
unum[208]='\xd0'
unum[209]='\xd1'
unum[210]='\xd2'
unum[211]='\xd3'
unum[212]='\xd4'
unum[213]='\xd5'
unum[214]='\xd6'
unum[215]='\xd7'
unum[216]='\xd8'
unum[217]='\xd9'
unum[218]='\xda'
unum[219]='\xdb'
unum[220]='\xdc'
unum[221]='\xdd'
unum[222]='\xde'
unum[223]='\xdf'
unum[224]='\xe0'
unum[225]='\xe1'
unum[226]='\xe2'
unum[227]='\xe3'
unum[228]='\xe4'
unum[229]='\xe5'
unum[230]='\xe6'
unum[231]='\xe7'
unum[232]='\xe8'
unum[233]='\xe9'
unum[234]='\xea'
unum[235]='\xeb'
unum[236]='\xec'
unum[237]='\xed'
unum[238]='\xee'
unum[239]='\xef'
unum[240]='\xf0'
unum[241]='\xf1'
unum[242]='\xf2'
unum[243]='\xf3'
unum[244]='\xf4'
unum[245]='\xf5'
unum[246]='\xf6'
unum[247]='\xf7'
unum[248]='\xf8'
unum[249]='\xf9'
unum[250]='\xfa'
unum[251]='\xfb'
unum[252]='\xfc'
unum[253]='\xfd'
unum[254]='\xfe'
unum[255]='\xff'
function ff(str)
{
	SendtoSever=str;
	if (window.XMLHttpRequest)
	{// code for IE7, Firefox, Opera, etc.
		xmlhttp=new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{

		}
	}
	if (xmlhttp!=null)
	{
		xmlhttp.open("GET","./WriteData.asp?SendtoSever="+SendtoSever,true);
		xmlhttp.send(null);
	}

	else
	{
		alert("Your browser does not support XMLHTTP.");
	}

}
function Setflag(start,endt)
{
	var start=start||null,
		endt=endt||null
	if(start==null || endt==null)
		flag="a";
	else
		flag=start+","+endt;

	if (window.XMLHttpRequest)
	{// code for IE7, Firefox, Opera, etc.
		xmlhttp=new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
//			 document.getElementById("txt").innerText=xmlhttp.responseText;
//				console.log(xmlhttp.responseText);
				AlarmEvent=xmlhttp.responseText;
				ArrAlarmEvent=AlarmEvent.split(",");
				//console.log(ArrAlarmEvent)
				$('#event_tab').find('tbody').children().remove()

				console.log($('#station').val())
                $('#event_tabBody').find('tr').remove()
				if($('#station').val()!='ALL') {
					for (var j = 0; j < ArrAlarmEvent.length - 1; j += 4) {
						if (ArrAlarmEvent[j] == $('#station').val()) {
							var site = ArrAlarmEvent[j]
							var Ti = ArrAlarmEvent[j + 1]
							var eve = ArrAlarmEvent[j + 2]
							var obj = ArrAlarmEvent[j + 3]
                            if(site==$('#station').val()){
								if(start!=null&&endt!=null){
									var now=new Date(Ti),
										star=new Date(start),
										end=new Date(endt)
									if(now>=star&&now<=end){
										$('#event_tabBody').append('<tr><td>' + Ti + '</td><td></td><td>' + site + '</td><td>' + obj + '</td><td>' + eve + '</td></tr>>')
									}
								}
								else{
									$('#event_tabBody').append('<tr><td>' + Ti + '</td><td></td><td>' + site + '</td><td>' + obj + '</td><td>' + eve + '</td></tr>>')
								}
							}
						}
					}
				}
				else{
					for (var k = 0; k < ArrAlarmEvent.length - 1; k += 4) {
							var site = ArrAlarmEvent[k]
							var Ti = ArrAlarmEvent[k + 1]
							var eve = ArrAlarmEvent[k + 2]
							var obj = ArrAlarmEvent[k + 3]
						if(start!=null&&endt!=null){
							var now=new Date(Ti),
								star=new Date(start),
								end=new Date(endt)
							if(now>=star&&now<=end){
								$('#event_tabBody').append('<tr><td>' + Ti + '</td><td></td><td>' + site + '</td><td>' + obj + '</td><td>' + eve + '</td></tr>>')
							}
						}
						else{
							$('#event_tabBody').append('<tr><td>' + Ti + '</td><td></td><td>' + site + '</td><td>' + obj + '</td><td>' + eve + '</td></tr>>')
						}
							/*$('#event_tab').append('<tr><td>' + Ti + '</td><td></td><td>' + site + '</td><td>' + obj + '</td><td>' + eve + '</td></tr>>')*/
					}
				}
			}
	}
	if (xmlhttp!=null)
	{
		xmlhttp.open("GET","./ResponseData.asp?flag="+flag,true);
		xmlhttp.send(null);
	}

	else
	{
		alert("Your browser does not support XMLHTTP.");
	}



}
function ReadExmAnswer(a)//读取实验答案
{
	var ReadExmAns=[];
	var GetAnswer;
	var ArrExmAns=[];//答案数组
	var AnswerStep;//答案步骤变量
	var NO=a;
    if (window.XMLHttpRequest)
    {// code for IE7, Firefox, Opera, etc.
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            GetAnswer=xmlhttp.responseText;
            ReadExmAns=GetAnswer.split(",");
            for(var j=0;j<(ReadExmAns.length-1)/4;j++)
			{
				ArrExmAns.push(ReadExmAns);
				ArrExmAns[j]=new Array(4);
                for(var i=0;i<4;i++)
				{
                    ArrExmAns[j][i]=ReadExmAns[i+4*j];					
				}
				AnswerStep=ArrExmAns[j][1].split("-")
				ArrExmAns[j][1]=new Array(AnswerStep.length)
				for(var k=0;k<AnswerStep.length;k++)
				{
					ArrExmAns[j][1][k]=AnswerStep[k]
				}
			}
			testName(ArrExmAns)			
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./js/ReadExmAnswer.asp?NO="+NO,true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
	
}


function GetScore(a,b)//读取用户答案并且评分
{
	b.splice(0,1);
	b.splice(b.length-1,1);
	var stringb=b.join("-")
	var str=a+","+stringb;
    if (window.XMLHttpRequest)
    {// code for IE7, Firefox, Opera, etc.
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
         
					
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./js/GetScore.asp?str="+str,true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
	
}

function ReadExmAnswer(a)//读取实验答案
{
	var ReadExmAns=[];
	var GetAnswer;
	var ArrExmAns=[];//答案数组
	var AnswerStep;//答案步骤变量
	var NO=a;
    if (window.XMLHttpRequest)
    {// code for IE7, Firefox, Opera, etc.
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            GetAnswer=xmlhttp.responseText;
            ReadExmAns=GetAnswer.split(",");
            for(var j=0;j<(ReadExmAns.length-1)/4;j++)
			{
				ArrExmAns.push(ReadExmAns);
				ArrExmAns[j]=new Array(4);
                for(var i=0;i<4;i++)
				{
                    ArrExmAns[j][i]=ReadExmAns[i+4*j];					
				}
				AnswerStep=ArrExmAns[j][1].split("-")
				ArrExmAns[j][1]=new Array(AnswerStep.length)
				for(var k=0;k<AnswerStep.length;k++)
				{
					ArrExmAns[j][1][k]=AnswerStep[k]
				}
			}
			testName(ArrExmAns)			
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./js/ReadExmAnswer.asp?NO="+NO,true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
	
}


function ReadExperimentShow(a)//读取演示实验步骤
{
	var ReadExmAns=[];
	var GetAnswer;
	var ArrExmAns=[];//答案数组
	var AnswerStep;//答案步骤变量
	var NameStr=a;
    if (window.XMLHttpRequest)
    {// code for IE7, Firefox, Opera, etc.
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            GetAnswer=xmlhttp.responseText;
            ReadExmAns=GetAnswer.split("!");
            for(var j=0;j<(ReadExmAns.length-1)/5;j++)
			{
				ArrExmAns.push(ReadExmAns);
				ArrExmAns[j]=new Array(5);
                for(var i=0;i<5;i++)
				{
                    ArrExmAns[j][i]=ReadExmAns[i+5*j];					
				}
				AnswerStep=ArrExmAns[j][1].split("-")
				ArrExmAns[j][1]=new Array(AnswerStep.length)
				for(var k=0;k<AnswerStep.length;k++)
				{
					ArrExmAns[j][1][k]=AnswerStep[k]
				}
			}
			newH(ArrExmAns);		
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./js/ReadExperimentShow.asp?NameStr="+NameStr+"&GetType=2",true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
	
}

function GetExperiment()//获取下拉演示实验名称和设备类型
{
	var NameStr="a";
	var ExperimentType=[];
	if (window.XMLHttpRequest)
    {// code for IE7, Firefox, Opera, etc.
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
           	var Experiment=xmlhttp.responseText;
            ReadExmAns=Experiment.split("!");  
			ReadExmAns.splice(ReadExmAns.length-1,1)
//			testName(ArrExmAns)	
			Ghands(ReadExmAns)
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./js/ReadExperimentShow.asp?NameStr="+NameStr+"&GetType=1",true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
	
}
function LoginType(a,b,c)//登录，共有两种方式：游客登录和普通登录，a为登录方式，0是游客登录，1是普通登录；b为登录名；c是登录密码
{
	var logindata;
	if(a==0)
	logindata="0,0,0";
	else if(a==1)
	logindata=a+","+b+","+c
	if (window.XMLHttpRequest)
    {// code for IE7, Firefox, Opera, etc.
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
           	var Loginname=xmlhttp.responseText;
        }
    }
    if (xmlhttp!=null)
    {
        xmlhttp.open("GET","./js/LoginType.asp?logindata="+logindata,true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}
//ReadExperimentShow("添加车次")