import convertToJSON from './00-convertToJSON';

export const fetchGetReturningPurchaser = id => fetch(`/purchasers/${id}`).then(convertToJSON);
