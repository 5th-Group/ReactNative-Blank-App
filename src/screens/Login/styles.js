import {StyleSheet} from 'react-native';

import {constants} from '../../constants';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'white',
  },
  box1: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 30,
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
    marginBottom: 30,
  },
  box5: {
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
    width: 480,
    height: 500,
  },
});

export default styles;
