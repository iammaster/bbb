(function(){
    var $firstLi = $('#Tz_banner .b_nav .firstLi');
    var $info = $('#Tz_banner .b_nav .firstLi .info');
    $info.each(function(){
        var $li = $(this).find('li');
        var length = $li.length;
        var width = $li.width();
        var height = $li.height();
        var col = Math.ceil( length / 6 );
        $(this).width( col*width );
        $li.each(function(i){
            var x = Math.floor(i / 6);
            var y = i % 6;
            $(this).css({
                left : x*width + 'px',
                top : y*height + 'px'
            });
        });
    });
    $firstLi.hover(function(){
        $(this).find('.info').show();
    },function(){
        $(this).find('.info').hide();
    });
})();