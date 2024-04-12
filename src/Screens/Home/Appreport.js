import {Screen} from '../../Components/Screen';
import {useState} from 'react';
import {View} from 'react-native';
import {Text, Button, TextInput} from '../../Components/Input';
const Appreport = () => {
  const [Issue, setIssue] = useState('');

  const updateFormValue = ({name, value}) => {
    setIssue(value);
  };
  const submit = () => {
    console.log(Issue);
  };
  return (
    <Screen>
      <View style={{flex: 1, justifyContent: 'space-between', marginTop: 10}}>
        <TextInput
          label="Describe App Issue or Bug Briefly"
          updateFormValue={updateFormValue}
          multiline={10}
        />
        <Button name="Submit" onPress={submit} />
      </View>
    </Screen>
  );
};

export default Appreport;
