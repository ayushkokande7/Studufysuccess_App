import {View} from 'react-native';
import {useState} from 'react';
import {Button, TextInput, Text} from '../../Components/Input';
import {Screen} from '../../Components/Screen';
import useApi from '../../Components/Api/Api';
const Sign_up = ({navigation}) => {
  const {post, loading} = useApi();
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
    dob: '',
    gender: '',
  });

  const [errors, setErrors] = useState({
    fname: false,
    lname: false,
    email: false,
    phone: false,
    password: false,
    cpassword: false,
    dob: false,
    gender: false,
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

    // Check for valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    newErrors.email = !emailRegex.test(form.email.trim());

    // Check for valid phone number format
    const phoneRegex = /^[0-9]{10}$/;
    newErrors.phone = !phoneRegex.test(form.phone.trim());

    // Check if passwords match
    newErrors.cpassword = form.password !== form.cpassword;

    // Set errors state
    setErrors(newErrors);

    // If there are no errors, proceed with form submission
    if (!Object.values(newErrors).some(error => error)) {
      try {
        const res = await post('/auth/signup', (data = form));
        navigation.replace('Otp', {email: form.email, type: 1});
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Screen style={{justifyContent: 'space-between'}}>
      <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
        <Text size="large">Create your account</Text>
      </View>

      <View>
        <View style={{flexDirection: 'row', gap: 15}}>
          <TextInput
            label="First Name"
            name="fname"
            updateFormValue={updateFormValue}
            style={{flex: 1}}
            error={errors.fname}
          />
          <TextInput
            label="Last Name"
            name="lname"
            updateFormValue={updateFormValue}
            style={{flex: 1}}
            error={errors.lname}
          />
        </View>
        <TextInput
          label="Email"
          name="email"
          updateFormValue={updateFormValue}
          keyboard="email-address"
          error={errors.email}
        />
        <TextInput
          label="Phone"
          name="phone"
          updateFormValue={updateFormValue}
          keyboard="number-pad"
          error={errors.phone}
        />
        <TextInput
          label="DOB (DD/MM/YYYY)"
          name="dob"
          updateFormValue={updateFormValue}
          keyboard="number-pad"
          error={errors.dob}
        />
        <TextInput
          label="Gender"
          name="gender"
          updateFormValue={updateFormValue}
          error={errors.gender}
        />
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
        <Button name="Sign up" onPress={handleSubmit} loading={loading} />
      </View>
    </Screen>
  );
};

export default Sign_up;
