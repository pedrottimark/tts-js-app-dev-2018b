'use strict';

const ingredients = [
  '2 cups all-purpose flour',
  '1 tablespoon baking powder',
  '1/2 teaspoon salt',
];

// You can provide substring as an argument on the command line,
var substring = process.argv[2] || 'spoon'; // or let 'spoon' be the default.

// Find the index of the an ingredient which contains the substring.
let i = 0;
while (i !== ingredients.length) {
  if (ingredients[i].indexOf(substring) !== -1) {
    break;
  }
  i += 1;
}

console.log('string', ingredients[i])
console.log('index ', i);
console.log('length', ingredients.length);
