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
        $('.p-feedback-btn').addClass('is-active');
        return false;
    });

    $('.js-feedback-btn').on('click', function() {
        $('.js-feedback').addClass('is-active');
        $('.p-feedback-btn').removeClass('is-active');
        return false;
    });
    $('.js-feedback-close').on('click', function() {
        
        $('.js-feedback').removeClass('is-active');
        $('.p-feedback-btn').addClass('is-active');
    });
    //header

    //nav scroll
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if ($('.js-scroll-top').length>0) {
            if (scroll > $('.js-scroll-top').offset().top) {
                $("body").addClass("is-transition");
            } else {
                $("body").removeClass("is-transition");
            };
        };
    });
    $(window).load(function() {    
        var scroll = $(window).scrollTop();
        if ($('.js-scroll-top').length>0) {
            if (scroll > $('.js-scroll-top').offset().top) {
                $("body").addClass("is-transition");
            } else {
                $("body").removeClass("is-transition");
            };
        };
    });
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if ($('.js-search').length>0) {
            if (scroll >= $('.js-search').offset().top) {
                $("body").addClass("is-fixed");
            } else {
                $("body").removeClass("is-fixed");
            };
        };
    });
    $(window).load(function() {    
        var scroll = $(window).scrollTop();
        if ($('.js-search').length>0) {
            if (scroll >= $('.js-search').offset().top) {
                $("body").addClass("is-fixed");
            } else {
                $("body").removeClass("is-fixed");
            };
        };
    });
    //index menu
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if ($('.index__menu').length>0) {
            if (scroll >= $('.index__menu-in').offset().top) {
                $(".index__menu").addClass("is-active");
            } else {
                $(".index__menu").removeClass("is-active");
            };
        };
    });
    $(window).load(function() {    
        var scroll = $(window).scrollTop();
        if ($('.index__menu').length>0) {
            if (scroll >= $('.index__menu-in').offset().top) {
                $(".index__menu").addClass("is-active");
            } else {
                $(".index__menu").removeClass("is-active");
            };
        };
    });

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
    });
    //add phone
    $('.js-add-link').on('click', function() {
        $(this).parents('.js-add').addClass('is-active');
        return false;
    });

    //action
    $('.js-action-btn').on('click', function() {
        $('.js-action-box').toggleClass('is-active');
    });
    $('.js-action').each(function() {
        $('body').on('click', function() {
            $('.js-action-box').removeClass('is-active');
        });
        $(this).on('click', function(event) {
            event.stopPropagation();
        });
        $('.js-action-box a').on('click', function() {
            $('.js-action-box a').removeClass('is-active');
            $(this).addClass('is-active');
            $('.js-action-box').removeClass('is-active');
            return false;
        });
    });

    //o-messages
    $('.o-message').each(function() {
        $('.o-message input').change(function() {
            if ($(this).is(':checked')) {
                $(this).parents('.o-message').addClass('is-chosen');
            }
            else {
                $(this).parents('.o-message').removeClass('is-chosen');
            }
        });
    });

    //smiles
    $('.js-smile-btn').on('click', function() {
        $('.js-smile').toggleClass('is-active');
        return false;
    });
    $('.js-smile').each(function() {
        $('body').on('click', function() {
            $('.js-smile').removeClass('is-active');
        });
        $(this).on('click', function(event) {
            event.stopPropagation();
        });
        $('.js-smile a').on('click', function() {
            $('.js-smile').removeClass('is-active');
            return false;
        });
    });
    $('.o-post').on('click', function() {
        $(this).toggleClass('is-active');
        if ($('.o-post').hasClass('is-active')) {
            $('.o-posts-action').addClass('is-active');
        }
        else {
            $('.o-posts-action').removeClass('is-active');
        };        
    });
});

