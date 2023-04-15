import {createContext, Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import {useAppSelector} from "@/redux/store";
import AdminService from "@/services/AdminService";

import Login from "@/components/AdminPage/Login/Login";
import SuperAdminPage from "@/components/AdminPage/SuperAdminPage/SuperAdminPage";
import AdminPage from "@/components/AdminPage/AdminPage/AdminPage";

import 'react-toastify/dist/ReactToastify.css';
import {Translation} from "@/models/text";
import path from "path";
import process from "process";
import fs from "fs";
import {GetServerSideProps} from "next/types";
import AdminLanguageSwitcher
    from "@/components/AdminPage/AdminComponents/AdminUI/AdminLanguageSwitcher/AdminLanguageSwitcher";

interface AdminIndexProps {
    Translation: Translation;
}

interface TranslationTextContext {
    DefaultTranslate: Translation;
    StateTranslate: Translation;
    setTranslate: Dispatch<SetStateAction<Translation>>;
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>;
}

export const TranslationTextContext = createContext<TranslationTextContext | null>(null);

const Admin: FC<AdminIndexProps> = ({ Translation }) => {
    const { user } = useAppSelector(state => state.status)

    const TranslationCopy = JSON.parse(JSON.stringify(Translation));

    const [localisation, setLocalisation] = useState<Translation>(TranslationCopy);
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        AdminService.ChechAuth();
    }, [])

    return (
        <TranslationTextContext.Provider value={{
            DefaultTranslate: TranslationCopy,
            StateTranslate: localisation,
            setTranslate: setLocalisation,
            language: language,
            setLanguage: setLanguage,
        }}>
            {user !== 'user' && <AdminLanguageSwitcher />}
            {user === 'user' && <Login />}
            {user === 'superadmin' && <SuperAdminPage Translation={localisation} />}
            {user === 'admin' && <AdminPage Translation={localisation} />}
        </TranslationTextContext.Provider>
    );
};

export const getServerSideProps: GetServerSideProps<AdminIndexProps> = async () => {
    const filePath = path.join(process.cwd(), 'data', 'localisation.json');
    const data = await fs.readFileSync(filePath);
    const jsonData: Translation = JSON.parse(data.toString());

    return {
        props: {
            Translation: jsonData,
        },
    };
}

export default Admin;