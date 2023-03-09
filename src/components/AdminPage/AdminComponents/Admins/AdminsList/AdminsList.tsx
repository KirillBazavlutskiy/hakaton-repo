import {FC} from "react";
import s from './AdminsList.module.scss';

interface AdminsListProps {
    admins: string[],
}

const AdminsList: FC<AdminsListProps> = ({ admins }) => {
    return (
        <div className={s.adminsList}>
            {
                admins.map(a => <span key={a}>{a}</span>)
            }
        </div>
    );
};

export default AdminsList;