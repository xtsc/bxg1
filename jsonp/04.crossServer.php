<?php

	//前端跨域
	/*$callback = $_GET['callback'];
	$arr = array(
		'name' => 'zs',
		'age' => 12
		);
	// 把关联数组转换成json字符串
	$arr = json_encode($arr);
	echo $callback.'('.$arr.')';*/

	//服务端跨域
	header('Access-Control-Allow-Origin:*');
	echo 'hello server';



?>