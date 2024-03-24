import React from 'react';
import {Text} from '../../Components/Input';
import {Screen, Swiper} from '../../Components/Screen';
import {useQuery} from '@tanstack/react-query';
import useApi from '../../Components/Api/Api';
import {FlatList} from 'react-native';
const Wishlist = () => {
  const {data} = useQuery({
    queryKey: ['favoutites_course'],
    queryFn: () => useApi().get('/course/favourite'),
    gcTime: 60 * 1000,
  });
  return (
    <Screen NoHeader list>
      <Text size="large" style={{marginVertical: 10}}>
        Wishlist
      </Text>
      <FlatList
        data={data?.data}
        keyExtractor={item => item.course_id}
        renderItem={({item}) => <Swiper data={item} />}
        style={{marginVertical: 10}}
      />
    </Screen>
  );
};

export default Wishlist;
