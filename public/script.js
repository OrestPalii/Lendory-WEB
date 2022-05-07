$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:3,
		adaptiveHeigth:true,
		speed:1000,
		infinite:false,
		waitForAnimate:true,
		autoplay:true,
		autoplaySpeed:3000,
	
	});
})


new Swiper('.info-slider',{
	navigation:{
		nextEl:'.swiper-button-next',
		prevEl:'.swiper-button-prev'
	},
	keyboard: {
		enabled: true,
	  },
	simulateTouch:false,
	speed:2000,
	effect:'cube',
	cubeEffect:{
		slideShadows:false,
		shadow:false,
		
	
	},

	
});

