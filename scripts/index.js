// Initialise AOS third party library - makes animate on scroll work for the main sections
AOS.init();
// --------

// NAVBAR

const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav a');

const toggleNav = () => {
	nav.classList.toggle('expand');
};

const handleNavClick = () => {
	toggleNav();
};

for (let link of navLinks) {
	link.addEventListener('click', handleNavClick);
}

navBtn.addEventListener('click', handleNavClick);

// CAROUSEL

let viewWidth = 0;

const getTranslateXString = () => `translateX(-${viewWidth}vw)`;

const projectsWrapper = document.querySelector('.work-page__projects-wrapper');

const getNextProject = () => {
	if (viewWidth < 100) {
		viewWidth += 100;
	} else {
		viewWidth = 0;
	}
	projectsWrapper.style.transform = getTranslateXString();
};

const getPrevProject = () => {
	if (viewWidth < 100) {
		viewWidth -= 100;
	} else {
		viewWidth = 100;
	}
	projectsWrapper.style.transform = getTranslateXString();
};

const workPageTitle = document.querySelector('.work-page__title');

workPageTitle.addEventListener('click', getNextProject);
