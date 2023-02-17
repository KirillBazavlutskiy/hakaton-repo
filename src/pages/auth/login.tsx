import {FC, useState} from 'react';
import {signIn} from "next-auth/react";
import { ILog } from "@/models/Auth";
import Link from "next/link";

const Login: FC = () => {
    const [loginData, setLoginData] = useState<ILog>({
        email: '',
        password: '',
    });

    return (
        <form onSubmit={async () => {
            const res = await signIn('credentials', {
                email: loginData.email,
                password: loginData.password,
                redirect: true,
                callbackUrl: '/',
            })
        }}>
            <label>
                Email
                <input
                    type="email"
                    value={loginData.email}
                    onChange={e => setLoginData({...loginData, email: e.target.value})}
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    value={loginData.password}
                    onChange={e => setLoginData({...loginData, password: e.target.value})}
                />
            </label>
            <button type='submit'>Login</button>
            <p>Not registered yet? <Link href='/auth/registration'>Sign Up</Link></p>
        </form>
    );
};

export default Login;