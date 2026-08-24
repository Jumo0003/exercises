"use strict";

/*function greeting(firstName) {
  return `Hello ${firstName}`;
}

const sayHi = greeting;

sayHi("Harry");

console.log(sayHi());
*/

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

function fireOrHire(action, person) {
  action(person);
}

const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};

const person4 = {
  firstName: "Fred",
  lastName: "Weasley",
  hired: false,
};

fireOrHire(hire, person4);

fireOrHire(fire, person3);
console.log(person4);
console.log(person3);
