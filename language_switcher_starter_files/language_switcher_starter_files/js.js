const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header_text" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header_text" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "da";

function SkiftSprog(locale) {
  texts[locale].texts.forEach((item) => {
    const element = document.querySelector(item.location);
    element.textContent = item.text;
  });
}
SkiftSprog("de");

let links = document.querySelectorAll(".dropdown-content a");

console.log(links);

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    SkiftSprog(link.dataset.locale);
  });
});
