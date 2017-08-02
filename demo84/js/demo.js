(function () {
    var iLeft = 620, iTop = 420, pLeft = 15, pTop = 15, $item = $('.item'), $Tz_wrap = $('#Tz_wrap'), $box = $('.box'), $path, nowTime = 0;
    init();
    move();
    /*初始化布局 1.item以及其下面的div 2.创建paths,为其下面的path 和path下面的a 进行布局*/
    function init(){
        //为item以及其中的div进行定位
        $item.each(function () {
            $(this).css({left: $(this).index() * iLeft + 'px'});
        }).find('div').each(function () {
            $(this).css({top: $(this).index() * iTop + 'px'})
        });
        //创建paths
        $Tz_wrap.append($('<div></div>').addClass('paths'));
        //获取paths为$path
        $path = $Tz_wrap.find('.paths');
        //遍历item根据item行布局生成path0 1 2 3
        $item.each(function (i) {
            $path.append($('<div></div>').addClass('path' + i).css({
                left: pLeft * i + 'px'
            }));
            //根据每个item下面的div列布局生成 a标签 rel为0 1 2 3... ,并且插入到各自的path0 1 2 3中
            $(this).find('div').each(function (j) {
                $('<a></a>').attr({href: '#', rel: j}).css({
                    top: pTop * j + 'px'
                }).appendTo($path.find('.path' + i));
            });
        });
        $path.find('a').eq(0).addClass('active');
    };
    //鼠标点击移动和键盘上下左右移动观看图片;
    function move() {
        $path.find('a').click(function () {
            $(this).addClass('active').siblings('a').removeClass('active').parent('div').siblings('div').find('a').removeClass('active');
            var row = $(this).attr('rel');
            var line = $(this).parent('div').attr('class').split('path')[1];
            // alert(row+'\t'+line);
            var top = row * iTop;
            var left = line * iLeft;
            boxMove(-top, -left);
        });
        $(document).keyup(function (e) {
            if ((new Date() - nowTime) > 500) {
                nowTime = new Date();
                e = e || window.event;
                var boxL = parseInt($box.css('left'));
                var boxT = parseInt($box.css('top'))
                var row, line, lineL, rowL;
                lineL = $path.find('div').length;
                $path.find('div').length;
                $path.find('div').each(function (i) {
                    $path.find('div').eq(i).find('a').each(function (j) {
                        if (this.className == 'active') {
                            row = j, line = i, rowL = $path.find('div').eq(i).find('a').length;
                        }
                        ;
                    });
                });
                switch (e.keyCode) {
                    case 37:
                        if (line > 0) {
                            boxMove(0, (boxL + iLeft));
                            active(line - 1, 0);
                        }
                        break;
                    case 38:
                        if (row > 0) {
                            boxMove(( boxT + iTop));
                            active(line, row - 1);
                        }
                        break;
                    case 39:
                        if (line < lineL - 1) {
                            boxMove(0, (boxL - iLeft));
                            active(line + 1, 0);
                        }
                        break;
                    case 40:
                        if (row < rowL - 1) {
                            boxMove((boxT - iTop))
                            active(line, row + 1);
                        }
                        break;
                    default:
                        return;
                };
            };
        });
    };
    //重定位设置path缩略图关键点;
    function active(i, j) {
        $path.find('div').eq(i).find('a').eq(j).addClass('active').siblings('a').removeClass('active').parent('div').siblings('div').find('a').removeClass('active');
    };
    //盒子$box的 top 和 left 移动
    function boxMove(top, left) {
        $box.stop().animate({
            top: top + 'px',
            left: left + 'px',
        }, 500);
    };
})();