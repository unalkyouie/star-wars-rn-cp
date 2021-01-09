import React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';

import {Fighter} from '../consts';

const Tile = (props: {fighter: Fighter; points: number}) => {
  return (
    <Card
      style={{
        padding: 10,
        paddingVertical: 100,
        margin: 10,
        height: 200,
      }}>
      <Card.Content style={{alignItems: 'center', justifyContent: 'center'}}>
        <Paragraph style={{textAlign: 'center'}}>{props.points}</Paragraph>
        <Title style={{textAlign: 'center'}}>{props.fighter.name}</Title>
        <Paragraph style={{textAlign: 'center'}}>
          {props.fighter.fightingStat}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default Tile;
