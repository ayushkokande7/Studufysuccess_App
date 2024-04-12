import {TouchableRipple} from 'react-native-paper';
import {windowWidth} from '../../Utils/Dimentions';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
const LiveClassSwiper = ({row = false, data}) => {
  const navigation = useNavigation();
  return (
    <TouchableRipple
      onPress={() => {
        // navigation.navigate('Meet');
      }}
      style={{
        width: row ? windowWidth(84) : windowWidth(94),
        height: 180,
        marginRight: row ? 15 : 0,
        marginBottom: 10,
      }}>
      <Image
        source={{uri: data?.image}}
        objectFit="contain"
        style={{height: '100%', width: '100%', borderRadius: 15}}
      />
    </TouchableRipple>
  );
};

export default LiveClassSwiper;
