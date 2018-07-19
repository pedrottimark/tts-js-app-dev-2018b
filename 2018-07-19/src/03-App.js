import React from 'react';

import LogOffArea from './03-LogOffArea';

const doer = {
  id: 'pedrottimark',
  name: 'Mark Pedrotti'
};

const logOff = () => {
  console.info(`logOff`);
}

class App extends React.Component {
  render() {
    return (
      <header>
        <h1>To Do List</h1>
        <LogOffArea doer={doer} logOff={logOff}/>
      </header>
    );
  }
}

export default App;
