import axios from 'axios';
import { LocalStorageService } from './LocalStorageService';

export const END_POINT = 'https://dedalo.com.mx/importacion/public/api';
export const URL_ASSETS = 'https://dedalo.com.mx/importacion/storage/app';

const _HTTP_ = axios.create();

_HTTP_.interceptors.request.use(
    (config: any) => {
        const session = LocalStorageService.get('imp-session');
        if(session && session.token) {
            config.headers.Authorization = `Bearer ${session.token}`;
        }

        return config;
    }
)

_HTTP_.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.log('HTTP::interceptor::error', error)
        // const { status } = error.response;
        // if (status === 401) {
        //     window.location.replace('/auth/login');
        //     LocalStorageService.clear();
        // }

        return Promise.reject(error.response.data || { message: 'Unknown error' });
    }
)

export const HTTP = _HTTP_;
