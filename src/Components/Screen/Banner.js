import {Image, StyleSheet, Linking} from 'react-native';
import {TouchableRipple, ActivityIndicator} from 'react-native-paper';
import {useQuery} from '@tanstack/react-query';
import useApi from '../Api/Api';
const Banner = () => {
  const {data, isLoading} = useQuery({
    queryKey: [`course-image`],
    queryFn: () => useApi().get(`/course/banner`),
  });

  return (
    <TouchableRipple
      style={styles.banner}
      onPress={() => {
        data ? Linking.openURL(data?.data?.url) : null;
      }}>
      {isLoading ? (
        <ActivityIndicator size={40} style={{marginTop: 30}} />
      ) : (
        <Image
          source={{
            uri: data?.data?.image,
          }}
          style={styles.img}
        />
      )}
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 200,
    width: '100%',
    marginVertical: 15,
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
});
export default Banner;
