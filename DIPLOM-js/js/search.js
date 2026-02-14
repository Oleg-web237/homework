(function () {
  function init() {
    const openBtn = document.getElementById("openMobileSearch");
    const overlay = document.getElementById("mobileSearch");
    const closeBtn = document.getElementById("closeMobileSearch");
    const input = document.getElementById("mobileSearchInput");

    if (!openBtn || !overlay || !closeBtn || !input) return;

    const isMobile = () => window.innerWidth < 768;

    function openSearch() {
      if (!isMobile()) return;
      overlay.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
      openBtn.setAttribute("aria-expanded", "true");
      setTimeout(() => input.focus(), 0);
    }

    function closeSearch() {
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      openBtn.setAttribute("aria-expanded", "false");
    }

    openBtn.addEventListener("click", openSearch);
    closeBtn.addEventListener("click", closeSearch);

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeSearch();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("is-open")) closeSearch();
    });

    window.addEventListener("resize", () => {
      if (!isMobile() && overlay.classList.contains("is-open")) closeSearch();
    });
  }

  // если DOM уже готов — стартуем сразу
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
