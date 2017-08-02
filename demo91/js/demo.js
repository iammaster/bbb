//alert($);//弹出jquery插件的代理函数$
//$("#Tz_wrapper ul li") 找到所有的标签
$('img').ready(function(){
    $('#Tz_wrapper ul li').eq(0).css({
        opacity:1
    });
    $("#Tz_wrapper ul li").click(function(){//点击li实现什么功能
        //$(this)点击哪个li就指代哪个li
        var index = $(this).index();//获取被点击li的索引
        $(this).animate({//自定义动画//在一秒钟之内来改变
            "width" : "600px",
            "height" : "400px",
            "marginTop" : "0px",
            "opacity":1,
        },1000).siblings().animate({
            "width" : "100px",
            "height" : "70px",
            "marginTop" : "165px",
            "opacity":0.3
        },1000);//1000毫秒 = 1秒钟
        $("ul").animate({
            "marginLeft" : -(index*100 + 200) + "px"
        },1000);
    });
})


