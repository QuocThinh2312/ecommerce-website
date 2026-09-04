export class AppHeader extends HTMLElement {
  connectedCallback() {
    const activeMenu = this.getAttribute("active-menu");
    const hideActions = this.hasAttribute("hide-actions");

    const searchFormBaseClasses = "hidden";
    const searchFormMdClasses =
      "md:bg-search-form-background md:flex md:h-9.5 md:min-w-60.75 md:items-center md:gap-8.5 md:rounded-sm md:px-[20px_12px]";
    const searchFormXsClasses =
      "xs:bg-search-form-background xs:flex xs:h-9.5 xs:w-45 @md:min-w-60.75 xs:items-center xs:gap-4 @md:gap-8.5 xs:rounded-sm xs:px-[12px_8px] @md:px-[20px_12px]";

    const searchFormResponsiveClasses = hideActions
      ? searchFormXsClasses
      : searchFormMdClasses;

    const baseLinkClass =
      "hover:decoration-primary/50 inline-block py-3 hover:underline hover:underline-offset-5 active:opacity-70 lg:px-6 lg:py-2 dark:active:opacity-85";
    const activeLinkClass =
      "lg:decoration-primary/50 lg:underline lg:underline-offset-5";

    const actionsHTML = hideActions
      ? ""
      : `
              <!-- Wishlist -->
              <a
                href="./wishlist.html"
                aria-label="Wishlist"
                class="text-primary flex size-11 items-center justify-center active:scale-[0.96] lg:size-8"
              >
                <svg
                  width="20"
                  height="17.83"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75 0.75C2.989 0.75 0.75 2.966 0.75 5.7C0.75 7.907 1.625 13.145 10.238 18.44C10.3923 18.5339 10.5694 18.5835 10.75 18.5835C10.9306 18.5835 11.1077 18.5339 11.262 18.44C19.875 13.145 20.75 7.907 20.75 5.7C20.75 2.966 18.511 0.75 15.75 0.75C12.989 0.75 10.75 3.75 10.75 3.75C10.75 3.75 8.511 0.75 5.75 0.75Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>

              <!-- Cart -->
              <a
                href="./cart.html"
                aria-label="Shopping Cart"
                class="text-primary flex size-11 items-center justify-center active:scale-[0.96] lg:size-8"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 5H7L10 22H26"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
        `;

    this.innerHTML = `
      <header class="border-primary/30 border-[0.5px] border-b">
      <!-- Top Bar -->
      <div class="bg-primary py-3">
        <div class="relative container flex justify-center lg:justify-end">
          <div
            class="flex w-max flex-col items-center gap-1 sm:flex-row sm:gap-2 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            <p class="text-foreground-inverse text-md text-center">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <a
              href="#!"
              class="text-foreground-inverse text-md font-semibold underline [text-decoration-skip-ink:none] active:opacity-85 dark:active:opacity-70"
            >
              ShopNow
            </a>
          </div>

          <!-- Dropdown -->
          <div
            class="group hidden lg:flex lg:cursor-pointer lg:items-center lg:gap-3"
          >
            <span class="text-foreground-inverse text-md">English</span>
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              class="text-foreground-inverse transition-[rotate] duration-250 group-hover:rotate-180"
            >
              <path
                d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="container py-[20px_8px] md:py-[40px_16px]">
        <div class="@container xs:flex xs:items-center xs:justify-between relative">
          <div class="xs:flex xs:items-center xs:gap-5 sm:gap-10">
            <button
              id="menu-open"
              aria-label="Open navigation menu"
              class="text-primary flex size-11 items-center justify-center active:scale-[0.96] lg:hidden lg:size-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </button>

            <!-- Logo -->
            <a
              href="/"
              class="font-secondary text-primary xs:static xs:translate-none absolute top-1/2 left-1/2 order-2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold tracking-[0.03em] active:opacity-70 lg:order-1 dark:active:opacity-85"
            >
              Exclusive
            </a>
          </div>

          <!-- Menu overlay -->
          <div
            id="menu-overlay"
            class="bg-primary/20 invisible fixed inset-0 z-99 opacity-0 transition-[opacity_visibility] duration-300 ease-out"
          ></div>

          <!-- Nav -->
          <nav
            id="nav"
            aria-label="Main navigation"
            class="bg-secondary xs:px-7 xs:pt-8 fixed top-0 left-0 z-100 order-1 h-dvh w-[60vw] max-w-80 -translate-x-full px-3 pt-4 transition-[translate] duration-300 ease-out lg:static lg:order-2 lg:h-auto lg:w-auto lg:max-w-none lg:translate-none lg:bg-transparent lg:p-0"
          >
            <div class="mb-5 flex items-center justify-between lg:hidden">
              <!-- Logo -->
              <a
                href="/"
                class="font-secondary text-primary text-xl font-bold tracking-[0.03em] active:opacity-70 dark:active:opacity-85"
              >
                Exclusive
              </a>
              <button
                id="menu-close"
                aria-label="Close navigation menu"
                class="text-primary flex size-11 items-center justify-center active:scale-[0.96] lg:size-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div class="h-[calc(100dvh-110px)] overflow-y-auto md:overflow-visible md:h-auto">
              <ul
                class="text-primary flex flex-col items-start text-base lg:flex-row lg:items-center"
              >
                <li>
                  <a
                    href="/"
                    class="${baseLinkClass} ${activeMenu === "home" ? activeLinkClass : ""}"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="./contact.html"
                    class="${baseLinkClass} ${activeMenu === "contact" ? activeLinkClass : ""}"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="./about.html"
                    class="${baseLinkClass} ${activeMenu === "about" ? activeLinkClass : ""}"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="./sign-up.html"
                    class="${baseLinkClass} ${activeMenu === "sign-up" ? activeLinkClass : ""}"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>

              <hr class="border-primary my-4 md:hidden" />

              <ul class="flex flex-col md:hidden">
                <li>
                  <a
                    href="#!"
                    class="text-primary flex items-center justify-between py-3 text-base active:opacity-70"
                  >
                    Woman's Fashion

                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    class="text-primary flex items-center justify-between py-3 text-base active:opacity-70"
                  >
                    Men’s Fashion

                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    class="text-primary inline-block py-3 text-base active:opacity-70"
                  >
                    Electronics
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    class="text-primary inline-block py-3 text-base active:opacity-70"
                  >
                    Home & Lifestyle
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    class="text-primary inline-block py-3 text-base active:opacity-70"
                  >
                    Medicine
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    class="text-primary inline-block py-3 text-base active:opacity-70"
                  >
                    Sports & Outdoor
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    class="text-primary inline-block py-3 text-base active:opacity-70"
                  >
                    Baby’s & Toys
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    class="text-primary inline-block py-3 text-base active:opacity-70"
                  >
                    Groceries & Pets
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    class="text-primary inline-block py-3 text-base active:opacity-70"
                  >
                    Health & Beauty
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <!-- Actions -->
          <div class="xs:order-3 xs:flex hidden md:items-center ${hideActions ? "" : "md:gap-6"}">
            <!-- Search Form -->
            <form
              role="search"
              action=""
              method="get"
              class="${searchFormBaseClasses} ${searchFormResponsiveClasses}"
            >
              <label for="search-input" class="sr-only">Search products</label>
              <input
                type="text"
                name="q"
                id="search-input"
                autocomplete="off"
                spellcheck="false"
                placeholder="What are you looking for?"
                class="placeholder:text-primary/50 text-primary h-full w-full text-sm placeholder:text-sm"
              />
              <button
                type="submit"
                class="flex h-6 w-6 shrink-0 items-center justify-center active:scale-[0.96]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-primary"
                >
                  <path
                    d="M16.75 16.75L12.9723 12.9656M15.0658 7.90789C15.0658 9.80629 14.3117 11.6269 12.9693 12.9693C11.6269 14.3117 9.80629 15.0658 7.90789 15.0658C6.0095 15.0658 4.18886 14.3117 2.8465 12.9693C1.50413 11.6269 0.75 9.80629 0.75 7.90789C0.75 6.0095 1.50413 4.18886 2.8465 2.8465C4.18886 1.50413 6.0095 0.75 7.90789 0.75C9.80629 0.75 11.6269 1.50413 12.9693 2.8465C14.3117 4.18886 15.0658 6.0095 15.0658 7.90789V7.90789Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </form>

            <!-- Icons -->
            <div class="xs:flex xs:items-center xs:gap-2 lg:gap-4">
              ${actionsHTML}
            </div>
          </div>
        </div>
      </div>
    </header>
    `;
  }
}

customElements.define("app-header", AppHeader);
