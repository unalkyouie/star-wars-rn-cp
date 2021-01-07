import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';

import NavContainer from './Navigation';
import store from './store';

const theme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'red',
    text: 'black',
    surface: 'white',
  },
};

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavContainer />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
