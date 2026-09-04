export function initProductActions() {
  document.addEventListener("click", (event) => {
    const wishlistBtn = event.target.closest('[data-action="toggle-wishlist"]');
    if (wishlistBtn) {
      wishlistBtn.classList.toggle("text-accent");

      const icon = wishlistBtn.querySelector("svg");
      if (icon) icon.classList.toggle("fill-current");

      return;
    }

    const cartBtn = event.target.closest('[data-action="add-to-cart"]');
    if (cartBtn) {
      cartBtn.classList.remove("text-primary");
      cartBtn.classList.add("text-accent");

      let currentQty = parseInt(cartBtn.dataset.qty || "0", 10);

      ++currentQty;

      cartBtn.dataset.qty = currentQty.toString();

      const badge = cartBtn.querySelector(".cart-badge");
      if (badge) {
        badge.textContent = currentQty > 99 ? "99+" : currentQty;

        badge.classList.remove("opacity-0");
        badge.classList.add("opacity-100");

        badge.classList.add("scale-110");
        setTimeout(() => badge.classList.remove("scale-110"), 150);
      }
    }
  });
}
