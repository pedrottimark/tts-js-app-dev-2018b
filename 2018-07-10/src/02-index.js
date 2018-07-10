import './00-app.css';
import createElement from './00-createElement';
import {fetchPostNewPurchaser} from './02-fetch';

const stateInitial = {
  newId: {
    isValid: false,
    message: '',
    value: '',
  },
  fullName: {
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
  
const getMessageName = value => {
  if (value.startsWith(' ')) {
    return 'full name cannot start with space';
  } else if (value.endsWith(' ')) {
    return 'full name cannot end with space';
  } else if (value.includes('  ')) {
    return 'full name cannot contain adjacent spaces';
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

const onInputFullName = event => {
  const {name, value} = event.target;
  const message = getMessageName(value);
  const isValid = value.length !== 0 && message.length === 0;

  setState({
    [name]: {isValid, message, value},
  })
}

const onSubmitSignUp = event => {
  event.preventDefault();

  setState({
    isWaiting: true,
  });

  const {newId, fullName} = state;
  fetchPostNewPurchaser({id: newId.value, fullName: fullName.value}).then(purchaser => {
    setState({...stateInitial, purchaser});

    // Swap forms and clear input elements.
    formLogOff = renderFormLogOff(purchaser);
    root.removeChild(formSignUp);
    header.appendChild(formLogOff);
    resetInputs();
  }).catch(error => {
    setState({
      fullName: {...fullName, message: error.message},
      isWaiting: false,
    });
  });
};

const onLogOff = () => {
  setState({purchaser: null});

  // Swap forms.
  header.removeChild(formLogOff);
  root.appendChild(formSignUp);
  formLogOff = null;
};

// create interface

const inputNewId = createElement(
  'input',
  {type: 'text', name: 'newId', onInput: onInputId}
);

const inputFullName = createElement(
  'input',
  {type: 'text', name: 'fullName', onInput: onInputFullName}
);

const resetInputs = () => {
  inputNewId.value = '';
  inputFullName.value = '';
};

const pNewId = createElement('p');

const pFullName = createElement('p');

const buttonSignUp = createElement(
  'button',
  {type: 'submit'},
  'SignUp'
);

const formSignUp = createElement(
  'form',
  {name: 'signUp', onSubmit: onSubmitSignUp},
  createElement(
    'fieldset',
    null,
    createElement('label', null, 'new purchaser'),
    inputNewId,
    pNewId
  ),
  createElement(
    'fieldset',
    null,
    createElement('label', null, 'full name'),
    inputFullName,
    buttonSignUp,
    pFullName
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

const renderFormLogOff = ({fullname}) => createElement(
  'form',
  {name: 'logOff'},
  createElement(
    'fieldset',
    null,
    createElement('label', null, fullname),
    createElement('button', {onClick: onLogOff}, 'Log off')
  )
);

let formLogOff = null;

// Update interface elements after incremental update to global state variables.
const updateInterface = () => {
  const {newId, fullName, isWaiting} = state;

  inputNewId.disabled = isWaiting;
  pNewId.innerHTML = newId.message;

  inputFullName.disabled = isWaiting;
  pFullName.innerHTML = fullName.message;

  buttonSignUp.disabled = isWaiting || !newId.isValid || !fullName.isValid;
};

// mount interface

resetInputs();
updateInterface();
const root = document.querySelector('#root');
root.appendChild(header);
root.appendChild(formSignUp);
