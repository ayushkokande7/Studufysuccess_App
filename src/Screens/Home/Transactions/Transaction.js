import {FlatList, ActivityIndicator, Image} from 'react-native';
import {Screen, Transaction} from '../../../Components/Screen';
import {useQuery} from '@tanstack/react-query';
import useApi from '../../../Components/Api/Api';
import {useFocusEffect} from '@react-navigation/native';
const Payment = () => {
  const {data, isLoading, refetch} = useQuery({
    queryKey: [`payment_data`],
    queryFn: () => useApi().get(`/payment`),
  });
  useFocusEffect(() => {
    refetch();
  });
  return (
    <Screen list>
      {isLoading ? (
        <ActivityIndicator size={40} style={{marginTop: 30}} />
      ) : data?.data.length == 0 ? (
        <Image
          source={require('../../../Assets/Images/nodata.png')}
          style={{
            width: 320,
            height: 320,
            alignSelf: 'center',
            marginTop: 100,
          }}
        />
      ) : (
        <FlatList
          data={data?.data}
          keyExtractor={item => item.payment_id}
          renderItem={({item}) => <Transaction data={item} />}
        />
      )}
    </Screen>
  );
};

export default Payment;
