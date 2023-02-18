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
            document.cookie = `token=${res.data.token}`;
            store.dispatch(changeUserType(res.status !== 401 ? res.data.isMaster ? 'superadmin' : 'admin' : 'user'));
        }
    }
}