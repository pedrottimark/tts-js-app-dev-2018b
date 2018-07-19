import convertToJSON from './00-convertToJSON';

export const fetchGetDoer = doerId => fetch(`/doers/${doerId}`).then(convertToJSON);

export const fetchGetItems = doerId => fetch(`/doers/${doerId}/items?completed=false`).then(convertToJSON);

export const fetchPatchCompleted = (itemId, completed) => fetch(`/items/${itemId}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({completed}),
}).then(convertToJSON);

export const fetchDeleteItem = itemId => fetch(`/items/${itemId}`, {
  method: 'DELETE',
});
