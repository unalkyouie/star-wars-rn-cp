import React, {useEffect, useState} from 'react';
import {Button, Surface, Text} from 'react-native-paper';

import {Fighter} from '../consts';
import Tile from '../components/Tile';
import {getRandomElement} from '../utils/getRandomElement';
import {getData} from '../utils/getData';

const Game = (props: {resourceUrl: string}) => {
  const [winner, setWinner] = useState('');
  const [objectLeftData, setObjectLeftData] = useState<Fighter>({
    name: '',
    fightingStat: 0,
  });
  const [objectRightData, setObjectRightData] = useState<Fighter>({
    name: '',
    fightingStat: 0,
  });
  const [pointsRight, setPointsRight] = useState(0);
  const [pointsLeft, setPointsLeft] = useState(0);
  const [isFightFinished, setIsFightFinished] = useState(true);

  const setFighters = async () => {
    setWinner('');
    const res1 = await getFighterData();
    const res2 = await getFighterData();
    res1 &&
      setObjectLeftData(() => {
        return {
          name: res1.name,
          fightingStat: res1.height ? res1.height : res1.crew ? res1.crew : 0,
        };
      });
    res2 &&
      setObjectRightData({
        name: res2.name,
        fightingStat: res2.height ? res2.height : res2.crew ? res2.crew : 0,
      });
    setIsFightFinished(false);
  };

  const getFighterData = async () => {
    const res = getRandomElement(await getData(props.resourceUrl));
    return res;
  };

  const countWinner = () => {
    if (
      Number(objectLeftData.fightingStat) > Number(objectRightData.fightingStat)
    ) {
      setWinner(objectLeftData.name);
      setPointsLeft((prev) => prev + 1);
    } else if (
      Number(objectLeftData.fightingStat) < Number(objectRightData.fightingStat)
    ) {
      setWinner(objectRightData.name);
      setPointsRight((prev) => prev + 1);
    } else {
      setWinner('DRAW');
    }
    setIsFightFinished(true);
  };

  return (
    <>
      <Surface
        style={{flexDirection: 'row', justifyContent: 'space-between'}}
        testID={'game'}>
        <Tile fighter={objectLeftData} points={pointsLeft} />
        <Tile fighter={objectRightData} points={pointsRight} />
      </Surface>
      <Button
        mode="outlined"
        onPress={isFightFinished ? () => setFighters() : () => countWinner()}
        uppercase
        style={{alignSelf: 'center', width: '50%'}}>
        {isFightFinished ? 'new game' : 'fight'}
      </Button>
      <Text testID="Winner">{winner.length > 0 && `Winner: ${winner}`}</Text>
    </>
  );
};

export default Game;
