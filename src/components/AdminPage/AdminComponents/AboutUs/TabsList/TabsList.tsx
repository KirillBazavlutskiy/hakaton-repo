import React, {Dispatch, FC, SetStateAction} from 'react';
import s from './TabsList.module.scss';
import cn from "classnames";

interface TabsListProps {
    activeSection: number;
    setActiveSection: Dispatch<SetStateAction<number>>;
    activeLanguage: "EN" | "UA";
    setActiveLanguage: Dispatch<SetStateAction<"EN" | "UA">>;
}

const TabsList: FC<TabsListProps> =
    ({
         activeSection,
         setActiveSection,
         activeLanguage,
         setActiveLanguage
    }) => (
        <div className={s.tabsList}>
            <div className={s.btns}>
                <div className={s.mainSectionTabs}>
                    <button className={activeSection === 3 ? s.activeTab : ""} onClick={() => setActiveSection(3)}>Main Text</button>
                    <button className={activeSection === 4 ? s.activeTab : ""} onClick={() => setActiveSection(4)}>Button Text</button>
                </div>
                <div className={s.aboutUsSectionTabs}>
                    <button className={activeSection === 0 ? s.activeTab : ""} onClick={() => setActiveSection(0)}>About Us</button>
                    <button className={activeSection === 1 ? s.activeTab : ""} onClick={() => setActiveSection(1)}>Mission</button>
                    <button className={activeSection === 2 ? s.activeTab : ""} onClick={() => setActiveSection(2)}>Value</button>
                </div>
            </div>
            <div className={s.languageSwitcher}>{
                ["EN", "UA"].map(l =>
                    <button
                        key={l}
                        className={cn(s.localeButton, activeLanguage === l ? s.active : s.notActive)}
                        onClick={() => setActiveLanguage(l === "EN" ? "EN" : "UA")}
                    >{l.toUpperCase()}</button>)
            }</div>
        </div>
    );

export default TabsList;
