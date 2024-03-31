import {FlatList, Image} from 'react-native';
import {Screen, CourseCard} from '../../../Components/Screen';
import {useQuery} from '@tanstack/react-query';
import useApi from '../../../Components/Api/Api';
import {ActivityIndicator} from 'react-native-paper';
export default function Ongoing({navigation}) {
  const {isLoading, data} = useQuery({
    queryKey: ['pending_course'],
    queryFn: () => useApi().get('/course/pending'),
    gcTime: 60 * 1000,
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
          keyExtractor={item => item.course_id}
          renderItem={({item}) => (
            <CourseCard
              title={item.course_name}
              img={item.image}
              duration={item.duration}
              progress={(item.lecture_completed / item.lectures) * 100}
              onPress={() => {
                navigation.navigate('Lessons', {
                  title: item.course_name,
                  data: {
                    lecturec: item.lecture_completed,
                    id: item.course_id,
                    lecture: item.lectures,
                  },
                });
              }}
            />
          )}
        />
      )}
    </Screen>
  );
}
