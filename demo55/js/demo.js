/*setTimeout灵活运用*/
var $Tz_wrap=$('#Tz_wrap');
var timer=null;
$Tz_wrap.hover(function(){
    var This=$(this);
    timer=setTimeout(function(){
        This.find('a').each(function(i){
            var $this=$(this);
            setTimeout(function(){
                $this.stop().animate({right:'0px'},300)
            },i*50)
        })
    },300)

},function(){
    if(timer){ clearTimeout(timer);}
    $(this).find('a').each(function(i){
        var $this=$(this);
        setTimeout(function(){
            $this.stop().animate({right:'-100px'},300)
        },i*50)
    })
})