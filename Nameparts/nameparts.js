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

/*3caPitalization*/

const theName = "KLAUS";

console.log("3capatalix theName", theName.substring(0, 2).toLowerCase());
console.log("3capatalix theName", theName.substring(2, 3).toUpperCase());
console.log("3capatalix theName", theName.substring(3).toLowerCase());
("");
console.log("3capatalix theName", `${theName.substring(0, 2).toLowerCase()}${theName.substring(2, 3).toUpperCase()}${theName.substring(3).toLowerCase()}`);
