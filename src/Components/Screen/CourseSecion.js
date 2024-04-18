import {View, FlatList} from 'react-native';
import {Text} from '../Input';
import {Swiper} from '../Screen';
import {useQuery} from '@tanstack/react-query';
import useApi from '../Api/Api';
const CourseSecion = ({name, horizontal = true}) => {
  const {data, isLoading} = useQuery({
    queryKey: [`course-${name}`],
    queryFn: () => useApi().get(`/course/course/${name}`),
  });
  return (
    <View style={{marginBottom: 10}}>
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        data?.data?.length != 0 && (
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
              horizontal={horizontal}
              showsHorizontalScrollIndicator={false}
              data={data?.data}
              keyExtractor={item => item.course_id}
              renderItem={({item}) => <Swiper data={item} row={horizontal} />}
              style={{marginVertical: 10}}
            />
          </View>
        )
      )}
    </View>
  );
};

export default CourseSecion;
