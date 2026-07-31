initToggle({
  openSelector: "[data-modal-open]",
  closeSelector: "[data-modal-close]",
  targetSelector: "[data-modal]",
});

initToggle({
  openSelector: "[data-mobile-open]",
  closeSelector: "[data-mobile-close]",
  targetSelector: "[data-mobile]",
});

function initToggle({ openSelector, closeSelector, targetSelector }) {
  const openBtn = document.querySelector(openSelector);
  const closeBtn = document.querySelector(closeSelector);
  const target = document.querySelector(targetSelector);

  if (!openBtn || !closeBtn || !target) return;

  function toggle() {
    target.classList.toggle("is-open");
  }

  openBtn.addEventListener("click", toggle);
  closeBtn.addEventListener("click", toggle);
}

