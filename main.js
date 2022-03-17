const menuBtn = document.querySelector('.menuBurger');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    var overlay = document.getElementById('nav')
    overlay.style.left = "0%"
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    var overlay = document.getElementById('nav')
    overlay.style.left = '-100%'
  }
});