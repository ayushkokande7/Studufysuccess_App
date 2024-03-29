import {Text} from '../../Components/Input';
import {Screen, Swiper} from '../../Components/Screen';
import {useQuery} from '@tanstack/react-query';
import useApi from '../../Components/Api/Api';
import {FlatList, Image, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
const Wishlist = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['favoutites_course'],
    queryFn: () => useApi().get('/course/favourite'),
    staleTime: 10,
  });
  console.log('wishlist');
  return (
    <Screen NoHeader list>
      {isLoading ? (
        <ActivityIndicator size={40} style={{marginTop: 50}} />
      ) : !data?.data ? (
        <Image
          source={require('../../Assets/Images/nodata.png')}
          style={{width: 320, height: 320, alignSelf: 'center', marginTop: 100}}
        />
      ) : (
        <View>
          <Text size="large" style={{marginVertical: 10}}>
            Wishlist
          </Text>
          <FlatList
            data={data?.data}
            keyExtractor={item => item.course_id}
            renderItem={({item}) => <Swiper data={item} />}
            style={{marginVertical: 10}}
          />
        </View>
      )}
    </Screen>
  );
};

export default Wishlist;
