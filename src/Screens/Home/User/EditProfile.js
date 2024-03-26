import {View} from 'react-native';
import {useState, useEffect} from 'react';
import {Screen} from '../../../Components/Screen';
import {TextInput, Button} from '../../../Components/Input';
import useApi from '../../../Components/Api/Api';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {updateUserName} from '../../../Redux/Slices/InitialSlice';
import {useMutation} from '@tanstack/react-query';
const EditProfile = ({navigation}) => {
  const {get} = useApi();
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    phone: '',
  });

  useEffect(() => {
    const getUser = async () => {
      const res = await get('/user');
      setUser(res.data);
      setForm({
        fname: res.data.fname,
        lname: res.data.lname,
        phone: res.data.phone,
      });
    };
    getUser();
  }, []);

  const updateFormValue = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const {mutate, isPending} = useMutation({
    mutationFn: data => useApi().put('/user/update', (data = form)),
    onSuccess: res => {
      if (res.status === 200) {
        dispatch(updateUserName({fname: form.fname, lname: form.lname}));
      }
      navigation.goBack();
    },
  });

  const submit = async () => {
    mutate();
  };
  return (
    <Screen>
      {user ? (
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View style={{marginTop: 15}}>
            <View style={{flexDirection: 'row', gap: 15}}>
              <TextInput
                label="First Name"
                name="fname"
                defaultValue={user?.fname}
                updateFormValue={updateFormValue}
                style={{flex: 1}}
              />
              <TextInput
                label="Last Name"
                name="lname"
                defaultValue={user?.lname}
                updateFormValue={updateFormValue}
                style={{flex: 1}}
              />
            </View>
            <TextInput
              label="Phone"
              name="phone"
              defaultValue={JSON.stringify(user?.phone)}
              updateFormValue={updateFormValue}
              keyboard="number-pad"
            />
            <TextInput label="Email" defaultValue={user?.email} disabled />
            <TextInput label="DOB" defaultValue={user?.dob} disabled />
            <TextInput label="Gender" defaultValue={user?.gender} disabled />
          </View>
          <Button name="Update Profile" onPress={submit} loading={isPending} />
        </View>
      ) : (
        <ActivityIndicator size={40} style={{marginTop: 30}} />
      )}
    </Screen>
  );
};

export default EditProfile;
