import {Dispatch, FC, SetStateAction, useState} from 'react';
import s from "./Login.module.scss";
import AuthService from "@/services/AuthService";
import {className} from "postcss-selector-parser";

interface LoginProps {
    setMode: Dispatch<SetStateAction<'login' | 'register'>>
    setLoginMenuActive: Dispatch<SetStateAction<boolean>>
}

const Login: FC<LoginProps> = ({ setMode,setLoginMenuActive }) => {

    function ClickFunc () {
        AuthService.ByEmailChallenge(email)
        setLoginMenuActive(false)
    }

    const [email, setEmail] = useState<string>('');

    return (
        <div className={s.container}>
            <div className={s.header}>
                <h1>Login</h1>
                <h2>Log before continuing</h2>
            </div>
            <div className={s.form}>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p onClick={() => setMode('register')} >Don't have an account?</p>
            </div>
            <button onClick={() => ClickFunc()}>Login</button>
        </div>
    );
};

export default Login;
