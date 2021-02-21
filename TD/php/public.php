<?php
    //设置你的页面编码格式为utf8，不然就会出现乱码
    header("charset=utf8");
	
    $servername = "localhost";//服务器地址（此处为本地）
	$db_username = "root";//服务器用户名
	$db_password = "MySQL";//服务器密码
	$db_name = "webctc";//数据库名称
	
	//连接数据库
	$conn = new mysqli($servername,$db_username,$db_password,$db_name);
	
	//判断是否连接失败
	if($conn->connect_error){
		die("连接失败：".$conn->connect_error);
		}
	//设置字符编码
	$conn->query("set names utf8");
?>