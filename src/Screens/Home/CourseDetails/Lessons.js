import {FlatList, View} from 'react-native';
import {Text} from '../../../Components/Input';
import {LessonCard, Screen} from '../../../Components/Screen';
import {useQuery} from '@tanstack/react-query';
import useApi from '../../../Components/Api/Api';
import {useState} from 'react';
const Lessons = ({route, navigation}) => {
  const {data: course, padding} = route.params;
  const {isLoading, data} = useQuery({
    queryKey: ['curriculum', course.id],
    queryFn: () => useApi().get(`/course/curriculum/${course.id}`),
    gcTime: 60 * 1000,
  });
  const [lec, setLec] = useState(course.lecturec + 1);
  return (
    <Screen list padding={padding}>
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          data={data?.data}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontWeight: 'bold'}}>{item.section_title}</Text>
                <Text style={{fontWeight: 'bold'}}>
                  {item.section_duration}
                </Text>
              </View>
              <FlatList
                data={JSON.parse(item.lectures)}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <LessonCard
                    onPress={() => {
                      navigation.navigate('VideoPlayer', {
                        data: item,
                        course,
                        lec: setLec,
                      });
                    }}
                    title={item.title}
                    duration={item.duration}
                    number={item.id}
                    isLocked={lec < item.id}
                  />
                )}
              />
            </>
          )}
        />
      )}
    </Screen>
  );
};

export default Lessons;
