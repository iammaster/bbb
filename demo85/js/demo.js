(function () {
    var $Tz_li = $('#Tz_wrap ul li');
    //设置开关 toogle 控制盒子状态
    var toggle = false;
    var txt = '';
    init();
    //li点击事件
    $Tz_li.click(function () {
        trans($(this));
        //如果toggle处于false(关闭)状态的话,就是盒子收起状态
        if (!toggle) {
            //我们将toggle变为true(开启)状态
            toggle = true;
            //为第一个li添加active类名控制 小三角的动画
            $Tz_li.eq(0).addClass('active');
            //将每个li的 的远近属性(translateZ)清除,并且每一个的top依次递增60px,完成下拉动画
            $Tz_li.each(function (i) {
                $Tz_li.eq(i).css({
                    webkitTransform: 'translateZ(0px)',
                    transform: 'translateZ(0px)',
                    top: i * 60 + 'px'
                });
            });
        } else {
            //如果盒子处于下拉状态,我们先将toggle变为false(关闭)
            toggle = false;
            //移除第一个li的active类名 控制小三角动画
            $Tz_li.eq(0).removeClass('active');
            //使盒子回到初始化状态
            init();
        };
    });
    //初始化 将每个li距离屏幕的位置依次调远 定位高度依次增加2px 展现出卡片集层次感
    function init() {
        $Tz_li.each(function (i) {
            $(this).css({
                webkitTransform: 'translateZ(' + i * -10 + 'px)',
                transform: 'translateZ(' + i * -10 + 'px)',
                top: i * 1.2 + 'px'
            });
        });
    };
    function trans(This){
        if (This.index() != 0) {
            //如果点击的不是第一个li, 我们获取他的text() 和第一个li的text进行替换
            txt = This.find('a').text();
            This.find('a').text($Tz_li.eq(0).find('a').text());
            $Tz_li.eq(0).find('a').text(txt);
        } ;
        $Tz_li.eq(0).addClass('on');
        //在200毫秒之后自己清除掉自身的on类名,以便于下次点击
        setTimeout(function () {$Tz_li.eq(0).removeClass('on')}, 200);
    }
})()
