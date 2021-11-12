const header = document.querySelector("#header");
const menu = document.querySelector("#menu");
const nav = document.querySelector(".header-top__menu");


window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100);
});

menu.addEventListener("click", function() {
    this.classList.toggle("fa-times");
    nav.classList.toggle("menu-toggle");
})