import {FC, useEffect, useState} from 'react';
import AdminService from "@/services/AdminService";
import {IProject} from "@/models";
import ProjectsList from "@/components/AdminPage/AdminComponents/Projects/ProjectsList/ProjectsList";
import ProjectAdd from "@/components/AdminPage/AdminComponents/Projects/ProjectAdd/ProjectAdd";

const Projects: FC = () => {
    const fetchProjects = async () => {
        const projects = await AdminService.GetProjects();
        setProjects(projects);
    }

    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {fetchProjects()}, []);

    return (
        <div>
            <ProjectsList projects={projects} fetchProjects={fetchProjects} />
            <ProjectAdd fetchProjects={fetchProjects} />
        </div>
    );
};

export default Projects;