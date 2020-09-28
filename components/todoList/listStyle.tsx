import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants/Colors';

export const listStyles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.primary,
  },
  backgroundAlt: {
    backgroundColor: COLORS.light,
  },
  scrollView: {
    borderRadius: 25,
    backgroundColor: COLORS.light,
    minHeight: "100%",
    paddingTop: 15,
  },
  header: {
    color: COLORS.active,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 50,
  },
  addButton: {
    backgroundColor: COLORS.active,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 10,
    padding: 10,
    borderRadius: 100
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
  },

  textContainer: {
    flexDirection: 'row',
    flex: 10,
  },
  checkBoxContainer: {
    height: 10
  },
  text: {
    color: COLORS.primary,
    flex: 2,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginLeft: 20,
    fontSize: 18,
    marginVertical: 3
  },
  buttonGroup: {
    flex: 1,
  },
  buttonText: {
    color: COLORS.dark,
  },
});
