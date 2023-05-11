gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({
		wrapper: '#smooth__wrapper',
		content: '#smooth__content',
		effects: true, // looks for data-speed and data-lag attributes on elements
		smooth: 1.5, // how long (in seconds) it takes to "catch up" to the native scroll position
		// smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
	})

	gsap.fromTo(
		'.intro',
		{ opacity: 1 },
		{
			opacity: 0,
			scrollTrigger: {
				trigger: '.intro',
				// start: '20%',
				// end: '100%',
				start: 'center',
				end: '820',
				scrub: true,
				markers: { startColor: 'pink', endColor: 'pink' },
			},
		}
	)

	// let galleryItemsLeft = gsap.utils.toArray('.gallery__left .gallery__item')

	// galleryItemsLeft.forEach((itemLeft) => {
	// 	gsap.fromTo(
	// 		itemLeft,
	// 		{ opacity: 0, x: -50, y: 100 },
	// 		{
	// 			opacity: 1,
	// 			x: 0,
	// 			y: 0,
	// 			scrollTrigger: {
	// 				trigger: itemLeft,
	// 				start: '-850',
	// 				end: '-100',
	// 				scrub: true,
	// 			},
	// 		}
	// 	)
	// })

	// let galleryItemsRight = gsap.utils.toArray('.gallery__right .gallery__item')

	// galleryItemsRight.forEach((itemRight) => {
	// 	gsap.fromTo(
	// 		itemRight,
	// 		{ opacity: 0, x: 50, y: 100 },
	// 		{
	// 			opacity: 1,
	// 			x: 0,
	// 			y: 0,
	// 			scrollTrigger: {
	// 				trigger: itemRight,
	// 				start: '-850',
	// 				end: '-100',
	// 				scrub: true,
	// 			},
	// 		}
	// 	)
	// })

	galleryItemsAnim({
		_className: '.gallery__left',
		_x: -50,
		_y: 100,
	})
	galleryItemsAnim({
		_className: '.gallery__right',
		_x: 50,
		_y: 100,
	})

	function galleryItemsAnim({ _className, _x, _y }) {
		let galleryItemsArray = gsap.utils.toArray(`${_className} .gallery__item`)

		galleryItemsArray.forEach((item) => {
			gsap.fromTo(
				item,
				// { opacity: 0, x: _x, y: _y },
				{ opacity: 0, x: _x },
				{
					opacity: 1,
					x: 0,
					// y: 0,
					scrollTrigger: {
						trigger: item,
						start: '-820',
						end: '-100',
						scrub: true,
						markers: { startColor: 'greenyellow', endColor: 'greenyellow' },
					},
				}
			)
		})
	}
	// gsap.fromTo(
	// 	'.hero-section',
	// 	{ opacity: 1 },
	// 	{
	// 		opacity: 0,
	// 		scrollTrigger: {
	// 			trigger: '.hero-section',
	// 			start: 'center',
	// 			end: '820',
	// 			scrub: true,
	// 		},
	// 	}
	// )

	// let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	// itemsL.forEach((item) => {
	// 	gsap.fromTo(
	// 		item,
	// 		{ opacity: 0, x: -50 },
	// 		{
	// 			opacity: 1,
	// 			x: 0,
	// 			scrollTrigger: {
	// 				trigger: item,
	// 				start: '-850',
	// 				end: '-100',
	// 				scrub: true,
	// 			},
	// 		}
	// 	)
	// })

	// let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	// itemsR.forEach((item) => {
	// 	gsap.fromTo(
	// 		item,
	// 		{ opacity: 0, x: 50 },
	// 		{
	// 			opacity: 1,
	// 			x: 0,
	// 			scrollTrigger: {
	// 				trigger: item,
	// 				start: '-750',
	// 				end: 'top',
	// 				scrub: true,
	// 			},
	// 		}
	// 	)
	// })
}
