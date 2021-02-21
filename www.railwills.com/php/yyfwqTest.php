<?php
    header('Access-Control-Allow-Origin:*');//注意！跨域要加这个头 上面那个没有
    $yyfwqdata = $_POST['yyfwqdata'];
    echo $yyfwqdata['zhentou'];
    echo $yyfwqdata['leixing'];
    echo $yyfwqdata['gongnengma'];
	echo $yyfwqdata['fasongfang'];
    echo $yyfwqdata['jieshoufang'];
    echo $yyfwqdata['zhuangtai'];
	echo $yyfwqdata['zhenwei'];

?>