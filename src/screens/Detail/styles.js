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
    height: 660,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 200,
    height: 300,
  },
  Detail: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: SIZES.padding,
  },
  // Book rating
  Rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.primaryRGBA(0.4),
    borderRadius: SIZES.radius,
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
    height: 170,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  // Upper
  count: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});

export default style;
