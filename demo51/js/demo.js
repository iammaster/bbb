(function(){
    var num=0;
    var timer=null;
    //点击图片上传按扭
    $(".imgBut").click(function(){
        $(".upload").slideToggle(); //自动收缩和展开
    });
    //找到要拖进去的目标元素
    var oDiv=$(".upload").get(0);
    var op=$(".upload p.tis");

    //当进入
    oDiv.ondragenter=function(){
        op.html("可以释放元素");
    }
    //离开
    oDiv.ondragleave=function(){
        op.html("请将图片拖拽到此区域");
    };
    //在内部移动
    oDiv.ondragover=function(e){
        e.preventDefault();
        e.stopPropagation();
    }
//释放
    oDiv.ondrop=function(e){
        clearTimeout(timer)
        e.stopPropagation();
        e.preventDefault();
        //获取拖过来的文件
        var fs=e.dataTransfer.files;
        var len=fs.length; //获取文件个数
        for(var i=0;i<len;i++){
            var _type=fs[i].type;
            if(_type.indexOf("image")!=-1){//判断他是不是图片文件
                num++;
                if(num<=3){
                    var fd=new FileReader();
                    fd.readAsDataURL(fs[i]);
                    fd.onload=function(){
                        var oImg=$("<img src='' width='180' height='180' />");
                        oImg.attr("src",this.result);
                        $(".upload").append(oImg);
                        op.html("");
                    }
                }else{
                    op.html("最多只能上传3张哦");
                    timer=setTimeout(function(){
                        op.html('')
                    },500)
                }
            }else{
                alert("请，上传图片文件！！");
            }
        }
    }


//点击发表说说按扭
    $("span.fb").click(function(){

        $(".upload").slideUp();
        var txt=$(".Edit").text();
        if(txt==""){
            $(".Edit").focus();
        }else{
            $(".shuoshuo").show();
            var html=$(".shuoshuo").html();
            if($(".upload")[0].firstChild==$('img')[0]){
                $(".shuoshuo").html(html+"<div class='box'><p>"+txt+"</p>"+$(".upload").html()+"</div>");
            }else{
                $(".shuoshuo").html(html+"<div class='box'><p>"+txt+"</p></div>");
            }
        }
        $(".upload").html("");
        $(".Edit").text("");
    });
})()