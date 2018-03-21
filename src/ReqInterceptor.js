import VueAxios from 'axios'
import Auth from './AuthPackage'
window.Auth = Auth
const axios = window.axios = VueAxios

/*
* Axios request inteceptor
*/
export const inteceptor = axios.interceptors.request.use(function (config) {
    const token = Auth.getToken();

    if (token != null) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    
}, function (err) {
    return Promise.reject(err);
});

/*
* End of inteceptor
*/