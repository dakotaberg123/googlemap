$(document).foundation();
$(document).ready(function(){


	new Maplace({
	show_markers: false,
	locations: [{
		lat: 47.659381, 
		lon: -117.4236639,
		zoom: 18
	}]
}).Load(); 




	console.log("Page loaded. Lets do this.");

});