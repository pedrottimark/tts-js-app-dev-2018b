'use strict';

const convertToJSON = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const fetchGetReturningPurchaser = id => fetch(`/purchasers/${id}`).then(convertToJSON);
  
const fetchGetPurchases = id => fetch(`/purchasers/${id}/purchases?_expand=product`).then(convertToJSON);

// Given id of product, get its object.
// const fetchGetProduct = id => fetch(TODO).then(convertToJSON);

// Given partial purchase object with productId and quantity, post it to server.
// const fetchPostPurchase = purchase => fetch(TODO, TOOD).then(convertToJSON)

// Given partial purchase object with quantity, patch it on server.
// const fetchPatchPurchase = ({id, quantity}) => fetch(TODO, TODO);

// Given id of purchase, delete it on server.
// const fetchDeletePurchase = id => fetch(TODO, TODO);
