"use strict";

function momsberegner(beloeb, moms = 25) {
  const momsbeloeb = (beloeb * moms) / 100;
  return console.log(beloeb + momsbeloeb);
}

console.log(momsberegner(203));
console.log(momsberegner(203, 10));
console.log("test");
