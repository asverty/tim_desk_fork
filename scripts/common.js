// HEADER

const main = document.querySelector('main');
const header = document.querySelector('header');
const headerLogo = document.querySelector('#header-logo');

const buttons = document.querySelectorAll('.header__button');
const headerBrandsButton = document.querySelector('#header-brands-button');
const headerCategoriesButton = document.querySelector('#header-categories-button');
const headerSubscribeButton = document.querySelector('#header-subscribe-button');
const headerLogInButton = document.querySelector('#header-login-button');
const headerWishesButton = document.querySelector('#header-wishes-button');
const headerCartButton = document.querySelector('#header-cart-button');

const outlines = document.querySelectorAll('.header__button-outline');
const brandsOutline = document.querySelector('#brands-outline');
const categoriesOutline = document.querySelector('#categories-outline');
const subscribeOutline = document.querySelector('#subscribe-outline');
const logInOutline = document.querySelector('#login-outline');
const wishesOutline = document.querySelector('#wishes-outline');
const cartOutline = document.querySelector('#cart-outline');

const menus = document.querySelectorAll('.menu');
const brandsMenu = document.querySelector('#brands-menu');
const categoriesMenu = document.querySelector('#categories-menu');

const forms = document.querySelectorAll('.form');
const subscribeForm = document.querySelector('#subscribe-form');
const logInForm = document.querySelector('#login-form');
const signInButton = document.querySelector('#signin-button');
const recoveryButton = document.querySelector('#recovery-button');
const signInForm = document.querySelector('#signin-form');
const passwordRecoveryForm = document.querySelector('#password-recovery-form');

function headerTurnsBlack() {
	if (header.classList.contains('header_two-colored')) {
		headerLogo.classList.remove('header__logo_white');
		buttons.forEach(button => button.classList.remove('header__button_white'));
	}
};

function headerTurnsWhite() {
	if (header.classList.contains('header_two-colored')) {
		headerLogo.classList.add('header__logo_white');
		buttons.forEach(button => button.classList.add('header__button_white'));
	}
};

function showOutline(outline) {
	outline.classList.remove('header__button-outline_hidden');
};

function hideAllOutlines() {
	outlines.forEach(outline => outline.classList.add('header__button-outline_hidden'));
};

function showPopup(popup, hidingClass) {
	headerTurnsBlack();
	popup.classList.remove(hidingClass);
};

function hideAllPopups() {
	menus.forEach(menu => menu.classList.add('menu_hidden'));
	forms.forEach(form => form.classList.add('form_hidden'));
	hideAllOutlines();
	headerTurnsWhite();
};

headerBrandsButton.addEventListener('click', () => {
	hideAllPopups();
	showOutline(brandsOutline);
	showPopup(brandsMenu, 'menu_hidden');
});

headerCategoriesButton.addEventListener('click', () => {
	hideAllPopups();
	showOutline(categoriesOutline);
	showPopup(categoriesMenu, 'menu_hidden');
});

headerSubscribeButton.addEventListener('click', () => {
	hideAllPopups();
	showOutline(subscribeOutline);
	showPopup(subscribeForm, 'form_hidden');
});

headerLogInButton.addEventListener('click', () => {
	hideAllPopups();
	showOutline(logInOutline);
	showPopup(logInForm, 'form_hidden');
});

signInButton.addEventListener('click', () => {
	hideAllPopups();
	showOutline(logInOutline);
	showPopup(signInForm, 'form_hidden');
});

recoveryButton.addEventListener('click', () => {
	hideAllPopups();
	showOutline(logInOutline);
	showPopup(passwordRecoveryForm, 'form_hidden');
});

headerWishesButton.addEventListener('click', () => {
	showOutline(wishesOutline);
});

headerCartButton.addEventListener('click', () => {
	showOutline(cartOutline);
});

document.addEventListener('keydown', event => {
	if (event.key == 'Escape') hideAllPopups();
});

main.addEventListener('click', () => {
  hideAllPopups();
});





// BRANDS MENU

