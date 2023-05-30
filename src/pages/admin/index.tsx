import { FC, useEffect } from 'react';
import {useAppSelector} from "@/redux/store";

import Login from "@/components/AdminPage/Login/Login";
import MainPage from "@/components/AdminPage/MainPage/MainPage";

import 'react-toastify/dist/ReactToastify.css';
import Header
    from "@/components/AdminPage/AdminComponents/AdminUI/Header/Header";
import AuthService from "@/services/AuthService";

const Admin: FC = () => {
    const { user } = useAppSelector(state => state.status);

    useEffect(() => {
        AuthService.GetMe();
    }, [])

    return (
        <>
            {user === 'Admin' && <Header />}
            {user === 'Guest' && <Login />}
            {user === 'Admin' && <MainPage />}
        </>
    );
};

export default Admin;
