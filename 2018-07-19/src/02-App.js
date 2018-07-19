import React from 'react';

import TodoItems from './02-TodoItems';

const toggleCompleted = id => {
  console.info(`toggleCompleted id=${id}`)
}

const deleteItem = id => {
  console.info(`deleteItem id=${id}`)
};

const items = [
  {
    completed: true,
    text: 'Done that',
    id: 1,
  },
  {
    completed: false,
    text: 'Do this',
    id: 2,
  },
  {
    completed: false,
    text: 'To do or not to do',
    id: 3,
  },
];

class App extends React.Component {
  render() {
    return (
      <TodoItems items={items}/>
    );
  }
}

export default App;
