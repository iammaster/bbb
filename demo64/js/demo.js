
var can = document.getElementById('can');
var cxt = can.getContext('2d');
can.width = window.screen.width;
can.height = window.screen.height;

var size = 14; 
var cols = can.width / size; 

var y = []; 
for (var i=0;i<cols;i++ )y[i] = 0;

(function draw(){
	cxt.fillStyle = 'rgba(0,0,0,.1)';
	cxt.fillRect(0,0,can.width,can.height);  

	cxt.fillStyle = '#33ff00';
	cxt.font = 'bold '+size+'px Microsoft yahei'; 

	for (var i=0;i<cols;i++ ) 
	{
		var s = Math.floor( Math.random()*10 )+''; 
		var textX = i*size; 
		var textY = y[i]; 
		cxt.fillText(s,textX,textY); 
		y[i] += size; 

		if ( y[i] >= can.height && Math.random() >= 0.9 )
		{
			y[i] = 0;
		};
	}
	window.requestAnimationFrame(draw);
})();