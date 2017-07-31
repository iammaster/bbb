/*鼠标方位感知遮罩层 js*/
(function () {
    /*获取 li */
    var $Tz_li = $("#Tz_box ul li");
    //li 鼠标移入事件 $.hover(function(){},funciton(){})
    $Tz_li.hover(function (ev) {//鼠标移入
        ev=ev||window.event;    //兼容性
        move.call(this, ev, true);
    }, function (ev) {//鼠标移出
        ev=ev||window.event;
        move.call(this, ev, false);
    });
    /*事件函数 move*/
    function move(ev, bool) {//参数 ev 鼠标对象 bool 区分移入移除
        /*获取当前对象 顶部相对于当前文档的顶部的位置(top)/底部的相对位置(bottom)/左边相对于文档左侧的位置(left)/右边相对位置(right) */
        var top = $(this).offset().top,
            bottom = top + $(this).height(),
            left = $(this).offset().left,
            right = left + $(this).width();
        /*获取当前鼠标的坐标位置 pageX:鼠标相对于整个页面的x坐标 pageY:鼠标相对于整个页面的Y坐标*/
        var x = ev.pageX,
            y = ev.pageY;
        /*取得鼠标相对于盒子各个边的位置并取绝对值*/
        var sT = Math.abs(y - top),
            sB = Math.abs(y - bottom),
            sL = Math.abs(x - left),
            sR = Math.abs(x - right);
        var min = Math.min(sT, sB, sL, sR)//找出其中最小的值,说明鼠标是从最小值的方位进入的
        switch (min) {
            //如果最小值是sT ,说明鼠标是从盒子顶部进入的
            case sT:
                if (bool) {
                    // 如果是要移入.我们就让.text先定位到盒子的上方
                    $(this).find(".text").css({
                        left: 0,
                        top: "-220px"
                    }).stop().animate({//然后从上方进行动画向下划入,下面的原理一样,不再赘述
                        top: "0"
                    }, 200)
                } else {//如果是移出.就让遮罩层自下向上移动到-117px的定位位置
                    $(this).find(".text").stop().animate({
                        top: "-220px"
                    }, 200)
                }
                break;
            case sB:
                if (bool) {
                    $(this).find(".text").css({
                        left: 0,
                        top: "220px"
                    }).stop().animate({
                        top: "0"
                    }, 200)
                } else {
                    $(this).find(".text").stop().animate({
                        top: "220px"
                    }, 200)
                }
                break;
            case sL:
                if (bool) {
                    $(this).find(".text").css({
                        left: "-164px",
                        top: 0
                    }).stop().animate({
                        left: 0
                    }, 200)
                } else {
                    $(this).find(".text").stop().animate({
                        left: "-164px"
                    }, 200)
                }
                break;
            case sR:
                if (bool) {
                    $(this).find(".text").css({
                        left: "164px",
                        top: 0
                    }).stop().animate({
                        left: 0
                    }, 200)
                } else {
                    $(this).find(".text").stop().animate({
                        left: "164px"
                    }, 200)
                }
                break;
            default:
                return;
        }
    }
})();