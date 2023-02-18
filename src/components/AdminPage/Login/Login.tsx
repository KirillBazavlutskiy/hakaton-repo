import {FC, useState} from 'react';
import AdminService from "@/Services/AdminService";
import s from './Login.module.scss';

const Login: FC = () => {
    const [adminLoginPswd, setAdminPswd] = useState<string>('');

    return (
        <div className={s.container}>
            <h2>Login for admin page</h2>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    AdminService.Login(adminLoginPswd);
                }
            }>
                <input
                    type="text"
                    value={adminLoginPswd}
                    onChange={e => setAdminPswd(e.target.value)}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;