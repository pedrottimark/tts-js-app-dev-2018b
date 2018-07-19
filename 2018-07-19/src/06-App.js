import React from 'react';

import NewItemForm from './06-NewItemForm';

const doerId = 'addoer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWaiting: false,
      keyItemForm: -1,
      messageFailed: '',
    };
  }

  _addItem = text => {
    this.setState({
      isWaiting: true,
      messageFailed: '',
    });
  }

  render() {
    const {isWaiting, keyItemForm, messageFailed} = this.state;
    return (
      <NewItemForm
        key={keyItemForm}
        isWaiting={isWaiting}
        messageFailed={messageFailed}
        addItem={this._addItem}
      />
    );
  }
}

export default App;
