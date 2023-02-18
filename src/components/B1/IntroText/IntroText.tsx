import {FC} from "react";
import s from './IntroText.module.scss';
import {useAppSelector} from "@/redux/store";
import {localisation} from "../../../../localisation";
const IntroText: FC = () => {

    const { language } = useAppSelector(state => state.language);

    return (
        <div className={s.container}>
            <h1>
                {localisation.firstH1Text[language]}
                Support the Ukrainian <br/> Army, territorial defense <br/> fighters, refugees, <br/> hospitals, animals shelters
            </h1>
        </div>
    );
};

export default IntroText;