import convertToJSON from './00-convertToJSON';

export const fetchPostNewPurchaser = purchaser => fetch(`/purchasers`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(purchaser),
}).then(convertToJSON);
