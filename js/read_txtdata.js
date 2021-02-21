
var fso, ts,i=0;
var s=new Array(10505);
var str=new Array(10505);
var name1=new Array(10503);
var command=new Array(10503);
var equittype=new Array(10503);
for(i=0;i<10503;i++)
{
var strs=sn[i].split('=');
if(i>1)
{
var c='-';
var regex=new RegExp(c,'g');
var result=strs[1].match(regex);
var count =!result ? 0 : result.length;
var first=strs[1].split('-');	
		
	
	if(count==1)
	{	
		var douhao=',';
		var regexd=new RegExp(douhao,'g');
		var resultd=strs[1].match(regexd);
		var countd =!resultd ? 0 : resultd.length;	
		var second=first[1].split(',');	
		var len=strs[1].length-first[1].length-1;
		if(countd==1)
		{
		command[i-2]=first[1].substring(0,first[1].length-second[1].length-1);
		name1[i-2]=strs[1].substring(1,strs[1].length-first[1].length-1);
		equittype[i-2]=second[1];
		}
		else if(countd==2)
		{
		command[i-2]=first[1].substring(2,second[1].length+second[2].length);
		name1[i-2]=strs[1].substring(1,strs[1].length-first[1].length+1);
		equittype[i-2]=second[2];
		}
	}
	else 
	{
		name1[i-2]=strs[1].substring(1,strs[1].length-first[2].length-1);
		var second=first[2].split(',');		
		command[i-2]=first[2].substring(0,first[2].length-second[1].length-1);
		equittype[i-2]=second[1];
	}
	if(i>1538 && i<5684)
	{
		if(command[i-2]=='H')
			command[i-2]="红光带";
		else if(command[i-2]=='G')
			command[i-2]="绿光带";
		else if(command[i-2]=='W')
			command[i-2]="白光带";
		else if(command[i-2]=="分路不良")
			command[i-2]="计轴分路不良";
		else if(command[i-2]=="红光带故障")
			command[i-2]="计轴红光带故障";
		else if(command[i-2]=="白光带故障")
			command[i-2]="计轴白光带故障";
		else if(command[i-2]=="计轴切除")
			command[i-2]="计轴计轴切除";
		else if(command[i-2]=="计轴失效")
			command[i-2]="计轴计轴失效";
	}
	if(i>9980 && i<10443)
	{
		if(command[i-2]=="占用")
			command[i-2]="逻辑占用";
		else if(command[i-2]=="锁闭")
			command[i-2]="逻辑锁闭";

	}
}

}
console.log(equittype)
