import React, {useEffect, useState} from 'react';
import {Button, Surface} from 'react-native-paper';

const HomeScreen = () => {
  return (
    <Surface>
      <Button
        mode="outlined"
        uppercase
        style={{alignSelf: 'center', width: '50%'}}>
        start game
      </Button>
    </Surface>
  );
};

export default HomeScreen;
