"use strict";

let BrugernsValg;
let ComputerValg;

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const rockbtn = document.querySelector(".rock");
const paperbtn = document.querySelector(".paper");
const scissorsbtn = document.querySelector(".scissors");
const loseDiv = document.querySelector("#lose");
const winDiv = document.querySelector("#win");
const drawDiv = document.querySelector("#draw");
/*const paper = paper < rock;
const rock = rock < scissors;
const scissors = scissors < paper;*/

var valgmuligheder = ["rock", "paper", "scissors"];
var randomCompValg = valgmuligheder[Math.floor(valgmuligheder.length * Math.random())];

rockbtn.addEventListener("click", rockClicked);
function rockClicked() {
  //console.log("rock Clicked");
  BrugernsValg = "rock";
  Træffervalg();
}
paperbtn.addEventListener("click", paperClicked);
function paperClicked() {
  //console.log("paper Clicked");
  BrugernsValg = "paper";
  Træffervalg();
}

scissorsbtn.addEventListener("click", scissorClicked);
function scissorClicked() {
  //console.log("scissor Clicked");
  BrugernsValg = "scissors";
  Træffervalg();
}

function Træffervalg() {
  loseDiv.classList.add("hidden");
  winDiv.classList.add("hidden");
  drawDiv.classList.add("hidden");
  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");
  //console.log("BrugernsValg", BrugernsValg);
  ComputerValg = valgmuligheder[Math.floor(valgmuligheder.length * Math.random())];
  Nedtælling();
}

function Nedtælling() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", Visvalg);
}

function Visvalg() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");
  player1.classList.add(BrugernsValg);
  player2.classList.add(ComputerValg);
  AfgørResultatet();
}

function AfgørResultatet() {
  if (BrugernsValg === ComputerValg) drawDiv.classList.remove("hidden");
  else if (BrugernsValg === "rock" && ComputerValg === "scissors") winDiv.classList.remove("hidden");
  else if (BrugernsValg === "paper" && ComputerValg === "rock") winDiv.classList.remove("hidden");
  else if (BrugernsValg === "scissors" && ComputerValg === "paper") winDiv.classList.remove("hidden");
  else loseDiv.classList.remove("hidden");

  console.log("BrugernsValg", BrugernsValg);
  console.log("ComputerValg", ComputerValg);
}
