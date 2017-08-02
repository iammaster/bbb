var oBar = document.getElementsByClassName("bar")[0];
var oScroll = document.getElementsByClassName("scroll")[0];
var oCon = document.getElementsByClassName("content")[0];
var oBox = document.getElementById("Tz_box");
var maxT = oScroll.offsetHeight - oBar.offsetHeight;
oBar.onmousedown = function(ev){
	var ev = ev || window.event;
	var y = ev.clientY - this.offsetTop;
	document.onmousemove = function(ev){
		var t = ev.clientY - y;
		if (t < 10)
		{
			t = 10;
		}else if( t > maxT-12){
			t = maxT-12;
		}
		oBar.style.top = t + "px";
		var scale = t/maxT;
		oCon.style.marginTop = 20-scale*(oCon.offsetHeight-oBox.clientHeight+30) + "px";
	}
	document.onmouseup = function(){
		document.onmousemove = null;
		document.onmouseup = null;
	}
	return false;
}