export function initBurgerCloseButton() {
  const menu = document.getElementById("header__menu");
  const burgerBtn = document.querySelector(".header__burger");
  const closeBtn = menu?.querySelector(".button__cross");
  const pageBody = document.querySelector(".page__body");

  if (!menu || !burgerBtn || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("header__menu--open");
    burgerBtn.classList.remove("burger--open");
    pageBody?.classList.remove("page__body--no-scroll");

    burgerBtn.setAttribute("aria-expanded", "false");
    burgerBtn.setAttribute("aria-label", "Открыть меню");
  });
}
