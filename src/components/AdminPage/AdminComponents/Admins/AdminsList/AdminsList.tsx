import {FC} from "react";
import s from './AdminsList.module.scss';

interface AdminsListProps {
    admins: string[],
}

const AdminsList: FC<AdminsListProps> = ({ admins }) => {
    return (
        <div className={s.adminsList}>
            {
                admins.map(a => <p key={a}>{a}</p>)
            }
        </div>
    );
};

export default AdminsList;