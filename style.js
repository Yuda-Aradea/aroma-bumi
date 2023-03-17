// background
const nav = document.querySelector('.nav-home');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 150) {
    nav.style.backgroundColor = 'rgba(20, 54, 66, 1)';
  } else {
    nav.style.backgroundColor = 'transparent';
  }
});

// menu bar mobile
const dropdownToglle = document.querySelector('.toggle-menu');
const dropdownIcon = document.querySelector('.toggle-menu i');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToglle.onclick = function () {
  dropdownMenu.classList.toggle('open');
  const isOpen = dropdownMenu.classList.contains('open');
  dropdownIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

// actove link
const activePage = window.location.pathname;
const activeLink = document.querySelectorAll('nav ul li a').forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
});

// slider right
const animationRight = document.querySelectorAll('.slide-right');
window.addEventListener('scroll', slideRight);

slideRight();

function slideRight() {
  const triggerAnimation = (window.innerHeight / 6) * 4;

  animationRight.forEach((right) => {
    const animateRight = right.getBoundingClientRect().top;

    if (animateRight < triggerAnimation) {
      right.classList.add('show');
    }
  });
}

// slider left
const animationLeft = document.querySelectorAll('.slide-left');
window.addEventListener('scroll', slideLeft);

slideLeft();
function slideLeft() {
  const triggerAnimation = (window.innerHeight / 6) * 4;

  animationLeft.forEach((left) => {
    const animateLeft = left.getBoundingClientRect().top;

    if (animateLeft < triggerAnimation) {
      left.classList.add('show');
    }
  });
}

// Acordion

const acordionMenus = document.querySelectorAll('.acordion-menu');

acordionMenus.forEach((acordionMenu) => {
  acordionMenu.addEventListener('click', () => {
    if (acordionMenu.classList.contains('active')) {
      acordionMenu.classList.remove('active');
    } else {
      acordionMenus.forEach((acordion) => {
        acordion.classList.remove('active');
      });
      acordionMenu.classList.toggle('active');
    }
  });
});
