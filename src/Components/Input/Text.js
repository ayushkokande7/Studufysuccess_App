import {Text} from 'react-native-paper';
import React, {memo} from 'react';
import {smallText, mediumText, bigText} from '../../Utils/Dimentions';
function TextFont({size = 'small', children, numberOfLines, style}) {
  let fontSize;
  if (size == 'small') {
    fontSize = smallText;
  } else if (size == 'medium') {
    fontSize = mediumText;
  } else if (size == 'large') {
    fontSize = bigText;
  }
  return (
    <Text
      style={{
        fontSize: fontSize,
        fontWeight: fontSize === bigText ? 'bold' : 'normal',
        ...style,
      }}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}

export default memo(TextFont);
