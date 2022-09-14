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
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
  },
  caption: {
    marginTop: 8,
    ...typography().bodyRegular,
  },
  label__policy: {
    marginVertical: 4,
    marginLeft: 6,
    ...typography().bodyRegular,
  },
});

export const getStyles = () => {
  return StyleSheet.create({
    input__container: {
      width: '100%',
    },
    input__policies__container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
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
      color: theme.text,
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
    input: {
      ...typography().bodyRegular,
      height: 48,
      flex: 1,
      paddingHorizontal: 16,
      lineHeight: Platform.select({ios: undefined, android: 20}),
    },
    input__disabled: {
      color: theme.text50,
    },
    input__icon: {
      paddingRight: 2,
    },
    input__caption__default: {
      ...baseStyles.caption,
      color: theme.text50,
    },
    input__caption__error: {
      ...baseStyles.caption,
      color: theme.error,
    },
    input__caption__approved: {
      ...baseStyles.caption,
      color: theme.text50,
    },
    input__label__policies: {
      ...baseStyles.label__policy,
      color: theme.text,
    },
    input__caption__policies: {
      ...baseStyles.label__policy,
      color: theme.text,
      maxWidth: 200,
    },
    list__dot: {
      height: 9,
      width: 9,
      backgroundColor: theme.neutral30,
      borderRadius: 50,
      marginLeft: 8,
      marginRight: 12,
      marginVertical: 10,
    },
    list__dot__error: {
      backgroundColor: theme.error,
    },
  });
};
