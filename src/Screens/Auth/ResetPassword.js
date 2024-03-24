import {Screen} from '../../Components/Screen';
import {Text, TextInput, Button} from '../../Components/Input';
import {View, Image} from 'react-native';
import {useState} from 'react';
import useApi from '../../Components/Api/Api';
const ResetPassword = ({navigation, route}) => {
  const {email} = route.params;
  const {post, loading} = useApi();
  const [form, setForm] = useState({
    password: '',
    cpassword: '',
  });
  const [errors, setErrors] = useState({
    password: false,
    cpassword: false,
  });
  const updateFormValue = ({name, value}) => {
    setForm({...form, [name]: value});
    setErrors({...errors, [name]: false});
  };

  const handleSubmit = async () => {
    const newErrors = {};
    Object.keys(form).forEach(key => {
      if (!form[key].trim()) {
        newErrors[key] = true;
      } else {
        newErrors[key] = false;
      }
    });

    newErrors.cpassword = form.password !== form.cpassword;

    // Set errors state
    setErrors(newErrors);

    // If there are no errors, proceed with form submission
    if (!Object.values(newErrors).some(error => error)) {
      try {
        const res = await post(
          '/auth/reset',
          (data = {email: email, password: form.password}),
        );
        // console.log('api res', res);
        navigation.navigate('Signin');
      } catch (error) {
        console.log('api error', error);
      }
    }
  };

  return (
    <Screen style={{justifyContent: 'space-between'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../Assets/Images/resetpassword.png')}
          style={{
            width: 300,
            height: 300,
            objectFit: 'contain',
          }}
        />

        <Text size="large">Reset Password</Text>
      </View>
      <View>
        <TextInput
          label="Password"
          name="password"
          rightIcon={true}
          updateFormValue={updateFormValue}
          error={errors.password}
        />
        <TextInput
          label="Confirm Password"
          name="cpassword"
          rightIcon={true}
          updateFormValue={updateFormValue}
          error={errors.cpassword}
        />
        <Button name="Submit" onPress={handleSubmit} loading={loading} />
      </View>
    </Screen>
  );
};

export default ResetPassword;
