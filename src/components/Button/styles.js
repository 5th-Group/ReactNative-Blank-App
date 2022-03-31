import {StyleSheet} from 'react-native';
import {constants} from '../../constants';

const {primaryColor, FontSemiBold} = constants;

const styles = StyleSheet.create({
  buttonWrap: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: primaryColor,
    // Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  noneColor: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: primaryColor,
  },
  color: {
    backgroundColor: primaryColor,
  },
  noneColorTitle: {
    color: 'white',
    fontFamily: FontSemiBold,
  },
  colorTitle: {
    color: primaryColor,
    fontFamily: FontSemiBold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Text
  title: {
    fontSize: constants.TextMed,
    fontFamily: constants.FontExtraBold,
  },
});

export default styles;
