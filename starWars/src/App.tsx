import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider, Text} from 'react-native-paper';

import Tile from './components/Tile';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView>
        <Text>This is RN App</Text>
        <Tile />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
