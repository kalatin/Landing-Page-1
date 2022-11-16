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
