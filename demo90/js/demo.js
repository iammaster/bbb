var width = parseInt($(window).width());
var height = parseInt($(window).height());
var $Tz_pic = $('.pic');
var $imgs = $('.imgs');
var $prev = $('span.prev');
var $next = $('span.next');
var index = 0;
var timer = null;
//右点击
$next.click(function () {
    change(function () {
        move(index,[1,3,0,2]);
        index++;
        index %= $Tz_pic.length;
    });
});
//左点击
$prev.click(function () {
    change(function () {
        move(index,[0,1,2,3]);
        index--;
        index= (index < 0)? $Tz_pic.length - 1:index;
    });
});
//函数change
function change(fn) {
    //初始化所有的img的transform
    $Tz_pic.find('.bgm').css({transform: 'none', webkitTransform: 'none',})
    //改变层级关系让当前运动的层级为2
    $Tz_pic.eq(index).css({zIndex: 2}).siblings('.pic').css({zIndex: 0});
    //执行变化
    fn && fn();
    //改变层级关系让当前运动的层级为1
    $Tz_pic.eq(index).css({zIndex: 1}).addClass('on').siblings('.pic').removeClass('on')
}
//变化函数
function move(index,arr) {
    //下一张:对bgm进行水平位移和横向位移
    $Tz_pic.eq(index).find('.bgm').eq(arr[0]).css({
        transform: 'translateY(' + (height / 2 + 10) + 'px)',
        webkitTransform: 'translateY(' + (height / 2 + 10) + 'px)',
    });//0 1
    $Tz_pic.eq(index).find('.bgm').eq(arr[1]).css({
        transform: 'translateX(-' + (width / 2 + 10) + 'px)',
        webkitTransform: 'translateX(-' + (width / 2 + 10) + 'px)'
    });//1 3
    $Tz_pic.eq(index).find('.bgm').eq(arr[2]).css({
        transform: 'translateX(' + (width / 2 + 10) + 'px)',
        webkitTransform: 'translateX(' + (width / 2 + 10) + 'px)',
    });// 2 0
    $Tz_pic.eq(index).find('.bgm').eq(arr[3]).css({
        transform: 'translateY( -' + (height / 2 + 10) + 'px)',
        webkitTransform: 'translateY( -' + (height / 2 + 10) + 'px)',
    });//3 2
}
