window.onload = function(){
	var container = document.getElementById("container");
	var photos = document.getElementById("photos");
	var buttons = document.getElementById("buttons").getElementsByTagName("span");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	var index = 1;
	var animated = false;
	var timer;
	function animate(offset){
		var animate = true;
		//console.log(photos.style.left);
		var newLeft = parseInt(photos.style.left) + offset;
		var time = 300;
		var interval = 10;
		var speed = offset/(time/interval);
		function go(){
			animated = false;
			photos.style.left = newLeft + "px";
			if(newLeft > -1200)
			{
				photos.style.left = -6000 + "px";
			}
			if(newLeft < -6000)
			{
				photos.style.left = -1200 + "px";
			}
		}	
		go();
	}
	function showButtons(){
		for(var i = 0; i < buttons.length; i++)
		{
			if(buttons[i].className == "on")
			{
				buttons[i].className = "";
				break;
			}
		}
		buttons[index-1].className = "on";
	}
	next.onclick = function(){
		if(index == 5)
		{
			index = 1;
		}
		else{
			index =index + 1;
		}
		showButtons();
		if(!animated)
		{
			animate(-1200);
		}
	};
	prev.onclick = function(){
		if(index == 1)
		{
			index = 5;
		}
		else{
			index =index - 1;
		}
		showButtons();
		if(!animated)
		{
			animate(1200);
		}
	};
	function play(){
		timer = setInterval(function(){
			next.onclick();
		},2000);
	}
	function stop(){
		clearInterval(timer);
	}
	container.onmouseover  = stop;
	container.onmouseout = play;
	play();
}