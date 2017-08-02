
$(document).ready(function(){
    var $Tz_wrap=$('#Tz_wrap');
    var wW=$(window).width();
    var width=$Tz_wrap.find('li').outerWidth(true);
    var num=Math.floor(wW/width);
    $Tz_wrap.width(num*width);
    $(window).resize(function(){
        wW=$(window).width();
        num=Math.floor(wW/width);
        $Tz_wrap.width(num*width);
    })
})