import { FC, useState } from 'react';
import Image from "next/image";
import cn from "classnames";

import s from './LanguageSwitcher.module.scss';
import LangArrow from "@/images/icons/lang_arrow.svg"
import {useRouter} from "next/router";
import Link from "next/link";


const LanguageSwitcher: FC = () => {

    const { locale, locales } = useRouter();
    const [ dropBox, setDropBox ] = useState<boolean>(false);

    return (
        <div className={s.lang} onClick={() => setDropBox(prev => !prev)}>
            <div className={s.currentLanguage}>
                <Link href='/' locale={locale} className={s.text}>{locale?.toUpperCase()}</Link>
                <Image className={dropBox ? s.arrowUp : s.arrowDown} src={LangArrow} alt="" />
            </div>
            <div className={cn(s.dropBox, dropBox ? s.showed : s.hidden)}>
                {
                    locales?.filter(l => l !== locale)
                    .map(l => <Link href='/' locale={l} className={s.text}>{l?.toUpperCase()}</Link>)
                }
            </div>
        </div>
    );
};

export default LanguageSwitcher;