'use strict';

const ingredients = [
  'flour',
  'baking powder',
  'salt',
];

var item = process.argv[2]; // no default this time :)

var index = ingredients.indexOf(item);

// replace comments with expressions for relevant feedback
if (index === -1) {
  console.log(/* TODO */)
} else {
  console.log(/* TODO */)
}
