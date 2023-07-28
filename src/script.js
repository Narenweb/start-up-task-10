import './sass/main.scss'

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar-container');
const nav = document.querySelector('.navbar');
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    nav.classList.toggle('nav-active');
})

document.addEventListener('scroll',()=>{
    const position=window.scrollY;
    if(position>=1){
        navbar.classList.add('navbar-fixed');
    }
    else{
        navbar.classList.remove('navbar-fixed');

    }
})