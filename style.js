// Header

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 100) {
    header.style.backgroundColor = 'rgba(20, 54, 66, 0.9)';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('slide');
  console.log('berjalan ga?');
});
