window.app = {};
app.sliders = [];
app.isMobile = false;
app.map = {};
app.markers = [];
app.markerCluster = {};
app.diagnostic = {};

// DOM READY
define(['jquery'], function($){

	$(function () {

		// Mobile detected
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)) || $(window).width()<768)
			app.isMobile = true

		// bxslider init
		if ( $('.slider').length ) {
			requirejs(['bxSlider'], function(bxSlider){
				$('.slider').each(function(){
					var self = $(this);
					app.sliders.push(self.bxSlider({
					    minSlides: (typeof self.data('min') != "undefined") ? self.data('min') : 1,
					    maxSlides: (typeof self.data('max') != "undefined") ? self.data('max') : 1,
						slideWidth: (typeof self.data('width') != "undefined" && self.data('width') > 0) ? self.data('width') : (typeof self.data('max') != "undefined") ? ((app.isMobile) ? self.width()/parseInt(self.data('min')) : self.width()/parseInt(self.data('max')) ) : 0,
					    moveSlides: 1,
					    slideMargin: (typeof self.data('margin') != "undefined") ? self.data('margin') : 0,
						auto: true,
						responsive: false,
						controls: (typeof self.data('controls') != "undefined") ? parseInt(self.data('controls')) : true,
						pager: (typeof self.data('pager') != "undefined") ? parseInt(self.data('pager')) : true,
						pagerCustom: (typeof self.data('custom-pager') != "undefined") ? $(this).data('custom-pager') : '',
						onSliderLoad: function () {
							self.css({"opacity":1});
						}
					}))
				});
			});
		}

		//fancybox init
		if ( $(".fancybox").length ) {
			require(["fancybox"], function(fancybox){
				$(".fancybox").fancybox({
					helpers: {
					    overlay: {
					      locked: false
					    }
					  }
				});
			});
		}

		//tabs logic
		$(document).on('click', '.tab', function(e){
			e.preventDefault();
			var self = $(this),
				target = self.data('tab');
			$('.tab').removeClass('active');
			self.addClass('active');
			$('.tabs-content').removeClass('active');
			$(target).eq(0).addClass('active');
		});

		/*=============PROBLEM-ANIMATION BEGIN=====================*/

		//article toggle
		$(document).on('click', '.problem .mobile-toggle', function(e){
			e.preventDefault();
			var self = $(this);
			if ( self.hasClass('active') ) return;
			$('.problem .mobile-toggle').toggleClass('active');
			self.parent().parent().hide()
				.siblings().show();
		});

		$(document).on('click', '.article-toggle:not(.mini)', function(e){
			e.preventDefault();
			var button = $(this),
				animateSpeed = 300,
				articleActive = button.parent(),
				articleHidden = articleActive.siblings(),
				anotherButton = articleHidden.children('.article-toggle').eq(0),
				anotherHeader = articleHidden.children('.head-page').eq(0),
				verticalText = makeVertical(anotherHeader.children('span').eq(0).html())
				bgLeft = $('.problem-left-bg').eq(0),
				bgRight = $('.problem-right-bg').eq(0),
				widthForBg = ($(window).width()-$('.container').eq(0).width())/2 + 80,
				bgAnimate = articleActive.index();
			button.hide();
			anotherHeader.hide();
			if (!bgAnimate)
			{
				bgLeft.css({'z-index':'1'}).animate({'width':'100%','right':widthForBg},"fast");
			}
			else
			{
				bgRight.css({'z-index':'1'}).animate({'width':'100%','left':widthForBg},"fast");
			}
			articleHidden.animate({"width":"10%","height":"500px"}, "fast")
						 .removeClass('active')
						 .children('.problem-list').hide();
			articleActive.animate({"width":"90%"}, "fast")
						 .addClass('active')
						 .find('.problem-list > li')
						 .hide()
						 .removeClass("hidden")
						 .addClass('half')
						 .delay(animateSpeed).fadeIn("slow")
						 .parent().nextAll('.pagin').eq(0)
						 .delay(animateSpeed).fadeIn("slow");
			anotherButton.hide()
						 .addClass('mini')
						 .delay(animateSpeed).fadeIn("slow");
			anotherHeader.addClass('vertical-word')
						 .delay(animateSpeed).fadeIn("slow")
						 .children('span').eq(0).html(verticalText);
			$('body').css({'overflow-x':'hidden'});
		}).on('click', '.article-toggle.mini', function(e){
			e.preventDefault();
			var button = $(this),
				animateSpeed = 300;
				articleActive = button.parent(),
				articleHidden = articleActive.siblings(),
				anotherButton = articleHidden.children('.article-toggle').eq(0),
				articleHeader = articleActive.children('.head-page').eq(0),
				anotherHeader = articleHidden.children('.head-page').eq(0),
				verticalText = makeVertical(anotherHeader.children('span').eq(0).html()),
				horizontalText = makeHorizontal(articleHeader.children('span').eq(0).html()),
				bgLeft = $('.problem-left-bg').eq(0),
				bgRight = $('.problem-right-bg').eq(0),
				widthForBg = ($(window).width()-$('.container').eq(0).width())/2 + 80,
				bgAnimate = articleActive.index();
			button.hide();
			anotherHeader.hide();
			articleHeader.hide();
			articleHidden.children('.problem-list').hide();
			if (!bgAnimate)
			{
				bgRight.css({'z-index':'1'}).animate({'width':'50%','left':"50%"},"fast");
				bgLeft.css({'z-index':'2'}).animate({'width':'100%','right':widthForBg},"fast");
			}
			else
			{
				bgLeft.css({'z-index':'1'}).animate({'width':'50%','right':"50%"},"fast");
				bgRight.css({'z-index':'2'}).animate({'width':'100%','left':widthForBg},"fast");
			}
			anotherButton.addClass('mini')
						 .css({'top': articleActive.offset().top+articleActive.height()-30});

			setTimeout(function(){
				anotherButton.show();
				anotherHeader.show();
				articleHeader.show();
				articleActive.find('.problem-list').show();
			},500);
			articleHeader.removeClass('vertical-word')
						 .children('span').eq(0).html(horizontalText);
			anotherHeader.addClass('vertical-word')
						 .delay(animateSpeed)
						 .children('span').eq(0).html(verticalText);
			 articleHidden.animate({"width":"10%","height":"500px"}, "fast")
						 .removeClass('active')
						 .children('.problem-list, .pagin').hide();
			 articleActive.css({"height":0}).animate({"width":"90%","height":"auto"}, "fast",function(){
				 articleActive.css({"height":""})
			 })
						 .addClass('active')
						 .find('.problem-list')
						 .children('li')
						 .removeClass('hidden').hide()
						 .addClass('half')
						 .delay(animateSpeed).fadeIn("slow")
						 .parent().nextAll('.pagin').eq(0)
						 .delay(animateSpeed).fadeIn("slow");
		});

  		/*===================PROBLEM-ANIMATION END=======================*/

		//form question send
		$(document).on('click','.consult-ask a.btn--light-blue', function(e){
			e.preventDefault();
			var self = $(this),
				block = self.parent('.consult-ask'),
				form = self.nextAll('.form-ask');
			self.hide();
			block.css({'position':'absolute','z-index':'20'});
			form.slideDown();

		}).on('click', '.consult-ask .fancybox-close', function(e){
			e.preventDefault();
			var self = $(this),
				form = self.parents('.form-ask').eq(0),
				button = form.prevAll('.btn--light-blue').eq(0),
				block = form.parent('.consult-ask');
			form.slideUp("fast", function(){
				block.css({'position':'relative','z-index':'1'});
				button.show();
			});
		});

		//checkbox
		$(document).on('click','.for-checkbox', function(e){
			e.stopPropagation();
			 var self = $(this);
			 if ( self.hasClass('checked') )
			 	self.removeClass('checked');
			 else
			 	self.addClass('checked');
			 return false;
		});

		//slider reviews
		$('.product-review a').click(function(e){
			e.preventDefault();
			var self = $(this).parent(),
				form = $('.form-review').eq(0);
			$('.product-review').removeClass('selected');
			self.addClass('selected');
		});

		//google map
		if ( $('.map').length )
		{
			require(['mapInit'], function(){});
		}

		//select2
		require(['select2'], function(select2){
			$('.select2').select2();
		});

		//toggle mobile menu
		$('.toggle-mobile-menu').click(function(){
			$('#navigation').slideToggle();
		});

		//diagnostic button
		$(document).on('click','a[data-modal]',function(e){
			e.preventDefault();
			var btn = $(this);
			if ( btn.hasClass('diag') && !btn.hasClass('active') ) return false;
			var modal = btn.data('modal');
			require(['fancybox'], function(fancybox){
				$.fancybox({
					content: $('#diagnostic ' + modal),
					maxWidth: 780,
					minWidth: (!app.isMobile) ? 780 : 0,
					padding: (!app.isMobile) ? 0 : 20,
					autoWidth: true,
					scrolling: (!app.isMobile)?'no':'auto',
					afterShow: function(){
						$('.fancybox-close').css({'top':'28px','right':'23px'});
						if (app.isMobile)
							$('.fancybox-inner .row').css({'margin':'0px'});
						$('input[type="radio"]').click(function(){
							$(this).parent().parent().find('a.diag.step-next').eq(0).addClass('active')
						});
						 $.each(app.sliders, function(e){
						 	app.sliders[2].reloadSlider();
						 });
					}
				});
			});
		});

	}());

});


// OTHER FUNCTIONS
function makeVertical(text){
	return text.split('').join("<br>");
}
function makeHorizontal(text){
	return text.split('<br>').join("");
}
