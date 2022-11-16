let buy = document.querySelector('.buy');

if(buy) {
	let items = buy.querySelectorAll('.buy__block');
	items.forEach(item => {
		item.addEventListener('click',event => {
			item.classList.toggle('open');

			if(event.target.classList.contains('buy__item')) {
				item.querySelector('.buy__name').textContent = event.target.textContent
			}
		})
	})
}