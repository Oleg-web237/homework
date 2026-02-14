


// _____________________________
import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";

try {
  const headerFixed = new HeaderFixed({
    HEADER: "header",
    HEADER_FIXED: "header--fixed",
  });

  new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_MENU: "header__menu",
      HEADER_MENU_OPEN: "header__menu--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      MENU_LINK: "menu__link",
      BREAKPOINT: 1100,
      MAIN: "main",
    },
    headerFixed,
  );


} catch (error) {
  console.error(error);
}


(() => {
  const container = document.querySelector(".slider-container");
  if (!container) return;

  const wrapper = container.querySelector(".slider-wrapper");
  const slides = Array.from(wrapper.querySelectorAll(".slide"));
  const prevBtn = container.querySelector(".stories__btn-prev");
  const nextBtn = container.querySelector(".stories__btn-next");

  if (!wrapper || slides.length === 0 || !prevBtn || !nextBtn) return;

  const GAP = 24;
  let index = 0;

  const mod = (n, m) => ((n % m) + m) % m;

  function updateClasses() {
    slides.forEach((s) => s.classList.remove("is-active", "is-prev", "is-next"));
    slides[index].classList.add("is-active");
    slides[mod(index - 1, slides.length)].classList.add("is-prev");
    slides[mod(index + 1, slides.length)].classList.add("is-next");
  }

  function updatePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    const containerWidth = container.getBoundingClientRect().width;
    const offsetToCenter = (containerWidth - slideWidth) / 2;
    const x = offsetToCenter - index * (slideWidth + GAP);
    wrapper.style.transform = `translateX(${x}px)`;
  }

  function render() {
    updateClasses();
    updatePosition();
  }

  nextBtn.addEventListener("click", () => {
    index = mod(index + 1, slides.length);
    render();
  });

  prevBtn.addEventListener("click", () => {
    index = mod(index - 1, slides.length);
    render();
  });

  window.addEventListener("resize", updatePosition);

  render();
})();

(() => {
  const openBtn = document.getElementById("buyNowBtn");
  const modal = document.getElementById("buyModal");

  if (!openBtn || !modal) return;

  const closeElements = modal.querySelectorAll("[data-close]");

  function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    openBtn.focus();
  }

  openBtn.addEventListener("click", openModal);

  closeElements.forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
})();
(() => {
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
})();
// __________модал окна
function initModal(buttonId, modalId) {
  const openBtn = document.getElementById(buttonId);
  const modal = document.getElementById(modalId);

  if (!openBtn || !modal) return;

  const closeElements = modal.querySelectorAll("[data-close]");

  function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    openBtn.focus();
  }

  openBtn.addEventListener("click", openModal);

  closeElements.forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

initModal("cartBtn", "cartModal");
initModal("userBtn", "userModal");













