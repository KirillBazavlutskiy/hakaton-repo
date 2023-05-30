import {FC} from "react";
import s from './MainPage.module.scss';
import AboutUs from "@/components/AdminPage/AdminComponents/AboutUs/AboutUs";
import Projects from "@/components/AdminPage/AdminComponents/Projects/Projects";
import Options from "@/components/AdminPage/AdminComponents/Options/Options";
import OurPartners from "@/components/AdminPage/AdminComponents/OurPartners/OurPartners";
import OurTeam from "@/components/AdminPage/AdminComponents/OurTeam/OurTeam";
import Admins from "@/components/AdminPage/AdminComponents/Admins/Admins";
import HelpOffersList from "@/components/AdminPage/AdminComponents/HelpOffers/HelpOffersList";

const MainPage: FC = () => {
    return (
        <div className={s.container}>
            <AboutUs />
            <Projects />
            <Options />
            <OurTeam />
            <OurPartners />
            <Admins />
            <HelpOffersList />
        </div>
    );
};

export default MainPage;
