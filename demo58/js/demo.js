(function(){
    $("#Tz_Logo ul li").hover(function () {
        //鼠标滑上去的时候
        $(this).addClass("hover").siblings('li:not(:first)').removeClass("hover");// 添加 class="hover"
        $(this).find(".Menu").slideDown();//查找到 li下面的  .Menu 并显示出来

    }, function () {
        $(this).find(".Menu").slideUp();//向上收缩
        $(this).removeClass("hover").siblings('li:first').addClass('hover')
    });
})()