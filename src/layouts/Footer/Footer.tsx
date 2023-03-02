import Image from "next/image";

import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { changeLanguage } from "@/redux/Slices/LanguageSlice";

import s from './Footer.module.scss';
import cn from 'classnames';

import Logo from "../../images/logo-min.png";
import Telegram from "../../images/telegram.png";
import Instagram from "../../images/instagram.png";

interface FooterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export function Footer({ className, ...props }: FooterProps): JSX.Element {
    const dispatch = useDispatch();
    const { language } = useAppSelector(state => state.language);

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
                    <a href='#'>
                        <Image src={Instagram} alt="instagram-icon" />
                    </a>
                    <a href='mailto:info@staysafe.in.ua'>info@staysafe.in.ua</a>
                </div>
                <div className={s.functionalBlock}>
                    <button onClick={() => dispatch(changeLanguage(language === 'en' ? 'ua' : 'en'))}>{language}</button>
                    <a href="#B56">Donate</a>
                </div>
            </div>
        </footer>
    );
};