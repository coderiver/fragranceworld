head.ready(function() {

	function sliderHeight(){
		var el_height = $(window).height();
		$('.js-slider').height(headerHeight);
	} sliderHeight();

	$(window).resize(function() {
		sliderHeight();
	});

});