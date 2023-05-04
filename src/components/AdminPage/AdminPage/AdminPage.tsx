import {FC} from "react";
import s from './AdminPage.module.scss';
import Projects from "@/components/AdminPage/AdminComponents/Projects/Projects";
import {Translation} from "@/models/text";

interface AdminPageProps {
    Translation: Translation;
}

const AdminPage: FC<AdminPageProps> = ({ Translation }) => {
    return (
        <div className={s.container}>
            <Projects />
        </div>
    );
};

export default AdminPage;