var $li=$('#Tz_wrap>.side>.menu li');
var $ribbon=$('.ribbon_warp');
$li.hover(function(){
    $(this).find('a').addClass('on');
    $ribbon.css({
        top:$(this).index()*$(this).outerHeight(true)+8+'px',
    });
},function(){
    $(this).find('a').removeClass('on');
    $ribbon.css({
        top:'8px'
    });
});
