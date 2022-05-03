import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/constants';

export const style = StyleSheet.create({
  wrap: {
    flex: 1,
    position: 'relative',
  },
  scroll: {},
  // Info
  cover: {
    height: 620,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'red',
  },
  image: {
    width: 200,
    height: 300,
  },
  Detail: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: SIZES.padding,
    zIndex: 10,
  },
  // Book rating
  Rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.padding,
    // backgroundColor: COLORS.primaryRGBA(0.4),
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    zIndex: 10,
  },
  ratingItem: {
    paddingHorizontal: SIZES.padding - 10,
    alignItems: 'center',
    width: 170,
  },

  // Description
  Description: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 50,
  },
  author: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  overview: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  // Sticky Button
  bottomButton: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
  },
  // Upper
  count: {
    width: SIZES.width - 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: 50,
    paddingTop: 20,
    // backgroundColor: 'red',
  },
  quantity: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.lightGray2,
    borderRadius: 100,
  },

  total: {
    width: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  // Down
  button: {
    flex: 1,
    width: SIZES.width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: SIZES.padding,
  },
});

export default style;
