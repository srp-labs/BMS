import axios from 'axios';
import baseURL from './baseUrl';

const instance = axios.create({
    baseURL: baseURL,
});

export default instance;
