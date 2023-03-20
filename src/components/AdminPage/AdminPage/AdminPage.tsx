import {FC} from "react";
import s from './AdminPage.module.scss';
import Projects from "@/components/AdminPage/AdminComponents/Projects/Projects";

const AdminPage: FC = () => {
    return (
        <div className={s.container}>
            <Projects />
        </div>
    );
};

export default AdminPage;