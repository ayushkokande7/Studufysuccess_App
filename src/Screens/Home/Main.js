import CheckVersion from '../../Components/Api/CheckVersion';
import Home from './Home';
const Main = () => {
  console.log('main rerendered');
  return (
    <>
      <CheckVersion />
      <Home />
    </>
  );
};

export default Main;
