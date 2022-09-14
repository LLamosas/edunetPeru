import {StyleSheet} from 'react-native';
import {typography, theme} from 'appConstants';

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
    },
    title__text: {
      ...typography().captionRegular,
      color: theme.neutral70,
      paddingLeft: '4%',
      marginTop: 10,
      width: '100%',
      height: '100%',
    },
    divider: {
      borderColor: theme.primary30,
      width: '100%',
      borderWidth: 1,
    },
  });
};
