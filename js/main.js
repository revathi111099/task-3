let but=document.getElementById("butt");
but.addEventListener("click",function(){
	let red=Math.floor(Math.random()*360);
	let green=Math.floor(Math.random()*100);
	let blue=Math.floor(Math.random()*100);
	console.log(red,green,blue);
	document.body.style.backgroundColor=`hsl(${red},${green}%,${blue}%)`;	
});
