import './00-app.css';
import createElement from './00-createElement';
import {
  fetchGetReturningPurchaser,
  fetchGetPurchases,
} from './06-fetch'; // TODO
import {
  addId,
  removeId,
  hasId,
  deletePurchase,
  findIndexPurchase,
} from './06-logic';

const purchaserId = 'delEater';

const stateInitial = {
  isWaiting: [],
  purchaser: null,
  purchases: [],
};

let state = {...stateInitial};

// Given some properties of state, merge new values and update interface.
const setState = stateChanges => {
  state = {...state, ...stateChanges};
  updateInterface();
};

const onClickDelete = id => {
/* TODO
  setState({
    isWaiting: addId(state.isWaiting, id),
  });

  const {purchases} = state;
  fetchDeletePurchase(id).then(() => {
    const index = findIndexPurchase(purchases, id);
    tbodyPurchases.removeChild(tbodyPurchases.children[index]);
    setState({
      isWaiting: removeId(state.isWaiting, id),
      purchases: deletePurchase(state.purchases, id),
    });
  }).catch(error => {
    console.error(error.message);
    setState({
      isWaiting: removeId(state.isWaiting, id),
    });
  });
*/
};

// create interface


// Update interface elements after incremental update to global state variables.
const updateInterface = () => {
  const {isWaiting, purchases} = state;
  purchases.forEach(({id}, index) => {
    tbodyPurchases.children[index].querySelector('button').disabled = hasId(isWaiting, id);
  });
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

const renderDeleteButton = id => createElement(
  'button',
  {onClick: onClickDelete.bind(null, id)},
  'Delete'
);

const renderPurchase = ({id, quantity, product: {description}}) => createElement(
  'tr',
  null,
  createElement('td', {className: 'quantity'}, quantity),
  createElement('td', {className: 'description'}, description),
  createElement('td', {className: 'delete'}, renderDeleteButton(id))
);

const tbodyPurchases = createElement('tbody');

const tablePurchases = createElement(
  'table',
  null,
  createElement(
    'thead',
    null,
    createElement(
      'tr',
      null,
      createElement('th', {scope: 'col', className: 'quantity'}, 'Quantity'),
      createElement('th', {scope: 'col', className: 'description'}, 'Description'),
      createElement('th', {scope: 'col', className: 'delete'})
    ),
  ),
  tbodyPurchases
);

// mount interface

const root = document.querySelector('#root');
root.appendChild(header);

Promise.all([
  fetchGetReturningPurchaser(purchaserId),
  fetchGetPurchases(purchaserId),
]).then(([purchaser, purchases]) => {
  purchases.forEach(purchase => {
    tbodyPurchases.appendChild(renderPurchase(purchase));
  });
  setState({
    purchaser,
    purchases,
  });
  header.appendChild(renderFormLogOff(purchaser));
  root.appendChild(tablePurchases);
}).catch(error => {
  console.error(error.message);
});
