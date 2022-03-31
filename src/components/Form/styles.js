import {StyleSheet, Dimensions} from 'react-native';

import {constants} from '../../constants';

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  input: {
    marginTop: 5,
    width: width,
    height: 70,
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 60,
    borderColor: constants.primaryColor,
    fontSize: constants.TextMed,
  },
  icon: {
    position: 'relative',
    top: -50,
    left: 15,
  },
  title: {
    fontFamily: constants.FontSemiBold,
    fontSize: constants.TextMed,
  },
});

export default styles;
