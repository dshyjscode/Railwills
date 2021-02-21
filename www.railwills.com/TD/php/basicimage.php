<?php
        
        include "public.php";		
		//查找基本图数据表信息
        
		$sql="SELECT * FROM 基本图";
		$result = mysqli_query($conn, $sql);	
		//header("content-type:text/html");//设置返回的内容类型
		$brrr=array();
		while($row = mysqli_fetch_assoc($result)){
		  $arrr=ArrToStr($row);	   
		  array_push($brrr,$arrr);
		  
		}
		echo implode('^',$brrr);
		
		//方法：数组转字符串
       function ArrToStr($arr){
         $brr=array();
		 
           //将每个字符用“，”和“^”隔开
         foreach($arr as $v){
		    array_push($brr,$v);
         } 
		  return implode(",",$brr);
       }			
?>