const root = document.documentElement;
const body = document.body;
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".main-nav a");

function setViewportHeight() {
  root.style.setProperty("--page-h", `${window.innerHeight}px`);
}

function closeMenu() {
  body.classList.remove("is-menu-open");
  menuButton?.setAttribute("aria-expanded", "false");
}

setViewportHeight();
window.addEventListener("resize", () => {
  setViewportHeight();

  if (window.innerWidth > 767) {
    closeMenu();
  }
});

menuButton?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("is-menu-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("is-active"));
    link.classList.add("is-active");
    closeMenu();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
