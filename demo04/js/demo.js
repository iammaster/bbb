var n = 0;
function uploads(obj){
	var html = "";
	n = obj.files.length;
	for (var i=0;i<n ;i++ )
	{
		var url = window.URL.createObjectURL(obj.files[i]);
		var txt = obj.files[i].name.split('.');
		html += "<div class='imgBox'><div class='img' style='background:url("+url+") no-repeat center;background-size:contain'></div><p>"+txt[0]+"</p></div>";
	}
	$(".upload").hide();
	$(".newUpload").hide();
	$("#Tz_imgs").append(html+"<div class='newUpload'>继续添加图片<input type='file' multiple='true' id='Tz_btn' onchange=uploads(this)></div>");
}
