$("#Tz_Menu ul li").hover(function(){
    //鼠标滑上去
    $(this).addClass("hover"); //添加class="hover"
    var _top=$(this).position().top;//获取 li与 #Tz_Menu上面的距离
    var _height=$(this).find(".Nav").height()/3;
    if(_top>_height){ 
        $(this).find(".Nav").css("top","-"+_height+"px");
    }
},function(){
    //鼠标移开
    $(this).removeClass("hover")//移除 class="hover"
});