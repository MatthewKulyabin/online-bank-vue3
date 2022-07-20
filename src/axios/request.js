import axios from 'axios';
import router from '@/router';

const requestAxios = axios.create({
  baseURL: 'https://vue-online-bank-42b49-default-rtdb.firebaseio.com/',
});

requestAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response.status === 401) {
      router.push('/auth?message=auth');
    }
    return Promise.reject(error);
  }
);

export default requestAxios;
