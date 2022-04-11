import {StyleSheet} from 'react-native';

import {constants} from '../../constants/constants';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    paddingTop: 50,
  },
  box1: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  box2: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  box3: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 50,
  },
  box4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  // ETC
  title: {
    fontFamily: constants.FontExtraBold,
    fontSize: constants.TextBig,
    color: constants.primaryColor,
  },
  text: {
    fontFamily: constants.FontLight,
    fontSize: constants.TextMed,
    color: constants.black,
  },
  image: {
    width: 560,
    height: 600,
  },
});

export default styles;
