(function () {
    var $scroll = $('.scroll')
    var $picLi = $('.scroll img');
    var $left = $('.leftBtn');
    var $right = $('.rightBtn');
    var $labLi = $('.lab ul li');
    var length = $picLi.length;
    var index = 1;
    var timer = null;
    $labLi.eq(index).addClass('on').siblings().removeClass('on');
    auto();
    //右点击
    $right.click(function () {
        play(0);
    });
    //做点击
    $left.click(function () {
        play(1);
    });
    //lab圆点点击
    $labLi.click(function () {
        index = $(this).index();
        move();
    });
    //鼠标移入停止自动轮播/移出开始自动轮播
    $('#Tz_wrap').hover(function () {
        clearInterval(timer);
    }, function () {
        auto();
    })
    //自动轮播
    function auto() {
        timer = setInterval(function () {
            play(0);
        }, 1000);
    };
    //判断函数 x参数为0 的时候左运动 1右运动
    function play(x) {
        if(x){
            index--;
            if (index < 1) {
                index = length - 2;
                $scroll.css({marginLeft: -(length - 1) * 750 + 'px'});
            };
        }else{
            index++;
            if (index > length - 2) {
                index = 1;
                $scroll.css({marginLeft: '0px'})
            };
        };
        move();
    };
    //运动函数 scroll根据index进行 位移
    function move() {
        $scroll.stop().animate({
            marginLeft: (-(index) * 750) + 'px',
        }, 500);
        $labLi.eq(index).addClass('on').siblings().removeClass('on');
    }
})()