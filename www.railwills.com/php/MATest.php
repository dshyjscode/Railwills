<?php
    header('Access-Control-Allow-Origin:*');//注意！跨域要加这个头 上面那个没有
    $MAdata = $_POST['MAdata'];
    echo $MAdata['zhentou'];
    echo $MAdata['leixing'];
    echo $MAdata['checihao'];
	echo $MAdata['xingchexuke'];
    echo $MAdata['linshixiansu'];
    echo $MAdata['jinjitingche'];
	echo $MAdata['zhenwei'];

?>