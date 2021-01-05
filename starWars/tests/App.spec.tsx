import React from 'react';
import {render} from '@testing-library/react-native';

import App from '../src/App';

describe('<App/>', () => {
  it('should display Text', () => {
    const {getByText} = render(<App />);
    const renderedText = getByText('This is RN App').children;
    expect(renderedText).toHaveLength(1);
  });
});
