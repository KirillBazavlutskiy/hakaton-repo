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
                <div className={s.info}>
                    <div className={s.text}>
                        <ul>
                            <li>Ukrainian military</li>
                            <li>Forced migrants</li>
                            <li>Children</li>
                            <li>Hospitals</li>
                            <li>Shelters for animals</li>
                            <li>Shelters for vulnerable people</li>
                        </ul>
                        <a href="#" className={s.btn}>Help us maintain the valanteer fund</a>
                    </div>
                    <div className={s.img}></div>
                </div>
            </div>
        </div>
    );
};

export default IntroText;