import axios from 'axios';
import Cookies from "universal-cookie";
import {toast} from "react-toastify";
import AuthService from "@/services/AuthService";
import MessageService from "@/services/MessageService";

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
    if (cookies.get('token')) {
        config.headers.Authorization = `Bearer ${cookies.get('token')}`;
    }
    return config;
});

$api.interceptors.response.use(
    (config) => config,
    async (error) => {
        const origReq = error.config;
        if (!error?.response?.status && error.config && !error.config._isRetry) {
            origReq._isRetry = true;
            try {
                await AuthService.RefreshSession();
            } catch (e) {
                MessageService.ShowMessageError('Помилка авторизації!');
            }
        } else {
            MessageService.ShowMessageError('Помилка!');
        }
    }
);

export default $api;
