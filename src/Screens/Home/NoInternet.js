import {Text} from '../../Components/Input';
import {useState, useEffect} from 'react';
import {View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
const NoInternet = () => {
  const [isConnected, setIsConnected] = useState(true);
  console.log('netinfo');
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    !isConnected && (
      <View
        style={{
          backgroundColor: '#ff0000da',
          padding: 5,
          alignItems: 'center',
        }}>
        <Text>No Internet Connection</Text>
      </View>
    )
  );
};

export default NoInternet;
