export const addId = (array, id) => [...array, id];

export const removeId = (array, id) => array.filter(item => item !== id);

export const hasId = (array, id) => array.indexOf(id) !== -1;

export const deletePurchase = (purchases, id) => purchases.filter(purchase => purchase.id !== id);

export const findIndexPurchase = (purchases, id) => purchases.findIndex(purchase => purchase.id === id);