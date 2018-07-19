import React from 'react';

import TodoItems from './02-TodoItems';

import {
  fetchGetDoer,
  fetchGetItems,
  fetchPatchCompleted,
  fetchDeleteItem,
} from './07-fetch';
import {
  deleteItem,
  findItem,
  toggleCompleted,
} from './07-logic';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doer: null,
      items: [],
    };
  }

  componentDidMount() {
    const doerId = 'lesson14';
    Promise.all([
      fetchGetDoer(doerId),
      fetchGetItems(doerId),
    ]).then(([doer, items]) => {
      this.setState({
        doer,
        items,
      });
    }).catch(error => {
      console.error(error.message);
    });
  }

  _toggleCompleted = id => {
    this.setState(({items}) => {
      const item = findItem(items, id);
      if (item) {
        fetchPatchCompleted(id, !item.completed).catch(error => {
          console.error(error.message);
        });
      }
      return {items: toggleCompleted(items, id)};
    });
  }

  _deleteItem = id => {
    this.setState(({items}) => {
      fetchDeleteItem(id).catch(error => {
        console.error(error.message);
      });
      return {items: deleteItem(items, id)};
    });
  }

  render() {
    const {items} = this.state;
    return (
      <TodoItems
        items={items}
      />
    );
  }
}

export default App;
