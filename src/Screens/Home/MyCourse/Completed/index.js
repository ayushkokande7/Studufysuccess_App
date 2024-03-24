import {FlatList} from 'react-native';
import {Screen, CourseCard} from '../../../../Components/Screen';
import {Text} from '../../../../Components/Input';
import {useQuery} from '@tanstack/react-query';
import useApi from '../../../../Components/Api/Api';
export default function Complete({navigation}) {
  const {isLoading, data} = useQuery({
    queryKey: ['completed_course'],
    queryFn: () => useApi().get('/course/completed'),
    gcTime: 60 * 1000,
  });
  return (
    <Screen list>
      {isLoading ? (
        <Text>Loading</Text>
      ) : data?.data?.length == 0 ? (
        <Text>No Course Completed</Text>
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
                navigation.navigate('CompletedCourse', {
                  title: item.course_name,
                  data: {
                    lecturec: item.lecture_completed,
                    id: item.course_id,
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
