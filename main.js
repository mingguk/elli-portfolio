'usd strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log(`navbarHeight : ${navbarHeight}`);

    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})

// Handle scrolloing when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
    
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoViews(link);
})

// handle when Contact Me is clicked

const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', () => {
    const target = event.target;
    const link = target.dataset.link;
    scrollIntoViews(link);
})



// make home slowly fade to transparent as the woindow scrolls down

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

// Show 'arrow up' button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// Move to home when arrow-up button clicked

arrowUp.addEventListener('click', () => {
    scrollIntoViews('#home');
})



function scrollIntoViews(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

// make Up arrow button

//1. 홈 세로 길이밑으로 내려가면 우측 하단에 애로우 키 추가
//2. 홈세로 길이 안으로 들어오면 우측하단 애로우 키 감추기
//3. 애로우키 누르면 홈, 최상단으로 이동시키기

