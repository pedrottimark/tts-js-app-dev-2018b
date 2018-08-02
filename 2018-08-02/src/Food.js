import React from 'react';

import {getFoodText, getRecommendationClass} from './logic';

const Food = ({addFood, food: {id, recommendation}, isDisabled}) => (
  <li className={isDisabled ? 'disabled' : ''}>
    <span
      className={getRecommendationClass(recommendation)}
      onClick={isDisabled ? undefined : addFood.bind(null, id)}
    >
      {getFoodText(id)}
    </span>
  </li>
);

export default Food;
