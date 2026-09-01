const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const textElement = document.querySelector("#text");
const button = document.querySelector("#SFW");
const dialog = document.querySelector("#alreadyClean");
const closeButton = document.querySelector("#closeDialog");

function cleanText() {
  let newText = textElement.textContent;
  let foundBadWord = false;
  curseWords.forEach((item) => {
    if (newText.includes(item.bad)) {
      foundBadWord = true;
    }
    newText = newText.replaceAll(item.bad, item.good);
  });

  if (foundBadWord) {
    textElement.textContent = newText;
  } else {
    dialog.showModal();
  }
}

closeButton.addEventListener("click", () => {
  dialog.close();
});
button.addEventListener("click", cleanText);
