import axios from 'axios';
const instance = axios.create({baseURL: 'https://nachrichten-php.herokuapp.com/public/api/'});
instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
export default instance