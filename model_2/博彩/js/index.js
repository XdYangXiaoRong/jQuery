// JavaScript Document
var allId = [];
var oPs   = [];
window.onload = function(){
	$("closeAd").onclick = function(){
		$("ad").style.display = "none";
	}
	var allDiv = document.getElementsByTagName("div");
	for(var i=0; i<allDiv.length;i++){
		if(allDiv[i].className == "div_select"){
			allId.push(allDiv[i].id)
			divSelect(  $(allDiv[i].id)  );   //  nav
		}
	}
	for(var i=0;i<allId.length;i++){
		var objP = $(allId[i]).getElementsByTagName("p")[0];
		oPs.push(objP);
	}
}


function divSelect(obj){  //  obj  ==   $("nav")
	//div 模拟select
	var oSpan = obj.getElementsByTagName("span")[0];
	var oI    = obj.getElementsByTagName("i")[0];
	var oP    = obj.getElementsByTagName("p")[0];
	

	oSpan.onclick = function(){
		for(var j=0; j<oPs.length;j++){
			oPs[j].style.display = "none";
		}

		oP.style.display = "block";
		return;
	}
	oI.onclick = function(){
		oSpan.onclick();
	}
	document.onmousedown = function(){
		for(var j=0; j<oPs.length;j++){
			oPs[j].style.display = "none";
		}
	}
}



