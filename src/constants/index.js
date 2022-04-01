export const constants = {
  // Color
  primaryColor: '#0fc2c0',
  black: 'black',
  // Fonts
  FontSemiBold: 'Metropolis-SemiBold',
  FontBold: 'Metropolis-Bold',
  FontExtraBold: 'Metropolis-ExtraBold',
  FontMed: 'Metropolis-Medium',
  FontReg: 'Metropolis-Regular',
  FontLight: 'Metropolis-Light',
  OutlineColor: 'rgba(15,194,192, 0.3)',
  FontBebas: 'BebasNeue-Regular',
  // Text sizes
  TextBig: 50,
  TextMed: 20,
  TextSmall: 15,
  // sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
};

export const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 5}}>
      <View
        style={{flex: 1, borderLeftColor: 'black', borderLeftWidth: 1}}></View>
    </View>
  );
};
