import {FC, useEffect, useState} from 'react';
import AdminService from "@/services/AdminService";
import {IProjectPrivate} from "@/models/data";
import ProjectsList from "@/components/AdminPage/AdminComponents/Projects/ProjectsList/ProjectsList";
import ProjectAdd from "@/components/AdminPage/AdminComponents/Projects/ProjectAdd/ProjectAdd";
import s from './Projects.module.scss';

const Projects: FC = () => {
    const fetchProjects = async () => {
        const projects = await AdminService.GetProjectsPrivate();
        setProjects(projects);
    }

    const [projects, setProjects] = useState<IProjectPrivate[]>([]);

    useEffect(() => {fetchProjects()}, []);

    return (
        <div className={s.container}>
            <h1>Our Projects</h1>
            <ProjectsList projects={projects} fetchProjects={fetchProjects} />
        </div>
    );
};

export default Projects;
