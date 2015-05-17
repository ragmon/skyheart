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
});

