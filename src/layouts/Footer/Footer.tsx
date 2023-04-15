import Image from "next/image";
import cn from 'classnames';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';

import s from './Footer.module.scss';

import Logo from "../../images/logo-min.png";
import Instagram from "../../images/icons/instagram.svg";
import Facebook from '../../images/icons/facebook.svg';
import {BottomText} from "@/models/text";

interface FooterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    footerText: BottomText;
}

export function Footer({ className, ...props }: FooterProps): JSX.Element {
    return (
        <footer className={cn(s.wrapper, className)} {...props}>
            <div className={cn(s.container)}>
                <div className={s.side}>
                    <Image src={Logo} alt="logo" />
                    <a href='#'>{props.footerText.privacyPolicy}</a>
                </div>
                <div className={s.contacts}>
                    <a className={s.icon} href='https://www.facebook.com/staysafe.in.ua' target="_blank">
                        <Image src={Facebook} alt="facebook-icon" />
                    </a>
                    <a className={s.icon} href='https://www.instagram.com/stay.safe.ukraine/' target="_blank">
                        <Image src={Instagram} alt="instagram-icon" />
                    </a>
                    <a className={s.mail} href='mailto:info@staysafe.in.ua' target="_blank">info@staysafe.in.ua</a>
                </div>
                <div className={s.functionalBlock}>
                    <LanguageSwitcher />
                    <a className={s.donate} href="#B56">{props.footerText.donateButton}</a>
                </div>
            </div>
        </footer>
    );
};