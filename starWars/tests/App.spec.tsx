import React from 'react';
import {cleanup, render, waitFor} from '@testing-library/react-native';

import App from '../src/App';

describe('<App/>', () => {
  afterEach(() => {
    cleanup();
  });
  it('should render HomeScreen as the default', async () => {
    const {getByText} = render(<App />);
    await waitFor(() => {
      const HomeScreen = getByText('Home');
      expect(HomeScreen).toBeTruthy();
    });
  });
});
