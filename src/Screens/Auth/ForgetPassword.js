import {Screen} from '../../Components/Screen';
import {Text, TextInput, Button} from '../../Components/Input';
import {View, Image} from 'react-native';
import {useState} from 'react';
import useApi from '../../Components/Api/Api';
const ForgetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState(false);
  const {post, loading} = useApi();
  const updateFormValue = ({value}) => {
    setEmail(value);
    setErrors(false);
  };
  const submit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return setErrors(true);
    }
    try {
      const res = await post('/auth/forgot', (data = {email: email}));
      console.log('api res', res);
      navigation.replace('Otp', {email: email, type: 0});
    } catch (error) {
      console.log('api error', error);
    }
  };

  return (
    <Screen>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <Image
            source={require('../../Assets/Images/forgot.png')}
            style={{
              width: 300,
              height: 300,
              objectFit: 'contain',
            }}
          />
          <Text size="large">Forgot Password?</Text>
        </View>
        <View>
          <Text style={{marginVertical: 10}}>
            Enter the Email address associated with your account.
          </Text>
          <TextInput
            label="Email"
            keyboard="email-address"
            name="email"
            updateFormValue={updateFormValue}
            error={errors}
            style={{marginBottom: 50}}
          />
          <Button name="Send OTP" onPress={submit} loading={loading} />
        </View>
      </View>
    </Screen>
  );
};

export default ForgetPassword;
