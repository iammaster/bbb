var can = document.getElementById('canvas');
var cxt = can.getContext('2d');

var w = can.width = window.innerWidth;
var h = can.height = window.innerHeight;

var num = 200; 
var data = []; 
var move = {};
init();
window.onresize = init;
 function init(){
	data = [];
	move = {};
	w = can.width = window.innerWidth;
	h = can.height = window.innerHeight;
	for ( var i=0;i<num;i++ )
	{
		data[i] = {x:Math.random()*w , y:Math.random()*h , cX:Math.random()*0.6-0.3 , cY:Math.random()*0.6-0.3 };
		Cricle(data[i].x,data[i].y);
	};
 };
document.onmousemove = function(e){
	move.x = e.clientX;
	move.y = e.clientY;
};
!function draw(){
	cxt.clearRect(0,0,w,h);

	for ( var i=0;i<num;i++ )
	{
		data[i].x += data[i].cX;
		data[i].y += data[i].cY;
		if ( data[i].x > w || data[i].x < 0 )data[i].cX = -data[i].cX;
		if ( data[i].y > h || data[i].y < 0 )data[i].cY = -data[i].cY;
		Cricle(data[i].x,data[i].y);
		
		for ( var j=i+1;j<num;j++ )
		{
			if ( (data[i].x-data[j].x)*(data[i].x-data[j].x) + (data[i].y-data[j].y)*(data[i].y-data[j].y) <= 50*50 )
			{
				line(data[i].x , data[i].y , data[j].x , data[j].y , false);
			};
		};
		if ( move.x )
		{
			if ( (data[i].x-move.x)*(data[i].x-move.x) + (data[i].y-move.y)*(data[i].y-move.y) <= 100*100 )
			{
				line(data[i].x , data[i].y , move.x , move.y , true);
			};
		};
	};
	window.requestAnimationFrame( draw );
}();

function line(x1,y1,x2,y2,isMove){
	cxt.save();
	var lin = cxt.createLinearGradient(x1,y1,x2,y2);
	if ( !isMove )
	{
		lin.addColorStop(0,'#fff');
		lin.addColorStop(1,'#333');
	}else{
		lin.addColorStop(0,'#fff');
		lin.addColorStop(1,'#0bd2dd');
	}
	cxt.strokeStyle = lin;
	cxt.beginPath();
	cxt.moveTo(x1,y1);
	cxt.lineTo(x2,y2);
	cxt.stroke();
	cxt.restore();
};

function Cricle(x,y){
	cxt.save();
	cxt.fillStyle = 'pink';
	cxt.beginPath();
	cxt.arc(x,y,0.5,0,2*Math.PI,true);
	cxt.closePath();
	cxt.fill();
	cxt.restore();
};