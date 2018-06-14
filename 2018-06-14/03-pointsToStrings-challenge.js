'use strict';

// Given point as object, return coordinates as string.
const pointToString = point => `${point.x},${point.y}`;

// Given points as array of objects, return coordinates as array of strings.
/*
const pointsToArray = points => {
  const strings = [];
  // TODO
}
*/

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

// Convert arrays of objects to arrays of strings for J and S:

// TODO call pointsToStrings function
let strings1 = [];
for (let i = 0; i < points1.length; i += 1) {
  strings1[i] = pointToString(points1[i]);
}

// TODO call pointsToStrings function
let strings2 = [];
for (let i = 0; i < points2.length; i += 1) {
  strings2[i] = pointToString(points2[i]);
}

// Return output markup as string:

const output = [
  '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">',
  '<g transform="scale(200)">',
  '<desc>JavaScript community logo as a stick figure</desc>',
  `<polyline id="polyline1" points="${strings1.join(' ')}"></polyline>`,
  `<polyline id="polyline2" points="${strings2.join(' ')}"></polyline>`,
  '</g>',
  '</svg>',
].join('');

// Put markup as string into Web page:

document.write(output);
