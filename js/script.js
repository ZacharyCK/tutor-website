// Once the content on the page loads
document.addEventListener("DOMContentLoaded", function () {
  // make variables for the toggle (hamburger) button and the mobile menu
  // that is to be displayed when the toggle button is clicked
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  // click event listener to toggle the active class on the mobile menu
  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active"); // the active class css styles reveals the menu items
  });
});
