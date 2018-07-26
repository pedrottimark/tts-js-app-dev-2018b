import React from 'react';

import {getRecommendationClass} from './logic';

const Food = ({food: {id, recommendation}, onClick}) => (
  <li>
    <span className={getRecommendationClass(recommendation)} onClick={onClick}>{id.replace(/_/g, ' ')}</span>
  </li>
);

export default Food;
