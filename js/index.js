document.addEventListener("DOMContentLoaded", function () {
  let toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  let mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
