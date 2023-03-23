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
// const activePage = window.location.pathname;
// const activeLink = document.querySelectorAll('nav ul li a').forEach((link) => {
//   if (link.href.includes(`${activePage}`)) {
//     link.classList.add('active');
//   }
// });

// slider right
const animationRight = document.querySelectorAll('.slide-right');
window.addEventListener('scroll', slideRight);

slideRight();

function slideRight() {
  const triggerAnimation = (window.innerHeight / 5) * 4;

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
  const triggerAnimation = (window.innerHeight / 5) * 4;

  animationLeft.forEach((left) => {
    const animateLeft = left.getBoundingClientRect().top;

    if (animateLeft < triggerAnimation) {
      left.classList.add('show');
    }
  });
}

// Acordion footer

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

// store alamat
const address = document.querySelectorAll('.address-store');
const ariobimos = document.querySelectorAll('.map-store iframe.ariobimo');
const woodlands = document.querySelectorAll('.map-store iframe.woodland');
const ikeas = document.querySelectorAll('.map-store iframe.ikea');

address.forEach((addressess) => {
  addressess.addEventListener('click', () => {
    if (addressess.classList.contains('active')) {
    } else {
      address.forEach((addres) => {
        addres.classList.remove('active');
        ariobimos.forEach((ario) => {
          ario.classList.remove('active');
        });
        woodlands.forEach((wood) => {
          wood.classList.remove('active');
        });
        ikeas.forEach((ike) => {
          ike.classList.remove('active');
        });
      });
      addressess.classList.add('active');
      ariobimos.forEach((ariobimo) => {
        if (addressess.classList.contains('ariobimo')) {
          ariobimo.classList.add('active');
        }
      });
      woodlands.forEach((woodland) => {
        if (addressess.classList.contains('woodland')) {
          woodland.classList.add('active');
        }
      });
      ikeas.forEach((ikea) => {
        if (addressess.classList.contains('ikea')) {
          ikea.classList.add('active');
        }
      });
    }
  });
});

// address.forEach((addressess) => {
//   addressess.addEventListener('click', () => {
//     if (addressess.classList.contains('ariobimo')) {
//       addressess.classList.add('active');
//       ariobimos.forEach((ariobimo) => {
//         ariobimo.classList.add('active');
//       });
//     } else {
//       address.forEach((addres) => {
//         addres.classList.remove('active');
//         ariobimos.forEach((ario) => {
//           ario.classList.remove('active');
//         });
//       });
//       addressess.classList.remove('active');
//       ariobimo.classList.add('active');
//     }
//     if (addressess.classList.contains('woodland')) {
//       addressess.classList.add('active');
//     }
//   });
// });
