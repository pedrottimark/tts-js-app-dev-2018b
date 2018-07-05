'use strict';

// state of application

const stateInitial = {
  returningId: {
    isValid: false,
    message: '',
    value: '',
  },
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
  isLoggingOn: false,
  isSigningUp: false,
  isWaiting: false,
  purchaser: null,
};

let state = {...stateInitial};

// Given some properties of state, merge new values and update interface.
const setState = stateChanges => {
  state = {...state, ...stateChanges};
  updateInterface();
};

// When someone successfully logs on or signs up, clear input elements and swap forms.
const setLoggedOn = purchaser => {
  resetInputs();
  setState({...stateInitial, purchaser});
  root.removeChild(divPurchaser);

  labelFullName.innerHTML = purchaser.fullName;
  header.appendChild(formLogOff);
setState(stateInitial);
};

// When someone successfully logs off, swap forms.
const setLoggedOff = () => {
  setState({purchaser: null});
  header.removeChild(formLogOff);
  root.appendChild(divPurchaser);
};

// update interface

const resetInputs = () => {
  inputReturningId.value = '';
  inputNewId.value = '';
  inputFullName.value = '';
};

// Move keyboard input focus. Don’t do this if people can choose what to do next.
const focusFullName = () => {
  inputFullName.focus();
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

const onInputFullName = event => {
  const {name, value} = event.target;
  const isValid = value.length !== 0;

  setState({
    [name]: {isValid, value, message: ''},
  })
};

const onSubmitLogOn = event => {
  event.preventDefault();

  setState({
    isLoggingOn: true,
    isWaiting: true,
  });

  const {returningId} = state;
  fetchGetReturningPurchaser(returningId.value).then(purchaser => {
    setLoggedOn(purchaser);
  }).catch(error => {
    setState({
      returningId: {...returningId, message: error.message},
      isLoggingOn: false,
      isWaiting: false,
    });
  });
};

const onSubmitSignUp = event => {
  event.preventDefault();

  setState({
    isWaiting: true,
  });

  const {newId} = state;
  fetchGetNewPurchaser(newId.value).then(() => {
    setState({
      isSigningUp: true,
      isWaiting: false,
    });
    focusFullName();
  }).catch(error => {
    setState({
      newId: {...newId, message: error.message},
      isWaiting: false,
    });
  });
};

const onSubmitFullName = event => {
  event.preventDefault();

  setState({
    isWaiting: true,
  });

  const {newId, fullName} = state;
  const purchaserNew = {
    id: newId.value,
    fullName: fullName.value
  };

  fetchPostPurchaser(purchaserNew).then(purchaser => {
    setLoggedOn(purchaser);
  }).catch(error => {
    setState({
      newId: {...newId, message: error.message},
      isSigningUp: false,
      isWaiting: false,
    });
  });
};

const onCancelSignUp = event => {
  event.preventDefault();

  setState(stateInitial);
};

const onLogOff = () => {
  setLoggedOff();
};

// create interface

const inputReturningId = createElement(
  'input',
  {type: 'text', name: 'returningId', onInput: onInputId}
);

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

const inputNewId = createElement(
  'input',
  {type: 'text', name: 'newId', onInput: onInputId}
);

const buttonSignUp = createElement(
  'button',
  {type: 'submit'},
  'Sign up'
);

const pSignUp = createElement('p');

const formSignUp = createElement(
  'form',
  {name: 'signUp', onSubmit: onSubmitSignUp},
  createElement(
    'fieldset',
    null,
    createElement('label', null, 'new purchaser'),
    inputNewId,
    buttonSignUp,
    pSignUp
  )
);

const inputFullName = createElement(
  'input',
  {type: 'text', name: 'fullName', onInput: onInputFullName}
);

const buttonEnterName = createElement(
  'button',
  {type: 'submit'},
  'Enter'
);

const buttonCancelName = createElement(
  'button',
  {type: 'reset'},
  'Cancel'
);

const pFullName = createElement('p');

const formFullName = createElement(
  'form',
  {name: 'fullName', onSubmit: onSubmitFullName, onReset: onCancelSignUp},
  createElement(
    'fieldset',
    null,
    createElement('label', null, 'full name'),
    inputFullName,
    buttonEnterName,
    buttonCancelName,
    pFullName
  )
);

const divPurchaser = createElement(
  'div',
  {className: 'purchaser'},
  formLogOn,
  formSignUp,
  formFullName
);

const labelFullName = createElement('label');

const formLogOff = createElement(
  'form',
  {name: 'logOff'},
  createElement(
    'fieldset',
    null,
    labelFullName,
    createElement('button', {onClick: onLogOff}, 'Log off')
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

// Update interface elements after incremental update to global state variables.
const updateInterface = () => {
  const {returningId, newId, fullName, isLoggingOn, isSigningUp, isWaiting} = state;

  formLogOn.setAttribute('class', isSigningUp ? 'hidden' : '');
  inputReturningId.disabled = isWaiting;
  buttonLogOn.disabled = !returningId.isValid || isWaiting;
  pLogOn.innerHTML = returningId.message;

  formSignUp.setAttribute('class', isLoggingOn ? 'hidden' : '');
  inputNewId.disabled = isWaiting;
  buttonSignUp.disabled = !newId.isValid || isWaiting;
  pSignUp.innerHTML = newId.message;

  formFullName.setAttribute('class', !isSigningUp ? 'hidden' : '');
  inputFullName.disabled = isWaiting;
  buttonEnterName.disabled = !fullName.isValid || isWaiting;
  buttonCancelName.disabled = isWaiting;
  pFullName.innerHTML = fullName.message;
};

// mount interface

updateInterface();
const root = document.querySelector('#root');
root.appendChild(header);
root.appendChild(divPurchaser);
