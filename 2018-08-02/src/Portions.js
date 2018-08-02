import React from 'react';
import {connect} from 'react-redux';

import Portion from './Portion';

const Portions = ({dispatch, isFetchingIds, isRenderingFormId, portions}) => (
  <ul className="portions">
    {portions.map(portion => (
      <Portion
        key={portion.id}
        dispatch={dispatch}
        isFetchingIds={isFetchingIds}
        isRenderingFormId={isRenderingFormId}
        portion={portion}
      />
    ))}
  </ul>
);

const mapStateToProps = ({
  isFetchingIds,
  isRenderingFormId,
  portions,
}) => ({
  isFetchingIds,
  isRenderingFormId,
  portions,
});

export default connect(mapStateToProps)(Portions);
