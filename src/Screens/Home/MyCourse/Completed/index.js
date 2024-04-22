import {FlatList, Image} from 'react-native';
import {Screen, CourseCard} from '../../../../Components/Screen';
import {useQuery} from '@tanstack/react-query';
import useApi from '../../../../Components/Api/Api';
import {ActivityIndicator} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
export default function Complete({navigation}) {
  const {isLoading, data, refetch} = useQuery({
    queryKey: ['completed_course'],
    queryFn: () => useApi().get('/course/completed'),
  });
  useFocusEffect(() => {
    refetch();
  });
  return (
    <Screen list>
      {isLoading ? (
        <ActivityIndicator size={40} style={{marginTop: 30}} />
      ) : data?.data.length == 0 ? (
        <Image
          source={require('../../../../Assets/Images/nodata2.png')}
          style={{
            width: 250,
            height: 250,
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
                navigation.navigate('CompletedCourse', {
                  title: item.course_name,
                  data: {
                    lecturec: item.lecture_completed,
                    id: item.course_id,
                    lecture: item.lectures,
                    certificate: item.certificate,
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
