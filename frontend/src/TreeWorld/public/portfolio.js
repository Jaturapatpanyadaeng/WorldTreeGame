/*let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');*/
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

    /*sections.forEach(sec => {
        let top =window.screenY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >=offset && top < offset + height) {
          navLinks.forEach(links =>{
            links.classList.remove('active2');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active2')
          });  
        };
    });*/
    window.onscroll = () =>{
      navbar.classList.remove('active');
  }
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

//swipper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//darkmode
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

//scool receal
ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading, .logo_RMUTL', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .servics-container, .portfolio-box , .testmonial-wrapper', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3 , .home-content p , .about-content', { origin: 'right' });

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}