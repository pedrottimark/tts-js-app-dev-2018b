'use strict';

// state of application

// Cannot include space, forward slash, question mark, ampersand:
const purchaserId = 'healthyEater'; // TODO

const stateInitial = {
  isCodeValid: false,
  isQuantityValid: false,
  isWaiting: false,
  code: '',
  message: '',
  product: null,
};
  
let state = {
  ...stateInitial,
  purchaser: null,
  purchases: [],
};
  
// Given some properties of state, merge new values and update interface.
const setState = stateChanges => {
  state = {...state, ...stateChanges};
  updateInterface();
};

// Update interface elements after incremental update to global state variables.
const updateInterface = () => {
  const {code, isCodeValid, isQuantityValid, isWaiting, message, product} = state;
  const hasId = code !== '';
  const hasProduct = product !== null;
  
  inputCode.disabled = hasProduct;
  buttonEnterCode.disabled = !isCodeValid || hasProduct || isWaiting;

  fieldsetDescription.className = hasId ? '' : 'hidden';
  spanDescription.innerHTML = hasProduct ? product.description : message;
  
  formQuantity.className = hasProduct ? '' : 'hidden';
  buttonEnterQuantity.disabled = !isQuantityValid || isWaiting;
  buttonCancelPurchase.disabled = !hasProduct || isWaiting;
};

// Move keyboard input focus. Don’t do this if people can choose what to do next.
const focusCode = () => {
  inputCode.focus();
}

// Move keyboard input focus. Don’t do this if people can choose what to do next.
const focusQuantity = () => {
  inputQuantity.focus();
};

const resetInputs = () => {
  inputCode.value = '';
  inputQuantity.value = '';
};

// Callback functions

const CODE_REGEXP = /^\d\d\d\d$/
const QUANTITY_REGEXP = /^\d+$/

// Validate the code after change to value of input element.
const onInputCode = ({target: {value}}) => {
  setState({
    isCodeValid: CODE_REGEXP.test(value),
  });
};

// Validate the quantity after change to value of input element.
const onInputQuantity = ({target: {value}}) => {
  setState({
    isQuantityValid: QUANTITY_REGEXP.test(value),
  });
};

const onSubmitCode = event => {
  event.preventDefault();

  const code = inputCode.value;
  setState({
    code,
    isWaiting: true,
  });

// TODO
/*
  fetchGetProduct(code).then(product => {
    setState({
      isWaiting: false,
      message: '',
      product,
    });
    focusQuantity(); // must call this last
  }).catch(error => {
    setState({
      isWaiting: false,
      message: error.message,
    });
  });
*/
};
  
const onSubmitQuantity = event => {
  event.preventDefault();

  setState({
    isWaiting: true,
  });

  const {product, purchaser, purchases} = state;
  const quantity = parseInt(inputQuantity.value, 10);
  const purchasePostable = {
    purchaser: purchaser.id,
    productId: product.id,
    quantity,
  };

  // TODO
  /*
  fetchPostPurchase(purchasePostable).then(purchasePosted => {
    const purchase = {...purchasePosted, product};

    setState({
      ...stateInitial,
      purchases: [purchase, ...purchases],
    });
    resetInputs();
    focusCode();

    const tr0 = tbodyPurchases.children.length === 0 ? null : tbodyPurchases.children[0];
    tbodyPurchases.insertBefore(renderPurchase(purchase), tr0);
  }).catch(error => {
    console.error(error.message);
    setState({
      isWaiting: false,
      message: error.message,
    })
  });
  */
};

const onResetQuantity = event => {
  event.preventDefault();

  setState(stateInitial);
  resetInputs();
  focusCode();
};

// initialize interface

const inputCode = createElement(
  'input',
  {
    type: 'text',
    name: 'code',
    onInput: onInputCode,
  }
);
  
const buttonEnterCode = createElement('button', {type: 'submit'}, 'Enter');
  
const spanDescription = createElement('span');
  
const fieldsetDescription = createElement(
  'fieldset',
  {name: 'description'},
  createElement('label', null, 'Description'),
  spanDescription
);
  
const formProduct = createElement(
  'form',
  {
    name: 'product',
    onSubmit: onSubmitCode,
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
    onInput: onInputQuantity,
  }
);
  
const buttonEnterQuantity = createElement('button', {type: 'submit'}, 'Enter');
const buttonCancelPurchase = createElement('button', {type: 'reset'}, 'Cancel');

const formQuantity = createElement(
  'form',
  {
    name: 'quantity',
    onSubmit: onSubmitQuantity,
    onReset: onResetQuantity,
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

const onClickDelete = id => {
  const {purchases} = state;
  const index = purchases.findIndex(purchase => purchase.id === id);

  if (index === -1) {
    console.error(`onClickDelete id=${id} not found`);
    return;
  }

  // Optimistic update: state, interface, server
  setState({
    purchases: purchases.map(purchase => purchase.id !== id)
  });
  tbodyPurchases.removeChild(tbodyPurchases.children[index]);

  // TODO
  /*
  fetchDeletePurchase(id);
  */
};

// Render functions

const renderLogOff = purchaser => createElement(
  'form',
  {name: 'logOff'},
  createElement(
    'fieldset',
    null,
    createElement('span', null, purchaser.fullName),
    createElement('button', {disabled: true}, 'Log off')
  )
);

const header = createElement(
  'header',
  null,
  createElement(
    'h1',
    null,
    'Purchase Pleasing Produce'
  )
);

const tbodyPurchases = createElement('tbody');

const tablePurchases = createElement(
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
      createElement('th', {scope: 'col', className: 'delete'})
    ),
  ),
  tbodyPurchases
);

const renderDeleteButton = id => createElement(
  'button',
  {onClick: onClickDelete.bind(null, id)},
  'Delete'
);

const renderPurchase = ({id, quantity, product: {description}}) => createElement(
  'tr',
  null,
  createElement('td', {className: 'quantity'}, quantity),
  createElement('td', {className: 'description'}, description),
  createElement('td', {className: 'delete'}, renderDeleteButton(id))
);

// mount interface

updateInterface();

const root = document.querySelector('#root');
root.appendChild(header);

Promise.all([
  fetchGetReturningPurchaser(purchaserId),
  fetchGetPurchases(purchaserId)
]).then(([purchaser, purchases]) => {
  setState({purchaser, purchases});

  header.appendChild(renderLogOff(purchaser));
  purchases.forEach(purchase => {
    tbodyPurchases.appendChild(renderPurchase(purchase));
  })
  root.appendChild(formProduct);
  root.appendChild(formQuantity);
  root.appendChild(tablePurchases);
}).catch(error => {
  console.error(error.message);
})
