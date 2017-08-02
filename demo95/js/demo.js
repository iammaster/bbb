var mark = 1;
$("#Tz_face p").click(function () {
    if (mark == 1) {
        $("#Tz_face").animate({right: "0px"}, 500);
        mark = 2;
    } else if (mark == 2) {
        $("#Tz_face").animate({right: "-290px"}, 500);
        mark = 1;
    }
});
$('.but').click(function(){
    $("#message").fadeOut();
    $(".gray").fadeOut();
    $("#Tz_face").animate({right: "-290px"}, 500);
    mark = 1;
})
$("#Tz_face ul li").click(function () {
    $(".messTz_Con").text("");
    $(".gray").show();
    //换图片
    var _index = $(this).index() + 1;
    /*获取浏览器的宽度减去图片的宽度算出图片展示的left坐标*/
    var left = ($(window).width() - 400) / 2;
    var params = {"width": "900px", "height": "900px", "opacity": 0.2};
    var params2 = {"width": "400px", "height": "400px", "opacity": 1};
    $("#message").show();
    $("#message img.bimg").attr("src", "images/qw_cat_000" + _index + ".gif").css(params).animate(params2, 500, function () {
        $("#message .write").show();
        /*颤抖整个文字div*/
        shake($("#Tz_Con"));

    });
    /*文本输入框的键盘事件*/
    $(".in").off().keyup(function () {
        changeFont($(this), _index);
    }).keydown(function () {
        changeFont($(this), _index);
    });
});
/*输入框的键盘事件*/
function changeFont($this, index) {
    /*切换图片的空模板，*/
    $("#message img.bimg").attr("src", "images/template/qw_cat_000" + index + ".gif");
    /*获取文本框的文件*/
    var v = $this.val();
    /*获取文本框的长度*/
    var len = v.length;
    /*如果过长就返回*/
    if (len > 30)return;
    /*设定字体大小*/
    var s = 24;
    if (len == 1)s = 120;
    /*如果一个文字就是font-size:90px;*/
    if (len == 2)s = 90;
    /*如果2个文字就是font-size:64px;*/
    if (len == 3)s = 60;
    /*如果3个文字就是font-size:52px;*/
    if (len == 4)s = 50;
    /*如果4个文字就是font-size:45px;*/
    if (len == 5)s = 41;
    /*如果5个文字就是font-size:41px;*/
    if (len == 6)s = 38;
    /*如果6个文字就是font-size:38px;*/
    if (len == 7)s = 35;
    /*如果7个文字就是font-size:35px;*/
    if (len == 8)s = 28;
    /*如果8个文字就是font-size:28px;*/
    /*将输入的文本框放入到悬浮框中*/
    $(".messTz_Con").css("font-size", s).text(v);
}
/*颤抖方法*/
function shake(dom) {
    p = [4, 8, 4, 0, -4, -8, -4, 0];
    p = p.concat(p.concat(p));
    timerId = setInterval(fx, 13);
    function fx() {
        dom.css("left", p.shift() + "px");
        if (p.length <= 0) {
            dom.css("left", "0px");
            clearInterval(timerId);
        };
    };
};