import {styles} from './Toggle.styles';
import {theme} from 'appConstants';
import {Switch, View} from 'react-native';
import React from 'react';

const Toggle = ({
  onValueChange,

  children,
  checked = false,
  disabled = false,
  testID = 'toggle-component',
  accessibilityLabel = 'toggle-component',
  style,
}) => {
  const selectedtheme = theme;
  return (
    <View
      style={[styles.toggle__container, style]}
      testID="view-toggle-container">
      {children}
      <Switch
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        thumbColor={checked ? selectedtheme.secondary : selectedtheme.white}
        trackColor={{
          false: selectedtheme.primary40,
          true: selectedtheme.secondary50,
        }}
        value={checked}
        disabled={disabled}
        onValueChange={onValueChange}
      />
    </View>
  );
};

export default Toggle;
