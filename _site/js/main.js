(function ($) {
 "use strict";

 	/*---------------------
     Preloader
	--------------------- */
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });
 
    /*---------------------
     Device-curosel
    --------------------- */
	$('.device-curosel').owlCarousel({
		loop:true,
		margin:0,
		nav:false,		
		autoplay:false,
		smartSpeed:1000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	
	/*----------------------------
	  Progress-bar
	------------------------------ */ 
	 $('.skill-area').waypoint(function() {
		$('.progress-bar').addClass('left-anim');
		}, {
		triggerOnce: true,
		offset: '70%'
	});
	 
	/*--------------------------
    05. Magnific Popup
	---------------------------- */	
	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		},
		gallery: {
			enabled: true
		}
	});
    
    /*---------------------
     device-curosel
    --------------------- */
	$('.team-carousel-active').owlCarousel({
		loop:true,
		margin:0,
		nav:false,		
		autoplay:false,
		smartSpeed:1000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})	
	
    /*---------------------
     Brand-active
    --------------------- */
	$('.brand-active').owlCarousel({
		loop:true,
		margin:0,
		nav:false,		
		autoplay:false,
		smartSpeed:1000,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})	
	
    /*---------------------
     Testimonial-active
    --------------------- */
	$('.testimonial-active').owlCarousel({
		loop:true,
		margin:0,
		nav:false,		
		mouseDrag:false,		
		autoplay:false,
		smartSpeed:1000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:2
			}
		}
	})			
		
	/*----------------------------
	  Sticky Header
	------------------------------ */
	$(window).on('scroll',function() {    
		var scroll = $(window).scrollTop();
		if (scroll < 1) {
		$(".sticker").removeClass("sticky");
		}else{
		$(".sticker").addClass("sticky");
		}
	}); 
			
	/*---------------------
	  One Page Nav
	 --------------------- */
     var top_offset = $('.header-area').height() - -60;
		$('.main-menu nav ul').onePageNav({
         currentClass: 'active',
        scrollOffset: top_offset,
		scrollThreshold: 0.5,
     });
	
    /*---------------------
    Background Video
    --------------------- */
	 $('.player').mb_YTPlayer();
	
	/*-------------------
	Scroll-up
	--------------------*/
    $.scrollUp({
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
 	
    /*---------------------
     parallax-active
    --------------------- */
	var parallaxeffect = $(window);
	parallaxeffect.stellar({
		responsive: true,
		positionProperty: 'position',
		horizontalScrolling: false
	});

    /*---------------------
     Menu Bg
    --------------------- */	
	var headertopoption = $(window);
	var headTop = $('.header-area-2');

	headertopoption.on('scroll', function () {
		if (headertopoption.scrollTop() > 200) {
			headTop.addClass('menu-scroll');
		} else {
			headTop.removeClass('menu-scroll');
		}
	});	

    /*---------------------
    smooth scroll
    --------------------- */
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 80
        }, 800);
    });	
	
	/*---------------------
	 Ajax Contact Form
	--------------------- */

	$('.cf-msg').hide();
	$('form#cf button#submit').on('click', function() {
		var fname = $('#fname').val();
		var subject = $('#subject').val();
		var email = $('#email').val();
		var msg = $('#msg').val();
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if (!regex.test(email)) {
			alert('Please enter valid email');
			return false;
		}

		fname = $.trim(fname);
		subject = $.trim(subject);
		email = $.trim(email);
		msg = $.trim(msg);

		if (fname != '' && email != '' && msg != '') {
			var values = "fname=" + fname + "&subject=" + subject + "&email=" + email + " &msg=" + msg;
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: values,
				success: function() {
					$('#fname').val('');
					$('#subject').val('');
					$('#email').val('');
					$('#msg').val('');

					$('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
					setTimeout(function() {
						$('.cf-msg').fadeOut('slow');
					}, 4000);
				}
			});
		} else {
			$('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
		}
		return false;
	});	
 
})(jQuery);  