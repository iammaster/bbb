(function(){
    var arr = [];
    var $contain = $('.contain');
    var $shadow = $('.shadowcon');
    var length = $contain.length;
    var height = $contain.outerHeight(true);
    var maxH = $('#Tz_box').height();
    for (var i = 0; i < length; i++)arr[i] = i;
    init();
    function init() {
        $contain.each(function (i) {
            this.top = height * i;
            $(this).css({
                top: this.top + 'px'
            });
            $(this).data("index", arr[i]);
        })
        $shadow.each(function (i) {
            $(this).data("index", arr[i]);
        })
    }
    $contain.mousedown(function (e) {
        e = e || windwo.event;
        var eY = e.pageY;
        var This = this;
        var sT = $(this).position().top;
        $(this).addClass('down');
        var moveIndex;
        for (var i = 0; i < arr.length; i++) {
            if ($contain.eq(arr[i])[0] == $(this)[0]) {
                moveIndex = i;
                break;
            }
            ;
        }
        ;
        $(document).mousemove(function (e) {
            e = e || windwo.event;
            var nY = e.pageY;
            var top = sT + nY - eY;
            top = Math.min(maxH, top);
            top = Math.max(0, top)
            $(This).css({
                top: top + 'px'
            });
            var ThisT = top;
            var ThisB = top + height;
            for (var i = 0; i < arr.length; i++) {
                var $obj = $contain.eq(arr[i]);
                if ($obj[0] != $(This)[0]) {
                    var mT = $obj[0].top + height / 2;
                    if ((ThisB > mT && ThisT < mT)) {
                        var x = arr[moveIndex];
                        var t = $obj[0].top;
                        if (moveIndex < i) {
                            for (var j = i - 1; j >= moveIndex; j--) {
                                $contain.eq(arr[j + 1])[0].top = $contain.eq(arr[j])[0].top;
                                boxMove($contain.eq(arr[j + 1]));
                            };
                        } else {
                            for (var j = i; j < moveIndex; j++) {
                                $contain.eq(arr[j])[0].top = $contain.eq(arr[j + 1])[0].top;
                                boxMove($contain.eq(arr[j]));
                            };
                        };
                        arr.splice(moveIndex, 1);
                        arr.splice(i, 0, x);
                        $(This)[0].top = t;
                        moveIndex = i;
                    };
                };
            };
        }).mouseup(function () {
            $(This).stop().animate({
                top: $(This)[0].top + 'px',
            }).removeClass('down');
            $(this).off('mousemove');
            $(this).off('mouseup');
            $('.contain').each(function (i) {
                $(this).data("index", arr[i]);
                $shadow.eq(i).data("index", arr[i])
            })
            $shadow.each(function (i) {
                $shadow.eq(arr[i]).appendTo($("#Tz_shadowbox"))
            })
        });
        function boxMove($obj) {
            var t = $obj[0].top + 'px';
            $obj.stop().animate({
                top: t
            });
        };
    })
})()