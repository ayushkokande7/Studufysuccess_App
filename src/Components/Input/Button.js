import {Button} from 'react-native-paper';
import {memo} from 'react';
import {StyleSheet} from 'react-native';
const InputButton = ({
  name,
  mode = 'contained',
  onPress,
  loading = false,
  style,
}) => {
  console.log('button');
  return (
    <Button
      mode={mode}
      style={{marginBottom: 10, ...style, borderRadius: 5}}
      contentStyle={{height: 55}}
      labelStyle={{
        fontSize: 20,
      }}
      onPress={onPress}
      loading={loading}>
      {!loading && name}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
});

export default memo(InputButton); // memoize InputButton;
