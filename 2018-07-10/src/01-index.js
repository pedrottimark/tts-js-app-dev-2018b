import './00-app.css';
import createElement from './00-createElement';
import {fetchGetReturningPurchaser} from './01-fetch';

const stateInitial = {
  returningId: {
    isValid: false,
    message: '',
    value: '',
  },
  isWaiting: false,
  purchaser: null,
};

let state = {...stateInitial};

// Given some properties of state, merge new values and update interface.
const setState = stateChanges => {
  state = {...state, ...stateChanges};
  updateInterface();
};
  
const getMessageId = value => {
  if (value.includes(' ')) {
    return 'purchaser id cannot contain space';
  } else if (value.includes('/')) {
    return 'purchaser id cannot contain forward slash';
  } else if (value.includes('?')) {
    return 'purchaser id cannot contain question mark';
  } else if (value.includes('&')) {
    return 'purchaser id cannot contain ampersand';
  }
  return '';
};

const onInputId = event => {
  const {name, value} = event.target;
  const message = getMessageId(value);
  const isValid = value.length !== 0 && message.length === 0;

  setState({
    [name]: {isValid, message, value},
  })
};

const onSubmitLogOn = event => {
  event.preventDefault();

  setState({
    isWaiting: true,
  });

  const {returningId} = state;
  fetchGetReturningPurchaser(returningId.value).then(purchaser => {
    setState({...stateInitial, purchaser});
  
    // Swap forms and clear input elements.
    formLogOff = renderFormLogOff(purchaser);
    root.removeChild(formLogOn);
    header.appendChild(formLogOff);
      resetInputs();
  }).catch(error => {
    setState({
      returningId: {...returningId, message: error.message},
      isWaiting: false,
    });
  });
};

const onLogOff = () => {
  setState({purchaser: null});

  // Swap forms.
  header.removeChild(formLogOff);
  root.appendChild(formLogOn);
  formLogOff = null;
};

// create interface

const inputReturningId = createElement(
  'input',
  {type: 'text', name: 'returningId', onInput: onInputId}
);

const resetInputs = () => {
  inputReturningId.value = '';
};

const buttonLogOn = createElement(
  'button',
  {type: 'submit'},
  'Log on'
);

const pLogOn = createElement('p');

const formLogOn = createElement(
  'form',
  {name: 'logOn', onSubmit: onSubmitLogOn},
  createElement(
    'fieldset',
    null,
    createElement('label', null, 'returning purchaser'),
    inputReturningId,
    buttonLogOn,
    pLogOn
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

const renderFormLogOff = ({fullName}) => createElement(
  'form',
  {name: 'logOff'},
  createElement(
    'fieldset',
    null,
    createElement('label', null, fullName),
    createElement('button', {onClick: onLogOff}, 'Log off')
  )
);

let formLogOff = null;

// Update interface elements after incremental update to global state variables.
const updateInterface = () => {
  const {returningId, isWaiting} = state;

  inputReturningId.disabled = isWaiting;
  buttonLogOn.disabled = !returningId.isValid || isWaiting;
  pLogOn.innerHTML = returningId.message;
};

// mount interface

resetInputs();
updateInterface();
const root = document.querySelector('#root');
root.appendChild(header);
root.appendChild(formLogOn);
