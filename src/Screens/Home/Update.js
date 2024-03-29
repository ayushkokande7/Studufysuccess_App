import {Text} from '../../Components/Input';
import {Screen} from '../../Components/Screen';
import {Button} from '../../Components/Input';
import {View, Image, Linking} from 'react-native';
const Update = () => {
  return (
    <Screen NoHeader>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            source={require('../../Assets/Images/logo.png')}
            style={{height: 120, width: 120}}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 35,
              marginVertical: 15,
              lineHeight: 45,
            }}>
            Update your {'\n'}application to the {'\n'}latest version
          </Text>
          <Text style={{lineHeight: 23}}>
            A brand new version of app is available on the Play Store. Please
            update your app to use all of our amazing features.
          </Text>
        </View>
        <Button
          name="Update now"
          onPress={() => {
            Linking.openURL(
              'https://play.google.com/store/apps/details?id=com.studifysuccess.courses',
            );
          }}
          style={{marginBottom: 20}}
        />
      </View>
    </Screen>
  );
};

export default Update;
