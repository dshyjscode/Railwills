<?php
    header('Access-Control-Allow-Origin:*');//注意！跨域要加这个头 上面那个没有
    $tsrsdata = $_POST['tsrsdata'];
    echo $tsrsdata['zhentou'];
    echo $tsrsdata['leixing'];
    echo $tsrsdata['gongnengma'];
	echo $tsrsdata['fasongfang'];
    echo $tsrsdata['jieshoufang'];
    echo $tsrsdata['minglingleixing'];
	echo $tsrsdata['minglinghao'];
	
	echo $tsrsdata['shoulingchezhan'];
    echo $tsrsdata['xianlu'];
    echo $tsrsdata['qishizhan'];
	echo $tsrsdata['jiesuzhan'];
    echo $tsrsdata['xiansuqidian'];
    echo $tsrsdata['xiansuzhongdian'];
	echo $tsrsdata['xiansuyuanyin'];
	
	echo $tsrsdata['xiansuxitong'];
    echo $tsrsdata['kaishishijian'];
    echo $tsrsdata['jiesushijian'];
	echo $tsrsdata['xiansuneirong'];
    echo $tsrsdata['zhenwei'];


?>