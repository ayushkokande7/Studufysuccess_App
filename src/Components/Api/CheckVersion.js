import DeviceInfo from 'react-native-device-info';
import useApi from './Api';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
const CheckVersion = () => {
  const navigation = useNavigation();
  const {get} = useApi();
  console.log('check version rerendered');
  useEffect(() => {
    const getCheckVersion = async () => {
      try {
        const currentVersion = await get('/user/version');
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

    getCheckVersion();
  }, []);
};

export default CheckVersion;
