import {FC} from 'react';
import s from './SuperAdmin.module.scss';
import Admins from "@/components/AdminPage/AdminComponents/Admins/Admins";
import Projects from "@/components/AdminPage/AdminComponents/Projects/Projects";

const SuperAdmin: FC = () => {
    return (
        <div className={s.container}>
            <Admins />
            <Projects />
        </div>
    );
};

export default SuperAdmin;