import Pdf from 'react-native-pdf';
const PDF = ({route}) => {
  const {url} = route.params;
  return (
    <Pdf
      source={{
        uri: url,
        cache: true,
      }}
      trustAllCerts={false}
      style={{flex: 1}}
    />
  );
};

export default PDF;
