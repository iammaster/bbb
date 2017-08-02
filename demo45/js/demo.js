$(document).ready(function(){
     (function(){
         var $window=$(window);
         var $Tz_nav=$('#Tz_nav');
         var $box=$('#box');
         var Tz_navTop=$Tz_nav.offset().top;
         $window.scroll(function(){
             var scrollTop=$window.scrollTop();
             if(scrollTop>Tz_navTop){
                 $Tz_nav.addClass('fixed');
                 $box.css('display','block');
             }else {
                 $Tz_nav.removeClass('fixed');
                 $box.css('display','none');
             }
         });
     })();
 })