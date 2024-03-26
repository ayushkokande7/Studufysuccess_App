import axios from 'axios';
import FlashMessage from '../Screen/FlashMessage';
const useApi = () => {
  const request = async (method, endpoint, data = {}, params = {}) => {
    try {
      const response = await axios({
        method,
        url: endpoint,
        data,
        params,
      });
      if (response.data.message) {
        FlashMessage({
          message: response.data.message,
          type: 'success',
        });
      }
      return response.data;
    } catch (error) {
      if (error.response.data.message) {
        FlashMessage({
          message: error.response.data.message,
          type: 'danger',
        });
      }
      console.log('useapi error', error.response.data);
    }
  };

  const get = async (endpoint, params = {}) => {
    return request('GET', endpoint, {}, params);
  };

  const post = async (endpoint, data = {}, params = {}) => {
    return request('POST', endpoint, data, params);
  };

  const put = async (endpoint, data = {}, params = {}) => {
    return request('PUT', endpoint, data, params);
  };

  const remove = async (endpoint, params = {}) => {
    return request('DELETE', endpoint, {}, params);
  };

  return {get, post, put, remove};
};

export default useApi;
