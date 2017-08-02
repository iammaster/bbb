var $part = $('.part');
var $li = $('#Tz_list ul li');
var index = 0;
var $img = $('.part img');
(function() {
    $(document).ready(function() {
        $('body,html').scrollTop(0)
    });
    $li.eq(0).addClass('on');
    $part.append('<div class="logo"></div>');
    $part.each(function(i) {
        var a = '';
        a = i != 1 ? 'url(images/' + (i + 1) + '.jpg) no-repeat center / cover' : '#D97F5C'
        $(this).css('background', a)
    });
    end(0)
})();
(function() {
    star(index - 1);
    var b = $(window).height();
    $(window).resize(function() {
        b = $(window).height();
        $('body,html').animate({
            scrollTop: index * b
        }, 500)
    })
    $li.click(function() {
        index = $(this).index();
        move();
        end(index)
    });

    function move() {
        $li.eq(index).addClass('on').siblings().removeClass('on');
        $('body,html').stop(true).animate({
            scrollTop: index * b
        }, 500)
    };
    $(document).mousewheel(function() {
        star(index - 1)
        var a = arguments[1];
        index = a < 0 ? (index >= $li.length - 1 ? 0 : index + 1) : (index <= 0 ? $li.length - 1 : index - 1);
        move();
        end(index)
    })
})();

function end(i) {
    var w = size(i)[0];
    var h = size(i)[1];
    var l = size(i)[2];
    $img.eq(i).stop().animate({
        width: w + 'px',
        height: h + 'px',
        marginLeft: l + 'px',
        marginTop: -(h / 2) + 'px',
        top: 50 + '%',
        left: 50 + '%',
        opacity: 1
    }, 1500)
    $img.eq(i).css({
        width: w + 'px',
        height: h + 'px',
        marginLeft: l + 'px',
        marginTop: -(h / 2) + 'px',
        top: 50 + '%',
        left: 50 + '%',
        opacity: 1
    });
    $(window).resize(function() {
        w = size(i)[0];
        h = size(i)[1];
        l = size(i)[2];
        $img.eq(i).css({
            width: w + 'px',
            height: h + 'px',
            marginLeft: l + 'px',
            marginTop: -(h / 2) + 'px',
            top: 50 + '%',
            left: 50 + '%',
            opacity: 1
        })
    });

    function size(i) {
        var a = 0;
        var b = 0;
        var c = 0;
        var d = [];
        switch (i) {
            case 0:
                a = $(window).width() / 2.5;
                b = $(window).height() / 2.5;
                c = -(a / 2);
                d = [a, b, c];
                return d;
                break;
            case 1:
                a = $(window).width() / 2;
                b = $(window).height() * 0.8;
                c = -(a / 2);
                d = [a, b, c];
                return d;
                break;
            case 2:
                a = $(window).width() / 2;
                b = $(window).height() / 2;
                c = -(a) + (a / 5);
                d = [a, b, c];
                return d;
                break;
            case 3:
                a = $(window).width() / 7;
                b = $(window).height() / 3;
                c = (a) + 200;
                d = [a, b, c];
                return d;
                break;
            case 4:
                a = $(window).width() / 2;
                b = $(window).height() / 2;
                c = -(a / 2);
                d = [a, b, c];
                return d;
                break;
            case 5:
                a = $(window).width() / 1.8;
                b = $(window).height() / 2;
                c = -(a) + (a / 5);
                d = [a, b, c];
                return d;
                break;
            case 6:
                a = $(window).width() / 1.8;
                b = $(window).height() / 2;
                c = -(a) + (a / 5);
                d = [a, b, c];
                return d;
                break
        }
    }
};

function star(i) {
    $img.eq(i).css({
        marginLeft: 100 + 'px',
        marginTop: 100 + 'px',
        top: 50 + '%',
        left: 50 + '%',
        opacity: 0
    })
};