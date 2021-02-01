// SECTION COUNTER

const counter = document.querySelector('.counter');
const numberOfSections = Array.from(document.querySelectorAll('.section')).length;
counter.textContent = `1/${numberOfSections}`;





// FULLPAGE.JS
const myFullpage = new fullpage('#fullpage', {
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide'],
	showActiveTooltip: true,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: false,
	verticalCentered: true,
	sectionsColor: ['#FAFAFA', '#FAFAFA', '#FAFAFA', '#FAFAFA'],
	paddingTop: '0',
	paddingBottom: '0',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
	cards: false,
	cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	onLeave: function (origin, destination, direction) {
		counter.textContent = `${destination.index + 1}/${numberOfSections}`;
	},
	afterLoad: function (origin, destination, direction) { },
	afterRender: function () { },
	afterResize: function (width, height) { },
	afterReBuild: function () { },
	afterResponsive: function (isResponsive) { },
	afterSlideLoad: function (section, origin, destination, direction) { },
	onSlideLeave: function (section, origin, destination, direction) { }
});





// HEADER

const headerLogo = document.querySelector('#header-logo');
const buttons = document.querySelectorAll('.header__button');
const headerBrandsButton = document.querySelector('#header-brands-button');
const headerCategoriesButton = document.querySelector('#header-categories-button');
const headerSubscribeButton = document.querySelector('#header-subscribe-button');
const headerLogInButton = document.querySelector('#header-login-button');
const headerSignInButton = document.querySelector('#header-signin-button');
const headerForgotPasswordButton = document.querySelector('#header-forgot-password-button');
const headerWishesButton = document.querySelector('#header-wishes-button');
const headerCartButton = document.querySelector('#header-cart-button');
const menus = document.querySelectorAll('.menu');
const brandsMenu = document.querySelector('#brands-menu');
const categoriesMenu = document.querySelector('#categories-menu');
const forms = document.querySelectorAll('.form');
const signInForm = document.querySelector('#signin-form');
const logInForm = document.querySelector('#login-form');
const subscribeForm = document.querySelector('#subscribe-form');
const passwordRecoveryForm = document.querySelector('#password-recovery-form');
const sections = document.querySelectorAll('.section');

function headerTurnsBlack() {
	headerLogo.classList.remove('header__logo_white');
	buttons.forEach(button => button.classList.remove('header__button_white'));
};

function headerTurnsWhite() {
	headerLogo.classList.add('header__logo_white');
	buttons.forEach(button => button.classList.add('header__button_white'));
};

function showPopup(popup, hidingClass) {
	headerTurnsBlack();
	popup.classList.remove(hidingClass);
}

function hideAllPopups() {
	menus.forEach(menu => menu.classList.add('menu_hidden'));
	forms.forEach(form => form.classList.add('form_hidden'));
	headerTurnsWhite();
};

function togglePopup(popup, hidingClass) {
	if (popup.classList.contains(hidingClass)) {
		hideAllPopups();
		showPopup(popup, hidingClass);
	} else hideAllPopups();
};

headerBrandsButton.addEventListener('click', () => togglePopup(brandsMenu, 'menu_hidden'));
headerCategoriesButton.addEventListener('click', () => togglePopup(categoriesMenu, 'menu_hidden'));
headerSubscribeButton.addEventListener('click', () => togglePopup(subscribeForm, 'form_hidden'));
headerLogInButton.addEventListener('click', () => togglePopup(logInForm, 'form_hidden'));
headerSignInButton.addEventListener('click', () => togglePopup(signInForm, 'form_hidden'));
headerForgotPasswordButton.addEventListener('click', () => togglePopup(passwordRecoveryForm, 'form_hidden'));

sections.forEach(section => {
	section.addEventListener('click', () => hideAllPopups());
});

document.addEventListener('keydown', event => {
	if (event.key == 'Escape') hideAllPopups();
});





// FOOTER

const footer = document.querySelector('.footer');
const lastSection = Array.from(document.querySelectorAll('.section')).pop();

function showFooter() {
	footer.classList.remove('footer_hidden');
	myFullpage.setAllowScrolling(false, 'up');
	myFullpage.setKeyboardScrolling(false, 'up');
};

function hideFooter() {
	footer.classList.add('footer_hidden');
	setTimeout(() => {
		myFullpage.setAllowScrolling(true, 'up');
		myFullpage.setKeyboardScrolling(true, 'up');
	}, 300);
};

// open footer via keyboard
document.addEventListener('keydown', event => {
	let activeSection = myFullpage.getActiveSection();
	if ((activeSection.isLast) && (event.key == 'ArrowDown')) showFooter();
});

// close footer via keyboard
document.addEventListener('keydown', event => {
	let activeSection = myFullpage.getActiveSection();
	if ((activeSection.isLast) && ((event.key == 'ArrowUp') || event.key == 'Escape')) hideFooter();
});

// open footer via mouse wheel
lastSection.addEventListener('wheel', event => {
	if (event.wheelDelta < 0) showFooter();
});

// close footer via mouse wheel (if cursor is on section)
lastSection.addEventListener('wheel', event => {
	if (event.wheelDelta > 0) hideFooter();
});

// close footer via mouse wheel (if cursor is on footer itself)
footer.addEventListener('wheel', event => {
	if (event.wheelDelta > 0) hideFooter();
});

// close footer via click on section
lastSection.addEventListener('click', () => {
	if (!footer.classList.contains('footer_hidden')) hideFooter();
});

// close all menus and forms via click on footer
footer.addEventListener('click', () => {
	hideAllPopups();
});

// close footer via click on menu
menus.forEach(menu => {
	menu.addEventListener('click', () => hideFooter());
});

// close footer via click on form
forms.forEach(form => {
	form.addEventListener('click', () => hideFooter());
});