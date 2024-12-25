document.addEventListener("DOMContentLoaded", function () {
  let toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  let mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});
