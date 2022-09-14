import {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {TYPE_LOGIN} from './const';

export const useLogin = () => {
  const navigation = useNavigation();

  const [typeLogin, setTypeLogin] = useState(TYPE_LOGIN.DOCENTE);
  const [user, setUser] = useState();
  const [dni, setDNI] = useState();
  const [password, setPassword] = useState();

  const onPressRadio = newType => {
    setDNI('');
    setUser('');
    setPassword('');
    setTypeLogin(newType);
  };

  const onSetUser = newUser => {
    setUser(newUser);
  };

  const onSetPassword = newPassword => {
    setPassword(newPassword);
  };
  const onSetDNI = newDNI => {
    setDNI(newDNI);
  };

  const onPressButton = useCallback(() => {
    if (typeLogin === TYPE_LOGIN.DOCENTE) {
      console.log('boton para docente', navigation);
    } else {
      console.log('bootonn para los otros', navigation);
    }
  }, [typeLogin, navigation]);

  return {
    typeLogin,
    user,
    password,
    dni,
    onSetDNI,
    onPressRadio,
    onSetUser,
    onSetPassword,
    onPressButton,
  };
};
