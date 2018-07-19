import React from 'react';

import LogOffForm from './03-LogOffForm';
import LogOnForm from './04-LogOnForm';

const Header = ({doer, isWaiting, logOn, logOff}) => (
  <header>
    <h1>To Do List</h1>
    {doer
      ? <LogOffForm doer={doer} logOff={logOff}/>
      : <LogOnForm logOn={logOn} isWaiting={isWaiting}/>
    }
  </header>
);

export default Header;
