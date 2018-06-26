'use strict';

const stateInitial = {
  code: '',
  culinaryCategory: 'fruit',
  local: false,
  organic: false,
};

const state = {...stateInitial};

const resetCode = () => {
  state.code = stateInitial.code;
};

const resetState = () => {
  resetCode();
  state.culinaryCategory = stateInitial.culinaryCategory;
  state.local = stateInitial.local;
  state.organic = stateInitial.organic;
};

const form = document.querySelector('form[name="produce"]');

const updateCode = () => {
  try {
    form.elements.code.value = state.code;
  } catch (error) {
    console.error(error.message);
  }
};

const updateFormFromState = () => {
  updateCode();
  try {
    const elements = form.elements;
    elements.culinaryCategory.value = state.culinaryCategory;
    elements.local.checked = state.local;
    elements.organic.checked = state.organic;
  } catch (error) {
    console.error(error.message);
  }
};

const updateStateFromForm = () => {
  try {
    const elements = form.elements;
    state.code = elements.code.value;
    state.culinaryCategory = elements.culinaryCategory.value;
    state.local = elements.local.checked;
    state.organic = elements.organic.checked;
  } catch (error) {
    console.error(error.message);
  }
};

const onSubmit = (event) => {
  event.preventDefault();
  updateStateFromForm();
  console.log('onSubmit', JSON.stringify(state));
  resetCode();
  updateCode();
};

const onReset = (event) => {
  event.preventDefault();
  resetState();
  updateFormFromState();
};

try {
  updateFormFromState();
  form.addEventListener('submit', onSubmit);
  form.addEventListener('reset', onReset);
} catch (error) {
  console.error(error.message);
}
