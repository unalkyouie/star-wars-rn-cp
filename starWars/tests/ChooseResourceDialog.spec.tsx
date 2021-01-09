import {configureStore} from '@reduxjs/toolkit';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import React from 'react';

import ChooseResourceDialog from '../src/components/ChooseResourceDialog';
import reducers from '../src/reducers';
import MockProviders from './MockProviders';

describe('<ChooseResourceDialog/>', () => {
  it('radio should change value on chosen option', async () => {
    const store = configureStore({reducer: reducers});
    const hideDialog = jest.fn();
    const {getByLabelText, queryByText} = render(
      <MockProviders store={store}>
        <ChooseResourceDialog isVisible={true} hideDialog={hideDialog} />
      </MockProviders>,
    );
    await waitFor(() => {
      const radioStarships = getByLabelText('Starships');
      const radioPeople = getByLabelText('People');
      expect(radioPeople).toBeChecked;
      expect(radioStarships).not.toBeChecked;
      expect(queryByText('current value=people/')).toBeTruthy;
      fireEvent.press(radioStarships);
      expect(radioPeople).not.toBeChecked;
      expect(radioStarships).toBeChecked;
      expect(queryByText('current value=starships/')).toBeTruthy;
    });
  });
  it('should close clicking button OK', async () => {
    const store = configureStore({reducer: reducers});
    const hideDialog = jest.fn();
    const {getByText} = render(
      <MockProviders store={store}>
        <ChooseResourceDialog isVisible={true} hideDialog={hideDialog} />
      </MockProviders>,
    );
    await waitFor(() => {
      const okButton = getByText('OK');
      expect(okButton).toBeTruthy();
      fireEvent.press(okButton);
      expect(hideDialog).toHaveBeenCalled();
    });
  });
});
