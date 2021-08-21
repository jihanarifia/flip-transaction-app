import {StyleSheet} from 'react-native';
import {COLORS, FONT} from '../utils';

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  col: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '50%',
  },
  sectionLabel: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily: FONT.BOLD,
  },
  sectionTitle: {
    fontSize: 16,
    color: COLORS.BLACK,
    fontFamily: FONT.MEDIUM,
  },
  sectionDescription: {
    marginTop: 5,
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONT.REGULAR,
  },

  statusSuccess: {
    borderRadius: 5,
    backgroundColor: COLORS.GREEN,
  },
  textStatusSuccess: {
    fontSize: 12,
    color: COLORS.WHITE,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: FONT.BOLD,
  },
  statusOther: {
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
    borderWidth: 2,
    borderColor: COLORS.ORANGE,
  },
  textStatusOther: {
    fontSize: 12,
    color: COLORS.BLACK,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: FONT.BOLD,
  },
});

export {styles};
