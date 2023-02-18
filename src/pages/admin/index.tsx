import { FC , useState} from 'react';
import AdminService from "@/Services/AuthService";
import {useAppSelector} from "@/redux/store";

const AdminLogin: FC = () => {
    const [adminLoginPswd, setAdminPswd] = useState<string>('');

    return (
        <div>
            <h1>Login as admin</h1>
            <input
                type="text"
                value={adminLoginPswd}
                onChange={e => setAdminPswd(e.target.value)}
            />
            <button onClick={() => AdminService.Login(adminLoginPswd)}>Login</button>
        </div>
    )
}

const Admin: FC = () => {
    const { user } = useAppSelector(state => state.status)
    return (
        <div>
            {user === 'user' && <AdminLogin />}
            {user === 'superadmin' && <h1>Super Admin Page</h1>}
            {/*{user === 'admin'  }*/}
        </div>
    );
};

export default Admin;