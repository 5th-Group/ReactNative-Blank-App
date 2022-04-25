import {StyleSheet} from 'react-native';
import {FONTS, SIZES, COLORS} from '../../constants/constants';

export const style = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: SIZES.padding * 4,
  },
  //   Box 1
  boxOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    marginTop: 40,
  },
  //   Box 2
  boxTwo: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: SIZES.padding2,
    paddingHorizontal: SIZES.padding,
  },
  //   Box 3
  boxThree: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: SIZES.padding2,
    position: 'relative',
    paddingHorizontal: SIZES.padding,
  },
  //   Box 4
  boxFour: {
    marginTop: SIZES.padding + 10,
  },
  line: {
    marginTop: 5,
    height: 2,
    width: SIZES.width - 40,
    backgroundColor: COLORS.primary,
    marginHorizontal: SIZES.padding,
  },
  textColor: {
    color: COLORS.primary,
    fontSize: SIZES.h2,
    ...FONTS.h2thin,
  },
  //   Box 5
  boxFive: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  //   Box 6
  boxSix: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: SIZES.padding2,
  },
  //   Box 7
  boxSeven: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 30,
  },

  //   ETC

  avt: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  input: {
    height: SIZES.padding * 3,
    fontSize: SIZES.h2,
    paddingLeft: SIZES.padding * 3,
    width: SIZES.width - 40,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    // Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    position: 'relative',
  },
  icon: {
    top: 15,
    left: 35,
    position: 'absolute',
    zIndex: 100,
  },
});
