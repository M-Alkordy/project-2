/* start navbar */
const home = document.getElementById('HomeNav');
const Portfolio = document.getElementById('PortfolioNav');
const Services = document.getElementById('ServicesNav');
const Blog = document.getElementById('BlogNav');
const Clients = document.getElementById('ClientsNav');
const AboutMe = document.getElementById('AboutMeNav');
const Contact = document.getElementById('ContactNav');
const scroll = document.getElementById('border_horizontal_scroll');
const links = document.querySelectorAll('.navbar_items a');
const HomeSection = document.getElementById("HomeSection");
const PortfolioSection = document.getElementById("PortfolioSection");
const ServicesSection = document.getElementById("ServicesSection");
const BlogSection = document.getElementById("BlogSection");
const ClientsSection = document.getElementById("ClientsSection");
const boutMeSection = document.getElementById("boutMeSection");
const ContactSection = document.getElementById("ContactSection");

function homeActive() {
    scroll.style.transform = `translateX(0px)`;
    scroll.style.display = `block`;
    links.forEach(element => {
        element.classList.remove('active')
    });
    home.classList.add('active')
}

function PortfolioActive() {
    scroll.style.transform = `translateX(7.3206vw)`;
    links.forEach(element => {
        element.classList.remove('active')
    });
    Portfolio.classList.add('active')
}

function ServicesActive() {
    scroll.style.transform = `translateX(16.5vw)`;
    links.forEach(element => {
        element.classList.remove('active')
    });
    Services.classList.add('active')
}

function ClientsActive() {
    scroll.style.transform = `translateX(31.9912vw)`;
    links.forEach(element => {
        element.classList.remove('active')
    });
    Clients.classList.add('active')
}

function BlogActive() {
    scroll.style.transform = `translateX(25.4758vw)`;
    links.forEach(element => {
        element.classList.remove('active')
    });
    Blog.classList.add('active')
}

function AboutMeActive() {
    scroll.style.transform = `translateX(39.751vw)`;
    links.forEach(element => {
        element.classList.remove('active')
    });
    AboutMe.classList.add('active')
}

function ContactActive() {
    scroll.style.transform = `translateX(50.1464vw)`;
    links.forEach(element => {
        element.classList.remove('active')
    });
    Contact.classList.add('active')
}

home.addEventListener('click', homeActive);
Portfolio.addEventListener('click', PortfolioActive);
Services.addEventListener('click', ServicesActive);
Clients.addEventListener('click', ClientsActive);
Blog.addEventListener('click', BlogActive);
AboutMe.addEventListener('click', AboutMeActive);
Contact.addEventListener('click', ContactActive);
/* homeActive(); */

let autoMove = () => {
    if (scrollY >= HomeSection.offsetTop -300 && scrollY < PortfolioSection.offsetTop -300) {
        homeActive();
      } else if (scrollY > PortfolioSection.offsetTop -300  && scrollY < ServicesSection.offsetTop -300) {
        PortfolioActive();
      } else if (scrollY > ServicesSection.offsetTop -300 && scrollY < BlogSection.offsetTop -300) {
        ServicesActive();
      } else if (scrollY >BlogSection.offsetTop -300 && scrollY < ClientsSection.offsetTop -300) {
        BlogActive();
      }else if (scrollY >ClientsSection.offsetTop -300 && scrollY < boutMeSection.offsetTop -300) {
        ClientsActive();
      }else if (scrollY >boutMeSection.offsetTop -300 && scrollY < ContactSection.offsetTop -300) {
        AboutMeActive();
      }else if (scrollY >ContactSection.offsetTop -300) {
        ContactActive();
      }
};
    
window.addEventListener("scroll", () => autoMove());
/* end navbar */

/* start slider */
const slide = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".left_arrow");
const rightArrow = document.querySelector(".right_arrow");
let CurrentSlide = 0;
const SlideLen = slide.length;

const goToSlide = function (current) {
    slide.forEach(
    (s, i) => (s.style.transform = `translateX(${-52.855 * current}vw)`)
  );
};

//*********defalut*********
goToSlide(0);

CurrentSlide = 0;

//*********nextSlide*********

const NextSlide = function () {
  if (CurrentSlide == SlideLen-1) CurrentSlide = 0;
  else CurrentSlide++;
  goToSlide(CurrentSlide);
};
rightArrow.addEventListener("click", NextSlide);

//*********prevSlide*********

const PrevSlide = function () {
  if (CurrentSlide == 0) CurrentSlide = SlideLen-1;
  else CurrentSlide--;
  goToSlide(CurrentSlide);
};

leftArrow.addEventListener("click", PrevSlide);

/* end slider */