<?php
	//获取地址相关的信息
	$pathinfo = $_SERVER['PATH_INFO'];
	//截取字符串
	$pathinfo = substr($pathinfo, 1);
	//将字符串转化为数组
	$route = explode('/',$pathinfo);
	
	//判断路径的层数
	if(empty($pathinfo)){
		$path = 'index/index';
	}else if(count($route) == 1){
		$path = 'index/'.$route[0];
	}else{
		$path = $route[0].'/'.$route[1];
	}

	//跳转到相应的页面
	include '/views/'.$path.'.html';
?>