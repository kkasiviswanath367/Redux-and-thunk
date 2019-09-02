import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test2-4192a.firebaseio.com/'
});

export default instance;