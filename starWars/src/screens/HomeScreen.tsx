import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, Surface} from 'react-native-paper';

import ChooseResourceDialog from '../components/ChooseResourceDialog';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  const hideDialog = () => {
    setIsVisible(false);
    navigation.navigate('Game');
  };
  return (
    <Surface>
      <ChooseResourceDialog isVisible={isVisible} hideDialog={hideDialog} />
      <Button
        mode="outlined"
        onPress={() => setIsVisible(true)}
        style={{alignSelf: 'center', width: '50%'}}
        uppercase>
        start new game
      </Button>
    </Surface>
  );
};

export default HomeScreen;
