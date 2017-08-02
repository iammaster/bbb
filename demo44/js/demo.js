var $li=$('#Tz_warp ul li');
var $bgBox=$('.bgbox');
$bgBox.eq(0).css('opacity','1');

$li.hover(function(){
   var index=$(this).index();
    $(this).stop().animate({
        width: '789px',
    },500).siblings().stop().animate({
        width:'100px',
    },500)
    $bgBox.eq(index).stop().animate({
        opacity:1
    },500).siblings('.bgbox').stop().animate({
        opacity:0
    },500)
})