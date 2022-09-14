import {Platform, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import {getStyles} from './Input.styles.js';
import {theme, INPUT_TYPES, ICONS} from 'appConstants';
import Icon from '../Icon';
import TextInputMask from 'react-native-text-input-mask';
import Tooltip from '../Tooltip';

const Input = ({
  label,
  value,
  caption,
  tooltip,
  secureText,
  type = INPUT_TYPES.DEFAULT,
  testID = 'input',
  accessibilityLabel = 'input',
  style,
  onFocus,
  onBlur,
  editable = true,
  prefix,
  suffix,
  keyboardType = 'default',
  placeholder,
  onChangeText,
  maxLength,
  mask,
  placeholderTextColor = theme.text50,
  ...otherProps
}) => {
  const styles = getStyles();
  const selectedtheme = theme;

  const [focus, setFocus] = useState(false);

  let iconName = '';
  let iconColor = '';
  switch (type) {
    case INPUT_TYPES.ERROR:
      iconName = ICONS.ERROR;
      iconColor = selectedtheme.error;
      break;
    case INPUT_TYPES.APPROVED:
      iconName = ICONS.CHECK;
      iconColor = selectedtheme.approved;
      break;
    default:
      iconName = ICONS.ERROR;
      iconColor = selectedtheme.error;
      break;
  }
  const inputHolderStyle = [
    styles['input__holder__' + type],
    style,
    focus && type === 'default' ? styles.input__holder__focus : {},
    !editable ? styles.input__holder__disabled : null,
  ];
  const inputStyle = [styles.input, !editable ? styles.input__disabled : null];

  const maskedInputStyle = [
    styles.masked__input,
    !editable ? styles.masked__input__disabled : null,
  ];

  //Not reachable since ActionSheetIOS doesn't have mock support
  /* istanbul ignore next */

  const getInputComponent = () => {
    return mask ? (
      <>
        {Platform.OS === 'ios' ? (
          <TextInputMask
            testID={testID}
            accessibilityLabel={accessibilityLabel}
            keyboardType={keyboardType}
            maxLength={maxLength}
            secureTextEntry={secureText}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={inputStyle}
            onChangeText={onChangeText}
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
            mask={mask}
            value={value}
          />
        ) : (
          <View style={[inputStyle]}>
            <TextInputMask
              testID={testID}
              accessibilityLabel={accessibilityLabel}
              keyboardType={keyboardType}
              maxLength={maxLength}
              secureTextEntry={secureText}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              style={[maskedInputStyle]}
              onChangeText={onChangeText}
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
              mask={mask}
              value={value}
            />
          </View>
        )}
      </>
    ) : (
      <TextInput
        {...otherProps}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        placeholderTextColor={placeholderTextColor}
        numberOfLines={1}
        keyboardType={keyboardType}
        maxLength={maxLength}
        secureTextEntry={secureText}
        onChangeText={text => {
          /* istanbul ignore else */
          if (onChangeText) {
            onChangeText(text);
          }
        }}
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
        style={inputStyle}
        value={value}
      />
    );
  };

  const inputIconType = () => {
    return type !== INPUT_TYPES.DEFAULT && !suffix && !tooltip ? (
      <View style={styles.input__icon}>
        <Icon
          touchable={false}
          size={24}
          name={iconName}
          primaryColor={iconColor}
        />
      </View>
    ) : null;
  };

  const inputTooltip = () => {
    return tooltip ? (
      <View style={styles.input__icon}>
        <Tooltip text={tooltip} hideTime={4000}>
          <Icon name={ICONS.QUESTION} touchable={false} size={24} />
        </Tooltip>
      </View>
    ) : null;
  };

  /* istanbul ignore next */
  return (
    <View style={styles.input__container}>
      <Text style={styles['input__label__' + type]}>{label}</Text>
      <View style={inputHolderStyle}>
        {prefix ? <Text style={styles.input__prefix}>{prefix}</Text> : null}

        {getInputComponent()}

        {suffix ? <Text style={styles.input__suffix}>{suffix}</Text> : null}

        {inputIconType()}

        {inputTooltip()}
      </View>

      <Text style={styles['input__caption__' + type]}>{caption}</Text>
    </View>
  );
};

export default Input;
