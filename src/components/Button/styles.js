import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS, UTILS} from '../../constants/constants';

const styles = StyleSheet.create({
  buttonWrap: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    // Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  noneColor: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  color: {
    backgroundColor: COLORS.primary,
  },
  noneColorTitle: {
    ...FONTS.h1,
    color: COLORS.white,
  },
  colorTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    ...FONTS.h1,
    color: COLORS.primary,
  },
});

export default styles;
