var $li = $('#Tz_sidebar>ul>li>a')
$li.click(function () {
    $(this).parents('li').toggleClass('on').children('.menu').slideToggle(300).parents('li').siblings('li').removeClass('on').children('.menu').slideUp(300);
})