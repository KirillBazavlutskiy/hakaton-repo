import {FC, useEffect, useState} from 'react';
import {useAppSelector} from "@/redux/store";
import AdminService from "@/services/AdminService";

import Login from "@/components/AdminPage/Login/Login";
import SuperAdminPage from "@/components/AdminPage/SuperAdminPage/SuperAdminPage";
import AdminPage from "@/components/AdminPage/AdminPage/AdminPage";

import 'react-toastify/dist/ReactToastify.css';
import {Translation} from "@/models/text";

interface localisationState {
    loading: boolean;
    localisationText: Translation | null;
}

const Admin: FC = () => {
    const { user } = useAppSelector(state => state.status)

    const [localisation, setLocalisation] = useState<localisationState>({
        loading: true,
        localisationText: null,
    })
    const [language, setLanguage] = useState('en');

    useEffect(() => {
    });

    useEffect(() => {
        AdminService.ChechAuth();
    }, [])

    return (
        <div>
            {user === 'user' && <Login />}
            {user === 'superadmin' && <SuperAdminPage />}
            {user === 'admin' && <AdminPage />}
        </div>
    );
};

export default Admin;