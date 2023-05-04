import {FC} from 'react';
import {UserDTO} from "@/models/user";
import s from './AdminsList.module.scss';
import admin from "@/pages/admin";
import AdminItem from "@/components/AdminPage/AdminComponents/Admins/AdminsList/AdminItem/AdminItem";

interface AdminsListProps {
    admins: UserDTO[];
    fetchAdmins: () => Promise<void>;
}

const AdminsList: FC<AdminsListProps> = ({ admins, fetchAdmins }) => {
    return (
        <div className={s.container}>
            {
                admins.map(admin => <AdminItem admin={admin} fetchAdmins={fetchAdmins} />)
            }
        </div>
    );
};

export default AdminsList;
