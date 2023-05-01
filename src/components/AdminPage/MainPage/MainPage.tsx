import {FC} from "react";
import s from './MainPage.module.scss';
import {Translation} from "@/models/text";
import MainScreen from "@/components/AdminPage/AdminComponents/MainScreen/MainScreen";
import AboutUs from "@/components/AdminPage/AdminComponents/AboutUs/AboutUs";
import Mission from "@/components/AdminPage/AdminComponents/Mission/Mission";
import Value from "@/components/AdminPage/AdminComponents/Value/Value";
import Projects from "@/components/AdminPage/AdminComponents/Projects/Projects";
import Options from "@/components/AdminPage/AdminComponents/Options/Options";

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
        </div>
    );
};

export default MainPage;
