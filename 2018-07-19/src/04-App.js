import React from 'react';

import LogOnForm from './04-LogOnForm';

const logOn = doerId => {
  console.info(`logOn doerId=${doerId}`);
}

class App extends React.Component {
  render() {
    return (
      <header>
        <h1>To Do List</h1>
        <LogOnForm logOn={logOn}/>
      </header>
    );
  }
}

export default App;
