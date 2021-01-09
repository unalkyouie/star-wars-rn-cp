import React from 'react';
import {cleanup, render} from '@testing-library/react-native';

import GameScreen from '../src/screens/GameScreen';
import reducers, {AppState} from '../src/reducers';
import MockProviders from './MockProviders';
import {configureStore} from '@reduxjs/toolkit';

describe('<GameScreen/>', () => {
  afterEach(() => {
    cleanup();
  });
  it('should render <Game/>', async () => {
    const store = configureStore({reducer: reducers});
    const {getByTestId} = render(
      <MockProviders store={store}>
        <GameScreen />
      </MockProviders>,
    );
    const game = getByTestId('game');
    expect(game).toBeTruthy();
  });
});
