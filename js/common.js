head.ready(function() {

	function sliderHeight(){
		var el_height = $(window).height();
		$('.js-slider').height(el_height);
	} sliderHeight();

	$(window).resize(function() {
		sliderHeight();
	});

	$('.popup-with-zoom-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: false,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in'
		});

});
