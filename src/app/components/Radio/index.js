import {TouchableOpacity, View} from 'react-native';
import {getStyles} from './Radio.styles';
import {theme, SELECTORS} from 'appConstants';
import Icon from '../Icon/index.js';
import React from 'react';

const Radio = ({
  onPress = () => {},
  size = 20,
  children,
  selected = false,
  disabled = false,
  testID = 'checkBox-touch',
  accessibilityLabel = 'checkBox-touch',
  align = 'center',
}) => {
  const styles = getStyles();
  const selectedTheme = theme;

  let primaryColor = selectedTheme.primary;
  if (disabled) {
    primaryColor = selectedTheme.primary40;
  }

  return (
    <TouchableOpacity
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={styles.radio}
      disabled={disabled}>
      <View style={[styles.radio__container, {alignItems: align}]}>
        <View style={styles.radio__iconContainer}>
          <Icon
            name={selected ? SELECTORS.RADIO_ON : SELECTORS.RADIO_OFF}
            primaryColor={primaryColor}
            size={size}
            touchable={false}
            style={styles.radio__iconContainer}
          />
        </View>
        <View>{children}</View>
      </View>
    </TouchableOpacity>
  );
};

export default Radio;
