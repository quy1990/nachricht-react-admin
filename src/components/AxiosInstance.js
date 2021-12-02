import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        post: {
            Authorization: "Bearer " + localStorage.getItem('access_token')
        },
        get: {
            Authorization: "Bearer " + localStorage.getItem('access_token')
        }
    }
});
AxiosInstance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
export default AxiosInstance