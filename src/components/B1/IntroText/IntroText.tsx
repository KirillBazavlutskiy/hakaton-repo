import {FC} from "react";
import s from './IntroText.module.scss';
const IntroText: FC = () => {
    return (
        <div className={s.container}>
            <h1>
                Support the Ukrainian <br/> Army, territorial defense <br/> fighters, refugees, <br/> hospitals, animals shelters
            </h1>
        </div>
    );
};

export default IntroText;