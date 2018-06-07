'use strict';

const ingredients = [
  {
    quantity: 2,
    unit: 'cup',
    stuff: 'flour',
  },
  {
    quantity: 1,
    unit: 'tablespoon',
    stuff: 'baking powder',
  },
  {
    quantity: 0.5, // 1/2
    unit: 'teaspoon',
    stuff: 'salt',
  },
];

console.log('typeof null                           ', typeof null);
console.log('typeof ingredients                    ', typeof ingredients);
console.log('typeof ingredients[0]                 ', typeof ingredients[0]);
console.log('typeof ingredients[0].quantity        ', typeof ingredients[0].quantity);
console.log('typeof ingredients[0].unit            ', typeof ingredients[0].unit);
console.log()
console.log('Array.isArray(null)                   ', Array.isArray(null));
console.log('Array.isArray(ingredients)            ', Array.isArray(ingredients));
console.log('Array.isArray(ingredients[0])         ', Array.isArray(ingredients[0]));
console.log('Array.isArray(ingredients[0].quantity)', Array.isArray(ingredients[0].quantity));
console.log('Array.isArray(ingredients[0].unit)    ', Array.isArray(ingredients[0].unit));
