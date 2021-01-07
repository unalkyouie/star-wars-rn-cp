import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Surface} from 'react-native-paper';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Surface>
      <Button
        mode="outlined"
        uppercase
        onPress={() => navigation.navigate('Game')}
        style={{alignSelf: 'center', width: '50%'}}>
        start game
      </Button>
    </Surface>
  );
};

export default HomeScreen;
