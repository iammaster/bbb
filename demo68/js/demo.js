var $Tz_Login=$('#Tz_Login')
$("span.btn").click(function () { //点击出现登陆界面
    tc_center();
    $('#gray').show();
    $('#Tz_Login').show();
});
$('#Tz_Login .title a').click(function () {//点X全部影藏
    $('#gray').hide();
    $('#Tz_Login').hide();
});
$(window).resize(function(){//当窗口移动的时候
    tc_center();
});
window.onload = function () {
    init(document.getElementById("title"));//记得初始化
};
function tc_center(){
    var _top=($(window).height()-$("#Login").outerHeight(true))/2;
    var _left=($(window).width()-$("#Login").outerWidth(true))/2;

    //改变Top的值
    $("#Login").css({top:_top,left:_left});
}
var l = 0, t = 0, x = 0, y = 0;
var onOff = false;
var zindex = 3;
function init(titleDom) {
    //tm_center(divObj);//居中事件
    /*第一种*/
    var thisDom = titleDom;//获取当前title对象
    var parentDom = thisDom.parentNode;//获取当前title对应的div
    titleDom.onmousedown = function (event) {//1111开始
        var e = event || window.event;//为了兼容ie和火狐
        x = e.clientX;//鼠标所在的x坐标
        y = e.clientY;//鼠标所在的y坐标
        var bT,bB,bL,bR;
        l = parseInt(parentDom.offsetLeft);//距离浏览器左边的位置left
        t = parseInt(parentDom.offsetTop);//距离浏览器顶部的位置top
        onOff = true;//定义拖动标识,防止卡顿
        zindex++;
        parentDom.style.zIndex = zindex;
        document.onmousemove = function (event) {
            if (onOff) {
                var e = event || window.event;//为了兼容ie和火狐
                var newLeft = l + e.clientX - x;//新的左边距
                var newTop = t + e.clientY - y;//新的顶部边距
                bT=$Tz_Login.offset().top,bB=$Tz_Login.offset().top+$Tz_Login.outerHeight(true),
                    bL=$Tz_Login.offset().left,bR=$Tz_Login.offset().left+$Tz_Login.outerWidth(true);
                newLeft=Math.min(newLeft,($(window).width()-$Tz_Login.outerWidth(true)));
                newLeft=Math.max(newLeft,0);
                newTop=Math.min(newTop,($(window).height()-$Tz_Login.outerHeight(true)));
                newTop=Math.max(newTop,0);

                parentDom.style.left = newLeft + "px";
                parentDom.style.top = newTop + "px";

            }

        }; //鼠标移动的事件
        document.onmouseup = function (event) {
            if (onOff) {
                onOff = false;//还原标识
            }
        };//鼠标松开的事件

    };
}
;