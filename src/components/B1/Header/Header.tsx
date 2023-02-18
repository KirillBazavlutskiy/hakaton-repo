import {FC, useState} from 'react';
import s from './Header.module.scss';
import HeaderMenu from "@/components/B1/Header/HeaderMenu/HeaderMenu";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/redux/store";
import {changeLanguage} from "@/redux/Slices/LanguageSlice";
import Logo from "../../../images/logo.png";
import Image from "next/image";

const Header: FC = () => {
    const [headerMenu, setHeaderMenu] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { language } = useAppSelector(state => state.language);

    return (
        <>
            <div className={s.container}>
                <div className={s.logo}>
                    <Image src={Logo} alt="logo"/>
                </div>
                <nav className={s.navbar}>
                    <a href="#B2">Projects</a>
                    <a href="#B3">News</a>
                    <a href="#B7">Partners</a>
                    <button onClick={() => dispatch(changeLanguage(language === 'en' ? 'ua' : 'en'))}>{language}</button>
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