$(function(){
    var $btn=$('.btn a');
    var $li=$('#Tz_wrap ul li');
    var $img=$('#Tz_wrap ul li img');
    var smallW=237;
    var middleW=485;
    var bigW=980;
    $btn.on('click',function(){
        $(this).addClass('on').siblings().removeClass('on');
        switch($(this).index()){
            case 0:
                $(this).click(changeSize(smallW))
                break;
            case 1:
                $(this).click(changeSize(middleW))
                break;
            case 2:
                $(this).click(changeSize(bigW))
                break;
        }
    });
    function changeSize(w){
        $li.each(function(){$(this).stop().animate({width:w+'px', height:w/1.25+'px'},700);});
        $img.each(function(){$(this).stop().animate({width:w+'px', height:w/1.25+'px'},700);});
    }
});