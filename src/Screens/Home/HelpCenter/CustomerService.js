import {Screen} from '../../../Components/Screen';
import {Text, TextInput} from '../../../Components/Input';
import {StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useState} from 'react';
export default function CustomerService() {
  const [message, setMessage] = useState('');
  const updateFormValue = ({value}) => {
    setMessage(value);
  };
  return (
    <>
      <Screen>
        <View style={{alignItems: 'baseline', marginBottom: 100}}>
          <Text style={styles.sender}>
            loream ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
          <Text style={styles.sender}>
            loream ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
          <Text style={styles.sender}>loream</Text>
          <Text style={styles.receiver}>
            loream ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
          <Text style={styles.receiver}>
            loream ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
          <Text style={styles.receiver}>loream</Text>
          <Text style={styles.sender}>
            loream ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
          <Text style={styles.sender}>
            loream ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
          <Text style={styles.sender}>loream</Text>
          <Text style={styles.receiver}>
            loream ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
          <Text style={styles.receiver}>
            loream ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
          <Text style={styles.receiver}>loream</Text>
        </View>
      </Screen>
      <View style={styles.bottom}>
        <TextInput
          name="message"
          updateFormValue={updateFormValue}
          style={{flex: 1}}
        />

        <IconButton icon="send" size={30} onPress={() => {}} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 5,
    right: 0,
    flexDirection: 'row',
  },
  sender: {
    padding: 10,
    backgroundColor: '#b5eb7a5f',
    borderRadius: 15,
    marginVertical: 6,
    maxWidth: '90%',
    alignSelf: 'flex-end',
  },
  receiver: {
    padding: 10,
    backgroundColor: '#44d8f65f',
    borderRadius: 15,
    marginVertical: 6,
    maxWidth: '90%',
  },
});
