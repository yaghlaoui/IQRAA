const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const menuToggle = document.querySelector('.menuToggle');
const fade = document.querySelector('.fade');

hamburger.addEventListener("click", () => {
	navlinks.classList.toggle("open");
	logo.classList.toggle("fade");
	links.forEach(link => {
		link.classList.toggle("fade");
	});
});


window.addEventListener('scroll', function(){
	const nav = document.querySelector('nav');
	nav.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu(){
	navlinks.classList.toggle('open');
	logo.classList.toggle('fade');
	links.forEach(link => {
		link.classList.toggle("fade");
	});
	document.documentElement.style.scrollBehavior = "smooth";
}


$(".gallery").magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery:{
		enabled: true
	}
});

 
