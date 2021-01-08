import {createSlice} from '@reduxjs/toolkit';

import {resource} from '../consts';

export interface ResourceState {
  resourceValue: string;
}

const INITIAL_STATE: ResourceState = {
  resourceValue: resource.people,
};
export const resourceSlice = createSlice({
  name: 'resource',
  initialState: INITIAL_STATE,
  reducers: {
    setResource(state, action) {
      state.resourceValue = action.payload;
    },
  },
});

export default resourceSlice.reducer;
