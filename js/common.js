head.ready(function() {
	//select
	 $(document).click(function() {
        $(".js-select").removeClass("is-active");
	      $(".js-select-list").slideUp(100);
    });
    
	// select list
    $("body").on("click",".js-select",function(event) {
        event.stopPropagation();
    });
    $("body").on("click",".js-select-text",function(event) {
    	var select = $(this).parents(".js-select");
        if (select.hasClass("is-active")) {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
        }
        else {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
            select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
        }
       
    });

    $("body").on("click",".js-select-list li",function() {
        var val = $(this).attr("data-val");
        var text = $(this).text();
        var select = $(this).parents(".js-select");
        var selectList = $(this).parents(".js-select-list");
        select.find(".js-select-text").text(text);
        select.find("option").removeAttr("selected");
        select.find('option[value="'+val+'"]').attr("selected", "selected");
        selectList.find("li").removeClass("is-active");
        $(this).addClass("is-active");
        select.removeClass("is-active");
        selectList.slideUp(100);
        return false;
        
    });

    //nav
    $('.js-nav-btn').on('click', function() {
    	$('.js-nav').toggleClass('is-active');
    	return false;
    });
    $('body').on('click', function() {
    	$('.js-nav').removeClass('is-acitve');
    });
    $('.js-nav').on('click', function(event) {
    	event.stopPropagation();
    });

    //accordion
    $('.js-accordion-open').on('click', function() {
       if ($(this).parents('.js-accordion').hasClass('is-active')) {
            $(this).parents('.js-accordion').removeClass('is-active');
            $(this).parents('.js-accordion').find('.js-accordion-block').slideUp('fast');
       }
       else {
            $('.js-accordion').removeClass('is-active');
            $('.js-accordion-block').slideUp('fast');
            $(this).parents('.js-accordion').addClass('is-active');
            $(this).parents('.js-accordion').find('.js-accordion-block').slideDown('fast');
       };
       return false;
    });

    //btn up
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if ($('.js-scroll-top').length>0) {
            if (scroll >= $('.js-scroll-top').offset().top) {
                $(".js-btn-up").addClass("is-active");
            } else {
                $(".js-btn-up").removeClass("is-active");
            };
        };
    });
    $(window).load(function() {    
        var scroll = $(window).scrollTop();
        if ($('.js-scroll-top').length>0) {
            if (scroll >= $('.js-scroll-top').offset().top) {
                $(".js-btn-up").addClass("is-active");
            } else {
                $(".js-btn-up").removeClass("is-active");
            };
        };
    });
    $('.js-btn-up').click(function(event) {
         $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
    });

    //enter
    $('.enter').each(function() {
        $('.js-enter-btn').on('click', function () {
            $('.js-enter-popup').toggleClass('is-active');
            return false;
        });
        $('body').on('click', function() {
            $('.js-enter-popup').removeClass('is-active');
        });
        $('.js-enter-popup').on('click', function(event) {
            event.stopPropagation();
        });
    });
    //cabinet
    $('.profile').each(function() {
        $('.js-cabinet-btn').on('click', function () {
            $('.js-cabinet-popup').toggleClass('is-active');
            return false;
        });
        $('body').on('click', function() {
            $('.js-cabinet-popup').removeClass('is-active');
        });
        $('.js-cabinet-popup').on('click', function(event) {
            event.stopPropagation();
        });
    });
    $('.js-beta-close').on('click', function() {
        $('.js-beta').addClass('is-hidden');
        return false;
    });
    //header

    //nav scroll
<<<<<<< HEAD
=======
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if ($('.js-scroll-top').length>0) {
            if (scroll > $('.header').offset().top+50) {
                $("body").addClass("is-transition");
            } else {
                $("body").removeClass("is-transition");
            };
        };
    });
    $(window).load(function() {    
        var scroll = $(window).scrollTop();
        if ($('.js-scroll-top').length>0) {
            if (scroll > $('.header').offset().top+50) {
                $("body").addClass("is-transition");
            } else {
                $("body").removeClass("is-transition");
            };
        };
    });
>>>>>>> b4e7744069e117fb5453302dd9c80437839afb7c
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if ($('.search').length>0) {
            if (scroll >= $('.search').offset().top) {
                $("body").addClass("is-fixed");
            } else {
                $("body").removeClass("is-fixed");
            };
        };
    });
    $(window).load(function() {    
        var scroll = $(window).scrollTop();
        if ($('.search').length>0) {
            if (scroll >= $('.search').offset().top) {
                $("body").addClass("is-fixed");
            } else {
                $("body").removeClass("is-fixed");
            };
        };
    });

<<<<<<< HEAD
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if ($('.slider').length>0) {
            if (scroll >= $('.slider').offset().top) {
                $("body").addClass("is-transition");
            } else {
                $("body").removeClass("is-transition");
            };
        };
    });
    $(window).load(function() {    
        var scroll = $(window).scrollTop();
        if ($('.slider').length>0) {
            if (scroll >= $('.slider').offset().top) {
                $("body").addClass("is-transition");
            } else {
                $("body").removeClass("is-transition");
            };
        };
=======
    //theme
    $('.js-theme-btn').on('click', function() {
        $('.js-theme-block').toggleClass('is-active');
        return false;
    });
    $('.js-theme').each(function() {
        $('body').on('click', function () {
            $('.js-theme-block').removeClass('is-active');            
        });
        $(this).on('click', function (event) {
            event.stopPropagation();        
        });
    });

    //slider
    $('.js-slider-close').on('click', function() {
        $('.js-slider').addClass('is-hidden');
        return false;
>>>>>>> b4e7744069e117fb5453302dd9c80437839afb7c
    });
});

