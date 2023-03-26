import Image from "next/image";

import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { changeLanguage } from "@/redux/Slices/LanguageSlice";

import s from './Footer.module.scss';
import cn from 'classnames';

import Logo from "../../images/logo-min.png";
import Telegram from "../../images/telegram.png";
import Instagram from "../../images/instagram.png";
import { useState } from 'react';

interface FooterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export function Footer({ className, ...props }: FooterProps): JSX.Element {
    const [arrowStatus, setArrowStatus] = useState<'active' | 'not-active'>('not-active');
    const dispatch = useDispatch();
    const { language } = useAppSelector(state => state.language);

    const arrowHandler = () => {
        let arrow = document.getElementById("arrow-footer");
        let droppedBox = document.getElementById("droppedBox-footer");
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
        <footer className={cn(s.wrapper, className)} {...props}>
            <div className={cn(s.container)}>
                <div className={s.side}>
                    <Image src={Logo} alt="logo" />
                    <a href='#'>Privacy Policy</a>
                </div>
                <div className={s.contacts}>
                    <a href='#'>
                        <Image src={Telegram} alt="telegram-icon" />
                    </a>
                    <a href='https://www.instagram.com/stay.safe.ukraine/'>
                        <Image src={Instagram} alt="instagram-icon" />
                    </a>
                    <a href='mailto:info@staysafe.in.ua'>info@staysafe.in.ua</a>
                </div>
                <div className={s.functionalBlock}>
                <div className={s.lang} onClick={arrowHandler}>
                        <span className={s.text}>
                            {language}
                        </span>
                        <span
                            id="droppedBox-footer"
                            className={s.droppedBox}
                            onClick={() => dispatch(changeLanguage(language === 'EN' ? 'UA' : 'EN'))}
                        >
                            {language == 'EN' ? 'UA' : 'EN'}
                        </span>
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" id="arrow-footer">
                            <path d="M1 1.77736L8 8.73283C10.7337 6.01655 12.2663 4.49364 15 1.77736" stroke="#E5E5E5" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                    <a href="#B56">Donate</a>
                </div>
            </div>
        </footer>
    );
};