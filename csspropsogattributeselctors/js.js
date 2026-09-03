const btn = document.querySelector("#changeAnimal");
const h1 = document.querySelector("h1");

btn.addEventListener("click", skiftDyr);

function skiftDyr() {
  if (h1.getAttribute("data-filter") === "bat") {
    h1.setAttribute("data-filter", "fox");
  } else {
    h1.setAttribute("data-filter", "bat");
  }
}
