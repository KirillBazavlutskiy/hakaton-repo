import { FC, useState } from 'react';
import Image from "next/image";
import cn from "classnames";

import HeaderMenu from "./HeaderMenu/HeaderMenu";
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';

import s from './Header.module.scss';
import Logo from "@/images/logo.png";
import {HeaderText} from "@/models/text";


interface HeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    headerText: HeaderText;
}

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
    const [headerMenu, setHeaderMenu] = useState<boolean>(false);

    return (
        <header className={cn(s.wrapper, className)} {...props}>
            <div className={cn(s.container)}>
                <div className={s.logo}>
                    <Image src={Logo} alt="logo" />
                </div>
                <nav className={s.navbar}>
                    <div className={s.menu}>
                        <a href="#B2">{props.headerText.projects}</a>
                        <a href="#B3">{props.headerText.news}</a>
                        <a href="#B4">{props.headerText.news}</a>
                        <a href="#B7">{props.headerText.statistic}</a>
                    </div>
                    <LanguageSwitcher />
                    <a href="#B56" className={s.donate}>{props.headerText.donate}</a>
                </nav>
                <div className={s.burger} onClick={() => setHeaderMenu(prev => !prev)}>
                    <div
                        className={cn(s.slice, s.slice1, {
                            [s.clicked]: headerMenu,
                            [s.unclicked]: !headerMenu
                        })}
                    />
                    <div
                        className={cn(s.slice, s.slice2, {
                            [s.clicked]: headerMenu,
                            [s.unclicked]: !headerMenu
                        })}
                    />
                    <div
                        className={cn(s.slice, s.slice3, {
                            [s.clicked]: headerMenu,
                            [s.unclicked]: !headerMenu
                        })}
                    />
                </div>
            </div>
            <HeaderMenu menuActive={headerMenu} headerText={props.headerText} />
        </header>
    );
};