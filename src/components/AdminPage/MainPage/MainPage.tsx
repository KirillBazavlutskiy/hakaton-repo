import {FC} from "react";
import s from './MainPage.module.scss';
import Projects from "@/components/AdminPage/AdminComponents/Projects/Projects";
import {Translation} from "@/models/text";
import MainScreen from "@/components/AdminPage/AdminComponents/MainScreen/MainScreen";

interface AdminPageProps {
    Translation: Translation;
}

const MainPage: FC<AdminPageProps> = ({ Translation }) => {
    return (
        <div className={s.container}>
            <MainScreen />
            <Projects />
        </div>
    );
};

export default MainPage;
