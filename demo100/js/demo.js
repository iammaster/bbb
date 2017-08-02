var $li = $('#Tz_wrap>ul>li:first').siblings().andSelf()
var lW = $li.eq(0).offset().left - 9;
var $maskBox = $('.maskbox');
var timer = null;
$li.hover(function () {
    clearTimeout(timer)
    $(this).children('.nodes').stop().slideDown()
    $maskBox.stop().animate({
        left: $(this).offset().left - lW + 'px'
    }, 300);
    if ($(this).children('.nodes').css('display')!= 'none')
        clearTimeout(timer)
}, function () {
    timer = setTimeout(function () {
        $maskBox.stop().animate({
            left: '10px'
        }, 500)
    }, 1250)
    $(this).children('.nodes').stop().slideUp()
})