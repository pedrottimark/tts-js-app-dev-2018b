import './00-app.css';
import createElement from './00-createElement';
import {
  fetchGetReturningPurchaser,
  fetchGetPurchases,
} from './05-fetch'; // TODO

const purchaserId = 'healthyEater';

const quantityInitial = {
  isValid: false,
  message: '',
  value: '',
};

const stateInitial = {
  quantity: quantityInitial,
  isWaiting: false,
  purchaser: null,
  purchases: null,
  purchase: null,
};

let state = {...stateInitial};

// Given some properties of state, merge new values and update interface.
const setState = stateChanges => {
  state = {...state, ...stateChanges};
  updateInterface();
};

const getRandomPurchase = purchases => purchases.length === 0
  ? null
  : purchases[Math.floor(Math.random() * purchases.length)]

const QUANTITY_REGEXP = /^\d+$/
const ZERO_REGEXP = /^0+$/;

const getMessageQuantity = value => {
  if (!QUANTITY_REGEXP.test(value)) {
    return 'quantity must consist of one or more digits';
  } else if (ZERO_REGEXP.test(value)) {
    return 'quantity cannot be zero';
  }
  return '';
};

// Validate the code after change to value of input element.
const onInputQuantity = event => {
  const {name, value} = event.target;
  const message = getMessageQuantity(value);
  const isValid = value.length !== 0 && message.length === 0;

  setState({
    [name]: {isValid, message, value},
  })
};

const onSubmitQuantity = event => {
  event.preventDefault();
/* TODO
  setState({
    isWaiting: true,
  });

  const {purchase: {id}, purchases, quantity} = state;
  fetchPatchPurchase(id, parseInt(quantity.value, 10)).then(() => {
    const purchase = getRandomPurchase(purchases);
    setState({
      isWaiting: false,
      purchase,
      quantity: quantityInitial,
    });
    resetInputs();
  }).catch(error => {
    setState({
      quantity: {...code, message: error.message},
      isWaiting: false,
    });
  });
*/
};

// create interface

const inputCode = createElement(
  'input',
  {type: 'text', name: 'code', disabled: true}
);

const buttonCode = createElement(
  'button',
  {type: 'submit', disabled: true},
  'Enter'
);

const pCode = createElement('p');

const spanDescription = createElement('span');

const fieldsetDescription = createElement(
  'fieldset',
  {name: 'description'},
  createElement('label', null, 'Description'),
  spanDescription
);

const formProduct = createElement(
  'form',
  {name: 'product'},
  createElement(
    'fieldset',
    null,
    createElement('label', null, 'PLU code'),
    inputCode,
    buttonCode,
    pCode
  ),
  fieldsetDescription
);

const inputQuantity = createElement(
  'input',
  {type: 'text', name: 'quantity', onInput: onInputQuantity}
);

const resetInputs = () => {
  inputQuantity.value = '';
};

const buttonQuantity = createElement(
  'button',
  {type: 'submit'},
  'Enter'
);

const pQuantity = createElement('p');

const formQuantity = createElement(
  'form',
  {name: 'quantity', onSubmit: onSubmitQuantity},
  createElement(
    'fieldset',
    null,
    createElement('label', null, 'Quantity'),
    inputQuantity,
    buttonQuantity,
    pQuantity
  )
);

// Update interface elements after incremental update to global state variables.
const updateInterface = () => {
  const {isWaiting, purchase: {product}, quantity} = state;

  inputCode.value = product ? product.id : '';

  fieldsetDescription.className = product ? '' : 'hidden';
  spanDescription.innerHTML = product ? `${product.description}` : '';

  inputQuantity.disabled = isWaiting;
  buttonQuantity.disabled = !quantity.isValid || isWaiting;
  pQuantity.innerHTML = quantity.message;
};

const header = createElement(
  'header',
  null,
  createElement(
    'h1',
    null,
    'Purchase Pleasing Produce'
  )
);

const renderFormLogOff = ({fullName}) => createElement(
  'form',
  {name: 'logOff'},
  createElement(
    'fieldset',
    null,
    createElement('label', null, fullName),
    createElement('button', {disabled: true}, 'Log off')
  )
);

// mount interface

const root = document.querySelector('#root');
root.appendChild(header);

Promise.all([
  fetchGetReturningPurchaser(purchaserId),
  fetchGetPurchases(purchaserId),
]).then(([purchaser, purchases]) => {
  header.appendChild(renderFormLogOff(purchaser));
  resetInputs();
  setState({
    purchaser,
    purchases,
    purchase: getRandomPurchase(purchases),
  })
  root.appendChild(formProduct);
  root.appendChild(formQuantity);
}).catch(error => {
  console.error(error.message);
});
