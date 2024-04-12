import DeviceInfo from 'react-native-device-info';
import useApi from './Api';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
const CheckVersion = () => {
  const navigation = useNavigation();
  console.log('check version rerendered');
  const getCheckVersion = async () => {
    try {
      const currentVersion = await useApi().get('/user/version');
      if (DeviceInfo.getVersion() < currentVersion.data.version) {
        console.log(
          'update app',
          currentVersion.data.version,
          '  ',
          DeviceInfo.getVersion(),
        );
        navigation.replace('Update');
      }
    } catch (err) {}
  };

  useEffect(() => {
    getCheckVersion();
  }, []);
};

export default CheckVersion;
