import {FC, useState} from 'react';
import s from './Header.module.scss';
import HeaderMenu from "@/components/B1/Header/HeaderMenu/HeaderMenu";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/redux/store";
import {changeLanguage} from "@/redux/Slices/LanguageSlice";

const Header: FC = () => {
    const [headerMenu, setHeaderMenu] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { language } = useAppSelector(state => state.language);

    return (
        <>
            <div className={s.container}>
                <div className={s.logo}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke='#fff'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <p>Stay Safe Ukraine</p>
                </div>
                <nav className={s.navbar}>
                    <a href="#B2">Projects</a>
                    <a href="#B3">News</a>
                    <a href="#B7">Partners</a>
                    <button onClick={() => dispatch(changeLanguage(language === 'EN' ? 'UA' : 'EN'))}>{language}</button>
                    <a href="#B5">Donate</a>
                </nav>
                <div className={s.burger} onClick={() => setHeaderMenu(prev => !prev)}>
                    <div className={`${s.slice} ${s.slice1} ${headerMenu ? s.clicked : s.unclicked}`} />
                    <div className={`${s.slice} ${s.slice2} ${headerMenu ? s.clicked : s.unclicked}`} />
                    <div className={`${s.slice} ${s.slice3} ${headerMenu ? s.clicked : s.unclicked}`} />
                </div>
            </div>
            <HeaderMenu menuActive={headerMenu} />
        </>
    );
};

export default Header;