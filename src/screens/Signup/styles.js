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
    marginBottom: 30,
  },
  box2: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 30,
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
    marginBottom: 30,
  },
  // ETC
  image: {
    width: 500,
    height: 300,
    alignItems: 'center',
  },
});

export default styles;
