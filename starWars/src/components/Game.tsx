import React, {useEffect, useState} from 'react';
import {Button, Surface, Text} from 'react-native-paper';

import {Fighter, resource} from '../consts';
import Tile from '../components/Tile';
import {getRandomElement} from '../utils/getRandomElement';

const Game = (props: {resourceUrl: resource}) => {
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
  const [isFightFinished, setIsFightFinished] = useState(false);

  const details = async () => {
    setWinner('');
    const res1 = await getRandomElement(props.resourceUrl);
    const res2 = await getRandomElement(props.resourceUrl);
    setObjectLeftData({
      name: res1.name,
      fightingStat:
        props.resourceUrl === resource.people ? res1.height : res1.crew,
    });
    setObjectRightData({
      name: res2.name,
      fightingStat:
        props.resourceUrl === resource.people ? res2.height : res2.crew,
    });
    setIsFightFinished(false);
  };

  useEffect(() => {
    details();
  }, []);

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
            fightingStat={objectLeftData.fightingStat}
          />
        </Surface>
        <Surface style={{width: '50%'}}>
          <Text style={{textAlign: 'center'}}>{pointsRight}</Text>
          <Tile
            name={objectRightData.name}
            fightingStat={objectRightData.fightingStat}
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
