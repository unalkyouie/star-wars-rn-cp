import React, {useState} from 'react';
import {
  Button,
  Dialog,
  Paragraph,
  Portal,
  RadioButton,
  Surface,
  Text,
} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import {resource} from '../consts';
import {resourceSlice} from '../reducers/resourceReducer';

const ChooseResourceDialog = (props: {
  isVisible: boolean;
  hideDialog: () => void;
}) => {
  const [checked, setChecked] = useState(resource.people);

  const dispatch = useDispatch();
  const chooseResource = (val: resource) => {
    dispatch(resourceSlice.actions.setResource({resourceValue: val}));
    setChecked(val);
  };

  return (
    <Portal>
      <Dialog visible={props.isVisible} onDismiss={props.hideDialog}>
        <Dialog.Content>
          <Paragraph>
            To start the game choose which force you want to fight
          </Paragraph>
          <Surface style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value={resource.people}
              status={checked === resource.people ? 'checked' : 'unchecked'}
              onPress={() => chooseResource(resource.people)}
            />
            <Text>People</Text>
          </Surface>
          <Surface style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value={resource.starships}
              status={checked === resource.starships ? 'checked' : 'unchecked'}
              onPress={() => chooseResource(resource.starships)}
            />
            <Text>Starships</Text>
          </Surface>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={props.hideDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ChooseResourceDialog;
