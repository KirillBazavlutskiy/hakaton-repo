import { FC, useState } from 'react';
import cn from "classnames";

import HeaderMenu from "./HeaderMenu/HeaderMenu";

import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { changeLanguage } from "@/redux/Slices/LanguageSlice";

import s from './Header.module.scss';
import Logo from "../../images/logo.png";
import Image from "next/image";


interface HeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
    const [headerMenu, setHeaderMenu] = useState<boolean>(false);
    const [arrowStatus, setArrowStatus] = useState<'active' | 'not-active'>('not-active');
    const dispatch = useDispatch();
    const { language } = useAppSelector(state => state.language);

    const arrowHandler = () => {
        let arrow = document.getElementById("arrow");
        let droppedBox = document.getElementById("droppedBox");
        if (arrow == null) {
            return null;
        }
        if (droppedBox == null) {
            return null;
        }

        if (arrowStatus == 'not-active') {
            arrow.style.transform = "rotate(180deg)";
            droppedBox.style.display = "flex";
            setArrowStatus('active');
        } else {
            arrow.style.transform = "rotate(0deg)";
            droppedBox.style.display = "none";
            setArrowStatus('not-active');
        }
    }

    return (
        <header className={cn(s.wrapper, className)} {...props}>
            <div className={cn(s.container)}>
                <div className={s.logo}>
                    <Image src={Logo} alt="logo" />
                </div>
                <nav className={s.navbar}>
                    <div className={s.menu}>
                        <a href="#B2">Projects</a>
                        <a href="#B3">News</a>
                        <a href="#B4">Statistic</a>
                        <a href="#B7">Partners</a>
                    </div>
                    <div className={s.lang} onClick={arrowHandler}>
                        <span className={s.text}>
                            {language}
                        </span>
                        <span
                            id="droppedBox"
                            className={s.droppedBox}
                            onClick={() => dispatch(changeLanguage(language === 'EN' ? 'UA' : 'EN'))}
                        >
                            {language == 'EN' ? 'UA' : 'EN'}
                        </span>
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" id="arrow">
                            <path d="M1 1.77736L8 8.73283C10.7337 6.01655 12.2663 4.49364 15 1.77736" stroke="#E5E5E5" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                    <a href="#B56" className={s.donate}>Donate</a>
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