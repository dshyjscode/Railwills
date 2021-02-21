<?php
    header('Access-Control-Allow-Origin:*');//注意！跨域要加这个头 上面那个没有
    $ctcdata = $_POST['ctcdata'];
    echo $ctcdata['zhentou'];
    echo $ctcdata['leixing'];
    echo $ctcdata['gongnengma'];
	echo $ctcdata['fasongfang'];
    echo $ctcdata['jieshoufang'];
    echo $ctcdata['minglingxuhao'];
	echo $ctcdata['xiadashijian'];
    echo $ctcdata['checihao'];
    echo $ctcdata['shangyizhan'];
	echo $ctcdata['fachejiecheshijian'];
    echo $ctcdata['fachejiechegudao'];
    echo $ctcdata['shangxiayizhanjiefachegudao'];
	echo $ctcdata['daofaleixing'];
    echo $ctcdata['zhenwei'];
?>