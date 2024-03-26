import {Button} from 'react-native-paper';
import {memo} from 'react';
const InputButton = ({
  name,
  mode = 'contained',
  onPress,
  loading = false,
  style,
}) => {
  // console.log('button');
  return (
    <Button
      mode={mode}
      style={{marginBottom: 10, ...style, borderRadius: 5}}
      contentStyle={{height: 55}}
      labelStyle={{
        fontSize: 20,
      }}
      onPress={onPress}
      disabled={loading}
      loading={loading}>
      {!loading && name}
    </Button>
  );
};

export default memo(InputButton); // memoize InputButton;
