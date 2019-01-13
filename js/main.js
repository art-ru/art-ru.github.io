// Preloader

$(window).on('load', function(){
	$('.box').fadeOut();
	$('.loader').delay(400).fadeOut(700);
	$('body').removeClass('loading');
});


$(document).ready(function(){

	// Chrome Smooth Scroll

	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

	if(!iOS){
		try {
			$.browserSelector();
				if($("html").hasClass("chrome")) {
					$.smoothScroll();
				}
		} catch(err) {
		};
	}


	// Burger Menu

	$('.burger').on('click', function(){
		var burger   = $('.burger');
		var overlay  = $('.blackover');
		var navigate = $('.nav');

		if (burger.hasClass('menu-off')) {
			burger.removeClass('menu-off').addClass('menu-on');
			overlay.addClass('blackover-overlay');
			navigate.addClass('show-in');
		} else {
			burger.addClass('menu-off').removeClass('menu-on');
			overlay.removeClass('blackover-overlay');
			navigate.removeClass('show-in');
		}

		$('.blackover-overlay').on('click', function(){
			burger.addClass('menu-off').removeClass('menu-on');
			overlay.removeClass('blackover-overlay');
			navigate.removeClass('show-in');
		});
	});


	$('.nav-item_link').on('click', function(){
		$('.burger').addClass('menu-off').removeClass('menu-on');
		$('.blackover').removeClass('blackover-overlay');
		$('.nav').removeClass('show-in');
	});


	// Scroll Down

	$(".btn-scroll").click(function() {
		$("html, body").animate({
			scrollTop: $("#portfolio").offset().top
		}, 400);
	});


	// Scroll2top

	$(window).scroll(function(){
		if ($(window).scrollTop() >= 200) {
			$(".scroll-top").fadeIn(150);
		} 
		else{
			$(".scroll-top").fadeOut(150);
		}
	});

	$(".scroll-top").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 400);
	});


	// Tabs content

	$('.tabs-nav a').on('click', function (e) {
    e.preventDefault();
    var toGo = $(this).attr('href');
    var parent = $(this).closest('tabs-nav a');
    
    if (!parent.hasClass('is-active')) {
      $('.tabs-nav li a').removeClass('is-active');
      $('.tabs-content').removeClass('is-active');  
      $(toGo).addClass('is-active');
      $(this).addClass('is-active');
    }
  });


	// Show / Hide popup

  $('.proj-link').click(function() {
  	$('html').css('overflow', 'hidden');
  	$('.project-content').css('display', 'block');
  });

  $('.project-back').click(function() {
  	$('html').css('overflow', 'auto');
  	$('.project-content').css('display', 'none');
  });


	// Ajax

	$('.proj-link').click(function(){

		$.ajaxSetup({ cache: true });

		var $this = $(this),
		newTitle = $this.find('.proj-title').text(),
		newFolder = $this.data('folder'),
		spinner = '<div class="loader-wrap"><div class="loader"><div class="box">Завантаження<span></span><span></span><span></span></div></div></div>',
		newHTML = '../work/' + newFolder + '.html';

		$('.project-wrap').html(spinner).load(newHTML);
		$('.project-title').text(newTitle);
	});


}); //end ready


// Progress Bar

window.onscroll = function(){
	textScroll();
};

function textScroll(){

	var windowScroll = document.body.scrollTop || document.documentElement.scrollTop,
			documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
			scrolled = (windowScroll / documentHeight) * 100;
	
	document.getElementById('progress-line').style.width = scrolled + '%';
};