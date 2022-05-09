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
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	  },
	  autoplay: {
        delay: 8000,
		autoplayDisableOnInteraction:false,
        },
	speed:2000,
	effect:'cube',
	cubeEffect:{
		slideShadows:false,
		shadow:false,
	},
});
$(".swiper-container").hover(function() {
    (this).swiper.autoplay.stop();
}, function() {
    (this).swiper.autoplay.start();
});

