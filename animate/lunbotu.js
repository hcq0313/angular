// function animate(obj,target){
//     clearInterval(obj.timer);
//     var speed = target>obj.offsetLeft?1200:-1200;
//     obj.timer = setInterval(function(){
//         var left = obj.offsetLeft;
//         obj.style.left = left + speed +"px";
//         var result = target - left;
//         if(Math.abs(result)<=20){
//             clearInterval(obj,timer);
//             obj.style.left=target + "px";
//         }
//     },2000);
// }

window.onload = function(){
    var container = document.getElementById("container");
	var photos = document.getElementById("photos");
	var buttons = document.getElementsByTagName("span");  
	var index = 1;
	var animated = false;
    var timer; 

    function animate(offset){
		var animate = true;
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

	for(var i = 0; i < buttons.length; i++)
	{
		buttons[i].onclick = function(){
			if(this.className == "on"){
                return;
                //console.log(2);
            }           
            var myIndex = parseInt(this.getAttribute("index"));           
			var offset = -1200 * (myIndex - index); 
			index = myIndex;
            showButtons();
            //console.log(myIndex);
			if(!animated){
				animate(offset);
			}
		}
    }

}
