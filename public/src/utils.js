define(['jquery'],function($){
	return {
		setMenu:function(key){
			$('.aside .navs a[href="'+key+'"]').addClass('active').parents('ul').show();
		}
	}
});
