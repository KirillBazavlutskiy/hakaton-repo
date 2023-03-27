import Image from "next/image";
import cn from 'classnames';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';

import s from './Footer.module.scss';

import Logo from "../../images/logo-min.png";
import Telegram from "../../images/telegram.png";
import Instagram from "../../images/instagram.png";

interface FooterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export function Footer({ className, ...props }: FooterProps): JSX.Element {
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
                    <LanguageSwitcher />
                    <a href="#B56">Donate</a>
                </div>
            </div>
        </footer>
    );
};