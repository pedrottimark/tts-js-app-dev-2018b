import convertToJSON from './00-convertToJSON';

export const fetchPostItem = ({doerId, completed, text}) => fetch(`/items`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({doerId, completed, text}),
}).then(convertToJSON);
