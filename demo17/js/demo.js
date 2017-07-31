$(document).ready(function() {
    $.fn.fullpage({
        //背景四个页面的背景颜色
        slidesColor: ['#FEDA89', '#DE4F50', '#904A68', '#68C39F'],
        //anchors: ['page1', 'page2', 'page3', 'page4'],
        //是否有导航条
        navigation: true,
        //是否使用css3效果
        css3:true,
        //回调函数处理
        afterLoad:function(anchorLink, index){
            if(index==2){
                /*对象 动画模式 运动类型*/
                $(".cloud").css("animation-play-state","running");
                $(".nail").css("animation-play-state","running");
            }
            if(index==3){
                $(".shop").css("animation-play-state","running");
                $(".fun").css("animation-play-state","running");
            }
            if(index==4){
                $(".gift1").css("animation-play-state","running");
                $(".gift2").css("animation-play-state","running");
                $(".ballon").css("animation-play-state","running");
                $(".phone1").css("animation-play-state","running");
            }
        }
    });
});