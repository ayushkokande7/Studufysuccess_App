import {Text} from '../../Components/Input';
import {Screen, Swiper} from '../../Components/Screen';
import {useQuery} from '@tanstack/react-query';
import useApi from '../../Components/Api/Api';
import {FlatList, Image} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
const Wishlist = () => {
  const {data, isLoading, refetch} = useQuery({
    queryKey: ['favoutites_course'],
    queryFn: () => useApi().get('/course/favourite'),
  });

  useFocusEffect(() => {
    refetch();
  });
  return (
    <Screen NoHeader list>
      {isLoading ? (
        <ActivityIndicator size={40} style={{marginTop: 50}} />
      ) : data?.data.length == 0 ? (
        <Image
          source={require('../../Assets/Images/nodata.png')}
          style={{width: 320, height: 320, alignSelf: 'center', marginTop: 100}}
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data?.data}
          keyExtractor={item => item.course_id}
          ListHeaderComponent={
            <Text size="large" style={{marginVertical: 10}}>
              Wishlist
            </Text>
          }
          renderItem={({item}) => <Swiper data={item} />}
          style={{marginBottom: 15}}
        />
      )}
    </Screen>
  );
};

export default Wishlist;
