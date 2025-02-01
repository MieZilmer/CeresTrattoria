document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const burgerDivs = document.querySelectorAll('.burger div');

    burger.addEventListener('click', () => {

        // Toggle display af navigations links
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
        }

         // Toggle burger class
             burger.classList.toggle('toggle');

         // Animate burger divs
            burgerDivs.forEach((div) => {
            div.style.transition = 'all 0.3s ease';
        });
    });
});

