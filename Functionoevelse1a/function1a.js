"use strict";

/*sayHello("Julie");
function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
}

console.log("test");

presentPet("Julie", "kanin", "putte");

function presentPet(firstName, animalType, animalName) {
  console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
}*/

/*
function test(firstName) {
  console.log(firstName);
  firstName = "Bob";
  console.log(firstName);
}

test("Julie");
*/

let city = "København";

function changeCity() {
  let city = "Aarhus";
}

console.log(city); // før kaldet
changeCity();
console.log(city); // efter kaldet
