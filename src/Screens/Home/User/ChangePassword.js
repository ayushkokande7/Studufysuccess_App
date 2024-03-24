import {Screen} from '../../../Components/Screen';
import {Button, TextInput} from '../../../Components/Input';
import {useState} from 'react';
import {View} from 'react-native';
import useApi from '../../../Components/Api/Api';
const ChangePassword = ({navigation}) => {
  const {post, loading} = useApi();
  const [form, setForm] = useState({
    oldpassword: '',
    newpassword: '',
    confirmpassword: '',
  });
  const [errors, setErrors] = useState({
    oldpassword: false,
    newpassword: false,
    confirmpassword: false,
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
    newErrors.confirmpassword = form.newpassword !== form.confirmpassword;
    setErrors(newErrors);

    if (!Object.values(newErrors).some(error => error)) {
      try {
        const res = await post(
          '/user/changepassword',
          (data = {
            password: form.oldpassword,
            cpassword: form.newpassword,
          }),
        );
        navigation.goBack();
        // console.log('api res', res);
      } catch (error) {
        // console.log('api error', error);
      }
    }
  };

  return (
    <Screen>
      <View
        style={{
          marginVertical: 10,
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <TextInput
            label="Current Password"
            name="oldpassword"
            updateFormValue={updateFormValue}
            rightIcon={true}
            error={errors.oldpassword}
          />
          <TextInput
            label="New Password"
            name="newpassword"
            updateFormValue={updateFormValue}
            rightIcon={true}
            error={errors.newpassword}
          />
          <TextInput
            label="Confirm New Password"
            name="confirmpassword"
            updateFormValue={updateFormValue}
            rightIcon={true}
            error={errors.confirmpassword}
          />
        </View>
        <Button name="Submit" onPress={handleSubmit} loading={loading} />
      </View>
    </Screen>
  );
};

export default ChangePassword;
