// JavaScript Document
function $(id){
	return  document.getElementById(id);
}

// 符合w3c 的浏览 中 有 event
// IE里面       window.event
function stopPropagation(event){
	event = event || window.event;
	if(window.event){
		//这是ＩＥ
		event.cancelBubble = true;
	}else {
		//这是 w3c
		event.stopPropagation();
	}
}

