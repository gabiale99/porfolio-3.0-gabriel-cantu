const menu = document.querySelector("nav");
const btnMenu = document.querySelector(".container-menu");
const btnBotonera = document.querySelectorAll("nav ul li a");

btnMenu.addEventListener("click", () => {
  if (menu.classList.contains("off")) {
    menu.classList.remove("off");
  } else {
    menu.classList.add("off");
  }
});

btnBotonera.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("off")) {
      menu.classList.remove("off");
    } else {
      menu.classList.add("off");
    }
  });
});
