// SLIDER__MAIN
const sliderMain = new Swiper('.slider__main', {
	freeMode: true, // pojma nemam sta je ovo al se sporije skrolla, kao da ima vise hoda, bez ovog odmah skrolla centrirano u sledeci slide__item
	centeredSlides: true, // kad skrolamo da trenutni slider bude centriran
	mousewheel: true,
	parallax: true, // bez ovog slikama se nista ne desava. takodje je bitan style za .slider__img, slika je 3x veca od 100% (dakle 300%), i pomerena ulevo za 1/3 od width tj -100%, i onda je nekako centrirana, moze da se skrola i levo i desno, a div je fillovan i dalje. Plus, jako je bitan atribut data-swiper-parallax gde stavljamo koliko se parallaxuje kao, 20%, 30% od sirine diva fazon je ok
	breakpoints: {
		0: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		680: {
			// slidesPerView: 3.5,
			slidesPerView: 2.5,
			spaceBetween: 60,
		},
		980: {
			slidesPerView: 3.5,
			spaceBetween: 60,
		},
	},
})

// SLIDER__BG
const sliderBg = new Swiper('.slider__bg', {
	centeredSlides: true,
	parallax: true,
	sliderPerView: 3.5,
	spaceBetween: 30,
})

sliderMain.controller.control = sliderBg

// OPEN/CLOSE IMAGE CLICK EVENT
document.querySelectorAll('.slider__item').forEach((item) => {
	item.addEventListener('click', (e) => {
		item.classList.toggle('opened')
	})
})

// ANIMATE DESCRIPTION
const desc = document.querySelector('.description')
sliderMain.on('slideChange', (e) => {
	console.log(e)
	sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})
