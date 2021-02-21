<?php
    header('Access-Control-Allow-Origin:*');//注意！跨域要加这个头 上面那个没有
    $liansuodata = $_POST['liansuodata'];
    echo $liansuodata['zhentou'];
    echo $liansuodata['leixing'];
    echo $liansuodata['gongnengma'];
	echo $liansuodata['fasongfang'];
    echo $liansuodata['jieshoufang'];
    echo $liansuodata['zhuangtai'];
	echo $liansuodata['zhenwei'];

?>