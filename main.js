const burger = document.querySelector(".navbar__mobile-burger");
const submenuLinks = document.querySelectorAll(".mobile-submenu__links li");
const submenuOverlay = document.querySelector(".mobile-submenu__overlay");
const html = document.querySelector("html");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  // SCROLL TO TOP
  window.scrollTo({ top: 0, behavior: "smooth" });
  // SHOW OVERLAY WHEN MENU BUTTON CLICKED
  submenuOverlay.classList.toggle("mobile-submenu__overlay--active");
  // DISABLE SCROLL WHEN MENU OPENED
  body.classList.toggle("overflow-y-hidden");
  html.classList.toggle("overflow-y-hidden");
  submenuOverlay.classList.toggle("overflow-hidden");
  // BURGER TOGGLE
  burger.classList.toggle("toggle");
  // SLIDE IN SUBMENU LINKS
  submenuLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `slide-in-links 0.5s ease forwards ${
        index / 7 + 0.2
      }s`;
    }
  });
});
