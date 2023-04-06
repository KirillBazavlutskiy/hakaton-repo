import { FC, useState } from 'react';
import Image from "next/image";
import cn from "classnames";

import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { changeLanguage } from "@/redux/Slices/LanguageSlice";

import s from './LanguageSwitcher.module.scss';
import LangArrow from "@/images/icons/lang_arrow.svg"
import Link from 'next/link';


const LanguageSwitcher: FC = () => {
    const dispatch = useDispatch();
    const { language } = useAppSelector(state => state.language);
    const [status, setStatus] = useState<boolean>(false);

    return (
        <div className={s.lang} onClick={() => setStatus(prev => !prev)}>
            <Link href="/" locale={language}>
                <span className={s.text}>{language.toUpperCase()}</span>
            </Link>
            <Image className={cn(s.arrowDown, {[s.arrowUp]: status})} src={LangArrow} alt="" />

            <Link href="/" locale={language === 'en' ? 'ua' : 'en'}>
                <span
                    className={cn(s.droppedBox, {[s.active]: status})}
                    onClick={() => dispatch(changeLanguage(language === 'en' ? 'ua' : 'en'))}
                >{language == 'en' ? 'UA' : 'EN'}</span>
            </Link>
        </div>
    );
};

export default LanguageSwitcher;