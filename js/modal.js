//----------MODAL------------------------------------------------------

function renderModal () {
	let buttons = document.querySelectorAll('.modal-link');
	if(buttons.length > 0) {
		buttons.forEach(item => {
			item.addEventListener('click',e => {
				let modalNow = document.querySelector(`.${e.target.dataset.modal__href}`);
				openModal(modalNow)
			})
		})
	}
}

function openModal(modal) {
	if (headBurger.closest('.active') && document.querySelector('.header__menu > ul').closest('.open')) {
		headBurger.classList.remove('active');
		document.querySelector('.header__menu > ul').classList.remove('open');
		modal.classList.add('active');
		closeModal(modal);
	}else {
		blockScroll(document.body);
		modal.classList.add('active');
		closeModal(modal);
	}
	
}

function closeModal(modal) {
	modal.querySelector('.modal-1__close').addEventListener('click',() => {
		blockScroll(document.body,false);
		modal.classList.remove('active');
	});
	
}

renderModal ()

//----------TABS------------------------------------------------------

function workTab () {
	let tabsButton = document.querySelectorAll('.tabs__button');
	let modalText = document.querySelector('.modal-1__info');
	
	tabHTML = {
		tab1:`
		<form name="modal-1__form">
			<input type="text" class="modal-1__input" placeholder="E-mail">
			<input type="password" class="modal-1__input" placeholder="Password">
			<div class="modal-1__check">
				<input type='checkbox'id="modal-1__check"/>
				<label for="modal-1__check">Remember me</label>
			</div>
			<button class="modal-1__button">Login</button>
			<a href="#" class="modal-1__forget">Forget password?</a>
		</form>
			`,
		tab2:`
		<form name="modal-1__form">
			<input type="text" class="modal-1__input" placeholder="Name">
			<input type="text" class="modal-1__input" placeholder="E-mail">
			<input type="password" class="modal-1__input" placeholder="Password">
			<input type="password" class="modal-1__input" placeholder="Confirm password">
			<button class="modal-1__button">Sign Up</button>
		</form>
			`,
	};

	modalText.innerHTML = tabHTML.tab1;
	tabsButton[0].classList.add('tabs__active');

	tabsButton.forEach((item,index) => {
		item.addEventListener('click',selectTab)
	});

	function selectTab(event) {
		let tabName = event.target.dataset.tabName;
		modalText.innerHTML = tabHTML[tabName];
		tabsButton.forEach(item => {
			item.classList.remove('tabs__active');
		})
		event.target.classList.add('tabs__active')
	}
}

workTab ()