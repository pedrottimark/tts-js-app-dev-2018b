'use strict';

// This week: assume that products array is global variable.
// Next week: send request to server to get a product object!

// Given a valid code number, return product object which has that id;
// otherwise null (instead of undefined).
const getProduct = code => products.find(product => product.id === code) || null;

// Given product object and quantity number, return purchase object.
const createPurchase = ({id, description, byWeight, price}, quantity) => ({
  productId: id,
  description,
  byWeight,
  price,
  quantity,
});

// Return random value 0.5 <= weight < 2.5 for purchase of product.
const getWeight = () => 0.5 + Math.random() * 2;

// user interface elements which respond to interaction

// state of application

const state = {
  isCodeValid: false,
  isQuantityValid: false,
  code: '',
  product: null,
  purchases: [],
};

const getCost = purchases => purchases.reduce(
  (sum, {quantity, price}) => sum + quantity * price,
  0
).toFixed(2);

// update state

const CODE_REGEXP = /\d\d\d\d/
const QUANTITY_REGEXP = /\d+/

// Validate the code after change to value of input element.
const validateCode = () => {
  state.isCodeValid = CODE_REGEXP.test(inputCode.value);
};

// Validate the quantity after change to value of input element.
const validateQuantity = () => {
  state.isQuantityValid = QUANTITY_REGEXP.test(inputQuantity.value);
};

// Given code as string, set code as number and product as object or null.
const setCodeAndProduct = value => {
  state.code = value;
  state.product = getProduct(state.code);
};

// Reset state after purchase or cancel purchase.
const resetState = () => {
  state.isCodeValid = false;
  state.isQuantityValid = false;
  state.code = '';
  state.product = null;
};

// This week: assume that purchases array is only in local state.
// Next week: send request to server to post a purchase object!

const addPurchase = purchase => {
  state.purchases.push(purchase);
};

// update interface

// Move keyboard input focus. Don’t do this if people can choose what to do next.
const focusCode = () => {
  inputCode.focus();
}

// Move keyboard input focus. Don’t do this if people can choose what to do next.
const focusQuantity = () => {
  inputQuantity.focus();
};

const resetCode = () => {
  inputCode.value = '';
};

const resetQuantity = () => {
  inputQuantity.value = '';
};

// Reset interface elements after purchase or cancel purchase.
const resetInterface = () => {
  resetCode();
  resetQuantity();
  updateInterface();
  focusCode(); // must call this last
};

// Update interface elements after incremental update to global state variables.
const updateInterface = () => {
  const hasId = state.code !== '';
  const hasProduct = state.product !== null;

  inputCode.disabled = hasProduct;
  buttonEnterCode.disabled = !state.isCodeValid || hasProduct;

  fieldsetDescription.className = hasId ? '' : 'hidden';
  spanDescription.innerHTML = hasProduct
    ? state.product.description
    : hasId
      ? `${state.code} not found`
      : '';

  formQuantity.className = hasProduct && !state.product.byWeight ? '' : 'hidden';
  buttonEnterQuantity.disabled = !state.isQuantityValid;
  buttonCancelPurchase.disabled = !hasProduct;

  thCost.innerHTML = getCost(state.purchases);
};

