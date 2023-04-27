import {Dispatch, FC, SetStateAction} from 'react';
import s from './NeedToLogin.module.scss';

interface NeedToLoginProps {
    setLoginMenuActive: Dispatch<SetStateAction<boolean>>;
    text: string;
    buttonText: string;
}

const NeedToLogin: FC<NeedToLoginProps> = ({ setLoginMenuActive, text, buttonText }) => {
    return (
        <div className={s.container}>
            <h2>{text}</h2>
            <button type='button' onClick={() => setLoginMenuActive(true)}>{buttonText}</button>
        </div>
    );
};

export default NeedToLogin;
