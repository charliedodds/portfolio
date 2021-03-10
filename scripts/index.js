const nav = document.querySelector('nav');

const toggleNav = (e) => {
	nav.classList.toggle('expand');
};

nav.addEventListener('click', toggleNav);
