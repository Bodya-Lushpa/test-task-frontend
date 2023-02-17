//script
var menu = document.querySelector('.more-options__menu');
document.querySelector('.more-options__link').onclick = function() {
	menu.classList.toggle('more-options__menu_open');
};