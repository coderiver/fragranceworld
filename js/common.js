$(document).ready(function() {

	function popup() {
		$(' .btn-popup ').on('click', function(event) {
			var id = $(this).attr("href");
			$('.popup-wrap').addClass(' is-open ');
			$(id).addClass('is-open');
			$('.overlay').fadeIn('fast');
			$('body').addClass(' has-popup ');
			return false;
		});
		
		$(' .popup__close, .popup-wrap ').on('click', function(event) {
			$('.popup-wrap').removeClass(' is-open ');
			$('.overlay').fadeOut('fast');
			$('body').removeClass(' has-popup ');
			$('.popup').removeClass('is-open');
			return false;
		});

		$(' .popup ').on('click', function(event) {
			event.stopPropagation();
		});
	} popup();


	function slider(){

		if ($(window).outerWidth() <= 900 ) {
			$('body').removeClass('has-slider');
			$('.slider__el').addClass('is-animated');

			// line-height for vertical-align
			var el_height = $('.slider__el').height();
			$('.slider__el').css('line-height', el_height + 'px');
		}
		else{
			

		// switch 'is-active' class for paginator on scroll
		function sliderScroll(){
			$(' .slider__el ').each(function(){
				var pos = $(this).offset().top;
				var id = $(this).attr('id');
				if( $(window).scrollTop() == (pos)){
					$('.slider__el').removeClass('is-animated');
					$(this).addClass('is-animated');
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
			}, 800, 'swing');
		});

		// add 'is-active' class to the first pagination
		$('.slider__paginator li').first().addClass('is-active');
		$('.slider__el').first().addClass('is-animated');

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


		b = $('body');
		var $current, flag = false;
		$('body.has-slider').mousewheel(function(event, delta) {
				if (b.hasClass('is-running')) { console.log('its already running');return false; }
				b.addClass('is-running');
				console.log('go');

				$current = $('.slider__el.is-animated');

				if (delta > 0) {
						$prev = $current.prev();

						if ($prev.length) {
								flag = true;

								$('body').scrollTo($prev, 800, {
										onAfter : function(){
												flag = false;
										}
								});
						}
				} else {
						$next = $current.next();

						if ($next.length) {
								flag = true;
								$('body').scrollTo($next, 800, {
										onAfter : function(){
												flag = false;
										}
								});
						}
				}
				setTimeout(function(){b.removeClass('is-running');},1200);
				event.preventDefault();
		});
		}

		

	} slider();



	// tochki tabs

	
	$(".js-toggle-tochki").on('click', function(){
		if ($(this).hasClass('is-map')) {
			$(this).removeClass('is-map').text('Показать карту');
			$(".js-shop-map").fadeOut();
			$(".js-shop-group").fadeIn();
		}
		else{
			$(this).addClass('is-map').text('Показать списком');
			$(".js-shop-group").fadeOut();
			$(".js-shop-map").fadeIn();
			
		}
	});


	// cycle init

	if ($(".product__gallery").length) {
		$(".product__gallery").each(function(){
				var pager = $(this).find('.product__pager');
				var next = $(this).find('.product__next');
			$(this).cycle({
				pager: pager,
				next: next
			});
		});
	};
	
// form validation
	
	if ($(".popup__form").length) {
		
		$(".validation").hide();
	
		$("#feedback-form").validate({
			rules: {
				phone: {
					digits: true,
					minlength: 10,
					maxlength: 12
				}
			},
			errorPlacement: function(error,element) {
  				return true;
  			},
  			invalidHandler: function(form, validator) {
    	    	var errors = validator.numberOfInvalids();
    	   		if (errors) {
					$(".input[name=uname]").attr('placeholder', 'Контактное лицо *');
					$(".input[name=cname]").attr('placeholder', 'Название организации *');
					$(".input[name=phone]").attr('placeholder', 'Телефон *');
					$(".textarea[name=comment]").attr('placeholder', 'Комментарий *');
    	    	}
   			},
  			errorClass: "is-error",
  			errorLabelContainer: "#messageBox",
  			errorElement: 'span'
		});
	};
	
	
	

});

