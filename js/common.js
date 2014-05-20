head.ready(function() {

	function popup() {
		$(' .btn-popup ').on('click', function(event) {
			var id = $(this).attr("href");
			$('.popup-wrap').addClass(' is-open ');
			$(id).addClass('is-open');
			$('.overlay').fadeIn('fast');
			$('body').addClass(' has-popup ');
			return false;
		});
		$(' .popup ').on('click', function() {
			event.stopPropagation();
		});
		$(' .popup__close, .popup-wrap ').on('click', function() {
			$('.popup-wrap').removeClass(' is-open ');
			$('.overlay').fadeOut('fast');
			$('body').removeClass(' has-popup ');
			$('.popup').removeClass('is-open');
			return false;
		});
	} popup();


	function slider(){

		// line-height for vertical-align
		var el_height = $('.slider__el').height();
		$('.slider__el').css('line-height', el_height + 'px');

		// slider paginator
		$(' .slider__paginator a ').click(function (e){
			e.preventDefault();

			var target = this.hash,
					$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing', function () {
					window.location.hash = target;
			});
		});

		// add 'is-active' class to the first pagination
		$('.slider__paginator li').first().addClass('is-active');

		// switch 'is-active' class for paginator on scroll
		function sliderScroll(){
			$(' .slider__el ').each(function(){
				var pos = $(this).offset().top;
				var id = $(this).attr('id');
				if( $(window).scrollTop() >= (pos)){
					// $(this).addClass('is-animated');
					$('.slider__paginator li').removeClass('is-active');
					$('[href = #'+id+']').parent().addClass('is-active');
				}
			});
		}

		$(window).scroll(function() {
			sliderScroll();
		});

		// slider prev/next navigation
		$(' .slider__nav a ').click(function (e){
			e.preventDefault();

			var target = this.hash,
					$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing', function () {
					window.location.hash = target;
			});
		});

	} slider();


});
