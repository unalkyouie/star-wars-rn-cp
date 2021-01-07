import React from 'react';
import {Surface, Text} from 'react-native-paper';

import Game from '../components/Game';

const GameScreen = () => {
  return (
    <Surface>
      <Text>Game</Text>
      <Game />
    </Surface>
  );
};

export default GameScreen;
