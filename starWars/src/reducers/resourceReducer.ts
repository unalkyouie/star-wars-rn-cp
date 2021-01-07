import {createSlice} from '@reduxjs/toolkit';

import {resource} from '../consts';

// export const SET_RESOURCE = 'starWars/resourceReducer/SET_RESOURCE';

export interface ResourceState {
  resourceValue: resource;
}
const INITIAL_STATE: ResourceState = {
  resourceValue: resource.people,
};

export const resourceSlice = createSlice({
  name: 'resource',
  initialState: INITIAL_STATE,
  reducers: {
    setResource(state, action) {
      const {resource} = action.payload;
      state.resourceValue = resource;
    },
  },
});

export default resourceSlice.reducer;
