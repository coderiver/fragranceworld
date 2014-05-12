head.ready(function() {

	function sliderHeight(){
		var el_height = $(window).height();
		$('.js-slider').height(el_height);
	} sliderHeight();

	$(window).resize(function() {
		sliderHeight();
	});

});
