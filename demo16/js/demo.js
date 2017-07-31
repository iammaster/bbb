
window.onload = function () {
    var oTzBox = document.getElementById('Tz_box');
    var aImg = oTzBox.getElementsByTagName('img');
    document.onmousemove = function (ev) {//鼠标移入事件
        var ev = ev || window.event;//调整event对象兼容性
        for (var i = 0; i < aImg.length; i++) {//遍历img
            var x = aImg[i].offsetLeft + aImg[i].offsetWidth / 2; //对象相对左边距离+对象的课件宽度/2
            var y = aImg[i].offsetTop + aImg[i].offsetHeight / 2 + oTzBox.offsetTop; //对象相对顶部距离+对象课件高度/2+盒子相对顶部高度
            /*鼠标位置-对象中心点位置*/
            var a = ev.clientX - x;
            var b = ev.clientY - y;
            var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));// 三角函数 c= (a平方+b平方)开根
            var scale = 1 - c / 300; //控制scale大小
            scale=(scale<0.5)?0.5:scale; //scale最小不能小于0.5 保证尺寸最小64px
            aImg[i].style.width = scale * 128 + 'px'; //鼠标里的越近就图标就越大 最大128px
            aImg[i].style.height = scale * 128 + 'px';
        }
    };
};
