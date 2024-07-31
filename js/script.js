let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
let scrollBar = document.querySelector('.header .flex .scroll-bar');

menuBtn.addEventListener('click',() =>{
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('nav-toggle');
  scrollIndicator();
}

function scrollIndicator(){

  let maxHeight = window.document.body.scrollHeight - window.innerHeight;
  let percentage = ((window.scrollY) / maxHeight) * 100;
  scrollBar.style.width = percentage + '%';

}