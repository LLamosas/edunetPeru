import {StyleSheet} from 'react-native';
import {theme, typography} from 'appConstants';

export const getStyles = () => {
  return StyleSheet.create({
    stepper__container: {
      width: '100%',
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.primary30,
    },
    stepper__progress: {
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.secondary,
    },
    stepper__textContainer: {
      width: '100%',
      marginTop: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    stepper__textLeft: {
      ...typography().bodyRegular,
      color: theme.text,
    },
    stepper__textRight: {
      ...typography().captionRegular,
      color: theme.text50,
    },
  });
};
