import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../constants/constants';

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: 170,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: SIZES.padding * 3,
    marginTop: SIZES.padding,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderRadius: SIZES.radius,
    // Shadow
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  //   Left
  left: {
    flex: 1,
    overflow: 'hidden',
  },
  image: {
    height: 140,
    width: 90,
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 90,
    borderRadius: 50,
    backgroundColor: COLORS.lightGray2,
  },
  //   Mid
  mid: {
    width: 270,
    height: 150,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingVertical: SIZES.base,
  },
  //   Right
  right: {},
});

export default styles;
