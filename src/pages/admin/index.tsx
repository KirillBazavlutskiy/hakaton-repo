import {FC, useEffect} from 'react';
import {useAppSelector} from "@/redux/store";
import Login from "@/components/AdminPage/Login/Login";
import SuperAdmin from "@/components/AdminPage/SuperAdmin/SuperAdmin";
import AdminService from "@/Services/AdminService";

const Admin: FC = () => {

    const { user } = useAppSelector(state => state.status)
    return (
        <div>
            {user === 'user' && <Login />}
            {user === 'superadmin' && <SuperAdmin />}
            {user === 'admin' && <h1>Admin Page</h1>}
        </div>
    );
};

export default Admin;