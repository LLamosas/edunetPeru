import React, {useState} from 'react';
import {getStyles} from './Button.styles';
import {Pressable, Text, View} from 'react-native';
import Icon from '../Icon';
import {theme, ICONS, BUTTON_TYPES} from 'appConstants';

const Button = ({
  onPress = () => {},
  label,
  type = BUTTON_TYPES.PRIMARY,
  disabled = false,
  iconLeft,
  iconRight,
  iconSize = 24,
  testID = 'button-container',
  accessibilityLabel = 'button-container',
  style = {},
}) => {
  const styles = getStyles(theme);
  const colors = theme;
  const [pressed, setPressed] = useState(false);

  const buttonStyles = [styles.button];
  const buttonTextStyles = [styles.button__text];
  let iconColor = colors.secondary;

  switch (type) {
    case BUTTON_TYPES.SECONNDARY:
      buttonStyles.push(styles.button__secondary);
      buttonTextStyles.push(styles.button__text__secondary);
      if (pressed) {
        buttonStyles.push(styles.button__border__secondaryPressed);
        buttonTextStyles.push(styles.button__text__secondaryPressed);
      } else if (disabled) {
        buttonStyles.push(styles.button__border__secondaryDisabled);
        buttonTextStyles.push(styles.button__text__disabled);
      }
      break;

    case BUTTON_TYPES.TERITIARY:
      buttonStyles.push(styles.button__tertiary);
      buttonTextStyles.push(styles.button__text__tertiary);
      if (pressed) {
        buttonTextStyles.push(styles.button__text__tertiaryPressed);
        iconColor = colors.secondary70;
      } else if (disabled) {
        buttonTextStyles.push(styles.button__text__disabled);
        iconColor = colors.primary40;
      }
      break;

    default:
      if (pressed) {
        buttonStyles.push(styles.button__background__pressed);
      } else if (disabled) {
        buttonStyles.push(styles.button__background__disabled);
        buttonTextStyles.push(styles.button__text__disabled);
      }
      break;
  }

  const updatePressedValue = value => {
    setPressed(value);

    return value;
  };

  const shouldShowIcon = icon => {
    if (
      (type === BUTTON_TYPES.TERITIARY && typeof icon === 'boolean' && icon) ||
      (typeof icon === 'string' && icon !== '')
    ) {
      return true;
    }

    return false;
  };

  const getIconName = (icon, defaultIcon) => {
    if (typeof icon === 'string') {
      return icon;
    }

    return defaultIcon;
  };

  const iconLeftName = getIconName(iconLeft || false, ICONS.ARROW_LEFT);
  const iconRightName = getIconName(iconRight || false, ICONS.ARROW_RIGHT);

  return (
    <Pressable
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      style={[buttonStyles, style]}
      disabled={disabled}
      onPress={() => onPress()}
      onPressIn={() => updatePressedValue(true)}
      onPressOut={() => updatePressedValue(false)}>
      {shouldShowIcon(iconLeft || false) && (
        <View style={styles.button__iconLeft}>
          <Icon
            touchable={false}
            theme={theme}
            primaryColor={iconColor}
            secondaryColor={iconColor}
            size={iconSize}
            name={iconLeftName}
          />
        </View>
      )}

      <Text style={buttonTextStyles}>{label}</Text>

      {shouldShowIcon(iconRight || false) && (
        <View style={styles.button__iconRigth}>
          <Icon
            touchable={false}
            theme={theme}
            primaryColor={iconColor}
            secondaryColor={iconColor}
            size={iconSize}
            name={iconRightName}
          />
        </View>
      )}
    </Pressable>
  );
};

export default Button;
