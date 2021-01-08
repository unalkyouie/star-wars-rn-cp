import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';

import AppContainer from './Navigation';
import store from './store';
import {theme} from './theme';

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
