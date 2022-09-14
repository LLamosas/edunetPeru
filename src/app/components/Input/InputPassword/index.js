import {getStyles} from './InputPassword.styles';
import {theme, INPUT_TYPES, ICONS} from 'appConstants';
import {Text, TextInput, View} from 'react-native';
import Icon from '../../Icon';
import React, {useState} from 'react';

const InputPassword = ({
  label,
  labelPolicy,
  value = '',
  caption = '',
  children,
  type = INPUT_TYPES.DEFAULT,
  testID = 'input',
  accessibilityLabel = 'input',
  style,
  onFocus,
  onBlur,
  editable = true,
  onChangeText,
  placeholder,
  placeholderTextColor,
}) => {
  const styles = getStyles(theme);
  const selectedtheme = theme;
  const placeholderTextColorValue =
    placeholderTextColor || selectedtheme.text50;
  const [focus, setFocus] = useState(false);
  const [visible, setVisible] = useState(false);

  let iconColor = '';
  switch (type) {
    case INPUT_TYPES.ERROR:
      iconColor = selectedtheme.error;
      break;
    case INPUT_TYPES.APPROVED:
      iconColor = selectedtheme.approved;
      break;
  }
  if (!editable) {
    iconColor = selectedtheme.primary50;
  }
  const inputHolderStyle = [
    styles['input__holder__' + type],
    style,
    focus && type === 'default' ? styles.input__holder__focus : {},
    !editable ? styles.input__holder__disabled : null,
  ];
  return (
    <View style={styles.input__container}>
      <Text style={styles['input__label__' + type]}>{label}</Text>
      <View style={inputHolderStyle}>
        <TextInput
          editable={editable}
          value={value}
          secureTextEntry={!visible}
          testID={testID}
          accessibilityLabel={accessibilityLabel}
          numberOfLines={1}
          placeholder={placeholder ? placeholder : undefined}
          placeholderTextColor={placeholderTextColorValue}
          onFocus={e => {
            setFocus(true);
            /* istanbul ignore else */
            if (onFocus) {
              onFocus(e);
            }
          }}
          onBlur={e => {
            setFocus(false);
            /* istanbul ignore else */
            if (onBlur) {
              onBlur(e);
            }
          }}
          onChangeText={text => {
            /* istanbul ignore else */
            onChangeText &&
              onChangeText(
                text
                  .replace(/(^\s*)|(\s*$)/gi, '') // removes leading and trailing spaces
                  .replace(/[ ]{1,}/gi, '') // replaces multiple spaces
                  .replace(/\n +/, '\n'),
              ); // Removes spaces after newlines);
          }}
          style={[styles.input, !editable ? styles.input__disabled : null]}
        />
        <Icon
          touchable={true}
          testID={`${testID}-icon`}
          accessibilityLabel={`${accessibilityLabel}-icon`}
          onPress={() => setVisible(!visible)}
          size={24}
          style={styles.input__icon}
          name={visible ? ICONS.PASSWORD_OFF : ICONS.PASSWORD_ON}
          primaryColor={iconColor}
        />
      </View>
      {caption ? (
        <Text style={styles['input__caption__' + type]}>{caption}</Text>
      ) : null}
      {labelPolicy ? (
        <Text style={styles.input__label__policies}>{labelPolicy}</Text>
      ) : null}
      <View>{children}</View>
    </View>
  );
};

export default InputPassword;
