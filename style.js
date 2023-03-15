const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 150) {
    nav.style.backgroundColor = 'rgba(20, 54, 66, 1)';
  } else {
    nav.style.backgroundColor = 'transparent';
  }
});

const dropdownToglle = document.querySelector('.toggle-menu');
const dropdownIcon = document.querySelector('.toggle-menu i');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToglle.onclick = function () {
  dropdownMenu.classList.toggle('open');
  const isOpen = dropdownMenu.classList.contains('open');
  dropdownIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};
