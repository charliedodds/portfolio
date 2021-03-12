const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav a');

const toggleNav = () => {
	nav.classList.toggle('expand');
};

const handleNavClick = (e) => {
	toggleNav();
};

for (let link of navLinks) {
	link.addEventListener('click', handleNavClick);
}

navBtn.addEventListener('click', handleNavClick);
