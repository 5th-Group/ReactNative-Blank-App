import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 77,
  },
  contentContainerStyle: {},
  //   Box 1
  boxOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    overflow: 'visible',
    marginTop: 5,
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
    marginTop: 20,
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
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cover: {
    width: 220,
    height: 350,
    alignSelf: 'center',
    borderRadius: 10,
  },
  info: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  star: {
    marginRight: 5,
  },
});

export default style;
