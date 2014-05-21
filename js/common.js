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

		// slider paginator
		$(' .slider__paginator a ').click(function (e){
			e.preventDefault();

			var page = $(this).attr("href");

			$('html, body').stop().animate({
				'scrollTop': $(page).offset().top
			}, 500, 'swing');
		});

		// add 'is-active' class to the first pagination
		$('.slider__paginator li').first().addClass('is-active');

		// slider prev/next navigation
		$(' .slider__next ').click(function() {
			$('.slider__paginator').find('li.is-active').next().find('a').trigger('click');
			return false;
		});

		$(' .slider__prev ').click(function() {
			$('.slider__paginator').find('li.is-active').prev().find('a').trigger('click');
			return false;
		});

		$(document.documentElement).keyup(function (e) {
			if (e.keyCode == 40)
			{
				$('.slider__paginator').find('li.is-active').next().find('a').trigger('click');
			}

			if (e.keyCode == 38)
			{
				$('.slider__paginator').find('li.is-active').prev().find('a').trigger('click');
			}
		});

	} slider();


});
