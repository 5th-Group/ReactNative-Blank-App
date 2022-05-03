import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants/constants';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: SIZES.padding,
  },
  box1: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  box2: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  box3: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  box4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  box5: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  // ETC
  image: {
    width: 480,
    height: 500,
  },
});

export default styles;
