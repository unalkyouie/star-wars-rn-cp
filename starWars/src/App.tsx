import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';

import AppContainer from './Navigation';
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
        <SafeAreaView style={{flex: 1}}>
          <AppContainer />
        </SafeAreaView>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
