import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, Surface, Text} from 'react-native-paper';

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
  const [isLoading, setIsLoading] = useState(true);

  const setFighters = async () => {
    setWinner('');
    setIsLoading(true);

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
    setIsLoading(false);
  };

  const getFighterData = async () => {
    const res = await getRandomElement(props.resourceUrl);
    return res;
  };
  useEffect(() => {
    setFighters();
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
      setWinner('DRAW');
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
        onPress={isFightFinished ? () => setFighters() : () => countWinner()}
        uppercase
        style={{alignSelf: 'center', width: '50%'}}>
        {isFightFinished ? 'new game' : 'fight'}
      </Button>
      <Text>{winner.length > 0 && `Winner: ${winner}`}</Text>
      {isLoading && (
        <ActivityIndicator
          style={{
            alignItems: 'center',
            bottom: 0,
            justifyContent: 'center',
            left: 0,
            opacity: 1,
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        />
      )}
    </>
  );
};

export default Game;
