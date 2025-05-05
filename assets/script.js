const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");

burger.addEventListener("change", () => {
    navMenu.classList.toggle("show");
});