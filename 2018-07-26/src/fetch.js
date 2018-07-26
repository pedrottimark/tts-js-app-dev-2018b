import convertToJSON from './convertToJSON';

export const fetchGetFoods = () => fetch(`/foods`).then(convertToJSON);

export const fetchGetPortions = () => fetch(`/portions?_expand=food`).then(convertToJSON);

export const fetchPostPortion = ({foodId, index, quantity}) => fetch(`/portions`, {
  body: JSON.stringify({foodId, index, quantity})
}).then(convertToJSON);

export const fetchPatchPortion = (portionId, quantity) => fetch(`/portions/${portionId}`, {
  body: JSON.stringify({quantity})
}).then(convertToJSON);

export const fetchDeletePortion = portionId => fetch(`/portions/${portionId}`, {
});
