

const hamburger = document.querySelector('.hamburger-btn');
const navContainer = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar')
const closeNavBtn = document.querySelector('.close-nav-btn');

hamburger.addEventListener('click', toggleHamburger);
closeNavBtn.addEventListener('click', closeNav);


function toggleHamburger() {
    navbar.style.transform = 'translateX(0)';
    navContainer.style.visibility = 'visible';
};

function closeNav() {
    navbar.style.transform = 'translateX(100vw)';
    navContainer.style.visibility = 'hidden';
};

navContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-menu')) {
        closeNav()
    }
})








   
  





