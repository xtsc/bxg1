define(['jquery','nprogress','template','cookie'],function($,nprogress,template){
	//进度条
	nprogress.start();
	nprogress.done();


	//判断用户是否登录
	if(!$.cookie('userInfo') && location.pathname != '/login'){
		location.href = '/login';
	}


	//退出登录
	$('#logout').on('click',function(){
		$.ajax({
			url:'/api/logout',
			type:'post',
			success:function(info){
				if(info.code == 200){
					location.href = '/login';
				}
			}
		});
	});


	//使用模板引擎设置用户头像和昵称
	//基于模板名渲染模板：template(filename, data);
	//将模板源代码编译成函数：template.compile(source, options);
	//将模板源代码编译成函数并立刻执行：template.render(source, data, options);
	
	var userInfo = JSON.parse($.cookie('userInfo'));
	var source = '<div class="avatar img-circle">\
            		<img src="<%= tc_avatar %>">\
        		</div>\
        		<h4><%= tc_name %></h4>';
    var html = template.render(source,userInfo);
    $('.aside .profile').append(html);


    //侧边导航栏展开
    $('.aside .navs ul').prev('a').on('click',function(){
    	$(this).next('ul').slideToggle();
    });

});

