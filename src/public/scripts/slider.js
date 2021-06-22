new Splide( '.splide', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    pagination: false,
    pauseOnHover: true,
    autoplay: true,
    interval: 2000,
    breakpoints: {
		800: {
			perPage: 3,
		},
        540: {
			perPage: 2,
		},
	}
}).mount();

new Splide( '.feedback .splide', {
    rewind: true,
    type: 'fade',
    perPage: 1,
    perMove: 1,
    pagination: false,
    pauseOnHover: true,
    autoplay: true,
    interval: 2000,
}).mount();