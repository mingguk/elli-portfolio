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


// Show works
// 1. front back etc 클릭 이벤트 체크
// 2. 각 버튼 눌리면 다른 얘들에 클래스 추가 (숨기기)
// 3. all 이면 달렸던 것 리무브

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    projectContainer.classList.add('anim-out')
    setTimeout(() => {
    projects.forEach((project) => {
        if (filter === '*' || filter === project.dataset.type) {
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    });
 
        projectContainer.classList.remove('anim-out');
    }, 300);
});


function scrollIntoViews(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

