import axios from 'axios';
import {store} from "../redux/store";
import {changeUserType} from "@/redux/Slices/AdminSlice";

export const BASE_URL = 'https://ntu.egartsites.pp.ua';

const $api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
    },
});

$api.interceptors.request.use((config) => {
    config.withCredentials = true;
    return config;
});

$api.interceptors.response.use(
    (config) => config,
    async (error) => {
        if (error.response?.status === 401) store.dispatch(changeUserType('user'));
    }
);

export default $api;