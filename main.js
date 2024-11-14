document.addEventListener("click", (e) => {
  const isDrowpDownBtn = e.target.matches("[data-dropdown-button]");
  if (!isDrowpDownBtn && e.target.closest("[data-dropdown]") != null) return;
  let currentDropDown;
  if (isDrowpDownBtn) {
    currentDropDown = e.target.closest("[data-dropdown]");
    currentDropDown.classList.toggle("active");
  }
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropDown) return;
    dropdown.classList.remove("active");
  });
});

const navBar = document.querySelector(".nav-bar");
const navBarBtns = document.querySelector(".nav-bar-btns");
const navBarToggler = document.querySelector(".nav-bar-toggler");
navBarToggler.addEventListener("click", () => {
  navBar.classList.toggle("active");
  navBarBtns.classList.toggle("active");
  navBarToggler.classList.toggle("active");
});
