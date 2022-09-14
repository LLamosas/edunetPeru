import {StyleSheet} from 'react-native';

export const getStyles = () => {
  return StyleSheet.create({
    checkBox: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    checkBox__container: {
      flexDirection: 'row',
    },
    checkBox__iconContainer: {
      paddingRight: 5,
    },
  });
};
