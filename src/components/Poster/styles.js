import {StyleSheet} from 'react-native';
import {constants, UTILS} from '../../constants/constants';

import {SIZES, COLORS} from '../../constants/constants';

const style = StyleSheet.create({
  // Poster
  posterWrap: {
    flex: 1,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding - 10,
    marginVertical: SIZES.padding,
    padding: SIZES.padding,
    width: 274,

    // Shadow
    ...UTILS.shadow2,
  },

  posterTitle: {
    flexDirection: 'column',
    marginTop: SIZES.padding - 10,
  },
  poster: {
    width: 230,
    height: 350,
    borderRadius: SIZES.radius,
  },
  //   ETC
  loadingPoster: {
    width: 274,
    height: 350,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
});

export default style;
