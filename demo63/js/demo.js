window.requestAnimFrame = ( function() {
	return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function( callback ) {
					window.setTimeout( callback, 1000 / 60 );
				};
})();
var can = document.getElementById("canvas");
var cxt = can.getContext("2d");
can.width = window.innerWidth;
can.height = window.innerHeight;
cxt.lineWidth = 0.3;
var dots = {
	n : 500,
	distance : 50,
	d_radius : 100,
	array : []
}
window.onresize = init;
function init(){
	w = can.width = window.innerWidth;
	h = can.height = window.innerHeight;
	dots.array.length = 0;
	createCircle();
}
var mousePosition = {
	x : 30*can.width/100,
	y : 30*can.height/100
}

function colorValue(min){
	return Math.floor(Math.random()*255 + min);
}
function createColorStyle(r,g,b){
	return "rgba("+r+","+g+","+b+", 1)";
}
function mixConnect(c1,r1,c2,r2){
	return (c1*r1+c2*r2)/(r1+r2);
};
function lineColor(dot1,dot2){
	var color1 = dot1.color,
		color2 = dot2.color;
	var r = mixConnect(color1.r,dot1.radius,color2.r,dot2.radius);
	var g = mixConnect(color1.g,dot1.radius,color2.g,dot2.radius);
	var b = mixConnect(color1.b,dot1.radius,color2.b,dot2.radius);
	return createColorStyle(Math.floor(r),Math.floor(g),Math.floor(b));
}
function Color(min){
	min = min || 0;
	this.r = colorValue(min);
	this.g = colorValue(min);
	this.b = colorValue(min);
	this.style = createColorStyle(this.r,this.g,this.b);
}
function Dot(){
	this.x = Math.random()*can.width;
	this.y = Math.random()*can.height;
	this.vx = -0.5 + Math.random();
	this.vy = -0.5 + Math.random();

	this.radius = Math.random()*5;
	this.color = new Color();
}
Dot.prototype.draw = function(){
	cxt.beginPath();
	cxt.fillStyle = this.color.style;
	cxt.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
	cxt.fill();
}
function createCircle(){
	for (var i=0;i<dots.n ;i++ )
	{
		dots.array.push(new Dot());
	}
}
function drawDots(){
	for (var i=0;i<dots.n ;i++ )
	{
		var dot = dots.array[i];
		dot.draw();
	}
}

function moveDots(){
	for (var i=0;i<dots.n ;i++ ){
		var dot = dots.array[i];
		if (dot.y < 0 || dot.y > can.height)
		{
			dot.vx = dot.vx;
			dot.vy = -dot.vy;
		}else if (dot.x < 0 || dot.x > can.width)
		{
			dot.vx = -dot.vx;
			dot.vy = dot.vy;
		}
		dot.x += dot.vx;
		dot.y += dot.vy;
	}
}
function connectDots(){
	for (var i=0;i<dots.n ; i++)
	{
		for ( var j=0;j<dots.n ; j++)
		{
			iDot = dots.array[i];
			jDot = dots.array[j];
			if ((iDot.x - jDot.x) < dots.distance && (iDot.y - jDot.y) < dots.distance && (iDot.x - jDot.x) > -dots.distance && (iDot.y - jDot.y) > -dots.distance)
			{
				if ((iDot.x - mousePosition.x) < dots.d_radius && (iDot.y - mousePosition.y) < dots.d_radius && (iDot.x - mousePosition.x) > -dots.d_radius && (iDot.y - mousePosition.y) > -dots.d_radius)
				{
					cxt.beginPath();
					cxt.strokeStyle = lineColor(iDot,jDot);
					cxt.moveTo(iDot.x,iDot.y);
					cxt.lineTo(jDot.x,jDot.y);
					cxt.closePath();
					cxt.stroke();
				}
				
			}
		}
	}
}
createCircle();
function animateDots(){
	cxt.clearRect(0,0,can.width,can.height);
	moveDots();
	connectDots()
	drawDots();
	requestAnimFrame(animateDots);
}
animateDots();

can.onmousemove = function(ev){
	var ev = ev || window.event;
	mousePosition.x = ev.pageX;
	mousePosition.y = ev.pageY;
}
can.onmouseout = function(){
	mousePosition.x = can.width/2;
	mousePosition.y = can.height/2;
}