
$(document).ready(function(){

  	$('#review-slider').bxSlider({
	  	nextSelector: '#next-review',
	  	prevSelector: '#prev-review',
	  	nextText: '',
	  	prevText: '',
  		pager: false
	});

  	$('#clients-slider').bxSlider({
	  	nextSelector: '#next-client',
	  	prevSelector: '#prev-client',
	  	nextText: '',
	  	prevText: '',
	  	minSlides: 5,
  		maxSlides: 5,
  		slideWidth: 200,
  		slideMargin: 0,
  		moveSlides: 2,
  		pager: false
	});

  	$('#banner-slider').bxSlider({
	  	nextSelector: '#next-banner',
	  	prevSelector: '#prev-banner',
	  	nextText: '',
	  	prevText: '',
  		pager: false
	});

});