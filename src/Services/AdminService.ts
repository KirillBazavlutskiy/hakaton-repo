import $api from "@/http/init";
import {store} from "@/redux/store";
import {changeUserType} from "@/redux/Slices/AdminSlice";

interface IAdmin {
    token: string;
    isMaster: boolean;
}

export default class AdminService {
    static Login = async (password: string): Promise<void> => {
        const res = await $api.get<IAdmin>(`https://ntu.egartsites.pp.ua/api/Auth/Token?password=${password}`);
        if (res.data) {
            document.cookie = `${res.data.token}`;
            store.dispatch(changeUserType(res.status !== 401 ? res.data.isMaster ? 'superadmin' : 'admin' : 'user'));
        }
    }

    static AddAdmin = async (password: string): Promise<boolean> => {
        const res = await $api.get(`https://ntu.egartsites.pp.ua/api/Auth/AddSlavePassword?password=${password}`);
        console.log(res);
        return 200 < res.status && res.status < 300;
    }

    static GetAdmins = async (): Promise<string[]> => {
        const { data } = await $api.get<string[]>('https://ntu.egartsites.pp.ua/api/Auth/ListSlavePassword');
        return data;
    }

    // static ChechAuth = async (): Promise<void> => {
    //     const { data: { isSuper } } = await $api.get<{isMaster}>
    // }
}
