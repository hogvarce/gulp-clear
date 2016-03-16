var app = app || {};

app.mobileMenuToogle = function(){
    $(document).on('click', '.mobile-menu-toggle', function(){
        $('.mobile-menu').toggleClass('active');
    });
};
