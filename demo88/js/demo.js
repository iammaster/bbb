$(document).ready(function () {
    var $wW = $(window).width();
    var $wH = $(window).height();
    var timer = null;
    var ySpeed = 0;
    var xSpeed = 0;
    $(document).click(function (ev) {
        ySpeed = 0;
        xSpeed = 0;
        $('#Tz_ball').remove();
        ev = ev || window.event;
        var X = ev.pageX;
        var Y = ev.pageY;
        var t = Y - 50; var l = X - 50;
        $(' <div id="Tz_ball"></div>').appendTo($('body'));
        $('#Tz_ball').css({
            left: l + 'px',
            top: t + 'px'
        });
        play();
    });
    function play() {
        clearInterval(timer);
        timer = setInterval(function () {
            xSpeed += 0.5;
            ySpeed += 5;
            var L = $('#Tz_ball').offset().left + xSpeed;
            var T = $('#Tz_ball').offset().top + ySpeed;
            if (T > $wH - $('#Tz_ball').height() - 20) {
                T = $wH - $('#Tz_ball').height() - ySpeed;
                $('#Tz_ball').addClass('shadow')
                ySpeed *= -1;
                ySpeed *= 0.8;
                xSpeed *= 0.5;
            } else {
                $('#Tz_ball').removeClass('shadow')
            }
            if (L > $wW - $('#Tz_ball').width() - 20) {
                T = $wH - $('#Tz_ball').height() ;
                $('#Tz_ball').addClass('shadow')
                clearInterval(timer)
            }
            $('#Tz_ball').css({
                left: L + 'px',
                top: T + 'px'
            });
        }, 30)
    }
});