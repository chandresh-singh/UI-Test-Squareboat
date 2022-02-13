$(document).ready(function() {
	$('.ch-tab a').click(function() {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $(this).parents('.ch-tab').find('.ch-tab__slider').css({'left':+ position.left,'width':width});

    var menuLink = $(this).attr('href');
    $('.ch-message__tab-list-item .nav-link').each(function(){
      if($(this).attr('href') == menuLink) {
        $('.ch-message__tab-list-item .nav-link').removeClass('active');
       $(this).addClass('active');
      }
    });
  });
  var actWidth = $('.ch-tab').find('.active').parent('li').width();
  var actPosition = $('.ch-tab .active').position();
  $('.ch-tab .ch-tab__slider').css({'left':+ actPosition.left,'width': actWidth});

  $('.ch-message__tab-list-item .nav-link').click(function() {
    var currentLink = $(this).attr('href');
    $('.ch-header .nav-item a').each(function(){
      if($(this).attr('href') == currentLink) {
        var position = $(this).parent().position();
        var width = $(this).parent().width();
        $(this).parents('.ch-tab').find('.ch-tab__slider').css({'left':+ position.left,'width':width});
      }
    });
  });



  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
  });

  $('.ch-message__chat-box-toggle').click(function() {
    $(this).toggleClass('open');
    $('.ch-message__chat-box-attachment').toggleClass('open');
  });
});
