import {useEffect, FC, useState} from 'react';
import AdminService from "@/services/AdminService";
import {IProject} from "@/models";
import s from './SuperAdmin.module.scss';
import Admins from "@/components/AdminPage/AdminComponents/Admins/Admins";
import Projects from "@/components/AdminPage/AdminComponents/Projects/Projects";

const SuperAdmin: FC = () => {

    const fetchAdminInfo = async () => {
        const projects = await AdminService.GetProjects();
        setProjects(projects);
    }

    const [projects, setProjects] = useState<IProject[]>([]);
    const [project, setProject] = useState({
        name: '',
        description_EN: '',
        description_UA: '',
        imageUrl: '',
    });

    useEffect(() => {
        fetchAdminInfo();
    }, [])

    return (
        <div className={s.container}>
            <Admins />
            <Projects />
        </div>
    );
};

export default SuperAdmin;