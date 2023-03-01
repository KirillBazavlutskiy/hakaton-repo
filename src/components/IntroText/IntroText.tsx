import { FC } from "react";
import s from './IntroText.module.scss';
import { useAppSelector } from "@/redux/store";
import { localisation } from "../../../localisation";
const IntroText: FC = () => {

    const { language } = useAppSelector(state => state.language);

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h1>
                    Support the Ukrainian Army, territorial defense fighters, refugees, hospitals, animal shelters ❤️
                </h1>
            </div>
        </div>
    );
};

export default IntroText;