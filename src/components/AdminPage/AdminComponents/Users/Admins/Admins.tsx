import {FC, useEffect, useState} from 'react';
import s from './Admins.module.scss';
import {UserDTO} from "@/models/user";
import AdminHooks from "@/components/AdminPage/hooks";
import AdminService from "@/services/AdminService";

const Admins: FC = () => {

    const [admin, setAdmins] = useState<UserDTO[]>([]);

    useEffect(() => {
        AdminHooks.fetchData(() => AdminService.fetchMembers(0, 100, 'Admin'), setAdmins)
    }, [])

    return (
        <div className={s.container}>

        </div>
    );
};

export default Admins;
