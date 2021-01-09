import {configureStore} from '@reduxjs/toolkit';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import React from 'react';

import HomeScreen from '../src/screens/HomeScreen';
import reducers from '../src/reducers';
import MockProviders from './MockProviders';

const navigate = jest.fn();

jest.mock('@react-navigation/core', () => ({
  useNavigation: jest.fn(() => ({
    navigate,
  })),
}));

describe('<HomeScreen/>', () => {
  beforeEach(() => {
    navigate.mockClear();
  });

  it('should render new game button', () => {
    const store = configureStore({reducer: reducers});
    const {getByText} = render(
      <MockProviders store={store}>
        <HomeScreen />
      </MockProviders>,
    );
    const button = getByText('start new game');
    expect(button).toBeTruthy();
  });
  it('should show dialog after clicking the button', async () => {
    const store = configureStore({reducer: reducers});
    const {getByText} = render(
      <MockProviders store={store}>
        <HomeScreen />
      </MockProviders>,
    );
    const button = getByText('start new game');
    fireEvent.press(button);
    await waitFor(() =>
      expect(
        getByText('To start the game choose which force you want to fight'),
      ).toBeTruthy(),
    );
  });
  it('should navigate to GameScreen after closing dialog', async () => {
    const store = configureStore({reducer: reducers});
    const {getByText} = render(
      <MockProviders store={store}>
        <HomeScreen />
      </MockProviders>,
    );
    const button = getByText('start new game');
    fireEvent.press(button);
    await waitFor(() => {
      const dialogButton = getByText('OK');
      fireEvent.press(dialogButton);
      expect(navigate).toBeCalledTimes(1);
    });
  });
});
