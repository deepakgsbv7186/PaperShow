import {
  responsiveFontSize as RFS,
  responsiveHeight as RH,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';

export const COLORS = {
  // base colors
  primary: '#3884FC',
  bgColor: '#fcfdff',
  // text colors
  title: '#161012',
  infoText: '#8b8b8b',

  lime: '#00BA63',
  emerald: '#2BC978',

  red: '#FF4134',
  lightRed: '#FFF1F0',

  purple: '#6B3CE9',
  lightpurple: '#F3EFFF',

  yellow: '#FFC664',
  lightyellow: '#FFF9EC',

  black: '#1E1F20',
  white: '#FFFFFF',

  lightGray: '#FCFBFC',
  gray: '#C1C3C5',
  darkgray: '#9BA4B5',

  transparent: 'transparent',
};

export const SIZES = {
  // global sizes
  base: RFS(0.8),
  font: RFS(1.2),
  radius: RW(2),
  padding: RW(2),
  padding2: RW(4),

  // font sizes
  largeTitle: RFS(4),
  h1: RFS(3.5),
  h2: RFS(3),
  h3: RFS(2.5),
  h4: RFS(2),
  body1: RFS(3.2),
  body2: RFS(2.8),
  body3: RFS(2.4),
  body4: RFS(2),
  body5: RFS(1.6),

  // app dimensions
  RFS, // custom fontsize
  RW, // custom width
  RH, // custom height
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

// export const STYLES = {
//   bgBlack: {
//     backgroundColor: COLORS.black,
//     width: SIZES.width * 0.3,
//     marginVertical: SIZES.padding,
//     padding: SIZES.padding * 2,
//   },
// };
