import React, {useEffect, useState} from 'react';
import {Button, Surface, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';

import {Person, resource} from '../consts';
import Tile from '../components/Tile';
import {getRandomElement} from '../utils/getRandomElement';
import {AppState} from '../reducers';

const Game = () => {
  const resourceUrl = useSelector<AppState, resource>(
    (state) => state.resource.resourceValue,
  );
  const [winner, setWinner] = useState('');
  const [objectLeftData, setObjectLeftData] = useState<Person>({
    name: '',
    height: 0,
  });
  const [objectRightData, setObjectRightData] = useState<Person>({
    name: '',
    height: 0,
  });
  const [pointsRight, setPointsRight] = useState(0);
  const [pointsLeft, setPointsLeft] = useState(0);
  const [isFightFinished, setIsFightFinished] = useState(false);

  const details = async () => {
    setWinner('');
    const res1: Person = await getRandomElement(resourceUrl);
    const res2: Person = await getRandomElement(resourceUrl);
    setObjectLeftData(res1);
    setObjectRightData(res2);
    setIsFightFinished(false);
  };

  useEffect(() => {
    details();
  }, []);

  const countWinner = () => {
    if (Number(objectLeftData.height) > Number(objectRightData.height)) {
      setWinner(objectLeftData.name);
      setPointsLeft((prev) => prev + 1);
    } else if (Number(objectLeftData.height) < Number(objectRightData.height)) {
      setWinner(objectRightData.name);
      setPointsRight((prev) => prev + 1);
    } else {
      setWinner(objectRightData.name);
      setPointsRight((prev) => prev + 1);
      setPointsLeft((prev) => prev + 1);
    }
    setIsFightFinished(true);
  };

  return (
    <>
      <Surface style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Surface style={{width: '50%'}}>
          <Text style={{textAlign: 'center'}}>{pointsLeft}</Text>
          <Tile
            name={objectLeftData.name}
            fightingStat={objectLeftData.height}
          />
        </Surface>
        <Surface style={{width: '50%'}}>
          <Text style={{textAlign: 'center'}}>{pointsRight}</Text>
          <Tile
            name={objectRightData.name}
            fightingStat={objectRightData.height}
          />
        </Surface>
      </Surface>
      <Button
        mode="outlined"
        onPress={isFightFinished ? () => details() : () => countWinner()}
        uppercase
        style={{alignSelf: 'center', width: '50%'}}>
        {isFightFinished ? 'new game' : 'fight'}
      </Button>
      <Text>{winner.length > 0 && `Winner: ${winner}`}</Text>
    </>
  );
};

export default Game;
