//潭州专用动态颜色背景插件
graBg(230, 180, 0.9);
(function () {
    var $face = $('.face');
    var $faceBox = $('.facebox');
    var $Tz_showBox = $('#Tz_showbox');
    var $txt = $('#text');
    var $btn = $('a.btn');
    var faceTxt = '';
    var content = '';
    init();
    var $img = $('.facebox ul li');
    //点击打开表情
    $face.click(function (e) {
        e=e||window.event;
        e.stopPropagation();
        pars('')
        $faceBox.slideToggle(200);
    });
    //添加表情
    $img.click(function (e) {
        e=e||window.event;
        e.stopPropagation();
        $txt.focus();
        var imgs = '  <img src="images/' + ($(this).index()+1) + '.gif" />'
        pars(imgs)

    })
    //鼠标离开表情框,表情框收缩
    $faceBox.mouseleave(function () {
        $faceBox.slideUp(100);
    });
    //点击发表
    $btn.click(function () {
        content = $txt.html();
        if ($txt.html().length != 0 && $txt.html() != '') {
            $Tz_showBox.append(' <div class="showcont"> <div class="title"><img src="images/toux.jpg" width="40" height="40" alt="">樱草爸爸的呼唤</div> <div class="edit">' + content + '<span>' + '------来自欧皇的嘲讽' + '</span>' + '</div> </div>')
            $Tz_showBox.slideDown();
            $txt.html('')
        } else {
            $Tz_showBox.hide();
        }
    });
    //初始化
    function init() {
        for (i = 0; i < 60; i++) {  //通过循环创建60个表情
            faceTxt += '<li><img src="images/' + (i + 1) + '.gif" /></li>';
        };
        $txt.focus()
        $('.facebox ul').append(faceTxt);
        $faceBox.hide();
    };
    function pars(str) {
        //execCommand有兼容性问题 在这里我们就不适用
        //ie9以下使用document.selection,其他浏览器是window.getSelection() 获取页面中选中的信息
        var selection = window.getSelection ? window.getSelection() : document.selection;
        //创建range对象, ie是createRange  火狐是getRangeAt(0)
        var range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
        //如果ie9一下的浏览器
        if (!window.getSelection) {
            //让text获得焦点
            $txt.focus();
            //重新校对焦点选取
            var selection = window.getSelection ? window.getSelection() : document.selection;
            var range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
            //textRange.pasteHTML(oHTML);textRange:被选择内容的引用．oHTML:新的html内容．用来替换被选择的．
            range.pasteHTML(str);
            //范围折叠 :collapse() 参数 true 将范围结束点设置和初始点一样 false 将范围初始点设置和结束点一样
            range.collapse(true);
            //select() 选择范围中的文本
            range.select();
        } else { //如果是ie9以上以及其他浏览器的话
            $txt.focus();
            range.collapse(true);
            //createContextualFragment预分析string以方便之后插入dom节点之中
            var hasRs = range.createContextualFragment(str);
            //lastChild 最后一个节点 在多次分析str时 保护始终选取最新表情
            var hasR = hasRs.lastChild;
            //如果我们用来替换的节点队列中有换行符  那么我们清除换行符'br'的节点 previousSibling是当前节点的上一个同级节点 nodeName节点名称
            while (hasR && hasR.nodeName.toLowerCase() == 'br' && hasR.previousSibling && hasR.previousSibling.nodeName.toLowerCase() == 'br') {
                循环清理所有的br节点
                var clearR = hasR;
                hasR = hasR.previousSibling;
                hasRs.removeChild(clearR)
            };
            //insertNode 在range选定范围的起始位置 插入节点
            range.insertNode(hasRs);
            //如果存在表情节点 模拟collapse并进行表情插入 进行范围初始位置和结束位置重叠 保证光标范围始终为1
            if (hasR) {
                range.setEndAfter(hasR);
                range.setStartAfter(hasR)
            };
            //清空鼠标所选区域的内容
            selection.removeAllRanges();
            //重新整理range队列
            selection.addRange(range);
        };
    };
    //光标置于末尾
    function moveEnd(obj) {
        obj.focus();
        var len = obj.value.length;
        if (document.selection) {
            var sel = obj.createTextRange();
            sel.moveStart('character', len);
            sel.collapse();
            sel.select();
        } else if (typeof obj.selectionStart == 'number'
            && typeof obj.selectionEnd == 'number') {
            obj.selectionStart = obj.selectionEnd = len;
        }
    }
})()
