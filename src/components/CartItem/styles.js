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
  left: {},
  image: {
    width: 150,
    height: 130,
    borderRadius: 10,
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 100,
  },
  //   Mid
  mid: {
    flex: 1,
    width: 250,
    height: 150,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingVertical: 20,
  },
  //   Right
  right: {
    // backgroundColor: 'red',
  },
});

export default styles;
