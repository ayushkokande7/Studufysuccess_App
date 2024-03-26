import {showMessage} from 'react-native-flash-message';
import {StatusBar} from 'react-native';
const FlashMessage = ({message, type}) => {
  showMessage({
    message: message,
    type: type,
    duration: 3000,
    icon: type,
    backgroundColor: type === 'success' ? '#008b8b' : '#e74c3c',
    titleStyle: {fontSize: 17},
    style: {paddingTop: StatusBar.currentHeight + 2 || 0},
  });
};

export default FlashMessage;
