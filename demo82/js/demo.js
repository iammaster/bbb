
(function(){
    var timeOut = null
    $('.side ul li').hover(function () {
        clearTimeout(timeOut)
        var This = $(this);
        timeOut = setTimeout(function () {
            This.find('.sidebox').css({
                backgroundColor: '#ae1c1c',
                opacity: 1
            }).stop().animate({width: '124px'}, 200, 'swing')
        }, 100)
    }, function () {
        clearTimeout(timeOut)
        $(this).find('.sidebox').css({backgroundColor: '#000', opacity: 0.8}).stop().animate({width: '54px'}, 200)
    })
    $('.sidetop').click(function () {
        $('html ,body').animate({scrollTop: 0}, 500)
    })
})()