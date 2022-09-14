import {Platform} from 'react-native';
import {StyleSheet} from 'react-native';
import {typography, theme} from 'appConstants';

const baseStyles = StyleSheet.create({
  label: {
    marginBottom: 8,
    ...typography().bodyBold,
  },
  input__holder: {
    borderRadius: 12,
    borderWidth: 2,
    overflow: 'visible',
    flexDirection: 'row',
    alignItems: 'center',
  },
  caption: {
    marginTop: 8,
    ...typography().tinyRegular,
  },
});

export const getStyles = () => {
  return StyleSheet.create({
    input__container: {
      width: '100%',
    },
    input__label__default: {
      ...baseStyles.label,
      color: theme.text,
    },
    input__label__error: {
      ...baseStyles.label,
      color: theme.error,
    },
    input__label__approved: {
      ...baseStyles.label,
      color: theme.approved,
    },

    input__holder__default: {
      ...baseStyles.input__holder,
      borderColor: theme.primary,
    },
    input__holder__error: {
      ...baseStyles.input__holder,
      borderColor: theme.error,
    },
    input__holder__approved: {
      ...baseStyles.input__holder,
      borderColor: theme.approved,
    },
    input__holder__focus: {
      borderColor: theme.secondary,
    },
    input__holder__disabled: {
      backgroundColor: theme.neutral30,
      borderColor: theme.neutral30,
    },

    masked__input: {
      ...typography().bodyRegular,
      width: '100%',
      height: '100%',
      padding: 0,
    },
    masked__input__disabled: {
      color: theme.text50,
    },
    input: {
      height: 48,
      flex: 1,
      paddingHorizontal: 16,
      lineHeight: Platform.select({ios: undefined, android: 20}),
    },
    input__disabled: {
      color: theme.text50,
    },
    input__icon: {
      paddingHorizontal: 12,
    },
    input__prefix: {
      ...typography().bodyRegular,
      paddingLeft: 14,
      color: theme.text50,
    },
    input__suffix: {
      ...typography().bodyRegular,
      color: theme.text50,
      marginRight: 12,
    },
    input__caption__default: {
      ...baseStyles.caption,
      color: theme.text,
    },
    input__caption__error: {
      ...baseStyles.caption,
      color: theme.error,
    },
    input__caption__approved: {
      ...baseStyles.caption,
      color: theme.approved,
    },
    inputSelect_container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputSelect__text: {
      ...typography().bodyRegular,
      marginLeft: 16,
      marginRight: 4,
      color: theme.text50,
    },
    options__modal: {
      backgroundColor: theme.overlay,
      alignItems: 'center',
      justifyContent: 'center',
    },
    options__container: {
      backgroundColor: theme.white,
      width: 280,
      borderRadius: 6,
      maxHeight: '65%',
      overflow: 'hidden',
    },
    menuItem__container: {
      paddingHorizontal: 16,
      backgroundColor: theme.white,
      height: 48,
      alignItems: 'center',
      flexDirection: 'row',
    },
    menuItem__separator: {
      borderBottomColor: theme.neutral30,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
};
