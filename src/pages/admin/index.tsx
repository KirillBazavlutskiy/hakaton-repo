import {createContext, Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import {useAppSelector} from "@/redux/store";

import Login from "@/components/AdminPage/Login/Login";
import MainPage from "@/components/AdminPage/MainPage/MainPage";

import 'react-toastify/dist/ReactToastify.css';
import {Translation} from "@/models/text";
import path from "path";
import process from "process";
import fs from "fs";
import {GetServerSideProps} from "next/types";
import AdminLanguageSwitcher
    from "@/components/AdminPage/AdminComponents/AdminUI/AdminLanguageSwitcher/AdminLanguageSwitcher";
import AuthService from "@/services/AuthService";

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
        AuthService.GetMe();
    }, [])

    return (
        <TranslationTextContext.Provider value={{
            DefaultTranslate: TranslationCopy,
            StateTranslate: localisation,
            setTranslate: setLocalisation,
            language: language,
            setLanguage: setLanguage,
        }}>
            {user === 'Admin' && <AdminLanguageSwitcher />}
            {user === 'Guest' && <Login />}
            {user === 'Admin' && <MainPage Translation={localisation} />}
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
