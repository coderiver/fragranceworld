head.ready(function() {

	function load(time){
		var x = new XMLHttpRequest();
		x.open('GET', "http://localhost:5646/walter/" + time, true);
		x.send();
	}

	load(20);
	load(100);
	load(500);
	load(2000);
	load(3000);

	setTimeout(function(){
		Pace.ignore(function(){
			load(3100);
		});
	}, 4000);

	Pace.on('hide', function(){
		console.log('done');
	});

	function sliderHeight(){
		var el_height = $(window).height();
		$('.js-slider').height(el_height);
	} sliderHeight();

	$(window).resize(function() {
		sliderHeight();
	});

	function popup() {
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
// $(window).load(function() {
	// $('.slider__pic_blured').addClass('is-active');
// });
