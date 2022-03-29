import {StyleSheet} from 'react-native';

import {constants} from '../../constants';

export const style = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 80,
  },
  contentContainerStyle: {},
  //   Box 1
  boxOne: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 40,
    overflow: 'visible',
    marginTop: 10,
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

  //   ETC
  text: {
    color: 'black',
  },
  textSmall: {
    fontSize: 12,
  },
  title: {
    color: constants.primaryColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avt: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  input: {
    height: 49,
    paddingHorizontal: 40,
    width: 353,
    borderRadius: 10,
    backgroundColor: '#f4f4f4',
  },
  icon: {
    top: '30%',
    left: 10,
    position: 'absolute',
  },
});
