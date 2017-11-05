$(document).ready(function(){

	// Chrome Smooth Scroll -- плавний скрол

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


	// слайд ефект

	$('.proj-link').click(function(){
		$('.move-box').css('left','-100%');
		$('.hide-in').show();
		$('.hide-out').hide(500);
	});
	
	$('.project-back').click(function(){
		$('.move-box').css('left','0%');
		$('.hide-in').hide(500);
		$('.hide-out').show();
	});
	

	// скрол по стрілці вниз

	$(".btn-scroll").click(function() {
		$("html, body").animate({
			scrollTop: $("#portfolio").offset().top
		}, 500); //швидкість скролу
	});


	// Scroll2top

	$("body").append('<span class="scroll2top">').children('.scroll2top').hide();
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 400) {
			$(".scroll2top").fadeIn();

			$('.header').addClass('header__scroll');
		} 
		else{
			$(".scroll2top").fadeOut();

			$('.header').removeClass('header__scroll');
		}
	});

	$(".scroll2top").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 500);
	});


	// Show slides in paralax

	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();

		if (wScroll > $('.portfolio').offset().top - ($(window).height() / 1.3)) {
			$('.proj-link').each(function(i) {
				setTimeout(function(){
					$('.proj-link').eq(i).addClass('is-show');
				}, 150 * (i+1));
			});
		}

		// Skill Counter

		if (wScroll > $('.about').offset().top - ($(window).height() / 1.4)) {
			$('.stats-item').each(function(){
				var percent = $(this).attr('data-percent');

				$(this).find('.stats-counter').animate({
					width: percent
				}, 1500);

				$(this).find('.bar-count').text(percent);
			});
		} 
		
	});

	// Back to Top of the Project

	$(".link-proj-up").click(function() {
		$("html, body").animate({
			scrollTop: $('#portfolio').offset().top - 10
		}, 500);
	});


// burger king

$('.burger').on('click', function(){
		var burger     = $('.burger');
		var navigate   = $('.navigation');

		if($(burger).hasClass('menu-off')){
			$(burger).removeClass('menu-off').addClass('menu-on');
			$(navigate).addClass('show-in');

		// коли додоається меню-он
		// то додається нав шоу

		} else {

			$(burger).addClass('menu-off').removeClass('menu-on');
			$(navigate).removeClass('show-in');
		}
	});


	/* ------------------ */
	/* ------ AJAX ------ */

	$('.proj-link').click(function(){

    $.ajaxSetup({ cache: true }); // включаю кеш

    var $this = $(this), // щоб був бульш скорочений запис 
        newTitle = $this.find('.proj-title').text(), // витягую текст з proj-title
        newFolder = $this.data('folder'), // атрибут кожного проекту
        spinner = '<div class="load-wrap"><div class="loader"><div class="box"></div><div class="walkway"></div></div></div>', // лоадер при завантаженні
        newHTML = '../work/' + newFolder + '.html'; // нова сторінка з різним дата-атрибутом

    $('.project-wrap').html(spinner).load(newHTML); // завантажую проект - показую лоадер
    $('.project-title').text(newTitle); // текст, який витягнув з proj-title вставляю в заголовок проекту
  });


});	// end ready
