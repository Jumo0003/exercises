const list = document.querySelector("ul");
const valueArray = [];

setInterval(generateColumns, 1000);

function generateColumns() {
  const randomNum = Math.floor(Math.random() * 100);
  valueArray.push(randomNum);

  if (valueArray.length > 20) {
    console.log("colummns are longer than 20 now!!");

    console.log("columns are being generated now!", valueArray);
    list.removeChild(list.firstElementChild);
  }

  const li = document.createElement("li");
  li.style.setProperty("--height", randomNum);
  list.appendChild(li);
}
