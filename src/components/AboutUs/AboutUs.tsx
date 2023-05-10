import styles from './AboutUs.module.scss';
import {FC} from "react";
import {AboutUs} from "@/models/text";
import {useState, useEffect} from "react";
import button from "@/components/AdminPage/AdminComponents/AdminUI/Button/Button";

interface AboutUsProps {
    languageProps: AboutUs;
}

const AboutUs:FC<AboutUsProps> = ({languageProps}) => {

    //Variable for set active block
    const [activeBtn, setActiveBtn] = useState<number>(0)

    //Array with all info
    const [array, setArray] = useState([
        { name: languageProps.about__title, text: languageProps.about__text },
        { name: languageProps.mission__title, text: languageProps.mission__text },
        { name: languageProps.value__title, text: languageProps.value__text }
    ]);

    useEffect(() => {
        // Update the array with new language data
        setArray([
            { name: languageProps.about__title, text: languageProps.about__text },
            { name: languageProps.mission__title, text: languageProps.mission__text },
            { name: languageProps.value__title, text: languageProps.value__text }
        ]);
    }, [languageProps]); // Add languageProps as a dependency

    return (
        <div className={styles.wrapper}>
            <div className={styles.btnList}>
                {
                    array.map((res:any, index:number) =>
                        <button
                            className={activeBtn === index ? styles.activeBtn : styles.notActiveBtn}
                            onClick={() => setActiveBtn(index)}>
                            {res.name}
                        </button>
                    )
                }
            </div>
            <div className={styles.container}>
                {
                    array.map((res:any, index:number) =>
                        <div className={activeBtn === index ? styles.block : styles.shamil}>
                            <h1>{res.name}</h1>
                            <p>
                                {res.text}
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AboutUs;