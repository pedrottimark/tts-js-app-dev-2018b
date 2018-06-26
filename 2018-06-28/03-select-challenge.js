'use strict';

// Given id as string, find product object in products array which has that property value.
// const findProduct = id => products.find(TODO);

const onChange = event => {
  const {name, value} = event.target;
  // const description = findProduct(value).description;
  console.info(`onChange name=${name} value=${value}`); // description=${description}
};

// const select = TODO;
// select.addEventListener(TODO);
