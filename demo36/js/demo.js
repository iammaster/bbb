$(function(){

    var $Tz_top = $('#Tz_top');
    var $Tz_step = $('.main_step');
    var stepLength = $Tz_step.length;
    var $Tz_slide = $('#Tz_slide ul li');

    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();
        scrollTop>=150?$Tz_top.show():$Tz_top.hide();
        var index = 0;

        $Tz_step.each(function(i){
            var a = $(this).offset().top - $(document).scrollTop();
            if ( a < (42+32*i) )
            {
                $Tz_slide.eq(i).show();
                index = i+1;
            }
            else
            {
                $Tz_slide.eq(i).hide();
            }
        });
        $Tz_step.eq(index).addClass('on').parent().siblings().find('.main_step').removeClass('on');
        index && $Tz_slide.eq(index-1).addClass('on').siblings().removeClass('on');
    });

    $Tz_slide.click(function(){
        var index = $(this).index();
        $('body,html').animate({
            scrollTop : $Tz_step.eq(index).offset().top
        },500);
    }).hover(function(){
        $(this).addClass('hover');
    },function(){
        $(this).removeClass('hover');
    });

});