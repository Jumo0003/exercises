"use strict";

const fullName = "Peter Heronimous Lind";

const firstSpace = fullName.indexOf(" ");
const firstName = fullName.substring(0, firstSpace);

const middleStart = firstSpace + 1;
const middleEnd = fullName.indexOf(" ", middleStart);
const middleName = fullName.substring(middleStart, middleEnd);
const lastName = fullName.substring(middleEnd);

console.log(firstName);
console.log(middleName);
console.log(lastName);
