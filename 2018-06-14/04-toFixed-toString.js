'use strict';

let nDigits = 3;

let toFixed;
let toString;

const logFixedAndString = number => {
  toFixed = number.toFixed(nDigits);
  toString = number.toString(); // default conversion
  console.log(toFixed.length, toString.length, number);
};

logFixedAndString(1 / 2);
logFixedAndString(1 / 4);
logFixedAndString(7 / 8);
logFixedAndString(29 / 63);

console.log();
nDigits = 4;
logFixedAndString(29 / 63);
console.log(toFixed, toString);
