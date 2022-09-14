import {StyleSheet} from 'react-native';
import {theme, typography} from 'appConstants';

export const getStyles = () => {
  return StyleSheet.create({
    tooltip: {
      position: 'relative',
    },
    tooltip__container: {
      position: 'absolute',
      backgroundColor: theme.neutral70,
      zIndex: 2,
      paddingVertical: 9,
      paddingHorizontal: 16,
      borderRadius: 6,
    },
    tooltip__text: {
      color: theme.white,
      ...typography().captionBold,
      maxWidth: 150,
      height: 'auto',
    },
    tooltip__childrenHolder: {
      alignSelf: 'flex-start',
    },
  });
};
