(function(){
    var heart = document.getElementById("Tz_heart");//通过id名获取到heart元素
    var music = document.getElementById("Tz_music");
    var mark = true;//做一个标记来存储音乐的播放状态;
    music.autoplay = true; //自动播放
    heart.onclick = function(){
        if (mark)//若果判断成功就执行里面的代码，
        {
            music.play();//播放音乐
            mark = false;
        }else{//若果判断不成功就执行 else里面的代码
            music.pause(); //暂停音乐
            mark = true;
        }
    }
})()
//引用插件库
$(document).snowfall({
    flakeCount : 50
})