let menuButton = document.querySelector('.main-menu-small a');
let openMenu = false;

menuButton.addEventListener('click', showFullMenu);

function showFullMenu() {

	document.querySelector('.main-menu-wrapper .main-menu ul').classList.toggle('visible');

	if (openMenu) {

		menuButton.innerHTML = 'Menu';
		openMenu = false;

	} else {

		menuButton.innerHTML = 'X';
		openMenu = true;

	}
}