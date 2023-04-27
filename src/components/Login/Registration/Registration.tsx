import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import s from './Registration.module.scss';
import Input from "@/components/Login/Input/Input";
import {RegisterRequest} from "@/models/auth";
import AuthService from "@/services/AuthService";

interface RegistrationProps {
    setMode: Dispatch<SetStateAction<'login' | 'register'>>
}

const Registration: FC<RegistrationProps> = ({ setMode }) => {
    const [ regInfo, setRegInfo ] = useState<RegisterRequest>({
        fullName: '',
        phone: '',
        email: ''
    });

    return (
        <div className={s.container}>
            <div className={s.header}>
                <h1>Login</h1>
                <h2>Log before continuing</h2>
            </div>
            <div className={s.form}>
                <Input type={'text'} placeholder={'Name'} state={regInfo} propertyKey={'fullName'} setState={setRegInfo} />
                <Input type={'phone'} placeholder={'Phone'} state={regInfo} propertyKey={'phone'} setState={setRegInfo} />
                <Input type={'email'} placeholder={'E-mail'} state={regInfo} propertyKey={'email'} setState={setRegInfo} />
                <p onClick={() => setMode('login')}>Already have an account?</p>
            </div>
            <button onClick={(e) => {
                AuthService.Register(regInfo);
            }}>Login</button>
        </div>
    );
};

export default Registration;
