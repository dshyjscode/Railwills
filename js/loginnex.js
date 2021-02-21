/**
 * Created by asd on 2017/7/4.
 */
$(function() {
    $(document).keydown(function (e) {
        e = e || event;
        if (e.keyCode == 13) {
            var str = $('#user_id').val() + "," + $('#passWord').val()
            ComparePsw(str)

        }
    })
    //正常登陆
    $('#sub').click(function (e) {
        e=e||event
        e.stopPropagation();
        e.preventDefault()
        var str = $('#user_id').val() + "," + $('#passWord').val()
        ComparePsw(str)
    })

    //快速登录
    $('#btn').click(function(e){
        e=e||event
        e.stopPropagation();
        e.preventDefault()
        //window.history.back()
        log()
    })
	 $('#Adminsub').click(function(e){
        e=e||event
        e.stopPropagation();
        e.preventDefault()
       var str = $('#user_id').val() + "," + $('#passWord').val()
		CompareAdmPsw(str)
    })
})
function log(da) {
    var da=da||'SCA12'
	if(da==1){
	window.location.href='cms.asp';
	}
    else if(da!=0&&da!=null&&da!=100){
        window.location.href='aaNex.asp?data='+da
    }
	
   /* else if(userArr.indexOf(user)!=-1&&pswArr[userArr.indexOf(user)]!=pasd){
        alert('密码错误')
    }
    else if(userArr.indexOf(user)==-1){
        alert('用户名错误')
    }*/
    else{
        alert('请输入正确登录信息')
    }
}


