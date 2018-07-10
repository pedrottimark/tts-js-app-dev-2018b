import convertToJSON from './00-convertToJSON';

export const fetchGetReturningPurchaser = purchaserId => fetch(`/purchasers/${purchaserId}`).then(convertToJSON);

export const fetchGetPurchases = purchaserId => fetch(`/purchasers/${purchaserId}/purchases?_expand=product`).then(convertToJSON);

// export const fetchPatchPurchase = (purchaseId, quantity) => TODO
