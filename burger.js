document.addEventListener("DOMContentLoaded", function() {
 const burger = document.querySelector('.burger');
 const nav = document.querySelector('.nav-links');
 const burgerDivs = document.querySelectorAll('.burger div');

 burger.addEventListener('click', () => {
     // Toggle navigation bar
     nav.classList.toggle('nav-active');

     // Burger animation
     burger.classList.toggle('toggle');

     // Set transition for each div inside the burger
     burgerDivs.forEach((div) => {
         div.style.transition = 'all 0.3s ease';
     });

     // Toggle display of navigation links
     if (nav.style.display === 'flex') {
         nav.style.display = 'none';
     } else {
         nav.style.display = 'flex';
         nav.style.flexDirection = 'column';
     }
 });
});

navSlide(); // Husk at kalde funktionen

document.addEventListener("DOMContentLoaded", function() {
 const burger = document.getElementById('burgerMenu');
 const navLinks = document.getElementById('navLinks');

 burger.addEventListener('click', function() {
     if (navLinks.style.display === 'flex') {
         navLinks.style.display = 'none';
     } else {
         navLinks.style.display = 'flex';
         navLinks.style.flexDirection = 'column';
     }
 });
});


const navSlide = () => {
 const burger = document.querySelector('.burger');
 const nav = document.querySelector('.nav-links');
 const burgerDivs = document.querySelectorAll('.burger div');

 burger.addEventListener('click', () => {
     // Toggle navigationsbaren
     nav.classList.toggle('nav-active');

     // Burger animation
     burger.classList.toggle('toggle');

     // Angiv transition til hvert div inde i burgeren
     burgerDivs.forEach((div) => {
         div.style.transition = 'all 0.6s ease';
     });
 });
}

navSlide(); // Husk at kalde funktionen


// Funktion til at vise nav links og deaktivere body og html scroll
function showNavLinks() {
navLinks.style.transform = 'translateX(0)';
document.body.style.overflow = 'hidden';
document.documentElement.style.overflow = 'hidden'; // Add this line
}

// Fukytion til at skjule nav links og aktivere body og html scroll
function hideNavLinks() {
navLinks.style.transform = 'translateX(100%)';
document.body.style.overflow = '';
document.documentElement.style.overflow = ''; 
}

var burgerMenu = document.querySelector('.burger');
var burgerImage = document.querySelector('#burger-menu-image');

burgerMenu.addEventListener('click', function() {
 burgerImage.classList.toggle('hidden');
});