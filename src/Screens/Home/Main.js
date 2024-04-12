// import CheckVersion from '../../Components/Api/CheckVersion';
// import Home from './Home';
import NetInfo from '@react-native-community/netinfo';
import NoInternet from '../Home/NoInternet';
import {DrawerNavigation} from '../../Navigation';
import {useState, useEffect} from 'react';
const Main = () => {
  const [isConnected, setIsConnected] = useState(true);
  console.log('main screen rendered');
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return isConnected ? <DrawerNavigation /> : <NoInternet />;
};

export default Main;
