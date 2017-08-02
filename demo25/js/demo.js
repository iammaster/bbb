function uploadFace(sender){
   if(!sender.value.match(/.jpg|.gif|.png|.bmp/i)){
		alert('请选择图片文件');
   }else{
     var oFileName = document.getElementById('fileName');
		oFileName.value = sender.files[0].name;
		var oPreview = document.getElementById('preview');
		oPreview.src = window.URL.createObjectURL(sender.files[0]);
		oPreview.setAttribute('bigsrc',oPreview.src);
		oFileName.value="";
   }
}