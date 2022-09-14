import {StyleSheet} from 'react-native';

export const getStyles = () => {
  return StyleSheet.create({
    radio: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    radio__container: {
      flexDirection: 'row',
    },
    radio__iconContainer: {
      paddingRight: 5,
    },
  });
};
