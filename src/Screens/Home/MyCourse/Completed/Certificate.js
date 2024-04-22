import {Screen} from '../../../../Components/Screen';
import {Button, Text} from '../../../../Components/Input';
import {Image, Linking} from 'react-native';

const Certificate = ({route}) => {
  const data = route.params;
  return (
    <Screen style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {data?.certificate == null ? (
        <Text size="medium">No Certificate</Text>
      ) : (
        <>
          <Image
            source={{uri: data?.certificate}}
            style={{flex: 1, width: '100%', height: '100%'}}
            objectFit="contain"
          />

          <Button
            name="Download Certificate"
            onPress={() => {
              Linking.openURL(`${data?.certificate}/download`);
            }}
          />
        </>
      )}
    </Screen>
  );
};

export default Certificate;
