var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var radius = 7; 
var padd = 10; 
var u=0.65; 
var balls = []; 
var currentNums = []; 
var digit =
		[
			[
				[0,0,1,1,1,0,0],
				[0,1,1,0,1,1,0],
				[1,1,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[0,1,1,0,1,1,0],
				[0,0,1,1,1,0,0]
			],
			[
				[0,0,0,1,1,0,0],
				[0,1,1,1,1,0,0],
				[0,0,0,1,1,0,0],
				[0,0,0,1,1,0,0],
				[0,0,0,1,1,0,0],
				[0,0,0,1,1,0,0],
				[0,0,0,1,1,0,0],
				[0,0,0,1,1,0,0],
				[0,0,0,1,1,0,0],
				[1,1,1,1,1,1,1]
			],
			[
				[0,1,1,1,1,1,0],
				[1,1,0,0,0,1,1],
				[0,0,0,0,0,1,1],
				[0,0,0,0,1,1,0],
				[0,0,0,1,1,0,0],
				[0,0,1,1,0,0,0],
				[0,1,1,0,0,0,0],
				[1,1,0,0,0,0,0],
				[1,1,0,0,0,1,1],
				[1,1,1,1,1,1,1]
			],
			[
				[1,1,1,1,1,1,1],
				[0,0,0,0,0,1,1],
				[0,0,0,0,1,1,0],
				[0,0,0,1,1,0,0],
				[0,0,1,1,1,0,0],
				[0,0,0,0,1,1,0],
				[0,0,0,0,0,1,1],
				[0,0,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[0,1,1,1,1,1,0]
			],
			[
				[0,0,0,0,1,1,0],
				[0,0,0,1,1,1,0],
				[0,0,1,1,1,1,0],
				[0,1,1,0,1,1,0],
				[1,1,0,0,1,1,0],
				[1,1,1,1,1,1,1],
				[0,0,0,0,1,1,0],
				[0,0,0,0,1,1,0],
				[0,0,0,0,1,1,0],
				[0,0,0,1,1,1,1]
			],
			[
				[1,1,1,1,1,1,1],
				[1,1,0,0,0,0,0],
				[1,1,0,0,0,0,0],
				[1,1,1,1,1,1,0],
				[0,0,0,0,0,1,1],
				[0,0,0,0,0,1,1],
				[0,0,0,0,0,1,1],
				[0,0,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[0,1,1,1,1,1,0]
			],
			[
				[0,0,0,0,1,1,0],
				[0,0,1,1,0,0,0],
				[0,1,1,0,0,0,0],
				[1,1,0,0,0,0,0],
				[1,1,0,1,1,1,0],
				[1,1,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[0,1,1,1,1,1,0]
			],
			[
				[1,1,1,1,1,1,1],
				[1,1,0,0,0,1,1],
				[0,0,0,0,1,1,0],
				[0,0,0,0,1,1,0],
				[0,0,0,1,1,0,0],
				[0,0,0,1,1,0,0],
				[0,0,1,1,0,0,0],
				[0,0,1,1,0,0,0],
				[0,0,1,1,0,0,0],
				[0,0,1,1,0,0,0]
			],
			[
				[0,1,1,1,1,1,0],
				[1,1,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[0,1,1,1,1,1,0],
				[1,1,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[0,1,1,1,1,1,0]
			],
			[
				[0,1,1,1,1,1,0],
				[1,1,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[1,1,0,0,0,1,1],
				[0,1,1,1,0,1,1],
				[0,0,0,0,0,1,1],
				[0,0,0,0,0,1,1],
				[0,0,0,0,1,1,0],
				[0,0,0,1,1,0,0],
				[0,1,1,0,0,0,0]
			],
			[
				[0,0,0,0],
				[0,0,0,0],
				[0,1,1,0],
				[0,1,1,0],
				[0,0,0,0],
				[0,0,0,0],
				[0,1,1,0],
				[0,1,1,0],
				[0,0,0,0],
				[0,0,0,0]
			]
		];

function drawDatetime(cxt){
	var nums = [];

	context.fillStyle="#6633ff";
	var date = new Date();
	var offsetX = 70, offsetY = 30;
	var hours = date.getHours();
	var num1 = Math.floor(hours/10);
	var num2 = hours%10;
	nums.push({num: num1});
	nums.push({num: num2});
	nums.push({num: 10}); 
	var minutes = date.getMinutes();
	var num1 = Math.floor(minutes/10);
	var num2 = minutes%10;
	nums.push({num: num1});
	nums.push({num: num2});
	nums.push({num: 10}); 
	var seconds = date.getSeconds();
	var num1 = Math.floor(seconds/10);
	var num2 = seconds%10;
	nums.push({num: num1});
	nums.push({num: num2});

	for(var x = 0;x<nums.length;x++){
		nums[x].offsetX = offsetX;
		offsetX = drawNumber(offsetX,offsetY, nums[x].num,cxt);
		if(x<nums.length-1){
			if((nums[x].num!=10) &&(nums[x+1].num!=10)){
				offsetX+=padd;
			}
		}
	}

	if(currentNums.length ==0){
		currentNums = nums;
	}else{
		for(var i = 0;i<currentNums.length;i++){
			if(currentNums[i].num!=nums[i].num){
				addBalls(nums[i]);
				currentNums[i].num=nums[i].num;
			}
		}
	}
	drawBalls(cxt);
	moveBalls();
}

function addBalls (item) {
	var num = item.num;
	var numMatrix = digit[num];
	for(var y = 0;y<numMatrix.length;y++){
		for(var x = 0;x<numMatrix[y].length;x++){
			if(numMatrix[y][x]==1){
				var ball={
					offsetX:item.offsetX+radius+radius*2*x,
					offsetY:30+radius+radius*2*y,
					color:sj_color(),
					g:1.5+Math.random(),

					sx:Math.pow(-1, Math.ceil(Math.random()*10))*4+Math.random(),
					sy:-5
				}
				balls.push(ball);
			}
		}
	}
}

function drawBalls(cxt){
	for(var i = 0;i<balls.length;i++){
		cxt.beginPath();
		cxt.fillStyle=balls[i].color;
		cxt.arc(balls[i].offsetX, balls[i].offsetY, radius, 0, 2*Math.PI);
		cxt.fill();
	}
}

function moveBalls () {
	var i =0;
	for(var index = 0;index<balls.length;index++){
		var ball = balls[index];
		ball.offsetX += ball.sx;
		ball.offsetY += ball.sy;
		ball.sy+=ball.g;
		if(ball.offsetY > (h-radius)){
			ball.offsetY= h-radius;
			ball.sy=-ball.sy*u;
		}
		if(ball.offsetX>radius&&ball.offsetX<(w-radius)){

			balls[i]=balls[index];
			i++;
		}
	}
	for(;i<balls.length;i++){
		balls.pop();
	}
}
function drawNumber(offsetX, offsetY, num, cxt){
	var numMatrix = digit[num];
	for(var y = 0;y<numMatrix.length;y++){
		for(var x = 0;x<numMatrix[y].length;x++){
			if(numMatrix[y][x]==1){
				cxt.beginPath();
				cxt.arc(offsetX+radius+radius*2*x,offsetY+radius+radius*2*y,radius,0,2*Math.PI);
				cxt.fill();
			}
		}
	}
	offsetX += numMatrix[0].length*radius*2;
	return offsetX;
}

var currentDate = new Date();

setInterval(function(){
	context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	drawDatetime(context);
}, 50)

function Color(){
	return '#' + (function(h) {
	return new Array(7 - h.length).join("0") + h
	})((Math.random() * 0x1000000 << 0).toString(16))	
}

function sj_color(){
		var _color=Math.ceil(Math.random()*16777215).toString(16);
		while(_color.length<6){
			_color="0"+_color;
		}
		return "#"+_color;
}