import {Screen, CardHorizontal} from '../../../Components/Screen';
import {View} from 'react-native';
import {Linking} from 'react-native';
const ContactUs = ({navigation}) => {
  return (
    <Screen>
      <View style={{marginTop: 15}}>
        <CardHorizontal
          title="Customer Service"
          leftIcon="headset"
          onPress={() => {
            navigation.navigate('CustomerService');
          }}
        />
        <CardHorizontal
          title="Email"
          leftIcon="email"
          onPress={() => {
            Linking.openURL(`mailto:info@studifysuccess.com`);
          }}
        />

        <CardHorizontal
          title="Website"
          leftIcon="web"
          onPress={() => {
            Linking.openURL('https://www.studifysuccess.com');
          }}
        />
        <CardHorizontal
          title="WhatsApp"
          leftIcon="whatsapp"
          onPress={() => {
            Linking.openURL('whatsapp://send?text=Hi!' + '&phone=918743967234');
          }}
        />
        <CardHorizontal
          title="Facebook"
          leftIcon="facebook"
          onPress={() => {
            Linking.openURL('https://www.facebook.com/studifysuccess.ss');
          }}
        />
        <CardHorizontal
          title="Twitter"
          leftIcon="twitter"
          onPress={() => {
            Linking.openURL('https://twitter.com/studifysuccess');
          }}
        />
        <CardHorizontal
          title="Instagram"
          leftIcon="instagram"
          onPress={() => {
            Linking.openURL('https://www.instagram.com/studifysuccess');
          }}
        />
        <CardHorizontal
          title="Youtube"
          leftIcon="youtube"
          onPress={() => {
            Linking.openURL('vnd.youtube://channel/studifysuccess').catch(err =>
              console.error('youtube', err),
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default ContactUs;
