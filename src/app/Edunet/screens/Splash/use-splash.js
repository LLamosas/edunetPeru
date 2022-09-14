import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';
export const useSplash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(ROUTES.logIn);
    }, 2000);
  }, [navigation]);
};
