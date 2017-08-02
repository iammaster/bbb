var heart = document.getElementsByClassName("heart")[0];
for (var i=0;i<36 ;i++ )
{
	var oDiv = document.createElement("div");
	oDiv.className = "rib";
	oDiv.style.transform = "rotateY("+10*i+"deg) rotateZ(45deg) translateX(30px)";
	heart.appendChild(oDiv);
}