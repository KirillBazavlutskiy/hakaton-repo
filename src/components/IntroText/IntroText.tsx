import { FC } from "react";
import s from './IntroText.module.scss';
import {MainText} from "@/models/text";

interface IntroTextProps {
    MainText: MainText;
}

const IntroText: FC<IntroTextProps> = ({ MainText }) => {

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h1>{MainText}</h1>
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