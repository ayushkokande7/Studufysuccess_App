import {Screen} from '../../Components/Screen';
import {useState} from 'react';
import {View} from 'react-native';
import {Button, TextInput} from '../../Components/Input';
import useApi from '../../Components/Api/Api';
import {useMutation} from '@tanstack/react-query';
import FlashMessage from '../../Components/Screen/FlashMessage';
const Appreport = ({navigation}) => {
  const [Issue, setIssue] = useState('');

  const updateFormValue = ({name, value}) => {
    setIssue(value);
  };

  const {mutate, isPending} = useMutation({
    mutationFn: data =>
      useApi().post(
        '/user/report_bug',
        (data = {
          desc: Issue,
        }),
      ),
    onSuccess: res => {
      if (res.status === 200) navigation.goBack();
    },
  });

  const submit = () => {
    if (Issue.length < 20)
      return FlashMessage({
        message: 'Issue should be atleast 20 characters long',
        type: 'danger',
      });
    mutate();
  };
  return (
    <Screen>
      <View style={{flex: 1, justifyContent: 'space-between', marginTop: 10}}>
        <TextInput
          label="Report a issue or suggest a feature/improvement"
          updateFormValue={updateFormValue}
          multiline={10}
        />
        <Button name="Submit" onPress={submit} loading={isPending} />
      </View>
    </Screen>
  );
};

export default Appreport;
