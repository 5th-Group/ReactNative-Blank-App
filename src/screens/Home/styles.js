import {StyleSheet, Dimensions} from 'react-native';

import {constants} from '../../constants';

const width = Dimensions.get('window').width - 40;

export const style = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainerStyle: {
    paddingBottom: 80,
  },
  //   Box 1
  boxOne: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 40,
    overflow: 'visible',
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
    width: '100%',
    height: 2,
    backgroundColor: constants.primaryColor,
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
  text: {
    color: constants.black,
    fontSize: constants.TextMed,
    fontFamily: constants.FontLight,
  },
  title: {
    color: constants.primaryColor,
    fontSize: constants.TextBig,
    fontFamily: 'Metropolis-Semibold',
  },
  titleMed: {
    color: constants.primaryColor,
    fontSize: 40,
    fontFamily: constants.FontSemiBold,
  },
  textColor: {
    color: constants.primaryColor,
    fontSize: constants.TextMed,
    fontFamily: constants.FontLight,
  },
  avt: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  input: {
    height: 60,
    fontSize: constants.TextMed,
    paddingLeft: 60,
    width: width,
    borderRadius: 10,
    backgroundColor: '#f4f4f4',
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
