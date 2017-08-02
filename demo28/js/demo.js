
var oTable=document.getElementById("mystar");
var rowsLen=oTable.rows.length;
var oSpan=[];
var _clickIndex=[-1,-1,-1,-1]
var txt0=["(垃圾)","(太烂了)","(太菜了)","(不够好)","(一般)","(还可以)","(还好)","(很不错)","(超赞)","(极品)"];

var txt1=["(垃圾)","(瞎扯)","(俗)","(菜)","(一般)","(还行)","(生动)","(精彩)","(超赞)","(极品)"];
var txt2=["(太监)","(百年不动)","(等不了了)","(太慢了)","(有点慢哦)","(正常)","(挺快)","(像刘翔那么快)","(灰机一样快)","(完本)"];
var txt3=["(小学没毕业)","(文盲)","(太烂了)","(不敢恭维)","(跟我差不多水平)","(洋洋洒洒)","(文采飞扬)","(行云流水)","(妙笔生花)","(极品)"];

for(var i=0;i<rowsLen;i++){
	if(i==1){continue;}
	var cellSpan=oTable.rows[i].cells[1].children.length;
	for(var j=0;j<cellSpan;j++){
		if(j%2==0){
			oTable.rows[i].cells[1].children[j].style.backgroundImage="url(images/stargrayl.png)";
			
		}else{
			oTable.rows[i].cells[1].children[j].style.backgroundImage="url(images/stargrayr.png)";
			oTable.rows[i].cells[1].children[j].style.marginRight="5px";
		}

	}

	var oSpan1=oTable.rows[i].cells[1].children;
		oSpan.push(oSpan1);
}

show(oSpan);
function show(obj){
	for(var j=1;j<obj.length;j++){
		showstar(obj[j],j);
	}
}

function showstar(arr,num){
	var ts_arr=[];
	switch(num){
		case 0:
			ts_arr=txt0;
		break;
		case 1:
			ts_arr=txt1;
		break;
		case 2:
			ts_arr=txt2;
		break
		case 3:
			ts_arr=txt3;
		break;
	}
	for(var i=0;i<arr.length;i++){
		arr[i].index=i;
		arr[i].onmouseover=function(){
			result(arr,this.index,ts_arr);
		}
		arr[i].onmouseout=function(){
				
				result(arr,_clickIndex[num],ts_arr);
				
		}
		arr[i].onclick=function(){
			_clickIndex[num]=this.index;
			result(arr,_clickIndex[num],ts_arr,1);
		}
	}
}

function result(arr,index,ts_arr,click){
		for(var k=0;k<arr.length;k++){
			if(k%2==0){
					arr[k].style.backgroundImage="url(images/stargrayl.png)";
			}else{
					arr[k].style.backgroundImage="url(images/stargrayr.png)";
			}
		}

	for(var j=0;j<=index;j++){
				
		if(j%2==0){
			arr[j].style.backgroundImage="url(images/starl.png)";
		}else{
			arr[j].style.backgroundImage="url(images/starr.png)";
		}
	}

	if(arr==oSpan[0]){
		arr[Math.round(index-1)].parentNode.nextElementSibling.innerHTML=ts_arr[Math.round(index-1)];

		arr[Math.round(index-1)].parentNode.previousElementSibling.innerHTML="<b style='color:#fff;'>"+((index+1).toFixed(1)+"").split(".")[0]+"</b>"+"."+((index+1).toFixed(1)+"").split(".")[1];
	
	}else{
		if(index>=0){
			arr[index].parentNode.nextElementSibling.innerHTML="<b style='color:red;'>"+(index+1)+"</b>"+ts_arr[index];
		}
	}
	
	if(click!=null){
		var allf=0;
		for(var i=1;i<_clickIndex.length;i++){

			if(_clickIndex[i]>=0){
				allf+=_clickIndex[i];
			}
			
		}
		result(oSpan[0],allf/3,txt0);
	}
}