import {StyleSheet} from 'react-native';
import {FONTS, SIZES, COLORS} from '../../constants/constants';

export const style = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: 80,
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
    marginTop: 30,
  },
  //   Box 3
  boxThree: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 30,
    position: 'relative',
  },
  //   Box 4
  boxFour: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 30,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  line: {
    marginTop: 5,
    width: SIZES.width,
    height: 2,
    backgroundColor: COLORS.primary,
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
    // padding: 10,
  },
  //   Box 6
  boxSix: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 30,
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
    height: 60,
    fontSize: SIZES.h2,
    paddingLeft: 60,
    width: SIZES.width - 40,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'rgba(15,194,192, 0.3)',
    borderWidth: 1.5,
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
    left: 15,
    position: 'absolute',
    zIndex: 100,
  },
});
