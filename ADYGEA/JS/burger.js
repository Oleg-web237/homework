const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
const menuLinks = document.querySelectorAll('.menu__link');

function closeMenu() {
  burger.classList.remove('burger--open');
  menu.classList.remove('header__menu--open');

  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Открыть меню');
}

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--open');
  menu.classList.toggle('header__menu--open');

  const isOpen = burger.classList.contains('burger--open');

  burger.setAttribute('aria-expanded', isOpen);
  burger.setAttribute(
    'aria-label',
    isOpen ? 'Закрыть меню' : 'Открыть меню'
  );
});

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});