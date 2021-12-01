import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL:  "http://127.0.0.1:8000/api",
    headers: {
        post: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYzNzg3MjA0NSwiZXhwIjoxNjM3ODc1NjQ1LCJuYmYiOjE2Mzc4NzIwNDUsImp0aSI6InBmdkNIQndtWTN5emd4N1YiLCJzdWIiOjExLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.K9bVoseCwVmpr1Ts75utSYKKtQX_xf3rMe7XObAWiJ0`
        },
        get: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYzNzg3MjA0NSwiZXhwIjoxNjM3ODc1NjQ1LCJuYmYiOjE2Mzc4NzIwNDUsImp0aSI6InBmdkNIQndtWTN5emd4N1YiLCJzdWIiOjExLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.K9bVoseCwVmpr1Ts75utSYKKtQX_xf3rMe7XObAWiJ0`
        }
    }
});
AxiosInstance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
export default AxiosInstance