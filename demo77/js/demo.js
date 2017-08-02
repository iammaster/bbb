$(document).ready(function () {
    var wW = $(document).width();
    var num = 6;
    var pW = 760;
    var btnP = (wW - pW) / 2;
    var index = 0;
    var $slider = $('.slider');
    var $bg = $('.bg div');
    var $sLi = $('.slider li');
    var $thum = $('.thumbnails');
    var $thumLi = $('.thumbnails li');
    var $btn = $('.btn span');
    //初始化
    function init() {
        $slider.css({'width': num * wW + 'px'});
        $sLi.css({'width': wW + 'px'});
        $bg.css({'width': num * wW + 'px'})
        $thum.css({'width': pW + 'px', 'marginLeft': -pW / 2 + 'px'});
        $btn.eq(0).css({'left': btnP + 'px'});
        $btn.eq(1).css({'right': btnP + 'px'});
    }

    (function () {
        init();
        $thum.find('li').each(function () {
            var angle = Math.floor(Math.random() * 41) - 20;
            $(this).css({
                left: (pW / (num + 1)) * ($(this).index() + 1) - ($(this).width() / 2) + 'px',
                '-moz-transform': 'rotate(' + angle + 'deg)',
                '-webkit-transform': 'rotate(' + angle + 'deg)',
                'transform': 'rotate(' + angle + 'deg)',
            });
        }).hover(function () {
            $(this).stop().animate({
                top: -10 + 'px'
            }, 30)
        }, function () {
            $(this).stop().animate({
                top: '0px'
            }, 30)
        })
        //改变窗口时自适应
        $(window).resize(function () {
            wW = $(document).width();
            pW = 760;
            btnP = (wW - pW) / 2;
            init();
            move(index, 30);
        })
    })();
    $thumLi.click(function () {
        index = $(this).index();
        move(index, 1000);
    })
    $btn.hover(function () {
        $(this).css({'opacity': 1})
    }, function () {
        $(this).css({'opacity': 0.6})
    });
    $btn.eq(0).click(function () {
        index--;
        index = index < 0 ? num - 1 : index;
        move(index, 1000)
    })
    $btn.eq(1).click(function () {
        index++;
        index %= num;
        index %= num;
        move(index, 1000)
    })
    //运动函数
    function move(i, speed) {
        $thumLi.eq(i).find('img').css({'opacity': 1}).parent().siblings().find('img').css({'opacity': 0.7})
        $slider.stop().animate({
            left: -i * (wW) + 'px'
        }, speed, 'swing');
        $bg.eq(0).stop().animate({
            left: -i * (wW / 8) + 'px'
        }, speed, 'swing');
        $bg.eq(1).stop().animate({
            left: -i * (wW / 4) + 'px'
        }, speed, 'swing');
        $bg.eq(2).stop().animate({
            left: -i * (wW / 2) + 'px'
        }, speed, 'swing')
    };
});