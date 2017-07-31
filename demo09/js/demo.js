$(document).ready(function(){
   var $simg =  $("#Tz_magnify .simg");
   var $mov = $("#Tz_magnify .simg .mov");
   var $bigImg = $("#Tz_magnify .bigimg");
   var $img = $("#Tz_magnify .bigimg img");
   $(".series .show ul.cont li").mouseover(function(){
      $(this).addClass("hover").siblings().removeClass("hover");
      var index = $(this).index();
      $simg.find("img").attr("src","images/big"+(index+1)+".jpg");
      $bigImg.find("img").attr("src","images/big"+(index+1)+".jpg");
   });

   $simg.hover(function(){
      $mov.show();
      $bigImg.show();
      $simg.mousemove(function(e){
      var x=e.clientX; var y=e.clientY;
      var _x=$simg.offset().left;
      var _y=$simg.offset().top;

      var _left=x -_x - $mov.width()/2;
      var _top=y -_y - $mov.height()/2;
      var simgMovW=$simg.width()-$mov.width();
      var simgMovH=$simg.height()-$mov.height();
      var bimgMovW=$img.width()-$bigImg.width();
      var bimgMovH=$img.height()-$bigImg.height();
      var ratioW=bimgMovW/simgMovW;var ratioH=bimgMovH/simgMovH;
      if(_left<0) {_left=0;}
   	  else if(_left>simgMovW)
   		 {_left=simgMovW;}
      if(_top<0) {_top=0;}
   	  else if(_top>simgMovH)
   		 {_top=simgMovH;}

   	  $mov.css({"left":_left,"top":_top});
   	  $img.css({"left":-_left*ratioW,"top":-_top*ratioH})
   	 })   
   },function(){
      $mov.hide();
      $bigImg.hide();
   })

})