import {FC, useState} from 'react';
import AdminService from "@/services/AdminService";
import s from './AdminAdd.module.scss';

interface AdminAddProps {
    fetchAdminsList: () => Promise<void>;
}

const AdminAdd: FC<AdminAddProps> = ({ fetchAdminsList }) => {

    const [password, setPassword] = useState<string>('');

    return (
        <form onSubmit={async (event) => {
            event.preventDefault();
            await AdminService.AddAdmin(password);
            await fetchAdminsList();
            setPassword('');
        }} className={s.addAdminForm}>
            <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="text"
            />
            <button type='submit'>Додати адміна</button>
        </form>
    );
};

export default AdminAdd;