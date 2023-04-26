import {Dispatch, FC, SetStateAction, useState} from 'react';
import Registration from "@/components/Login/Registration/Registration";
import ModalWindow from "@/components/Style/ModalWindow/ModalWindow";
import Login from './Login/Login';

interface LoginProps {
    setLoginMenuActive: Dispatch<SetStateAction<boolean>>;
    loginMenu: boolean;
}

const AuthWindow: FC<LoginProps> = ({ setLoginMenuActive, loginMenu   }) => {

    const [mode, setMode] = useState<'login' | 'register'>('login');

    return (
        <ModalWindow state={loginMenu} setState={setLoginMenuActive}>
            {
                mode === 'login' ? <Login setMode={setMode} /> : <Registration setMode={setMode} />
            }
        </ModalWindow>
    );
};

export default AuthWindow;