const renderPurchase = ({description, byWeight, quantity, price}) => {
  const tr = document.createElement('tr');

  const quantityFixed = quantity.toFixed(2);

  const tdQuantity = document.createElement('td');

  tdQuantity.setAttribute('class', 'quantity');
  tr.appendChild(tdQuantity);

  const spanInteger = document.createElement('span');
  spanInteger.innerHTML = quantityFixed.slice(0, -3) || '0';
  tdQuantity.appendChild(spanInteger);

  const spanDecimal = document.createElement('span');
  if (!byWeight) {
    spanDecimal.setAttribute('aria-hidden', 'true');
  }
  spanDecimal.innerHTML = quantityFixed.slice(-3);
  tdQuantity.appendChild(spanDecimal);

  const tdDescription = document.createElement('td');
  tdDescription.setAttribute('class', 'description');
  tdDescription.innerHTML = description;
  tr.appendChild(tdDescription);

  const tdPrice = document.createElement('td');
  tdPrice.setAttribute('class', 'price');
  tdPrice.innerHTML = price.toFixed(2);
  tr.appendChild(tdPrice);

  const tdCost = document.createElement('td');
  tdCost.setAttribute('class', 'cost');
  tdCost.innerHTML = (quantity * price).toFixed(2);
  tr.appendChild(tdCost);

  const tr0 = tbodyPurchases.children.length === 0 ? null : tbodyPurchases.children[0];
  tbodyPurchases.insertBefore(tr, tr0);
};

// update state and interface

const submitPurchase = (quantity) => {
  const purchase = createPurchase(state.product, quantity);
  addPurchase(purchase); // update state

  // update interface
  renderPurchase(purchase);
  resetState();
  resetInterface();
};

const submitCode = () => {
  setCodeAndProduct(inputCode.value); // update state

  if (!state.product) {
    resetCode();
    updateInterface();
    return;
  }

  if (state.product.byWeight) {
    submitPurchase(getWeight()); // update state and interface
    return;
  }

  updateInterface();
  focusQuantity(); // must call this last
};

const submitQuantity = () => {
  submitPurchase(parseInt(inputQuantity.value, 10)); // update state and interface
}

// initialize interface

const inputCode = createElement(
  'input',
  {
    type: 'text',
    name: 'code',
    onInput: () => {
      validateCode();
      updateInterface();
    }
  }
);

const buttonEnterCode = createElement(
  'button',
  {
    type: 'submit'
  },
  'Enter'
);

const spanDescription = createElement('span');

const fieldsetDescription = createElement(
  'fieldset',
  {
    name: 'description'
  },
  createElement('label', null, 'Description'),
  spanDescription
);

const formProduct = createElement(
  'form',
  {
    name: 'product',
    onSubmit: (event) => {
      event.preventDefault();
      submitCode();
    }
  },
  createElement(
    'fieldset',
    {name: 'code'},
    createElement('label', null, 'PLU code'),
    inputCode,
    buttonEnterCode
  ),
  fieldsetDescription
);

const inputQuantity = createElement(
  'input',
  {
    type: 'text',
    name: 'quantity',
    onInput: () => {
      validateQuantity();
      updateInterface();
    }
  }
);

const buttonEnterQuantity = createElement('button', {type: 'submit'}, 'Enter');
const buttonCancelPurchase = createElement('button', {type: 'reset'}, 'Cancel');

const formQuantity = createElement(
  'form',
  {
    name: 'quantity',
    onSubmit: (event) => {
      event.preventDefault();
      submitQuantity();
    },
    onReset: (event) => {
      event.preventDefault();
      resetState();
      resetInterface();
    }
  },
  createElement(
    'fieldset',
    null,
    createElement('label', null, 'Quantity'),
    inputQuantity,
    buttonEnterQuantity,
    buttonCancelPurchase
  )
);

const thCost = createElement('th', {className: 'cost'});
const tbodyPurchases = createElement('tbody');

const table = createElement(
  'table',
  null,
  createElement(
    'thead',
    null,
    createElement(
      'tr',
      null,
      createElement('th', {scope: 'col', className: 'quantity'}, 'Quantity'),
      createElement('th', {scope: 'col', className: 'description'}, 'Description'),
      createElement('th', {scope: 'col', className: 'price'}, 'Price'),
      thCost
    )
  ),
  tbodyPurchases
)

try {
  const root = document.querySelector('#root');
  root.appendChild(formProduct);
  root.appendChild(formQuantity);
  root.appendChild(table);
  updateInterface();
} catch(error) {
  console.error(error.message);
}
