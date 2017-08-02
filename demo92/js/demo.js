$(".sel span").mouseover(function () {
    $(this).addClass("active").siblings().removeClass("active"); //class="active"
    var _index = $(this).index(); //获取序列号
    $(".List ul").eq(_index).show().siblings().hide();
});