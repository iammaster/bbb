(function(){
    var d=0; //鼠标当前点击点
    var z=0; //鼠标之前点击点
    var s=0; //进度条的距离
    var time=0; //存放定时函数
    //鼠标点击到li上改变li上的图片和切换内容开始
    $(".nav ul li").click(function(){
        z=d;
        d=$(this).index(); //获取到鼠标当前点击的li的下标

        $(this).addClass("color_blue").siblings().removeClass("color_blue");

        //找到当前点击的li换一个图片
        $(this).find("img").attr("src",'images/'+d+'.png');

        //如果当前点不等于之前点才改变之前点的图片
        if(d!=z)
            $(".nav ul li").eq(z).find("img").attr("src",'images/nav'+z+'.png');
        //按照进度条的距离动态移动.bar的距离
        s=160+d*160;
        $(".bar").animate({width:s},500);
        //如果当前点大于之前点就往左边移动
        if(d>z)
        {
            $(".con ul li").eq(z).animate({left:"-100%"},500);
            $(".con ul li").eq(d).css("left","100%");
            $(".con ul li").eq(d).animate({left:"0px"},500);
        }
        //如果当前点小于之前点就往右边移动
        else if(d<z)
        {
            $(".con ul li").eq(z).animate({left:"100%"},500);
            $(".con ul li").eq(d).css("left","-100%");
            $(".con ul li").eq(d).animate({left:"0px"},500);
        }
    })
    //鼠标点击到li上改变li上的图片和切换内容结束
    //自动播放开始
    function junmper(){
        z=d;
        d++;
        if(d>3)
            d=0;
        $(".con ul li").eq(z).animate({left:"-100%"},500);
        $(".con ul li").eq(d).css("left","100%");
        $(".con ul li").eq(d).animate({left:"0px"},500);
        $(".nav ul li").eq(d).addClass("color_blue").siblings().removeClass("color_blue");

        $(".nav ul li").eq(d).find("img").attr("src",'images/'+d+'.png');
        $(".nav ul li").eq(z).find("img").attr("src",'images/nav'+z+'.png');
        s=160+d*160;
        $(".bar").animate({width:s},500);
        z=d;
    }
    time=setInterval("junmper()",4000);
    //自动播放结束
    //鼠标移动到li上停止自动播放并且让文字颜色变成白色
    $(".nav ul li").hover(function(){
        clearInterval(time);
        $(this).addClass("color_white");
    },function(){
        //鼠标离开li时启动自动播放并且让文字颜色变成蓝色
        time=setInterval("junmper()",4000);
        $(this).removeClass("color_white");
    })
})()
