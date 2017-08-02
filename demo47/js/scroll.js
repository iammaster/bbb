	var num=0;
	$("img.next").click(function(){
			$("img.prev").show();
			num++;  //num+1
			if(num>=3){
				num=3; //设置为 3
				//$(this).hide();//隐按扭
				}
		$(".imgList").animate({left:num*-966},500);

	});


	$("img.prev").click(function(){
		$("img.next").show();
			num--;  //num+1
			if(num<=0){
				num=0; //设置为 3
				//$(this).hide();//隐按扭
				}
		$(".imgList").animate({left:num*-966},500);

	});