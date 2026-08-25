const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", addBreadcrumbsToPage);

function addBreadcrumbsToPage() {
  console.log("Tilføj brødkrummer");
  document.querySelector("ul").innerHTML = GenerateBreadCrumbpath();
}

function GenerateBreadCrumbpath() {
  return bc
    .map((item, index) =>
      index === bc.length - 1
        ? `<li>${item.name}</li>`
        : `<li>
        <a href=${item.link}>${item.name}</a>
      </li>`,
    )

    .join(" .../");
}
