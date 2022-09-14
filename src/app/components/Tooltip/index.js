import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {getStyles} from './Tooltip.styles';
import React, {useEffect, useState} from 'react';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGH = Dimensions.get('window').height;

const Tooltip = ({
  text,
  theme = '',
  children,
  hideTime = 4000,
  onPressTooltip = () => {},
  testID = '',
  accessibilityLabel = '',
}) => {
  const styles = getStyles(theme);
  const [tipVisible, setTipVisible] = useState(false);
  const [position, setPosition] = useState({});
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const tooltipTextStyle = [styles.tooltip__text, {width: text.length * 7.5}];

  const toggleTooltip = () => {
    setTipVisible(!tipVisible);
    onPressTooltip(tipVisible);
  };

  //TODO: Research about jest for hooks
  /* istanbul ignore next */
  useEffect(() => {
    if (tipVisible) {
      setTimeout(() => {
        setTipVisible(false);
      }, hideTime);
    }
  });

  const onLayout = e => {
    const {y, x, height} = e.nativeEvent.layout;
    let newPosition = {};
    if (y <= SCREEN_HEIGH / 2) {
      newPosition = {top: height + 10}; //will display at bottom
    } else {
      newPosition = {bottom: height + 10}; // will display at top
    }
    if (x <= SCREEN_WIDTH / 2 || x === 12) {
      newPosition = {...newPosition, right: 0};
    }
    setPosition(newPosition);
    return newPosition;
  };
  const onLayoutChildren = e => {
    const {layout} = e.nativeEvent;
    setWidth(layout.width);
    setHeight(layout.height);
    return {width: layout.width, height: layout.height};
  };

  return (
    <View
      onLayout={onLayout}
      style={[styles.tooltip, {width, height}]}
      testID={`view-${testID}`}
      accessibilityLabel={`view-${accessibilityLabel}`}>
      {tipVisible ? (
        <View style={[styles.tooltip__container, position]}>
          <Text style={tooltipTextStyle}>{text}</Text>
        </View>
      ) : null}
      <TouchableOpacity
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        onLayout={onLayoutChildren}
        onPress={toggleTooltip}
        style={styles.tooltip__childrenHolder}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default Tooltip;
