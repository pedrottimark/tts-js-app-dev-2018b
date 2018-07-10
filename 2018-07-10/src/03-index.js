import './00-app.css';
import createElement from './00-createElement';
import {fetchGetReturningPurchaser} from './03-fetch'; // TODO

const purchaserId = 'healthyEater';

const stateInitial = {
  code: {
    isValid: false,
    message: '',
    value: '',
  },
  isWaiting: false,
  product: null,
};

let state = {...stateInitial};

// Given some properties of state, merge new values and update interface.
const setState = stateChanges => {
  state = {...state, ...stateChanges};
  updateInterface();
};

const CODE_REGEXP = /^\d\d\d\d$/

const getMessageCode = value => {
  if (!CODE_REGEXP.test(value)) {
    return 'PLU code must consist of 4 digits';
  }
  return '';
};

// Validate the code after change to value of input element.
const onInputCode = event => {
  const {name, value} = event.target;
  const message = getMessageCode(value);
  const isValid = value.length !== 0 && message.length === 0;

  setState({
    [name]: {isValid, message, value},
  })
};

const onSubmitCode = event => {
  event.preventDefault();
/* TODO
  setState({
    isWaiting: true,
    product: null,
  });

  const {code} = state;
  fetchGetProduct(code.value).then(product => {
    setState({
      ...stateInitial,
      product,
    });
    resetInputs();
  }).catch(error => {
    setState({
      code: {...code, message: error.message},
      isWaiting: false,
    });
  });
*/
};

// create interface

const inputCode = createElement(
  'input',
  {type: 'text', name: 'code', onInput: onInputCode}
);

const resetInputs = () => {
  inputCode.value = '';
};

const buttonCode = createElement(
  'button',
  {type: 'submit'},
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
  {name: 'product', onSubmit: onSubmitCode},
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

// Update interface elements after incremental update to global state variables.
const updateInterface = () => {
  const {code, isWaiting, product} = state;

  inputCode.disabled = isWaiting;
  buttonCode.disabled = !code.isValid || isWaiting;
  pCode.innerHTML = code.message;

  fieldsetDescription.className = product ? '' : 'hidden';
  spanDescription.innerHTML = product ? `${product.id} ${product.description}` : '';
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

fetchGetReturningPurchaser(purchaserId).then(purchaser => {
  // TODO
  header.appendChild(renderFormLogOff(purchaser));
  resetInputs();
  updateInterface();
  root.appendChild(formProduct);
}).catch(error => {
  console.error(error.message);
});
