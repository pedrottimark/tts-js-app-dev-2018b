'use strict';

const ingredients = [
  'flour',
  'baking powder',
  'salt',
];

const copied = ingredients.slice();

console.log(copied === ingredients); // are the arrays equal?

console.log();
console.log(copied[0] === ingredients[0]); // are the items equal?
console.log(copied[1] === ingredients[1]); // are the items equal?
console.log(copied[2] === ingredients[2]); // are the items equal?

copied.sort()
console.log()
console.log(copied[0] === ingredients[0]); // are the items equal?
console.log(copied[1] === ingredients[1]); // are the items equal?
console.log(copied[2] === ingredients[2]); // are the items equal?
