import {getStyles} from './Divider.styles';
import {Text, View} from 'react-native';
import React from 'react';

const Divider = ({title = '', theme = '', numberOfLines = 1, hide = false}) => {
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      {hide ? null : <View style={styles.divider} />}
      {title !== '' && (
        <Text style={styles.title__text} numberOfLines={numberOfLines}>
          {title}
        </Text>
      )}
    </View>
  );
};

export default Divider;
