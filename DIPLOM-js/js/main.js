
import { initHeaderAndBurger } from "./initHeaderBurger.js";
import { initSlider } from "./slider.js";
import { initModal } from "./modal.js";
import { initBurgerCloseButton } from "./burgerCloseButton.js";
import { initSearch } from "./search.js";

document.addEventListener("DOMContentLoaded", () => {
  initSearch();

  try {
    initHeaderAndBurger();
    initSlider();

    initModal("buyNowBtn", "buyModal");
    initModal("cartBtn", "cartModal");
    initModal("userBtn", "userModal");

    initBurgerCloseButton();
  } catch (error) {
    console.error(error);
  }
});
