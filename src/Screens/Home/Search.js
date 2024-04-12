import {useState, useRef, useEffect} from 'react';
import {Screen, Swiper} from '../../Components/Screen';
import {Searchbar} from 'react-native-paper';
import {SharedElement} from 'react-navigation-shared-element';
import useApi from '../../Components/Api/Api';
import {FlatList} from 'react-native';
const Search = ({navigation}) => {
  const [value, setValue] = useState('');
  const [course, setCourse] = useState([]);

  const ref = useRef();
  useEffect(() => {
    setTimeout(() => {
      ref.current.focus();
    }, 100);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await useApi().get(`course/search/${value}`);
      setCourse(data?.data);
    };

    const timeoutId = setTimeout(fetchData, 500);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <Screen list NoHeader>
      <SharedElement id={'searchbar'} style={{marginTop: 20}}>
        <Searchbar
          ref={ref}
          icon={'arrow-left'}
          onIconPress={() => navigation.goBack()}
          value={value}
          placeholder="Search"
          onChangeText={e => setValue(e)}
        />
      </SharedElement>
      <FlatList
        data={course}
        keyExtractor={item => item.course_id}
        renderItem={({item}) => <Swiper data={item} />}
        style={{marginVertical: 10}}
      />
    </Screen>
  );
};

export default Search;
