import {StyleSheet} from 'react-native';
import {constants} from '../../constants/constants';

import {SIZES, COLORS} from '../../constants/constants';

const style = StyleSheet.create({
  // Poster
  posterWrap: {
    flex: 1,
    borderWidth: 2,
    borderColor: COLORS.fadeColor,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: 274,

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
    flexWrap: 'wrap',
    flex: 1,
    // width: '100%',
  },
  poster: {
    width: 230,
    height: 350,
    borderRadius: 5,
  },
  //   ETC
});

export default style;
