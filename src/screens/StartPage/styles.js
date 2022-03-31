import {StyleSheet} from 'react-native';

import {constants} from '../../constants';

const style = StyleSheet.create({
  wrap: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  //   Box 1
  boxOne: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
    marginTop: 10,
    // paddingBottom: 100,
  },
  //   Box 2
  boxTwo: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  //   Box 3
  boxThree: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  //   Box 4
  boxFour: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 30,
  },
  //   Box 5
  boxFive: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 30,
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
  // ETC
  avt: {
    width: 500,
    height: 550,
  },
  title: {
    fontFamily: constants.FontExtraBold,
    fontSize: constants.TextBig,
    color: constants.primaryColor,
    textAlign: 'center',
  },
  text: {
    fontFamily: constants.FontLight,
    fontSize: constants.TextMed,
    color: constants.black,
    textAlign: 'center',
  },
});

export default style;
