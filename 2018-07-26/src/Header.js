import React from 'react';
import {NavLink} from 'react-router-dom';

import {categories} from './content';

const Header = () => (
  <header>
    <h1><NavLink exact to="/">Healthy Eating</NavLink></h1>
    <nav>
      {categories.map(category => (
        <NavLink key={category} to={`/${category}`} className={category}>{category}</NavLink>
      ))}
    </nav>
  </header>
);

export default Header;
