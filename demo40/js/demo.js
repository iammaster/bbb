/*滚动条定位*/
(function(){
    $(document).ready(function(){
        $(window).scrollTop(0);
        var $Tz_main=$('#Tz_main');
        var $slide=$('#slide');
        var slideH=$slide.height();
        var mOffsetTop=$Tz_main.offset().top;
        var minus=($(window).height()-slideH)/2;
        $slide.css('top',-600+mOffsetTop+'px');
        $(window).resize(function(){
            minus=($(window).height()-slideH)/2;
            $slide.css('top',top+'px')
        }).scroll(function(){
            var scrollTop=$(document).scrollTop();
            if(scrollTop>100){
                var top=scrollTop-mOffsetTop+minus;
                $slide.css('top',top+'px');
            }

        })
    });

})();

(function(){
    var $slideLi=$('#slide ul li.control');
    var $box=$('#Tz_main .conten');
    var $blue=$('#slide ul li.blue')
    var bHeight=$('#slide ul li').length-1;
    var hH=$('#Tz_header').height();
    $(window).scroll(function(){
        $box.each(function(i){
            var mH=$(this).height()+$(this).offset().top
            var sH=$(window).scrollTop();
            if(sH<hH){
                $slideLi.eq(0).addClass('on').siblings().removeClass('on');
            }
            else if(sH>$(this).offset().top&&sH<mH){
                $slideLi.eq(i+1).addClass('on').siblings().removeClass('on');
            };
        });
    });
    $slideLi.click(function(){
        var index=$(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        var boxTop=$box.eq(index).offset().top-$box.eq(index).height()/2;
        var scrollTop=$(document).scrollTop();
        //  move(boxTop)   //js方法---也很简单;
        // $(document).scrollTop(boxTop) document.documentElement || document.body  其他浏览器||谷歌浏览器 对浏览器主体判断差异
        //这是用jq的方法---很简单....我打算用js写,js在上面放着,还是jq好用...
        $('html,body').animate({
            scrollTop:boxTop
        },300);
        var blurH=(bHeight*32)-($(this).index()*32)
        $blue.css('display',"block").animate({
            'marginTop':-blurH+'px'
        },400,function(){
            $(this).hide()
        });

    });
})();
function move(bT){
    clearInterval(timer);
    var documents=document.documentElement || document.body
    var timer=setInterval(function () {
        var scrollTop=documents.scrollTop;
        var num=scrollTop-bT;
        documents.scrollTop+=num>0?-10:10;
        var nAbs=Math.abs(num);
        if(nAbs<=10){
            clearInterval(timer);
            documents.scrollTop=bT;
        };
    },3)
};