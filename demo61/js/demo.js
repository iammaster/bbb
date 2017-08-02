var can = document.getElementById('can');
var cxt = can.getContext('2d');

var canW = can.width;
var canH = can.height;

var x = 0;
var startX = 0;
var range = 150;
var length = 200;
cxt.save();
cxt.strokeStyle = 'pink';
cxt.translate(0,200);
cxt.moveTo(0,0);
function draw(){
	x += 5;
	var y = Math.sin((x-startX)*2*Math.PI/length)*range;
	cxt.lineTo( x , y );
	cxt.stroke();
	if ( x >= canW )
	{
		startX += 9;
		x = 0;
		cxt.moveTo(x,Math.sin((x-startX)*2*Math.PI/length)*range);
	}
	window.requestAnimationFrame( draw );
};
window.requestAnimationFrame( draw );