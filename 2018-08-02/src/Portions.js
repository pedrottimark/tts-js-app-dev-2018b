import React from 'react';
import {connect} from 'react-redux';

import Portion from './Portion';

const Portions = ({dispatch, foodMap, isFetchingIds, isRenderingFormId, portions}) => (
  <ul className="portions">
    {portions.map(portion => (
      <Portion
        key={portion.id}
        dispatch={dispatch}
        food={foodMap.get(portion.foodId)}
        isFetchingIds={isFetchingIds}
        isRenderingFormId={isRenderingFormId}
        portion={portion}
      />
    ))}
  </ul>
);

const mapStateToProps = ({
  foodMap,
  isFetchingIds,
  isRenderingFormId,
  portions,
}) => ({
  foodMap,
  isFetchingIds,
  isRenderingFormId,
  portions,
});

export default connect(mapStateToProps)(Portions);
