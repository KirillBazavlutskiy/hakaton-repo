import {FC, useEffect, useState} from 'react';
import AdminService from "@/services/AdminService";
import {Option} from "@/models/data";

import s from './AboutUs.module.scss';
import Button from "@/components/AdminPage/AdminComponents/AdminUI/Button/Button";
import cn from "classnames";
import TabsList from "@/components/AdminPage/AdminComponents/AboutUs/TabsList/TabsList";

export interface AboutUsOptionsStateType {
    EN: Option[];
    UA: Option[];
}

let AboutUsOptionsStateDefault: AboutUsOptionsStateType = {
    EN: [],
    UA: []
}

const AboutUs: FC = () => {

    const [
        aboutUsOptions,
        setAboutUsOptions
    ] = useState<AboutUsOptionsStateType>(AboutUsOptionsStateDefault);

    const [
        aboutUsOptionsDefault,
        setAboutUsOptionsDefault
    ] = useState<AboutUsOptionsStateType>(AboutUsOptionsStateDefault);

    const [ activeSection, setActiveSection ] = useState<number>(0);
    const [ activeLanguage, setActiveLanguage ] = useState<"EN" | "UA">("EN");

    const fetchAboutUsOptions = async () => {
        const optionsEN = await AdminService.GetOptionsForAboutUsSection("EN");
        const optionsUA = await AdminService.GetOptionsForAboutUsSection("UA");

        setAboutUsOptions({ EN: optionsEN, UA: optionsUA });
        setAboutUsOptionsDefault({ EN: optionsEN, UA: optionsUA });
    }

    useEffect(() => { fetchAboutUsOptions() }, []);

    return (
        <div className={s.container}>
            <TabsList
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                activeLanguage={activeLanguage}
                setActiveLanguage={setActiveLanguage}
            />
            <div className={s.valuesList}>{
                    aboutUsOptions[activeLanguage].map((option, index) => (
                        <textarea
                            key={option.name}
                            className={activeSection === index ? "block" : "hidden"}
                            value={option.value}
                            onChange={(e) => {
                                const newOptions = JSON.parse(JSON.stringify(aboutUsOptions));
                                newOptions[activeLanguage][activeSection].value = e.target.value;
                                setAboutUsOptions(newOptions);
                            }}
                        />
                    ))
            }</div>
            <div className={s.btnsGeneral}>
                <Button color={"yellow"} size={"small"} onClick={() => setAboutUsOptions(aboutUsOptionsDefault)}>Reset</Button>
                <Button color={"blue"} size={"small"} onClick={() => AdminService.SetOptionsForAboutSection(aboutUsOptions)}>Save</Button>
            </div>
        </div>
    );
};

export default AboutUs;
