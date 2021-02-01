// DOM ELEMENTS
const counter = document.querySelector('.counter');
const footer = document.querySelector('.footer');
const lastSection = Array.from(document.querySelectorAll('.section')).pop();


// SECTION COUNTER
const numberOfSections = Array.from(document.querySelectorAll('.section')).length;
counter.textContent = `1/${numberOfSections}`;


// FULLPAGE.JS
const myFullpage = new fullpage('#fullpage', {
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
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
	sectionsColor : ['#FAFAFA', '#FAFAFA', '#FAFAFA', '#FAFAFA'],
	paddingTop: '0',
	paddingBottom: '0',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	onLeave: function(origin, destination, direction){
		counter.textContent = `${destination.index + 1}/${numberOfSections}`;
	},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});


// FOOTER
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
	if ((activeSection.isLast) && (event.key == 'ArrowUp')) hideFooter();
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