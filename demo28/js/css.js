function addClass(obj,clsName){
		var cls=obj.className;
		if(cls==""){
			//如果本来就没有任何样式，直接加上
			obj.className=clsName;
		}else{
			var arrNew=obj.className.split(" ");
				if(arrIndexOf(arrNew,clsName)<0){
					
					obj.className+=" "+clsName;
				}

			
		}
	};



function removeClass(obj,clsName){
	
	if(obj.className!=""){
		var newarr=obj.className.split(" ");
		var i=arrIndexOf(newarr,clsName);
		if(i>=0){
			//alert(newarr+"-"+i)
			newarr.splice(i,1);//他返回的是被删除的内容，切记不要赋值
			
			obj.className=newarr.join("");
		}

	}

}




function getElementsByClassName(obj,tagName,clsName){
	var arr=[];
	var oTag=obj.getElementsByTagName(tagName);
	for(var i=0;i<oTag.length;i++){
		var newarr=oTag[i].className.split(" ");
		/*for(var j=0;j<newarr.length;j++){
			if(newarr[j]==clsName){
				arr.push(oTag[i]);
				break;
			}
		}*/
		if(arrIndexOf(newarr,clsName)>=0){
			arr.push(oTag[i]);
		}

	}

	return arr;
}


//写个函数，检查数组里面是否有这个字符

function arrIndexOf(arr,str){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==str){
			return i;
		}
	}
	return -1;
}