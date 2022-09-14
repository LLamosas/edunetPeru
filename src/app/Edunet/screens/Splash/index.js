import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {EDUNET_LOGO} from './assets';
import {useSplash} from './use-splash';

const SplashScreen = ({navigation}) => {
  useSplash({navigation});
  return (
    <View style={styles.container}>
      <Image source={EDUNET_LOGO} style={styles.image} />
    </View>
  );
};

export default SplashScreen;
