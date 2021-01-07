import {combineReducers} from '@reduxjs/toolkit';

import resourceReducer, {ResourceState} from './resourceReducer';

export interface AppState {
  resource: ResourceState;
}

export default combineReducers<AppState>({
  resource: resourceReducer,
});
