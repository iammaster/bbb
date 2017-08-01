var oVideo = document.getElementsByTagName("video")[0];
var currTime = document.getElementById("currentTime");
var allTime = document.getElementById("allTime");
var bottom = document.getElementById("bottom");
var pCover = document.getElementById("pCover");
var pSlider = document.getElementById("pSlider");
var playing = document.getElementById("playing");
var stop = document.getElementById("stop");
var fullScreen = document.getElementById("fullScreen");
var vProgress =document.getElementById("vProgress");
var vSlider = document.getElementById("vSlider");
var vCover = document.getElementById("vCover");
var icon = document.getElementById("icon");
//var playName = document.getElementsByTagName("h2")[0];
var list = document.getElementById("list");
var oUl = list.getElementsByTagName("ul")[0];
var oLi = oUl.getElementsByTagName("li");
var listIcon = document.getElementById("tubiao");
var up = document.getElementById("up");
var down = document.getElementById("down");
var mark1 = false;
var mark2 = false;
//列表栏目切换
//playName.innerHTML = "正在播放："+oLi[0].innerHTML;
for(var i=0;i<oLi.length;i++){
    oLi[i].index = i;
    oLi[i].onclick = function(){
        for(var j=0;j<oLi.length;j++){
            oLi[j].className="";
        }
        this.className = "on";
        oVideo.src = "video/"+this.innerHTML+".mp4";
        //playName.innerHTML = "正在播放："+this.innerHTML;
        stopPlay();
        oVideo.play();
        mark1 = true;
        playing.className = "pauseOnOff pause";
    }
}
//点击切换上下栏目
up.onclick = function(){
    for(var i=0;i<oLi.length;i++){
        oLi[i].index = i;
        if(oLi[i].className){
            var k;
            i==0?k=oLi.length-1:k=i-1;
            oVideo.src ="video/"+oLi[k%(oLi.length)].innerHTML+".mp4";
            //playName.innerHTML = "正在播放："+oLi[k%(oLi.length)].innerHTML;
            for(var j=0;j<oLi.length;j++){
                oLi[j].className="";
            }
            oLi[k%(oLi.length)].className = "on";
            stopPlay();
            oVideo.play();
            mark1 = true;
            playing.className = "pauseOnOff pause";
            break;
        }
    }
}
down.onclick = function(){
    for(var i=0;i<oLi.length;i++){
        oLi[i].index = i;
        if(oLi[i].className){
            oVideo.src = "video/"+oLi[(i+1)%(oLi.length)].innerHTML+".mp4";
            //playName.innerHTML = "正在播放："+oLi[(i+1)%oLi.length].innerHTML;
            for(var j=0;j<oLi.length;j++){
                oLi[j].className="";
            }
            oLi[(i+1)%oLi.length].className = "on";
            stopPlay();
            //oVideo.load();
            oVideo.play();
            mark1 = true;
            playing.className = "pauseOnOff pause";
            break;
        }
    }
}
//栏目页伸缩
listIcon.onmouseover = function(){
    list.style.right = "0px";
}
list.onmouseleave = function(){
    this.style.right = "-195px";
}
//视频播放暂停按钮
playing.onclick = function playPause(){
    if(!mark1){
        oVideo.play();
        playing.className = "pauseOnOff pause";
        nowTime();
    }else{
        oVideo.pause();
        playing.className = "pauseOnOff";
    }
    mark1 = !mark1;
    //获取视频完整时间
    allTime.innerHTML = numFormat(oVideo.duration);
}
//视频停止按钮
stop.onclick = stopPlay;
function stopPlay(){
    oVideo.currentTime = 0;
    oVideo.pause();
    playing.className = "pauseOnOff";
    pCover.style.width = "0px";
    pSlider.style.left = "0px";
    if(mark1){
        mark1 = false;
    }
}
//视频全屏播放

fullScreen.onclick = function(){
    oVideo.background = "#000";
    if( oVideo.mozRequestFullScreen){oVideo.mozRequestFullScreen();}
    else if(oVideo.requestFullscreen){oVideo.requestFullscreen();}
    else if(oVideo.msRequestFullscreen){oVideo.msRequestFullscreen();}
    else if(oVideo.oRequestFullscreen){oVideo.oRequestFullscreen();}
    else if(oVideo.webkitRequestFullScreen){oVideo.webkitRequestFullScreen();}
}
/*视频进度条*/
//监听播放进度，获取时间
oVideo.addEventListener("timeupdate",function(){
    nowTime();
});
//监听媒体长度改变
oVideo.addEventListener("durationchange",function(){
    allTime.innerHTML = numFormat(oVideo.duration);
});
function nowTime(){
    currTime.innerHTML = numFormat(oVideo.currentTime);
    var n = oVideo.currentTime/oVideo.duration;
    pSlider.style.left = n*(bottom.offsetWidth - pSlider.offsetWidth)+"px";
    pCover.style.width = 20 + n*(bottom.offsetWidth - pSlider.offsetWidth)+"px";
}
function numFormat(time){
    time = parseInt(time);
    var h = addZero(Math.floor(time/3600));
    var  m = addZero(Math.floor((time%3600)/60));
    var s = addZero(Math.floor(time%60));
    return h+":"+m+":"+s;
}
//增加0
function addZero(num){
    if(num<10){
        return "0"+num;
    }else{
        return ''+num;
    }
}
pSlider.onmousedown = function(ev){
    var ev = ev || window.event;
    var x = ev.clientX - this.offsetLeft;
    document.onmousemove = function(ev){
        var newLeft = ev.clientX - x;
        if(newLeft<=0){
            newLeft = 0;
        }else if(newLeft>=bottom.offsetWidth - pSlider.offsetWidth){
            newLeft = bottom.offsetWidth - pSlider.offsetWidth;
        }
        pSlider.style.left = newLeft + "px";
        pCover.style.width = (newLeft +20)+"px";
        var prop = newLeft /(bottom.offsetWidth - pSlider.offsetWidth);
        oVideo.currentTime = prop*(oVideo.duration);
        nowTime();
    }

    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
    }
}
icon.onclick = function(){
   /* if(mark2){
        vProgress.style.display = "none";
    }else{
        vProgress.style.display = "block";
    }
    mark2 = !mark2;*/
}
/*音量加减*/
vSlider.onmousedown = function(ev){
    var ev = ev||window.event;
    var x = ev.clientX - this.offsetLeft;
    document.onmousemove = function(ev){
        var newLeft = ev.clientX- x;
        if(newLeft<=0){
            newLeft = 0;
        }else if(newLeft>=vProgress.offsetWidth - vSlider.offsetWidth){
            newLeft = vProgress.offsetWidth - vSlider.offsetWidth;
        }
        vSlider.style.left = newLeft + "px";
        vCover.style.width =(newLeft +8)+"px";
        var prop = newLeft /(vProgress.offsetWidth - vSlider.offsetWidth);
        oVideo.volume =  prop;
        //静音改变音量图标
        if(!oVideo.volume){
            icon.style.backgroundImage="url(images/iconb.png)"
        }else{
            icon.style.backgroundImage="url(images/icona.png)"
        }
    }
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
    }
}
        