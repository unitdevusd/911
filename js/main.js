const btnMenu = document.querySelector(".menu__btn");
const menu = document.querySelector(".nav__list");
const btnCloseMenu = document.querySelector(".menu-close__btn");
btnMenu.addEventListener("click", () =>{
  menu.classList.add("is-active");
  btnCloseMenu.classList.add("is-active");
});
btnCloseMenu.addEventListener("click", () =>{
  menu.classList.remove("is-active");
  btnCloseMenu.classList.remove("is-active");
});