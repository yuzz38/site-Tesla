$(function(){
	$('.header-mobile-btn').on('click', function(e){
		e.preventDefault();
			$('.header-items').toggleClass('header-items--active');
		});
	$('section').on('click', function(e){
		e.preventDefault();
			$('.header-items').removeClass('header-items--active');
		});
	$('.header-main').on('click', function(e){
		e.preventDefault();
			$('.header-items').removeClass('header-items--active');
		});
});