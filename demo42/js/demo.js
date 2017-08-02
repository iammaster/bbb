var box=document.getElementById('progress');
var oP=document.getElementById('progress').getElementsByTagName('p')[0];
var num=100;
move(100);
function move(num) {
    clearInterval(oP.timer);
    oP.timer = setInterval(function () {
        if (parseInt(oP.innerHTML) < num) {
            var wW=window.innerWidth/100;
            var s = parseInt(oP.innerHTML) + 1;
            var w = wW * s;
            oP.innerHTML = s + '%';
            oP.style.width = w + 'px';
            oP.style.marginLeft=-(w/2)+'px';
        }else {
            clearInterval( oP.timer );
            if(num==100){
             var $css = $("#css")
             var $pMove=$('.pMove');
             var $box=$(box);
             var $op=$(oP);
                $op.stop().animate({
                    opacity:0
                },200,function(){
                    $box.animate({
                       height:'0px'
                    },200,function(){
                        $css.remove();
                        $pMove.remove();
                        $box.remove();
                        $op.remove();
                    });
                });
            };
        };
    }, 20);
}