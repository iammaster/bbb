var $Tz_wrap = $('.Tz_wrap')
var $p = $('p');
(function () {
    var timer = null;
    var width = $Tz_wrap.width();
    var height = $Tz_wrap.height();
    var txt = '';
    var timer = null;
    var timer2 = null;
    $Tz_wrap.on('click', fn);
    $p.on('click', fn);
    clear();
    function fn(ev) {
        ev = ev || window.event;
        var x = ev.clientX - $(this).offset().left;
        var y = ev.clientY - $(this).offset().top + $(window).scrollTop();
        $(' <div class="waves"></div>').appendTo($(this));
        clearInterval(timer2);
        timer = setTimeout(function () {
            $('.waves').css({
                left: x + 'px',
                top: y + 'px',
                webkitTransform: 'scale(13)',
                transform: 'scale(13)',
                opacity: 0,
            });
        }, 50);
        clear();
    };
    function clear() {
        timer2 = setInterval(function () {
            $('.waves').remove();
        }, 1000)
    };
})()
