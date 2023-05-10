import styles from './AboutUs.module.scss';
import {FC} from "react";
import {AboutUs} from "@/models/text";
import {useState} from "react";

interface AboutUsProps {
    languageProps: AboutUs;
}

const AboutUs:FC<AboutUsProps> = ({languageProps}) => {

    const [activeBtn, setActiveBtn] = useState<number>(0)
    return (
        <div className={styles.wrapper}>
            <button onClick={() => activeBtn === 0 ? setActiveBtn(1) : setActiveBtn(0)}>
                {activeBtn === 1 ? "Close block" : "Open block"}
            </button>
            <div className={activeBtn === 1 ? styles.container : styles.shamil}>
                <div className={styles.aboutUs}>
                    <h1>{languageProps.about__title}</h1>
                    <p>
                        {languageProps.about__text}
                    </p>
                </div>
                <div className={styles.mission}>
                    <h1>{languageProps.mission__title}</h1>
                    <p>
                        {languageProps.mission__text}
                    </p>
                </div>
                <div className={styles.value}>
                    <h1>{languageProps.value__title}</h1>
                    <p>
                        {languageProps.value__text}
                    </p>
                </div>
                <div className={styles.emptyBlock}></div>
            </div>
        </div>
    );
};

export default AboutUs;