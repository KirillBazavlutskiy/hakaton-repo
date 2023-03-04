import {FC, useEffect} from 'react';
import {useAppSelector} from "@/redux/store";
import AdminService from "@/services/AdminService";

import Login from "@/components/AdminPage/Login/Login";
import SuperAdmin from "@/components/AdminPage/SuperAdmin/SuperAdmin";

import 'react-toastify/dist/ReactToastify.css';
import * as process from "process";

const Admin: FC = () => {
    const { user } = useAppSelector(state => state.status)

    useEffect(() => {
        AdminService.ChechAuth();
    }, [])

    return (
        <div>
            {user === 'user' && <Login />}
            {user === 'superadmin' && <SuperAdmin />}
            {user === 'admin' && <h1>Admin Page</h1>}
        </div>
    );
};

export default Admin;