import {FC, useState} from 'react';
import s from './HeaderMenu.module.scss';
import {HeaderText} from "@/models/text";
import {useRouter} from "next/router";
import Link from "next/link";
import cn from "classnames";

interface HeaderMenuProps {
    menuActive: boolean
    headerText: HeaderText;
}
const HeaderMenu: FC<HeaderMenuProps> = ({  menuActive, headerText }) => {

    const { locale, locales } = useRouter();
    const [languageSelector, setLanguageSelector] = useState<boolean>(false);

    return (
        <div className={`${s.container} ${menuActive ? s.active : s.notActive}`}>
            <a href="#B2">{headerText.projects}</a>
            <a href="#B3">{headerText.news}</a>
            <a href="#B4">{headerText.news}</a>
            <a href="#B7">{headerText.statistic}</a>
            <div className={s.languageSelector}>{
                    locales?.filter(l => l !== locale)
                        .map(l => <Link key={l} href='/' locale={l} className={s.text}>{l?.toUpperCase()}</Link>)
            }</div>
            <a href="#B5">{headerText.donate}</a>
        </div>
    );
};

export default HeaderMenu;
