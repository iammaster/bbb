(function () {
    //声明变量  sw 是最大宽度 sh是最大高度 num是图片数量
    var $wrap = $('#Tz_wrap'), sw = 960, sh = 500, num = 40;
    //先定义showBox 后面会动态创建
    var $showBox;
    //banner衍生万物
    var index = 0;
    //循环创建num个div里面有img img的属性是...然后添加到$wrap
    for (var i = 0; i < num; i++) {
        $wrap.append($('<div></div>'));
        $('<img>').attr({
            'src': 'images/' + (i + 1) + '.jpg',
            'width': 100,
            "height": 100
        }).appendTo($wrap.find('div').eq(i));
    }
    //当图片加载完成之后
    $('img').ready(function () {
        //让#Tz_wrap 居中 用窗口高度-wrap的高度/2
        var bH = $('#Tz_wrap').height();
        var wH = $(document).height();
        if (wH > bH)$wrap.css({marginTop: (wH - bH) / 2 + 'px'});
        // 点击缩略图触发showBox
        $wrap.find('div').click(function () {
            //存储当前点击的div的index()
            index = $(this).index();
            showBox(index);
        });
    });
    function showBox(index) {
        //先删除.showbox
        $('.showbox').remove();
        //创建showbox div
        $('<div></div>').attr({'class': 'showbox'}).appendTo($('body'));
        //向showbox中添加 x(关闭符号) l(左按钮) r(右按钮)
        $('<span class="exit">X</span><span class="left">&lt;</span><span class="right">&gt;</span>').appendTo($('.showbox'));
        //生成完毕之后重新获取一下 showbox
        $showBox = $('.showbox');
        //获取对应的index的ming的src
        var src = $wrap.find('div').eq(index).find('img').attr('src');
        //以获取到的src创建 img标签并且添加到showbox中
        $('<img>').attr({'src': src}).appendTo($showBox);
        //等img加载完成之后
        $showBox.find('img').eq(0).ready(function () {
            //显示showbox
            $showBox.fadeIn(300)
            //获取img的宽度和高度
            var picW = $showBox.find('img').eq(0).width();
            var picH = $showBox.find('img').eq(0).height();
            var width,height,marginLeft,marginTop;
            //进行等比例缩放,如果图片宽度大于高度 那么图片最大宽度就是我们设置的宽度 高度根据等比例缩放,如果高度大于宽度 就反之
            if (picW >= picH) {
                //宽度=我们设定的宽度
                width = sw;
                //高度等于 高度/(设定宽度和原宽度的比例)
                height = picH / (picW / sw);
                //marginLeft和Top用来计算showBox的居中margin数值
                marginLeft = -((sw / 2) + 18);
                marginTop = -((height / 2) + 18);
            } else {
                height = sh, width = picW / (picH / sh), marginLeft = -((width / 2) + 18), marginTop = -((sh / 2) + 18);
            }
            //对img的宽高进行重新设置,并且根据获取的宽高将showbox定位到屏幕中间 left:50% top:50% marginTop:-height/2 marginLeft: -width/2
            $showBox.find('img').eq(0).css({
                'width': width + 'px',
                'height': height + 'px'
            }).parent('.showbox').css({
                'marginLeft': marginLeft + 'px',
                'marginTop': marginTop + 'px'
            })
            //对 x 关闭按钮的位置进行重写,如果图片高度高于页面高度,就让x 始终定位于页面之内
            if (height > $(document).height()) {
                $showBox.find('.exit').css({
                    top: (height - $(document).height() - 30) + 'px',
                })
            }
            //点击 x 关闭 隐藏showbox之后清除掉showbox
            $showBox.find('.exit').click(function () {
                $showBox.fadeOut(300, function () {
                    $showBox.remove();
                });
            });
            //左按钮 事件 将index--之后 调用自身  跟banner一个样
            $showBox.find('.left').click(function () {
                index--;
                index = (index) < 0 ? (num - 1) : index;
                showBox(index);
            });
            //右按钮 事件 将index++之后 调用自身  跟banner一个样
            $showBox.find('.right').click(function () {
                index++;
                index %= num;
                showBox(index);
            });
        });
    };
})()
