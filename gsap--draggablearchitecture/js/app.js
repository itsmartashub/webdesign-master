window.onload = function () {
	setTimeout(function () {
		document.body.classList.add('loaded')

		if (window.matchMedia('(min-width: 992px)').matches) {
			// If not mobile

			Draggable.create('.gallery', {
				bounds: 'body', // ovo je granica, ne moze izvan okvira .gallery
				inertia: true,
			})
		}
	}, 200)
}
