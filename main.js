const navbar = document.getElementById('nav-bar');
const menu = document.getElementById('menu');
const navlink = document.querySelectorAll('.nav-link');
const takeup = document.getElementById('take');


/*------------------navbar toogle-------------------*/
if (menu) {
  menu.addEventListener('click', () => {
    navbar.classList.toggle('left-[0]');
    menu.classList.toggle('ri-close-large-line');
  })
}

if (navlink) {
  navlink.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('left-[0]');
        menu.classList.remove('ri-close-large-line');
  })
})
}


/*------------------scrollup-------------------*/
const takeUp = () => {
  if (scrollY > 1000) {
    takeup.classList.remove('bottom-[-100%]');
    takeup.classList.add('bottom-10');
  } else {
    takeup.classList.add('bottom-[-100%]');
    takeup.classList.remove('bottom-10');
  }
}

window.addEventListener('scroll', takeUp);


/*------------------active link-------------------*/
const activeLink = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = 'home';

  sections.forEach(section => {
    const sectionTop = section.offsetTop

    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute('id')
    }
  })

  navLinks.forEach(item => {
    item.classList.remove('active')

    if (item.href.includes(current)) {
      item.classList.add('active')
    }
  })
}

window.addEventListener('scroll', activeLink)



/*------------------swiperjs-------------------*/
const swiper1 = new Swiper('.swiper1', {
  // Optional parameters

    speed: 400,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
        disableOnIntaraction: false,
    },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  grabCursor: true,

  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});


/*---------------------scrol reavel animation-------------------*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '150px',
    duration: 1000,
    delay: 300,
    reset: true,
})

sr.reveal(`.home__image`, {delay: 200, scale: 0.5, opacity: 0})
sr.reveal(`.about__img`, {origin:'right'})
sr.reveal(`.bio__icon, .work__icon, .skill__icon, .contact__icon, .review__icon`, {delay: 200, scale: 0.5, origin:'left'})
sr.reveal(`.contact__form`, {origin:'bottom'})
sr.reveal(`.skill__data`, {origin: 'top', duration: 1000})
