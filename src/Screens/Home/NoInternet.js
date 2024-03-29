import {Text} from '../../Components/Input';
import {Screen} from '../../Components/Screen';
import {View, Image} from 'react-native';
const NoInternet = () => {
  return (
    <Screen>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../Assets/Images/noconnection.png')}
          style={{height: 300, width: '100%'}}
          resizeMode="contain"
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 32,
            marginVertical: 15,
          }}>
          Whoops!
        </Text>
        <Text size="medium">
          No Internet Connection was found. Check your internet connection or
          try again later
        </Text>
      </View>
    </Screen>
  );
};

export default NoInternet;
