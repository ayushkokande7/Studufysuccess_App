import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

// setting Screen constants
const windowPaddingHorizontal = responsiveWidth(3);

// Responsive font sizes
const bigText = responsiveFontSize(2.8);
const mediumText = responsiveFontSize(2.2);
const smallText = responsiveFontSize(1.9);

// Responsive Icon sizes
const iconSize = responsiveFontSize(2.8);
const mediumIconSize = responsiveFontSize(3.5);
const bigIconSize = responsiveFontSize(4.5);
export {
  responsiveHeight as windowHeight,
  responsiveWidth as windowWidth,
  windowPaddingHorizontal,
  smallText,
  bigText,
  mediumText,
  iconSize,
  bigIconSize,
  mediumIconSize,
};
