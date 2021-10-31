import axios from 'axios';
const AxiosInstance = axios.create({baseURL: 'https://nachrichten-php.herokuapp.com/public/api/'});
AxiosInstance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
export default AxiosInstance