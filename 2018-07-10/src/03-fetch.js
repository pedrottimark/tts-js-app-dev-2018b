import convertToJSON from './00-convertToJSON';

export const fetchGetReturningPurchaser = purchaserId => fetch(`/purchasers/${purchaserId}`).then(convertToJSON);

// export const fetchGetProduct = productId => TODO
