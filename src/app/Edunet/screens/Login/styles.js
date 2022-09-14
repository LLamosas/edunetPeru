import {StyleSheet} from 'react-native';
import {theme, typography} from 'appConstants';
const GLOBAL_PADDING = 8;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primary,
  },
  loginContainer: {
    width: '90%',
    minHeight: 300,
    backgroundColor: 'white',
    paddingHorizontal: GLOBAL_PADDING * 2,
    paddingBottom: GLOBAL_PADDING * 5,
    paddingTop: GLOBAL_PADDING * 2,
    borderRadius: GLOBAL_PADDING * 2,
  },
  componentContainer: {
    marginTop: GLOBAL_PADDING * 2,
  },
  radioContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: GLOBAL_PADDING,
  },
  textRadio: {
    ...typography().bodyRegular,
    color: theme.text,
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: GLOBAL_PADDING,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
});
