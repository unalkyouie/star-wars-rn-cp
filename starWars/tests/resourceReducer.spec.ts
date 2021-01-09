import reducer, {
  resourceSlice,
  ResourceState,
} from '../src/reducers/resourceReducer';
import {resource} from '../src/consts';
import {cleanup} from '@testing-library/react-native';

const initialState: ResourceState = {
  resourceValue: resource.people,
};

describe('resourceReducer', () => {
  it('should return initialState, when no state is provided', () => {
    const newState = reducer(undefined, {
      type: 'someType',
      payload: '1234',
    } as any);
    expect(newState.resourceValue).toBe(initialState.resourceValue);
  });
  it('should return new state after dispatching resourceSlice', () => {
    const action = resourceSlice.actions.setResource(resource.starships);
    expect(action.payload).toBe(resource.starships);
  });
});
