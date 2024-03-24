import CheckVersion from '../../Components/Api/CheckVersion';
import Home from './Home';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
const Main = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  console.log('main screen rendered');
  return (
    <>
      <CheckVersion />
      <Home />
    </>
  );
};

export default Main;
