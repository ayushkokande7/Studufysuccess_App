import {View, FlatList} from 'react-native';
import {Text} from '../Input';
import {Swiper} from '../Screen';
import {useQuery} from '@tanstack/react-query';
import useApi from '../Api/Api';
const CourseSecion = ({name}) => {
  const {data, isLoading} = useQuery({
    queryKey: [`course-${name}`],
    queryFn: () => useApi().get(`/course/${name}`),
  });
  return (
    <View>
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <View>
          <Text
            size="medium"
            style={{
              textTransform: 'capitalize',
              paddingLeft: 10,
            }}>
            {name} Courses
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data?.data}
            keyExtractor={item => item.course_id}
            renderItem={({item}) => <Swiper row data={item} />}
            style={{marginVertical: 10}}
          />
        </View>
      )}
    </View>
  );
};

export default CourseSecion;
