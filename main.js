

const hamburger = document.querySelector('.hamburger-btn');
const navContainer = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar')
const closeNavBtn = document.querySelector('.close-nav-btn');
const directorsCardBtn = document.querySelectorAll('.directors-card-img__2');
const directorsCardCloseBtn = document.querySelectorAll('.directors-back-card__close');
const directorsFrontCard = document.querySelectorAll('.directors-front-card');
const directorsBackCard = document.querySelectorAll('.directors-back-card');

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

directorsCardBtn.forEach((cardBtn, i) => {
    cardBtn.addEventListener('click', () => {
        directorsFrontCard[i].classList.toggle('hide-front-card');
        directorsBackCard[i].style.display = 'block';
        console.log ('clicked')
    })
})

directorsCardCloseBtn.forEach((closeBtn, i) => {
    closeBtn.addEventListener('click', () => {
        directorsFrontCard[i].classList.remove('hide-front-card');
        directorsBackCard[i].style.display = 'none';
        console.log ('clicked')
    })
})







   
  





