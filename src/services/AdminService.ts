import $api from "@/http/init";
import Cookies from "universal-cookie";
import {toast} from "react-toastify";
import {IAdmin, IOffer, IProject} from "@/models/data";

export default class AdminService {
    static Login = async (password: string): Promise<void> => {
        const res = await $api.get<IAdmin>(`/api/Auth/Token?password=${password}`);
        if (res !== undefined) {
            const cookies = new Cookies();
            cookies.set('token', res.data.token);
            cookies.set('status', res.data.isMaster ? 'superadmin' : 'admin');
            // store.dispatch(changeUserType(res.data.isMaster ? 'superadmin' : 'admin'));
        } else {
            toast.error('Помилка!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    static ChechAuth = async (): Promise<void> => {
        const res = await $api.get('/api/Auth/CheckAuth');
        const cookies = new Cookies();
        if (res?.status === 200) {
            // store.dispatch(changeUserType(cookies.get('status')));
        }
    }

    static AddAdmin = async (password: string): Promise<boolean> => {
        const res = await $api.get(`/api/Auth/AddSlavePassword?password=${password}`);
        return 200 < res.status && res.status < 300;
    }

    static GetAdmins = async (): Promise<string[]> => {
        const { data } = await $api.get<string[]>('/api/Auth/ListSlavePassword');
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

    static AddProject = async (project: any) => {
        return await $api.post('/api/OurProject', project);
    }

    static DeleteProject = async (id: string) => {
        await $api.delete(`/api/OurProject?id=${id}`);
    }
}
