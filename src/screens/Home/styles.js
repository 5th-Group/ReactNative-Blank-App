import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    gap: 1000,
  },
  //   Box 1
  boxOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
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
    position: 'relative',
  },
  //   Box 5
  boxFive: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 30,
    position: 'relative',
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
    fontSize: 18,
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
