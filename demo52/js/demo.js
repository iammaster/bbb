(function(){
    var i = 0;
    var timer;
    function Jeep1(){
        i++;
        if(i>35){
            i=1;
        }
        $("#Tz_box div.pic img").attr("src","images/"+i+".jpg");
    }
    function Jeep2(){
        i--;
        if(i<1){
            i=35;
        }
        $("#Tz_box div.pic img").attr("src","images/"+i+".jpg");
    }
    $("#Tz_box div.prev").hover(function(){
        timer=setInterval(Jeep2,100);
    },function(){
        clearInterval(timer);
    });
    $("#Tz_box div.next").hover(function(){
        timer=setInterval(Jeep1,100);
    },function(){
        clearInterval(timer);
    });
})()