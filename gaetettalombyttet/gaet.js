"use strict";

let gæt = document.querySelector(".computergæt");
const Tallet = document.querySelector('[name="svar"]');
const start = document.querySelector(".startbtn");
const High = document.querySelector(".toohigh");
const Low = document.querySelector(".toolow");
const RigtigtGæt = document.querySelector(".rigtigt");
const vinderbesked = document.querySelector(".vinderbesked");
let min = 0;
let max = 100;
let computerGæt;
let Tæller = 0;

start.addEventListener("click", ComputerGætter);
High.addEventListener("click", forhøjt);
Low.addEventListener("click", forlavt);
RigtigtGæt.addEventListener("click", rigtigtgættet);
High.disabled = true;
Low.disabled = true;
RigtigtGæt.disabled = true;
gæt.disabled = true;

function startspil() {
  if (Number(Tallet.value) < 1 || Number(Tallet.value) > 100) start.disabled = true;
  else start.disabled = false;
}

function ComputerGætter() {
  High.disabled = false;
  Low.disabled = false;
  Tallet.disabled = true;

  const midtpunkt = Math.floor((min + max) / 2);
  console.log("Dette er en test", midtpunkt);
  computerGæt = midtpunkt;
  if (computerGæt == Number(Tallet.value)) RigtigtGæt.disabled = false;
  else RigtigtGæt.disabled = true;
  gæt.value = computerGæt;
  Tæller = Tæller + 1;
  console.log(computerGæt);
}

function forlavt() {
  min = computerGæt;
  ComputerGætter();
}

function forhøjt() {
  max = computerGæt;
  ComputerGætter();
}

function rigtigtgættet() {
  vinderbesked.textContent = "Computeren gættede dit tal!" + " " + "det tog den kun" + " " + Tæller + " " + "forsøg";
  vinderbesked.classList.add("animation");
  High.disabled = true;
  Low.disabled = true;
}
