import React from 'react';
import {ROUTES} from './routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

///// INICIO
import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login';

const {Navigator, Screen} = createNativeStackNavigator();

const EdunetStack = () => {
  return (
    <Navigator
      initialRouteName={ROUTES.splash}
      screenOptions={{headerShown: false}}>
      <Screen name={ROUTES.splash} component={SplashScreen} />
      <Screen name={ROUTES.logIn} component={LoginScreen} />
    </Navigator>
  );
};

export {EdunetStack};
