 var num=22;
function init(){}
var $picUl=$('#pic ul');
var $tabUl=$('#mini ul');
var $mini=$('#mini');
var $tabLi=null;
var $picLi=null;
var kW=0;
var aW=0;
var maxW=-((num*144)-$mini.width());
var minW=0;
var $left=$('#left');
var $right=$('#right');
var index=0;
        for(var i=0;i<num;i++){
     var pImg = $('<li><a href=""><img src="images/'+(i+1)+'.jpg" alt="" width="870" height="540"></a></li>');
     var tImg=$('<li><img src="images/'+(i+1)+'.jpg" alt="" width="120" height="75"></li>')
        $picUl.append(pImg);
        $tabUl.append(tImg);
     };
$tabLi=$('#mini ul li');
$picLi=$('#pic ul li');
$tabLi.eq(0).addClass('mark');
$tabLi.click(function(){
        auto($(this));

    function auto(This){
        index=This.index();
        $tabLi.eq(index).addClass('mark').siblings().removeClass('mark');
        $picLi.eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();
        kW= -((index*144)-400);
        kW = Math.min( 0 , kW );
        kW = Math.max( maxW , kW );
        console.log(kW,maxW);
        $tabUl.stop().animate({
            marginLeft: kW+"px",
        });

    };
});
$right.click(function(){
    var mg= $tabUl.css('marginLeft');
    mg=parseInt(mg);
    if(mg>maxW+720){
        aW+=-720;
        $tabUl.stop().animate({
            marginLeft: aW+"px",
        });

    }else {
        $tabUl.stop().animate({
            marginLeft:  maxW+"px",
        });
    };
});
$left.click(function(){
    var mg= $tabUl.css('marginLeft');
    mg=parseInt(mg);
    if(mg<-720){
        aW+=720;
        $tabUl.stop().animate({
            marginLeft: aW+"px",
        });
    }else {
        $tabUl.stop().animate({
            marginLeft:  0+"px",
        });
    };
});

