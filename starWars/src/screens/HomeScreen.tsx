import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Surface} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import {resource} from '../consts';
import {resourceSlice} from '../reducers/resourceReducer';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onPress = (val: resource) => {
    dispatch(resourceSlice.actions.setResource({resourceValue: val}));
  };

  return (
    <Surface>
      <Button
        mode="outlined"
        onPress={() => onPress(resource.people)}
        style={{alignSelf: 'center', width: '50%'}}
        uppercase>
        Person
      </Button>
      <Button
        mode="outlined"
        onPress={() => onPress(resource.starships)}
        style={{alignSelf: 'center', width: '50%'}}
        uppercase>
        Starships
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Game')}
        style={{alignSelf: 'center', width: '50%'}}
        uppercase>
        start game
      </Button>
    </Surface>
  );
};

export default HomeScreen;
