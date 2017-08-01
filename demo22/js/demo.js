var oUl = document.getElementsByTagName("ul")[0];
var oBtn = document.getElementsByClassName("btn");
var oLi = document.getElementsByTagName("li");
var html = "";
var mark = true;
var remove = [];
for (var i = 1;i<=16 ;i++ )
{
	html += "<li style='background-image:url(images/"+i+".jpg)'></li>";
}
oUl.innerHTML = html;
position();
oBtn[1].addEventListener("touchend",fnClick,false);
oBtn[0].addEventListener("touchend",reMove,false);
function fnClick(){
	if (mark)
	{
		oBtn[1].innerHTML = "取消";
		remove.length = 0;
		for (var i=0;i<oLi.length ;i++ )
		{
			oLi[i].index = i;
			oLi[i].off = true;
			oLi[i].addEventListener("touchend",fnSec,false);
		}
	}else{
		oBtn[1].innerHTML = "选择";
		oBtn[0].style.display = "none";
		for (i = 0;i < oLi.length;i++  )
		{
			oLi[i].style.opacity = "1";
			oLi[i].removeEventListener("touchend",fnSec,false);
		}
		
	}
	mark = !mark;
}
//var off = true;
function fnSec(){
	if (this.off)
	{
		remove.push(this.index);
		this.style.opacity = "0.5";
		oBtn[0].style.display = "block";
		this.off = false;
	}else{
		for (var i=0;i<remove.length ;i++ )
		{
			if (remove[i]==this.index)
			{
				remove.splice(i,1);
				console.log(remove);
			}
			
		}
		this.style.opacity = "1";
		this.off = true;
	}
	
	//alert(remove);
}

function reMove(){
	//alert(remove);
	remove = remove.sort(function(a,b){
		return a-b;
	});
	while (remove.length)
	{
		oUl.removeChild(oLi[remove.pop()]);
	}
	mark = false;
	this.style.display = "none";
	position();
	fnClick();
}

function position(){
	for (var i=0;i<oLi.length ;i++ )
	{
		oLi[i].style.left = i%3 + "rem";
		oLi[i].style.top = Math.floor(i/3) + "rem";
	}
}
