import {StyleSheet} from 'react-native';
import {theme} from 'appConstants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.white,
  },
  image: {
    width: '70%',
    resizeMode: 'contain',
  },
});
