import React from 'react';
import {Surface} from 'react-native-paper';
import {useSelector} from 'react-redux';

import Game from '../components/Game';
import {resource} from '../consts';
import {AppState} from '../reducers';

const GameScreen = () => {
  const resourceUrl = useSelector<AppState, resource>(
    (state) => state.resource.resourceValue,
  );

  return (
    <Surface>
      <Game resourceUrl={resourceUrl} />
    </Surface>
  );
};

export default GameScreen;
