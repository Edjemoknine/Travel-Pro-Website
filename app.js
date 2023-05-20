let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let video = document.querySelector('.vid');
let changebtn = document.querySelectorAll('.control-btn');

menu.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

window.onscroll = () => {
    navbar.classList.remove('open');
};

changebtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let path = btn.getAttribute('data-src');
        video.src = path;
    });
});

// ***********************************************

AOS.init({
    duration: 800,
    offset: 150,
});