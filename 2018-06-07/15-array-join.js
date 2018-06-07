'use strict';

var names = [
  'Jeff',
  'Jimmy',
  'Danica',
  'Dale, Jr.',
];

console.log('comma is default joiner:', names.join());
console.log('space joiner:           ', names.join(' '));
console.log('comma and space joiner: ', names.join(', '));
console.log('newline joiner:         ', names.join('\n'));

const joiner = ', ';
const joined = names.join(joiner);
const split = joined.split(joiner);

console.log();
console.log(names.length, names);
console.log(split.length, split);
