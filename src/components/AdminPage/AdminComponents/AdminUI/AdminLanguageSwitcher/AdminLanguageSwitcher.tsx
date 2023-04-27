import { FC, useContext} from 'react';
import s from './AdminLanguageSwitcher.module.scss';
import {TranslationTextContext} from "@/pages/admin";
import {useRouter} from "next/router";

const AdminLanguageSwitcher: FC = () => {

    const context = useContext(TranslationTextContext);
    const { locales } = useRouter();

    return (
        <div className={s.container}>
            <div className={s.languageSwitch}>
                <p>Перемикання між мовами</p>
                <div className={s.languageList}>
                    {
                        locales?.map(l => <button key={l} onClick={() => context?.setLanguage(l)}>{l}</button>)
                    }
                </div>
            </div>
            <div className={s.resetState}>
                <button onClick={() => {context?.setTranslate(context?.DefaultTranslate)}}>Відмінити зміни</button>
            </div>
        </div>
    );
};

export default AdminLanguageSwitcher;
