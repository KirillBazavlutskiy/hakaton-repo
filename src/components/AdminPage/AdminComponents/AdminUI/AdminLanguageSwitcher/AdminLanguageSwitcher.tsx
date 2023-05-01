import { FC, useContext} from 'react';
import s from './AdminLanguageSwitcher.module.scss';
import {TranslationTextContext} from "@/pages/admin";
import {useRouter} from "next/router";
import Logo from '@/images/logo.png';
import Image from "next/image";
import cn from "classnames";

const AdminLanguageSwitcher: FC = () => {

    const context = useContext(TranslationTextContext);
    const { locales, locale } = useRouter();

    return (
        <div className={s.container}>
            <div className={s.logo}>
                <Image src={Logo} alt={'Logo'} />
            </div>
            <div className={s.languageSwitch}>
                <div className={s.languageList}>
                    {
                        locales?.map(l =>
                            <button
                                key={l}
                                className={cn(s.localeButton, context?.language === l ? s.active : s.notActive)}
                                onClick={() => context?.setLanguage(l)}
                            >{l.toUpperCase()}</button>)
                    }
                </div>
                <button className={s.resetButton} onClick={() => {context?.setTranslate(context?.DefaultTranslate)}}>Відмінити зміни</button>
            </div>
        </div>
    );
};

export default AdminLanguageSwitcher;
