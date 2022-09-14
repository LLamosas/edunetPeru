import {theme} from 'appConstants';
import {StyleSheet} from 'react-native';

const SPACE = 8;

export const getStyles = () => {
  return StyleSheet.create({
    radio: {
      width: SPACE * 3,
      height: SPACE * 3,
      borderColor: theme.primary,
      borderWidth: 2,
      borderRadius: SPACE * 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radio__dot: {
      width: 12,
      height: 12,
      backgroundColor: theme.primary,
      borderRadius: SPACE * 2,
    },
    radio__disabled: {
      borderColor: theme.neutral30,
    },
    radio__dot__disabled: {
      backgroundColor: theme.neutral30,
    },
  });
};
