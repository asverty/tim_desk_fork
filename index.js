// SECTION COUNTER

const counter = document.querySelector('.counter');
const numberOfSections = Array.from(document.querySelectorAll('.section')).length;
counter.textContent = `1/${numberOfSections}`;





// FULLPAGE.JS
const sections = document.querySelectorAll('.section');
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
const menus = document.querySelectorAll('.menu');
const brandsMenu = document.querySelector('#brands-menu');
const categoriesMenu = document.querySelector('#categories-menu');
const forms = document.querySelectorAll('.form');
const signInForm = document.querySelector('#signin-form');
const logInForm = document.querySelector('#login-form');
const subscribeForm = document.querySelector('#subscribe-form');
const passwordRecoveryForm = document.querySelector('#password-recovery-form');

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





// MENUS
const brandMenuImage = document.querySelector('#brand-menu-image');
const categoriesMenuImage = document.querySelector('#categories-menu-image');

const brandsList = [
	{
		element: document.querySelector('#other-objects-link'),
		image: 'url(./images/content/brands-bg.jpg)'
	},
	{
		element: document.querySelector('#sub-rosa-link'),
		image: 'url(./images/content/categories-bg.jpg)'
	},
	{
		element: document.querySelector('#black-form-link'),
		image: 'url(./images/content/brands-bg.jpg)'
	},
	{
		element: document.querySelector('#hubris-link'),
		image: 'url(./images/content/categories-bg.jpg)'
	},
	{
		element: document.querySelector('#arha-link'),
		image: 'url(./images/content/brands-bg.jpg)'
	},
	{
		element: document.querySelector('#brand-1991-link'),
		image: 'url(./images/content/categories-bg.jpg)'
	},
	{
		element: document.querySelector('#atauchi-link'),
		image: 'url(./images/content/brands-bg.jpg)'
	},
	{
		element: document.querySelector('#odor-objects-link'),
		image: 'url(./images/content/categories-bg.jpg)'
	},
	{
		element: document.querySelector('#anna-maslovskaya-link'),
		image: 'url(./images/content/brands-bg.jpg)'
	}
];

brandsList.forEach(brand => {
	brand.element.addEventListener('mouseover', () => {
		brandMenuImage.style.backgroundImage = brand.image;
	});
});

const categoriesList = [
	{
		element: document.querySelector('#pendals-link'),
		image: 'url(./images/content/brands-bg.jpg)'
	},
	{
		element: document.querySelector('#earrings-link'),
		image: 'url(./images/content/categories-bg.jpg)'
	},
	{
		element: document.querySelector('#rings-link'),
		image: 'url(./images/content/brands-bg.jpg)'
	},
	{
		element: document.querySelector('#bracelets-link'),
		image: 'url(./images/content/categories-bg.jpg)'
	},
	{
		element: document.querySelector('#hairpins-link'),
		image: 'url(./images/content/brands-bg.jpg)'
	},
	{
		element: document.querySelector('#perfume-link'),
		image: 'url(./images/content/categories-bg.jpg)'
	},
	{
		element: document.querySelector('#clothes-link'),
		image: 'url(./images/content/brands-bg.jpg)'
	}
];

categoriesList.forEach(category => {
	category.element.addEventListener('mouseover', () => {
		categoriesMenuImage.style.backgroundImage = category.image;
	});
});





// COOKIES

const cookiesPopup = document.querySelector('#cookies-popup');
const cookiesCloseButton = document.querySelector('#cookies-close-button');
const showCookies = () => cookiesPopup.classList.remove('cookies_hidden');
const hideCookies = () => cookiesPopup.classList.add('cookies_hidden');

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
	options = {
		path: '/',
		...options
	};

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (let optionKey in options) {
		updatedCookie += "; " + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue;
		}
	}

	document.cookie = updatedCookie;
}

function areCookiesAccepted() {
	let isAccepted = getCookie('cookiesAccepted');
	if (isAccepted == 'true') {
		hideCookies();
	} else {
		showCookies();
	}
}

cookiesCloseButton.addEventListener('click', () => {
	setCookie('cookiesAccepted', 'true', {'max-age': 8000000});
	hideCookies();
});

areCookiesAccepted();





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