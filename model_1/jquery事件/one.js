$(function(){
	$('#box').click(function(){
		console.log('click');
	});
	$('#box').mousedown(function(){
		console.log('mousedown');
	});
	$('#box').mouseup(function(){
		console.log('mouseup');
	});
	$('#box').dblclick(function(){
		console.log('dblclick');
	});
	//事件绑定 on(delegate 等同于on的作用,已经被弃用) 事件绑定解除 off (配对使用)
	//事件绑定 bind 事件绑定解除 unbind	(配对使用)
	$('#box2').
	//事件冒泡
	/**
		event.stopPropagation() 阻止父级元素事件冒泡( 防止事件冒泡到DOM树上，也就是不触发的任何前辈元素上的事件处理函数。)
		我们可以用event.isPropagationStopped() 来确定这个方法是否(在哪个事件对象上)调用过了
	*/
	//stopImmediatePropagation() //阻止(除当前之外的)事件冒泡
	/**
		hover() 
		相当于同时绑定了mouseenter() 和 mouseleave()(1.7之前),
		相当于同时绑定了mouseup() 和 mouseout()(1.8及其以后)
	*/
})