import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants/Colors';

export const footerStyles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 'auto',
    marginBottom: 0,
    backgroundColor: COLORS.active,
    display: 'flex',
    alignContent: 'stretch',
    flexDirection: 'row',
    color: COLORS.dark,
    padding: 4,
    width: '100%',
  },
  navButton: {
    color: COLORS.light,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 4,
    marginRight: 4,
  },
  text: {
    color: COLORS.light,
  },
});
