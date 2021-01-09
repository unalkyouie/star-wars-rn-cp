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
      const {resourceValue} = action.payload;
      state.resourceValue = resourceValue;
    },
  },
});

export default resourceSlice.reducer;
