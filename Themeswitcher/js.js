"use strict";

const links = document.querySelectorAll(".dropdown-content a");

links.forEach((links) => {
  links.addEventListener("click", (skiftTema) => {
    const tema = links.getAttribute("data-theme");
    document.body.setAttribute("data-theme", tema);
  });
});
