function comparehead() {
	$(".secondary-header").css("display","none");
	$(".smmenubttn").click(function() {
		$(".secondary-header").slideToggle("fast");
		$(".secondary-header").stopPropagation();
    });
}

var small_size=768;

$(document).ready(function(){
				 
	if(jQuery(window).outerWidth() > small_size-1) {
		$(".secondary-header").css("display","block");
	} else {
		comparehead();
	}
	  
	});