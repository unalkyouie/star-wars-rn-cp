import {AnyAction, Store} from '@reduxjs/toolkit';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';

import {AppState} from '../src/reducers';
import {theme} from '../src/theme';

const MockProviders: React.FC<{
  store: Store<AppState, AnyAction> & {
    dispatch: unknown;
  };
}> = ({children, store}) => {
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </PaperProvider>
  );
};

export default MockProviders;
