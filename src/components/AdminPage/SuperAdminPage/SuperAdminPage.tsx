import {FC} from 'react';
import s from './SuperAdminPage.module.scss';

import Admins from "@/components/AdminPage/AdminComponents/Admins/Admins";
import Projects from "@/components/AdminPage/AdminComponents/Projects/Projects";
import MainScreen from "@/components/AdminPage/AdminComponents/MainScreen/MainScreen";
import {Translation} from "@/models/text";

interface SuperAdminPageProps {
    Translation: Translation;
}

const SuperAdminPage: FC<SuperAdminPageProps> = ({ Translation }) => {
    return (
        <div className={s.container}>
            <Admins />
            <MainScreen  />
            <Projects />
        </div>
    );
};

export default SuperAdminPage;