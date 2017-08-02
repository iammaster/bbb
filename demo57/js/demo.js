
(function(){
    var nums=0;
    $("#Tz_on").click(function(){
        $("#Tz_header").slideDown(300);
    });
    $(".p2").click(function(){
        $("#Tz_header").slideUp(300);
    })
    $(".bgcon img").hover(function(){
        nums=$(this).index();
        $("body").css({"background":"url('images/bg"+nums+".jpg') no-repeat center","background-size":"cover"})
    })
    $(".bgcon img").hover(function(){
        nums=$(this).index();
        $(".conyl").css({"background":"url('images/bg"+nums+".jpg') no-repeat center","background-size":"cover"});
    })
})()