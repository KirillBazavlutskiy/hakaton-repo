import { useState } from 'react';
import cn from "classnames";

import HeaderMenu from "./HeaderMenu/HeaderMenu";

import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { changeLanguage } from "@/redux/Slices/LanguageSlice";

import s from './Header.module.scss';
import Logo from "../../images/logo.png";
import Image from "next/image";


interface HeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export function Header({ className, ...props }: HeaderProps): JSX.Element {
    const [headerMenu, setHeaderMenu] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { language } = useAppSelector(state => state.language);

    return (
        <header className={cn(s.wrapper, className)} {...props}>
            <div className={cn(s.container)}>
                <div className={s.logo}>
                    <Image src={Logo} alt="logo" />
                </div>
                <nav className={s.navbar}>
                    <a href="#B2">Projects</a>
                    <a href="#B3">News</a>
                    <a href="#B4">✅</a>
                    <a href="#B7">Partners</a>
                    <button onClick={() => dispatch(changeLanguage(language === 'en' ? 'ua' : 'en'))}>{language}</button>
                    <a href="#B56">Donate</a>
                </nav>
                <div className={s.burger} onClick={() => setHeaderMenu(prev => !prev)}>
                    <div
                        className={cn(s.slice, s.slice1, {
                            [s.clicked]: headerMenu == true,
                            [s.unclicked]: headerMenu == false
                        })}
                    />
                    <div
                        className={cn(s.slice, s.slice2, {
                            [s.clicked]: headerMenu == true,
                            [s.unclicked]: headerMenu == false
                        })}
                    />
                    <div
                        className={cn(s.slice, s.slice3, {
                            [s.clicked]: headerMenu == true,
                            [s.unclicked]: headerMenu == false
                        })}
                    />
                </div>
            </div>
            <HeaderMenu menuActive={headerMenu} />
        </header>
    );
};