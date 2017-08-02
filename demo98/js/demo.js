(function(){
    $(function(){
        $(".bodys p").not(":first").hide();  //hide()隐藏
        $("#Tz_searchbox ul li").mouseover(function(){
            var _index=$(this).index();  //序列号 下标 索引  从零开始
            /* 1 （0）  2（1）  3（2）*/
            //document.title=_index;
            if(_index == 0){
                $(this).addClass("style1");
                $("li").eq(1).removeClass("style2");
                $("li").eq(2).removeClass("style3");
            }
            if(_index == 1){
                $(this).addClass("style2");
                $("li").eq(0).removeClass("style1");
                $("li").eq(2).removeClass("style3");
            }
            if(_index == 2){
                $(this).addClass("style3");
                $("li").eq(0).removeClass("style1");
                $("li").eq(1).removeClass("style2");
            }
            $(".bodys p").eq(_index).show().siblings().hide();//siblings()同辈  兄弟
        });
    });
})()