const brandsMenuImage = document.querySelector('#brand-menu-image');
const brandsList = [
	{
		name: '1991',
		menuLink: '#link-to-1991',
		image: 'url(../images/content/brands-1991.jpg)',
	},
	{
		name: 'Anna Maslovskaya',
		menuLink: '#link-to-anna-maslovskaya',
		image: 'url(../images/content/brands-anna-maslovskaya.jpg)',
	},
	{
		name: 'Arha',
		menuLink: '#link-to-arha',
		image: 'url(../images/content/brands-arha.jpg)',
	},
	{
		name: 'Atauchi',
		menuLink: '#link-to-atauchi',
		image: 'url(../images/content/brands-atauchi.jpg)',
	},
	{
		name: 'Behurr',
		menuLink: null,
		image: 'url(../images/content/brands-behurr.jpg)',
	},
	{
		name: 'BLACK FORM',
		menuLink: '#link-to-black-form',
		image: 'url(../images/content/brands-black-form.jpg)',
	},
	{
		name: 'HUBRIS',
		menuLink: '#link-to-hubris',
		image: 'url(../images/content/brands-hubris.jpg)',
	},
	{
		name: 'Liberte',
		menuLink: null,
		image: 'url(../images/content/brands-liberte.jpg)',
	},
	{
		name: 'Natalie Tonkal',
		menuLink: null,
		image: 'url(../images/content/brands-natalie-tonkal.jpg)',
	},
	{
		name: 'NOT CONCEPT',
		menuLink: null,
		image: 'url(../images/content/brands-not-concept.jpg)',
	},
	{
		name: 'Odor Objects',
		menuLink: '#link-to-odor-objects',
		image: 'url(../images/content/brands-odor-objects.jpg)',
	},
	{
		name: 'Other Objects',
		menuLink: '#link-to-other-objects',
		image: 'url(../images/content/brands-other-objects.jpg)',
	},
	{
		name: 'Perfert',
		menuLink: null,
		image: 'url(../images/content/brands-perfert.jpg)',
	},
	{
		name: 'Perfume Opera',
		menuLink: null,
		image: 'url(../images/content/brands-perfume-opera.jpg)',
	},
	{
		name: 'Sands',
		menuLink: null,
		image: 'url(../images/content/brands-sands.jpg)',
	},
	{
		name: 'Sub Rosa',
		menuLink: '#link-to-sub-rosa',
		image: 'url(../images/content/brands-sub-rosa.jpg)',
	},
];

const brandsInMenu = brandsList.filter(brand => {
	return brand.menuLink !== null;
});

brandsInMenu.forEach(brand => {
	let element = document.querySelector(brand.menuLink);
	element.addEventListener('mouseover', () => {
		brandsMenuImage.style.backgroundImage = brand.image;
	});
});





// CATEGORIES MENU

const categoriesMenuImage = document.querySelector('#categories-menu-image');
const categoriesList = [
	{
		name: 'Подвески',
		menuLink: '#link-to-pendals',
		image: 'url(../images/content/categories-pendals.jpg)',
	},
	{
		name: 'Серьги',
		menuLink: '#link-to-earrings',
		image: 'url(../images/content/categories-earrings.jpg)',
	},
	{
		name: 'Кольца',
		menuLink: '#link-to-rings',
		image: 'url(../images/content/categories-rings.jpg)',
	},
	{
		name: 'Браслеты',
		menuLink: '#link-to-bracelets',
		image: 'url(../images/content/categories-bracelets.jpg)',
	},
	{
		name: 'Каффы',
		menuLink: null,
		image: 'url(../images/content/categories-cuffs.jpg)',
	},
	{
		name: 'Заколки',
		menuLink: '#link-to-hairpins',
		image: 'url(../images/content/categories-hairpins.jpg)',
	},
	{
		name: 'Духи',
		menuLink: '#link-to-perfume',
		image: '',
	},
	{
		name: 'Твёрдые духи',
		menuLink: null,
		image: '',
	},
	{
		name: 'Головные уборы',
		menuLink: '#link-to-headwear',
		image: '',
	},
	{
		name: 'Одежда',
		menuLink: null,
		image: 'url(../images/content/categories-clothes.jpg)',
	},
];

const categoriesInMenu = categoriesList.filter(category => {
	return category.menuLink !== null;
});

categoriesInMenu.forEach(category => {
	let element = document.querySelector(category.menuLink);
	element.addEventListener('mouseover', () => {
		categoriesMenuImage.style.backgroundImage = category.image;
	});
});