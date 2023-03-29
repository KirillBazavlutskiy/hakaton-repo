import {FC} from 'react';
import s from './SuperAdminPage.module.scss';
import Admins from "@/components/AdminPage/AdminComponents/Admins/Admins";
import Projects from "@/components/AdminPage/AdminComponents/Projects/Projects";

const SuperAdminPage: FC = () => {
    return (
        <div className={s.container}>
            <Admins />
            <Projects />
        </div>
    );
};

export default SuperAdminPage;