import React from 'react';
import {SafeAreaView} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import NavContainer from './Navigation';

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
    <PaperProvider theme={theme}>
      <NavContainer />
    </PaperProvider>
  );
};

export default App;
