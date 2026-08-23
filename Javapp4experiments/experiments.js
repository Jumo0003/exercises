"use strict";

/*const result = greeting("KLaus");

function greeting(firstName) {
  firstName = `Hello ${firstName}`;
}
return console.log(result);

greeting("any name");
return console.log(greeting("any name"));

console.log("TEST");*/

/*javascript 5 eksperimenter og øvelser*/

/*let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(letters);

//let newarr = letters;

const newarr = letters;

//newarr[4] = "*";

newarr = ["helt", "nyt"];

console.log(letters);

console.log("TEST");*/

/* Array methods */
/*
const people = ["Harry", "Ron", "Hermione"];

let result;

result = people.splice("Fred", "George");

console.log(result);
console.log(people);
*/

const str = "abcdefghijklmn";
const arr1 = str.split("");

console.log(arr1);
const arr2 = Array.from(str);

console.log(arr2);

const arr3 = [...str];

console.log(arr3);
