$(function(){

    var $ul = $('#Tz_wrap ul');
    var $Tz_wrap = $('#Tz_wrap');
    var $btn = $('#btn input');
    var $li , $img;
    var onOff = true;
    var index = 0;
    var liTime = 0;
    var btnTime = 0;
    init();
    $li = $('#Tz_wrap ul li');
    $img = $('#Tz_wrap ul li img');
    liPosition();
    liRot();
    //改变窗口大小的时候自适应屏幕
    $(window).resize(liPosition);
    /*点击菜单图片列表*/
    $li.click(function(){
        if ( new Date() - liTime > 2000 )
        {
            liTime = new Date();
            if ( onOff )
            {
                index = $(this).index();
                $img.css({
                    'transform' : 'scale(1)',
                    'borderRadius':'0px'
                }).parent('li').css({
                    'borderRadius':'0px'
                });
                setTimeout(function(){
                    liClickP();
                    $img.fadeOut(1000);
                    $li.css('backgroundImage' , 'url(images/big/'+(index+1)+'.jpg)');
                },1000);
                $(window).off('resize').resize(liClickP);
                $('#btn').show();
                onOff = !onOff;
            }
            else
            {
                $img.fadeIn(1000,function(){
                    $li.css({
                        'backgroundImage':'',
                        'borderRadius':'10px'
                    });
                    $(this).css({
                        'transform' : 'scale(0.9)',
                        'borderRadius':'10px'
                    });
                });
                liPosition();
                liRot();
                $(window).off('resize').resize(liPosition);
                $('#btn').hide();
                onOff = !onOff;
            }
        }
    });
    /*点击左右按钮切换图片*/
    $btn.click(function(){
        if ( new Date() - btnTime > 800 )
        {
            btnTime = new Date();
            var i = $(this).index();
            if ( i )
            {
                index ++;
                index %= $li.length;
            }
            else
            {
                index--;
                if(index==0)index=$li.length-1;
            }
            liBackground();
        }
    });
    /*初始化布局*/
    function init(){
        for (var i=0;i<24;i++ )
        {
            var $li = $('<li><img src="images/'+(i+1)+'.jpg" /></li>');
            $ul.append( $li );
        }
    }

    function liPosition(){
        var Tz_wrapW = $Tz_wrap.width();
        var Tz_wrapH = $Tz_wrap.height();
        var m = ( Tz_wrapW - 6*125 )/5;
        var n = ( Tz_wrapH - 4*125 )/3;
        $li.each(function(i){
            var iX = i % 6;
            var iY = parseInt( i / 6 );
            $(this).css({
                left : m*iX + iX*125 + 'px',
                top : n*iY + iY*125 + 'px',
                backgroundPosition : -iX*125 +'px '+ (-iY*125) +'px'
            });
        });
    }

    function liClickP(){
        var Tz_wrapW = $Tz_wrap.width();
        var Tz_wrapH = $Tz_wrap.height();
        var l = (Tz_wrapW - 750)/2;
        var t = (Tz_wrapH - 500)/2;
        $li.each(function(i){
            var iX = i % 6;
            var iY = parseInt( i / 6 );
            $(this).css({
                left : l + iX*125 + 'px',
                top : t + iY*125 + 'px',
                transition : '1s transform , 1s left , 1s top',
                transform : 'rotate(0deg)'
            });
        });
    }

    function liRot(){
        $li.each(function(){
            var r = (Math.random()-0.5)*60;
            $(this).css('transform' , 'rotate('+r+'deg)');
        });
    }

    function liBackground(){
        var arr = [];
        for ( var i=0;i<24;i++ )
        {
            arr[i] = i;
        }
        var timer = setInterval(function(){
            var r = Math.floor( Math.random()*arr.length );
            $li.eq(arr[r]).css('backgroundImage' , 'url(images/big/'+(index+1)+'.jpg)');

            arr.splice( r , 1 );

            if ( !arr.length )
            {
                clearInterval( timer );
            }
        },30);
    }
});