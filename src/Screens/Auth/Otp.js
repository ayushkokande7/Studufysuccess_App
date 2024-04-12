import {Screen} from '../../Components/Screen';
import {Text, Button} from '../../Components/Input';
import {View, Image} from 'react-native';
import {useState, useRef} from 'react';
import useApi from '../../Components/Api/Api';
import {OtpInput} from 'react-native-otp-entry';
import {useTheme} from 'react-native-paper';
import {useMutation} from '@tanstack/react-query';
const Otp = ({navigation, route}) => {
  const {colors} = useTheme();
  const {email, type} = route.params;
  const [opt, setOpt] = useState('');
  const ref = useRef('');

  const {mutate, isPending} = useMutation({
    mutationFn: data =>
      useApi().post('/auth/otp', (data = {email: email, otp: opt, type: type})),
    onSuccess: res => {
      if (res.status === 200) {
        if (type == 0) navigation.replace('ResetPassword', {email: email});
        else navigation.replace('Signin');
      }
    },
    onError: error => {
      ref.current.clear();
      setOpt('');
    },
  });
  const submit = async () => {
    if (opt.length === 4) {
      mutate();
    }
  };

  return (
    <Screen>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <Image
            source={require('../../Assets/Images/otp.png')}
            style={{
              width: 300,
              height: 300,
              objectFit: 'contain',
            }}
          />
          <Text size="large">Enter OTP?</Text>
        </View>
        <View>
          <Text style={{marginBottom: 20}}>
            An OTP has been sent to your Email address- {email}
          </Text>
          <OtpInput
            numberOfDigits={4}
            focusColor={colors.primary}
            focusStickBlinkingDuration={500}
            ref={ref}
            onTextChange={text => setOpt(text)}
            theme={{
              containerStyle: {
                width: '80%',
                marginBottom: 20,
                alignSelf: 'center',
              },
              pinCodeContainerStyle: {
                borderRadius: 7,
                borderWidth: 2,
              },
              pinCodeTextStyle: {
                color: colors.onSurface,
              },
            }}
          />
          <Button name="Verify" onPress={submit} loading={isPending} />
        </View>
      </View>
    </Screen>
  );
};

export default Otp;
