import { FC } from 'react';
import s from './NeedToLogin.module.scss';

const NeedToLogin: FC = () => {
    return (
        <div className={s.container}>
            <h2>You need to register<br/>before filling out the form</h2>
            <button>Log in</button>
        </div>
    );
};

export default NeedToLogin;
