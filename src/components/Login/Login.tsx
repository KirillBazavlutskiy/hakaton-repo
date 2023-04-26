import { FC } from 'react';
import s from './Login.module.scss';

const Login: FC = () => {
    return (
        <div className={s.container}>
            <div className={s.inner}>
                <div className={s.header}>
                    <h1>Login</h1>
                    <h2>Log before continuing</h2>
                </div>
                <input type="text"/>
                <button>Login</button>
            </div>
        </div>
    );
};

export default Login;
