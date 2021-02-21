<?php
$con = mysql_connect("localhost","root","");
$select_db = mysql_select_db('mysql');
if (!$select_db) {
    die("could not connect to the db:\n" .  mysql_error());
}

//查询代码
$sql = "select * from db";
$res = mysql_query($sql);
if (!$res) {
    die("could get the res:\n" . mysql_error());
}
while ($row = mysql_fetch_assoc($res)) {
    print_r($row);
}
//查询代码

//关闭数据库连接
mysql_close($con);
?>
