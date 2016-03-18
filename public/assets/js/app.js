var app = app || {};

app.mobileMenuToogle = function(){
    $(document).on('click', '.mobile-menu-toggle', function(){
        $('.mobile-menu').toggleClass('active');
    });
};

app.sliderInit = function(){

    $('.screen-2 .bxslider').bxSlider({
        pagerCustom: '#bx-pager',
        onSliderLoad: function(){
            $('.bxslider').animate({'opacity':1},300);
        }
    });

    $('.screen-3 .bxslider').bxSlider({
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: $('.screen-3 .bxslider li').outerWidth(),
        pager: 0,
        slideMargin: 30,
        onSliderLoad: function(){
            $('.bxslider').animate({'opacity':1},300);
        }
    });

};

app.seeMore = function(target, count){
    $(target).find('.hidden').each(function(e){
        if ( e > count ) return;
        $(this).removeClass('hidden');
    });
    if ( !$(target).find('.hidden').length ) $('.more').hide();
}
