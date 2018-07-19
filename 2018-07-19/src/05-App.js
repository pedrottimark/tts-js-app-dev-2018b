import React from 'react';

import Header from './05-Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doer: null,
      isWaiting: false,
      messageFailed: '',
    };
  }

  _logOff = () => {
    this.setState({
      doer: null,
    });
  }

  _logOn = id => {
    this.setState({
      isWaiting: true,
    });
  }

  render() {
    const {doer, isWaiting, messageFailed} = this.state;
    return (
      <Header
        doer={doer}
        isWaiting={isWaiting}
        messageFailed={messageFailed}
        logOff={this._logOff}
        logOn={this._logOn}
      />
    );
  }
}

export default App;
