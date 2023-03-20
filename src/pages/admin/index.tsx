import {FC, useEffect} from 'react';
import {useAppSelector} from "@/redux/store";
import AdminService from "@/services/AdminService";

import Login from "@/components/AdminPage/Login/Login";
import SuperAdminPage from "@/components/AdminPage/SuperAdminPage/SuperAdminPage";
import AdminPage from "@/components/AdminPage/AdminPage/AdminPage";

import 'react-toastify/dist/ReactToastify.css';

const Admin: FC = () => {
    const { user } = useAppSelector(state => state.status)

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