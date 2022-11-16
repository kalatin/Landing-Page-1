function blockScroll (elem,term = true) {
	if (term === true) {
		let documentWidth = parseInt(document.documentElement.clientWidth);
		let windowsWidth = parseInt(window.innerWidth);
		let scrollWidth = windowsWidth - documentWidth;
		elem.style.paddingRight = scrollWidth + 'px';
		elem.classList.toggle('noScroll')
	} else {
		elem.style.paddingRight = `0px`
		elem.classList.remove('noScroll')
	} 
}

//--------------------SWIPER-------------------

const swiper = new Swiper('.popular-slider', {
	spaceBetween:20,
	slidesPerView:1,
	navigation: {
	  nextEl: '.popular-slider-next',
	  prevEl: '.popular-slider-prev',
	},
	breakpoints: {
		992: {
			slidesPerView:3,
		},
		686: {
			slidesPerView:2,
		}
	 }
});

const swiper2 = new Swiper('.slider-reviews', {
	spaceBetween:20,
	slidesPerView:1,
	autoHeight:true,
	navigation: {
		nextEl: '.slider-reviews-next',
		prevEl: '.slider-reviews-prev',
	 },
});