'use strict';

// Given maxDigits and number, return string with limited precision
// at most maxDigits after the decimal point.
const numberToString = (maxDigits, number) => {
    const toFixed = number.toFixed(maxDigits);
    const toString = number.toString(); // default conversion

    // TODO if toFixed is shorter than toString, then return toFixed

    return toString;
};

// Given points as array of objects, return coordinates as string.
const pointsToString = (maxDigits, points) => {
  const strings = [];
  for (let i = 0; i < points.length; i += 1) {
      const point = points[i];
      strings[i] = `${numberToString(maxDigits, point.x)},${numberToString(maxDigits, point.y)}`;
  }
  return strings.join(' ');
};

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
  `<polyline id="polyline1" points="${pointsToString(3, points1)}"></polyline>`,
  `<polyline id="polyline2" points="${pointsToString(3, points2)}"></polyline>`,
  '</g>',
  '</svg>',
].join('');

// Put markup as string into Web page:

document.write(output);
