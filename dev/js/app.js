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
};

app.menuScroll = function(){
    $(document).on('click', '.header ul li a', function(e){
        e.preventDefault();
        var self = $(this);
        $('.header ul li a').removeClass('active');
        $('html,body').stop().animate({'scrollTop': $(self.attr('href')).offset().top - $('.header').height()}, "fast", function(){
            self.addClass('active');
        });
    });
};

app.yMapInit = function(){
   ymaps.ready(init);
   var myMap;

   function init(){
       myMap = new ymaps.Map("map", {
           center: [45.0411651, 38.9517059],
           zoom: 12
       });
       myMap.behaviors.disable('scrollZoom');
       var myPlacemark = new ymaps.Placemark([45.0384744, 38.9080428], {
           balloonContent: '<a href="/kontacty/ul-70-letiya-oktyabrya-d-15/">ул. 70-летия Октября, д. 15</a><br>+7 (861) 261-60-04'
       }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/map-marker.png',
            iconImageSize: [44, 46],
            iconImageOffset: [-22, -23]
        });
        var myPlacemark1 = new ymaps.Placemark([45.0597422, 39.0250506], {
            balloonContent: '<a href="/kontacty/ul-70-letiya-oktyabrya-d-15/">ул. Восточно-Кругликовская, д. 46/11</a><br>+7 (861) 202-02-42'
        }, {
             iconLayout: 'default#image',
             iconImageHref: '/assets/img/map-marker.png',
             iconImageSize: [44, 46],
             iconImageOffset: [-22, -23]
         });
        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark1);
   }

};
