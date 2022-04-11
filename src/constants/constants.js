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

import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#0fc2c0',
  secondary: '#4f4477',
  third: '#7e90b0',
  fadeColor: 'rgba(15,194,192, 0.3)',
  // colors
  shadow: '#000',
  black: '#1E1B26',
  white: '#FFFFFF',
  lightGray: '#64676D',
  lightGray2: '#EFEFF0',
  lightGray3: '#D4D5D6',
  lightGray4: '#7D7E84',
  gray: '#2D3038',
  gray1: '#282C35',
  darkRed: '#31262F',
  lightRed: '#C5505E',
  darkBlue: '#22273B',
  lightBlue: '#424BAF',
  darkGreen: '#213432',
  lightGreen: '#31Ad66',
};

export const UTILS = {
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
};

export const IMAGES = {
  // Images
  post1: require('../assets/Images/Poster/1.png'),
  post2: require('../assets/Images/Poster/2.jpg'),
  post3: require('../assets/Images/Poster/3.jpg'),
  post4: require('../assets/Images/Poster/4.jpg'),
  post5: require('../assets/Images/Poster/5.jpg'),
  post6: require('../assets/Images/Poster/6.jpg'),
  post7: require('../assets/Images/Poster/7.jpg'),
  post8: require('../assets/Images/Poster/8.jpg'),
  post9: require('../assets/Images/Poster/9.jpg'),
  post10: require('../assets/Images/Poster/10.jpg'),
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,

  // font sizes
  largeTitle: 50,
  h1Hyper: 45,
  h1p: 40,
  h1Half: 35,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Metropolis-Regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  largeTitleBold: {
    fontFamily: 'Metropolis-Bold',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  hSpec: {fontFamily: 'Metropolis-Black', fontSize: SIZES.h1p, lineHeight: 40},
  h1: {fontFamily: 'Metropolis-Black', fontSize: SIZES.h1, lineHeight: 36},
  h1thin: {fontFamily: 'Metropolis-Light', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Metropolis-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h2thin: {fontFamily: 'Metropolis-Light', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Metropolis-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Metropolis-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {
    fontFamily: 'Metropolis-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Metropolis-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Metropolis-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Metropolis-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
};

// Dummy data
export const dummyData = [
  {
    title: 'Catcher in the Rye',
    author: 'J.D Stanlinger',
    lange: 'English',
    pageCount: 500,
    Rating: 4,
    price: 300,
    image: IMAGES.post1,
    Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi at,assumenda similique deleniti possimus rem suscipit, officiis averitatis minus reprehenderit asperiores obcaecati enim deserunt quistempora placeat quo nesciunt',
  },
  {
    title: 'Away',
    author: 'Sylvia Walker',
    lange: 'English',
    pageCount: 350,
    Rating: 3.5,
    price: 257,
    image: IMAGES.post2,
    Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi at,assumenda similique deleniti possimus rem suscipit, officiis averitatis minus reprehenderit asperiores obcaecati enim deserunt quistempora placeat quo nesciunt',
  },
  {
    title: 'Journey to the past',
    author: 'Stephen Henry',
    lange: 'English',
    pageCount: 457,
    Rating: 4.5,
    price: 499,
    image: IMAGES.post3,
    Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi at,assumenda similique deleniti possimus rem suscipit, officiis averitatis minus reprehenderit asperiores obcaecati enim deserunt quistempora placeat quo nesciunt',
  },
  {
    title: 'Heilung',
    author: 'Mara Franzis',
    lange: 'English',
    pageCount: 375,
    Rating: 4,
    price: 149,
    image: IMAGES.post4,
    Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi at,assumenda similique deleniti possimus rem suscipit, officiis averitatis minus reprehenderit asperiores obcaecati enim deserunt quistempora placeat quo nesciunt',
  },
  {
    title: 'The Astronaut',
    author: 'Masima',
    lange: 'English',
    pageCount: 569,
    Rating: 4,
    price: 275,
    image: IMAGES.post5,
    Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi at,assumenda similique deleniti possimus rem suscipit, officiis averitatis minus reprehenderit asperiores obcaecati enim deserunt quistempora placeat quo nesciunt',
  },
  {
    title: 'The Darkest Hour',
    author: 'Alfred Churchill',
    lange: 'English',
    pageCount: 424,
    Rating: 4.5,
    price: 299,
    image: IMAGES.post6,
    Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi at,assumenda similique deleniti possimus rem suscipit, officiis averitatis minus reprehenderit asperiores obcaecati enim deserunt quistempora placeat quo nesciunt',
  },
  {
    title: 'Aliens',
    author: 'Marius Sulla',
    lange: 'English',
    pageCount: 376,
    Rating: 4,
    price: 144,
    image: IMAGES.post7,
    Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi at,assumenda similique deleniti possimus rem suscipit, officiis averitatis minus reprehenderit asperiores obcaecati enim deserunt quistempora placeat quo nesciunt',
  },
  {
    title: 'The girl behind',
    author: 'Adamantha Smith',
    lange: 'English',
    pageCount: 424,
    Rating: 4,
    price: 370,
    image: IMAGES.post8,
    Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi at,assumenda similique deleniti possimus rem suscipit, officiis averitatis minus reprehenderit asperiores obcaecati enim deserunt quistempora placeat quo nesciunt',
  },
  {
    title: 'Stalkers of chernobyl',
    author: 'Adria Moore',
    lange: 'English',
    pageCount: 284,
    Rating: 4,
    price: 499,
    image: IMAGES.post9,
    Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi at,assumenda similique deleniti possimus rem suscipit, officiis averitatis minus reprehenderit asperiores obcaecati enim deserunt quistempora placeat quo nesciunt',
  },
  {
    title: 'Dark day',
    author: 'Alex Doe',
    lange: 'English',
    pageCount: 329,
    Rating: 4,
    price: 600,
    image: IMAGES.post10,
    Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi at,assumenda similique deleniti possimus rem suscipit, officiis averitatis minus reprehenderit asperiores obcaecati enim deserunt quistempora placeat quo nesciunt',
  },
];

export const bookCategory = ['Novel', 'Science', 'Romance', 'Sci-fi'];

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
