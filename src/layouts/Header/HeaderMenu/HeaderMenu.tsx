import {FC} from 'react';
import s from './HeaderMenu.module.scss';
import {changeLanguage} from "@/redux/Slices/LanguageSlice";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/redux/store";
import path from "path";

interface HeaderMenuProps {
    menuActive: boolean
}
const HeaderMenu: FC<HeaderMenuProps> = ({  menuActive }) => {
    const dispatch = useDispatch();
    const { language } = useAppSelector(state => state.language);

    return (
        <div className={`${s.container} ${menuActive ? s.active : s.notActive}`}>
            <a href="#B2">Projects</a>
            <a href="#B3">News</a>
            <a href="#B4">Statistic</a>
            <a href="#B7">Partners</a>
            <button onClick={() => {
                    dispatch(changeLanguage(language === 'EN' ? 'UA' : 'EN'));
                    //TODO: Добавить условине для смены URL с EN на UA и наоборот
                }
            }>
                {language}</button>
            <a href="#B5">Donate</a>
        </div>
    );
};

export default HeaderMenu;