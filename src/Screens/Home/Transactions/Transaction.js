import {FlatList, ActivityIndicator} from 'react-native';
import {Screen, Transaction} from '../../../Components/Screen';
import {useQuery} from '@tanstack/react-query';
import useApi from '../../../Components/Api/Api';

const Payment = () => {
  const {data, isLoading} = useQuery({
    queryKey: [`payment_data`],
    queryFn: () => useApi().get(`/payment`),
  });
  return (
    <Screen list>
      {isLoading ? (
        <ActivityIndicator size={40} style={{marginTop: 30}} />
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
