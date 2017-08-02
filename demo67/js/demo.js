var _index=0;
var arrylist=null;
var arrylis2=null;

arrydemo();
donghua();

$("#Tz_flash img.but_right").click(function(){
	_index++;
		if(_index>3){_index=0;
		}	
		arrydemo();
		donghua()	
});

$("#Tz_flash img.but_left").click(function(){
	_index--;
if(_index<0){_index=3;}
	arrydemo();
	donghua()
});

function arrydemo(){
	$("#Tz_flash .content").eq(_index).fadeIn().siblings("div").fadeOut();
	if(_index==0){
				arrylist=["img.f_1_1","img.f_1_2","img.f_1_3"];
				arrylist2=[{left:"20px",opacity:"1"},{left:"20px",opacity:"1"},{left:"315px",opacity:"1"}];
			}else if(_index==1){
				arrylist=["img.f_2_1","img.f_2_2","img.f_2_3"];
				arrylist2=[{top:"50px",opacity:"1"},{top:"160px",opacity:"1"},{top:"0px",opacity:"1"}];
			}else if(_index==2){
				arrylist=["img.f_3_1","img.f_3_2","img.f_3_3"];
				arrylist2=[{left:"320px",opacity:"1"},{top:"200px",opacity:"1"},{opacity:"1"}];
			}else if(_index==3){
				arrylist=["img.f_4_1","img.f_4_2","img.f_4_3"];
				arrylist2=[{top:"0px",opacity:"1"},{opacity:"1"},{top:"220",opacity:"1"}];
			}
}


function donghua(){
		$("#Tz_flash .content").find("img").removeAttr("style");
		$("#Tz_flash .content").eq(_index).find(arrylist[0]).animate(arrylist2[0],1000,function(){
		$("#Tz_flash .content").eq(_index).find(arrylist[1]).animate(arrylist2[1],1000,function(){
			$("#Tz_flash .content").eq(_index).find(arrylist[2]).animate(arrylist2[2],1000);	
		});	
	});
}