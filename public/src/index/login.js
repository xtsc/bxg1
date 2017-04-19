define(['jquery','cookie'],function($){
    //登录
    $('#loginForm').on('submit',function(){
        var formData = $(this).serialize();
        $.ajax({
            url:'/api/login',
            type:'post',
            data:formData,
            success:function(info){
                if(info.code == 200){
                    //保存用户头像和昵称，cookie只能存储字符串
                    $.cookie('userInfo',JSON.stringify(info.result));
                    location.href = '/';
                }
            }
        });
        //阻止默认行为
        return false;
    });
    
});
