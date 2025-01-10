document.addEventListener("DOMContentLoaded", function () {
  //Mobile Menu
  let toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  let mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  //video modal
  const modal = document.querySelector(".modal");
  const videoButton = document.querySelector(".preview__video-button");
  const closeButton = document.querySelector(".modal__close-button");
  const videoPlayer = document.querySelector("#videoPlayer");
  //Open modal when clicked
  videoButton.addEventListener("click", function () {
    //show modal modal
    modal.style.display = "block";

    //add src to video
    videoPlayer.src =
      "https://www.youtube.com/embed/XW1aGkzyjQg?si=yyMqoDLHN_1fAiJ";
  });

  //close modal on close button click
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    videoPlayer.src = "";
  });

  //close modal on outer click
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      videoPlayer.src = "";
    }
  });
});

//Navigation Background on scroll
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});
