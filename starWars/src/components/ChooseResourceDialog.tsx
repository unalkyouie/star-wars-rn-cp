import React, {useState} from 'react';
import {
  Button,
  Dialog,
  Paragraph,
  Portal,
  RadioButton,
} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import {resource} from '../consts';
import {resourceSlice} from '../reducers/resourceReducer';

const ChooseResourceDialog = (props: {
  isVisible: boolean;
  hideDialog: () => void;
}) => {
  const [value, setValue] = useState<string>(resource.people);

  const dispatch = useDispatch();
  const chooseResource = (val: string) => {
    dispatch(resourceSlice.actions.setResource({resourceValue: val}));
    setValue(val);
  };

  return (
    <Portal>
      <Dialog visible={props.isVisible} onDismiss={props.hideDialog}>
        <Dialog.Content>
          <Paragraph>
            To start the game choose which force you want to fight
          </Paragraph>
          <RadioButton.Group
            onValueChange={(value) => chooseResource(value)}
            value={value}>
            <RadioButton.Item
              accessibilityLabel="People"
              label="People"
              value={resource.people}
            />
            <RadioButton.Item
              accessibilityLabel="Starships"
              label="Starships"
              value={resource.starships}
            />
          </RadioButton.Group>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={props.hideDialog}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ChooseResourceDialog;
