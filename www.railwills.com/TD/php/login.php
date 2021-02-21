<?php
        
        include "public.php";		
		//接收html通过post方式传递过来的数据（$_REQUEST:可以接收两种方式的数据）
        $name=$_REQUEST['uname'];
		$studentNum=$_REQUEST['studentNum'];
        $pass=$_REQUEST['pass'];
		$sql="SELECT name,studentNum,pass FROM 登录信息 WHERE name='$name'";
		$result = mysqli_query($conn, $sql);
		$n = mysqli_num_rows($result);		
        header("content-type:text/html");//设置返回的内容类型
		if($n){
					
			// 输出数据
            while($row = mysqli_fetch_assoc($result)) {
				 
			   if($row['name']==$name&&$row['studentNum']==$studentNum){
				   if($row['pass']==$pass){
					   $reName=$row['name'];
					   $reStudentNum=$row['studentNum'];
					   $rePass=$row['pass'];
					   echo $reName.",".$reStudentNum.",".$rePass;
				   }
				   else{
					   echo "密码错误";
					   }
			    }
			    else{
				    echo "学号错误";
			        }	          
	        }
		}
		else{
			echo "用户不存在";
			}
?>