import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLogout} from '../../Redux/Slices/InitialSlice';

const BASE_URL = 'https://ss-backend-xi.vercel.app/api/';
// const BASE_URL = 'http://192.168.1.6:3000/api';

export default function CheckAuth() {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.initial);
  axios.defaults.headers.common['x-auth-token'] = token;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.baseURL = BASE_URL;
  console.log('auth rerender token', axios.defaults.baseURL);
  axios.interceptors.response.use(
    res => res,
    err => {
      if (err.response.status === 401) {
        dispatch(setUserLogout());
        console.log('invalid token');
      }
      return Promise.reject(err);
    },
  );
}
