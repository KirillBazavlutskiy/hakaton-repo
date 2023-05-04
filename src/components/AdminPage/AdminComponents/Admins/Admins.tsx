import {FC, useEffect, useState} from 'react';
import {UserDTO} from "@/models/user";
import AdminService from "@/services/AdminService";
import s from './Admins.module.scss';
import AdminsList from "@/components/AdminPage/AdminComponents/Admins/AdminsList/AdminsList";
import AdminsAdd from "@/components/AdminPage/AdminComponents/Admins/AdminAdd/AdminsAdd";

const Admins: FC = () => {

    const fetchAdmins = async () => {
        const data = await AdminService.FetchUsers('Admin');
        setAdmins(data);
    }

    const [admins, setAdmins] = useState<UserDTO[]>([])

    useEffect(() => {
        fetchAdmins();
    }, [])

    return (
        <div className={s.container}>
            <h1>Admins</h1>
            <AdminsList admins={admins} fetchAdmins={fetchAdmins} />
            <AdminsAdd fetchAdmins={fetchAdmins} />
        </div>
    );
};

export default Admins;
