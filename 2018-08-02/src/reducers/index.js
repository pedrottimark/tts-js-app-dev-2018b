import {combineReducers} from 'redux';

import foodMap from './foodMap';
import isFetchingIds from './isFetchingIds';
import isGetting from './isGetting';
import isRenderingFormId from './isRenderingFormId';
import message from './message';
import portions from './portions';

export default combineReducers({
  foodMap,
  isFetchingIds,
  isGetting,
  isRenderingFormId,
  message,
  portions,
});
