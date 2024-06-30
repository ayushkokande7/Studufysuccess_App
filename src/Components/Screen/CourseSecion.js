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
        <View
          style={{
            width: '100%',
            backgroundColor: '#92919174',
            borderRadius: 10,
            height: 180,
            padding: 10,
            flexDirection: 'row',
            gap: 10,
          }}>
          <View
            style={{
              width: '40%',
              height: '100%',
              backgroundColor: '#9e9e9ea5',
              borderRadius: 10,
            }}></View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-around',
            }}>
            <View style={{gap: 10}}>
              <View
                style={{
                  width: 100,
                  height: 25,
                  backgroundColor: '#a4a4a4a5',
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  width: '100%',
                  height: 30,
                  backgroundColor: '#8d8c8c8b',
                  borderRadius: 10,
                }}
              />
            </View>
            <View
              style={{
                width: 150,
                height: 30,
                backgroundColor: '#8080808b',
                borderRadius: 10,
              }}
            />
            <View
              style={{
                width: '100%',
                height: 25,
                backgroundColor: '#808080b6',
                borderRadius: 10,
              }}
            />
          </View>
        </View>
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
