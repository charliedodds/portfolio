const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav a');

const toggleClasses = () => {
	nav.classList.toggle('expand');
	nav.classList.toggle('collapse');
	navBtn.classList.toggle('nav-btn--clicked');
};

const handleNavClick = (e) => {
	toggleClasses();
};

for (let link of navLinks) {
	link.addEventListener('click', handleNavClick);
}

navBtn.addEventListener('click', handleNavClick);
