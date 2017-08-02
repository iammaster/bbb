//展开表情
$(".imgface").click(function(e){
    $(".face").slideDown();   //向下展开
    e.stopPropagation();   //阻止冒泡
});
$(document).click(function(){
    $(".face").slideUp();  //向上收缩
});
//点击表情
$(".face ul li").click(function(){
    var _img=$(this).find("img").clone();  //当前   img  find()   查找 找到
    $(".edit").append(_img);  //追加
});
$(".msg_but").click(function(){
    var _txt=$(".edit").html();  //获取当前编辑区域的内容（包括标签）
    if(_txt == ""){
        $(".edit").focus();  //获取焦点
    }
    else{
        $(".msgBox").append("<div class='msgInfo'><dl><dt><img src='images/tz.jpg' /></dt><dd>清心老师</dd></dl><div class='con'>"+_txt+"</div></div>");
        $(".edit").html("");
    }
});