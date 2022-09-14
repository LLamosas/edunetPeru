import {getStyles} from './InputPassword.styles';
import {theme, INPUT_TYPES, ICONS} from 'appConstants';
import {Text, View} from 'react-native';
import Icon from '../../Icon';
import React from 'react';

const InputPasswordItem = ({caption = '', type = INPUT_TYPES.DEFAULT}) => {
  const styles = getStyles(theme);
  const selectedtheme = theme;

  const leftComponent = () => {
    switch (type) {
      case INPUT_TYPES.DEFAULT:
        return <View style={styles.list__dot} />;
      case INPUT_TYPES.APPROVED:
        return (
          <Icon
            touchable={false}
            size={24}
            style={styles.input__icon}
            name={ICONS.CHECK}
            primaryColor={selectedtheme.approved}
          />
        );
      case INPUT_TYPES.ERROR:
        return <View style={[styles.list__dot, styles.list__dot__error]} />;
    }
  };

  return (
    <View style={styles.input__policies__container}>
      {leftComponent()}
      <Text style={styles.input__caption__policies}>{caption}</Text>
    </View>
  );
};

export default InputPasswordItem;
