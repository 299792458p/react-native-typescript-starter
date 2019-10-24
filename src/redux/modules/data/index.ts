import { combineReducers } from 'redux';

import uiReducer from './uiReducer';

const combinedReducer = combineReducers({
  ui: uiReducer
});

export default combinedReducer;
