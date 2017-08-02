(function(){
    $(".List ul li:lt(3)").show();
    $(window).scroll(function(){
        var _top=$(this).scrollTop()+$(window).height()-200;
        document.title=_top;
        $(".List ul li").each(function(){
            var _index=$(this).index()+3;
            var _height=$(this).offset().top;//获li与浏览器窗口顶部距离
            if(_top<_height){

                $(".List ul li:lt("+_index+")").show();
                return false;
            }
        });
    });
})()