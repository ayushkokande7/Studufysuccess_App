import {TouchableRipple, useTheme} from 'react-native-paper';
import {Text} from '../Input';
import {View, StyleSheet, Image} from 'react-native';
const Transaction = ({data}) => {
  const {colors} = useTheme();
  return (
    <TouchableRipple
      style={[styles.box, {backgroundColor: colors.elevation.level2}]}>
      <View style={styles.wrapper}>
        <Image
          source={{uri: data.image}}
          style={{height: 100, width: 100, objectFit: 'contain'}}
        />
        <View style={{flex: 1}}>
          <Text size="medium" style={{fontWeight: 'bold'}}>
            {data.course_name}
          </Text>
          <Text size="medium" style={{color: '#007171'}}>
            ₹{data.amount}
          </Text>
          <Text>{data.transaction_id}</Text>
          <Text>{new Date(data.date).toLocaleString()}</Text>
        </View>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  box: {
    marginTop: 15,
    borderRadius: 10,
  },
  wrapper: {
    flexDirection: 'row',
    gap: 15,
    padding: 10,
    alignItems: 'center',
  },
});
export default Transaction;
