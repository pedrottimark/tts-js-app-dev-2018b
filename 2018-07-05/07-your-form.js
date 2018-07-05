'use strict';

// state of application

const stateInitial = {
};
  
let state = {
  ...stateInitial,
};
  
// Given some properties of state, merge new values and update interface.
const setState = stateChanges => {
  state = {...state, ...stateChanges};
  updateInterface();
};

// Update interface elements after incremental update to global state variables.
const updateInterface = () => {
};

// callback functions

// render functions

// create interface

// mount interface

updateInterface();

const root = document.querySelector('#root');
