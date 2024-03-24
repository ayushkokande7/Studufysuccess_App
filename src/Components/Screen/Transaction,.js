import {TouchableRipple} from 'react-native-paper';
import {Text, Button} from '../Input';
import {View, StyleSheet, Image} from 'react-native';

const Transaction = ({navigation}) => {
  return (
    <TouchableRipple
      onPress={() => {
        navigation.navigate('TransactionDetails');
      }}
      style={styles.box}>
      <View style={styles.wrapper}>
        <Image
          source={require('../../Assets/Images/logo.png')}
          style={{height: 120, width: 120}}
        />
        <View style={{flex: 1}}>
          <Text size="medium" style={{fontWeight: 'bold'}}>
            Course Name
          </Text>
          <Text
            style={{
              backgroundColor: '#e28427c6',
              padding: 5,
              alignSelf: 'flex-start',
            }}>
            Paid
          </Text>
        </View>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  box: {
    marginBottom: 10,
    borderRadius: 10,
  },
  wrapper: {
    flexDirection: 'row',
    gap: 15,
    padding: 5,
    alignItems: 'center',
  },
});
export default Transaction;
