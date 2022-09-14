import {getStyles} from './Icon.styles';
import {TouchableOpacity} from 'react-native';
import {theme} from 'appConstants';
import ICONS from '../../../../assets/icons';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

// This is an object not styles and should have Insets typo
const hitSlopInset = {top: 16, bottom: 16, left: 16, right: 16};

const Icon = ({
  name,
  primaryColor = '',
  secondaryColor,
  onPress,
  onLongPress,
  delayLongPress = 2000,
  size = ICONS[name] && ICONS[name].secondary ? 32 : 24, // Illustrative Icon: 32, General Icon: 24,
  touchable = true,
  touchableArea = 48,
  testID = 'icon-container',
  accessibilityLabel = 'icon-container',
  style = {},
  disabled = false,
  hitSlop = false,
}) => {
  let hitSlopValue;

  if (typeof hitSlop === 'boolean') {
    hitSlopValue = hitSlop ? hitSlopInset : undefined;
  } else {
    hitSlopValue = hitSlop && typeof hitSlop === 'object' ? hitSlop : undefined;
  }

  const selectedTheme = theme;
  const primaryFill = primaryColor ? primaryColor : selectedTheme.primary;
  const secondaryFill = secondaryColor
    ? secondaryColor
    : selectedTheme.secondary;
  const styles = getStyles();
  const isTouchableStyle = onPress
    ? [{width: touchableArea, height: touchableArea}]
    : null;

  return name ? (
    <TouchableOpacity
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      style={[styles.icon, isTouchableStyle, style]}
      disabled={!touchable || disabled}
      onPress={onPress}
      onLongPress={onLongPress}
      delayLongPress={delayLongPress}
      hitSlop={hitSlopValue}>
      <Svg viewBox={ICONS[name].viewBox} style={{width: size, height: size}}>
        <Path
          d={ICONS[name].primary}
          fill={disabled ? selectedTheme.neutral30 : primaryFill}
          transform={ICONS[name].transformPrimary}
        />
        {ICONS[name].secondary ? (
          <Path
            d={ICONS[name].secondary}
            fill={disabled ? selectedTheme.primary30 : secondaryFill}
          />
        ) : null}
      </Svg>
    </TouchableOpacity>
  ) : null;
};

export default Icon;
