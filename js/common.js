head.ready(function() {

	function sliderHeight(){
		var el_height = $(window).height();
		$('.js-slider').height(el_height);
	} sliderHeight();

	$(window).resize(function() {
		sliderHeight();
	});

	function popup() {
		// $(".btn-popup").click(function (){
		// var page = $(this).attr("href");
		// 	$('html, body').animate({
		// 		scrollTop: $(page).offset().top
		// 	}, 500);
		// return false;
		// });

		$(' .btn-popup ').on('click', function(event) {
			var id = $(this).attr("href");
			$(' .popup-wrap ').addClass(' is-open ');
			$(id).addClass('is-open');
			// $(' .popup ').removeClass('is-open');
			// $(' .overlay ').addClass(' is-visible ');
			$(' .overlay ').fadeIn('fast');
			$(' body ').addClass(' has-popup ');
			return false;
		});
		$('.popup').on('click', function() {
			event.stopPropagation();
		});
		$(' .popup__close, .popup-wrap ').on('click', function() {
			$(' .popup-wrap ').removeClass(' is-open ');
			// $(' .overlay ').removeClass(' is-visible ');
			$(' .overlay ').fadeOut('fast');
			$(' body ').removeClass(' has-popup ');
			$(' .popup ').removeClass('is-open');
			return false;
		});
	} popup();

});
