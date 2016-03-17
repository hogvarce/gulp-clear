$(function () {

	$(".fancybox").fancybox({
		padding: 10,
		helpers: {
		   overlay: {
			 locked: false
		   }
		 }
	});

	 $('select').select2();

	 app.mobileMenuToogle();

	 app.sliderInit();

	  new WOW().init();

}());
