import axios from 'axios';
const AxiosInstance = axios.create({baseURL: 'http://localhost:8080/api/'});
AxiosInstance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
export default AxiosInstance