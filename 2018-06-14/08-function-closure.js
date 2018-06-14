'use strict';

// Define functions to convert points as data to attributes for markup:

// Given maximum number of digits after the decimal point, return function
// that given number, returns string with limited precision.
const getFixer = maxDigits => number => {
  const toFixed = number.toFixed(maxDigits);
  const toString = number.toString();

  return toFixed.length < toString.length ? toFixed : toString;
};

const pointsToString = (numberToString, points) => {
  const strings = [];
  for (let i = 0; i < points.length; i += 1) {
      const {x, y} = points[i];
      strings[i] = `${numberToString(x)},${numberToString(y)}`;
  }
  return strings.join(' ');
};

// Given configuration as number, return fix functions:

const fix = getFixer(3);
const fix1 = fix;
const fix2 = fix;

// Given input data as arrays of objects for J and S:

const yTop1 = 29 / 63;
const xRight1 = 1 / 2;
const yBottom1 = 7 / 8;
const xLeft1 = 1 / 4;

const points1 = [
  { x: xRight1, y: yTop1 },
  { x: xRight1, y: yBottom1 },
  { x: xLeft1, y: yBottom1 },
];

const yTop2 = 32 / 63;
const yMiddle2 = 2 / 3;
const yBottom2 = yBottom1;

const points2 = [
  { x: 7 / 8, y: yTop2 },
  { x: 2 / 3, y: yTop2 },
  { x: 2 / 3, y: yMiddle2 },
  { x: 7 / 8, y: yMiddle2 },
  { x: 7 / 8, y: yBottom2 },
  { x: 3 / 5, y: yBottom2 },
];

// Return output markup as string:

const output = [
  '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">',
  '<g transform="scale(200)">',
  '<desc>JavaScript community logo as a stick figure</desc>',
  `<polyline id="polyline1" points="${pointsToString(fix1, points1)}"></polyline>`,
  `<polyline id="polyline2" points="${pointsToString(fix2, points2)}"></polyline>`,
  '</g>',
  '</svg>',
].join('');

// Put markup as string into Web page:

document.write(output);
