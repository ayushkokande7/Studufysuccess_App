import {useState, useRef, useEffect} from 'react';
import {Screen, Swiper} from '../../Components/Screen';
import {Searchbar, ActivityIndicator} from 'react-native-paper';
import useApi from '../../Components/Api/Api';
import {FlatList, Image} from 'react-native';
const Search = ({navigation}) => {
  const [value, setValue] = useState('');
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      ref.current.focus();
    }, 100);
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const data = await useApi().get(`/course/search/${value}`);
    setCourse(data?.data);
    setLoading(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(fetchData, 500);
    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <Screen list NoHeader>
      <Searchbar
        ref={ref}
        icon={'arrow-left'}
        onIconPress={() => navigation.goBack()}
        placeholder="Search"
        value={value}
        onChangeText={e => setValue(e)}
      />
      {loading && value ? (
        <ActivityIndicator size={30} style={{marginTop: 20}} />
      ) : course?.length == 0 && value ? (
        <Image
          source={require('../../Assets/Images/nodata2.png')}
          style={{
            width: 250,
            height: 250,
            alignSelf: 'center',
            marginTop: 100,
          }}
        />
      ) : (
        <FlatList
          data={course}
          keyExtractor={item => item.course_id}
          renderItem={({item}) => <Swiper data={item} />}
          style={{marginVertical: 10}}
        />
      )}
    </Screen>
  );
};

export default Search;
