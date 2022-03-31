import {StyleSheet} from 'react-native';
import {constants} from '../../constants';

const style = StyleSheet.create({
  // Poster
  posterWrap: {
    borderWidth: 2,
    borderColor: constants.OutlineColor,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    // Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  posterTitle: {
    flexDirection: 'column',
    marginTop: 10,
  },
  //   ETC

  textSmall: {
    fontSize: constants.TextSmall,
    color: constants.black,
  },
  title: {
    color: constants.primaryColor,
    fontSize: constants.TextMed + 3,
    fontFamily: 'Metropolis-Medium',
  },
  poster: {
    width: 230,
    height: 350,
    borderRadius: 5,
  },
});

export default style;
