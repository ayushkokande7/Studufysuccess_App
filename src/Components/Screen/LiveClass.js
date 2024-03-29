import {View, FlatList} from 'react-native';
import {Text} from '../Input';
import {LiveClassSwiper} from '../Screen';
import {useQuery} from '@tanstack/react-query';
import useApi from '../Api/Api';
const CourseSecion = () => {
  const {data} = useQuery({
    queryKey: [`course-live-class`],
    queryFn: () => useApi().get(`/course/live_class`),
  });
  return (
    <>
      {data && (
        <View>
          <Text
            size="medium"
            style={{
              textTransform: 'capitalize',
              paddingLeft: 10,
            }}>
            Live Classes
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data?.data}
            keyExtractor={item => item.course_id}
            renderItem={({item}) => (
              <LiveClassSwiper
                row={data.data.length === 1 ? false : true}
                data={item}
              />
            )}
            style={{marginVertical: 10}}
          />
        </View>
      )}
    </>
  );
};

export default CourseSecion;
