let headBurger = document.querySelector('.header__burger');

headBurger.addEventListener('click',() => {
	let headMenu = document.querySelector('.header__menu > ul');
	let header = document.querySelector('.header');

	headBurger.classList.toggle('active');
	headMenu.classList.toggle('open');

	blockScroll(document.body);
	headMenu.style.top = `${header.clientHeight}px`;

	window.addEventListener('resize',() => {
		headMenu.style.top = `${header.clientHeight}px`;
		if(document.documentElement.clientWidth > 1024) {
			headBurger.classList.remove('active');
			headMenu.classList.remove('open');
			blockScroll(document.body,false);
		}
	})
})