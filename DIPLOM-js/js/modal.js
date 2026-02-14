


// ________________________________
export function initModal(buttonId, modalId) {


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
