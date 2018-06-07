'use strict';

const steps = [
  'preheat',
  'sift and cut',
  'pour and mix',
  'roll and cut',
  'bake',
];

var arg = process.argv[2]; // no default this time :)

var index = steps.indexOf(arg);

if (index === -1) {
  console.log('steps do not include: ' + arg);
  console.log('steps:', steps); // why do you think it does this?
} else {
  // The prerequisite steps end at but do not include the term.
  console.log('prerequisite steps for ' + arg + ':', steps.slice(0, index));
}
