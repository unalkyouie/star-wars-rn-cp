import React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';

const Tile = (props: {name: string; fightingStat: number}) => {
  return (
    <Card
      style={{
        padding: 10,
        paddingVertical: 100,
        margin: 10,
        height: 200,
      }}>
      <Card.Content style={{alignItems: 'center', justifyContent: 'center'}}>
        <Title style={{textAlign: 'center'}}>{props.name}</Title>
        <Paragraph style={{textAlign: 'center'}}>
          {props.fightingStat}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default Tile;
