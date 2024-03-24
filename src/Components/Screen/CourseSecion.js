import {View, FlatList} from 'react-native';
import {Text} from '../Input';
import {Swiper} from '../Screen';
import {useQuery} from '@tanstack/react-query';
import useApi from '../Api/Api';
const CourseSecion = ({name}) => {
  const {data} = useQuery({
    queryKey: [`course-${name}`],
    queryFn: () => useApi().get(`/course/${name}`),
  });
  return (
    <View>
      <Text
        size="medium"
        style={{marginBottom: 5, textTransform: 'capitalize'}}>
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
  );
};

export default CourseSecion;
