import { FC } from "react";
import s from './IntroText.module.scss';
import { useAppSelector } from "@/redux/store";
import { localisation } from "../../../localisation";
const IntroText: FC = () => {

    const { language } = useAppSelector(state => state.language);

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h1>Our mission is to keep the volunteer front of Ukraine. Carry humanitarian mission to ensure the necessary:</h1>
                <div className={s.listBlock}>
                    <ul>
                        <li>ukrainian&nbsp;military</li>
                        <li>forced migrants</li>
                        <li>children</li>
                        <li>hospitals</li>
                        <li>shelters for animals and vulnerable people.</li>
                    </ul>
                    <div className={s.img}></div>
                </div>
                <a href="#" className={s.btn}>Help us maintain the valanteer fund</a>
            </div>
        </div>
    );
};

export default IntroText;