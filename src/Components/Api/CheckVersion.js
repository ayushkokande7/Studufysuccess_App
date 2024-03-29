import DeviceInfo from 'react-native-device-info';
import useApi from './Api';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';
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
    SplashScreen.hide();
  };

  useEffect(() => {
    getCheckVersion();

    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Nointernet'}],
        });
      }
    });

    return () => unsubscribe();
  }, []);
};

export default CheckVersion;
