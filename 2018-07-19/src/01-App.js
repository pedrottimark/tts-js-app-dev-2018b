import React from 'react';

import TodoItem from './01-TodoItem';

const toggleCompleted = id => {
  console.info(`toggleCompleted id=${id}`)
}

const deleteItem = id => {
  console.info(`deleteItem id=${id}`)
};

const item = {
  completed: true,
  text: 'Done that',
  id: 1,
};

class App extends React.Component {
  render() {
    return (
      <TodoItem item={item}/>
    );
  }
}

export default App;
