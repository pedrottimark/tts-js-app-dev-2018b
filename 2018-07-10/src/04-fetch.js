import convertToJSON from './00-convertToJSON';

export const fetchGetReturningPurchaser = purchaserId => fetch(`/purchasers/${purchaserId}`).then(convertToJSON);

export const fetchGetProduct = productId => fetch(`/products/${productId}`).then(convertToJSON);

// export const fetchPostPurchase = purchasePartial => TODO
