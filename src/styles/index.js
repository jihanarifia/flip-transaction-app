import {StyleSheet} from 'react-native';
import {COLORS} from '../utils';

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
    fontWeight: 'bold',
    color: COLORS.BLACK,
    fontFamily: 'ModeratBold',
  },
  sectionTitle: {
    fontSize: 16,
    color: COLORS.BLACK,
    fontWeight: '800',
    fontFamily: 'ModeratMedium',
  },
  sectionDescription: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.BLACK,
    fontFamily: 'ModeratRegular',
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
});

export {styles};
