import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'red',
    text: 'black',
    surface: 'white',
  },
};
