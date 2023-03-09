import {FC} from "preact/compat";
import {GetServerSideProps, GetStaticProps, InferGetStaticPropsType} from "next/types";
import s from './Admins.module.scss';

import AdminsList from "./AdminsList/AdminsList";
import AdminAdd from "./AdminAdd/AdminAdd";
import AdminService from "@/services/AdminService";
import {useEffect, useState} from "react";

const Admins: FC = () => {

    const [adminsList, setAdminsList] = useState<string[]>([]);

    const fetchAdminsList = async () => {
        const admins = await AdminService.GetAdmins();
        setAdminsList(admins);
    }

    useEffect(() => {fetchAdminsList()}, [])

    return (
        <div className={s.admins}>
            <h2>Паролі адмінів:</h2>
            <AdminsList admins={adminsList} />
            <AdminAdd fetchAdminsList={fetchAdminsList} />
        </div>
    );
};

export default Admins;