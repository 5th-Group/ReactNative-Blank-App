import {StyleSheet} from 'react-native';

import {constants} from '../../constants';

export const style = StyleSheet.create({
  wrap: {
    flex: 1,
    position: 'relative',
  },
  scroll: {},
  // Info
  cover: {
    height: 650,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 400,
    alignSelf: 'center',
    borderRadius: 10,
  },
  Detail: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  // Book rating
  Rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
  },
  ratingItem: {
    paddingHorizontal: 10,
    alignItems: 'center',
    width: 170,
  },
  itemText: {
    fontSize: constants.h2 - 2,
    fontFamily: constants.FontBold,
    color: 'white',
  },
  itemTitle: {
    fontSize: constants.h3 + 1,
    fontFamily: constants.FontSemiBold,
    color: 'white',
  },

  // Description
  Description: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 50,
  },
  author: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // backgroundColor: 'red',
  },
  overview: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
    // backgroundColor: 'blue',
  },
  // Sticky Button
  bottomButton: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    height: 170,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  // Upper
  count: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantity: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    width: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  // Down
  button: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  //   ETC
  text: {
    color: constants.black,
    fontFamily: constants.FontLight,
    fontSize: constants.TextMed,
    lineHeight: 25,
  },

  title: {
    color: constants.primaryColor,
    fontSize: constants.TextMed + 10,
    fontFamily: constants.FontSemiBold,
    marginBottom: 5,
  },
});

export default style;
