export const initCartActions = () => {
  const cartForm = document.querySelector("#cart-form");
  const productList = document.querySelector("#cart-item-list");
  const summarySubtotal = document.querySelector(
    'output[name="cart-subtotal"]',
  );
  const summaryTotal = document.querySelector('output[name="cart-total"]');

  if (!cartForm || !productList || !summarySubtotal || !summaryTotal) return;

  const formatMoney = (amount) => `$${amount}`;
  const extractNumber = (str) => Number(str.replace(/[^0-9.]/g, "")) || 0;

  const updateCartTotal = () => {
    const products = productList.querySelectorAll("li");
    const shippingFee = document.querySelector("#shipping-fee").textContent;

    const SHIPPING_FEE =
      shippingFee === "Free" ? 0 : Number(shippingFee.slice(1));
    let totalCart = 0;

    products.forEach((product) => {
      const subtotal = product.querySelector("output")?.textContent || "0";
      totalCart += extractNumber(subtotal);
    });

    summarySubtotal.textContent = formatMoney(totalCart);
    summaryTotal.textContent = formatMoney(totalCart + SHIPPING_FEE);
  };

  const updateProduct = (product, newValue) => {
    const input = product.querySelector("input");
    const price = Number(product.querySelector("data").value) || 0;
    const subtotalOutput = product.querySelector("output");
    const qty = Math.max(1, Math.min(999, Number(newValue) || 1));

    input.value = qty < 10 ? `0${qty}` : qty;
    subtotalOutput.textContent = formatMoney(price * qty);
  };

  const initialProducts = productList.querySelectorAll("li");
  initialProducts.forEach((product) => {
    const input = product.querySelector("input");
    if (input) {
      updateProduct(product, input.value);
    }
  });

  productList.addEventListener("click", (e) => {
    const increaseBtn = e.target.closest('[aria-label="Increase quantity"]');
    const decreaseBtn = e.target.closest('[aria-label="Decrease quantity"]');

    if (!increaseBtn && !decreaseBtn) return;

    const product = e.target.closest("li");
    if (!product) return;

    const input = product.querySelector("input");
    const currentQty = Number(input.value) || 1;

    if (increaseBtn) updateProduct(product, currentQty + 1);
    if (decreaseBtn) updateProduct(product, currentQty - 1);
  });

  productList.addEventListener("change", (e) => {
    if (e.target.tagName !== "INPUT") return;

    const product = e.target.closest("li");
    if (!product) return;

    updateProduct(product, e.target.value);
  });

  productList.addEventListener("input", (e) => {
    if (e.target.tagName !== "INPUT") return;

    if (e.target.value.length > 3) {
      e.target.value = e.target.value.slice(0, 3);
    }
  });

  cartForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateCartTotal();
  });
};
