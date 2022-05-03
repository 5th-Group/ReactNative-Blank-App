import {StyleSheet, Dimensions} from 'react-native';

import {COLORS, constants, FONTS} from '../../constants/constants';

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
    borderColor: COLORS.primary,
    ...FONTS.h2,
  },
  icon: {
    position: 'absolute',
    top: 65,
    left: 15,
  },
});

export default styles;
