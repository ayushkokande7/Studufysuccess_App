import {FlatList} from 'react-native';
import {Screen, CourseCard} from '../../../Components/Screen';
import {Text} from '../../../Components/Input';
import {useQuery} from '@tanstack/react-query';
import useApi from '../../../Components/Api/Api';
export default function Ongoing({navigation}) {
  const {isLoading, data} = useQuery({
    queryKey: ['pending_course'],
    queryFn: () => useApi().get('/course/pending'),
    gcTime: 60 * 1000,
  });
  return (
    <Screen list>
      {isLoading ? (
        <Text>Loading</Text>
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
