import React from 'react';

import {getRecommendationClass} from './logic';

const Portion = ({portion: {quantity, food: {id, recommendation}}, onClick}) => (
  <li>
    <span
      className={getRecommendationClass(recommendation)}
      onClick={onClick}
    >
      {`${id.replace(/_/g, ' ')}${quantity === 1 ? '' : ' ' + quantity}`}
    </span>
  </li>
);

export default Portion;
