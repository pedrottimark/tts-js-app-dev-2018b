'use strict';

const ingredient = {
    quantity: 2,
    unit: 'cup',
    stuff: 'flour',
};

const keys = Object.keys(ingredient);
for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i]; // bracket notation for array
    const value = ingredient[key]; // bracket notation for object
    console.log(i, key, value);
}
console.log(keys.length);
