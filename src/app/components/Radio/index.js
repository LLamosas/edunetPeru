import {View} from 'react-native';
import React from 'react';
import {getStyles} from './Radio.styles';

const Radio = ({value, disabled}) => {
  const styles = getStyles();
  return (
    <View style={[styles.radio, disabled ? styles.radio__disabled : null]}>
      {value ? (
        <View
          style={[
            styles.radio__dot,
            disabled ? styles.radio__dot__disabled : null,
          ]}
        />
      ) : null}
    </View>
  );
};

export default Radio;
