import axios from 'axios';
import {store} from "@/redux/store";
import {changeUserType} from "@/redux/Slices/AdminSlice";
import Cookies from "universal-cookie";

export const BASE_URL = 'https://ss.egartsites.pp.ua/api';

const $api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
    },
});

const cookies = new Cookies();
$api.interceptors.request.use((config) => {
    config.withCredentials = true;
    if (document.cookie) {
        config.headers.Authorization = `Bearer ${cookies.get('token')}`;
    }
    return config;
});

$api.interceptors.response.use(
    (config) => config,
    async (error) => {
        if (error.response?.status === 401) {
            cookies.set('token', '');
            cookies.set('status', '');
            store.dispatch(changeUserType('user'));
        }
    }
);

export default $api;