$(function() {
	$('.pContent').hide();
	
	$('#sales').hover(function(){
		$('#contactContent').hide();
		$('#supportContent').hide();
		$('#salesContent').toggle();
	});

	$('#support').hover(function(){
		$('#contactContent').hide();
		$('#salesContent').hide();
		$('#supportContent').toggle();
	});
	
	$('#contact').hover(function(){
		$('#supportContent').hide();
		$('#salesContent').hide();
		$('#contactContent').toggle();
	});
});

