import {StyleSheet} from 'react-native';

import {COLORS, FONTS} from '../../constants/constants';

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  input: {
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 10,
    paddingRight: 20,
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
