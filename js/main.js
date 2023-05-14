document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');

	const navList = document.querySelector('.navbar-collapse');
	const navLink = document.querySelectorAll('.nav-link');

	const burger = document.querySelector('.fa-bars');
	const heroText = document.querySelector('.hero-text');

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	function toggleBurger() {
		heroText.classList.toggle('hero-text2');
	}

	navLink.forEach((link) =>
		link.addEventListener('click', () => {
			navList.classList.remove('show');
			// heroText.classList.remove('hero-text2');
		})
	);

	window.addEventListener('scroll', addShadow);

	// burger.addEventListener('click', toggleBurger);
});
