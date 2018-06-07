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
  console.log('steps:', steps);
} else {
  // The step is a prerequisite of the steps which follow it.
  console.log(
    'steps which follow ' + arg + ':',
    steps.slice(/* TODO */) // starting index for the rest of the items
  );
}
