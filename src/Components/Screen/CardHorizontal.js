import {View, StyleSheet} from 'react-native';
import {TouchableRipple, Icon} from 'react-native-paper';
import {Text} from '../Input';
export default function CardHorizontal({title, leftIcon, onPress, rightIcon}) {
  return (
    <TouchableRipple onPress={onPress}>
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <Icon source={leftIcon} size={27} />
          <Text style={styles.text}>{title}</Text>
        </View>
        {rightIcon ? rightIcon : <Icon source="chevron-right" size={30} />}
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
    marginHorizontal: 8,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
  },
});
