import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants/constants';

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: 170,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: 60,
    marginTop: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: COLORS.primary,
    flexDirection: 'row',
    borderRadius: 30,
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
    width: '100%',
    height: 140,
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
    paddingVertical: 8,
  },
  //   Right
  right: {
    // backgroundColor: 'red',
  },
});

export default styles;
