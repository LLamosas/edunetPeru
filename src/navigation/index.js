import React from 'react';
import {ROUTES} from './routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

///// INICIO
import {EdunetStack} from '../app/Edunet/navigation';

const {Navigator, Screen} = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Navigator
      initialRouteName={ROUTES.main}
      screenOptions={{headerShown: false}}>
      <Screen name={ROUTES.main} component={EdunetStack} />
    </Navigator>
  );
}

export default RootNavigator;
