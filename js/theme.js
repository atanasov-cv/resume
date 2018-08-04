;(function($) {
    "use strict";

    /*----------------------------------------------------*/
    /*  Menu scroll js
    /*----------------------------------------------------*/
    let headerArea = $('.header_area');
    var nav_offset_top = headerArea.offset().top;

    function stickyHeader() {
		if (headerArea.length) {
			var strickyScrollPos = nav_offset_top;
			if($(window).scrollTop() > strickyScrollPos) {
				headerArea.removeClass('fadeIn animated');
				headerArea.addClass('stricky-fixed fadeInDown animated')
			}
			else if($(window).scrollTop() <= strickyScrollPos) {
				headerArea.removeClass('stricky-fixed fadeInDown animated');
				headerArea.addClass('slideIn animated')
			}
		}
	}

    // instance of function while Window Scroll event
	$(window).on('scroll', function () {
		stickyHeader()
	})

    /*----------------------------------------------------*/
    /*  Skill js
    /*----------------------------------------------------*/
    $(".skill_item_inner").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });


    /*----------------------------------------------------*/
    /*  Portfolio_isotope
    /*----------------------------------------------------*/
    function our_gallery(){
        if ( $('.portfolio_area').length ){
            // Activate isotope in container
            $(".portfolio_list_inner").imagesLoaded( function() {
                $(".portfolio_list_inner").isotope({
                    itemSelector: ".col-md-4",
                });
            });
            // Add isotope click function
            $(".porfolio_menu ul li").on('click',function(){
                $(".porfolio_menu ul li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".portfolio_list_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    our_gallery();


    /*----------------------------------------------------*/
    /*  Certificate slider
    /*----------------------------------------------------*/
    function blog_slider(){
        if ( $('.blog_slider_inner').length ){
            $('.blog_slider_inner').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                items: 1,
                autoplay: false,
                smartSpeed: 1500,
                navContainer: '.blog_slider_area',
                navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>']
            });
        }
    }
    blog_slider();



    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/

    if ( $('#mapBox').length ){
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        var map = new GMaps({
            el: '#mapBox',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
                styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
            });

        }


//
//        $('.header_area .nav.navbar-nav li').click(function(e) {
//            e.preventDefault(); //prevent the link from being followed
//            $('.header_area .nav.navbar-nav li').removeClass('active');
//            $(this).addClass('active');
//        });


    $('.header_area .nav.navbar-nav li a[href^="#"]:not([href="#"])').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 80
        }, 1500);
        event.preventDefault();
    });


    function bodyScrollAnimation() {
        var scrollAnimate = $('body').data('scroll-animation');
        if (scrollAnimate === true) {
            new WOW({
                mobile: false
            }).init()
        }
    }
    bodyScrollAnimation();


    /*----------------------------------------------------*/
    /*  Preloader js
    /*----------------------------------------------------*/
    $(window).load(function() { // makes sure the whole site is loaded
		$('#preloader_spinner').fadeOut('slow'); // will first fade out the loading animation
		$('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(4450).css({'overflow':'visible'})
    });


})(jQuery);