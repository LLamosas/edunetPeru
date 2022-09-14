import {StyleSheet} from 'react-native';
import {theme, typography} from 'appConstants';

export const getStyles = () => {
  return StyleSheet.create({
    button: {
      backgroundColor: theme.primary,
      minHeight: 56,
      width: '100%',
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button__secondary: {
      backgroundColor: theme.white,
      borderColor: theme.primary,
      borderWidth: 2,
    },
    button__tertiary: {
      paddingVertical: 6,
      backgroundColor: 'transparent',
      width: undefined,
      minHeight: 32,
      height: 32,
      borderRadius: 0,
      minWidth: 1,
      flexDirection: 'row',
      alignSelf: 'center',
    },
    button__text: {
      ...typography().buttonRegular,
      color: theme.white,
      alignSelf: 'center',
    },
    button__text__secondary: {
      color: theme.primary,
    },
    button__text__tertiary: {
      color: theme.secondary,
      alignSelf: undefined,
    },
    button__background__pressed: {
      backgroundColor: theme.primary50,
    },
    button__text__secondaryPressed: {
      color: theme.primary50,
    },
    button__border__secondaryPressed: {
      borderColor: theme.primary50,
    },
    button__text__tertiaryPressed: {
      color: theme.secondary70,
    },
    button__background__disabled: {
      backgroundColor: theme.primary30,
    },
    button__border__secondaryDisabled: {
      borderColor: theme.primary30,
    },
    button__text__disabled: {
      color: theme.primary40,
    },
    button__iconLeft: {
      marginRight: 8,
    },
    button__iconRigth: {
      marginLeft: 8,
    },
  });
};
