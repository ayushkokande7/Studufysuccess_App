import {View, Pressable} from 'react-native';
import {useEffect, useState} from 'react';
import {Text} from '../Input';
import {useMutation} from '@tanstack/react-query';
import useApi from '../Api/Api';
const ResendOTP = ({email}) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === 0) return;
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const {mutate, isPending} = useMutation({
    mutationFn: data => useApi().post('/auth/sendOtp', (data = {email: email})),
    onSuccess: res => {
      if (res.status === 200) setTimer(60);
    },
  });

  return (
    <View style={{alignItems: 'center', marginVertical: 10}}>
      {timer === 0 ? (
        <Pressable onPress={() => mutate()}>
          <Text style={{fontWeight: 'bold'}}>
            {!isPending ? 'Resend OTP' : 'Resending...'}
          </Text>
        </Pressable>
      ) : (
        <Text>Resend OTP in {timer} seconds</Text>
      )}
    </View>
  );
};

export default ResendOTP;
