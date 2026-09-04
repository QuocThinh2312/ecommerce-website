export function initMenuDrawer() {
  const openBtn = document.getElementById("menu-open");
  const closeBtn = document.getElementById("menu-close");
  const overlay = document.getElementById("menu-overlay");
  const nav = document.getElementById("nav");

  if (!openBtn || !closeBtn || !overlay || !nav) return;

  const toggleMenu = (shouldOpen) => {
    if (shouldOpen) {
      overlay.classList.remove("invisible", "opacity-0");
      overlay.classList.add("opacity-100");

      nav.classList.remove("-translate-x-full");

      document.body.classList.add("overflow-hidden");
    } else {
      overlay.classList.remove("opacity-100");
      overlay.classList.add("invisible", "opacity-0");

      nav.classList.add("-translate-x-full");

      document.body.classList.remove("overflow-hidden");
    }
  };

  openBtn.addEventListener("click", () => toggleMenu(true));
  closeBtn.addEventListener("click", () => toggleMenu(false));

  overlay.addEventListener("click", () => toggleMenu(false));

  document.addEventListener("keydown", (e) => {
    const isMenuOpen = overlay.classList.contains("opacity-100");
    if (e.key === "Escape" && isMenuOpen) {
      toggleMenu(false);
    }
  });
}

export function initBackToTop() {
  const btn = document.createElement("button");
  btn.id = "back-to-top";
  btn.setAttribute("aria-label", "Move to the top");

  btn.className =
    "bg-product-item-background invisible fixed right-8 bottom-8 z-50 flex size-10 translate-y-4 items-center justify-center rounded-full text-black opacity-0 transition-[opacity,visibility,translate] duration-300 hover:bg-gray-200 active:scale-[0.96] md:right-22 md:bottom-8 md:size-11.5";

  btn.innerHTML = `
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 17V1M1 8L8 1L15 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  document.body.appendChild(btn);

  let isVisible = false;

  window.addEventListener("scroll", () => {
    const shouldBeVisible = window.scrollY > 300;

    if (shouldBeVisible && !isVisible) {
      btn.classList.remove("opacity-0", "invisible", "translate-y-4");
      btn.classList.add("opacity-100", "visible", "translate-y-0");
      isVisible = true;
    } else if (!shouldBeVisible && isVisible) {
      btn.classList.add("opacity-0", "invisible", "translate-y-4");
      btn.classList.remove("opacity-100", "visible", "translate-y-0");
      isVisible = false;
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
    });
  });
}
