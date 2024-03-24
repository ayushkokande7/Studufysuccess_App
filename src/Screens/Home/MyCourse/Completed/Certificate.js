import {Screen} from '../../../../Components/Screen';
import {Button} from '../../../../Components/Input';
import {Image} from 'react-native';
const Certificate = () => {
  return (
    <Screen>
      <Image
        source={require('../../../../Assets/Images/signin.png')}
        style={{flex: 1, width: '100%', height: '90%'}}
        objectFit="contain"
      />
      <Button name="Download Certificate" onPress={() => {}} />
    </Screen>
  );
};

export default Certificate;
