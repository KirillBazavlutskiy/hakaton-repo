import { FC, useState } from 'react';
import Image from "next/image";
import cn from "classnames";

import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { changeLanguage } from "@/redux/Slices/LanguageSlice";

import s from './LanguageSwitcher.module.scss';
import LangArrow from "@/images/icons/lang_arrow.svg"


const LanguageSwitcher: FC = () => {
    const dispatch = useDispatch();
    const { language } = useAppSelector(state => state.language);
    const [status, setStatus] = useState<boolean>(false);

    return (
        <div className={s.lang} onClick={() => setStatus(prev => !prev)}>
            <span className={s.text}>{language}</span>
            <Image className={cn(s.arrowDown, {[s.arrowUp]: status})} src={LangArrow} alt="" />

            <span
                className={cn(s.droppedBox, {[s.active]: status})}
                onClick={() => dispatch(changeLanguage(language === 'EN' ? 'UA' : 'EN'))}
            >{language == 'EN' ? 'UA' : 'EN'}</span>
        </div>
    );
};

export default LanguageSwitcher;