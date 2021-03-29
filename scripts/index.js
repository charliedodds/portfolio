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

const projectsWrapper = document.querySelector('.projects-carousel__projects-wrapper');
const indicators = document.querySelectorAll('.fa-circle');

let viewingProject = 0;

const getTranslateXString = () => `translateX(-${viewingProject * 100}vw)`;

const updateProjectIndicators = () => {
	indicators.forEach((circle) => {
		circle.classList.add('far');
		circle.classList.remove('fas');
	});
	indicators[viewingProject].classList.add('fas');
};

const getNextProject = () => {
	if (viewingProject < 1) {
		viewingProject += 1;
	} else {
		viewingProject = 0;
	}
	updateProjectIndicators();
	projectsWrapper.style.transform = getTranslateXString();
};

const getPrevProject = () => {
	if (viewingProject >= 1) {
		viewingProject -= 1;
	} else {
		viewingProject = 1;
	}
	updateProjectIndicators();
	projectsWrapper.style.transform = getTranslateXString();
};

const rightBtn = document.querySelector('.right-btn');

rightBtn.addEventListener('click', getNextProject);

const leftBtn = document.querySelector('.left-btn');

leftBtn.addEventListener('click', getPrevProject);
