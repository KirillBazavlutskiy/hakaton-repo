import {FC} from "react";
import s from './MainPage.module.scss';
import {Translation} from "@/models/text";
import MainScreen from "@/components/AdminPage/AdminComponents/MainScreen/MainScreen";
import AboutUs from "@/components/AdminPage/AdminComponents/AboutUs/AboutUs";
import Mission from "@/components/AdminPage/AdminComponents/Mission/Mission";
import Value from "@/components/AdminPage/AdminComponents/Value/Value";
import Projects from "@/components/AdminPage/AdminComponents/Projects/Projects";
import Options from "@/components/AdminPage/AdminComponents/Options/Options";
import OurPartners from "@/components/AdminPage/AdminComponents/OurPartners/OurPartners";
import OurTeam from "@/components/AdminPage/AdminComponents/OurTeam/OurTeam";
import Admins from "@/components/AdminPage/AdminComponents/Admins/Admins";
import HelpOffersList from "@/components/AdminPage/AdminComponents/HelpOffers/HelpOffersList";

interface AdminPageProps {
    Translation: Translation;
}

const MainPage: FC<AdminPageProps> = ({ Translation }) => {
    return (
        <div className={s.container}>
            <MainScreen />
            <AboutUs />
            <Mission />
            <Value />
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
