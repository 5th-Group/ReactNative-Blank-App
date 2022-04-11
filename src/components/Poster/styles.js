import {StyleSheet} from 'react-native';
import {constants} from '../../constants/constants';

import {SIZES, COLORS} from '../../constants/constants';

const style = StyleSheet.create({
  // Poster
  posterWrap: {
    borderWidth: 2,
    borderColor: COLORS.fadeColor,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    // Shadow
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  posterTitle: {
    flexDirection: 'column',
    marginTop: 10,
  },
  poster: {
    width: 230,
    height: 350,
    borderRadius: 5,
  },
  //   ETC
});

export default style;
