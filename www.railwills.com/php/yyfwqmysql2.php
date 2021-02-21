<?php
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "myDB";
 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 


// 使用 sql 创建数据表
$sql = "CREATE TABLE DiaoDuMingLING (
xuehao VARCHAR(10),
zhentou VARCHAR(2),
leixing VARCHAR(2),
gongnengma VARCHAR(2),
fasongfang VARCHAR(2),
jieshoufang VARCHAR(2),
zhuangtai VARCHAR(255),
zhenwei VARCHAR(2),
time datetime
)";

if ($conn->query($sql) === TRUE) {
    echo "Table DiaoDuMingLING created successfully";
} else {
    echo "创建数据表错误: " . $conn->error;
}

//--解析Json，获取对应的变量值
header('Access-Control-Allow-Origin:*');//注意！跨域要加这个头 上面那个没有
$yyfwqdata = $_POST['yyfwqdata'];
echo $yyfwqdata['zhentou'];
echo $yyfwqdata['leixing'];
echo $yyfwqdata['gongnengma'];
echo $yyfwqdata['fasongfang'];
echo $yyfwqdata['jieshoufang'];
echo $yyfwqdata['zhuangtai'];
echo $yyfwqdata['zhenwei'];
/*
$obj=json_decode($liansuodata,TRUE);
$zhentou = strval($obj["zhentou"]);
$leixing = strval($obj["leixing"]);
$gongnengma = strval($obj["gongnengma"]);
$fasongfang = strval($obj["fasongfang"]);
$jieshoufang = strval($obj["jieshoufang"]);
$zhuangtai = strval($obj["zhuangtai"]);
$zhenwei = strval($obj["zhenwei"]);
*/
$xuehao = strval($yyfwqdata['xuehao']);
$zhentou = strval($yyfwqdata['zhentou']);
$leixing = strval($yyfwqdata['leixing']);
$gongnengma = strval($yyfwqdata['gongnengma']);
$fasongfang = strval($yyfwqdata['fasongfang']);
$jieshoufang = strval($yyfwqdata['jieshoufang']);
$zhuangtai = strval($yyfwqdata['zhuangtai']);
$zhenwei = strval($yyfwqdata['zhenwei']);
$t = time();
//$today = date("Y-m-d", $t);
// 设置时区
date_default_timezone_set("PRC");
$time = date("Y-m-d H:i:s",$t);
//插入数据

$insert_DiaoDuMingLING="INSERT INTO DiaoDuMingLING (xuehao, zhentou, leixing, gongnengma, fasongfang, jieshoufang, zhuangtai, zhenwei, time) VALUES (?,?,?,?,?,?,?,?,?)";
$result =  $conn->prepare($insert_DiaoDuMingLING);
$result -> bind_param("sssssssss",$xuehao,$zhentou,$leixing,$gongnengma,$fasongfang,$jieshoufang,$zhuangtai,$zhenwei,$time);
$result->execute();

$result -> close();
$conn->close();
?>