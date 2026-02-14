export function initSlider() {
  const container = document.querySelector(".slider-container");
  if (!container) return;

  const wrapper = container.querySelector(".slider-wrapper");
  const slides = wrapper ? Array.from(wrapper.querySelectorAll(".slide")) : [];
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
}
