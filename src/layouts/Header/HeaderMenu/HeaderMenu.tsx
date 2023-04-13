import {FC} from 'react';
import s from './HeaderMenu.module.scss';
import {changeLanguage} from "@/redux/Slices/LanguageSlice";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/redux/store";
import path from "path";
import {HeaderText} from "@/models/text";

interface HeaderMenuProps {
    menuActive: boolean
    headerText: HeaderText;
}
const HeaderMenu: FC<HeaderMenuProps> = ({  menuActive, headerText }) => {
    const dispatch = useDispatch();
    const { language } = useAppSelector(state => state.language);

    return (
        <div className={`${s.container} ${menuActive ? s.active : s.notActive}`}>
            <a href="#B2">{headerText.projects}</a>
            <a href="#B3">{headerText.news}</a>
            <a href="#B4">{headerText.news}</a>
            <a href="#B7">{headerText.statistic}</a>
            <button onClick={() => {
                    dispatch(changeLanguage(language === 'en' ? 'ua' : 'en'));
                    //TODO: Добавить условине для смены URL с EN на UA и наоборот
                }
            }>
                {language}</button>
            <a href="#B5">{headerText.donate}</a>
        </div>
    );
};

export default HeaderMenu;
