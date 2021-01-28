let iconHamburger = document.querySelector('.icon_hamburger');
let sidebar = document.querySelector('.sidebar');
let welcomeHeader = document.querySelector('.welcome h1');
let welcomeSubHeader = document.querySelector('.welcome h3');

setTimeout(() => {
	welcomeHeader.style.opacity = 1;
}, 1000);

setTimeout(() => {
	welcomeSubHeader.style.opacity = 1;
}, 2000);


iconHamburger.addEventListener('click', () => {
	iconHamburger.classList.toggle('active');
	sidebar.classList.toggle('active');
});