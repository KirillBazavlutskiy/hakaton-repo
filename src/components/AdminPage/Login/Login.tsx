import {FC, useState} from 'react';
import s from './Login.module.scss';
import {LoginRequest} from "@/models/auth";
import AuthService from "@/services/AuthService";

const Login: FC = () => {
    const [loginBody, setLoginBody] = useState<LoginRequest>({
        email: '',
        password: ''
    });

    return (
        <div className={s.container}>
            <h2>Login for admin page</h2>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    AuthService.Login(loginBody);
                }
            }>
                <input
                    type="text"
                    value={loginBody.email}
                    placeholder={'Email'}
                    onChange={e => setLoginBody({
                        ...loginBody,
                        email: e.target.value
                    })}
                />
                <input
                    type="text"
                    value={loginBody.password}
                    placeholder={'Password'}
                    onChange={e => setLoginBody({
                        ...loginBody,
                        password: e.target.value
                    })}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;
