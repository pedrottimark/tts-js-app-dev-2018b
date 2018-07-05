'use strict';

const fetchGetReturningPurchaser = id => fetch(`/purchasers/${id}`).then(response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
});

const fetchGetNewPurchaser = id => fetch(`/purchasers/${id}`).then(response => {
  if (response.ok) {
    throw new Error(`This purchaser already has an account`);
  }
  if (response.status !== 404) {
    throw new Error(reponse.statusText);
  }
});

const fetchPostPurchaser = purchaser => fetch(`/purchasers`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(purchaser),
}).then(response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
});
