import $api from "@/http/init";
import {store} from "@/redux/store";
import {changeUserType} from "@/redux/Slices/AdminSlice";

interface IAdmin {
    token: string;
    isMaster: boolean;
}

export interface IProject {
    // id: string
    name: string;
    description_EN: string;
    description_UA: string;
    imageUrl: string;
}

export interface IOffer {
    "name": string,
    "phone": string,
    "email": string,
    "offer": string
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
        return 200 < res.status && res.status < 300;
    }

    static GetAdmins = async (): Promise<string[]> => {
        const { data } = await $api.get<string[]>('https://ntu.egartsites.pp.ua/api/Auth/ListSlavePassword');
        return data;
    }

    static AddOffer = async (offer: IOffer): Promise<void> => {
        await $api.post('/api/HelpOffer/Add', {...offer});
    }

    static GetProjects = async (): Promise<IProject[]> => {
        try {
            const { data } = await $api.get<IProject[]>('/api/OurProject');
            return data;
        } catch (e) {
            return [];
        }
    }

    static AddProject = async (project: IProject) => {
        return await $api.post('/api/OurProject', project);
    }

    static DeleteProject = async (id: number) => {
        await $api.delete(`/api/OurProject?id=${id}`);
    }
}
