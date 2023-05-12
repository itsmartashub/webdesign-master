document.querySelectorAll('.slider').forEach((slider, i) => {
	window[`slider${i + 1}`] = new Swiper(slider, {
		freeMode: true,
		centeredSlides: true,
		direction: 'vertical',
		mousewheel: true,
		slidesPerView: 1.75,
		slidesOffsetBefore: -125,
		// loop: true,
	})
})
bindSwipers(slider1, slider2, slider3, slider4) // pomaze da se svi swiper-slideri skroluju kad se skroluje i samo jedan.

/* 
slider1 = new Swiper('.slider1', {
	freeMode: true,
	centeredSlides: true,
	direction: 'vertical',
	mousewheel: true,
	slidesPerView: 1.75,
})

slider2 = new Swiper('.slider2', {
	freeMode: true,
	centeredSlides: true,
	direction: 'vertical',
	mousewheel: true,
	slidesPerView: 1.75,
})

slider3 = new Swiper('.slider3', {
	freeMode: true,
	centeredSlides: true,
	direction: 'vertical',
	mousewheel: true,
	slidesPerView: 1.75,
})

slider4 = new Swiper('.slider4', {
	freeMode: true,
	centeredSlides: true,
	direction: 'vertical',
	mousewheel: true,
	slidesPerView: 1.75,
}) 
*/
